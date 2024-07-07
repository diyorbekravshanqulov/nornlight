<template>
  <div class="w-full flex justify-end">
    <div class="w-[77%] px-8 py-[22px]">
      <h3 class="font-medium text-[28px]">Manage product</h3>
      <AdminAdminprod />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  // middleware: ["auth"],
});
</script>
