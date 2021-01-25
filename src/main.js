import Vue from 'vue'
import Vuex from 'vuex'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'

import store from './store'
import vuetify from './plugins/vuetify';




Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.use(vuetify)

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')

