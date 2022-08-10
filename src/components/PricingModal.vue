<script lang="ts">
import { defineComponent } from "vue";
import LaCarte from "./LaCarte.vue";
import pricingData from "../data/carte_service.json";
import StylingService from "./StylingService.vue";

export default defineComponent({
  props: {
    breedServicesConditional: String,
  },
  data() {
    return {
      carteServices: pricingData.carteServices,
      smallServices: pricingData.smallServices,
      mediumServices: pricingData.mediumServices,
      largeServices: pricingData.largeServices,
      includedServices: pricingData.includedServices,
    };
  },
  components: { LaCarte, StylingService },
});
// NOTE: PricingModal goes into the MyPricing page
// TODO: Make .styling-services-wrapper DRY
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
          <h2 class="carte-header"><em>A La Carte</em></h2>
          <LaCarte
            v-for="(service, index) in carteServices"
            :key="index"
            :la-carte="service"
          />
        </div>
        <div class="carousel"></div>
        <div class="included-wrapper">
          <h2><em>Included</em></h2>
          <ul class="included-services">
            <div>
              <li
                class="inc-service"
                v-for="(service, index) in includedServices"
                :key="index"
              >
                {{ service }}
              </li>
            </div>
          </ul>
        </div>
        <div
          class="styling-services-wrapper"
          v-if="breedServicesConditional === 'small'"
        >
          <StylingService
            v-for="(obj, index) in smallServices.slice(0, 6)"
            :styling-service="Object.keys(obj)[index]"
            :key="index"
            :information="smallServices"
            :object-index="index"
          />
        </div>
        <div
          class="styling-services-wrapper"
          v-else-if="breedServicesConditional === 'medium'"
        >
          <StylingService
            v-for="(obj, index) in mediumServices.slice(0, 6)"
            :styling-service="Object.keys(obj)[index]"
            :key="index"
            :information="mediumServices"
            :object-index="index"
          />
        </div>
        <div
          class="styling-services-wrapper"
          v-else-if="breedServicesConditional === 'large'"
        >
          <StylingService
            v-for="(obj, index) in largeServices.slice(0, 6)"
            :styling-service="Object.keys(obj)[index]"
            :key="index"
            :information="largeServices"
            :object-index="index"
          />
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
  grid-area: 3/1/6/7;
  display: grid;
}

.carousel {
  grid-area: 3/9/9/15;
}
.included-wrapper {
  grid-area: 7/1/9/7;
  display: grid;

  .included-services {
    list-style: none;
    margin: 0;
    padding: 0;

    > div {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      height: 100%;
    }
  }

  .inc-service {
    padding: 0;
    margin: 0;
    font-size: var(--font-size-sm);
  }
}
.styling-services-wrapper {
  grid-area: 9/1/13/15;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
