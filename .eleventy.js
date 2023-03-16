module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/js");
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/fonts");

	eleventyConfig.addNunjucksFilter("date", function (value) {
		return value.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	});

	return {
		dir: {
			input: "src",
			data: "data",
			includes: "includes",
			output: "docs",
		},
	};
};
