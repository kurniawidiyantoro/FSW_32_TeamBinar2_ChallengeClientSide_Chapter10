"use strict";
self["webpackHotUpdate_N_E"]("pages/gamerps",{

/***/ "./pages/gamerps/index.js":
/*!********************************!*\
  !*** ./pages/gamerps/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/gameRPS.module.css */ "./styles/gameRPS.module.css");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Bootcamp\\Challenge Chapter 10\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10-1\\pages\\gamerps\\index.js",
    _s = $RefreshSig$();




 // import { useNavigate } from 'react-router-dom';


 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';



function Game() {
  _s();

  // const navigate = useNavigate();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

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
    var _ref = (0,D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, response;
      return D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //setScores(prevScores => prevScores + 1);
              token = localStorage.getItem("token");
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5__.default.post('http://localhost:3005/usergame/update/scores', {
                id: id,
                scores: scores + 1
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 3:
              response = _context.sent;
              console.log(response.data.status);

            case 5:
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
    var _ref2 = (0,D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var token, email, response;
      return D_Bootcamp_Challenge_Chapter_10_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_1_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
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
              return axios__WEBPACK_IMPORTED_MODULE_5__.default.post('http://localhost:3005/usergame/get', {
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
    handleReload();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
        children: "Rock Paper Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().score),
        children: ["Scores: ", scores]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('rock');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('paper');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('scissors');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

_s(Game, "P4NWj3Jj+Ts8jGITj3XcnbiF1GA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy4wN2ZmNjdmNjRmMDE0NWU4OWM5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNPLElBQVQsR0FBZ0I7QUFBQTs7QUFDZDtBQUNBLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPUSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NULCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9VLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCWCwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPWSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBNEJiLCtDQUFRLENBQUMsSUFBRCxDQUFwQztBQUFBLE1BQU9jLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQsRUFBZ0I7QUFDdkMsUUFBTUMsS0FBSyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FBZDtBQUNBLFFBQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQUQsQ0FBMUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLGVBQWUsQ0FBQ1IsVUFBRCxFQUFhRSxZQUFiLENBQTlCO0FBQ0FSLElB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Y0FwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQ7O0dBMUlRcEM7VUFFUUo7OztLQUZSSTtBQTRJVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lcnBzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MnO1xyXG4vLyBpbXBvcnQgYmF0dUltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmF0dS5wbmcnO1xyXG4vLyBpbXBvcnQga2VydGFzSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9rZXJ0YXMucG5nJztcclxuLy8gaW1wb3J0IGd1bnRpbmdJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2d1bnRpbmcucG5nJztcclxuXHJcbmZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgLy8gY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzY29yZXMsIHNldFNjb3Jlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIC8vIG5hdmlnYXRlKCcvZ2FtZWxpc3QnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ZXJNb3ZlID0gKHBsYXllck1vdmUpID0+IHtcclxuICAgIGNvbnN0IG1vdmVzID0gWydyb2NrJywgJ3BhcGVyJywgJ3NjaXNzb3JzJ107XHJcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGRldGVybWluZVdpbm5lcihwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUpO1xyXG4gICAgc2V0UmVzdWx0KHsgcGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlLCB3aW5uZXIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9zZXRTY29yZXMocHJldlNjb3JlcyA9PiBwcmV2U2NvcmVzICsgMSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS91cGRhdGUvc2NvcmVzJyxcclxuICAgICAgICB7IGlkLCBzY29yZXM6IHNjb3JlcyArIDEgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRldGVybWluZVdpbm5lciA9IChwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUpID0+IHtcclxuICAgIGlmIChwbGF5ZXJNb3ZlID09PSBjb21wdXRlck1vdmUpIHtcclxuICAgICAgcmV0dXJuIFwiRHJhdyFcIjtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAncm9jaycgJiYgY29tcHV0ZXJNb3ZlID09PSAnc2Npc3NvcnMnKSB8fFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3BhcGVyJyAmJiBjb21wdXRlck1vdmUgPT09ICdyb2NrJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdzY2lzc29ycycgJiYgY29tcHV0ZXJNb3ZlID09PSAncGFwZXInKVxyXG4gICAgKSB7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gYCR7dXNlcm5hbWV9IHdpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zISc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTsgLy8gR2FudGkgZGVuZ2FuIHVzZU5hdmlnYXRlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS9nZXQnLFxyXG4gICAgICAgICAgeyBlbWFpbCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKTtcclxuICAgICAgICBzZXRVc2VybmFtZShyZXNwb25zZS5kYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIHNldFNjb3JlcyhyZXNwb25zZS5kYXRhLmRhdGEuc2NvcmVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgLy8gbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICAgIGhhbmRsZVJlbG9hZCgpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PlNjb3Jlczoge3Njb3Jlc308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsIkdhbWUiLCJyb3V0ZXIiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImhhbmRsZVBsYXllck1vdmUiLCJwbGF5ZXJNb3ZlIiwibW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ3aW5uZXIiLCJkZXRlcm1pbmVXaW5uZXIiLCJ1cGRhdGVTY29yZXMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiaGFuZGxlUmVsb2FkIiwiY2hlY2tUb2tlbiIsImVtYWlsIiwibmF2aWdhdGUiLCJiYWNrZ3JvdW5kIiwiZ2FtZSIsInRpdGxlIiwic2NvcmUiLCJncmlkQ29udGFpbmVyIiwiZ3JpZEl0ZW0iLCJtb3ZlIiwibW92ZUJ0biIsIkltYWdlIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==