function load({ params }) {
  console.log("paramsssss", params);
  if (params.slug === "settings") {
    return {
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
    };
  }
}
export {
  load
};
