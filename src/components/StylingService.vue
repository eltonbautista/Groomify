<script lang="ts">
import { defineComponent } from "vue";

interface ILaCarteItem {
  service: string;
  price: number | string | void | null;
  isIncluded: boolean;
}

// TODO: isIncluded to be toggled by checkbox.
// NOTE: Object will look like this. Each key will match a StylingService
// Each key's value will be data for ServiceChild component
// E.g. stylingService: Breed will have a list of breeds being mapped with ServiceChild
// Refer to prototype of example
// {
//   "BREED": "Beagle",
//   "Bath + Tidy": 35,
//   "BT + HS": 52,
//   "Kennel Clip": 52,
//   "Teddy Bear": 52,
//   "Breed Clip": 52
// },
export default defineComponent({
  props: {
    laCarte: {
      required: true,
      type: Object as () => ILaCarteItem,
    },
    stylingService: String,
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
