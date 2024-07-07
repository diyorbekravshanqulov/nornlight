<template>
  <div class="w-full flex justify-end">
    <div class="w-[77%] px-8 py-[22px]">
      <h3 class="font-medium text-[28px] mb-4">Edit product</h3>
      <form @submit.prevent="editProduct">
        <div class="mt-4 w-1/2">
          <p class="w-full">Title</p>
          <input
            type="text"
            v-model="product.title"
            class="rounded-[10px] mt-2 p-4 bg-second w-full"
            required
          />
        </div>
        <div class="mt-4 w-1/2">
          <p class="w-full">Price</p>
          <input
            type="text"
            v-model="product.price"
            class="rounded-[10px] mt-2 p-4 bg-second w-full"
            required
          />
        </div>
        <div class="mt-4 w-1/2">
          <p class="w-full">Image URL</p>
          <input
            type="text"
            class="rounded-[10px] mt-2 p-4 bg-second w-full"
            required
          />
        </div>
        <div class="mt-4 w-1/2">
          <p class="w-full">Category</p>
          <select
            class="rounded-[10px] mt-2 p-4 bg-second w-full"
            required
          >
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div class="mt-4 w-1/2">
          <p class="w-full">Description</p>
          <textarea
            v-model="product.desc"
            style="resize: none"
            class="rounded-[10px] mt-2 p-4 bg-second w-full"
            rows="5"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          class="w-auto cursor-pointer mt-6 py-[13px] px-[64px] rounded-[10px] bg-primary text-white font-medium"
          value="Edit"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

definePageMeta({
  layout: 'admin',
});

const product = reactive({
  title: '',
  desc: '',
  price: '',
});

const router = useRouter();

const categories = ref([
  'Candles',
  'Books',
  'Electronics',
  'Clothing',
  'Home Decor',
]);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${route.params.id}`
    );
    const productData = response.data;
    product.title = productData.title;
    product.price = productData.price;
    product.desc = productData.desc;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
});

const editProduct = async () => {
  try {
    const response = await axios.put(
      `https://667d5f3b297972455f64d6c6.mockapi.io/products/products/${route.params.id}`,
      product
    );
    console.log('Product edited successfully:', response.data);
    router.push('/admin/manage'); // Navigate to manage page after editing
  } catch (error) {
    console.error('Error editing product:', error);
  }
};
</script>

<style scoped>
textarea, input, select, option {
  outline: none;
}
</style>
