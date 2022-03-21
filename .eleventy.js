module.exports = config => {

    config.addPassthroughCopy("./src/main.css");

    return {
	passthroughFileCopy: true,
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'docs'
        }
    };
}
