<template>
  <div class="w-full flex justify-end">
    <div class="w-[77%] px-8 py-[22px]">
      <h3 class="font-medium text-[28px]">All Products</h3>
      <div class="grid grid-cols-2 gap-10 mt-20">
        <div
          class="w-full h-[500px] rounded-[50px] flex items-center gap-10 flex-col justify-center bg-second"
        >
          <p
            class="text-8xl p-10 rounded-[20px] bg-primary/50 text-primary font-semibold"
          >
            {{ products.length }}
          </p>
          <p class="text-6xl text-primary font-semibold">
            {{ products.length != 0 ? "Products" : "Product" }}
          </p>
        </div>
        <div
          class="w-full h-[500px] rounded-[50px] bg-second gap-10 flex flex-col items-center justify-center"
        >
          <p
            class="text-8xl p-10 rounded-[20px] bg-primary/50 text-primary font-semibold"
          >
            {{ store.orders.length }}
          </p>
          <p class="text-6xl text-primary font-semibold">
            {{ store.orders.length != 0 ? "Orders" : "Order" }}
          </p>
        </div>
      </div>
      <pre></pre>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const products = ref([]);
const isLoading = ref(true); // Initially set loading state to true

const router = useRouter();

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
    );
    products.value = response.data;
    isLoading.value = false; // Set loading to false after data is fetched
  } catch (error) {
    console.error("Error fetching products:", error);
    isLoading.value = false; // Ensure loading is set to false even if there's an error
  }
});
</script>
