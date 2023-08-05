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
            className: "computer-move-btn",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy41MjE1NjRhNzgzMTlmMDlkNWY5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0NBRUE7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUNkO0FBQ0Esa0JBQW9CTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPTSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NQLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCVCwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPVSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBNEJYLCtDQUFRLENBQUMsSUFBRCxDQUFwQztBQUFBLE1BQU9ZLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQsRUFBZ0I7QUFDdkMsUUFBTUMsS0FBSyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FBZDtBQUNBLFFBQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQUQsQ0FBMUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLGVBQWUsQ0FBQ1IsVUFBRCxFQUFhRSxZQUFiLENBQTlCO0FBQ0FSLElBQUFBLFNBQVMsQ0FBQztBQUFFTSxNQUFBQSxVQUFVLEVBQVZBLFVBQUY7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QUFBQTtBQUFBLFVBREY7QUFpREQ7O0dBdklRbkM7O0tBQUFBO0FBeUlULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVycHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MnO1xyXG4vLyBpbXBvcnQgYmF0dUltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmF0dS5wbmcnO1xyXG4vLyBpbXBvcnQga2VydGFzSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9rZXJ0YXMucG5nJztcclxuLy8gaW1wb3J0IGd1bnRpbmdJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2d1bnRpbmcucG5nJztcclxuXHJcbmZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgLy8gY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzY29yZXMsIHNldFNjb3Jlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIC8vIG5hdmlnYXRlKCcvZ2FtZWxpc3QnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ZXJNb3ZlID0gKHBsYXllck1vdmUpID0+IHtcclxuICAgIGNvbnN0IG1vdmVzID0gWydyb2NrJywgJ3BhcGVyJywgJ3NjaXNzb3JzJ107XHJcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGRldGVybWluZVdpbm5lcihwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUpO1xyXG4gICAgc2V0UmVzdWx0KHsgcGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlLCB3aW5uZXIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U2NvcmVzKHNjb3JlcyArIDEpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvdXBkYXRlL3Njb3JlcycsXHJcbiAgICAgICAgeyBpZCwgc2NvcmVzOiBzY29yZXMgKyAxIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKSA9PiB7XHJcbiAgICBpZiAocGxheWVyTW92ZSA9PT0gY29tcHV0ZXJNb3ZlKSB7XHJcbiAgICAgIHJldHVybiBcIkRyYXchXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3JvY2snICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3NjaXNzb3JzJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdwYXBlcicgJiYgY29tcHV0ZXJNb3ZlID09PSAncm9jaycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAnc2Npc3NvcnMnICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3BhcGVyJylcclxuICAgICkge1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuIGAke3VzZXJuYW1lfSB3aW4hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyEnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbG9hZCA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIC8vIG5hdmlnYXRlKCcvbG9naW4nKTsgLy8gR2FudGkgZGVuZ2FuIHVzZU5hdmlnYXRlKClcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Sb2NrIFBhcGVyIFNjaXNzb3JzPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+U2NvcmVzOiB7c2NvcmVzfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNob29zZSB5b3VyIG1vdmU8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXllck1vdmUoJ3JvY2snKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2JhdHUucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXllck1vdmUoJ3BhcGVyJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9rZXJ0YXMucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXllck1vdmUoJ3NjaXNzb3JzJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9pbWFnZXMvZ3VudGluZy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92ZX0+Q29tcHV0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycvaW1hZ2VzL2JhdHUucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tcHV0ZXItbW92ZS1idG5cIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9rZXJ0YXMucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tcHV0ZXItbW92ZS1idG5cIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnLi9pbWFnZXMvZ3VudGluZy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJCdXR0b24iLCJzdHlsZXMiLCJHYW1lIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzY29yZXMiLCJzZXRTY29yZXMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJoYW5kbGVQbGF5ZXJNb3ZlIiwicGxheWVyTW92ZSIsIm1vdmVzIiwiY29tcHV0ZXJNb3ZlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwid2lubmVyIiwiZGV0ZXJtaW5lV2lubmVyIiwidXBkYXRlU2NvcmVzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXR1cyIsImhhbmRsZVJlbG9hZCIsImNoZWNrVG9rZW4iLCJlbWFpbCIsIm5hdmlnYXRlIiwiYmFja2dyb3VuZCIsImdhbWUiLCJ0aXRsZSIsInNjb3JlIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwibW92ZSIsIm1vdmVCdG4iLCJJbWFnZSIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=