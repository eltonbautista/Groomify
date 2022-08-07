<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
</script>
<!-- Please add About and Pricing components just under <TheWelcome />. Make sure to follow TheWelcome's syntax! -->
<template>
  <main>
    <Hero />
  </main>
  <main>
    <About />
  </main>
  <main>
    <Contact />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
}
</style>
