<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonText: String,
    backgroundColor: String,
    textColor: String,
  },
});
</script>

<template>

  <button class="contact-button" :style="{
    'background-color': backgroundColor,
    'color': textColor
  }">
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
.contact-button {
  font-size: calc(var(--font-size-base) + 0.2em);
  border: none;
  font-weight: 900;
  border-radius: 0.5rem;
  padding: 0.35em 0em;
  line-height: 3.5625rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}
</style>
