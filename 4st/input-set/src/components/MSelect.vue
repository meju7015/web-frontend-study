<template>
  <div class="custom-select" :tabindex="tabIndex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
          v-for="(option, key) of options"
          :key="key"
          @click="updateChangeSelect(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-select",
  props: {
    options: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: String
    },
    tabIndex: {
      type: Number
    }
  },
  data() {
    return {
      open: false,
      selected: '',
    }
  },
  created() {
    this.selected = this.defaultValue
        ? this.defaultValue
        : this.options.length > 0
            ? this.options[0]
            : null;
  },
  mounted() {
    this.$emit('input', this.selected);
  },
  methods: {
    updateChangeSelect(option) {
      this.selected = option;
      this.open = false;
      this.$emit('input', option)
    }
  }
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #0a0a0a;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
