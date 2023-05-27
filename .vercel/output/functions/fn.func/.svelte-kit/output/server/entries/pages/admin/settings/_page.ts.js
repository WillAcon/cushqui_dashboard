const prerender = false;
const ssr = false;
function load({ params }) {
  console.log("render page");
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}
export {
  load,
  prerender,
  ssr
};
