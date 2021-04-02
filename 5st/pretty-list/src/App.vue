<template>
  <div>
    <div class="mb-2">
      <button class="btn btn-outline-primary btn-sm mr-2" @click="updateListType(LIST_TYPE.LIST)">📚</button>
      <button class="btn btn-outline-danger btn-sm mr-2" @click="updateListType(LIST_TYPE.GALLERY)">🎈</button>
      <button class="btn btn-outline-success btn-sm mr-2" @click="updateListType(LIST_TYPE.WEBZINE)">🎃</button>
    </div>

    <pretty-list
        v-model="selectedItem"
        @click="modalShow = true"
        :type="type"
        :columns="columns"
        :rows="rows"></pretty-list>

    <pretty-modal
        :show.sync="modalShow">

      <p slot="header">
        {{ selectedItem.title }}
      </p>

      <p>글쓴이 : {{ selectedItem.writer }}</p>
      <p>날짜 : {{ selectedItem.writeDateTime }}</p>
      <img style="width:100%" :src="selectedItem.image" alt=""/>
      <p>{{ selectedItem.description }}</p>

    </pretty-modal>
  </div>
</template>

<script>
import PrettyList from "@/components/PrettyList/index.vue";
import PrettyModal from "@/components/PrettyModal/index.vue";
import {commons} from "@/components/mixin/PrettyListMxins";

export default {
  name: 'App',

  mixins: [commons],

  components: {
    PrettyModal, PrettyList
  },

  watch: {
    selectedItem: function () {
      ++this.selectedItem.count;
    }
  },

  data() {
    return {
      type: 'list',

      modalShow: false,

      selectedItem: {},

      columns: [{
        label: '번호',
        value: 'idx'
      }, {
        label: '제목',
        value: 'title'
      }, {
        label: '글쓴이',
        value: 'writer'
      }, {
        label: '날짜',
        value: 'writeDateTime'
      }, {
        label: '조회수',
        value: 'count'
      }],

      rows: [{
        idx: 1,
        title: '이쁜 리스트 맞나요 ?',
        writer: 'mason',
        writeDateTime: '2021-04-01 13:53',
        image: require('@/assets/images/IMG_5248.jpg'),
        description: '이쁜 리스트 만들기는 그만 알아보자.',
        count: 1
      }, {
        idx: 2,
        title: '맞다고 하네요',
        writer: 'nana',
        writeDateTime: '2021-04-01 14:10',
        image: require('@/assets/images/IMG_5249.jpg'),
        description: '부트스트랩이 짱이다.',
        count: 2
      }, {
        idx: 3,
        title: '세개째',
        writer: 'ara',
        writeDateTime: '2021-04-02 99:92',
        image: require('@/assets/images/IMG_5254.jpg'),
        description: '설명설명설명설명',
        count: 0
      }, {
        idx: 4,
        title: '마지막',
        writer: 'mason.jeong',
        writeDateTime: '2021-04-01 21:22',
        image: require('@/assets/images/IMG_5330.jpg'),
        description: 'ㅎㅎ',
        count: 98
      }, {
        idx: 5,
        title: '조회수가 계속 올라갈까요?',
        writer: 'jo hwe su',
        writeDateTime: '2021-04-01 00:21',
        description: '카운트카운트카운트',
        count: 0
      }]
    }
  },

  created() {
    let item = localStorage.getItem('prettyList.type');

    if (item) {
      this.type = item
    }
  },

  methods: {
    updateListType(type) {
      this.type = type;
      localStorage.setItem('prettyList.type', type);
    }
  }
}
</script>

<style>
body {
  padding: 1%;
}
</style>
