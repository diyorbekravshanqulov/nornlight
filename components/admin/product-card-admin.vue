<template>
  <div>
    <div v-if="isLoading" class="loading-container"></div>
    <div v-else>
      <div
        class="w-full h-full duration-300 hover:shadow-lg flex gap-4 flex-col"
        @click="navigateToProduct"
      >
        <div class="relative">
          <img :src="props.data.image" alt="Product Image" />
        </div>
        <div
          class="md:py-[27px] px-2 flex flex-col justify-between h-full md:gap-6 gap-3 w-full"
        >
          <p
            class="text-primary font-medium line-clamp-2 max-md:line-clamp-3 md:leading-[22px] leading-[17px] md:text-xl"
          >
            {{ props.data.title }}
          </p>
          <div>
            <p class="font-bold text-[#9F9F9F] line-through text-[12px]">
              {{ props.data.sale }}₽
            </p>
            <div class="flex w-full justify-between items-center">
              <p class="text-primary mt-[6px] font-bold text-xl">
                {{ props.data.price }}₽
              </p>
              <div class="flex items-center gap-[10px]">
                <Icon
                  icon="bx:edit-alt"
                  class="py-2 px-3 bg-white border border-primary text-primary text-[42px] cursor-pointer rounded-full"
                  @click.stop="editProduct"
                  />
                <Icon
                  icon="gg:trash"
                  class="py-2 px-3 bg-primary text-white text-[42px] cursor-pointer rounded-full"
                  @click.stop="removeProduct"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  data: Object,
});
const emit = defineEmits(["send-message"]);

const isLoading = ref(false);
const router = useRouter();

const editProduct = () => {
  router.push(`/admin/edit/${props.data.id}`);
};

const navigateToProduct = () => {
  router.push(`/popular-products/${props.data.id}`);
};


const removeProduct = async () => {
  isLoading.value = true;
  try {
    const response = await axios.delete(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${props.data.id}`
    );
    console.log("Product removed successfully:", response.data);
    emit("send-message", "Product removed successfully");
  } catch (error) {
    console.error("Error removing product:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
