<template>
  <form>

    <div class="container">
      <span>맥스가 없는 인풋</span>
      <m-input-text
          v-model="model1"></m-input-text>
      <p>{{ model1 }}</p>
    </div>

    <div class="container">
      <span>맥스가 있는 인풋</span>
      <m-input-text
          v-model="model2"
          max-length="10"></m-input-text>
    </div>

    <div class="container">
      <span>타입이 password 인 인풋</span>
      <m-input-text
          v-model="model3"
          type="password"></m-input-text>
    </div>

    <div class="container">
      <span>타입이 email 인 인풋</span>
      <m-input-text
          v-model="model4"
          type="email"></m-input-text>
    </div>

    <div class="container">
      <span>Required 처리된 인풋</span>
      <m-input-text
          v-model="model7"
          required
          type="text"></m-input-text>
    </div>

    <div class="container">
      <span>Required & 슬롯 처리된 인풋</span>
      <m-input-text
          v-model="model7"
          required
          type="text">
        <span slot="error">모델 7은 필수값이야!</span>
      </m-input-text>
    </div>

    <button type="submit">전송!?</button>

    <hr class="hr">

    <div class="container">
      <div>체크박스</div>
      <m-checkbox
          v-model="model5" val="vuejs" label="vuejs"></m-checkbox>
      <m-checkbox
          v-model="model5" val="jquery" label="jquery"></m-checkbox>
      <m-checkbox
          v-model="model5" val="html" label="html"></m-checkbox>
      <m-checkbox
          v-model="model5" val="javascript" label="javascript"></m-checkbox>
      <div>{{ model5 }}</div>
    </div>

    <hr class="hr">

    <div class="container">
      <div>라디오 박스</div>
      <m-radio
          id="model6"
          v-model="model6"
          val="boy">남자
      </m-radio>
      <m-radio
          id="model6"
          v-model="model6"
          val="girl">여자
      </m-radio>
    </div>

    <hr class="hr">

    <div class="container">
      <div>셀렉트 박스</div>
      <m-select
          v-model="model8"
          :options="[{
                      label: '레알마드리드',
                      value: 1,
                    }, {
                      label: '맨체스터 유나이티드',
                      value: 2
                    }]">
      </m-select>
    </div>

    <div class="container">
      <div>멀티 셀렉트 박스</div>
      <m-multi-select
          v-model="model9"
          :options="[{
                      key: '레알마드리드',
                      value: 1,
                    }, {
                      key: '맨체스터 유나이티드',
                      value: 2
                    }]">
      </m-multi-select>
    </div>
  </form>
</template>

<script>
import MInputText from "@/components/MInputText";
import MCheckbox from "@/components/MCheckbox";
import MRadio from "@/components/MRadio";
import MSelect from "./components/MSelect";
import MMultiSelect from "@/components/MMultiSelect";

export default {
  name: 'App',
  components: {
    MMultiSelect,
    MSelect,
    MRadio,
    MCheckbox,
    MInputText
  },
  data() {
    return {
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      model5: [],
      model6: '',
      model7: '',
      model8: '',
      model9: [],
    }
  }
}
</script>

<style>
.container {
  margin-bottom: 3%;
}

.hr {
  margin: 2% 0 2% 0;
}
</style>
