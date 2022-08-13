<script lang="ts">
import { defineComponent } from "vue";
import ServiceChild from "./ServiceChild.vue";

interface IStylingServices {
  Breed: string;
  "Bath + Tidy": number;
  "BT + HS": number;
  "Kennel Clip": number;
  "Teddy Bear": number;
  "Breed Clip": number;
  [key: string]: string | number;
}

export default defineComponent({
  props: {
    information: {
      required: true,
      type: Array as () => IStylingServices[],
    },
    objectIndex: {
      required: true,
      type: Number,
    },
    stylingService: {
      required: true,
      type: String,
    },
  },
  components: { ServiceChild },
});
</script>
<template>
  <div class="service-wrapper">
    <h3 class="service-header">{{ stylingService }}</h3>
    <div class="service-child-wrapper">
      <ServiceChild
        v-for="(obj, index) in information"
        :key="index"
        :text="obj[Object.keys(obj)[objectIndex]]"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.service-wrapper {
  display: grid;
  > h3 {
    justify-self: center;
    color: var(--color-text-main);
    height: fit-content;
    align-self: center;
  }

  @media screen and (max-width: 767px) {
    grid-template-rows: 0.1fr 1fr;
    > h3 {
      font-size: var(--font-size-sm);
    }
  }
}

.service-child-wrapper {
  display: grid;

  > div:nth-child(1n + 1) {
    border-bottom: none;
    border-right: none;
    border-left: none;
  }

  > div {
    border: 1px solid var(--color-text-main);
  }
}
</style>
