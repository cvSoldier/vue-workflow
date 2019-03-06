import Workflow from './components/index.vue'

export default Workflow

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-workflow', Workflow)
}
