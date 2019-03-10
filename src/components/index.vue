<template>
  <div style="overflow: hidden">
    <FlowItem
      v-for="(item, index) in data"
      :key="item.id"
      :data="item"
      :index="index"
      :firstBottom="firstBottom"
      :type="type"
    >
      <slot :item="item" />
    </FlowItem>
  </div>
</template>
<script>
import FlowItem from './FlowItem.vue'
export default {
  name: 'WorkFlow',
  components: {
    FlowItem
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    firstBottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator: function(value) {
        return [
          'primary',
          'warning',
          'danger',
          'info',
          'success'
        ].indexOf(value) !== -1
      }
    }
  }}
</script>
<style lang="scss" scoped>
</style>

