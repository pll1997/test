import SideBar from '@/view/common/sidebar'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.component('side-bar', SideBar)
}
export default plugin
