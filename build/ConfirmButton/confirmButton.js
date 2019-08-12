"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = __importDefault(require("antd/lib/button"));
var popconfirm_1 = __importDefault(require("antd/lib/popconfirm"));
require("antd/lib/button/style/css/");
require("antd/lib/popconfirm/style/css/");
exports.ConfirmButton = function (_a) {
    var text = _a.text, confirm = _a.confirm, okText = _a.okText, cancelText = _a.cancelText, buttonText = _a.buttonText, buttonTypes = _a.buttonTypes;
    return (react_1.default.createElement(popconfirm_1.default, { title: text, onConfirm: confirm, okText: okText || '确定', cancelText: cancelText || '取消' },
        react_1.default.createElement(button_1.default, __assign({ type: 'danger' }, buttonTypes), buttonText)));
};
