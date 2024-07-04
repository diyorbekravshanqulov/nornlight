<template>
  <div class="container md:pt-3">
    <div
      class="max-md:hidden flex w-full justify-between mb-2 text-primary font-semibold text-sm"
    >
      <div class="flex gap-7">
        <a
          href="#"
          v-for="(item, index) in sections"
          :key="index"
          class="opacity-50"
          >{{ item }}</a
        >
      </div>
      <div class="flex gap-6">
        <p class="opacity-100">8 (800) 890-46-56</p>
        <a href="#" class="opacity-50">Заказать звонок</a>
      </div>
    </div>
  </div>
  <div
    class="sticky top-0 left-0 w-full py-3 z-30"
    :class="isScrolled && !toggle ? 'backdrop-blur-lg bg-gradient-to-r' : 'bg-white'"
  >
    <div class="container">
      <div>
        <div class="flex w-full items-center justify-between gap-4">
          <div class="flex md:gap-[29px] gap-4">
            <img
              @click="toggle = !toggle"
              :src="!toggle ? '/res_open.svg' : 'res_close.svg'"
              class="hidden max-md:block cursor-pointer w-[50px]"
              alt="Logo"
            />
            <img
              src="/MainLogo.svg"
              class="cursor-pointer max-md:w-[80%]"
              alt="Logo"
            />
            
            <div
              @click="dropdownClick = !dropdownClick"
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
            <div class="flex flex-col items-center gap-[6px]">
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
            class="flex h-full md:hidden items-center"
            v-for="(item, index) in image2"
            :key="index"
          >
            <img
              :src="item"
              class="cursor-pointer"
              :class="index + 1 != image.length ? 'w-full' : 'w-[70%]'"
              alt="Logos "
            />
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
    @click="toggle = !toggle"
    :class="{ hidden: !toggle, block: toggle }"
    class="fixed z-40 h-screen w-screen bg-primary/50"
  ></div>
  <div
    class="bg-white md:hidden z-50 top-[100px] left-0 fixed w-full"
    :class="{ hidden: !toggle, block: toggle }"
  >
    <div>
      <a
        href="#"
        v-for="(item, index) in sections"
        :key="index"
        class="block pt-8 text-center mx-auto border-[0.5px] w-full text-primary text-sm border-b-primary/50 bg-white"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script setup>
const toggle = ref(false);

const dropdownClick = ref(false);

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
const image2 = ref(["/like5.svg", "/cart.svg"]);

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
</script>
