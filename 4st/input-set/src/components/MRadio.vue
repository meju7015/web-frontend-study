<template>
    <label>
        <input
            :name="id"
            type="radio"
            @change="updateRadio">
        <slot>{{ label }}</slot>
    </label>
</template>

<script>
    export default {
        name: "m-radio",
        model: {
            props: 'modelValue',
            event: 'change',
        },
        props: {
            id: {
                type: String,
                required: true
            },
            label: {
                type: String,
                default: "click me"
            },
            val: {
                type: null,
                default: true
            },
            falseValue: {
                type: null,
                default: false,
            },
        },
        data() {
            return {
                checked: false
            }
        },
        methods: {
            updateRadio(event) {
                this.checked = event.target.checked;
                this.$emit(
                    'change',
                    event.target.checked
                        ? this.val
                        : this.falseValue
                );
            }
        }
    }
</script>

<style scoped>

</style>
