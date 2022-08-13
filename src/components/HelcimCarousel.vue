<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "./MainButton.vue";
import HelcimCard from "./HelcimCard.vue";
// 1. Initialize
export default defineComponent({
  data() {
    return {
      cards: [2, 3, 4, 5, 6],
      // Math.floor(cards.length / 2) doesn't work
      // Can't figure out why; count, left, and right magic numbers for now
      count: 2,
      left: 1,
      right: 3,
      reviews: [
        { reviewer: "Lori Johnson", text: "5 Stars what an awesome company!" },
        {
          reviewer: "Kyle Willems",
          text: "I absolutely love these guys! They took such great care of Prince!",
        },
        {
          reviewer: "Robert Kugler",
          text: "Sometimes I don't even feel like taking a shower, but these guys could definitely get me through those times!",
        },
        {
          reviewer: "Elton Bautista",
          text: "I love the energy just as much as Packer did!!",
        },
        { reviewer: "Robert Downey Jr.", text: "Keep going! Never give up!!" },
      ],
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
        return;
      } else if (this.count < 0) {
        this.count = this.cards.length - 1;
        this.left = this.count - 1;
        return;
      }
    },
  },
  components: { HelcimCard },
});
</script>
<template>
  <div class="carousel-wrapper">
    <HelcimCard :reviewer="reviews[left].reviewer" :text="reviews[left].text" />
    <HelcimCard
      :reviewer="reviews[count].reviewer"
      :text="reviews[count].text"
    />
    <HelcimCard
      :reviewer="reviews[right].reviewer"
      :text="reviews[right].text"
    />
    <button @click="carousel('previous')" type="button">Previous</button>
    <button @click="carousel('next')" type="button">Next</button>
  </div>
</template>
<style lang="scss" scoped>
.carousel-wrapper {
  display: grid;
  grid-auto-flow: column;
}
</style>
