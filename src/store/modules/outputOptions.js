const state = () => ({
  outputFormat: 'jpg',
  outputOptions: {}
})

const getters = {
  format: (state) => {
    return state.outputFormat
  },
  options: (state) => {
    return state.outputOptions
  }
}

const mutations = {
  setFormat: (state, { format }) => {
    state.outputFormat = format
  },
  setOptions: (state, { newOptions }) => {
    state.outputOptions = newOptions
  }
}

const actions = {
  setFormatTo: ({commit}, format) => {
    commit('setFormat', { format })
  },
  setOptionsTo: ({commit, state}, options) => {
    commit('setOptions', {
      newOptions: {
        ...state.outputOptions,
        ...options
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
