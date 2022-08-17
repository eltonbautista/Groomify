<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "./MainButton.vue";
import heroImgBig from "../assets/hero-dog-1222.png";
import heroImgMed from "../assets/hero-dog-761.png";
import heroImgSm from "../assets/hero-dog-398.png";

export default defineComponent({
  data() {
    return {
      heroImgBig: heroImgBig,
      heroImgMed: heroImgMed,
      heroImgSm: heroImgSm,
    };
  },
  components: {
    MainButton,
  },
});
</script>

<template>
  <section id="Hero" class="container">
    <div class="hero grid">
      <div class="main-headline-text">
        <h1>
          <span><em>Woof</em> there ever be </span>
          <span> a better time than </span>
          <span><em>meow?</em> <em>Grrrive</em> them a</span>
          <span> <em> scents</em> of</span>
          <span> freedom. They <em>arf</em> man's</span>
          <span> <em> best friend</em> after all!</span>
        </h1>
        <p>
          <span
            >We are not <em>kitten</em> you when we say your furry friends will
            be receiving the best of the best.</span
          >
          <span
            >&nbsp;<em>Pup</em> down to our any of our <em>Calgary</em> parlours
            now, or inquire about our <em>mobile</em> service!
          </span>
        </p>
        <div class="headline-buttons-wrap">
          <div>
            <MainButton
              button-text="Book a Visit &nbsp; &rarrw;"
              background-color="var(--color-text-main)"
              text-color="var(--bg-color-v1)"
            />
            <MainButton
              button-text="Contact Us &nbsp; &#9990;"
              background-color="var(--color-text-sub)"
              text-color="var(--color-text-main)"
            />
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="main-headline-image">
          <img
            :src="heroImgBig"
            alt="hero-doggo"
            sizes="(max-width: 1400px) 100vw, 1400px"
            :srcset="`${heroImgBig} 1222w, ${heroImgMed} 761w, ${heroImgSm} 398w`"
          />
        </div>
        <div class="accent-one"></div>
        <div class="accent-two"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--bg-color-v1);
  padding-top: 80px;
  background: linear-gradient(
      296.37deg,
      #ffd494 6.69%,
      rgba(255, 190, 169, 0) 33.83%
    ),
    linear-gradient(129.1deg, #ea8ea4 -1.7%, rgba(253, 229, 178, 0) 72.42%),
    linear-gradient(26.22deg, #7735e4 2.78%, #da70a9 30.98%, #f3c690 53.17%);
  width: 100%;
}

.hero {
  padding-top: 3em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: auto;
  grid-template-rows: repeat(1, 1fr);
  padding-bottom: 5em;

  .main-headline-text {
    grid-area: 1/1/2/6;
    em {
      color: var(--color-text-sub);
      font-weight: 500;
    }
    > h1 {
      padding-bottom: 1.5em;
      > span {
        font-size: var(--font-size-xl);
        box-sizing: border-box;
        letter-spacing: 0.03em;
        line-height: 1.2;
        font-weight: 500;
      }
      > span:nth-child(2),
      > span:last-of-type {
        letter-spacing: 0.075em;
      }
    }
    > p {
      padding-bottom: 2em;
      > span {
        font-size: var(--font-size-base);
      }
    }
  }

  .headline-buttons-wrap {
    display: grid;
    > div {
      display: grid;
      width: 75%;
      gap: 0.5em;
      justify-self: center;
    }
  }

  .hero-image {
    grid-area: 1/6/10/10;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  .main-headline-image {
    max-width: 100%;
    min-height: 100%;
    z-index: 1;
    grid-area: 1/1/10/9;
  }

  .accent-one {
    grid-area: 1/4/10/8;
    background-color: var(--bg-color-about);
    margin-top: 1em;
    height: 92.5%;
  }

  .accent-two {
    grid-area: 1/4/10/9;
    border: 1px solid black;
    border-left: none;
    margin-top: 0.25em;
  }

  /* All screens from 768px to 1024px */
  @media screen and (min-width: 1025px) and (max-width: 1250px) {
    padding-left: 3em;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr auto;

    .main-headline-text {
      grid-area: 1/2/2/8;

      > h1 {
        > span:first-of-type {
          letter-spacing: 0.01em;
          font-size: calc(var(--font-size-xl) + 0.175em);
        }
        > span:nth-child(2) {
          letter-spacing: 0.15em;
          font-size: calc(var(--font-size-xl) + 0.175em);
        }
        > span:nth-child(1n + 3) {
          letter-spacing: 0.08em;
        }
        > span:last-of-type {
          font-size: calc(var(--font-size-xl) + 0.2em);
        }
      }
    }

    .hero-image {
      grid-area: 2/1/3/9;
    }

    .main-headline-image {
      grid-area: 1/2/11/7;
      background-size: 95%;
    }

    .main-headline-text > p > span {
      font-size: var(--font-size-lg);
    }

    .headline-buttons-wrap > div {
      width: 50%;
      margin-bottom: 4em;
    }

    .accent-one {
      grid-area: 1/4/11/7;
      margin-top: 2.5em;
      margin-right: 3em;
    }

    .accent-two {
      grid-area: 1/4/12/7;
      height: 95%;
    }
  }

  /* Any screen from 320px to 767px */
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 0em;

    .main-headline-text {
      > h1 {
        > span:first-of-type {
          letter-spacing: 0.026em;
          font-size: calc(var(--font-size-xl) + 0.3em);
        }
        > span:nth-child(2) {
          letter-spacing: 0.01em;
          font-size: calc(var(--font-size-xl) + 0.34em);
        }
        > span:nth-child(1n + 3) {
          letter-spacing: 0em;
          font-size: calc(var(--font-size-xl) + 0.35em);
        }
        > span:nth-child(3) {
          font-size: calc(var(--font-size-xl) + 0.2em);
        }
        > span:nth-child(4) {
          letter-spacing: 0.05em;
        }
        > span:nth-child(5) {
          letter-spacing: 0em;
          font-size: calc(var(--font-size-xl) - 0.1em);
        }
        > span:nth-child(6) {
          letter-spacing: 0em;
          font-size: calc(var(--font-size-xl) - 0.1em);
        }
      }
    }

    .main-headline-image {
      grid-area: 1/1/13/9;
      background-size: 100%;
    }

    .main-headline-text > p > span {
      font-size: calc(var(--font-size-lg) - 0.25em);
    }

    .headline-buttons-wrap > div {
      width: 60%;
    }
    .accent-one {
      grid-area: 1/4/12/9;
      margin-left: 1em;
    }

    .accent-two {
      grid-area: 1/5/13/9;
      max-width: 85%;
    }
  }
}
</style>
