<template>
  <div id="app">
    <Workflow :data="workflows">
      <template v-slot:default="slotProps">
        <span class="title"> {{ slotProps.item.flowNode }} </span>
        <span> 处理人：{{ slotProps.item.dealUserName }} </span>
        <span> 处理部门：{{ slotProps.item.dealOrgName }} </span>
        <span> {{ slotProps.item.dealContent }} </span>
      </template>
    </Workflow>
  </div>
</template>

<script>
import Workflow from './components/index.vue'
export default {
  name: 'App',
  components: {
    Workflow
  },
  data() {
    return {
      workflows: [{
        id: 'string1',
        entityId: 'string',
        flowNode: '节点1',
        dealOrgName: 'string',
        dealUserName: 'string',
        dealTime: '1111-02-14 05:54:29',
        dealContent: '流程节点1111111'
      }, {
        id: 'string2',
        entityId: 'string',
        flowNode: '节点2',
        dealOrgName: 'string',
        dealUserName: 'string',
        dealTime: '2222-02-14 05:54:29',
        dealContent: '流程节点22222222'
      }, {
        id: 'string3',
        entityId: 'string',
        flowNode: '节点3',
        dealOrgName: 'string',
        dealUserName: 'string',
        dealTime: '3333-02-14 05:54:29',
        dealContent: '流程节点33333333'
      }, {
        id: 'string4',
        entityId: 'string',
        flowNode: '节点4',
        dealOrgName: 'string',
        dealUserName: 'string',
        dealTime: '4444-02-14 05:54:29',
        dealContent: '流程节点44444444444'
      }, {
        id: 'string5',
        entityId: 'string',
        flowNode: '节点5',
        dealOrgName: 'string',
        dealUserName: 'string',
        dealTime: '4444-02-14 05:54:29',
        dealContent: '流程节点555555555555'
      }]
    }
  }
}
</script>
