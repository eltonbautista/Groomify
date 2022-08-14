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
    <p class="service-child-text">{{ text }}</p>
  </div>
</template>
<style lang="scss" scoped>
.service-child-wrap {
  max-width: 100%;
  display: grid;
  align-items: center;
}
.service-child-text {
  font-size: var(--font-size-sm);
  text-align: center;
}

@media screen and (max-width: 768px) {
  .service-child-text {
    font-size: var(--font-size-sm);
    white-space: nowrap;
    text-overflow: hidden;
    overflow: hidden;
    padding: 0.5em;
  }
  .service-child-text:hover {
    font-size: var(--font-size-sm);
    overflow: visible;
    text-overflow: ellipsis;
    white-space: normal;
  }
}
</style>
