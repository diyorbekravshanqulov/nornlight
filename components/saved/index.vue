<template>
  <div class="container my-10">
    <div class="flex justify-between mb-10 items-center">
      <h4 class="font-bold text-[40px] max-md:text-[28px]">Избранные товары</h4>
    </div>
    <div v-if="isLoading" class="text-3xl text-gray-500 text-center py-10">
      <Loading /> <!-- Replace with your loading spinner component -->
    </div>
    <div
      v-else-if="products.length > 0"
      class="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5"
    >
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        :data="item"
      />
    </div>
    <div v-else class="text-9xl text-primary/50 py-40 font-bold">
      <p class="text-center">No Products</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { usePiniaStore } from "../store";

const store = usePiniaStore();
const products = ref([]);
const isLoading = ref(true); // Initially set loading state to true

onMounted(() => {
  // Simulating API fetch delay (remove this in actual implementation)
  setTimeout(() => {
    products.value = store.likedProducts;
    isLoading.value = false; // Set loading to false after data is fetched
  }, 1000); // Adjust timeout value as per your needs
});

</script>
