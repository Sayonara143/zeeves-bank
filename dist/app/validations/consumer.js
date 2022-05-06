"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var consumerValidation = {
  reg: function reg(data) {
    var shema = _joi["default"].object({
      name: _joi["default"].string().min(1).max(255).required(),
      surname: _joi["default"].string().min(1).max(255).required(),
      email: _joi["default"].string().min(1).max(255).required().email(),
      mobileCountryCode: _joi["default"].string().required(),
      mobileNumber: _joi["default"].string().min(1).max(255).required(),
      userId: _joi["default"].string().min(1).max(255).required(),
      baseCurrency: _joi["default"].string().min(1).max(255).required(),
      dateOfBirth: {
        year: _joi["default"].number().required(),
        month: _joi["default"].number().min(1).max(12).required(),
        day: _joi["default"].number().min(1).max(31).required()
      },
      sourceOfFunds: _joi["default"].string().required(),
      sourceOfFundsOther: _joi["default"].string().required(),
      occupation: _joi["default"].string().required(),
      timezone: _joi["default"].string().required(),
      firebaseToken: {
        device: _joi["default"].string().required(),
        token: _joi["default"].string().required()
      }
    });

    return shema.validate(data);
  }
};
var _default = consumerValidation;
exports["default"] = _default;