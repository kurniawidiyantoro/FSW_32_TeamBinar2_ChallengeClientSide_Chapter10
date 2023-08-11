"use strict";
self["webpackHotUpdate_N_E"]("pages/gamerps",{

/***/ "./pages/gamerps/index.js":
/*!********************************!*\
  !*** ./pages/gamerps/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/gameRPS.module.css */ "./styles/gameRPS.module.css");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamerps\\index.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import { useNavigate } from 'react-router-dom';




 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';



function Game() {
  _s();

  // const navigate = useNavigate();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      round = _useState3[0],
      setRound = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      getscore = _useState5[0],
      setGetScore = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      totalscore = _useState6[0],
      setTotalScore = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      result = _useState7[0],
      setResult = _useState7[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.reducer.playedGames;
  });

  var handleBackClick = function handleBackClick() {
    // navigate('/gamelist');
    window.location.replace('/gamelist');
  };

  var handlePlayerMove = function handlePlayerMove(playerMove) {
    var moves = ['rock', 'paper', 'scissors'];
    var computerMove = moves[Math.floor(Math.random() * moves.length)];
    var winner = determineWinner(playerMove, computerMove);
    setResult({
      playerMove: playerMove,
      computerMove: computerMove,
      winner: winner
    });
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_4__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamerps': true
    })));
    console.log("Played Games:", playedGames);
    localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamerps': true
    })));
  };

  var updateScores = /*#__PURE__*/function () {
    var _ref = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var gamename, token, email, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              gamename = 'gamerps';
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/gamehistory/insert', {
                gamename: gamename,
                id: id,
                username: username,
                email: email,
                round: round,
                status: status,
                getscore: getscore,
                totalscore: totalscore
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 5:
              response = _context.sent;
              console.log(response.data.status);

            case 7:
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

  var determineWinner = function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      setRound(round + 1);
      setStatus('draw');
      setGetScore(0);
      updateScores();
      return "Draw!";
    } else if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
      setRound(round + 1);
      setStatus('win');
      setGetScore(1);
      setTotalScore(totalscore + 1);
      updateScores();
      return "".concat(username, " win!");
    } else {
      setRound(round + 1);
      setStatus('lose');
      setGetScore(0);
      updateScores();
      return 'Computer wins!';
    }
  };

  var handleReload = function handleReload() {
    setResult(null);
  };

  var checkToken = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var token, email, gamename, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              gamename = 'gamerps';
              console.log(token);
              console.log(email);
              _context2.prev = 5;

              if (token) {
                _context2.next = 11;
                break;
              }

              console.log('Not Authorize !');
              navigate('/login'); // Ganti dengan useNavigate()

              _context2.next = 21;
              break;

            case 11:
              _context2.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/gamehistory/get', {
                email: email,
                gamename: gamename
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 13:
              response = _context2.sent;
              console.log(response.data.data);
              setId(response.data.data.id);
              setUsername(response.data.data.username);
              setRound(response.data.data.round);
              setStatus(response.data.data.status);
              setGetScore(response.data.data.getscore);
              setTotalScore(response.data.data.totalscore);

            case 21:
              _context2.next = 27;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](5);
              console.log("Internal Server Error !");
              window.location.replace('/login');

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 23]]);
    }));

    return function checkToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkToken();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
        children: "Rock Paper Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().score),
        children: ["Scores: ", scores]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridItem), " ").concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().options)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('rock');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('paper');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('scissors');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridItem), " ").concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().options)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

