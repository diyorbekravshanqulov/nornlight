<template>
  <div class="container md:pt-3">
    <div
      class="max-md:hidden flex w-full justify-between mb-2 text-primary font-semibold text-sm"
    >
      <div class="flex gap-7">
        <a
          @click="handleNavigation(index)"
          href="#"
          v-for="(item, index) in sections"
          :key="index"
          class="opacity-50"
          >{{ item }}</a
        >
      </div>
      <div class="flex gap-6">
        <p class="opacity-100">8 (800) 890-46-56</p>
        <a href="#" class="opacity-50" @click="store.modalClick = !store.modalClick"
          >Заказать звонок</a
        >
      </div>
    </div>
  </div>
  <div
    class="sticky top-0 left-0 w-full py-3 z-30"
    :class="
      isScrolled && !toggle ? 'backdrop-blur-lg bg-gradient-to-r' : 'bg-white'
    "
  >
    <div class="container">
      <div>
        <div class="flex w-full justify-between items-center gap-4">
          <div class="flex md:gap-[29px] gap-4">
            <img
              @click="toggle = !toggle"
              :src="!toggle ? '/res_open.svg' : 'res_close.svg'"
              :class="toggle ? 'w-[20px]' : ''"
              class="hidden max-md:block duration-300 cursor-pointer w-[25px]"
              alt="Logo"
            />
            <img
              @click="goToHome"
              src="/MainLogo.svg"
              class="cursor-pointer max-md:hidden"
              alt="Logo"
            />
            <img
              @click="goToHome"
              :class="{
                hidden: toggle,
                block: !toggle,
              }"
              src="/MainLogo.svg"
              class="cursor-pointer md:hidden max-md:w-[75%]"
              alt="Logo"
            />

            <div
              @click="handleNavigation('catalog')"
              class="flex max-md:hidden px-[27px] gap-[9px] cursor-pointer items-center rounded-full bg-primary py-[14px]"
            >
              <img src="/catalog.svg" alt="category" />
              <p class="text-white font-semibold">Каталог</p>
            </div>
          </div>
          <div class="relative max-md:hidden w-[45%]">
            <input
              class="font-semibold bg-white/50 outline-none pl-[27px] pr-12 h-full py-[14px] placeholder:text-primary border border-primary rounded-full w-full"
              type="text"
              placeholder="Поиск по товарам"
            />
            <img
              class="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-3/4 z-10"
              src="/search.svg"
              alt="search"
            />
          </div>
          <div
            class="flex h-full items-center max-md:hidden"
            v-for="(item, index) in image"
            :key="index"
          >
            <div class="flex relative flex-col items-center gap-[6px]">
              <span
                :class="{
                  hidden: index === 1,
                  '-translate-x-1/4': index === 0,
                }"
                class="absolute -translate-y-1/2 max-md:hidden top-0 w-5 h-5 flex justify-center items-center rounded-full right-0 bg-red-500 z-50 text-white text-sm"
                >{{
                  index == 0 ? store.likedProducts.length : store.basket.length
                }}</span
              >
              <img
                :src="item"
                class="cursor-pointer"
                :class="index + 1 != image.length ? 'w-1/3' : 'w-1/2'"
                alt="Logos "
              />
              <p class="text-[12px] max-md:hidden font-semibold text-primary">
                {{ bottomSections[index] }}
              </p>
            </div>
          </div>

          <div
            :class="{
              'gap-6': toggle,
              'gap-2': !toggle,
            }"
            class="flex items-center"
          >
            <div
              class="flex relative h-full md:hidden items-center"
              v-for="(item, index) in image"
              :key="index"
            >
              <span
                :class="{
                  hidden: index === 1,
                  '-translate-y-[65%] right-0 translate-x-1': index === 0,
                }"
                class="absolute md:hidden -translate-y-1/2 top-0 w-4 h-4 flex justify-center items-center rounded-full right-0 bg-red-500 z-50 text-white text-[10px]"
                >{{
                  index == 0 ? store.likedProducts.length : store.basket.length
                }}</span
              >
              <img
                :src="item"
                class="cursor-pointer"
                :class="{
                  'w-3/4 mb-0.5': index == 2,
                  block: index === 1 && toggle,
                  hidden: index === 1 && !toggle,
                }"
                alt="Logos "
              />
            </div>
          </div>
        </div>
        <div class="relative md:hidden w-[100%] mt-2">
          <input
            class="font-semibold text-sm bg-white/50 outline-none pl-[27px] pr-12 h-full placeholder:text-primary border py-[10px] border-primary rounded-full w-full"
            type="text"
            placeholder="Поиск по товарам"
          />
          <img
            class="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-3/4 z-10"
            src="/search.svg"
            alt="search"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    class="md:hidden z-50 top-[95px] left-0 fixed w-full transition-all duration-300"
    :class="{ 'scale-0 h-0': !toggle, 'scale-100 h-full': toggle }"
  >
    <div class="container bg-white pb-8">
      <a
        @click="(toggle = !toggle), handleNavigation(index)"
        href="#"
        v-for="(item, index) in sections"
        :key="index"
        class="block pt-8 text-center mx-auto border-b w-full text-primary text-sm border-b-primary/50 transition-all duration-300"
        >{{ item }}</a
      >
      <div
        @click="(toggle = !toggle), handleNavigation('catalog')"
        class="flex justify-center w-full gap-[9px] cursor-pointer items-center rounded-full bg-primary mt-6 py-[14px]"
      >
        <img src="/catalog.svg" alt="category" />
        <p class="text-white font-semibold">Каталог</p>
      </div>
      <div class="flex flex-col gap-4 mt-8 justify-center w-full">
        <p class="text-center">8 (800) 890-46-56</p>
        <p
          class="text-center"
          @click="(store.modalClick = !store.modalClick), (toggle = !toggle)"
        >
          Заказать звонок
        </p>
      </div>
    </div>
    <div
      @click.stop="toggle = !toggle"
      :class="{ hidden: !toggle, block: toggle }"
      class="h-screen duration-300 w-screen bg-primary/50"
    ></div>
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";
const store = usePiniaStore();

import { ref } from "vue";
const toggle = ref(false);

const router = useRouter();

const sections = ref([
  "О компании",
  "Доставка и оплата",
  "Возврат",
  "Гарантии",
  "Контакты",
  "Блог",
]);

const bottomSections = ref(["Избранное", "Сравнение", "Корзина"]);
const image = ref(["/like5.svg", "/compare.svg", "/cart.svg"]);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function goToHome() {
  router.push("/");
}

function handleNavigation(Index) {
  if (Index === 0) {
    router.push("/company");
  } else if (Index === 1) {
    router.push("/delivery");
  } else if (Index === 2) {
    router.push("/return");
  } else if (Index === 3) {
    router.push("/guarantees");
  } else if (Index === 4) {
    router.push("/contact");
  } else if (Index === 5) {
    router.push("/blogs");
  } else if (Index === "catalog") {
    router.push("/catalog");
  }
  // Add more navigation conditions as needed
}
</script>
