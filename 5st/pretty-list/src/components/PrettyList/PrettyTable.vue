<template>
  <transition name="card">
    <table class="table table-bordered table-responsive-md table-hover">
      <thead>
      <tr>
        <th v-for="(col, key) of columns" :key="key">
          {{ col[columnLabel] }}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(row, key) of rows" :key="key">
        <td v-for="col of columns" :key="col.idx" @click="$emit('input', row); $emit('click')">
          {{ row[col[rowValue]] }}
        </td>
      </tr>
      </tbody>
    </table>
  </transition>
</template>

<script>
export default {
  name: 'PrettyTable',

  props: {
    columns: {
      type: Array,
      validator: (list => list.length > 0)
    },

    rows: {
      type: Array,
      validator: (list => list.length > 0)
    },

    columnLabel: {
      type: String,
      default: 'label'
    },

    rowValue: {
      type: String,
      default: 'value'
    }
  }
}
</script>
