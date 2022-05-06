"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _consumerController = _interopRequireDefault(require("../../../controllers/consumerController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/', _consumerController["default"].register);
var _default = router;
exports["default"] = _default;