<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
</script>
<!-- Please add About and Pricing components just under <TheWelcome />. Make sure to follow TheWelcome's syntax! -->
<template>
  <main>
    <TheWelcome />
    <Hero />
    <About />
    <Contact />
    <Pricing />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
}
</style>
