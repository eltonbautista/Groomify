<script lang="ts">
import { defineComponent } from "vue";
import PricingDisplay from "./PricingDisplay.vue";
import shihtzu from "../assets/shih-tzu.png";
import husky from "../assets/contact-dog.png";
import golden from "../assets/golden.png";
import PricingModal from "./PricingModal.vue";
export default defineComponent({
  data() {
    return {
      shihtzu,
      husky,
      golden,
      showPricing: false,
    };
  },
  computed: {
    pricing() {
      return this.showPricing ? "visible" : "hidden";
    },
  },
  methods: {
    togglePricing() {
      this.showPricing = !this.showPricing;
    },
  },
  props: {
    buttonText: String,
    backgroundColor: String,
    textColor: String,
  },
  components: { PricingDisplay, PricingModal },
});
</script>
<template>
  <section :class="`container ${pricing}`">
    <div class="grid">
      <header :class="`banner ${pricing}`">
        <h1>We&nbsp;<em> match </em>&nbsp;our prices!</h1>
      </header>
      <PricingDisplay
        :display-information="{
          dogSize: 'Small',
          breeds: {
            one: 'Bichon, Boston Terrier',
            two: 'Chihuahua, Pekingese',
            three: 'Shih Tzu, Yorkshire Terrier',
          },
          price: '35',
        }"
        :imgSrc="shihtzu"
        :togglePricing="togglePricing"
        class="small"
      />
      <PricingDisplay
        :display-information="{
          dogSize: 'Medium',
          breeds: {
            one: 'Australian Shepherd, Beagle',
            two: 'Cocker Spaniel, Vizsla',
            three: 'Poodle, German Pinscher',
          },
          price: '60',
        }"
        :imgSrc="golden"
        :togglePricing="togglePricing"
        class="medium"
      />
      <PricingDisplay
        :display-information="{
          dogSize: 'Large',
          breeds: {
            one: 'Samoyed, Golden Retriever',
            two: 'Dalmatian, Boxer',
            three: 'German Shepherd, Husky',
          },
          price: '80',
        }"
        :imgSrc="husky"
        :togglePricing="togglePricing"
        class="large"
      />
      <!-- TODO: figure out how to pass different strings to breed-services-conditional depending on button clicked. 
      I think I can use Emits for this. -->
      <PricingModal
        :class="`${pricing}`"
        :breed-services-conditional="'medium'"
      />
      <button @click="togglePricing"></button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.container {
  background-color: var(--bg-color-v1);
  display: grid;
  justify-items: center;
}

.container.visible {
  background: var(--homepage-gradient-one);
}

.banner.visible {
  color: var(--color-text-sub);
  em {
    color: var(--color-text-accent-v2);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(7, 1fr);
  max-width: var(--max-width);
  gap: 1em;
  margin-bottom: 3em;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto 1fr;
    gap: 1em;
  }
}

.banner {
  display: grid;
  grid-area: 1/1/2/14;
  margin-top: 2em;

  @media screen and (max-width: 768px) {
    grid-area: 1/2/2/8;
    margin-bottom: 5em;
  }

  > h1 {
    font-size: var(--font-size-xxl);
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-top: 0.5em;

    @media screen and (min-width: 769px) and (max-width: 1199px) {
      padding-left: 1em;
    }

    @media screen and (max-width: 768px) {
      display: grid;
      justify-items: center;
    }

    > em {
      font-weight: 900;
      color: var(--color-text-sub);
    }
  }
}
</style>
