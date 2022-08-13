<script lang="ts">
import { defineComponent } from "vue";
import shihtzu from "../assets/shih-tzu.png";
import husky from "../assets/contact-dog.png";
import golden from "../assets/golden.png";
import PricingModal from "./PricingModal.vue";
import PricingCard from "./PricingCard.vue";
export default defineComponent({
  data() {
    return {
      shihtzu,
      husky,
      golden,
      showPricing: false,
      dataModel: "",
      size: "",
      pricingCardData: [
        {
          displayInformation: {
            dogSize: "Small",
            breeds: {
              one: "Bichon, Boston Terrier",
              two: "Chihuahua, Pekingese",
              three: "Shih Tzu, Yorkshire Terrier",
            },
            price: "35",
          },
          imgSrc: shihtzu,
          togglePricing: this.togglePricing,
          class: "small",
        },
        {
          displayInformation: {
            dogSize: "Medium",
            breeds: {
              one: "Australian Shepherd, Beagle",
              two: "Cocker Spaniel, Vizsla",
              three: "Poodle, German Pinscher",
            },
            price: "45",
          },
          imgSrc: golden,
          togglePricing: this.togglePricing,
          class: "medium",
        },
        {
          displayInformation: {
            dogSize: "Large",
            breeds: {
              one: "Samoyed, Golden Retriever",
              two: "Dalmatian, Boxer",
              three: "German Shepherd, Husky",
            },
            price: "50",
          },
          imgSrc: husky,
          togglePricing: this.togglePricing,
          class: "large",
        },
      ],
    };
  },
  computed: {
    pricing() {
      return this.showPricing ? "visible" : "hidden";
    },
  },
  methods: {
    togglePricing(si: string) {
      this.showPricing = !this.showPricing;
      this.size = si;
    },
  },
  props: {
    buttonText: String,
    backgroundColor: String,
    textColor: String,
  },
  components: { PricingCard, PricingModal },
});
</script>
<template>
  <section :class="`container ${pricing}`">
    <div class="grid">
      <header :class="`banner ${pricing}`">
        <h1>We&nbsp;<em> match </em>&nbsp;our prices!</h1>
      </header>
      <PricingCard
        v-for="(data, index) in pricingCardData"
        :key="index"
        :display-information="data.displayInformation"
        :imgSrc="data.imgSrc"
        :togglePricing="data.togglePricing"
        :class="data.class"
      />
      <PricingModal
        :class="`${pricing}`"
        :breed-services-conditional="size"
        :togglePricing="togglePricing"
      />
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
