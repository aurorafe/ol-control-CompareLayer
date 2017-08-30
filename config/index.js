const path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: true
  },
  dev: {
    env: require('./dev.env'),
    devtoolSourceMap: '#source-map',
    port: 666,
    autoOpenBrowser: true,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: true
  },
  base: {
    fileName: 'ol-control-CompareLayer',
    libraryName: 'olControlCompareLayer',
    distDirectory: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: ''
  }
}
