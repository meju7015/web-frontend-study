<template>
    <div
        :class="[
            selectBoxType,
            colorType,
            { 'complete': selected && selected !== defaultValue },
            { 'focus': open }
        ]"
        class="common-box select-type"
        :tabindex="tabIndex"
        @blur="open = false">

        <div :class="{ 'disabled': disabled }">
            <span class="point-area"></span>

            <div
                class="box-wrap"
                :class="{ 'on': open }"
                @click="!disabled ? open = !open : open">

                <div
                    v-if="selectBoxType === SELECT_BOX_TYPE.MULTI_CHECK"
                    class="select-box">

                    <p>
                        {{ selected }}
                        <slot></slot>
                    </p>

                </div>

            </div>

            <transition name="select-fade">
                <div
                    v-if="selectBoxType === SELECT_BOX_TYPE.MULTI_CHECK && open"
                    class="select-list">

                    <span class="select-top-area"></span>
                    <div class="select-list-inner">
                        <ul class="wrap-list scroll-in">
                            <li v-for="(option, key) of options" :key="key">
                                <p>{{ option.name }}</p>
                                <ul class="list">
                                    <li v-for="(sub, subKey) of option.list" :key="subKey">
                                        <m-checkbox
                                            :id="String(subKey)"
                                            :val="sub.value"
                                            v-model="sub.value"
                                            @change="checkBoxEvent(sub)">
                                            {{ sub.name }}
                                        </m-checkbox>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <span class="point-area"></span>

                </div>

                <div
                    v-if="open"
                    class="select-list">

                    <span class="select-top-area"></span>
                    <div class="select-list-inner">
                        <ul class="list scroll-in">
                            <li
                                v-if="useAll"
                                class="list scroll-li"
                                @click="selectBoxEvent({ name: 'All Category', value: 0 })">
                                All Category
                            </li>
                            <li
                                v-for="(option, key) of options"
                                :key="key"
                                class="list scroll-li"
                                @click="selectBoxEvent(option)">
                                {{ option.name }}
                            </li>
                        </ul>
                    </div>

                    <span class="point-area"></span>

                </div>
            </transition>

            <div class="selected-wrap" v-if="selectBoxType === SELECT_BOX_TYPE.MULTI_CHECK">
                <div v-for="(parent, key) of options" :key="key">
                    <div
                        :key="subKey"
                        v-for="(sub, subKey) of parent.list"
                        class="selected-item">

                        <div class="selected-item" v-if="sub.value">
                            <span>{{ parent.name }}</span>
                            <span>{{ sub.name }}</span>
                            <i @click="sub.value = false">
                                X
                            </i>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <transition name="error">
            <p
                v-if="error"
                class="error">
                <i></i>{{ stringAssets.error[error] }}
            </p>
        </transition>

    </div>
</template>

<script>
import MCheckbox from "@/components/MCheckbox";

export default {
    name: 'm-multi-select',
    components: {MCheckbox},
    props: {
        title: {type: String},
        options: {type: Array, required: true},
        defaultValue: {type: [String, Object]},
        tabIndex: {type: Number},
        selectBoxType: {type: String, default: ''},
        colorType: {type: String, default: ''},
        error: {type: String, default: ''},
        disabled: {type: Boolean, default: false},
        key: {type: String},
        name: {type: String},
        useAll: {type: Boolean}
    },

    data() {
        return {
            open: false,
            selected: null,
            selectedArray: [],
            isShowSelected: true,
            SELECT_BOX_TYPE: {
                MULTI_CHECK: 'select-check'
            },
            stringAssets: {
                error: {
                    required: '이 입력값은 필수 입니다.',
                    number: '숫자만 선택할 수 있습니다.'
                }
            }
        }
    },

    created() {
        this.initialDefaultValue();
    },

    mounted() {
        this.$emit('input', this.selected);
    },

    watch: {
        options: {
            deep: true,
            handler(val) {
                let arr = [];
                let flag = false;

                new Promise((resolve => {
                    val.map(i => {
                        if (i.list) {
                            arr = arr.concat(i.list);
                        }
                    });

                    arr.map(i => {
                        if (i.value) {
                            flag = true
                        }
                    });

                    resolve();
                }))
                .then(() => {
                    this.isShowSelected = !flag;
                })

                this.isShowSelected = !flag;
                this.initialDefaultValue();
            }
        }
    },

    methods: {
        initialDefaultValue() {
            this.selected = this.defaultValue
                ? this.defaultValue
                : this.options && this.options.length > 0
                    ? this.options[0]
                    : null;
        },

        selectBoxEvent(option) {
            this.selected = option[this.name ? this.name : 'name'];
            this.open = this.selectBoxType === 'select-check';
            this.$emit('update:error', '');
            this.$emit('input', option[this.key ? this.key : 'value']);
        },

        checkBoxEvent(option) {
            if (this.selectedArray instanceof Array) {
                this.selectedArray.push(option);
                this.$emit('input', this.selectedArray);
            } else {
                console.error('this.selectArray instanceof not Array important');
            }
        }
    }
}
</script>

