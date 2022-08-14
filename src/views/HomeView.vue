<script setup lang="ts">
import MyHero from "../components/MyHero.vue";
import MyAbout from "../components/MyAbout.vue";
import MyContact from "../components/MyContact.vue";
import MyPricing from "../components/MyPricing.vue";
import MyFeedback from "../components/MyFeedback.vue";
</script>
<template>
  <main>
    <MyHero />
    <MyAbout />
    <MyPricing />
    <MyFeedback />
    <MyContact />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
}
</style>
