const BundleTracker = require('webpack-bundle-tracker');

const DEV = process.env.NODE_ENV !== 'production';

let vueConfig = {
  runtimeCompiler: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: false,
    public: '0.0.0.0:8080',
  },

  publicPath: DEV ? 'http://localhost:8080/' : '/static/dist/',
  outputDir: './static/dist/',

  chainWebpack: (config) => {
    // if we don't want to gen output of html
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        return options;
      });
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    Object.keys(vueConfig.pages).forEach(function(key) {
      config.plugins.delete('html-' + key);
      config.plugins.delete('preload-' + key);
      config.plugins.delete('prefetch-' + key);
    });
    config.optimization.splitChunks.name = 'vendors';
    config.plugins.delete('copy');
  },

  // When building in multi-page mode, the webpack config will
  // contain different plugins (there will be multiple instances of
  // html-webpack-plugin and preload-webpack-plugin).
  // Make sure to run vue inspect if you are trying to modify the options
  // for those plugins.
  pages: {
    main: {
      // entry for the page
      entry: './vue/src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'chunk-main-vendors', 'main'],
    },
    // maintwo: { // you can have multiple apps see base setup, just change the name
    //     entry: 'mycoolapp/vue/app2/othermain.js',
    //     chunks: ['chunk-vendors', 'chunk-common', 'chunk-othermain-vendors', 'othermain']
    // },
  }, // end of pages
  configureWebpack: {
    plugins: [new BundleTracker({ filename: './webpack-stats.json' })],
  },
};

module.exports = vueConfig;
