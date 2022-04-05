module.exports = config => {

    config.addPassthroughCopy({
	"./src/main.css": "main.css",
	"./src/posts/images/*": "images",
	"./src/diary/*.png": "images",
	"./src/diary/*.jpg": "images",
	"./src/diary/*.webp": "images"
    });

    // posts collection
    config.addCollection("posts", function(collectionApi) {
	return collectionApi.getFilteredByGlob("./src/posts/*.md");
    });

    // fragments collection
    config.addCollection("fragments", function(collectionApi) {
	return collectionApi.getFilteredByGlob("./src/fragments/*.md");
    });

    // set markdown footnote processor
    const markdownIt = require("markdown-it");
    const markdownItFootnote = require("markdown-it-footnote");
    const namedCodeBlocks = require('markdown-it-named-code-blocks');
 
    const options = {
	html: true, // Enable HTML tags in source
	breaks: true,  // Convert '\n' in paragraphs into <br>
	linkify: true // Autoconvert URL-like text to links
    };
    
    // configure the library with options
    const markdownLib =  markdownIt(options).use(markdownItFootnote).use(namedCodeBlocks);
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
