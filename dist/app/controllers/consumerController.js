"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _consumer = _interopRequireDefault(require("../services/consumer.service"));

var _consumer2 = _interopRequireDefault(require("../validations/consumer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var consumerController = {
  register: function register(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data, _consumerValidation$r, error, responseStriga;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _objectSpread(_objectSpread({}, req.body), {}, {
                sourceOfFunds: "OTHER",
                sourceOfFundsOther: "sourceOfFundsOther",
                occupation: "ACCOUNTING",
                timezone: "Europe/Paris",
                firebaseToken: {
                  "device": "A920936F-04C2-48E4-AAE1-6A4E3C581246",
                  "token": "dnROHH-GWkvrpIQaDmkUJf:APA91bEaO8v9vxk_1C6gaW1QrpWnFCc0BhbYrUtd1hIeTbKRMa20r30BrQNGw9S884yiEB_5cqPLMBJFrfV26gBiMkfJjSu5DCO-pRz4uS1GjpLcBqvwCAs7aPxlWA3jCqECE3Ujsw1q"
                }
              });
              _context.prev = 1;
              _consumerValidation$r = _consumer2["default"].reg(data), error = _consumerValidation$r.error;

              if (!error) {
                _context.next = 6;
                break;
              }

              res.status(400).json({
                message: error.details[0].message
              });
              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return _consumer["default"].registerConsumer(data);

            case 8:
              responseStriga = _context.sent;

              if (!(responseStriga.status === 'error')) {
                _context.next = 12;
                break;
              }

              res.status(400).json({
                message: responseStriga.data.message
              });
              return _context.abrupt("return");

            case 12:
              res.status(200).json(responseStriga);
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              res.status(500).json({
                message: "sorry, the server crashed"
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15]]);
    }))();
  }
};
var _default = consumerController;
exports["default"] = _default;