_s(Game, "b9pbIkJvmA5KB+2zlTUL0XWHIDI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c = Game;
/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy5lM2YwN2ViNTY5MGFhZmEyZTEwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNTLElBQVQsR0FBZ0I7QUFBQTs7QUFDZDtBQUNBLGtCQUFvQlIsK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT1MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDViwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQlosK0NBQVEsQ0FBQyxDQUFELENBQWxDO0FBQUEsTUFBT2EsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTRCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPZSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NoQiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPaUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFBQSxNQUFPbUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBNEJwQiwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7QUFBQSxNQUFPcUIsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQVcsRUFBNUI7QUFDQSxNQUFNa0IsV0FBVyxHQUFHakIsd0RBQVcsQ0FBQyxVQUFBa0IsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUFsQjtBQUFBLEdBQU4sQ0FBL0I7O0FBRUEsTUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCO0FBQ0FDLElBQUFBLE1BQU0s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LHFCQUFTLEVBQUVsRSwyRUFBbkI7QUFBbUMsb0JBQVEsTUFBM0M7QUFBQSxzQkFDR2lCLE1BQU0saUJBQUk7QUFBSyxpQkFBRyxFQUFFLHNCQUFWO0FBQWtDLGlCQUFHLEVBQUMsRUFBdEM7QUFBeUMsdUJBQVMsRUFBRWpCLHlFQUFZa0U7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBNkJHakQsTUFBTSxpQkFDTDtBQUFLLGlCQUFTLEVBQUVqQiwwRUFBaEI7QUFBQSxnQ0FDRTtBQUFBLG9DQUFlaUIsTUFBTSxDQUFDVyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHlDQUFvQlgsTUFBTSxDQUFDYSxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUFJYixNQUFNLENBQUNrQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJKLGVBb0NFO0FBQVEsaUJBQVMsRUFBRW5DLDBFQUFuQjtBQUFrQyxlQUFPLEVBQUVxRCxZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0EvSlFqRDtVQVNVRixzREFDR0M7OztLQVZiQztBQWlLVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lcnBzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IGJhdHVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHUucG5nJztcclxuLy8gaW1wb3J0IGtlcnRhc0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2VydGFzLnBuZyc7XHJcbi8vIGltcG9ydCBndW50aW5nSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ndW50aW5nLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyb3VuZCwgc2V0Um91bmRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZ2V0c2NvcmUsIHNldEdldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gbmF2aWdhdGUoJy9nYW1lbGlzdCcpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYXllck1vdmUgPSAocGxheWVyTW92ZSkgPT4ge1xyXG4gICAgY29uc3QgbW92ZXMgPSBbJ3JvY2snLCAncGFwZXInLCAnc2Npc3NvcnMnXTtcclxuICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9IG1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCldO1xyXG4gICAgY29uc3Qgd2lubmVyID0gZGV0ZXJtaW5lV2lubmVyKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSk7XHJcbiAgICBzZXRSZXN1bHQoeyBwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUsIHdpbm5lciB9KTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZXJwcyc6IHRydWUgfSkpO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZWQgR2FtZXM6XCIsIHBsYXllZEdhbWVzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZWRHYW1lcycsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZXJwcyc6IHRydWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9pbnNlcnQnLFxyXG4gICAgICAgIHsgZ2FtZW5hbWUsIGlkLCB1c2VybmFtZSwgZW1haWwsIHJvdW5kLCBzdGF0dXMsIGdldHNjb3JlLCB0b3RhbHNjb3JlIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKSA9PiB7XHJcbiAgICBpZiAocGxheWVyTW92ZSA9PT0gY29tcHV0ZXJNb3ZlKSB7XHJcbiAgICAgIHNldFJvdW5kKHJvdW5kICsgMSk7XHJcbiAgICAgIHNldFN0YXR1cygnZHJhdycpO1xyXG4gICAgICBzZXRHZXRTY29yZSgwKTtcclxuICAgICAgdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIHJldHVybiBcIkRyYXchXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3JvY2snICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3NjaXNzb3JzJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdwYXBlcicgJiYgY29tcHV0ZXJNb3ZlID09PSAncm9jaycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAnc2Npc3NvcnMnICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3BhcGVyJylcclxuICAgICkge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ3dpbicpO1xyXG4gICAgICBzZXRHZXRTY29yZSgxKTtcclxuICAgICAgc2V0VG90YWxTY29yZSh0b3RhbHNjb3JlICsgMSk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gYCR7dXNlcm5hbWV9IHdpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCdsb3NlJyk7XHJcbiAgICAgIHNldEdldFNjb3JlKDApO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zISc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJ1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpXHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRSb3VuZChyZXNwb25zZS5kYXRhLmRhdGEucm91bmQpO1xyXG4gICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICBzZXRHZXRTY29yZShyZXNwb25zZS5kYXRhLmRhdGEuZ2V0c2NvcmUpO1xyXG4gICAgICAgIHNldFRvdGFsU2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlJvY2sgUGFwZXIgU2Npc3NvcnM8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfT5TY29yZXM6IHtzY29yZXN9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRJdGVtfSAke3N0eWxlcy5vcHRpb25zfWB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92ZX0+Q2hvb3NlIHlvdXIgbW92ZTwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgncm9jaycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvYmF0dS5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgncGFwZXInKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2tlcnRhcy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgnc2Npc3NvcnMnKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycuL2ltYWdlcy9ndW50aW5nLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncmlkSXRlbX0gJHtzdHlsZXMub3B0aW9uc31gfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJCdXR0b24iLCJzdHlsZXMiLCJzZXRQbGF5ZWRHYW1lcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJHYW1lIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3VuZCIsInNldFJvdW5kIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2V0c2NvcmUiLCJzZXRHZXRTY29yZSIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZGlzcGF0Y2giLCJwbGF5ZWRHYW1lcyIsInN0YXRlIiwicmVkdWNlciIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImhhbmRsZVBsYXllck1vdmUiLCJwbGF5ZXJNb3ZlIiwibW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ3aW5uZXIiLCJkZXRlcm1pbmVXaW5uZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVTY29yZXMiLCJnYW1lbmFtZSIsInRva2VuIiwiZ2V0SXRlbSIsImVtYWlsIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJkYXRhIiwiaGFuZGxlUmVsb2FkIiwiY2hlY2tUb2tlbiIsIm5hdmlnYXRlIiwiYmFja2dyb3VuZCIsImdhbWUiLCJ0aXRsZSIsInNjb3JlIiwic2NvcmVzIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwib3B0aW9ucyIsIm1vdmUiLCJtb3ZlQnRuIiwiSW1hZ2UiLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9