module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('links', collection => {
        return collection.getFilteredByGlob('src/links/*.md');
    });

    // via: https://edjohnsonwilliams.co.uk/2019/05/04/replicating-jekylls-markdownify-filter-in-nunjucks-with-eleventy/
    eleventyConfig.addNunjucksFilter("markdownify", markdownString => {
        const md = require('markdown-it')({
            html: false,
            breaks: true,
            linkify: true
        });

        return md.render(markdownString);
    });

    return {
        dir: {
            input: "./src",
            output: "./_site"
        }
    };
};
