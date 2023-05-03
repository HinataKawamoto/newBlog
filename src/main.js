import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
Vue.config.productionTip = false

function px2rem(px){
  if(/%/ig.test(px)){ // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
    return px
  }else{
    return (parseFloat(px) / 192) + 'rem'
  }
}
Vue.prototype.$px2rem = px2rem // 放到全局
new Vue({
  
  router,
  render: h => h(App)
}).$mount('#app')
