const moment = require("moment");

module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('links', collection => {
        return collection.getFilteredByGlob('src/content/links/*.md');
    });

    eleventyConfig.addCollection('pages', collection => {
        return collection.getFilteredByGlob('src/content/pages/*.md');
    });

    // via: https://github.com/11ty/eleventy/issues/717
    eleventyConfig.addNunjucksFilter("date", function(date, format) {
        return moment(date).format(format);
    });

    // via: https://edjohnsonwilliams.co.uk/2019/05/04/replicating-jekylls-markdownify-filter-in-nunjucks-with-eleventy/
    eleventyConfig.addNunjucksFilter("markdownifyInline", markdownString => {
        const md = require('markdown-it')({
            html: false,
            breaks: true,
            linkify: true
        });

        return md.render(markdownString).replace('<p>', '').replace('</p>', '');
    });

    return {
        dir: {
            input: "./src",
            output: "./_site"
        },
        templateFormats : ["njk", "md", "11ty.js"]
    };
};
