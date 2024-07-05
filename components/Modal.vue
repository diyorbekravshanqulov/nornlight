<template>
  <div
    class="fixed z-40 h-screen w-screen bg-primary/50"
    @click="store.modalClick = !store.modalClick"
    v-show="store.modalClick"
  >
    <form
      action=""
      class="md:p-[40px] p-6 max-md:w-[92%] md:rounded-[50px] rounded-[20px] bg-white absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
    >
      <p
        @click.stop="store.modalClick = !store.modalClick"
        class="flex justify-end items-center cursor-pointer"
      >
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
      <h3
        class="text-primary text-[28px] mb-5 font-bold md:text-[64px] md:w-[650px] pt-2 md:mb-[50px] md:leading-[70px]"
      >
        Заполните, <span class="block">и мы перезвоним</span>
      </h3>
      <input
        v-for="(item, index) in 2"
        :key="index"
        type="text"
        name=""
        class="px-5 py-4 border md:mb-4 mb-3 font-semibold border-primary rounded-full w-full"
        :placeholder="index == 0 ? 'ФИО' : 'телефон'"
        id=""
      />
      <input
        type="submit"
        name=""
        class="px-5 py-4 font-medium mt-1 mb-2 bg-primary text-center text-white md:mt-[30px] md:mb-12 border border-primary rounded-full w-full"
        value="Отправить"
        id=""
      />
    </form>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";
const store = usePiniaStore();
</script>
