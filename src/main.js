import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vuex)



new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')

