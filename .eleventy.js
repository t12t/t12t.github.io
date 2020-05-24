module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('start', 'layouts/start.html');

  // pass some assets right through
  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addWatchTarget("./src/css/postcss/*.css")

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
}