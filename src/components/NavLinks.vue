<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    linkName: String,
  },
});
</script>

<template>
  <li class="nav-item">
    <div class="nav-link-wrap">
      <a class="nav-link">{{ linkName }}</a>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  align-items: center;
}

.nav-link-wrap {
  max-width: 50%;
}

.nav-link {
  font-size: var(--font-size-base);
  color: var(--color-text-main);
}

.nav-item.groomify .nav-link {
  font-size: calc(var(--font-size-lg) + 0.5em);
  /* font-style: italic; */
  font-weight: 900;
  letter-spacing: 0.05em;
}
</style>
