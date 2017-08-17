module.exports = {
  module: {
    rules: [
      {
        test: /\.(pug|jade)$/,
        use: ['pug-ng-html-loader']
      }
    ]
  }
}
