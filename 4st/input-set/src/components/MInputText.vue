<template>
  <label>
    <input
      :type="type"
      :maxlength="maxLength"
      :minlength="minLength"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'm-input-text',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return value === 'text'
            || value === 'password'
            || value === 'email';
      }
    },
    maxLength: {
      type: String
    },
    minLength: {
      type: String
    },
    placeholder: {
      type: String,
    }
  },
  data() {
    return {}
  }
}
</script>
