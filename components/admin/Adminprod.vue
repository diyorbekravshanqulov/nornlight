<template>
  <div class="container my-11">
    <div class="flex justify-between mb-10 items-center"></div>
    <div v-if="isLoading" class="text-3xl text-gray-500 text-center py-10">
      <Loading />
    </div>
    <div
      v-else-if="products.length === 0"
      class="flex justify-center h-full w-full items-center"
    >
      <h4 class="text-9xl text-primary/50 font-semibold">No Product</h4>
    </div>
    <div v-else class="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
      <AdminProductCardAdmin
        v-for="(item, index) in products"
        :key="index"
        :data="item"
        @send-message="handleMessage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const isLoading = ref(true);

const fetchProducts = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
    );
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }
};

const handleMessage = (message) => {
  console.log(message);
  window.location.reload;
  fetchProducts(); // Refresh the product list after receiving the message
};

onMounted(() => {
  fetchProducts();
});
</script>
