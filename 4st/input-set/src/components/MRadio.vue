<template>
  <label>
    <input
        type="radio">
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
export default {
  name: "m-radio",
  props: {
    label: {
      type: String,
      default: "click me"
    },
  }
}
</script>

<style scoped>

</style>
