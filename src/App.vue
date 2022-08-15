<script lang="ts">
import { defineComponent } from "vue";
import TheNav from "./components/TheNav.vue";
export default defineComponent({
  components: {
    TheNav,
  },
  data() {
    return {
      wScroll: window.scrollY,
      oldScroll: window.scrollY,
      scrollBool: false,
      navClass: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.wScroll = window.scrollY;
      if (this.wScroll > this.oldScroll) {
        this.navClass = "hide";
      } else {
        this.navClass = "";
      }
      this.oldScroll = this.wScroll <= 0 ? 0 : this.wScroll;
    },
  },
});
</script>

<template>
  <div id="Home"></div>
  <header :class="`${navClass}`">
    <div class="wrapper">
      <TheNav />
    </div>
  </header>

  <RouterView />
</template>
<style lang="scss" scoped>
#Home {
  visibility: hidden;
}
header {
  background: none;
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--bg-color-v1);
  opacity: 1;
  transition: transform 100ms ease-in-out, opacity 200ms ease-in-out;
  transition-delay: 0ms;
  transform: translateY(0%);
}

.hide {
  opacity: 0;
  transition: transform 100ms ease-in-out, opacity 200ms ease-in-out;
  transition-delay: 0ms;
  transform: translateY(-100%);
}
</style>
