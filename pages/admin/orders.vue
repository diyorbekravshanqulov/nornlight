<template>
  <div class="w-full flex justify-end">
    <div class="w-[77%] px-8 py-[22px]">
      <div class="flex justify-between w-full items-center">
        <h3 class="font-medium text-[28px] text-primary">Orders</h3>
        <button
          @click="clear()"
          class="font-medium text-[28px] rounded-[10px] bg-primary/50 py-2 px-4 text-white"
        >
          Clear orders
        </button>
      </div>
      <div v-if="isLoading" class="text-3xl text-gray-500 text-center py-10">
        <!-- Loading animation or message -->
        <Loading />
      </div>
      <div
        v-else-if="products.length <= 0"
        class="text-9xl text-primary/50 py-40 font-bold"
      >
        <p class="text-center">Not yet ordered</p>
      </div>
      <div v-else>
        <div
          class="grid md:grid-cols-9 py-9 px-11 rounded-[20px] bg-second md:mt-10"
          v-for="(product, index) in products"
          :key="index"
        >
          <!-- Static headers for product details -->
          <p
            v-for="(header, index) in headers"
            :key="index"
            :class="index === 0 ? 'col-span-1' : 'col-span-2'"
            class="font-medium text-primary/50 my-7"
          >
            {{ header }}
          </p>
          <!-- Dynamic product data -->
          <div
            v-for="(item, index) in product"
            :key="index"
            class="py-4 col-span-9 grid grid-cols-9 items-center border-t pt-8 border-black/10"
          >
            <div class="pr-8 col-span-1">
              <img :src="item.image" class="rounded-[15px]" :alt="item.title" />
            </div>
            <div class="flex flex-col pr-8 h-full col-span-2 justify-between">
              <p class="text-primary font-semibold line-clamp-2">
                {{ item.title }}
              </p>
              <p class="text-primary font-bold text-[20px]">
                {{ item.price }} ₽
              </p>
            </div>
            <p class="text-primary pr-8 col-span-2 line-clamp-3">
              {{ item.desc }}
            </p>
            <p class="text-primary pr-8 col-span-2 line-clamp-3">
              RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
            </p>
            <div class="flex w-full col-span-2 justify-between items-center">
              <div class="flex gap-5 items-center">
                <span
                  class="text-2xl py-[19px] px-[27px] border border-primary/10 rounded-[10px] text-primary"
                  >1</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  // middleware: ["auth"],
});

import { ref, onMounted } from "vue";
import { usePiniaStore } from "../store";
import Loading from "@/components/Loading.vue"; // Assuming you have a Loading component

const store = usePiniaStore();
const products = ref([]);
const isLoading = ref(true); // Initially set loading state to true

const headers = ["Фото", "Товары", "Описание", "Артикул", "Артикул"];

const clear = () => {
  store.clearOrders();
  window.location.reload();
};

onMounted(() => {
  // Simulating API fetch delay (remove this in actual implementation)
  setTimeout(() => {
    products.value = store.orders.map((product) => ({
      ...product,
    }));
    isLoading.value = false; // Set loading to false after data is fetched
  }, 1000); // Adjust timeout value as per your needs
});

const getCount = (id) => {
  // Implement your logic to get the count for a product
  return 0; // Default count, adjust as per your logic
};
</script>

<style scoped>
input,
textarea {
  outline: none;
}
/* Add your custom styles here */
</style>
