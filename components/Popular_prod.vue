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
        <p class="ml-12 font-medium text-primary group-hover:text-white">О компании</p>
        <p class="text-2xl font-medium mb-1 text-primary group-hover:text-white">&rarr;</p>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-5">
      <div
        class="w-full h-full duration-300 hover:shadow-lg flex gap-4 flex-col"
        v-for="(item, index) in products"
        :key="index"
      >
        <div class="relative">
          <img :src="item.image" alt="Product Image" />
          <img
            class="z-10 max-md:hidden absolute top-0 right-0 translate-y-3/4 -translate-x-3/4 cursor-pointer"
            @click="toggleLike(item.id)"
            :src="item.liked ? '/like2.svg' : '/like.svg'"
            alt="Like Button"
          />
        </div>
        <div
          class="md:p-[27px] p-4 pt-[11px] flex flex-col justify-between h-full md:gap-6 gap-3 w-full"
        >
          <p
            class="text-primary font-medium line-clamp-2 max-md:line-clamp-3 md:leading-[22px] leading-[17px] md:text-xl"
          >
            {{ item.title }}
          </p>
          <div class="div">
            <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
              {{ item.sale }}₽
            </p>
            <div class="flex w-full justify-between items-center">
              <p class="text-primary mt-[6px] font-bold text-xl">
                {{ item.price }}₽
              </p>
              <img
                @click="toggleShopped(item.id)"
                class="py-2 max-md:py-1 p-5 max-md:px-3 cursor-pointer rounded-full w-[23%] max-md:w-[35%]"
                :src="item.shopped ? '/cart3.svg' : '/cart2.svg'"
                :class="
                  item.shopped ? 'bg-white border border-primary' : 'bg-primary'
                "
                alt="Cart Button"
              />
            </div>
          </div>
        </div>
      </div>
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
  console.log("object");
};

const toggleLike = (id) => {
  const product = products.value.find((item) => item.id === id);
  if (product) {
    product.liked = !product.liked;
  }
};

const toggleShopped = (id) => {
  const product = products.value.find((item) => item.id === id);
  if (product) {
    product.shopped = !product.shopped;
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products`
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
