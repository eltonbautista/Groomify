<script lang="ts">
import { defineComponent } from "vue";
import LaCarte from "./LaCarte.vue";
import pricingData from "../data/carte_service.json";
import StylingService from "./StylingService.vue";
import MainButton from "./MainButton.vue";

export default defineComponent({
  props: {
    breedServicesConditional: String,
    togglePricing: {
      required: true,
      type: Function,
    },
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
  components: { LaCarte, StylingService, MainButton },
});
</script>
<template>
  <div class="pricing-modal-wrapper">
    <form class="order-form">
      <div class="pricing-modal">
        <div class="modal-header-wrapper">
          <h1 class="modal-header">My <em>Salon</em></h1>
          <MainButton :button-text="'Close'" @click="togglePricing('')" />
        </div>
        <div class="carte-wrapper">
          <h2 class="carte-header"><em>A La Carte</em></h2>
          <LaCarte
            v-for="(service, index) in carteServices"
            :key="index"
            :la-carte="service"
          />
        </div>
        <div class="legend">
          <h2><em>Legend</em></h2>

          <div>
            <h5>Bath and Tidy (BT)</h5>
            <p>
              It's not always necessary to give a complete haircut at every
              visit. I provide a service called a Bath and Tidy. A Bath and Tidy
              consists of: bath, blow dry, brushed and combed, nails trimmed,
              cleaning of the ears, clearing hair from the groin and bum, light
              trim on the feet and feathering's, and cleaning up around the eyes
              and face.
            </p>
          </div>

          <div>
            <h5>Hand Strip (HS)</h5>
            <p>
              Handstripping is generally done on wire coat breeds and involves
              pulling the dead hair out, instead of clipping, with a special
              stripping knife so a new wire coat can grow in. Although it may
              sound painful, I assure you, when done properly, it is not. Wire
              hair is not attached like our own hair or breeds with other types
              of coats.
            </p>
          </div>
          <div>
            <h5>BT + HS</h5>
            <p>As above, but also includes a light hand strip of the saddle.</p>
          </div>
          <div>
            <h5>Kennel Clip</h5>
            <p>
              A kennel clip leaves the entire body one length, leaving the head,
              face, and tail to scissor clip. Kennel clips are clipper cut from
              1/4" down to 1/16" finished length. Clips shorter than 1/16" are
              only performed on extremely matted dogs when there is no other
              alternative.
            </p>
          </div>
          <div>
            <h5>Teddy Bear</h5>
            <p>
              A Teddy Bear cut is scissor cut 1/2" or longer and gives the dog
              that "long and fluffy" look.
            </p>
          </div>
          <div>
            <h5>Breed Clip</h5>
            <p>
              Breed Clips are breed specific cuts and are either scissored or
              clipper cut as required.
            </p>
          </div>
        </div>
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
          v-if="breedServicesConditional === 'Small'"
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
          v-else-if="breedServicesConditional === 'Medium'"
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
          v-else-if="breedServicesConditional === 'Large'"
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
.pricing-modal-wrapper {
  display: grid;
  justify-items: center;
  grid-area: 2/2/7/14;
  z-index: 5;

  * {
    color: var(--color-text-accent-v2);
  }
  em {
    color: var(--color-text-sub);
  }
}
.pricing-modal-wrapper.hidden {
  visibility: hidden;
}

.pricing-modal {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: var(--homepage-gradient-one);
  padding: 0 2em 2em 2em;

  h2 {
    color: var(--color-text-sub);
  }
}

.order-form {
  width: 100%;
  max-width: var(--max-width);
}

.modal-header-wrapper {
  grid-area: 1/1/2/15;
  display: grid;
  grid-template-columns: 1fr auto;
  > h1 {
    height: 100%;
    font-size: var(--font-size-xl);
    text-align: center;
    font-weight: 500;
    color: var(--color-text-accent-v2);

    > em {
      color: var(--color-text-sub);
    }
  }
}
.carte-wrapper {
  grid-area: 3/1/6/7;
  display: grid;
}

.legend {
  grid-area: 3/7/8/15;
  position: relative;

  p {
    font-size: 0.7em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p:hover {
    font-size: 0.9em;
    overflow: visible;
    white-space: normal;
  }
}
.included-wrapper {
  grid-area: 6/1/8/7;
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
  > div {
    border: 1px solid var(--color-text-accent-v2);
  }
  > div:nth-child(1n + 1) {
    border-right: none;
  }
  > div:nth-child(6) {
    border-right: 1px solid var(--color-text-accent-v2);
  }
}
</style>
