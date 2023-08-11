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
        localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
          '/gamecoin': true
        })));
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
        lineNumber: 126,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
            lineNumber: 136,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().tails), " ").concat(coinSide === "tails" && tailsImgLoaded ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().show) : ""),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: '/images/coin2.jpg',
            alt: "Tails",
            onLoad: handleTailsImgLoad
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_9___default().stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Player: ", username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Scores: ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
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
          lineNumber: 147,
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
          lineNumber: 154,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: handleFlipCoin,
          disabled: !guessedOption || isFlipping,
          children: "Flip Coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), showPopup && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "result-popup",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Kamu menebak ", guessedOption, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Hasilnya adalah ", coinSide]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Scoremu : ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: handleGuessAgain,
          children: "Tebak lagi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWNvaW4uMTkwNzdlMGM5M2FjNjUyYmQzZDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsa0JBQW9CUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPUyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NWLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCWiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPYSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBMENkLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBLE1BQU9lLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFnQ2hCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9pQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFvQ2xCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9tQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFrQ3BCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9xQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0Q3RCLCtDQUFRLENBQUMsS0FBRCxDQUFwRDtBQUFBLE1BQU91QixjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBNEN4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQSxNQUFPeUIsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHckIsd0RBQVcsRUFBNUI7QUFDQSxNQUFNc0IsV0FBVyxHQUFHckIsd0RBQVcsQ0FBQyxVQUFBc0IsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUFsQjtBQUFBLEdBQU4sQ0FBL0IsQ0FYeUIsQ0FZekI7O0FBRUEsTUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CUCxJQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNUSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JOLElBQUFBLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRCxHQUZEOztBQUlBLE1BQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBWTtBQUM5QmxCLElBQUFBLGdCQUFnQixDQUFDa0IsTUFBRCxDQUFoQjtBQUNELEdBRkQ7O0FBSUFqQyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNrQixVQUFELElBQWVGLFFBQWYsSUFBMkJGLGFBQS9CLEVBQThDO0FBQzVDO0FBQ0EsVUFBS0UsUUFBUSxLQUFLLE9BQWIsSUFBd0JGLGFBQWEsS0FBSyxPQUEzQyxJQUF3REUsUUFBUSxLQUFLLE9BQWIsSUFBd0JGLGFBQWEsS0FBSyxPQUF0RyxFQUFnSDtBQUM5R0QsUUFBQUEsU0FBUyxDQUFDLFVBQUNxQixTQUFEO0FBQUEsaUJBQWVBLFNBQVMsR0FBRyxDQUEzQjtBQUFBLFNBQUQsQ0FBVCxDQUQ4RyxDQUU5Rzs7QUFDQVIsUUFBQUEsUUFBUSxDQUFDdEIsNkRBQWMsaUNBQU11QixXQUFOO0FBQW1CLHVCQUFhO0FBQWhDLFdBQWYsQ0FBUjtBQUNBUSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCVCxXQUE3QjtBQUNBVSxRQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NDLElBQUksQ0FBQ0MsU0FBTCxpQ0FBb0JiLFdBQXBCO0FBQWlDLHVCQUFhO0FBQTlDLFdBQXBDO0FBQ0Q7O0FBRUROLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGLEdBYlEsRUFhTixDQUFDSCxVQUFELEVBQWFGLFFBQWIsRUFBdUJGLGFBQXZCLENBYk0sQ0FBVDs7QUFlQSxNQUFNMkIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUksQ0FBQzNCLGFBQUwsRUFBb0I7QUFDbEI0QixNQUFBQSxLQUFLLENBQUMsK0NBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSXhCLFVBQUosRUFBZ0I7QUFFaEJDLElBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWIsQ0FSMkIsQ0FVM0I7O0FBQ0EsUUFBTXdCLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLE9BQXRCLEdBQWdDLE9BQXBEO0FBQ0E1QixJQUFBQSxXQUFXLENBQUMwQixXQUFELENBQVg7QUFDQWpCLElBQUFBLFFBQVEsQ0FBQ3RCLDZEQUFjLGlDQUFNdUIsV0FBTjtBQUFtQixtQkFBYTtBQUFoQyxPQUFmLENBQVI7QUFDRCxHQWREOztBQWdCQSxNQUFNbUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFVBQXhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JuQyxJQUFBQSxnQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUksSUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSkQ7O0FBTUEsTUFBTThCLFlBQVk7QUFBQSwyV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJ0QyxjQUFBQSxTQUFTLENBQUNELE1BQU0sR0FBRyxDQUFWLENBQVQ7QUFDTXdDLGNBQUFBLEtBRmEsR0FFTGYsWUFBWSxDQUFDZ0IsT0FBYixDQUFxQixPQUFyQixDQUZLO0FBQUE7QUFBQSxxQkFHSXBELCtDQUFBLENBQVcsOENBQVgsRUFDbkI7QUFBRU8sZ0JBQUFBLEVBQUUsRUFBRkEsRUFBRjtBQUFNSSxnQkFBQUEsTUFBTSxFQUFFQSxNQUFNLEdBQUc7QUFBdkIsZUFEbUIsRUFFbkI7QUFDRTJDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUEMsa0JBQUFBLGFBQWEsa0JBQVdKLEtBQVg7QUFETjtBQURYLGVBRm1CLENBSEo7O0FBQUE7QUFHYkssY0FBQUEsUUFIYTtBQVduQnRCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUIsUUFBUSxDQUFDQyxJQUFULENBQWNDLE1BQTFCOztBQVhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaUixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWNBLE1BQU1TLFVBQVU7QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWFIsY0FBQUEsS0FEVyxHQUNIZixZQUFZLENBQUNnQixPQUFiLENBQXFCLE9BQXJCLENBREc7QUFFWFEsY0FBQUEsS0FGVyxHQUVIeEIsWUFBWSxDQUFDZ0IsT0FBYixDQUFxQixPQUFyQixDQUZHO0FBR2pCbEIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixLQUFaO0FBQ0FqQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXlCLEtBQVo7QUFKaUI7O0FBQUEsa0JBTVZULEtBTlU7QUFBQTtBQUFBO0FBQUE7O0FBT2JqQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBVyxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCO0FBUmE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBVVVoRCwrQ0FBQSxDQUFXLG9DQUFYLEVBQ3JCO0FBQUU0RCxnQkFBQUEsS0FBSyxFQUFMQTtBQUFGLGVBRHFCLEVBRXJCO0FBQ0VOLGdCQUFBQSxPQUFPLEVBQUU7QUFDUEMsa0JBQUFBLGFBQWEsa0JBQVdKLEtBQVg7QUFETjtBQURYLGVBRnFCLENBVlY7O0FBQUE7QUFVUEssY0FBQUEsUUFWTztBQWtCYnRCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcUIsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQTFCO0FBQ0FqRCxjQUFBQSxLQUFLLENBQUNnRCxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQmxELEVBQXBCLENBQUw7QUFDQUcsY0FBQUEsV0FBVyxDQUFDOEMsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJoRCxRQUFwQixDQUFYO0FBQ0FHLGNBQUFBLFNBQVMsQ0FBQzRDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1COUMsTUFBcEIsQ0FBVDs7QUFyQmE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCZnVCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FXLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsT0FBeEI7O0FBekJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZXLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBNkJBNUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2Q0RCxJQUFBQSxVQUFVO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSw0QkFDRztBQUFBLDZCQUNFLDhEQUFDLDhDQUFEO0FBQVEsYUFBSyxFQUFDLFNBQWQ7QUFBd0IsZUFBTyxFQUFFZCxlQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxlQU1HO0FBQUssZUFBUyxFQUFFM0MsOEVBQWhCO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxZQUFLQSx5RUFBTCxjQUFvQmUsVUFBVSxHQUFHZiw2RUFBSCxHQUFxQixFQUFuRCxDQURYO0FBRUUsc0JBQWMsRUFBRTtBQUFBLGlCQUFNZ0IsYUFBYSxDQUFDLEtBQUQsQ0FBbkI7QUFBQSxTQUZsQjtBQUFBLGdDQUlJO0FBQUssbUJBQVMsWUFBS2hCLDBFQUFMLGNBQXFCYSxRQUFRLEtBQUssT0FBYixJQUF3Qk0sY0FBeEIsR0FBeUNuQix5RUFBekMsR0FBdUQsRUFBNUUsQ0FBZDtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFLGtCQUFWO0FBQThCLGVBQUcsRUFBQyxPQUFsQztBQUEwQyxrQkFBTSxFQUFFMkI7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFPSTtBQUFLLG1CQUFTLFlBQUszQiwwRUFBTCxjQUFxQmEsUUFBUSxLQUFLLE9BQWIsSUFBd0JRLGNBQXhCLEdBQXlDckIseUVBQXpDLEdBQXVELEVBQTVFLENBQWQ7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRSxtQkFBVjtBQUErQixlQUFHLEVBQUMsT0FBbkM7QUFBMkMsa0JBQU0sRUFBRTRCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUU7QUFBSyxpQkFBUyxFQUFFNUIsMEVBQWhCO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FBWU8sUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGlDQUFZRSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQWdCRTtBQUFLLGlCQUFTLEVBQUVULDRFQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDhDQUFEO0FBQ0UsbUJBQVMsRUFBRUEsZ0ZBRGI7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU02QixXQUFXLENBQUMsT0FBRCxDQUFqQjtBQUFBLFdBRlg7QUFHRSxrQkFBUSxFQUFFZCxVQUFVLElBQUlGLFFBSDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUUsOERBQUMsOENBQUQ7QUFDRSxtQkFBUyxFQUFFYixnRkFEYjtBQUVFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTTZCLFdBQVcsQ0FBQyxPQUFELENBQWpCO0FBQUEsV0FGWDtBQUdFLGtCQUFRLEVBQUVkLFVBQVUsSUFBSUYsUUFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFlRSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLEVBQUV5QixjQUFqQjtBQUFpQyxrQkFBUSxFQUFFLENBQUMzQixhQUFELElBQWtCSSxVQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkYsRUFtQ0dFLFNBQVMsaUJBQ1I7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUFBLHNDQUFpQk4sYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSx5Q0FBb0JFLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsbUNBQWNKLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUUsOERBQUMsOENBQUQ7QUFBUSxpQkFBTyxFQUFFc0MsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNERCxDQXhLRDs7R0FBTTNDO1VBVWFGLHNEQUNHQzs7O0tBWGhCQztBQTBLTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lY29pbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVDb2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IENvaW5GbGlwR2FtZSA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2d1ZXNzZWRPcHRpb24sIHNldEd1ZXNzZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvaW5TaWRlLCBzZXRDb2luU2lkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNGbGlwcGluZywgc2V0SXNGbGlwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZHNJbWdMb2FkZWQsIHNldEhlYWRzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFpbHNJbWdMb2FkZWQsIHNldFRhaWxzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhlYWRzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldEhlYWRzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhaWxzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldFRhaWxzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1ZXNzID0gKG9wdGlvbikgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihvcHRpb24pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmxpcHBpbmcgJiYgY29pblNpZGUgJiYgZ3Vlc3NlZE9wdGlvbikge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIHNjb3JlIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGVuZGVkIGJhc2VkIG9uIGNvaW5TaWRlIGFuZCBndWVzc2VkT3B0aW9uXHJcbiAgICAgIGlmICgoY29pblNpZGUgPT09IFwiaGVhZHNcIiAmJiBndWVzc2VkT3B0aW9uID09PSBcImhlYWRzXCIpIHx8IChjb2luU2lkZSA9PT0gXCJ0YWlsc1wiICYmIGd1ZXNzZWRPcHRpb24gPT09IFwidGFpbHNcIikpIHtcclxuICAgICAgICBzZXRTY29yZXMoKHByZXZTY29yZSkgPT4gcHJldlNjb3JlICsgMSk7XHJcbiAgICAgICAgLy8gdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lY29pbic6IHRydWUgfSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllZEdhbWVzJywgSlNPTi5zdHJpbmdpZnkoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lY29pbic6IHRydWUgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRmxpcHBpbmcsIGNvaW5TaWRlLCBndWVzc2VkT3B0aW9uXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZsaXBDb2luID0gKCkgPT4ge1xyXG4gICAgaWYgKCFndWVzc2VkT3B0aW9uKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIG1ha2UgYSBndWVzcyBiZWZvcmUgZmxpcHBpbmcgdGhlIGNvaW4uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRmxpcHBpbmcpIHJldHVybjtcclxuXHJcbiAgICBzZXRJc0ZsaXBwaW5nKHRydWUpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IGNvaW4gc2lkZSBiYXNlZCBvbiBNYXRoLnJhbmRvbSgpXHJcbiAgICBjb25zdCBuZXdDb2luU2lkZSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhlYWRzXCIgOiBcInRhaWxzXCI7XHJcbiAgICBzZXRDb2luU2lkZShuZXdDb2luU2lkZSk7XHJcbiAgICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVjb2luJzogdHJ1ZSB9KSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnZ2FtZWxpc3QnKSBcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWVzc0FnYWluID0gKCkgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihudWxsKTtcclxuICAgIHNldENvaW5TaWRlKG51bGwpO1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzICsgMSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS91cGRhdGUvc2NvcmVzJyxcclxuICAgICAgICB7IGlkLCBzY29yZXM6IHNjb3JlcyArIDEgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvaW59ICR7aXNGbGlwcGluZyA/IHN0eWxlcy5mbGlwcGluZyA6IFwiXCJ9YH1cclxuICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBzZXRJc0ZsaXBwaW5nKGZhbHNlKX1cclxuICAgICAgICAgID4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRzfSAke2NvaW5TaWRlID09PSBcImhlYWRzXCIgJiYgaGVhZHNJbWdMb2FkZWQgPyBzdHlsZXMuc2hvdyA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2NvaW4uanBnJ30gYWx0PVwiSGVhZHNcIiBvbkxvYWQ9e2hhbmRsZUhlYWRzSW1nTG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFpbHN9ICR7Y29pblNpZGUgPT09IFwidGFpbHNcIiAmJiB0YWlsc0ltZ0xvYWRlZCA/IHN0eWxlcy5zaG93IDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvY29pbjIuanBnJ30gYWx0PVwiVGFpbHNcIiBvbkxvYWQ9e2hhbmRsZVRhaWxzSW1nTG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+XHJcbiAgICAgICAgICA8cD5QbGF5ZXI6IHt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8cD5TY29yZXM6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmd1ZXNzQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHdWVzcyhcImhlYWRzXCIpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNGbGlwcGluZyB8fCBjb2luU2lkZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSGVhZHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ndWVzc0J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR3Vlc3MoXCJ0YWlsc1wiKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmxpcHBpbmcgfHwgY29pblNpZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRhaWxzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRmxpcENvaW59IGRpc2FibGVkPXshZ3Vlc3NlZE9wdGlvbiB8fCBpc0ZsaXBwaW5nfT5cclxuICAgICAgICAgICAgRmxpcCBDb2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxwPkthbXUgbWVuZWJhayB7Z3Vlc3NlZE9wdGlvbn0hPC9wPlxyXG4gICAgICAgICAgICA8cD5IYXNpbG55YSBhZGFsYWgge2NvaW5TaWRlfTwvcD5cclxuICAgICAgICAgICAgPHA+U2NvcmVtdSA6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUd1ZXNzQWdhaW59PlRlYmFrIGxhZ2k8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2luRmxpcEdhbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJCdXR0b24iLCJzdHlsZXMiLCJzZXRQbGF5ZWRHYW1lcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJDb2luRmxpcEdhbWUiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsImd1ZXNzZWRPcHRpb24iLCJzZXRHdWVzc2VkT3B0aW9uIiwiY29pblNpZGUiLCJzZXRDb2luU2lkZSIsImlzRmxpcHBpbmciLCJzZXRJc0ZsaXBwaW5nIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGVhZHNJbWdMb2FkZWQiLCJzZXRIZWFkc0ltZ0xvYWRlZCIsInRhaWxzSW1nTG9hZGVkIiwic2V0VGFpbHNJbWdMb2FkZWQiLCJkaXNwYXRjaCIsInBsYXllZEdhbWVzIiwic3RhdGUiLCJyZWR1Y2VyIiwiaGFuZGxlSGVhZHNJbWdMb2FkIiwiaGFuZGxlVGFpbHNJbWdMb2FkIiwiaGFuZGxlR3Vlc3MiLCJvcHRpb24iLCJwcmV2U2NvcmUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVGbGlwQ29pbiIsImFsZXJ0IiwibmV3Q29pblNpZGUiLCJNYXRoIiwicmFuZG9tIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlR3Vlc3NBZ2FpbiIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwiZ2V0SXRlbSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsImNvbnRhaW5lciIsImNvaW4iLCJmbGlwcGluZyIsImhlYWRzIiwic2hvdyIsInRhaWxzIiwic3RhdHMiLCJidXR0b25zIiwiZ3Vlc3NCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9