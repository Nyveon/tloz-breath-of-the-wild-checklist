module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/js");
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/fonts");

	eleventyConfig.addHandlebarsHelper('json', function(context) {
		return JSON.stringify(context);
	});

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};