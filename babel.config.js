var px2rem = require('postcss-px2rem');

module.exports = {
  presets: [
    '@vue/app'
  ],
  // module: {
  //   loaders: [
  //     {
  //       test: /\.css$/,
  //       loader: "style-loader!css-loader!postcss-loader"
  //     }
  //   ]
  // },
  // postcss: function() {
  //   return [px2rem({remUnit: 75})]; //设置基准值，75是以iphone6的标准
  // }
}
