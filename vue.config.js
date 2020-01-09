module.exports = {
    productionSourceMap: false,
    chainWebpack: config => config.optimization.minimize(false),
    transpileDependencies: ['vuex-module-decorators'],
  };