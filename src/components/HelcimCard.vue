<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    reviewer: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
});
</script>

<template>
  <div class="card">
    <div>
      <p>{{ text }}</p>
      <h3>- {{ reviewer }}</h3>
      <h1>&#127775; &#127775; &#127775; &#127775; &#127775;</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: grid;
  align-content: center;
  width: 100%;
  background: var(--homepage-gradient-one);
  padding: 2em;
  justify-items: center;
  border-radius: 1em;
  height: 400px;
  > div {
    > h1 {
      text-align: center;
      color: yellow;
    }
    > h3 {
      margin-top: 1em;
      font-size: var(--font-size-base);
    }
    > p {
      font-size: var(--font-size-lg);
    }
    > h3,
    p {
      width: 220px;
      color: var(--homepage-gradient-four);
      padding: 0.5em;
    }

    @media screen and (max-width: 1024px) {
      > h1 {
        font-size: var(--font-size-sm);
      }
      > h3 {
        font-size: var(--font-size-sm);
      }
      > p {
        /* width: 160px; */
        font-size: var(--font-size-lg);
      }
    }
  }
}
</style>
