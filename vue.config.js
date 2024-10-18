module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
  publicPath: process.env.NODE_ENV === "production" ? "/vue-netflix-clone-aluraflix/" : "/",
    svgRule.uses.clear();
 
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeViewBox: false }]
        }
      });
  },
};
