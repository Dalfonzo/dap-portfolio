const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const { minify } = require("terser");

module.exports = function (eleventyConfig) {
  /**
   * PLUGINS
   */
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  /**
   * COPY
   */
  eleventyConfig.addPassthroughCopy("src/static");

  /**
   * FILTERS
   */
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts", "projects"].indexOf(tag) === -1
    );
  }

  eleventyConfig.addFilter("filterTagList", filterTagList);

  eleventyConfig.addFilter("log", (value) => {
    console.log(value);
  });

  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args);
    debugger;
  });

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("src/posts/*.md");
  });

  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("src/projects/*.md");
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter("slug"),
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  /**
   * Transforms
   */
  eleventyConfig.addTransform("htmlmin", async function (content, output) {
    if (output && output.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // pathPrefix: "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    data: {
      metadata: {
        url: "https://dap-portfolio.vercel.app/",
      },
    },
  };
};
