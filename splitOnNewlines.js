/**
 * SplitNewlines - function and UI-Helper.
 * Often times it's useful to split a given text into its parts, separating it by newlines.
 * The original usecase is this: Users are allowed to enter multi-line texts into a textarea on a webpage.
 * To be able to show a new HTML paragraph whereever the user used the enter-key to separate two lines from each other,
 * it's necessary to split those lines first.
 */

const splitOnNewlines = function(text) {
  if ((text == null)) {
    return [];
  } else {
    return _.filter(((`${text}`).split(/\r?\n|\r/)), line => line);
  }
};

// Register SplitOnNewLines View-Helper

Meteor.startup(function() {
  if (Meteor.isClient) {
    return UI.registerHelper('splitOnNewlines', splitOnNewlines);
  }
});