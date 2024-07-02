// plugins/scrollBehavior.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue-router:scrollBehavior", (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  });
});
