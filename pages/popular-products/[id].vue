<template>
  <Path />
  <div class="container my-20 max-md:my-10">
    <div v-if="products">
      <div class="grid md:grid-cols-2 md:gap-14 gap-10">
        <img :src="products.image" alt="prod_image" />
        <div class="flex flex-col md:gap-10 gap-5 text-primary">
          <h3 class="text-[40px] max-md:text-[28px] font-medium">
            {{ products.title }}
          </h3>
          <div class="flex flex-col gap-4">
            <p class="text-primary text-sm">{{ products.made }}</p>
            <div class="w-full flex justify-between">
              <p class="text-primary text-sm">Артикул: 7655-188</p>
              <div class="flex gap-2">
                <a
                  href="https://ok.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><Icon
                    icon="bxl:ok-ru"
                    class="text-white rounded-full p-1 text-2xl duration-300 hover:bg-primary bg-[#E5E5E5]"
                /></a>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><Icon
                    icon="basil:vk-solid"
                    class="text-white rounded-full p-1 text-2xl duration-300 hover:bg-primary bg-[#E5E5E5]"
                /></a>
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><Icon
                    icon="mingcute:telegram-fill"
                    class="text-white rounded-full p-1 text-2xl duration-300 hover:bg-primary bg-[#E5E5E5]"
                /></a>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><Icon
                    icon="mingcute:whatsapp-fill"
                    class="text-white rounded-full p-1 text-2xl duration-300 hover:bg-primary bg-[#E5E5E5]"
                /></a>
                <a
                  href="https://www.viber.com/ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><Icon
                    icon="basil:viber-solid"
                    class="text-white rounded-full p-1 text-2xl duration-300 hover:bg-primary bg-[#E5E5E5]"
                /></a>
              </div>
            </div>
            <p class="text-[#4D932C] text-sm">В наличии</p>
          </div>
          <div class="flex gap-4 items-end">
            <p class="font-medium text-primary text-[28px] md:text-[64px]">
              {{ products.price }} ₽
            </p>
            <p class="text-primary md:mb-4 font-medium line-through text-xl">
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
              <button
                @click="decrease"
                :disabled="shop"
                class="font-medium w-full h-full flex justify-center items-center"
              >
                -
              </button>
              <p
                class="font-medium flex justify-center items-center w-full h-full"
              >
                {{ price }}
              </p>
              <button
                @click="increase"
                class="font-medium justify-center items-center w-full h-full"
              >
                +
              </button>
            </div>
            <button
              @click="handleCart"
              :class="
                shop
                  ? 'border-primary bg-white text-primary'
                  : 'border-primary bg-primary text-white'
              "
              class="px-[50px] max-md:hidden py-4 border rounded-[10px] font-medium"
            >
              {{ shop ? "В корзине" : "В корзину" }}
            </button>
            <Icon
              @click="toggleLiked"
              :icon="!liked ? 'ph:heart' : 'fluent-emoji-flat:heart-suit'"
              class="text-[54px] rounded-[10px] cursor-pointer text-primary bg-[#F8F8F8] p-[10px]"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-[40px] max-md:text-[28px] font-medium md:mt-40 mt-10">
          Характеристика
        </h3>
        <div class="mt-6">
          <div
            class="grid grid-cols-2 even:bg-[#F8F8F8] py-7 p-6 items-center"
            v-for="(item, index) in prod_data"
            :key="index"
          >
            <p class="font-medium">{{ item.title }}</p>
            <p class="text-end font-light">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="bg-p text-center text-2xl text-primary/50 py-40 font-bold"
    >
      <Loading/>  
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { usePiniaStore } from "../store";

const router = useRouter();

const store = usePiniaStore();
const products = ref(null);
const prod_data = ref([
  {
    title: "Цвет",
    value: "Жёлтый",
  },
  {
    title: "Год",
    value: "2016",
  },
  {
    title: "Диаметр колеса",
    value: "27.5",
  },
  {
    title: "Материал рамы",
    value: "Карбон",
  },
  {
    title: "Размер",
    value: "L",
  },
  {
    title: "Страна",
    value: "Швейцария",
  },
  {
    title: "Производитель",
    value: "Scott",
  },
  {
    title: "Покрышки",
    value:
      "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
  },
  {
    title: "Рама",
    value:
      "Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
  },
  {
    title: "Подседельный Штырь",
    value:
      "Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm",
  },
  {
    title: "Седло",
    value: "Ritchey WCS Streem V3 Titanium rails",
  },
  {
    title: "Вилка",
    value:
      "Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm",
  },
]);

const price = ref(1);
const route = useRoute();

const liked = computed(() =>
  store.likedProducts.some((p) => p.id === products.value?.id)
);
const shop = computed(() =>
  store.basket.some((p) => p.id === products.value?.id)
);

const toggleLiked = () => {
  if (products.value) {
    store.addProductToLiked(products.value);
  }
};

const handleCart = () => {
  if (products.value) {
    if (shop.value) {
      alert("This product already exits in basket");
    } else {
      store.addToBasket(products.value);
    }
  }
};

const increase = () => {
  price.value++;
};

const decrease = () => {
  if (price.value > 1 && !shop.value) {
    price.value--;
  }
};

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

<style scoped>
/* Add any necessary styles here */
</style>
