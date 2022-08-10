<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: [String, Number],
  },
});
</script>
<template>
  <div class="service-child-wrap">
    <p class="service-child-text">
      {{ text }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.service-child-wrap {
  max-width: 100%;
}
.service-child-text {
  font-size: var(--font-size-sm);
  text-align: center;
}
</style>
