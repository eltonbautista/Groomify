<script setup lang="ts">
import MyHero from "../components/MyHero.vue";
import MyAbout from "../components/MyAbout.vue";
import MyContact from "../components/MyContact.vue";
import MyPricing from "../components/MyPricing.vue";
import MyFeedback from "../components/MyFeedback.vue";
import MyFooter from "../components/MyFooter.vue";
</script>
<template>
  <main>
    <MyHero />
    <MyAbout />
    <MyPricing />
    <MyFeedback />
    <MyContact />
    <MyFooter />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
}
</style>
