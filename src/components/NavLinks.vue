<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    linkName: String,
    linkNav: String,
  },
});
</script>

<template>
  <li class="nav-item">
    <div class="nav-link-wrap">
      <a :href="`#${linkName}`" class="nav-link">{{ linkName }}</a>
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
  color: var(--color-text-sub);
  letter-spacing: 1px;
}

.nav-item.groomify .nav-link {
  font-size: calc(var(--font-size-lg) + 0.5em);
  letter-spacing: 0.02em;
  text-shadow: 0 3px 5px gray;
  font-family: Pattaya, RHD, sans-serif;
  text-align: center;
}

@media (min-width: 1441px) {
  .nav-item.groomify .nav-link {
    font-size: calc(var(--font-size-lg) + 0.5em);
    letter-spacing: 0.02em;
    text-shadow: 0 3px 5px gray;
    font-family: Pattaya, RHD, sans-serif;
    margin-left: 5em;
  }
}
</style>
