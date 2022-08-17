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
  <section id="Feedback" class="container">
    <div class="grid">
      <HelcimCarousel />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  background: radial-gradient(50% 50% at 50% 50%, #1d1e46 0%, #13132d 100%);
  display: grid;
  justify-items: center;
  padding: 4em 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto repeat(2, 1fr);
}
</style>
