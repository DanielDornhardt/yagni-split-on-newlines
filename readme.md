yagni-split-on-newlines
===

Synopsis
---

Display line breaks or multiple paragraphs from plain text.

Create simple and secure output by decorating or iterating over each line of plain text.

Allows displaying of plain text without increasing the risk of cross-site-scripting - attacks
on your users by keeping the default HTML escaping (no triple-curly-braces required for text output).


Usage
---

Use the handy helper in your templates like this:

    {{#each splitOnNewlines someText}}
        <p>{{this}}</p>
    {{/each}}

To wrap each line of a plaintext-string in \<p\>s. Of course you can vary the loop body however you want.


or use it via function call:

    lines = splitOnNewlines("My\nText\nwith\nNewlines");

(Returns this array: ["My", "Text", "with", "Newlines"])

Installation
---

Make sure to have installed the meteorite package manager for Meteor (see https://github.com/oortcloud/meteorite/)

To install:

    meteor add yagni:split-on-newlines

How it works / details
---

The code:

    _.filter (('' + text).split /\r?\n|\r/), (line) ->
      return line

The input string will be split using the regex "/\r?\n|\r/" which should be able to detect most common line ending formats
(win / mac / unix).

Empty lines will be discarded, but it's possible to make non-empty lines by using eg. a whitespace character on a line.

License
---

Written by Daniel Dornhardt <daniel at dornhardt.com> on 2015-01-29 and put into the public domain using the un-license (see un-license.txt).
