"use strict";
self["webpackHotUpdate_N_E"]("pages/gamecoin",{

/***/ "./pages/gamecoin/index.js":
/*!*********************************!*\
  !*** ./pages/gamecoin/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/gameCoin.module.css */ "./styles/gameCoin.module.css");
/* harmony import */ var _styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamecoin\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import { useNavigate } from "react-router-dom";






var CoinFlipGame = function CoinFlipGame() {
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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      guessedOption = _useState4[0],
      setGuessedOption = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      coinSide = _useState5[0],
      setCoinSide = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isFlipping = _useState6[0],
      setIsFlipping = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showPopup = _useState7[0],
      setShowPopup = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      headsImgLoaded = _useState8[0],
      setHeadsImgLoaded = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      tailsImgLoaded = _useState9[0],
      setTailsImgLoaded = _useState9[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.reducer.playedGames;
  }); // const navigate = useNavigate();

  var handleHeadsImgLoad = function handleHeadsImgLoad() {
    setHeadsImgLoaded(true);
  };

  var handleTailsImgLoad = function handleTailsImgLoad() {
    setTailsImgLoaded(true);
  };

  var handleGuess = function handleGuess(option) {
    setGuessedOption(option);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!isFlipping && coinSide && guessedOption) {
      // Update the score after the animation has ended based on coinSide and guessedOption
      if (coinSide === "heads" && guessedOption === "heads" || coinSide === "tails" && guessedOption === "tails") {
        setScores(function (prevScore) {
          return prevScore + 1;
        }); // updateScores();

        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_4__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
          '/gamecoin': true
        })));
        console.log("Played Games:", playedGames);
      }

      setShowPopup(true);
    }
  }, [isFlipping, coinSide, guessedOption]);

  var handleFlipCoin = function handleFlipCoin() {
    if (!guessedOption) {
      alert("Please make a guess before flipping the coin.");
      return;
    }

    if (isFlipping) return;
    setIsFlipping(true); // Calculate the new coin side based on Math.random()

    var newCoinSide = Math.random() < 0.5 ? "heads" : "tails";
    setCoinSide(newCoinSide);
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_4__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamecoin': true
    })));
  };

  var handleBackClick = function handleBackClick() {
    window.location.replace('gamelist');
  };

  var handleGuessAgain = function handleGuessAgain() {
    setGuessedOption(null);
    setCoinSide(null);
    setShowPopup(false);
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
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/usergame/update/scores', {
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
              window.location.replace('login');
              _context2.next = 17;
              break;

            case 10:
              _context2.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/usergame/get', {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "".concat((_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().coin), " ").concat(isFlipping ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().flipping) : ""),
        onAnimationEnd: function onAnimationEnd() {
          return setIsFlipping(false);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().heads), " ").concat(coinSide === "heads" && headsImgLoaded ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().show) : ""),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: '/images/coin.jpg',
            alt: "Heads",
            onLoad: handleHeadsImgLoad
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().tails), " ").concat(coinSide === "tails" && tailsImgLoaded ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().show) : ""),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: '/images/coin2.jpg',
            alt: "Tails",
            onLoad: handleTailsImgLoad
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Player: ", username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Scores: ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().buttons),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
          className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().guessButton),
          onClick: function onClick() {
            return handleGuess("heads");
          },
          disabled: isFlipping || coinSide,
          children: "Heads"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
          className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().guessButton),
          onClick: function onClick() {
            return handleGuess("tails");
          },
          disabled: isFlipping || coinSide,
          children: "Tails"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: handleFlipCoin,
          disabled: !guessedOption || isFlipping,
          children: "Flip Coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this), showPopup && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "result-popup",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Kamu menebak ", guessedOption, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Hasilnya adalah ", coinSide]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Scoremu : ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: handleGuessAgain,
          children: "Tebak lagi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 4
  }, _this);
};

