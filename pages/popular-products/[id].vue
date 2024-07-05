<template>
    <div class="container my-20">
        <h1>{{ route.params.id }}</h1>
    </div>
</template>

<script setup>
const route = useRoute();

const products = ref();

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
