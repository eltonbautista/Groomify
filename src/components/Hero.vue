<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <section class="container">
    <div class="hero">
      <div class="main-headline-text">
        <h1>
          <span><em>Woof</em> there ever be a</span>
          <span> better time than <em>m</em></span>
          <span><em>eow?</em> <em>Grrrive</em> them a</span>
          <span>n experience th</span>
          <span>ey deserve. They <em>arf</em> yo</span>
          <span>ur best friend after all!</span>
        </h1>
        <p>
          <span
            >We are not <em>kitten</em> you when we say your furry friends will
            be receiving the best of the best.</span
          >
          <span>&nbsp;<em>Pup</em> down to locations now! </span>
        </p>
        <div class="headline-buttons-wrap">
          <div>
            <Button
              button-text="Book a Visit &nbsp; &rarrw;"
              background-color="var(--color-text-main)"
              text-color="var(--bg-color-v1)"
            />
            <Button
              button-text="Contact Us &nbsp; &#9990;"
              background-color="var(--color-text-sub)"
              text-color="var(--color-text-main)"
            />
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="main-headline-image"></div>
        <div class="accent-one"></div>
        <div class="accent-two"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--bg-color-v1);
  width: 100%;
}

.hero {
  padding-top: 3em;
  background-color: var(--bg-color-v1);
  min-height: 100vh;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: auto;
  grid-template-rows: repeat(1, 1fr);

  .main-headline-text {
    grid-area: 1/1/2/6;
  }

  .main-headline-text em {
    color: var(--color-text-sub);
  }

  .main-headline-text > h1 {
    padding-bottom: 1.5em;
  }

  .main-headline-text > h1 > span {
    font-size: var(--font-size-xl);
    box-sizing: border-box;
    letter-spacing: 0.025em;
    line-height: 1.2;
  }

  .main-headline-text > p {
    padding-bottom: 2em;
  }

  .main-headline-text > p > span {
    font-size: var(--font-size-base);
  }

  .headline-buttons-wrap {
    display: grid;
  }

  .headline-buttons-wrap > div {
    display: grid;
    width: 75%;
    gap: 0.5em;
    justify-self: center;
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
    background-image: url("../assets/hero-dog.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 -1em;
    z-index: 1;
    grid-area: 1/1/10/9;
  }

  .accent-one {
    grid-area: 1/4/8/8;
    background-color: var(--color-text-sub);
    margin-top: 1em;
    height: 92.5%;
  }

  .accent-two {
    grid-area: 1/4/8/9;
    border: 1px solid black;
    border-left: none;
    margin-top: 0.25em;
  }

  /* All screens from 768px to 1024px */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .main-headline-text {
      grid-area: 1/2/2/8;
    }

    .hero-image {
      grid-area: 2/1/3/9;
    }

    .main-headline-image {
      grid-area: 1/1/13/9;
      background-size: 75%;
    }

    .main-headline-text > p > span {
      font-size: var(--font-size-lg);
    }

    .headline-buttons-wrap > div {
      width: 50%;
      margin-bottom: 4em;
    }

    .accent-one {
      grid-area: 1/3/12/7;
      margin-top: 2.5em;
    }

    .accent-two {
      grid-area: 1/4/13/8;
      height: 95%;
    }
  }

  /* Any screen from 320px to 767px */

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .main-headline-text > h1 > span {
      font-size: calc(var(--font-size-lg) + 0.5em);
    }

    .main-headline-image {
      background-size: 100%;
    }

    .main-headline-text > p > span {
      font-size: var(--font-size-base);
    }

    .headline-buttons-wrap > div {
      width: 60%;
    }
    .accent-one {
      grid-area: 1/4/9/8;
      margin-left: 1em;
    }

    .accent-two {
      grid-area: 1/5/10/9;
      max-width: 85%;
    }
  }
}
</style>
