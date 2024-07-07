<template>
  <div class="bg-[#eee] h-screen flex justify-center items-center">
    <div>
      <div class="flex items-center justify-center"></div>
      <form
        @submit.prevent="loginUser"
        class="flex flex-col gap-5 mt-8 px-[22px] py-[30px] bg-[#fff] rounded-[5px] max-md:w-full"
      >
        <label for="username" class="text-[#6C6C6C] font-medium max-md:hidden">
          Username
          <input
            v-model="userData.username"
            id="username"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#023047] placeholder-[#CDCDCD] text-[12px]"
            type="text"
            placeholder="Username"
          />
        </label>
        <label
          for="password"
          class="text-[#6C6C6C] font-medium relative max-md:hidden"
        >
          Password
          <input
            v-model="userData.password"
            id="password"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#023047] placeholder-[#CDCDCD] text-[12px]"
            :type="eyecheck ? 'password' : 'text'"
            placeholder="Password"
          />
        </label>

        <label for="username" class="text-[#6C6C6C] font-medium md:hidden">
          <input
            v-model="userData.username"
            id="username-md"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#023047] placeholder-[#CDCDCD] text-[12px]"
            type="text"
            placeholder="username"
          />
        </label>
        <label
          for="password"
          class="text-[#6C6C6C] font-medium relative md:hidden"
        >
          <input
            v-model="userData.password"
            id="password-md"
            class="w-full px-[15px] mt-1 py-3 border rounded border-[#E5E5E5] outline-none focus:border-[#023047] placeholder-[#CDCDCD] text-[12px]"
            :type="eyecheck ? 'password' : 'text'"
            placeholder="password"
          />
        </label>

        <button
          type="submit"
          class="w-full px-[15px] py-3 text-center rounded-[4px] hover:bg-[#023047] font-medium bg-[#023047] text-[#FCF6F6]"
          style="box-shadow: 0px 1.96px 9.8px 0px #00000040"
        >
          Login
        </button>
        <div class="flex justify-between items-center w-full">
          <a href="#" class="text-[#023047] underline cursor-pointer"
            >Forgot password?</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

definePageMeta({
  layout: "auth",
});

const eyecheck = ref(false);
const router = useRouter();

const userData = reactive({
  username: "",
  password: "",
});

const loginUser = () => {
  axios
    .post("https://dummyjson.com/user/login", userData)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/admin/");
    })
    .catch((err) => {
      console.log("err", err);
      alert("Ошибка при входе. Попробуйте еще раз.");
    });
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
