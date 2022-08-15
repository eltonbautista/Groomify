<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
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
      navClass: "",
      observer: new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
              if (entry.target.id === "Hero") {
                // @ts-ignore comment
                this.navClass = "none" as string;
              } else if (entry.target.id === "About") {
                // @ts-ignore comment
                this.navClass = "pink" as string;
              } else if (entry.target.id === "Pricing") {
                // @ts-ignore comment
                this.navClass = "purple";
              } else if (entry.target.id === "Feedback") {
                // @ts-ignore comment
                this.navClass = "white";
              } else if (entry.target.id === "Contact") {
                // @ts-ignore comment
                this.navClass = "yellow";
              }
            }
          });
        },
        { threshold: [0.8] }
      ),
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
      // must always be active during scroll
      this.wScroll = window.scrollY;
      if (window.matchMedia("(min-width: 769px)").matches && this.wScroll > 0) {
        this.observer.observe(document.querySelector("#Hero") as Element);
        this.observer.observe(document.querySelector("#About") as Element);
        this.observer.observe(document.querySelector("#Pricing") as Element);
        this.observer.observe(document.querySelector("#Feedback") as Element);
        this.observer.observe(document.querySelector("#Contact") as Element);
      } else if (
        this.wScroll === 0 &&
        window.matchMedia("(min-width: 769px)").matches
      ) {
        this.navClass = "none";
      }
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
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  opacity: 1;
  transition-delay: 0ms;

  @media (max-width: 768px) {
    background: var(--bg-color-v1);
  }
}

header,
.none,
.pink,
.purple,
.white,
.yellow {
  transition: all 200ms ease-in-out;
}

.none {
  background: none;
}

.pink {
  background-color: var(--bg-color-v1);
}

.purple {
  background-color: #13132d;
}

.white {
  background-color: var(--homepage-gradient-one);
}

.yellow {
  background-color: var(--homepage-gradient-four);
}
</style>
