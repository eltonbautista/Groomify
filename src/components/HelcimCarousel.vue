<script lang="ts">
import { defineComponent } from "vue";
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
    };
  },
  methods: {
    // Main function of carousel logic.
    carousel(dir: string) {
      // dir controls direction of carousel
      if (dir == "next") {
        this.count += 1;
      } else if (dir == "previous") {
        this.count -= 1;
      }
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
});
</script>
<template>
  <div>L: {{ cards[left] }} C: {{ cards[count] }} R: {{ cards[right] }}</div>
  <button @click="carousel('next')">Increment</button>
  <button @click="carousel('previous')">Decrement</button>
</template>
