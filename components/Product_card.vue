<template>
  <div>
    <div
      class="w-full h-full duration-300 hover:shadow-lg flex gap-4 flex-col"
      @click="router.push(`/popular-products/${data.data.id}`)"
    >
      <div class="relative">
        <img :src="data.data.image" alt="Product Image" />
        <img
          class="z-10 absolute top-0 right-0 translate-y-3/4 -translate-x-3/4 cursor-pointer"
          @click.stop="toggleLike(data.data.id)"
          :src="like ? '/like2.svg' : '/like.svg'"
          alt="Like Button"
        />
      </div>
      <div
        class="md:p-[27px] p-4 pt-[11px] flex flex-col justify-between h-full md:gap-6 gap-3 w-full"
      >
        <p
          class="text-primary font-medium line-clamp-2 max-md:line-clamp-3 md:leading-[22px] leading-[17px] md:text-xl"
        >
          {{ data.data.title }}
        </p>
        <div class="div">
          <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
            {{ data.data.sale }}₽
          </p>
          <div class="flex w-full justify-between data.datas-center">
            <p class="text-primary mt-[6px] font-bold text-xl">
              {{ data.data.price }}₽
            </p>
            <img
              @click.stop="toggleShopped(data.data.id)"
              class="py-2 max-md:py-1 p-5 max-md:px-3 cursor-pointer rounded-full w-[23%] max-md:w-[35%]"
              :src="shop ? '/cart3.svg' : '/cart2.svg'"
              :class="shop ? 'bg-white border border-primary' : 'bg-primary'"
              alt="Cart Button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";
const store = usePiniaStore();
const data = defineProps({
  data: Object,
});

const router = useRouter();

console.log("data", data.data);

const like = computed(() => {
  const index = store.likedProducts.findIndex((p) => p.id == data.data.id);
  return index != -1;
});
const shop = computed(() => {
  const index = store.basket.findIndex((p) => p.id == data.data.id);
  return index != -1;
});

const toggleLike = (id) => {
  store.addProductToLiked(data.data);
};

const toggleShopped = (id) => {
  store.addToBasket(data.data);
};
</script>
