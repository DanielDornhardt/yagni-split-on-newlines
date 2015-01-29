yagni-split-on-newlines
===

Usage
---

either use it via function call:

    splitOnNewlines("My\nText\nwith\nNewlines");

(Returns this array: ["My", "Text", "with", "Newlines"])

or use the handy helper in your templates like this:

    {{#each splitOnNewlines someText}}
        <p>{{this}}</p>
    {{/each}}

To wrap each line of a plaintext-string in <p>s. Of course you can vary the loop body however you want.

Installation
---

Make sure to have installed the meteorite package manager for Meteor (see https://github.com/oortcloud/meteorite/)

To install:

    meteor add yagni:split-on-newlines

Synopsis
---

Use it to create simple and secure output from plain text.

Allows displaying of plain text without increasing the risk of cross-site-scripting - attacks
on your users by keeping the default HTML escaping (no triple-curly-braces required for text output).

License
---

Written by Daniel Dornhardt <daniel at dornhardt.com> on 2015-01-29 and put into the public domain using the un-license (see un-license.txt).
