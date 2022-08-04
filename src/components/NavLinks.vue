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
}
</style>
