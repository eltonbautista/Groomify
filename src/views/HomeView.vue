<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import About from "@/components/About.vue";
</script>
<!-- Please add About and Pricing components just under <TheWelcome />. Make sure to follow TheWelcome's syntax! -->
<template>
  <main>
    <TheWelcome />
  </main>
  <!-- <main>
    <About />
  </main> -->
</template>

<style lang="scss" scoped>
main {
  display: grid;
}
</style>
