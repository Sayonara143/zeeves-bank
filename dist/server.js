"use strict";

var _console = _interopRequireDefault(require("console"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _morgan = _interopRequireDefault(require("morgan"));

var _router = _interopRequireDefault(require("./app/routers/router"));

var _consumer = _interopRequireDefault(require("./app/services/consumer.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import cors from 'cors'
// import * as config from './config/config'
// const corsOptions = {
//   origin: ['http://localhost:3000'],
// }
var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var startServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var port;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //   app.use(cors(corsOptions))
            app.use((0, _morgan["default"])('dev'));
            app.use(_express["default"].json({
              limit: '50mb'
            }));
            app.use(_express["default"].urlencoded({
              limit: '50mb',
              extended: true
            }));
            app.use(_router["default"]);
            port = process.env.PORT || 8080;
            server.listen(port, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _console["default"].log("[SERVER] start ".concat(port));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function startServer() {
    return _ref.apply(this, arguments);
  };
}();

startServer();