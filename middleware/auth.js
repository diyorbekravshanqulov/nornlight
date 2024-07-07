import { navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  localStorage.setItem("user", "");
  let user = localStorage.getItem("user");
  if (!user) {
    return navigateTo("/auth/login");
  }
});
