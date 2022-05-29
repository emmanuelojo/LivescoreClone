<script setup lang="ts">
import BottomNavbar from "./components/BottomNavbar.vue";
import TopNavbar from "./components/TopNavbar.vue";
</script>

<template>
  <div class="bg-n-black h-screen overflow-auto hide-scrollbar">
    <TopNavbar />
    <router-view />
    <BottomNavbar />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  font-family: Roboto, sans-serif;
}
html {
  scroll-behavior: smooth;
}

*,
body {
  margin: 0;
  padding: 0;
}
</style>
