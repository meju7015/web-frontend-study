<template>
  <transition name="card" mode="out-in">
    <div class="row">
      <div class="col-sm-2" v-for="(row, key) of rows" :key="key">
        <div class="card bg-dark text-white" style="width:300px" @click="$emit('input', row); $emit('click')">
          <img class="card-img" :src="row.image" alt="Card image">
          <div class="card-img-overlay">
            <h5 class="card-title">{{ row.title }}</h5>
            <p class="card-text">{{ row.description }}</p>
            <p class="card-text">{{ row.writeDateTime }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {properties} from "@/components/mixin/PrettyListMxins";

export default {
  name: "PrettyGallery",
  mixins: [properties]
}
</script>
