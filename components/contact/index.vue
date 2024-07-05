<template>
  <div class="container mt-4 max-md:mb-10">
    <div class="grid md:grid-cols-2 md:gap-[10%] gap-5">
      <h3
        class="leading-[70px] text-primary text-[64px] max-md:text-[28px] font-bold"
      >
        Контакты
      </h3>
      <div class="md:mb-10">
        <h4 class="text-2xl font-semibold text-primary">8 (800) 890-46-56</h4>
        <p class="text-primary">Пн-Пт: 10:00 до 19:00</p>
        <p class="text-primary">Сб-Вс: заказ через корзину</p>
        <p class="text-primary">Телефоны: </p>
      </div>
    </div>
  </div>
  <div class="flex max-md:mb-[350px] justify-center w-full">
    <div
      class="md:my-[100px] relative mt-5 max-md:mb-10 md:w-[1800px] max-md:h-[326px] h-[672px] md:mx-[10px]"
    >
      <iframe
        class="rounded-[15px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4055.2795304930755!2d69.35267014740285!3d41.298414303459616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720107471065!5m2!1sru!2s"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        class="bg-white rounded-[15px] container md:absolute bottom-14 md:left-1/2 md:-translate-x-1/2 grid md:grid-cols-9 md:py-14 p-5 max-md:gap-5 md:px-14"
      >
        <div
          v-for="(item, index) in infos"
          :key="index"
          :class="index == 0 ? 'col-span-3' : 'col-span-2'"
        >
          <div class="">
            <h3 class="text-2xl text-primary font-semibold">
              {{ item.title }}
            </h3>
            <p class="mt-[10px] text-primary">{{ item.info }}</p>
          </div>
        </div>
        <button
          class="px-[43px] max-md:w-full  col-span-3 md:col-span-2 py-[14px] rounded-full bg-primary text-white font-semibold"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const infos = ref([
  {
    title: "Адрес магазина",
    info: "г. Москва, Дмитровское шоссе д.100с2",
  },
  {
    title: "Почта",
    info: "NORNLIGHT@mail.ru",
  },
  {
    title: "Телефон",
    info: "8 (800) 890-46-56",
  },
]);
</script>
