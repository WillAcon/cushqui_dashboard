const load = async ({ locals }) => {
  return {
    user: locals.user,
    isLogin: !!(locals.user && locals.user.id)
  };
};
export {
  load
};
