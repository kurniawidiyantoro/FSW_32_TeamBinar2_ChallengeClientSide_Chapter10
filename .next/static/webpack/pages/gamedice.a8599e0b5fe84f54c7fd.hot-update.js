"use strict";
self["webpackHotUpdate_N_E"]("pages/gamedice",{

/***/ "./pages/gamedice/index.js":
/*!*********************************!*\
  !*** ./pages/gamedice/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/gameDice.module.css */ "./styles/gameDice.module.css");
/* harmony import */ var _styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_dice1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/dice1.png */ "./assets/images/dice1.png");
/* harmony import */ var _assets_images_dice2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/dice2.png */ "./assets/images/dice2.png");
/* harmony import */ var _assets_images_dice3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/dice3.png */ "./assets/images/dice3.png");
/* harmony import */ var _assets_images_dice4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/dice4.png */ "./assets/images/dice4.png");
/* harmony import */ var _assets_images_dice5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/dice5.png */ "./assets/images/dice5.png");
/* harmony import */ var _assets_images_dice6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/dice6.png */ "./assets/images/dice6.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamedice\\index.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import { useNavigate } from "react-router-dom";














function Dices() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      scores = _useState3[0],
      setScores = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('Click tombol dibawah untuk memulai permainan'),
      result = _useState4[0],
      setResult = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.reducer.playedGames;
  });
  var playerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var computerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var resultDice = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // const navigate = useNavigate();

  var diceImages = [_assets_images_dice1_png__WEBPACK_IMPORTED_MODULE_6__.default, _assets_images_dice2_png__WEBPACK_IMPORTED_MODULE_7__.default, _assets_images_dice3_png__WEBPACK_IMPORTED_MODULE_8__.default, _assets_images_dice4_png__WEBPACK_IMPORTED_MODULE_9__.default, _assets_images_dice5_png__WEBPACK_IMPORTED_MODULE_10__.default, _assets_images_dice6_png__WEBPACK_IMPORTED_MODULE_11__.default];
  console.log(diceImages);

  var roll = function roll() {
    // Generate random number
    var playerRandomNum = Math.floor(Math.random() * 6);
    var computerRandomNum = Math.floor(Math.random() * 6); // Logic for this game

    if (playerRandomNum > computerRandomNum) {
      setResult("Player menang dengan ".concat(playerRandomNum + 1, " points"));
      setScores(function (prevScore) {
        return prevScore + 1;
      }); // updateScores();
    } else if (playerRandomNum < computerRandomNum) {
      setResult("Computer menang dengan ".concat(computerRandomNum + 1, " points"));
    } else {
      setResult("Seri! Player dan pemain mendapatkan ".concat(playerRandomNum + 1, " points"));
    }

    playerRef.current.setAttribute('src', diceImages[playerRandomNum]);
    computerRef.current.setAttribute('src', diceImages[computerRandomNum]);
    console.log("Initial Played Games:", playedGames);
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_4__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamedice': true
    })));
    localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamedice': true
    })));
    console.log("Played Games:", playedGames);
  };

  var handleBackClick = function handleBackClick() {
    window.location.replace('gamelist'); // Specify the desired path here
  };

  var updateScores = /*#__PURE__*/function () {
    var _ref = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var token, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setScores(scores + 1);
              token = localStorage.getItem("token");
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_13__.default.post('http://localhost:3005/usergame/update/scores', {
                id: id,
                scores: scores + 1
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 4:
              response = _context.sent;
              console.log(response.data.status);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateScores() {
      return _ref.apply(this, arguments);
    };
  }();

  var checkToken = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var token, email, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              console.log(token);
              console.log(email);
              _context2.prev = 4;

              if (token) {
                _context2.next = 10;
                break;
              }

              console.log('Not Authorize !');
              navigate('/login'); // Ganti dengan useNavigate()

              _context2.next = 17;
              break;

            case 10:
              _context2.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_13__.default.post('http://localhost:3005/usergame/get', {
                email: email
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 12:
              response = _context2.sent;
              console.log(response.data.data);
              setId(response.data.data.id);
              setUsername(response.data.data.username);
              setScores(response.data.data.scores);

            case 17:
              _context2.next = 23;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](4);
              console.log("Internal Server Error !");
              window.location.replace('login');

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 19]]);
    }));

    return function checkToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkToken();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().centerContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
            children: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("img", {
            src: diceImages[0],
            ref: playerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
            children: ["Score: ", scores]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("img", {
            src: diceImages[0],
            ref: computerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
          className: "result",
          ref: resultDice,
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
          onClick: roll,
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().btn),
          children: "Roll the dice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Dices, "YejLe/323RhPJRig84+eZVv6yiM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c = Dices;
/* harmony default export */ __webpack_exports__["default"] = (Dices);

var _c;

$RefreshReg$(_c, "Dices");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./assets/images/dice1.png":
/*!*********************************!*\
  !*** ./assets/images/dice1.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/images/dice1.6c3c37f7e923511bebc261df53839d43.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fdice1.6c3c37f7e923511bebc261df53839d43.png&w=8&q=70"});

/***/ }),

/***/ "./assets/images/dice2.png":
/*!*********************************!*\
  !*** ./assets/images/dice2.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/images/dice2.61bab77db2316bebb39caa5df5a4a5c0.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fdice2.61bab77db2316bebb39caa5df5a4a5c0.png&w=8&q=70"});

/***/ }),

