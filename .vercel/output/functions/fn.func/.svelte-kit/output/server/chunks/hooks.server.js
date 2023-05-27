import chalk from "chalk";
import { g as get } from "./api.js";
const styles = {
  tomato: chalk.hex("#000000").bgHex("#ff6347"),
  aqua: chalk.hex("#000000").bgHex("#7ffd4"),
  white: chalk.hex("#000000").bgHex("#ffffff"),
  black: chalk.hex("#ffffff").bgHex("#000000")
};
const log = {
  hooks(text) {
    console.log(styles.tomato(text));
  },
  layout(text) {
    console.log(styles.aqua(text));
  },
  page(text) {
    console.log(styles.white(text));
  },
  endpoint(text) {
    console.log(styles.black(text));
  },
  bold(text) {
    console.log(chalk.bold(text));
  }
};
const handle = async ({ event, resolve }) => {
  log.bold(`📣 SE ESTÁ HACIENDO UNA NUEVA SOLICITUD DESDE ${event.url.pathname}`);
  try {
    const jwt = event.cookies.get("jwt");
    const decodedString = atob(jwt);
    const cookie_temp = JSON.parse(decodedString);
    event.locals.access_token = cookie_temp.access_token;
    event.locals.refresh_token = cookie_temp.refresh_token;
    const body = await get(`api/v1/user/me`, cookie_temp.access_token);
    if (body) {
      event.locals.user = body;
    } else {
      event.locals.access_token = "";
      event.cookies.delete("jwt", { path: "/" });
    }
    console.log("Carga desde API N veces", body);
  } catch (error) {
    console.error("Error al decodificar o analizar el JSON:", error);
    event.locals.access_token = "";
    event.cookies.delete("jwt", { path: "/" });
  }
  return resolve(event);
};
export {
  handle
};
