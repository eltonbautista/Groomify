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
    stylingService: String,
    area: String,
  },
});
</script>
<template>
  <div class="service-wrapper">
    <h3 class="service-header">{{ stylingService }}</h3>
    <div class="service-child-wrapper">
      <!-- TODO MAP ServiceChild components here here -->
    </div>
  </div>
</template>
