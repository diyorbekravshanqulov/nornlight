<template>
  <div class="w-full flex justify-center">
    <div class="bg-second rounded-[50px] mt-8 w-[1714px]">
      <div class="container">
        <swiper
          spaceBetween="30"
          :centeredSlides="true"
          :pagination="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          
          <swiper-slide v-for="(item, index) in 8" :key="index">
            <div class="flex gap-[199px] mb-[47px]">
              <h1 class="text-5xl mt-[52px] font-bold leading-[75px]">
                Скидка 15% на все подвесные светильники
                <span
                  class="bg-primary inline-block rounded-full text-white px-[27px]"
                  >до 5 февраля</span
                >
              </h1>
              <img src="/header.png" class="w-1/3 mr-[66px]" alt="Candle" />
            </div>
          </swiper-slide>
        </swiper>
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
