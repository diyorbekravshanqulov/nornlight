<template>
  <div class="w-full flex justify-end">
    <div class="w-[77%] px-8 py-[22px]">
      <h3 class="font-medium text-[28px] mb-4">Create product</h3>
      <form @submit.prevent="createProduct">
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
          <select class="rounded-[10px] mt-2 p-4 bg-second w-full" required>
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
          class="w-auto mt-6 py-[13px] px-[64px] rounded-[10px] bg-primary text-white font-medium"
          value="Create"
          @click="created"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

definePageMeta({
  layout: "admin",
});

const product = reactive({
  title: "",
  desc: "",
  price: "",
});

const categories = ref([
  "Candles",
  "Books",
  "Electronics",
  "Clothing",
  "Home Decor",
]);

const created = () => {
  router.push("/admin/manage");
};

const router = useRouter();

const createProduct = async () => {
  try {
    const response = await axios.post(
      "https://667d5f3b297972455f64d6c6.mockapi.io/products/products",
      product
    );
    console.log("Product created successfully:", response.data);
    // Redirect to manage page or do something else after successful creation
    router.push("/admin/manage");
  } catch (error) {
    console.error("Error creating product:", error);
  }
};
</script>

<style scoped>
textarea,
input,
select,
option {
  outline: none;
}
</style>
