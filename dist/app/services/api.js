"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceV0 = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//https://dev.lastbit.io/api/v0/
//http://localhost:8080/api/v0/
var instanceV0 = _axios["default"].create({
  withCredentials: false,
  baseURL: "https://dev.lastbit.io/api/v0/"
});

exports.instanceV0 = instanceV0;