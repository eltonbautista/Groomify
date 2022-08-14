<script lang="ts">
import { defineComponent } from "vue";
import { keys, userReviews } from "../data/data-abstracted";

import HelcimCard from "./HelcimCard.vue";
export default defineComponent({
  data() {
    return {
      cards: [2, 3, 4, 5, 6],
      count: 2,
      left: 1,
      right: 3,
      reviews: userReviews,
      keywords: keys,
      styleLeft: "left",
      styleMiddle: "middle",
      styleRight: "right",
    };
  },
  methods: {
    // Main function of carousel logic.
    carousel(dir: string) {
      // dir controls direction of carousel
      dir === "next" ? (this.count += 1) : (this.count -= 1);

      // sets left & right counters
      if (this.count == this.cards.length - 1) {
        this.right = 0;
        this.left = this.count - 1;
      } else if (this.count == 0) {
        this.left = this.cards.length - 1;
        this.right = this.count + 1;
      } else {
        this.left = this.count - 1;
        this.right = this.count + 1;
      }
      // sets count appropriately if it exceeds n or n-1
      if (this.count > this.cards.length - 1) {
        this.count = 0;
        this.right = this.count + 1;
      } else if (this.count < 0) {
        this.count = this.cards.length - 1;
        this.left = this.count - 1;
      }
      this.styleLeft === "left"
        ? (this.styleLeft = "leftAlt")
        : (this.styleLeft = "left");
      this.styleMiddle === "middle"
        ? (this.styleMiddle = "middleAlt")
        : (this.styleMiddle = "middle");

      this.styleRight === "right"
        ? (this.styleRight = "rightAlt")
        : (this.styleRight = "right");
    },
  },
  components: { HelcimCard },
});
</script>
<template>
  <div class="carousel-wrapper">
    <h1>
      <span
        >We're <em>{{ keywords[count] }} </em></span
      >
      <span> to creating stories</span>
    </h1>
    <HelcimCard
      :reviewer="reviews[left].reviewer"
      :text="reviews[left].text"
      :class="styleLeft"
    />
    <HelcimCard
      :reviewer="reviews[count].reviewer"
      :text="reviews[count].text"
      :class="styleMiddle"
    />
    <HelcimCard
      :reviewer="reviews[right].reviewer"
      :text="reviews[right].text"
      :class="styleRight"
    />
    <div class="button-wrap">
      <button @click="carousel('previous')" type="button">Previous</button>
      <button @click="carousel('next')" type="button">Next</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.carousel-wrapper {
  grid-area: 1/1/4/13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto repeat(1, 1fr);

  gap: 3em;
  padding: 2em;
  position: relative;

  > h1 {
    grid-area: 1/4/1/11;
    color: var(--color-text-accent-v2);
    font-weight: 600;
    line-height: 1.1;
    height: 250px;

    * {
      font-size: var(--font-size-xxl);
      font-weight: 600;
    }
    em {
      color: var(--color-text-sub);
      font-weight: 800;
    }
  }

  > div:nth-child(2) {
    grid-area: 2/1/2/5;
  }
  > div:nth-child(3) {
    grid-area: 2/5/2/9;
  }
  > div:nth-child(4) {
    grid-area: 2/9/2/13;
  }

  .button-wrap {
    display: grid;
    grid-auto-flow: column;
    grid-area: 3/5/3/9;

    > button {
      background: none;
      border: none;
      font-size: var(--font-size-lg);
      color: var(--color-text-sub);
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    > h1 {
      grid-area: 1/1/1/2;
      height: 10em;
    }
    > div:nth-child(3) {
      grid-area: 2/1/2/2;
    }
    .button-wrap {
      grid-area: 3/1/3/2;
    }
  }
}
</style>
