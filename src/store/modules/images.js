const state = () => ({
  images: []
})

const getters = {
  images: (state) => {
    return state.images
  },
  imageCount: (state) => {
    return state.images.length
  }
}

const actions = {
  addImages: ({ commit }, images) => {
    commit('resetImages')
    commit('setImages', { images })
  }
}

const mutations = {
  resetImages (state) {
    state.images = []
  },
  setImages (state, { images }) {
    state.images = images
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
