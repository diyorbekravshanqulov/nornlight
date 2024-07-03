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
        v-for="(item, index) in products"
        :key="index"
      >
        <div class="flex flex-col gap-6 h-full justify-between">
          <div class="flex justify-between gap-5 w-full">
            <p class="text-primary line-clamp-2 font-medium text-[20px]">
              {{ item.title }}
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
            {{ item.date }}
          </p>
        </div>
        <img class="w-full" :src="item.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);

const candles = ref(["/house1.png", "/house2.png", "/house3.png"]);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/blogs`
    );
    products.value = response.data.map((product) => ({
      ...product,
      liked: false,
      shopped: false,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
