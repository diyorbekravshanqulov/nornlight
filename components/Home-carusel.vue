<template>
  <div class="container py-[71px]">
    <div class="flex w-full items-center mb-[71px] justify-between">
      <h4 class="text-primary font-bold text-[40px]">
        Только проверенные бренды
      </h4>
      <div class="flex gap-[10px] items-center">
        <button class="text-2xl h-[26px] w-[39px] flex items-center justify-center  opacity-50 border border-primary rounded-full">
          <span class="mb-1.5">&#8592;</span>
        </button>
        <button class="text-2xl h-[26px] w-[39px] flex items-center justify-center border border-primary rounded-full">
          <span class="mb-1.5">&rarr;</span>
        </button>

      </div>
    </div>
    <div class="carousel-wrapper">
      <div class="carousel">
        <!-- Render each logo item -->
        <div class="item" v-for="(item, index) in logos" :key="index">
          <img :src="item.src" :alt="item.alt" />
        </div>
        <!-- Duplicate items to ensure smooth scrolling -->
        <div
          class="item"
          v-for="(item, index) in logos"
          :key="'duplicate-' + index"
        >
          <img :src="item.src" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { src: "/brand1.png", alt: "Brand 1" },
  { src: "/brand2.png", alt: "Brand 2" },
  { src: "/brand3.png", alt: "Brand 3" },
  { src: "/brand1.png", alt: "Brand 1" },
  { src: "/brand2.png", alt: "Brand 2" },
  { src: "/brand3.png", alt: "Brand 3" },
  { src: "/brand1.png", alt: "Brand 1" },
  { src: "/brand2.png", alt: "Brand 2" },
  { src: "/brand3.png", alt: "Brand 3" },
];
</script>

<style scoped>
:root {
  --bg-clr: #64748b;
}

.carousel-wrapper {
  --width: 300px; /* Adjust as needed */
  --num-items: 9; /* Number of items to show */
  --ani-speed: 30s; /* Animation speed */

  width: 100%; /* Full width */
  overflow: hidden;
  position: relative;
}
.carousel-wrapper::before,
.carousel-wrapper::after {
  content: "";
  position: absolute;
  width: 100%; /* Adjust gradient width as needed */
  height: 100%;
  z-index: 1;
  top: 0;
}
.carousel-wrapper::before {
  left: 0;
  background-image: linear-gradient(
    to right,
    var(--bg-clr) 0%,
    transparent 100%
  );
}
.carousel-wrapper::after {
  right: 0;
  background-image: linear-gradient(
    to left,
    var(--bg-clr) 0%,
    transparent 100%
  );
}

.carousel {
  display: flex;
  align-items: center;
  animation: slide var(--ani-speed) linear infinite;
}
.item {
  flex: 1 0 var(--width);
  text-align: center;
  padding: 1rem;
}
.item > img {
  width: 100%; /* Ensure the image fills its container */
  height: auto; /* Maintain aspect ratio */
  max-height: 120px; /* Adjust maximum height as needed */
  object-fit: contain; /* Ensure the image scales without cropping */
}

@keyframes slide {
  100% {
    transform: translateX(calc(var(--width) * var(--num-items) * -1));
  }
}
</style>
