<script lang="ts">
import { defineComponent } from "vue";
import HelcimCarousel from "./HelcimCarousel.vue";
export default defineComponent({
  data() {
    return {};
  },
  components: { HelcimCarousel },
});
</script>
<template>
  <section class="container">
    <div class="grid">
      <HelcimCarousel />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  background-color: var(--homepage-gradient-one);
  display: grid;
  justify-items: center;
  padding: 4em 0;
}
.grid {
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto repeat(2, 1fr);
}
</style>
