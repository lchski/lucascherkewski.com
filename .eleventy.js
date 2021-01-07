module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('links', collection => {
        return collection.getFilteredByGlob('src/links/*.md');
    });

    return {
        dir: {
            input: "./src",
            output: "./_site"
        }
    };
};
