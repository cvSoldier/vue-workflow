<template>
  <div style="overflow: hidden">
    <FlowItem
      v-for="(item, index) in data"
      :key="item.id"
      :data="item"
      :index="index"
      :top-or-bottom="index % 2 === 0"
    >
      <slot :item="item"/>
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
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

