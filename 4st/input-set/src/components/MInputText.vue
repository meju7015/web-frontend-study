<template>
  <label>
    <input
        :type="type"
        :maxlength="maxLength"
        :minlength="minLength"
        :placeholder="placeholder"
        @input="updateInputText"
    >
    <slot
        class="error"
        v-if="required && !isValidate"
        name="error"><span>이 필드는 필수 입니다.</span></slot>
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
    required: {
      type: Boolean,
      default: false,
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
    return {
      isValidate: true
    }
  },
  watch: {
    '$el.value'(v) {
      if (v === '') {
        this.isValidate = false;
      }
    }
  },
  methods: {
    updateInputText(event) {
      this.isValidate = !!event.target.value;
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>
label span {
  color: red;
}
</style>
