<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheNav from "./components/TheNav.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <TheNav />
    </div>
  </header>

  <RouterView />
</template>
<style lang="scss" scoped>
.wrapper {
  background: black;
}
</style>
