module.exports = config => {

    config.addPassthroughCopy("./src/main.css");

    config.addCollection("posts", function(collectionApi) {
	return collectionApi.getFilteredByGlob("./src/posts/*.md");
    });
    
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
