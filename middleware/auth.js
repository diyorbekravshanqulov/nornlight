export default defineNuxtRouteMiddleware((to, from) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return navigateTo("/auth/login");
  }
});
