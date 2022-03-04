module.exports = config => {
    // config.addPassthroughCopy("**/*.jpg")

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'docs'
        }
    };
}