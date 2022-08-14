<script lang="ts">
import dog from "../assets/about-dog.png";
import { defineComponent } from "vue";
import MainButton from "./MainButton.vue";
export default defineComponent({
  data() {
    return {
      dog,
    };
  },
  components: {
    MainButton,
  },
});
</script>

<template>
  <section id="About" class="container">
    <div class="about">
      <div class="about-header">
        <h1>Who&nbsp;<em>we</em>&nbsp;are</h1>
      </div>
      <div class="about-text">
        <div class="top">
          <p>
            Here at <em>Groomify</em> we take <em>pride</em> in the work that we
            do.
          </p>
        </div>
        <div class="bottom">
          <p>
            We’re pet owners, so we know how important your furry friends are to
            you - trust us when we say; they’re important to us too.
          </p>
        </div>

        <div class="button-container">
          <MainButton
            button-text="Contact Us &nbsp; &#9990;"
            background-color="var(--color-text-accent)"
            text-color="var(--color-text-main)"
          />
        </div>
      </div>
      <div class="about-img">
        <div class="backdrop"></div>
        <div class="image">
          <img :src="dog" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: var(--bg-color-about);
  font-family: var(--common-font-family);
  padding-top: 2em;
  padding-bottom: 8em;
}

.about {
  max-width: var(--max-width);
  margin: auto;
  display: grid;
  grid-template-areas:
    "header header"
    "text image";
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 28.625rem;
}

@media screen and (max-width: 768px) {
  .about {
    margin: 0;
    grid-template-areas:
      "header"
      "image"
      "text";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
}

.about-header {
  grid-area: header;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 4.6875rem;
  width: 50%;

  @media screen and (max-width: 390px) {
    margin: 0;
    width: 100%;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.3125rem;
    width: 100%;

    > em {
      font-weight: 900;
      color: var(--homepage-gradient-four);
    }

    font-size: var(--font-size-xxl);
    font-weight: 500;
    color: var(--color-text-main);
    line-height: 6.3125rem;
  }
}

.about-text {
  grid-area: text;
  max-width: 46.875rem;
  padding: 0 3em;
  margin: 0 auto;

  .top {
    p {
      font-size: 3.125rem;
      font-weight: 500;
      padding-bottom: 2.375rem;
    }

    em {
      font-weight: 800;
      color: var(--color-text-accent);
    }
  }

  .bottom {
    p {
      font-size: 1.875rem;
      font-weight: 500;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    padding-top: 5.939rem;

    .button {
      width: 100%;
    }
  }
}

.about-img {
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid var(--color-text-main);
  max-width: 26.125rem;
  height: 33.25rem;

  @media screen and (max-width: 768px) {
    margin: 9.375rem auto;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-text-accent);
    max-width: 20.75rem;
    height: 29.125rem;
  }

  .backdrop {
    position: absolute;
    width: 16rem;
    right: -2rem;

    @media screen and (max-width: 390px) {
      width: 12.5rem;
      right: -1.5625rem;
    }

    height: 45.25rem;
    background-color: var(--color-text-main);
  }

  img {
    width: 18.5625rem;
    height: 24.2763rem;
  }
}
</style>
