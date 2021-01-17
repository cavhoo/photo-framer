module.exports = {
  configureWebpack: {
    mode: 'development'
  },
  pluginOptions: {
    chainWebpackRendererProcess: (config) => {
      return {
        mode: 'development'
      }
    }
  }
}
