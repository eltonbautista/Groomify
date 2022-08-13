<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    reviewer: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
});
</script>

<template>
  <div class="card">
    <h3>{{ reviewer }}</h3>
    <p>{{ text }}</p>
  </div>
</template>
<style lang="scss" scoped></style>
