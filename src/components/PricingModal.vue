<script lang="ts">
import { defineComponent } from "vue";
import LaCarte from "./LaCarte.vue";

export default defineComponent({
  props: {
    filler: String,
  },
  data() {
    return {
      stylesInclude: [
        "Bath",
        "Blow dry",
        "Nail trim",
        "Ear cleaning",
        "Ear plucking",
        "Cologne or perfume",
        "Ribbons or bandana",
      ],
      carteExample: {
        service: "Nail Trim",
        price: "$5.00",
        isIncluded: false,
      },
    };
  },
  components: { LaCarte },
});
</script>
<template>
  <div class="modal-background"></div>

  <div class="pricing-modal-wrapper">
    <form class="order-form">
      <div class="pricing-modal">
        <div class="modal-header-wrapper">
          <h1 class="modal-header">My <em>Salon</em></h1>
        </div>
        <div class="carte-wrapper">
          <h2 class="carte-header">A La Carte</h2>
          <LaCarte :la-carte="carteExample" />
          <!--TODO MAP LaCarte components here  -->
        </div>
        <div class="carousel"></div>
        <div class="included-wrapper">
          <!--TODO MAP included list component here -->
        </div>
        <div class="styling-services-wrapper">
          <!--TODO MAP StylingService components here -->
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.modal-background {
  position: absolute;
  background: blue;
}
.pricing-modal-wrapper {
  display: grid;
  justify-items: center;

  * {
    border: 1px solid black;
  }
}

.pricing-modal {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  height: 90vh;
  grid-template-rows: repeat(12, 1fr);
}

.order-form {
  width: 100%;
  max-width: var(--max-width);
}

.modal-header-wrapper {
  grid-area: 1/4/2/12;
  > h1 {
    height: 100%;
    font-size: var(--font-size-xl);
    text-align: center;
  }
}
.carte-wrapper {
  grid-area: 3/1/7/7;
}

.carousel {
  grid-area: 3/9/9/15;
}
.included-wrapper {
  grid-area: 7/1/9/7;
}
.styling-services-wrapper {
  grid-area: 9/1/13/15;
}
</style>
