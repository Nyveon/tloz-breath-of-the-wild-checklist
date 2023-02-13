module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/js");
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/fonts");

	return {
		dir: {
			input: "src",
			data: "data",
			includes: "includes",
			output: "public",
		},
	};
}; 