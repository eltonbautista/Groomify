<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "./MainButton.vue";

interface IBreeds {
  dogSize: string;
  price: string;
  breeds: {
    one: string;
    two: string;
    three: string;
  };
}

export default defineComponent({
  props: {
    displayInformation: {
      required: true,
      type: Object as () => IBreeds,
    },
    imgSrc: String,
    area: String,
  },
  computed: {
    cssProps() {
      return {
        "--img-src": `url(${this.imgSrc})`,
        "--area": this.area,
      };
    },
  },
  components: { MainButton },
});
</script>
<template>
  <div class="price-display-wrap" :style="cssProps">
    <div class="display-image">
      <img :src="imgSrc" />
    </div>
    <div class="dog-size-wrap">
      <h2 class="size-adjective">{{ displayInformation.dogSize }}</h2>
      <h2 class="animal-description">Dogs</h2>
    </div>
    <div class="breeds-wrap">
      <p class="breeds-one">{{ displayInformation.breeds.one }}</p>
      <p class="breeds-two">{{ displayInformation.breeds.two }}</p>
      <p class="breeds-three">{{ displayInformation.breeds.three }}</p>
    </div>
    <div class="starts-from">
      <h1>Starts from: ${{ displayInformation.price }}</h1>
    </div>
    <MainButton
      button-text="Learn More &nbsp; &rarrw;"
      background-color="var(--color-text-main)"
      text-color="var(--bg-color-v1)"
    />
  </div>
</template>
<style lang="scss" scoped>
.price-display-wrap {
  grid-area: var(--area);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background: var(--bg-color-about);
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em 0.2em gray;

  > button {
    grid-area: 6/1/7/5;
    height: 70%;
    width: 80%;
    display: flex;
    justify-content: center;
    justify-self: center;
    line-height: 3;
  }
}
.display-image {
  grid-area: 1/1/4/3;
  > img {
    max-width: 100%;
    max-height: 100%;
    z-index: 5;
    padding-top: 2em;
  }
}

.dog-size-wrap {
  grid-area: 1/3/4/5;
  display: grid;
  justify-items: center;
  align-content: center;

  > h2 {
    max-width: fit-content;
    font-size: calc(var(--font-size-lg) + 1em);
    font-weight: 500;
  }
}

.breeds-wrap {
  grid-area: 4/1/5/5;
  display: grid;
  > p {
    max-width: fit-content;
    justify-self: center;
  }
}

.starts-from {
  grid-area: 5/1/6/5;
  text-align: center;
  display: grid;
  align-items: center;

  > h1 {
    font-size: var(--font-size-lg);
    font-weight: 500;
  }
}
</style>
