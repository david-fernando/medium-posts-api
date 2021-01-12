"use strict";
exports.__esModule = true;
var striptags_1 = require("striptags");
var truncate_1 = require("truncate");
function editText() {
    function removeTags(data) {
        var textWithoutTags = [];
        data.map(function (item, index) {
            textWithoutTags.push(striptags_1["default"](data[index].description));
        });
        return textWithoutTags;
    }
    function cutText(text) {
        var textCuted = [];
        text.map(function (item, index) {
            textCuted.push(truncate_1["default"](text[index], 90));
        });
        return textCuted;
    }
    return {
        removeTags: removeTags,
        cutText: cutText
    };
}
exports["default"] = editText;
