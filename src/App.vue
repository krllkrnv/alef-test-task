<template>
  <div class="flex flex-col items-center h-screen font-main">
    <header-component class="mb-7"></header-component>
    <main class="w-full flex flex-col items-center">
      <router-view class="w-1/2 h-full"></router-view>
    </main>
    <footer-component class="mt-auto"></footer-component>
  </div>
</template>

<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style lang="scss" scoped></style>
