<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonText: String,
    backgroundColor: String,
    textColor: String,
  },
});
</script>
<template>
  <section class="container">
    <div class="grid"></div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  background-color: var(--bg-color-v1);
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
</style>
