"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.ExampleButton = function (props) {
    return (react_1.default.createElement("a", { className: 'f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple' }, props.text));
};
