import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import images from './modules/images'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    images
  },
  strict: debug,
  plugins: debug ? [ createLogger() ] : []
})
