<template>
  <div class="container my-20">
    <div class="flex justify-between mb-10 items-center">
      <h4 class="font-bold text-[40px]">Блог</h4>
      <div
        class="flex items-center py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
      >
        <p class="ml-12 font-medium text-primary">Весь каталог</p>
        <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div
        class="w-full h-full flex flex-col-reverse gap-[29px] justify-between border-b border-primary/10 pb-8"
        v-for="(item, index) in candles"
        :key="index"
      >
        <div class="flex flex-col gap-6 h-full justify-between">
          <div class="flex justify-between w-full">
            <p class="text-primary font-medium text-[20px]">
              {{ datas[index].title }}
            </p>
            <span
              class="hover:rotate-45 mr-5 cursor-pointer duration-300 font-medium text-3xl"
              ><svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H17M17 1V17M17 1L1 17"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
          <p class="text-primary font-medium text-sm">
            {{ datas[index].date }}
          </p>
        </div>
        <img class="w-full" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const candles = ref(["/house1.png", "/house2.png", "/house3.png"]);

const datas = ref([
  {
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
  },
  {
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
  },
  {
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
  },
]);
</script>
