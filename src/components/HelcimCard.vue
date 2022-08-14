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
  background: var(--bg-color-v1);
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
      width: 200px;
    }

    @media screen and (max-width: 1024px) {
      > h1 {
        font-size: var(--font-size-sm);
      }

      > h3 {
        font-size: var(--font-size-sm);
      }
      > p {
        font-size: var(--font-size-base);
        width: 100px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .left,
  .leftAlt,
  .right,
  .rightAlt {
    display: none;
  }
}

.middle {
  transition: 300ms ease-in-out all;
  transition-delay: 0ms;
  transform: scale(1.1);
  opacity: 1;
}

.middleAlt {
  transition: 300ms ease-in-out all;
  opacity: 1;
  transform: scale(1);
  background-color: var(--homepage-gradient-one);
  color: var(--color-text-sub);
}

.left {
  transition: 200ms ease-in-out transform, 200ms ease-in opacity;
  transition-delay: 0ms;
  opacity: 1;
  transform: scale(0.9);
}

.leftAlt {
  transition: 200ms ease-in-out transform, 200ms ease-in opacity;
  transition-delay: 0ms;
  transform: scale(0.9) translate(100%);
  opacity: 0;
}

.right {
  transition: 200ms ease-in-out transform, 200ms ease-in opacity;
  transition-delay: 0ms;
  opacity: 1;
  transform: scale(0.9);
}

.rightAlt {
  transition: 200ms ease-in transform, 200ms ease-in opacity;
  transition-delay: 0ms;
  transform: scale(0.9) translate(-100%);
  opacity: 0;
}
</style>
