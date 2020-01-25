module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8095,
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
}
