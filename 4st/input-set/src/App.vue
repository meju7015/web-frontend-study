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
      <m-radio-group v-model="model6">
        <m-radio
          val="boy">남자</m-radio>
        <m-radio
          val="girl">여자</m-radio>
      </m-radio-group>
    </div>
  </form>
</template>

<script>
import MInputText from "@/components/MInputText";
import MCheckbox from "@/components/MCheckbox";
import MRadio from "@/components/MRadio";
import MRadioGroup from "@/components/MRadioGroup";

export default {
  name: 'App',
  components: {
    MRadioGroup,
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
