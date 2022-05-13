<template>
  <div>
    <div v-if="condition">
      <v-progress-circular indeterminate color="purple"></v-progress-circular>
    </div>
    <div v-if="!condition">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    condition: { type: Boolean, required: true },
  },
};
</script>
