module.exports = config => {

    config.addPassthroughCopy({
	"./src/main.css": "main.css",
	"./src/posts/images/*": "images",
	"./src/diary/*.png": "images",
	"./src/diary/*.jpg": "images",
	"./src/diary/*.jpeg": "images",
	"./src/diary/*.webp": "images",
	"./src/fragments/images/*.png": "images",
	"./src/fragments/images/*.jpg": "images",
	"./src/fragments/images/*.jpeg": "images",
	"./src/fragments/images/*.webp": "images"
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
    const checkbox = require('markdown-it-checkbox');
 
    const options = {
	html: true, // Enable HTML tags in source
	breaks: true,  // Convert '\n' in paragraphs into <br>
	linkify: true // Autoconvert URL-like text to links
    };
    
    // configure the library with options
    const markdownLib =  markdownIt(options).use(markdownItFootnote).use(namedCodeBlocks).use(checkbox);
    // set the library to process markdown files
    config.setLibrary("md", markdownLib);

    // FILTERS
    config.addFilter("makeUrl", function({id, url}) {
	if (id)
	    return "https://drive.google.com/uc?export=view&id=" + id
	return url
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
