<script setup lang="ts"></script>

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
        <button>Sign up</button>
        <button>Get in touch</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 3em;
}
.main-headline-text {
  grid-area: 1/3/2/6;
  display: grid;
  gap: 2em;
}

.main-headline-text em {
  color: var(--color-text-accent);
}

.main-headline-text > h1 {
  padding-bottom: 1em;
}

.main-headline-text > h1 > span {
  font-size: 50px;
  box-sizing: border-box;
  letter-spacing: 0.025em;
}
.main-headline-text > p > span {
  font-size: var(--font-size-base);
}
</style>
