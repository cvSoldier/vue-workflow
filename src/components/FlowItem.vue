<template>
  <div
    :style="animation"
    class="workflow-container"
  >
    <TopBranch
      v-if="topOrBottom"
    >
    <slot />
    </TopBranch>
    <div class="row-style wyc-row">
      <div class="wyc-col-4">
        <div class="item-tail" />
      </div>
      <div class="wyc-col-16">
        <div class="item-body">
          {{ data.dealTime }}
        </div>
      </div>
      <div class="wyc-col-4">
        <div class="item-head" />
      </div>
    </div>
    <BottomBranch
      v-if="!topOrBottom"
    >
      <slot />
    </BottomBranch>
  </div>
</template>

<script>
import TopBranch from './TopBranch.vue'
import BottomBranch from './BottomBranch.vue'
export default {
  name: 'WorkflowItem',
  components: {
    TopBranch, BottomBranch
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    topOrBottom: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      animation: undefined
    }
  },
  mounted() {
    const bool = Object.values(document.styleSheets[0].cssRules).find(item => item.name === 'fadein')
    if (!bool) { // 避免重复插入
      document.styleSheets[0].insertRule(`@keyframes fadein{
        0% {
          opacity: 0
      }
      100% {
        opacity: 1
      }`, 0)
    }
    this.animation = {
      animation: `fadein 1s ease ${this.index}s forwards`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/item.scss";
.wyc-row {
  position: relative;
  box-sizing: border-box;
  .wyc-col-4 {
    width: calc(4 / 24 * 100%);
    float: left;
    box-sizing: border-box;
  }
  .wyc-col-16 {
    width: calc(16 / 24 * 100%);
    float: left;
    box-sizing: border-box;
  }
}
</style>
