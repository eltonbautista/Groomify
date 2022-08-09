<script lang="ts">
import { defineComponent } from "vue";

interface ILaCarteItem {
  service: string;
  price: number | string | void | null;
  isIncluded: boolean;
}

// TODO: isIncluded to be toggled by checkbox.

export default defineComponent({
  props: {
    laCarte: {
      required: true,
      type: Object as () => ILaCarteItem,
    },
  },
});
</script>
<template>
  <div class="la-carte-item">
    <span class="la-carte-service">{{ laCarte.service }}</span>
    <span class="la-carte-price">{{ laCarte.price }}</span>
    <span class="la-carte-button-wrap">
      <input
        class="la-carte-button"
        type="checkbox"
        :checked="laCarte.isIncluded"
      />
    </span>
  </div>
</template>
<style lang="scss" scoped>
.la-carte-item {
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  align-items: center;
}
</style>
