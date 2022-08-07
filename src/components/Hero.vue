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
      <div class="main-headline-image"></div>
      <div class="accent-one"></div>
      <div class="accent-two"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--bg-color-v1);
  width: 100%;
  /* min-height: 100vh; */
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

  .main-headline-image {
    grid-area: 1/6/10/10;
    background-image: url("../assets/hero-dog.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 -1em;
    z-index: 1;
  }

  /* All screens from 768px to 1024px */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .main-headline-text {
      grid-area: 1/2/2/8;
    }

    .main-headline-image {
      grid-area: 2/2/3/8;
      background-size: 80%;
    }

    .main-headline-text > p > span {
      font-size: var(--font-size-lg);
    }

    .headline-buttons-wrap > div {
      width: 50%;
    }

    .accent-one {
      grid-area: 2/5/2/8;
      max-height: 74%;
      margin-right: 4.5em;
    }

    .accent-two {
      grid-area: 2/5/2/9;
      max-height: 85%;
      max-width: 65%;
    }
  }

  /* Any screen from 320px to 767px */

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .main-headline-text {
      grid-area: 1/2/2/8;
    }

    .main-headline-text > h1 > span {
      font-size: calc(var(--font-size-lg) + 0.5em);
    }

    .main-headline-image {
      grid-area: 2/2/3/8;
      background-size: 100%;
    }

    .main-headline-text > p > span {
      font-size: var(--font-size-base);
    }

    .headline-buttons-wrap > div {
      width: 60%;
      margin-bottom: 3em;
    }

    .accent-one {
      grid-area: 2/4/3/8;
      max-height: 50%;
      margin-right: 3em;
    }

    .accent-two {
      grid-area: 2/4/3/8;
      max-height: 60%;
      max-width: 85%;
    }
  }
}

.accent-one {
  grid-area: 1/8/3/10;
  z-index: 0;
  background-color: var(--color-text-sub);
  max-height: 60%;
  max-width: 80%;
  margin-top: 3em;
}

.accent-two {
  grid-area: 1/8/3/10;
  z-index: 0;
  border: 1px solid black;
  border-left: none;
  margin-top: 0.25em;
  max-height: 70%;
}

@media (max-width: 1440px) {
  .main-headline-image {
    background-size: 110%;
  }

  .accent-one {
    min-height: 0;
    max-height: 50%;
    max-width: 100%;
  }

  .accent-two {
    grid-area: 1/8/3/11;
    max-width: 75%;
    max-height: 58.5%;
  }
}
</style>
