<template>
  <div class="top-branch-container">
    <div class="bigCircle">
      <div class="big-inside" />
    </div>
    <div class="middle">
     <slot/>
    </div>
    <div class="smallCircle bottom" />
  </div>
</template>
<script>
export default {
  name: 'WorkflowTopBranch'
}
</script>
<style lang="scss" scoped>
@import "./styles/branch.scss";
</style>