/***/ "./assets/images/dice3.png":
/*!*********************************!*\
  !*** ./assets/images/dice3.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/images/dice3.50eb01c623de72673b1627da170f96f0.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fdice3.50eb01c623de72673b1627da170f96f0.png&w=8&q=70"});

/***/ }),

/***/ "./assets/images/dice4.png":
/*!*********************************!*\
  !*** ./assets/images/dice4.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/images/dice4.fd859e7a2d28e93fc1784dd382533dd4.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fdice4.fd859e7a2d28e93fc1784dd382533dd4.png&w=8&q=70"});

/***/ }),

/***/ "./assets/images/dice5.png":
/*!*********************************!*\
  !*** ./assets/images/dice5.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/images/dice5.1ba0d2589c660454ca90ff2a74d6a5b6.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fdice5.1ba0d2589c660454ca90ff2a74d6a5b6.png&w=8&q=70"});

/***/ }),

/***/ "./assets/images/dice6.png":
/*!*********************************!*\
  !*** ./assets/images/dice6.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/images/dice6.6d78dd04a58cce993c4c18dd3cdb0dbc.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fdice6.6d78dd04a58cce993c4c18dd3cdb0dbc.png&w=8&q=70"});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWRpY2UuYTg1OTllMGI1ZmU4NGY1NGM3ZmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLFNBQVNnQixLQUFULEdBQWlCO0FBQUE7O0FBQ2Ysa0JBQW9CZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPZ0IsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDakIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT2tCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCbkIsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT29CLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE0QnJCLCtDQUFRLENBQUMsOENBQUQsQ0FBcEM7QUFBQSxNQUFPc0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQVcsRUFBNUI7QUFDQSxNQUFNa0IsV0FBVyxHQUFHakIsd0RBQVcsQ0FBQyxVQUFBa0IsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUFsQjtBQUFBLEdBQU4sQ0FBL0I7QUFDQSxNQUFNRyxTQUFTLEdBQUczQiw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNNEIsV0FBVyxHQUFHNUIsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsTUFBTTZCLFVBQVUsR0FBRzdCLDZDQUFNLENBQUMsSUFBRCxDQUF6QixDQVRlLENBVWY7O0FBRUEsTUFBSThCLFVBQVUsR0FBRyxDQUFDdEIsNkRBQUQsRUFBUUMsNkRBQVIsRUFBZUMsNkRBQWYsRUFBc0JDLDZEQUF0QixFQUE2QkMsOERBQTdCLEVBQW9DQyw4REFBcEMsQ0FBakI7QUFDQWtCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaOztBQUVBLE1BQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakI7QUFDQSxRQUFNQyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBeEI7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUExQixDQUhpQixDQUtqQjs7QUFDQSxRQUFJSCxlQUFlLEdBQUdJLGlCQUF0QixFQUF5QztBQUN2Q2hCLE1BQUFBLFNBQVMsZ0NBQXlCWSxlQUFlLEdBQUcsQ0FBM0MsYUFBVDtBQUNBZCxNQUFBQSxTQUFTLENBQUMsVUFBQ21CLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLEdBQUcsQ0FBM0I7QUFBQSxPQUFELENBQVQsQ0FGdUMsQ0FHdkM7QUFDRCxLQUpELE1BSU8sSUFBSUwsZUFBZSxHQUFHSSxpQkFBdEIsRUFBeUM7QUFDOUNoQixNQUFBQSxTQUFTLGtDQUEyQmdCLGlCQUFpQixHQUFHLENBQS9DLGFBQVQ7QUFDRCxLQUZNLE1BRUE7QUFDTGhCLE1BQUFBLFNBQVMsK0NBQXdDWSxlQUFlLEdBQUcsQ0FBMUQsYUFBVDtBQUNEOztBQUVEUCxJQUFBQSxTQUFTLENBQUNhLE9BQVYsQ0FBa0JDLFlBQWxCLENBQStCLEtBQS9CLEVBQXNDWCxVQUFVLENBQUNJLGVBQUQsQ0FBaEQ7QUFDQU4sSUFBQUEsV0FBVyxDQUFDWSxPQUFaLENBQW9CQyxZQUFwQixDQUFpQyxLQUFqQyxFQUF3Q1gsVUFBVSxDQUFDUSxpQkFBRCxDQUFsRDtBQUNBUCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ1IsV0FBckM7QUFDQUQsSUFBQUEsUUFBUSxDQUFDbEIsNkRBQWMsaUNBQU1tQixXQUFOO0FBQW1CLG1CQUFhO0FBQWhDLE9BQWYsQ0FBUjtBQUNBa0IsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DQyxJQUFJLENBQUNDLFNBQUwsaUNBQW9CckIsV0FBcEI7QUFBaUMsbUJBQWE7QUFBOUMsT0FBcEM7QUFDQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlIsV0FBN0I7QUFDQyxHQXRCSDs7QUF3QkEsTUFBTXNCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUU1QkMsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixVQUF4QixFQUY0QixDQUVRO0FBQ3JDLEdBSEQ7O0FBS0EsTUFBTUMsWUFBWTtBQUFBLDJXQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQjlCLGNBQUFBLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLENBQVYsQ0FBVDtBQUNNZ0MsY0FBQUEsS0FGYSxHQUVMVCxZQUFZLENBQUNVLE9BQWIsQ0FBcUIsT0FBckIsQ0FGSztBQUFBO0FBQUEscUJBR0lsRCxnREFBQSxDQUFXLDhDQUFYLEVBQ25CO0FBQUVhLGdCQUFBQSxFQUFFLEVBQUZBLEVBQUY7QUFBTUksZ0JBQUFBLE1BQU0sRUFBRUEsTUFBTSxHQUFHO0FBQXZCLGVBRG1CLEVBRW5CO0FBQ0VtQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1BDLGtCQUFBQSxhQUFhLGtCQUFXSixLQUFYO0FBRE47QUFEWCxlQUZtQixDQUhKOztBQUFBO0FBR2JLLGNBQUFBLFFBSGE7QUFXbkJ6QixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXdCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUExQjs7QUFYbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFjQSxNQUFNUyxVQUFVO0FBQUEsNFdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hSLGNBQUFBLEtBRFcsR0FDSFQsWUFBWSxDQUFDVSxPQUFiLENBQXFCLE9BQXJCLENBREc7QUFFWFEsY0FBQUEsS0FGVyxHQUVIbEIsWUFBWSxDQUFDVSxPQUFiLENBQXFCLE9BQXJCLENBRkc7QUFHakJyQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEtBQVo7QUFDQXBCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNEIsS0FBWjtBQUppQjs7QUFBQSxrQkFNVlQsS0FOVTtBQUFBO0FBQUE7QUFBQTs7QUFPYnBCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0E2QixjQUFBQSxRQUFRLENBQUMsUUFBRCxDQUFSLENBUmEsQ0FRTzs7QUFSUDtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFVVTNELGdEQUFBLENBQVcsb0NBQVgsRUFDckI7QUFBRTBELGdCQUFBQSxLQUFLLEVBQUxBO0FBQUYsZUFEcUIsRUFFckI7QUFDRU4sZ0JBQUFBLE9BQU8sRUFBRTtBQUNQQyxrQkFBQUEsYUFBYSxrQkFBV0osS0FBWDtBQUROO0FBRFgsZUFGcUIsQ0FWVjs7QUFBQTtBQVVQSyxjQUFBQSxRQVZPO0FBa0JiekIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl3QixRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBMUI7QUFDQXpDLGNBQUFBLEtBQUssQ0FBQ3dDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CMUMsRUFBcEIsQ0FBTDtBQUNBRyxjQUFBQSxXQUFXLENBQUNzQyxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQnhDLFFBQXBCLENBQVg7QUFDQUcsY0FBQUEsU0FBUyxDQUFDb0MsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJ0QyxNQUFwQixDQUFUOztBQXJCYTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JmWSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBZSxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCOztBQXpCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWVSxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQTZCQTFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkMEQsSUFBQUEsVUFBVTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNBO0FBQUEsNkJBQ0ksK0RBQUMsK0NBQUQ7QUFBUSxhQUFLLEVBQUMsU0FBZDtBQUF3QixlQUFPLEVBQUViLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBTUE7QUFBSyxlQUFTLEVBQUUzQyxxRkFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLGlGQUFoQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUEsOEVBQWhCO0FBQUEsa0NBQ0U7QUFBQSxzQkFBSWM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxlQUFHLEVBQUVhLFVBQVUsQ0FBQyxDQUFELENBQXBCO0FBQXlCLGVBQUcsRUFBRUgsU0FBOUI7QUFBeUMsZUFBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBQSxpQ0FDRTtBQUFBLGtDQUFXUixNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFRRTtBQUFLLG1CQUFTLEVBQUVoQiw4RUFBaEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUssZUFBRyxFQUFFMkIsVUFBVSxDQUFDLENBQUQsQ0FBcEI7QUFBeUIsZUFBRyxFQUFFRixXQUE5QjtBQUEyQyxlQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUV6QixpRkFBaEI7QUFBQSwrQkFDQTtBQUFHLG1CQUFTLEVBQUMsUUFBYjtBQUFzQixhQUFHLEVBQUUwQixVQUEzQjtBQUFBLG9CQUNHUjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUFtQkU7QUFBSyxpQkFBUyxFQUFFbEIsaUZBQWhCO0FBQUEsK0JBQ0E7QUFBUSxpQkFBTyxFQUFFOEIsSUFBakI7QUFBdUIsbUJBQVMsRUFBRTlCLHlFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkE7QUFBQSxrQkFERjtBQW1DRDs7R0E5SFFXO1VBS1VSLHNEQUNHQzs7O0tBTmJPO0FBZ0lULCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9JQSwrREFBZSxDQUFDLGlQQUFpUDs7Ozs7Ozs7Ozs7QUNBalEsK0RBQWUsQ0FBQyxpUEFBaVA7Ozs7Ozs7Ozs7O0FDQWpRLCtEQUFlLENBQUMsaVBBQWlQOzs7Ozs7Ozs7OztBQ0FqUSwrREFBZSxDQUFDLGlQQUFpUDs7Ozs7Ozs7Ozs7QUNBalEsK0RBQWUsQ0FBQyxpUEFBaVA7Ozs7Ozs7Ozs7O0FDQWpRLCtEQUFlLENBQUMsaVBBQWlQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVkaWNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2ltYWdlcy9kaWNlMi5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9pbWFnZXMvZGljZTMucG5nIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2ltYWdlcy9kaWNlNS5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9pbWFnZXMvZGljZTYucG5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVEaWNlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7c2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBkaWNlMSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnBuZyc7XHJcbmltcG9ydCBkaWNlMiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UyLnBuZyc7XHJcbmltcG9ydCBkaWNlMyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UzLnBuZyc7XHJcbmltcG9ydCBkaWNlNCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnBuZyc7XHJcbmltcG9ydCBkaWNlNSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U1LnBuZyc7XHJcbmltcG9ydCBkaWNlNiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U2LnBuZyc7XHJcblxyXG5cclxuZnVuY3Rpb24gRGljZXMoKSB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Njb3Jlcywgc2V0U2NvcmVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnQ2xpY2sgdG9tYm9sIGRpYmF3YWggdW50dWsgbWVtdWxhaSBwZXJtYWluYW4nKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICBjb25zdCBwbGF5ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29tcHV0ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcmVzdWx0RGljZSA9IHVzZVJlZihudWxsKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGxldCBkaWNlSW1hZ2VzID0gW2RpY2UxLCBkaWNlMiwgZGljZTMsIGRpY2U0LCBkaWNlNSwgZGljZTZdO1xyXG4gIGNvbnNvbGUubG9nKGRpY2VJbWFnZXMpXHJcblxyXG4gIGNvbnN0IHJvbGwgPSAoKSA9PiB7XHJcbiAgICAvLyBHZW5lcmF0ZSByYW5kb20gbnVtYmVyXHJcbiAgICBjb25zdCBwbGF5ZXJSYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgIGNvbnN0IGNvbXB1dGVyUmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcblxyXG4gICAgLy8gTG9naWMgZm9yIHRoaXMgZ2FtZVxyXG4gICAgaWYgKHBsYXllclJhbmRvbU51bSA+IGNvbXB1dGVyUmFuZG9tTnVtKSB7XHJcbiAgICAgIHNldFJlc3VsdChgUGxheWVyIG1lbmFuZyBkZW5nYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgICAgc2V0U2NvcmVzKChwcmV2U2NvcmUpID0+IHByZXZTY29yZSArIDEpO1xyXG4gICAgICAvLyB1cGRhdGVTY29yZXMoKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyUmFuZG9tTnVtIDwgY29tcHV0ZXJSYW5kb21OdW0pIHtcclxuICAgICAgc2V0UmVzdWx0KGBDb21wdXRlciBtZW5hbmcgZGVuZ2FuICR7Y29tcHV0ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlc3VsdChgU2VyaSEgUGxheWVyIGRhbiBwZW1haW4gbWVuZGFwYXRrYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpY2VJbWFnZXNbcGxheWVyUmFuZG9tTnVtXSk7XHJcbiAgICBjb21wdXRlclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZGljZUltYWdlc1tjb21wdXRlclJhbmRvbU51bV0pO1xyXG4gICAgY29uc29sZS5sb2coXCJJbml0aWFsIFBsYXllZCBHYW1lczpcIiwgcGxheWVkR2FtZXMpO1xyXG4gICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lZGljZSc6IHRydWUgfSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllZEdhbWVzJywgSlNPTi5zdHJpbmdpZnkoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lZGljZSc6IHRydWUgfSkpO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZWQgR2FtZXM6XCIsIHBsYXllZEdhbWVzKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2dhbWVsaXN0JykgLy8gU3BlY2lmeSB0aGUgZGVzaXJlZCBwYXRoIGhlcmVcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzICsgMSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS91cGRhdGUvc2NvcmVzJyxcclxuICAgICAgICB7IGlkLCBzY29yZXM6IHNjb3JlcyArIDEgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTsgLy8gR2FudGkgZGVuZ2FuIHVzZU5hdmlnYXRlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS9nZXQnLFxyXG4gICAgICAgICAgeyBlbWFpbCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKTtcclxuICAgICAgICBzZXRVc2VybmFtZShyZXNwb25zZS5kYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIHNldFNjb3JlcyhyZXNwb25zZS5kYXRhLmRhdGEuc2NvcmVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2xvZ2luJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZUFyZWF9PlxyXG4gICAgICAgICAgPHA+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkaWNlSW1hZ2VzWzBdfSByZWY9e3BsYXllclJlZn0gYWx0PSdEaWNlJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5TY29yZToge3Njb3Jlc308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlQXJlYX0+XHJcbiAgICAgICAgICA8cD5Db21wdXRlcjwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkaWNlSW1hZ2VzWzBdfSByZWY9e2NvbXB1dGVyUmVmfSBhbHQ9J0RpY2UnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VXcmFwcGVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdyZXN1bHQnIHJlZj17cmVzdWx0RGljZX0+XHJcbiAgICAgICAge3Jlc3VsdH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17cm9sbH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cclxuICAgICAgICBSb2xsIHRoZSBkaWNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VzO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlcy9kaWNlMS42YzNjMzdmN2U5MjM1MTFiZWJjMjYxZGY1MzgzOWQ0My5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmFzc2V0cyUyRmltYWdlcyUyRmRpY2UxLjZjM2MzN2Y3ZTkyMzUxMWJlYmMyNjFkZjUzODM5ZDQzLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlcy9kaWNlMi42MWJhYjc3ZGIyMzE2YmViYjM5Y2FhNWRmNWE0YTVjMC5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmFzc2V0cyUyRmltYWdlcyUyRmRpY2UyLjYxYmFiNzdkYjIzMTZiZWJiMzljYWE1ZGY1YTRhNWMwLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlcy9kaWNlMy41MGViMDFjNjIzZGU3MjY3M2IxNjI3ZGExNzBmOTZmMC5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmFzc2V0cyUyRmltYWdlcyUyRmRpY2UzLjUwZWIwMWM2MjNkZTcyNjczYjE2MjdkYTE3MGY5NmYwLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlcy9kaWNlNC5mZDg1OWU3YTJkMjhlOTNmYzE3ODRkZDM4MjUzM2RkNC5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmFzc2V0cyUyRmltYWdlcyUyRmRpY2U0LmZkODU5ZTdhMmQyOGU5M2ZjMTc4NGRkMzgyNTMzZGQ0LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlcy9kaWNlNS4xYmEwZDI1ODljNjYwNDU0Y2E5MGZmMmE3NGQ2YTViNi5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmFzc2V0cyUyRmltYWdlcyUyRmRpY2U1LjFiYTBkMjU4OWM2NjA0NTRjYTkwZmYyYTc0ZDZhNWI2LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2ltYWdlcy9kaWNlNi42ZDc4ZGQwNGE1OGNjZTk5M2M0YzE4ZGQzY2RiMGRiYy5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmFzc2V0cyUyRmltYWdlcyUyRmRpY2U2LjZkNzhkZDA0YTU4Y2NlOTkzYzRjMThkZDNjZGIwZGJjLnBuZyZ3PTgmcT03MFwifTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkF4aW9zIiwic3R5bGVzIiwiQnV0dG9uIiwic2V0UGxheWVkR2FtZXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZGljZTEiLCJkaWNlMiIsImRpY2UzIiwiZGljZTQiLCJkaWNlNSIsImRpY2U2IiwiRGljZXMiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImRpc3BhdGNoIiwicGxheWVkR2FtZXMiLCJzdGF0ZSIsInJlZHVjZXIiLCJwbGF5ZXJSZWYiLCJjb21wdXRlclJlZiIsInJlc3VsdERpY2UiLCJkaWNlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsInJvbGwiLCJwbGF5ZXJSYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wdXRlclJhbmRvbU51bSIsInByZXZTY29yZSIsImN1cnJlbnQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwiZ2V0SXRlbSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsIm5hdmlnYXRlIiwiY2VudGVyQ29udGFpbmVyIiwiZGljZVdyYXBwZXIiLCJkaWNlQXJlYSIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=