const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  devServer: {
    proxy: 'https://kinopoiskapiunofficial.tech'
  }
})
