<template>
  <label>
    <input
        type="checkbox"
        @change="updateCheckbox">
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
export default {
  name: "m-checkbox",
  props: {
    label: {
      type: String,
      default: "check me"
    },
    val: {
      type: null
    },
    data: {
      type: Array
    }
  },
  methods: {
    updateCheckbox(event) {
      let data = this.$attrs.value

      if (event.target.checked) {
        data.push(this.val)
        this.$emit('input', data);
      } else {
        this.$emit('input',
            data.filter(f => f !== this.val)
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
