<template>
  <!-- <Navbar /> -->
   
  <div
    class="absolute md:top-[65px] top-[58px] left-0 z-40 duration-300 h-0  w-0 scale-0 group-hover:w-full group-hover:h-full group-hover:scale-100"
  >
    <div class="md:container bg-transparent h-[400px]">
      <div class="grid rounded md:grid-cols-5 grid-cols-2 overflow-auto bg-white">
        <!-- Left side with category names -->
        <div
          class="bg-white w-full h-[400px] overflow-auto bg-primary/20"
        >
          <div class="w-full h-full py-1">
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="flex flex-col gap-5 w-full"
            >
              <p
                class="font-medium py-[10px] px-4 text-black cursor-pointer max-md:text-sm"
                @click="selectCategory(index)"
                :class="{
                  'text-primary w-full bg-white': selectedCategory === index,
                }"
              >
                {{ category.name }}
              </p>
            </div>
          </div>
        </div>
        <!-- Right side with sub-categories and items -->
        <div
          class="md:col-span-4 bg-white md:grid grid-cols-4 gap-5 overflow-auto h-[400px] px-[33px] py-[15px]"
        >
          <div
            v-if="selectedCategory !== null"
            class="md:grid grid-cols-4 gap-5 col-span-4"
          >
            <div
              v-for="(type, typeIndex) in categories[selectedCategory].type"
              :key="typeIndex"
              class="flex flex-col gap-5"
            >
              <p class="font-medium max-md:text-sm">
                {{ type }}
              </p>
              <div>
                <p
                  class="text-lg font-normal text-[#666] max-md:text-sm"
                  v-for="(data, dataIndex) in categories[selectedCategory].typeOfData[typeIndex]"
                  :key="dataIndex"
                >
                  {{ data }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import categoriesData from "../JSON/data.json";

const categories = reactive(categoriesData.categories);
const selectedCategory = ref(0);

const selectCategory = (index) => {
  selectedCategory.value = index;
};
</script>

