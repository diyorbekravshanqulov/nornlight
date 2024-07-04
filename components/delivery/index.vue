<template>
  <div class="container mt-4">
    <div class="grid md:grid-cols-2 md:gap-[10%]">
      <h3 class="leading-[70px] text-primary text-[64px] max-md:text-[28px] font-bold">
        Доставка и оплата
      </h3>
      <div>
        <div v-for="(item, index) in datas" class="mt-6" :key="index">
          <p class="text-2xl mb-6 max-md:text-[20px] font-semibold text-primary">
            {{ item.title }}
          </p>
          <p class="md:text-[20px] leading-[28px] text-primary" v-html="item.info"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center w-full">
    <div class="md:my-[110px] mt-20 max-md:mb-10 md:w-[1800px] max-md:h-[326px] h-[672px] md:mx-[10px]">
      <iframe class="rounded-[15px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4055.2795304930755!2d69.35267014740285!3d41.298414303459616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720107471065!5m2!1sru!2s"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
  {
    title: "Доставка",
    info: "Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. <span class='text-[#2F4DA3]'>Сроки доставки: 4—6 недель</span>",
  },
  {
    title: "Курьерская доставка",
    info: "БЕСПЛАТНО доставим в приделах МКАД любой заказ <span class='text-[#2F4DA3]'>от 5 000 ₽</span>. Заказы свыше <span class='text-[#2F4DA3]'>30 000 ₽</span> имеют бесплатную доставку, включительно 15 км от МКАД",
  },
  {
    title: "Самовывоз",
    info: "Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2",
  },
]);
</script>
