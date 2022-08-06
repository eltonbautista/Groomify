<script lang="ts">
import { defineComponent } from "vue";
import NavLinks from "./NavLinks.vue";
export default defineComponent({
  data() {
    return {
      links: ["Home", "About", "Pricing"],
    };
  },
  components: { NavLinks },
});
</script>

<template>
  <nav id="nav">
    <NavLinks link-name="Groomify" class="groomify" />
    <div class="navigation-wrapper">
      <NavLinks v-for="(link, index) in links" :key="index" :link-name="link" />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
#nav {
  display: grid;
  grid-auto-flow: column;
  min-height: 9vh;
  padding: 1em 7.5em;

  @media screen and (max-width: 767px) {
    justify-items: center;
  }
}

.navigation-wrapper {
  display: grid;
  grid-auto-flow: column;
  max-width: 75%;

  @media screen and (max-width: 767px) {
    display: none;
    grid-auto-columns: none;
    justify-items: center;
  }
}

#nav > li {
  display: flex;
  align-items: center;
}

#nav > div {
  justify-items: center;
}
</style>
