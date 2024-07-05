<template>
  <div class="container mt-[102px]">
    <div class="flex justify-between mb-10 items-center">
      <h4 class="font-bold text-[40px] max-md:text-[28px]">
        Популярные товары
      </h4>

      <div
        @click="clicked"
        class="flex max-md:hidden items-center py-[8px] group hover:bg-primary cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
      >
        <p class="ml-12 font-medium text-primary group-hover:text-white">
          О компании
        </p>
        <p
          class="text-2xl font-medium mb-1 text-primary group-hover:text-white"
        >
          &rarr;
        </p>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        :data="item"
      />
      <!--  -->
    </div>
    <div
      @click="clicked"
      class="flex md:hidden max-md:w-full items-center max-md:mt-5 py-[8px] cursor-pointer gap-[10px] hover:gap-4 duration-300 w-[220px] rounded-full border border-primary"
    >
      <p class="ml-12 max-md:ml-24 font-medium text-primary">О компании</p>
      <p class="text-2xl font-medium mb-1 text-primary">&rarr;</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const products = ref([]);

const router = useRouter();

const clicked = () => {
  router.push("/popular-products");
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
    );
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
