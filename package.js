Package.describe({
    name: 'yagni:split-on-newlines',
    version: '0.0.6',
    summary: "Helper Function and UI-Helper to split text on newlines.",
    git: "https://github.com/DanielDornhardt/yagni-split-on-newlines"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.2');
    api.use(['underscore']);

    api.export("splitOnNewlines");

    api.addFiles([
        "splitOnNewlines.js"
    ]);
});
