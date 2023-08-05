"use strict";
self["webpackHotUpdate_N_E"]("pages/gamerps",{

/***/ "./pages/gamerps/index.js":
/*!********************************!*\
  !*** ./pages/gamerps/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/gameRPS.module.css */ "./styles/gameRPS.module.css");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Learn\\bootcamp\\binaracademy-fsw\\chapter-10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamerps\\index.js",
    _s = $RefreshSig$();



 // import { useNavigate } from 'react-router-dom';


 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';



function Game() {
  _s();

  // const navigate = useNavigate();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      scores = _useState3[0],
      setScores = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      result = _useState4[0],
      setResult = _useState4[1];

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
  };

  var updateScores = /*#__PURE__*/function () {
    var _ref = (0,D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, response;
      return D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setScores(scores + 1);
              token = localStorage.getItem("token");
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4__.default.post('http://localhost:3005/usergame/update/scores', {
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

  var determineWinner = function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      return "Draw!";
    } else if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
      updateScores();
      return "".concat(username, " win!");
    } else {
      return 'Computer wins!';
    }
  };

  var handleReload = function handleReload() {
    setResult(null);
  };

  var checkToken = /*#__PURE__*/function () {
    var _ref2 = (0,D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var token, email, response;
      return D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
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
              return axios__WEBPACK_IMPORTED_MODULE_4__.default.post('http://localhost:3005/usergame/get', {
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
              console.log("Internal Server Error !"); // navigate('/login'); // Ganti dengan useNavigate()

              window.location.replace('/login');

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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    checkToken();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Rock Paper Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().score),
        children: ["Scores: ", scores]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('rock');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('paper');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('scissors');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "computer-move-btn",
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

_s(Game, "3xYca6b1CMtVZssISNizYfj2hIU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy42YzlmODNiNTc2OGE1YzA4MGY3Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0NBRUE7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUNkO0FBQ0Esa0JBQW9CTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPTSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NQLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCVCwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPVSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBNEJYLCtDQUFRLENBQUMsSUFBRCxDQUFwQztBQUFBLE1BQU9ZLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQsRUFBZ0I7QUFDdkMsUUFBTUMsS0FBSyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FBZDtBQUNBLFFBQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQUQsQ0FBMUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLGVBQWUsQ0FBQ1IsVUFBRCxFQUFhRSxZQUFiLENBQTlCO0FBQ0FSLElBQUFBLFNBQVMsQ0FBQztBQUFFTSxNQUFBQSxVQUFVLEVBQVZBLFVBQUY7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O0FBQUE7QUFBQSxVQURGO0FBaUREOztHQXZJUW5DOztLQUFBQTtBQXlJVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lcnBzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzJztcclxuLy8gaW1wb3J0IGJhdHVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHUucG5nJztcclxuLy8gaW1wb3J0IGtlcnRhc0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2VydGFzLnBuZyc7XHJcbi8vIGltcG9ydCBndW50aW5nSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ndW50aW5nLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBuYXZpZ2F0ZSgnL2dhbWVsaXN0Jyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVsaXN0Jyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxheWVyTW92ZSA9IChwbGF5ZXJNb3ZlKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlcyA9IFsncm9jaycsICdwYXBlcicsICdzY2lzc29ycyddO1xyXG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID0gbW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKV07XHJcbiAgICBjb25zdCB3aW5uZXIgPSBkZXRlcm1pbmVXaW5uZXIocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKTtcclxuICAgIHNldFJlc3VsdCh7IHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSwgd2lubmVyIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNjb3JlcyhzY29yZXMgKyAxKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL3VwZGF0ZS9zY29yZXMnLFxyXG4gICAgICAgIHsgaWQsIHNjb3Jlczogc2NvcmVzICsgMSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck1vdmUgPT09IGNvbXB1dGVyTW92ZSkge1xyXG4gICAgICByZXR1cm4gXCJEcmF3IVwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdyb2NrJyAmJiBjb21wdXRlck1vdmUgPT09ICdzY2lzc29ycycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAncGFwZXInICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3JvY2snKSB8fFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3NjaXNzb3JzJyAmJiBjb21wdXRlck1vdmUgPT09ICdwYXBlcicpXHJcbiAgICApIHtcclxuICAgICAgdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIHJldHVybiBgJHt1c2VybmFtZX0gd2luIWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ0NvbXB1dGVyIHdpbnMhJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWxvYWQgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXN1bHQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0U2NvcmVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zY29yZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICAvLyBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PlNjb3Jlczoge3Njb3Jlc308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycvaW1hZ2VzL2tlcnRhcy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wdXRlci1tb3ZlLWJ0blwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycuL2ltYWdlcy9ndW50aW5nLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Jlc3VsdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+XHJcbiAgICAgICAgICAgIDxwPllvdSBjaG9zZToge3Jlc3VsdC5wbGF5ZXJNb3ZlfTwvcD5cclxuICAgICAgICAgICAgPHA+Q29tcHV0ZXIgY2hvc2U6IHtyZXN1bHQuY29tcHV0ZXJNb3ZlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc3VsdC53aW5uZXJ9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlbG9hZH0gb25DbGljaz17aGFuZGxlUmVsb2FkfT5cclxuICAgICAgICAgIFBsYXkgQWdhaW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsIkdhbWUiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImhhbmRsZVBsYXllck1vdmUiLCJwbGF5ZXJNb3ZlIiwibW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ3aW5uZXIiLCJkZXRlcm1pbmVXaW5uZXIiLCJ1cGRhdGVTY29yZXMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiaGFuZGxlUmVsb2FkIiwiY2hlY2tUb2tlbiIsImVtYWlsIiwibmF2aWdhdGUiLCJiYWNrZ3JvdW5kIiwiZ2FtZSIsInRpdGxlIiwic2NvcmUiLCJncmlkQ29udGFpbmVyIiwiZ3JpZEl0ZW0iLCJtb3ZlIiwibW92ZUJ0biIsIkltYWdlIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==