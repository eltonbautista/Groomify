<script lang="ts">
import { defineComponent } from "vue";

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
    imgSrc: String,
    area: String,
  },
});
const stylesInclude = [
  "Bath",
  "Blow dry",
  "Nail trim",
  "Ear cleaning",
  "Ear plucking",
  "Cologne or perfume",
  "Ribbons or bandana",
];
</script>
<template>
  <div class="modal-background"></div>
  <div class="pricing-modal-wrapper">
    <div class="pricing-modal">
      <form class="order-form">
        <div class="modal-header-wrapper">
          <h1 class="modal-header">My Salon</h1>
        </div>
        <div class="carte-wrapper">
          <h2 class="carte-header">A La Carte</h2>
          <!--TODO MAP LaCarte components here  -->
        </div>
        <div class="carousel"></div>
        <div class="included-wrapper">
          <!--TODO MAP included list component here -->
        </div>
        <div class="styling-services-wrapper">
          <!--TODO MAP StylingService components here -->
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
