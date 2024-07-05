<template>
  <div class="container my-20 max-md:my-10">
    <div class="flex justify-between mb-10 items-center">
      <h4 class="font-bold text-[40px] max-md:text-[28px]">Избранные товары</h4>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";
const store = usePiniaStore();

const products = ref(store.likedProducts);

const router = useRouter();
</script>
