"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickForMe = function (object, keys) {
    var stringify = JSON.stringify(object);
    var regex = new RegExp("" + keys.join('|'), 'gi');
    return stringify.replace(regex, '');
};
