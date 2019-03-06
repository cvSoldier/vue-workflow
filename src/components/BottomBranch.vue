<template>
  <div class="bottom-branch-container">
    <div class="smallCircle" />
    <div class="middle">
      <slot />
    </div>
    <div class="bigCircle bottom">
      <div class="big-inside" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkflowBottomBranch'
}
</script>
<style lang="scss" scoped>
@import "./styles/branch.scss";
</style>
