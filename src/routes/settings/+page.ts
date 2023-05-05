export const prerender = false;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log("render page")
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}