module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('links', collection => {
        return collection.getFilteredByGlob('links/*.md');
    });

    return {
        dir: {
            input: "./src",      // Equivalent to Jekyll's source property
            output: "./_site" // Equivalent to Jekyll's destination property
        }
    };
};
