<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonText: String,
  },
});
</script>

<template>
  <button class="contact-button">
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
.contact-button {
  font-size: calc(var(--font-size-base) + 0.2em);
  border: none;
  font-weight: 900;
  border-radius: 4px;
  padding: 0.35em 0em;
  line-height: 2;
}
.black {
  background-color: var(--color-text-main);
  color: var(--bg-color-v1);
}

.pink {
  background-color: var(--color-text-sub);
  color: var(--color-text-main);
}
</style>
