<template>
  <div class="container mt-[102px]">
    <div class="flex max-md:hidden justify-between mb-10 items-center">
      <h4 class="font-bold text-[40px]">Каталог</h4>
      <div
        class="flex items-center py-[8px] hover:bg-primary group cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
      >
        <p class="ml-12 font-medium text-primary group-hover:text-white">Весь каталог</p>
        <p class="text-2xl font-medium mb-1 text-primary group-hover:text-white">&rarr;</p>
      </div>
    </div>
    <div class="grid max-md:hidden grid-cols-3 gap-5">
      <div
        class="bg-second hover:bg-primary duration-300 cursor-pointer rounded-[20px] group pl-8 pr-2 w-full h-full flex items-center py-4 justify-between"
        v-for="(item, index) in candles"
        :key="index"
      >
        <div class="flex flex-col h-full justify-between">
          <p class="text-primary group-hover:text-white font-medium text-[20px]">
            {{ datas[index].title }}
          </p>
          <p class="text-primary group-hover:text-white font-medium text-sm group cursor-pointer">
            {{ datas[index].price }}
            <span class="group-hover:ml-2 ml-1 duration-300 font-medium text-xl"
              >&rarr;</span
            >
          </p>
        </div>
        <img class="w-[55%]" :src="item" alt="" />
      </div>
    </div>

    <div class="md:hidden">
      <h4 class="font-bold text-[40px]">Каталог</h4>

      <swiper
        spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper grid grid-cols-1"
      >
        <swiper-slide class="h-full w-full" v-for="(item, index) in candles" :key="index">
          <div
            class="bg-second hover:bg-primary duration-300 cursor-pointer group rounded-[20px] w-full h-[300px] flex-col flex items-center gap-4 py-4 justify-between"
          >
            <!-- <div class="flex flex-col h-full justify-between"> -->
              <p class="text-primary group-hover:text-white font-medium text-[20px]">
                {{ datas[index].title }}
              </p>
              <img class="w-[40%]" :src="item" alt="" />
              <p class="text-primary group-hover:text-white font-medium text-sm group cursor-pointer">
                {{ datas[index].price }}
                <span 
                  class="group-hover:ml-2 ml-1 duration-300 font-medium text-xl"
                  >&rarr;</span
                >
              </p>
            <!-- </div> -->
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="flex items-center py-[8px] mt-5 max-md:w-full cursor-pointer hover:bg-primary group gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
      >
        <p class="ml-12 font-medium max-md:ml-24 group-hover:text-white text-primary">Весь каталог</p>
        <p class="text-2xl font-medium mb-1 group-hover:text-white text-primary">&rarr;</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper pagination module

const modules = [Autoplay, Pagination, Navigation];

const candles = ref([
  "/can1.png",
  "/can2.png",
  "/can3.png",
  "/can4.png",
  "/can5.png",
  "/can6.png",
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
]);
</script>
<style scoped>
/* Swiper styles */
.swiper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.swiper:active {
  cursor: grabbing;
}

/* Swiper slide styles */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  position: absolute;
  right: 20px; /* Adjust as needed */
  bottom: 20px; /* Adjust as needed */
}
</style>
