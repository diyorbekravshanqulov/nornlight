<template>
  <div class="bg-primary w-[23%] p-5 h-screen fixed top-0 left-0">
    <div class="flex items-center gap-3 mb-9 p-2">
      <Icon icon="cil:arrow-left" class="text-[28px] cursor-pointer text-white" />
      <h3 class="text-white text-[28px] font-semibold">Admin Dashboard</h3>
    </div>
    <div v-for="(item, index) in sideData" :key="index" @click="setActive(index)"
         :class="['cursor-pointer flex mb-2 p-2.5 duration-300 rounded-[8px] items-center gap-3', { 'bg-white/20': activeIndex === index }]">
      <Icon :icon="item.icon" :class="index === 1 ? 'rotate-90' : ''" class="text-[28px] text-white" />
      <h3 class="text-white text-lg font-semibold">{{ item.text }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

const sideData = ref([
  {
    icon: "ph:user",
    text: "Dashboard",
    path: "/"
  },
  {
    icon: "tabler:apps",
    text: "Create product",
    path: "/create-product"
  },
  {
    icon: "bx:edit-alt",
    text: "Manage product",
    path: "/manage-product"
  },
  {
    icon: "lets-icons:order",
    text: "Orders",
    path: "/orders"
  },
]);

const activeIndex = ref(null);

const router = useRouter();

const setActive = (index) => {
  activeIndex.value = index;
  if(index == 0) {
    router.push('/admin/')
  }else if (index == 1) {
    router.push('/admin/create')
  }else if (index == 2) {
    router.push('/admin/manage')
  }else if (index == 3) {
    router.push('/admin/orders')
  }
};
</script>
