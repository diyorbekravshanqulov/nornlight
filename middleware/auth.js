export default defineNuxtRouteMiddleware((to, from) => {
  // const token = localStorage.getItem("token");
  const token = null;
  if (!token) {
    return navigateTo("/auth/login");
  }
});
