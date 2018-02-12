// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from 'quasar-framework'
import { QBtn } from 'quasar-framework'
import 'quasar-extras/roboto-font';
import 'quasar-extras/material-icons';
import 'quasar-framework/dist/quasar.ios.css';

Vue.config.productionTip = false
Vue.use(Quasar)
Vue.use(QBtn)
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // props: ['random']
})