<style lang="scss">
/* en placeholder font */
.common-box:lang(en) {
    .box-wrap {
        input, textarea {
            letter-spacing: initial;

            &::placeholder {
                letter-spacing: initial;
            }
        }

        .select-box {
            letter-spacing: initial;
        }
    }

    .error {
        letter-spacing: initial;
    }
}

/* ch placeholder font */
.common-box:lang(ch) {
    .box-wrap {
        input, textarea {
            &::placeholder {
                font-family: 'Microsoft Yahei', Arial, 微软雅黑, STXihei, 华文细黑, simsun, Helvetica, tahoma, sans-serif !important;
            }
        }
    }
}

/* jp placeholder font */
.common-box:lang(jp) {
    .box-wrap {
        input, textarea {
            &::placeholder {
                font-family: 'Meiryo UI', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ, 'ＭＳ Ｐゴシック', 'MS PGothic', tahoma, sans-serif !important;
            }
        }
    }
}

.common-box-half {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    &.type2 {
        .common-box {
            width: 62.666%;

            &:last-child {
                width: 37.333%;
            }
        }
    }

    .common-box {
        width: 50%;
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
}

// default box
.common-box {
    width: 100%;
    margin-bottom: 30px;

    &.color-gray {
        .point-area {
            border-right: 1px solid #f2f2f2;

            &::before {
                background-color: #f2f2f2;
                border: 1px solid #f2f2f2;
            }

            &::after {
                background-color: #f2f2f2;
                border-top: 1px solid #f2f2f2;
            }
        }

        .box-wrap {
            background-color: #f2f2f2;
        }

        &.focus {
            .point-area {
                &::before {
                    background-color: #fff;
                }

                &::after {
                    background-color: #fff;
                }
            }

            .box-wrap {
                background-color: #fff;
            }
        }
    }

    &.textarea-type {
        .box-wrap {
            height: 350px;
        }
    }

    &.select-type {
        position: relative;
        height: 100%;

        &.focus {
            .select-top-area {
                border-left: 1px solid red;
                border-right: 1px solid red;
            }

            .select-list {
                .select-list-inner {
                    border-left: 1px solid red;
                    border-right: 1px solid red;
                }
            }

            .box-wrap {
                position: relative;
                z-index: 10;
            }
        }

        &.complete {
            .select-top-area {
                border-left: 1px solid #333;
                border-right: 1px solid #333;
            }

            .select-list {
                .select-list-inner {
                    border-left: 1px solid #333;
                    border-right: 1px solid #333;
                }
            }
        }

        &.select-check {
            .select-list {
                ul {
                    padding-top: 20px;
                    padding-bottom: 6px;
                    background-color: #fff;
                }

                .wrap-list {
                    > li {
                        margin-bottom: 25px;

                        > p {
                            font-family: 'LGSB';
                            padding: 0 30px;
                        }
                    }

                    &.scroll-in {
                        padding-right: 10px;
                    }
                }

                .list {
                    padding: 0;
                    padding-top: 10px !important;
                    border: 0;

                    li {
                        height: 30px !important;
                        line-height: 30px !important;
                    }

                    .check-box {
                        input {
                            + label {
                                position: relative;
                                display: block;
                                height: 30px;
                                line-height: 30px;

                                &::before {
                                    top: 3px !important;
                                }
                            }
                        }

                    }
                }
            }
        }

        .select-box {
            height: 100%;
            font-family: 'LGR';
            font-size: 20px;

            > p {
                position: relative;
                height: 100%;
                padding-top: 6px;
                padding-right: 30px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                cursor: pointer;

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    right: 3px;
                    top: 6px;
                    width: 13px;
                    height: 13px;
                    border-bottom: 3px solid #b3b3b3;
                    border-left: 3px solid #b3b3b3;
                    transform: rotate(-45deg);
                }
            }
        }
    }

    &.focus {
        .select-top-area {
            border-left: 1px solid red;
            border-right: 1px solid red;
        }

        .point-area {
            border-right: 1px solid red;

            &::before {
                border-left: 1px solid red;
                border-top: 1px solid red;
            }

            &::after {
                border-top: 1px solid red;
            }
        }

        .box-wrap {
            border: 1px solid red;
            border-top: 0;
        }
    }

    &.complete { // 작성, 선택 완료
        .select-top-area {
            border-left: 1px solid #333;
            border-right: 1px solid #333;
        }

        .point-area {
            border-right: 1px solid #333;

            &::before {
                border-left: 1px solid #333;
                border-top: 1px solid #333;
            }

            &::after {
                border-top: 1px solid #333;
            }
        }

        .box-wrap {
            border: 1px solid #333;
            border-top: 0;
        }
    }

    &.error {
        margin-bottom: 20px;

        .error {
            display: block;
        }
    }

    .point-area {
        position: relative;
        display: block;
        height: 14px;
        border-right: 1px solid #fff;
        transition: all .4s;
        overflow: hidden;

        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 19px;
            height: 19px;
            left: 4px;
            top: 0;
            background-color: #fff;
            border: 1px solid #fff;
            transform: skew(-45deg);
            transition: all .4s;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            right: -14px;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-top: 1px solid #fff;
            transition: all .4s;
        }
    }

    .box-wrap {
        width: 100%;
        height: 46px;
        padding: 0 30px;
        background-color: #fff;
        transition: all .4s;
        border: 1px solid #fff;
        border-top: none;

        &.on {
            .select-box {
                p {
                    &::after {
                        top: 9px;
                        transform: rotate(135deg);
                    }
                }
            }
        }

        input, textarea {
            width: 100%;
            height: 100%;
            font-size: 20px;
            font-family: 'LGSB';
            caret-color: red;

            &::placeholder {
                font-family: 'LGR';
                font-size: 20px;
                color: #000;
            }
        }

        input {
            margin-top: -5px;
        }

        textarea {
            line-height: 35px;
            resize: none;
        }
    }

    .select-list {
        position: absolute;
        width: 100%;
        top: 60px;
        left: 0;
        right: 0;
        z-index: 2;

        .select-top-area {
            display: block;
            height: 10px;
            background-color: #fff;
            transition: all .4s;
            border: 1px solid #fff;
            border-bottom: 0;
        }

        .select-list-inner {
            background-color: #fff;
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
            transition: all .4s;
        }

        .scroll-in {
            max-height: 250px;
            margin-right: 10px;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 8px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: #3e3e3e;
            }
        }

        .list {
            padding-top: 10px;
            padding-bottom: 6px;
            background-color: #fff;

            &.scroll-in {
                padding-right: 10px;
            }

            > li {
                height: 40px;
                line-height: 40px;
                padding: 0 30px;
                transition: all .4s;
                cursor: pointer;

                &:hover {
                    font-family: 'LGB';
                    background-color: #f2f2f2;

                    .check-box {
                        input {
                            &:hover {
                                + label {
                                    // color: red;
                                    font-family: 'LGB' !important;
                                }
                            }
                        }
                    }
                }
            }
        }

        .point-area {
            transform: rotate(180deg);
        }
    }

    .error {
        position: relative;
        font-family: 'LGSB';
        font-size: 16px;
        color: #c30037;
        margin-left: 20px;
        margin-top: 10px;
        padding-left: 23px;
        display: block;

        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            width: 19px;
            height: 19px;
        }

        &::before {
            content: '!';
            text-align: center;
            line-height: 20px;
        }

        &::after {
            border-radius: 50%;
            border: 1px solid #c30037;
        }
    }
}
</style>
