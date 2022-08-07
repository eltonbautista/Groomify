<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "./MainButton.vue";

interface IBreeds {
  dogSize: string;
  price: string;
  breeds: {
    one: string;
    two: string;
    three: string;
  };
}

export default defineComponent({
  props: {
    displayInformation: {
      required: true,
      type: Object as () => IBreeds,
    },
  },
  components: { MainButton },
});
</script>
<template>
  <div class="price-display-wrap">
    <div class="display-image"></div>
    <h1 class="dog-size-wrap">
      <span class="size-adjective">{{ displayInformation.dogSize }}</span>
      <span class="animal-description">Dogs</span>
    </h1>
    <p class="breeds-wrap">
      <span class="breeds-one">{{ displayInformation.breeds.one }}</span>
      <span class="breeds-two">{{ displayInformation.breeds.two }}</span>
      <span class="breeds-three">{{ displayInformation.breeds.three }}</span>
    </p>
    <h1>Starts from: ${{ displayInformation.price }}</h1>
    <MainButton
      button-text="Learn More &nbsp; &rarrw;"
      background-color="var(--color-text-main)"
      text-color="var(--bg-color-v1)"
    />
  </div>
</template>
<style lang="scss" scoped></style>
