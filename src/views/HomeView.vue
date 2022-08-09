<script setup lang="ts">
import MyHero from "../components/MyHero.vue";
import MyAbout from "../components/MyAbout.vue";
import MyContact from "../components/MyContact.vue";
import MyPricing from "../components/MyPricing.vue";
import PricingModal from "../components/PricingModal.vue";
</script>
<!-- Please add About and Pricing components just under <TheWelcome />. Make sure to follow TheWelcome's syntax! -->
<template>
  <main>
    <!-- <MyHero />
    <MyAbout />
    <MyPricing />
    <MyContact /> -->
    <PricingModal />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
}
</style>
