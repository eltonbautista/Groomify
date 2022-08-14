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
    handleScroll(event) {
      this.wScroll = window.scrollY;

      console.log(this.$el.querySelector("#About"));

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
  <header>
    <div class="wrapper">
      <TheNav :class="`${navClass}`" />
    </div>
  </header>

  <RouterView />
</template>
<style lang="scss" scoped>
header {
  background: none;
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--bg-color-v1);
}
</style>