_s(CoinFlipGame, "TJaj+p7pa/1T0fRvUXqE993O1ng=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c = CoinFlipGame;
/* harmony default export */ __webpack_exports__["default"] = (CoinFlipGame);

var _c;

$RefreshReg$(_c, "CoinFlipGame");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWNvaW4uYTBhMjY4OTEzNWYwYmYzMGUxNzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsa0JBQW9CUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPUyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NWLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCWiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPYSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBMENkLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBLE1BQU9lLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFnQ2hCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9pQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFvQ2xCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9tQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFrQ3BCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9xQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0Q3RCLCtDQUFRLENBQUMsS0FBRCxDQUFwRDtBQUFBLE1BQU91QixjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBNEN4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQSxNQUFPeUIsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHckIsd0RBQVcsRUFBNUI7QUFDQSxNQUFNc0Is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MUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFlRSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLEVBQUVxQixjQUFqQjtBQUFpQyxrQkFBUSxFQUFFLENBQUN2QixhQUFELElBQWtCSSxVQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkYsRUFtQ0dFLFNBQVMsaUJBQ1I7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUFBLHNDQUFpQk4sYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSx5Q0FBb0JFLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsbUNBQWNKLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUUsOERBQUMsOENBQUQ7QUFBUSxpQkFBTyxFQUFFa0MsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNERCxDQXZLRDs7R0FBTXZDO1VBVWFGLHNEQUNHQzs7O0tBWGhCQztBQXlLTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lY29pbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVDb2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IENvaW5GbGlwR2FtZSA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2d1ZXNzZWRPcHRpb24sIHNldEd1ZXNzZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvaW5TaWRlLCBzZXRDb2luU2lkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNGbGlwcGluZywgc2V0SXNGbGlwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZHNJbWdMb2FkZWQsIHNldEhlYWRzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFpbHNJbWdMb2FkZWQsIHNldFRhaWxzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhlYWRzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldEhlYWRzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhaWxzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldFRhaWxzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1ZXNzID0gKG9wdGlvbikgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihvcHRpb24pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmxpcHBpbmcgJiYgY29pblNpZGUgJiYgZ3Vlc3NlZE9wdGlvbikge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIHNjb3JlIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGVuZGVkIGJhc2VkIG9uIGNvaW5TaWRlIGFuZCBndWVzc2VkT3B0aW9uXHJcbiAgICAgIGlmICgoY29pblNpZGUgPT09IFwiaGVhZHNcIiAmJiBndWVzc2VkT3B0aW9uID09PSBcImhlYWRzXCIpIHx8IChjb2luU2lkZSA9PT0gXCJ0YWlsc1wiICYmIGd1ZXNzZWRPcHRpb24gPT09IFwidGFpbHNcIikpIHtcclxuICAgICAgICBzZXRTY29yZXMoKHByZXZTY29yZSkgPT4gcHJldlNjb3JlICsgMSk7XHJcbiAgICAgICAgLy8gdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lY29pbic6IHRydWUgfSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFNob3dQb3B1cCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbaXNGbGlwcGluZywgY29pblNpZGUsIGd1ZXNzZWRPcHRpb25dKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmxpcENvaW4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWd1ZXNzZWRPcHRpb24pIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgbWFrZSBhIGd1ZXNzIGJlZm9yZSBmbGlwcGluZyB0aGUgY29pbi5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGbGlwcGluZykgcmV0dXJuO1xyXG5cclxuICAgIHNldElzRmxpcHBpbmcodHJ1ZSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgY29pbiBzaWRlIGJhc2VkIG9uIE1hdGgucmFuZG9tKClcclxuICAgIGNvbnN0IG5ld0NvaW5TaWRlID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaGVhZHNcIiA6IFwidGFpbHNcIjtcclxuICAgIHNldENvaW5TaWRlKG5ld0NvaW5TaWRlKTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWNvaW4nOiB0cnVlIH0pKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdnYW1lbGlzdCcpIFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1ZXNzQWdhaW4gPSAoKSA9PiB7XHJcbiAgICBzZXRHdWVzc2VkT3B0aW9uKG51bGwpO1xyXG4gICAgc2V0Q29pblNpZGUobnVsbCk7XHJcbiAgICBzZXRTaG93UG9wdXAoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNjb3JlcyhzY29yZXMgKyAxKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL3VwZGF0ZS9zY29yZXMnLFxyXG4gICAgICAgIHsgaWQsIHNjb3Jlczogc2NvcmVzICsgMSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2xvZ2luJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS9nZXQnLFxyXG4gICAgICAgICAgeyBlbWFpbCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKTtcclxuICAgICAgICBzZXRVc2VybmFtZShyZXNwb25zZS5kYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIHNldFNjb3JlcyhyZXNwb25zZS5kYXRhLmRhdGEuc2NvcmVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2xvZ2luJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29pbn0gJHtpc0ZsaXBwaW5nID8gc3R5bGVzLmZsaXBwaW5nIDogXCJcIn1gfVxyXG4gICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IHNldElzRmxpcHBpbmcoZmFsc2UpfVxyXG4gICAgICAgICAgPiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZHN9ICR7Y29pblNpZGUgPT09IFwiaGVhZHNcIiAmJiBoZWFkc0ltZ0xvYWRlZCA/IHN0eWxlcy5zaG93IDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvY29pbi5qcGcnfSBhbHQ9XCJIZWFkc1wiIG9uTG9hZD17aGFuZGxlSGVhZHNJbWdMb2FkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50YWlsc30gJHtjb2luU2lkZSA9PT0gXCJ0YWlsc1wiICYmIHRhaWxzSW1nTG9hZGVkID8gc3R5bGVzLnNob3cgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9jb2luMi5qcGcnfSBhbHQ9XCJUYWlsc1wiIG9uTG9hZD17aGFuZGxlVGFpbHNJbWdMb2FkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzfT5cclxuICAgICAgICAgIDxwPlBsYXllcjoge3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgIDxwPlNjb3Jlczoge3Njb3Jlc308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ3Vlc3NCdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUd1ZXNzKFwiaGVhZHNcIil9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0ZsaXBwaW5nIHx8IGNvaW5TaWRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBIZWFkc1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmd1ZXNzQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHdWVzcyhcInRhaWxzXCIpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNGbGlwcGluZyB8fCBjb2luU2lkZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGFpbHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGbGlwQ29pbn0gZGlzYWJsZWQ9eyFndWVzc2VkT3B0aW9uIHx8IGlzRmxpcHBpbmd9PlxyXG4gICAgICAgICAgICBGbGlwIENvaW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcG9wdXBcIj5cclxuICAgICAgICAgICAgPHA+S2FtdSBtZW5lYmFrIHtndWVzc2VkT3B0aW9ufSE8L3A+XHJcbiAgICAgICAgICAgIDxwPkhhc2lsbnlhIGFkYWxhaCB7Y29pblNpZGV9PC9wPlxyXG4gICAgICAgICAgICA8cD5TY29yZW11IDoge3Njb3Jlc308L3A+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlR3Vlc3NBZ2Fpbn0+VGViYWsgbGFnaTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvaW5GbGlwR2FtZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsInNldFBsYXllZEdhbWVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNvaW5GbGlwR2FtZSIsImlkIiwic2V0SWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2NvcmVzIiwic2V0U2NvcmVzIiwiZ3Vlc3NlZE9wdGlvbiIsInNldEd1ZXNzZWRPcHRpb24iLCJjb2luU2lkZSIsInNldENvaW5TaWRlIiwiaXNGbGlwcGluZyIsInNldElzRmxpcHBpbmciLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJoZWFkc0ltZ0xvYWRlZCIsInNldEhlYWRzSW1nTG9hZGVkIiwidGFpbHNJbWdMb2FkZWQiLCJzZXRUYWlsc0ltZ0xvYWRlZCIsImRpc3BhdGNoIiwicGxheWVkR2FtZXMiLCJzdGF0ZSIsInJlZHVjZXIiLCJoYW5kbGVIZWFkc0ltZ0xvYWQiLCJoYW5kbGVUYWlsc0ltZ0xvYWQiLCJoYW5kbGVHdWVzcyIsIm9wdGlvbiIsInByZXZTY29yZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGbGlwQ29pbiIsImFsZXJ0IiwibmV3Q29pblNpZGUiLCJNYXRoIiwicmFuZG9tIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlR3Vlc3NBZ2FpbiIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsImNvbnRhaW5lciIsImNvaW4iLCJmbGlwcGluZyIsImhlYWRzIiwic2hvdyIsInRhaWxzIiwic3RhdHMiLCJidXR0b25zIiwiZ3Vlc3NCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9