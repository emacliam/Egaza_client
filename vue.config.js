module.exports = {
  outputDir: 'dist',
  devServer: {
    //remove it later used it with ngrok
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:6000',
      },
    },
  },
  transpileDependencies: ['vuetify'],
};
