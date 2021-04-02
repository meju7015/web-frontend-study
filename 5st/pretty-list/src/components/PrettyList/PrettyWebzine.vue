<template>
  <transition name="card" mode="out-in">
    <div class="row">
      <div class="col-sm-2" v-for="(row, key) of rows" :key="key">
        <div class="card" style="width: 18rem;" @click="$emit('input', row); $emit('click')">
          <img class="card-img-top" :src="row.image" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">{{ row.description }}</p>
          </div>
          <div class="card-footer">
            <p class="card-text text-sm-left">날짜 : {{ row.writeDateTime }}</p>
            <p class="card-text text-sm-left">조회수 : {{ row.count }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {properties} from "@/components/mixin/PrettyListMxins";

export default {
  name: "PrettyWebzine",
  mixins: [properties]
}
</script>
