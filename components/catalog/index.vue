<template>
  <div class="container md:mt-[102px]">
    <!-- Section title and "All Catalog" button -->
    <div class="flex justify-between py-10 md:mb-10 items-center">
      <h4 class="font-bold max-md:text-[28px] text-[40px]">Каталог</h4>
    </div>

    <!-- Grid for products on larger screens (md and above) -->
    <div class="grid md:grid-cols-6 grid-cols-2 md:gap-5 gap-2">
      <div
        :class="{
          'md:h-[250px] md:col-span-3': index == 9 || index == 10,
          'max-md:col-span-2': index == 10,
          'md:col-span-2': index != 9 && index != 10,
        }"
        class="bg-second rounded-[20px] md:pl-8 md:pr-2 w-full h-full flex items-center md:py-4 p-5 max-md:flex-col justify-between"
        v-for="(item, index) in candles"
        :key="index"
      >
        <div class="flex flex-col h-full justify-between max-md:gap-3">
          <p class="text-primary font-medium md:text-[20px]">
            {{ datas[index].title }}
          </p>
          <img class="w-[55%] max-md:mx-auto md:hidden" :src="item" alt="" />
          <p class="text-primary font-medium text-sm group cursor-pointer">
            {{ datas[index].price }}
            <span class="group-hover:ml-2 ml-1 duration-300 font-medium text-xl"
              >&rarr;</span
            >
          </p>
        </div>
        <img class="w-[55%] max-md:hidden" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const candles = ref([
  "/can1.png",
  "/can2.png",
  "/can3.png",
  "/can4.png",
  "/can5.png",
  "/can6.png",
  "/can7.png",
  "/can8.png",
  "/can9.png",
  "/can10.png",
  "/can11.png",
]);

const datas = ref([
  {
    title: "Люстры",
    price: "От 540₽",
  },
  {
    title: "Светильники",
    price: "От 540₽",
  },
  {
    title: "Бра",
    price: "От 540₽",
  },
  {
    title: "Торшеры",
    price: "От 540₽",
  },
  {
    title: "Настольные лампы",
    price: "От 540₽",
  },
  {
    title: "Споты",
    price: "От 540₽",
  },
  {
    title: "Трековые светильники",
    price: "От 540₽",
  },
  {
    title: "Уличные светильники",
    price: "От 540₽",
  },
  {
    title: "Технические светильники",
    price: "От 540₽",
  },
  {
    title: "Светодиодные ленты",
    price: "От 540₽",
  },
  {
    title: "Комплектуюшие",
    price: "От 540₽",
  },
]);
</script>

<style scoped>
/* Add your custom styles here */
</style>
