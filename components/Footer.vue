<template>
  <div class="bg-second py-[79px] max-md:py-10">
    <div class="container">
      <div class="flex max-md:flex-col max-md:gap-5 w-full justify-between">
        <div class="flex flex-col md:w-1/4 gap-[35px]">
          <img src="/MainLogo.svg" @click="goToHome" class="w-3/4 max-md:w-1/2 cursor-pointer" alt="logo" />
          <p class="text-primary text-2xl font-semibold">8 (800) 890-46-56</p>
          <img src="/card.png" class="w-3/4 max-md:w-1/2 cursor-pointer" alt="card" />
          <p class="font-semibold underline opacity-50 cursor-pointer" @click="redirectToPrivacyPolicy">
            Политика конфиденциальности
          </p>
          <div class="flex gap-3">
            <button
              v-for="(item, index) in 3"
              :key="index"
              class="h-9 w-9 rounded-full border-2 border-primary text-primary font-semibold"
              @click="navigateToSocialNetwork(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>
        <div v-for="(category, index) in datas" :key="index" class="text-primary">
          <h4 :class="index === 2 ? 'text-transparent' : '' " class="mb-8">{{ category.title }}</h4>
          <p
            v-for="(item, index2) in category.info"
            :key="index2"
            @click="handleNavigation(index, index2)"
            class="cursor-pointer hover:underline mb-[27px] opacity-50"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

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
      "Комплектующие",
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

function goToHome() {
  router.push('/');
}

function redirectToPrivacyPolicy() {
  // Implement your privacy policy route navigation logic here
}

function navigateToSocialNetwork(network) {
  // Implement logic to handle navigation to social networks (e.g., VK)
}

function handleNavigation(categoryIndex, infoIndex) {
  if (categoryIndex === 0 && infoIndex === 0) {
    router.push('/company');
  }
  // Add more navigation conditions as needed
}
</script>
