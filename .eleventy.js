module.exports = config => {

    config.addPassthroughCopy("./src/main.css");

    config.addCollection("posts", function(collectionApi) {
	return collectionApi.getFilteredByGlob("./src/posts/*.md");
    });

    // set markdown footnote processor
    let markdownIt = require("markdown-it");
    let markdownItFootnote = require("markdown-it-footnote");
    
    let options = {
	html: true, // Enable HTML tags in source
	breaks: true,  // Convert '\n' in paragraphs into <br>
	linkify: true // Autoconvert URL-like text to links
    };
    
    // configure the library with options
    let markdownLib =  markdownIt(options).use(markdownItFootnote);
    // set the library to process markdown files
    config.setLibrary("md", markdownLib);

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
