module.exports = function(eleventyConfig) {

  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('start', 'layouts/start.html');
  eleventyConfig.addLayoutAlias('redirect', 'layouts/redirect.html');

  // Pass some assets right through
  eleventyConfig.addPassthroughCopy("./CNAME");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  eleventyConfig.addWatchTarget("./src/assets/css/postcss/*.css")

  eleventyConfig.setDataDeepMerge(false);

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
}
