<template>
  <keep-alive>

    <pretty-table
        v-model="$attrs.value"
        @input="$emit('input', $attrs.value)"
        @click="$emit('click')"
        v-if="type === LIST_TYPE.LIST"
        :columns="columns"
        :rows="rows"></pretty-table>

    <pretty-gallery
        v-model="$attrs.value"
        @input="$emit('input', $attrs.value)"
        @click="$emit('click')"
        v-else-if="type === LIST_TYPE.GALLERY"
        :colmuns="columns"
        :rows="rows"></pretty-gallery>

    <pretty-webzine
        v-model="$attrs.value"
        @input="$emit('input', $attrs.value)"
        @click="$emit('click')"
        v-else-if="type === LIST_TYPE.WEBZINE"
        :columns="columns"
        :rows="rows"></pretty-webzine>

  </keep-alive>
</template>

<script>
import PrettyTable from "@/components/PrettyList/PrettyTable";
import PrettyGallery from "@/components/PrettyList/PrettyGallery";
import PrettyWebzine from "@/components/PrettyList/PrettyWebzine";
import {commons, properties} from "@/components/mixin/PrettyListMxins";

export default {
  name: 'PrettyList',
  components: {PrettyWebzine, PrettyGallery, PrettyTable},
  mixins: [commons, properties],

  props: {
    type: {
      type: String,
      default: 'list',
      validator(type) {
        return ['list', 'gallery', 'webzine'].indexOf(type) > -1;
      }
    },
  }
}
</script>
