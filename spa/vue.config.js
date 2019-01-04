const webpack = require('webpack')
const ip = require('ip')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// configuration references
// https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
module.exports = {
  lintOnSave: true,

  configureWebpack: {
    // refs https://webpack.js.org/configuration/performance/#performance-maxentrypointsize
    // performance: {
    //   maxEntrypointSize: 900000,
    //   maxAssetSize: 800000
    // },
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en|ko)$/),
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: []
          }
        }
      }),
      // refs https://github.com/vuejs/vue-cli/issues/978
      new CompressionWebpackPlugin({
        // asset -> filename https://github.com/vuejs/vue-cli/issues/978#issuecomment-419946578
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        threshold: 0,
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
    name: 'pwa name'
  }
}
