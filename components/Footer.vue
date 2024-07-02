<template>
  <div class="bg-second py-[79px]">
    <div class="container">
      <div class="flex w-full justify-between">
        <div class="flex flex-col w-1/4 gap-[35px]">
          <img src="/MainLogo.svg" @click="router.push('/')" class="w-3/4 cursor-pointer" alt="logo" />
          <p class="text-primary text-2xl font-semibold">8 (800) 890-46-56</p>
          <img src="/card.png" class="w-3/4 cursor-pointer" alt="card" />
          <p class="font-semibold underline opacity-50 cursor-pointer">
            Политика конфидециальности
          </p>
          <p class="font-semibold underline opacity-50 cursor-pointer">
            Политика конфидециальности
          </p>
          <div class="flex gap-3">
            <button
              v-for="(item, index) in 3"
              :key="index"
              class="h-9 w-9 rounded-full border-2 border-primary text-primary font-semibold"
            >
              VK
            </button>
          </div>
        </div>
        <div
          v-for="(item, index) in datas"
          :key="index"
          class="text-primary"
        >
          <h4 :class="index == 2 ? 'text-transparent': '' " class="mb-8">{{ datas[index].title }}</h4>
            <p class="cursor-pointer hover:underline mb-[27px] opacity-50" v-for="(item, index2) in datas[index].info" :key="index2">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const router = useRouter();

const datas = ref([
  {
    title: "Покупателям",
    info: [
      "О компании",
      "Доставка и оплата",
      "Возврат",
      "Гарантии",
      "Контакты",
      "Блог",
    ],
  },
  {
    title: "Товары",
    info: [
      "Люстры",
      "Светильники",
      "Бра",
      "Торшеры",
      "Комплектуюшие",
      "Настольные лампы",
    ],
  },
  {
    title: "Товары",
    info: [
      "Споты",
      "Трековые светильники",
      "Уличные светильники",
      "Технические светильники",
      "Светодиодные ленты",
    ],
  },
]);
</script>
