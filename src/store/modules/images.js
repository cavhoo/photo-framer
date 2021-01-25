const path = require('path')
const allowedFormats = [
  '.png',
  '.jpg',
  '.jpeg'
]

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

    const parsedImages = []

    for (const img of images) {
      if (allowedFormats.includes(path.extname(img.path)))
      parsedImages.push({
        path: `safe-file://${img.path}`,
        name: img.name,
        status: 'pending'
      })
    }
    commit('setImages', { images: parsedImages })
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
