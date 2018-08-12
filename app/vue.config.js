const webpack = require('webpack')
const ip = require('ip')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// configuration references
// https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
module.exports = {
  lintOnSave: true,

  configureWebpack: {
    plugins: [
      // refs https://github.com/vuejs/vue-cli/issues/978
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        threshold: 102400,
        minRatio: 0.8,
        cache: true
      })
    ]
  },

  devServer: {
    proxy: {
      '/proxy': {
        target: `http://${ip.address()}:9090/`,
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '/'
        }
      }
    }
  },

  pwa: {
    name: 'haroo'
  }
}
