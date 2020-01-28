module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8095,
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
    module: {
      noParse: /es6-promise\.js$/, // avoid webpack shimming process
      rules: [
        {
          // Load sourcemaps from vuetify, both css + js
          test: /\.(js|css)$/,
          loader: 'source-map-loader',
          include: /vuetify[\\/](dist|es5|lib|src)/,
          enforce: 'pre',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]',
          },
        },
        {
          test: /\.txt$/,
          use: ['raw-loader'],
        },
      ],
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
}
