<template>
  <div
    :style="animation"
    class="workflow-container"
    :class="typeClass"
  >
    <div
      v-if="showTopOrBottomBranch"
      class="top-branch-container"
    >
      <div class="bigCircle">
        <div class="big-inside" />
      </div>
      <div class="middle">
        <slot />
      </div>
      <div class="smallCircle bottom" />
    </div>

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

    <div
      v-if="!showTopOrBottomBranch"
      class="bottom-branch-container"
    >
      <div class="smallCircle" />
      <div class="middle">
        <slot />
      </div>
      <div class="bigCircle bottom">
        <div class="big-inside" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkflowItem',
  props: {
    data: {
      type: Object,
      required: true
    },
    firstBottom: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      required: true
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
  },
  data() {
    return {
      animation: undefined
    }
  },
  computed: {
    showTopOrBottomBranch() {
      if (!this.$props.firstBottom) {
        return this.$props.index % 2 === 0
      } else {
        return this.$props.index % 2 !== 0
      }
    },
    typeClass() {
      switch (this.$props.type) {
        case 'danger': return { 'workflow--danger': true }
        case 'info': return { 'workflow--info': true }
        case 'primary': return { 'workflow--primary': true }
        case 'success': return { 'workflow--success': true }
        case 'warning': return { 'workflow--warning': true }
      }
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
@import "./types/danger.scss";
@import "./types/info.scss";
@import "./types/primary.scss";
@import "./types/success.scss";
@import "./types/warning.scss";
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
