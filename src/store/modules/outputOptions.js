const state = () => ({
  outputFormat: 'jpg',
  outputOptions: {
    outputPath: '',
    filePattern: '<name>_squared.<format>'
  }
})

const getters = {
  format: (state) => {
    return state.outputFormat
  },
  options: (state) => {
    return state.outputOptions
  },
  hasOutputPath: (state) => {
    return state.outputOptions.outputPath.length > 0
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
