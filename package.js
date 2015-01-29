Package.describe({
    name: 'yagni:split-on-newlines',
    version: '0.0.3',
    summary: "Helper Function and UI-Helper to split text on newlines."
});

Package.onUse(function (api) {
    api.use(['standard-app-packages', 'underscore', 'coffeescript']);

    api.export("splitOnNewlines");

    api.addFiles([
        "splitOnNewlines.litcoffee"
    ]);
});
