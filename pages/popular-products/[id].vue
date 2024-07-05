<template>
  <div class="container my-20">
    <div v-if="products" class="grid grid-cols-2 gap-14">
      <img :src="products.image" alt="prod_image" />
      <div class="flex flex-col gap-10 text-primary">
        <h3 class="text-[40px] font-medium">
          {{ products.title }}
        </h3>
        <div class="flex flex-col gap-4">
          <p class="text-primary text-sm">Scott</p>
          <div class="w-full flex justify-between">
            <p class="text-primary text-sm">Артикул : 7655-188</p>
            <p class="text-primary text-sm">Scott</p>
          </div>
          <p class="text-[#4D932C] text-sm">В наличии</p>
        </div>
        <div class="flex gap-4 items-end">
          <p class="font-medium text-primary text-[64px]">
            {{ products.price }} ₽
          </p>
          <p class="text-primary mb-4 font-medium line-through text-xl">
            {{ products.sale }} ₽
          </p>
        </div>
        <div>
          <p class="text-primary">
            {{ products.desc }}
          </p>
        </div>
        <div class="flex gap-4 items-center">
          <div
            class="rounded-[10px] border grid grid-cols-3 w-[123px] h-[52px] border-[#E5E5E5]"
          >
            <button @click="decrease" class="font-medium w-full h-full flex justify-center items-center">
              -
            </button>
            <p class="font-medium flex justify-center items-center w-full h-full">{{ price }}</p>
            <button @click="increase" class="font-medium justify-center items-center w-full h-full">+</button>
          </div>
          <button class="px-[50px] py-4 rounded-[10px] bg-primary text-white font-medium">
            В корзину
          </button>
          <img @click="liked = !liked" :src="liked ? '/prod_like.svg' : '/dislike.svg'" alt="like/dislike">
        </div>
      </div>
    </div>
    <div v-else class="bg-p text-center text-2xl text-primary/50 py-40 font-bold">
      Loading...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const price = ref(1);
const liked = ref(false);

const increase = () => {
  price.value++;
};

const decrease = () => {
  if (price.value > 1) {
    price.value--;
  }
};

const route = useRoute();
const products = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${route.params.id}`
    );
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
