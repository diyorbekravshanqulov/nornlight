<template>
  <div   @click="toggle = !toggle"
    v-show="toggle">
  <div class="fixed z-40 h-screen w-screen bg-primary/50"></div>
  <form
    action=""
    class="p-[40px] rounded-[50px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <p class="flex justify-end items-center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          d="M1 1L9 9M17 17L9 9M9 9L1 17L17 1"
          stroke="#454545"
          stroke-width="2"
        />
      </svg>
    </p>
    <h3 class="text-primary font-bold text-[64px] pt-2 p-[14px] leading-[71px]">
      Заполните,  и мы перезвоним
    </h3>
  </form>
  </div>
</template>

<script setup>
const toggle = ref(true);
</script>
