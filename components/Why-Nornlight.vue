<template>
  <div class="container mt-[102px]">
    <div class="flex justify-between mb-10 items-center">
      <h4 class="font-bold text-[28px] md:text-[40px]">Почему NORNLIGHT?</h4>
      <div
        class="flex max-md:hidden items-center py-[8px] group hover:bg-primary cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
      >
        <p class="ml-12 font-medium text-primary group-hover:text-white">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary group-hover:text-white">&rarr;</p>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2">
      <div
        class="md:p-10 p-4 md:pb-[47px] w-full h-full border border-[#D9D9D9] flex gap-[10px] md:gap-[79px] flex-col-reverse justify-end"
        v-for="(item, index) in candles"
        :key="index"
      >
        <div class="flex flex-col w-full max-md:items-center">
          <p class="text-primary font-medium  md:text-lg">
            {{ datas[index].title }}
          </p>
          <p class="text-primary mt-5 max-md:opacity-50 font-medium text-sm group cursor-pointer">
            {{ datas[index].price }}
          </p>
        </div>
        <img class="md:w-1/3 w-1/2" :src="item" alt="" />
      </div>
    </div>
    <div
        class="flex md:hidden items-center py-[8px] max-md:w-full mt-8 cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
      >
        <p class="ml-12 font-medium text-primary max-md:ml-24">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
  </div>
</template>

<script setup>
const candles = ref(["/nor1.png", "/nor1.png", "/nor1.png", "/nor1.png"]);

const datas = ref([
  {
    title: "Только проверенные бренды",
    price: "Бренды, проверенные временем и качеством",
  },
  {
    title: "Самые низкие цены",
    price: "Ниже не будет нигде",
  },
  {
    title: "Быстрая доствка",
    price: "Доставляем по всей РФза 1-10 дней",
  },
  {
    title: "Большой ассортимент",
    price: "Более 1000 товаров",
  },
]);
</script>
