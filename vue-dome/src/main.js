import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/comment.css'
import './publin/font-pinyitec/iconfont.css'
import $ from 'jQuery'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
