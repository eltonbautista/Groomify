<script setup lang="ts">
import ContactButton from "./ContactButton.vue";
</script>

<template>
  <section class="hero">
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
          >We are not <em>kitten</em> you when we say your furry friends will be
          receiving the best of the best.</span
        >
        <span>&nbsp;<em>Pup</em> down to locations now! </span>
      </p>
      <div class="headline-buttons-wrap">
        <div>
          <ContactButton
            button-text="Book a Visit &nbsp; &rarrw;"
            class="black"
          />
          <ContactButton button-text="Contact Us &nbsp; &#9990;" class="pink" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 3em;
  background-color: var(--bg-color-v1);
  min-height: 100vh;
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

.main-headline-text {
  grid-area: 1/3/2/6;
}

.main-headline-text em {
  color: var(--color-text-sub);
}

.main-headline-text > h1 {
  padding-bottom: 1em;
}

.main-headline-text > h1 > span {
  font-size: 50px;
  box-sizing: border-box;
  letter-spacing: 0.025em;
  line-height: 1.2;
}

.main-headline-text > p {
  padding-bottom: 1em;
}

.main-headline-text > p > span {
  font-size: var(--font-size-base);
}
</style>
