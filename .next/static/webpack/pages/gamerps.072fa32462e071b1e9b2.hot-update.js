self["webpackHotUpdate_N_E"]("pages/gamerps",{

/***/ "./pages/gamerps/index.js":
/*!********************************!*\
  !*** ./pages/gamerps/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
              console.log("Internal Server Error !");
              navigate('/login'); // Ganti dengan useNavigate()

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
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "game",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "title",
        children: "Rock Paper Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "scores",
        children: ["Scores: ", scores]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "grid-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "options grid-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            className: "move",
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "move-btn",
            onClick: function onClick() {
              return handlePlayerMove('rock');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "move-btn",
            onClick: function onClick() {
              return handlePlayerMove('paper');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "move-btn",
            onClick: function onClick() {
              return handlePlayerMove('scissors');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "options grid-item",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            className: "move",
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "computer-move-btn",
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: "image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
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
              lineNumber: 124,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
              lineNumber: 127,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "result",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: "reload",
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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


/***/ }),

/***/ "./styles/gameRPS.module.css":
/*!***********************************!*\
  !*** ./styles/gameRPS.module.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./gameRPS.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/gameRPS.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./gameRPS.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/gameRPS.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./gameRPS.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/gameRPS.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/gameRPS.module.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/gameRPS.module.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* styles.css */\r\n/* universal selector - Applies to whole document */\r\n.gameRPS_background__N_tXN{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\t-webkit-box-sizing: border-box;\r\n\t   -moz-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tbackground: #151b25;\r\n\tcolor: #8a6a6a;\r\n}\r\n\r\n.gameRPS_grid-container__FjodW {\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n  \t-moz-box-orient: horizontal;\r\n  \t-moz-box-direction: normal;\r\n  \t     flex-direction: row;\r\n\tbackground-color: #2196F3;\r\n\tpadding: 10px;\r\n  }\r\n  \r\n  .gameRPS_grid-item__3haYa {\r\n\t-moz-box-orient: vertical;\r\n\t-moz-box-direction: normal;\r\n\t     flex-direction: column;\r\n\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.8);\r\n\tpadding: 20px;\r\n\tfont-size: 30px;\r\n\t-moz-box-align: center;\r\n\t     align-items: center;\r\n  }\r\n\r\n/* To center everything in game */\r\n.gameRPS_game__3BUYX{\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\t-moz-box-orient: vertical;\r\n\t-moz-box-direction: normal;\r\n\t     flex-direction: column;\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\t-moz-box-pack: center;\r\n\t     justify-content: center;\r\n\t-moz-box-align: center;\r\n\t     align-items: center;\r\n}\r\n\r\n/* Title of the game */\r\n.gameRPS_title__2uTkv{\r\n\tfont-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tfont-size: 4rem;\r\n\tz-index: 2;\r\n}\r\n\r\n/* Score Board */\r\n.gameRPS_score__1BZL3{\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\twidth: 30vw;\r\n\t-moz-box-pack: space-evenly;\r\n\t     justify-content: space-evenly;\r\n\tposition: absolute;\r\n\ttop: 70px;\r\n\tz-index: 1;\r\n}\r\n\r\n/* Score */\r\n.gameRPS_p-count__fj2zm,.gameRPS_c-count__2ifG1{\r\n\ttext-align: center;\r\n\tfont-size: 1.5rem;\r\n\tmargin-top: 1rem;\r\n}\r\n.gameRPS_button__1QPie{\r\n\tborder-radius: 20px;\r\n\twidth: 70px;\r\n\theight: 40px;\r\n\tbackground-color: yellow;\r\n}\r\n\r\n/* displaying three buttons in one line */\r\n.gameRPS_options__AGcLI {\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\twidth: 50vw;\r\n\t-moz-box-pack: space-evenly;\r\n\t     justify-content: space-evenly;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.gameRPS_optionscom__2b1X3 {\r\n\tpadding-top: 30px;\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\twidth: 50vw;\r\n\t-moz-box-pack: space-evenly;\r\n\t     justify-content: space-evenly;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n/* Styling on all three buttons */\r\n.gameRPS_rock__3vvMc, .gameRPS_paper__3OshQ, .gameRPS_scissor__344hs, .gameRPS_rockcom__1Fxzh, .gameRPS_papercom__3qAPl, .gameRPS_scissorcom__1b6ab {\r\n\tpadding: 0.8rem;\r\n\twidth: 100px;\r\n\tborder-radius: 10px;\r\n\tbackground: green;\r\n\toutline: none;\r\n\tborder-color: green;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.gameRPS_move__1yXRy{\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* Reload button style */\r\n.gameRPS_reload__3pJ-p {\r\n\tbackground-image: url(/assets/refresh.png);\r\n\tdisplay: none;\r\n\tmargin-top: 2rem;\r\n\tpadding: 1rem;\r\n\tbackground: green;\r\n\toutline: none;\r\n\tborder: none;\r\n\tborder-radius: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.gameRPS_result__rd7Sm{\r\n\tmargin-top: 20px;\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n.gameRPS_image__26UaO {\r\n\theight: 50px;\r\n\twidth: 50px;\r\n}\r\n.gameRPS_move-btn__ilBYs.gameRPS_selected__13EcD {\r\n\tbackground-color: #10e850; /* Add your desired color for selected moves */\r\n  }\r\n\r\n.gameRPS_selected-computer__1JvHc {\r\n\tbackground-color: #ff0000; /* Add your desired color for the computer's chosen move */\r\n  }\r\n  \r\n  \r\n/* Responsive Design */\r\n@media screen and (max-width: 612px)\r\n{\r\n\t.gameRPS_title__2uTkv{\r\n\t\t\r\n\t\ttext-align: center;\r\n\t}\r\n\t.gameRPS_score__1BZL3{\r\n\t\tposition: absolute;\r\n\t\ttop: 200px;\r\n\t\twidth: 100vw;\r\n\t}\r\n\t.gameRPS_options__AGcLI{\r\n\t\twidth: 100vw;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://styles/gameRPS.module.css"],"names":[],"mappings":"AAAA,eAAe;AACf,mDAAmD;AACnD;CACC,UAAU;CACV,SAAS;CACT,8BAAsB;IAAtB,2BAAsB;SAAtB,sBAAsB;CACtB,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,iBAAa;CAAb,aAAa;GACX,2BAAmB;GAAnB,0BAAmB;QAAnB,mBAAmB;CACrB,yBAAyB;CACzB,aAAa;EACZ;;EAEA;CACD,yBAAsB;CAAtB,0BAAsB;MAAtB,sBAAsB;CACtB,0CAA0C;CAC1C,oCAAoC;CACpC,aAAa;CACb,eAAe;CACf,sBAAmB;MAAnB,mBAAmB;EAClB;;AAEF,iCAAiC;AACjC;CACC,iBAAa;CAAb,aAAa;CACb,yBAAsB;CAAtB,0BAAsB;MAAtB,sBAAsB;CACtB,aAAa;CACb,YAAY;CACZ,qBAAuB;MAAvB,uBAAuB;CACvB,sBAAmB;MAAnB,mBAAmB;AACpB;;AAEA,sBAAsB;AACtB;CACC,6EAA6E;CAC7E,kBAAkB;CAClB,MAAM;CACN,eAAe;CACf,UAAU;AACX;;AAEA,gBAAgB;AAChB;CACC,iBAAa;CAAb,aAAa;CACb,WAAW;CACX,2BAA6B;MAA7B,6BAA6B;CAC7B,kBAAkB;CAClB,SAAS;CACT,UAAU;AACX;;AAEA,UAAU;AACV;CACC,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;AACjB;AACA;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;CACZ,wBAAwB;AACzB;;AAEA,yCAAyC;AACzC;CACC,iBAAa;CAAb,aAAa;CACb,WAAW;CACX,2BAA6B;MAA7B,6BAA6B;CAC7B,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,iBAAa;CAAb,aAAa;CACb,WAAW;CACX,2BAA6B;MAA7B,6BAA6B;CAC7B,gBAAgB;AACjB;;AAEA,iCAAiC;AACjC;CACC,eAAe;CACf,YAAY;CACZ,mBAAmB;CACnB,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA,wBAAwB;AACxB;CACC,0CAA0C;CAC1C,aAAa;CACb,gBAAgB;CAChB,aAAa;CACb,iBAAiB;CACjB,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,yBAAyB,EAAE,8CAA8C;EACxE;;AAEF;CACC,yBAAyB,EAAE,0DAA0D;EACpF;;;AAGF,sBAAsB;AACtB;;CAEC;;EAEC,kBAAkB;CACnB;CACA;EACC,kBAAkB;EAClB,UAAU;EACV,YAAY;CACb;CACA;EACC,YAAY;CACb;AACD","sourcesContent":["/* styles.css */\r\n/* universal selector - Applies to whole document */\r\n.background{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\tbackground: #151b25;\r\n\tcolor: #8a6a6a;\r\n}\r\n\r\n.grid-container {\r\n\tdisplay: flex;\r\n  \tflex-direction: row;\r\n\tbackground-color: #2196F3;\r\n\tpadding: 10px;\r\n  }\r\n  \r\n  .grid-item {\r\n\tflex-direction: column;\r\n\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\tborder: 1px solid rgba(0, 0, 0, 0.8);\r\n\tpadding: 20px;\r\n\tfont-size: 30px;\r\n\talign-items: center;\r\n  }\r\n\r\n/* To center everything in game */\r\n.game{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n/* Title of the game */\r\n.title{\r\n\tfont-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tfont-size: 4rem;\r\n\tz-index: 2;\r\n}\r\n\r\n/* Score Board */\r\n.score{\r\n\tdisplay: flex;\r\n\twidth: 30vw;\r\n\tjustify-content: space-evenly;\r\n\tposition: absolute;\r\n\ttop: 70px;\r\n\tz-index: 1;\r\n}\r\n\r\n/* Score */\r\n.p-count,.c-count{\r\n\ttext-align: center;\r\n\tfont-size: 1.5rem;\r\n\tmargin-top: 1rem;\r\n}\r\n.button{\r\n\tborder-radius: 20px;\r\n\twidth: 70px;\r\n\theight: 40px;\r\n\tbackground-color: yellow;\r\n}\r\n\r\n/* displaying three buttons in one line */\r\n.options {\r\n\tdisplay: flex;\r\n\twidth: 50vw;\r\n\tjustify-content: space-evenly;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.optionscom {\r\n\tpadding-top: 30px;\r\n\tdisplay: flex;\r\n\twidth: 50vw;\r\n\tjustify-content: space-evenly;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n/* Styling on all three buttons */\r\n.rock, .paper, .scissor, .rockcom, .papercom, .scissorcom {\r\n\tpadding: 0.8rem;\r\n\twidth: 100px;\r\n\tborder-radius: 10px;\r\n\tbackground: green;\r\n\toutline: none;\r\n\tborder-color: green;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.move{\r\n\tfont-size: 2rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n/* Reload button style */\r\n.reload {\r\n\tbackground-image: url(/assets/refresh.png);\r\n\tdisplay: none;\r\n\tmargin-top: 2rem;\r\n\tpadding: 1rem;\r\n\tbackground: green;\r\n\toutline: none;\r\n\tborder: none;\r\n\tborder-radius: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.result{\r\n\tmargin-top: 20px;\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n.image {\r\n\theight: 50px;\r\n\twidth: 50px;\r\n}\r\n.move-btn.selected {\r\n\tbackground-color: #10e850; /* Add your desired color for selected moves */\r\n  }\r\n\r\n.selected-computer {\r\n\tbackground-color: #ff0000; /* Add your desired color for the computer's chosen move */\r\n  }\r\n  \r\n  \r\n/* Responsive Design */\r\n@media screen and (max-width: 612px)\r\n{\r\n\t.title{\r\n\t\t\r\n\t\ttext-align: center;\r\n\t}\r\n\t.score{\r\n\t\tposition: absolute;\r\n\t\ttop: 200px;\r\n\t\twidth: 100vw;\r\n\t}\r\n\t.options{\r\n\t\twidth: 100vw;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"background": "gameRPS_background__N_tXN",
	"grid-container": "gameRPS_grid-container__FjodW",
	"grid-item": "gameRPS_grid-item__3haYa",
	"game": "gameRPS_game__3BUYX",
	"title": "gameRPS_title__2uTkv",
	"score": "gameRPS_score__1BZL3",
	"p-count": "gameRPS_p-count__fj2zm",
	"c-count": "gameRPS_c-count__2ifG1",
	"button": "gameRPS_button__1QPie",
	"options": "gameRPS_options__AGcLI",
	"optionscom": "gameRPS_optionscom__2b1X3",
	"rock": "gameRPS_rock__3vvMc",
	"paper": "gameRPS_paper__3OshQ",
	"scissor": "gameRPS_scissor__344hs",
	"rockcom": "gameRPS_rockcom__1Fxzh",
	"papercom": "gameRPS_papercom__3qAPl",
	"scissorcom": "gameRPS_scissorcom__1b6ab",
	"move": "gameRPS_move__1yXRy",
	"reload": "gameRPS_reload__3pJ-p",
	"result": "gameRPS_result__rd7Sm",
	"image": "gameRPS_image__26UaO",
	"move-btn": "gameRPS_move-btn__ilBYs",
	"selected": "gameRPS_selected__13EcD",
	"selected-computer": "gameRPS_selected-computer__1JvHc"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy4wNzJmYTMyNDYyZTA3MWIxZTliMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0NBRUE7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUNkO0FBQ0Esa0JBQW9CTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPTSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NQLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCVCwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPVSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBNEJYLCtDQUFRLENBQUMsSUFBRCxDQUFwQztBQUFBLE1BQU9ZLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQsRUFBZ0I7QUFDdkMsUUFBTUMsS0FBSyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FBZDtBQUNBLFFBQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQUQsQ0FBMUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLGVBQWUsQ0FBQ1IsVUFBRCxFQUFhRSxZQUFiLENBQTlCO0FBQ0FSLElBQUFBLFNBQVMsQ0FBQztBQUFFTSxNQUFBQSxVQUFVLEVBQVZBLFVBQUY7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QUF5RyxzQkFBc0IsbUJBQW1CLDBCQUEwQix3QkFBd0Isb0JBQW9CLDBCQUEwQixtQkFBbUIsc0JBQXNCLEtBQUssY0FBYyxzQkFBc0Isd0JBQXdCLEtBQUssOENBQThDLGlEQUFpRCxvQkFBb0IsdUJBQXVCLG9CQUFvQix3QkFBd0Isb0JBQW9CLG1CQUFtQiwwQkFBMEIsc0JBQXNCLEtBQUssZ0JBQWdCLHVCQUF1Qix3QkFBd0IsS0FBSyxnQkFBZ0IsbUJBQW1CLGtCQUFrQixLQUFLLHdCQUF3QixpQ0FBaUMsc0RBQXNELDRCQUE0QixpQ0FBaUMsa0VBQWtFLG9GQUFvRixhQUFhLG1DQUFtQyxPQUFPLGFBQWEsMkJBQTJCLG1CQUFtQixxQkFBcUIsT0FBTyxlQUFlLHFCQUFxQixPQUFPLEtBQUssbUJBQW1CO0FBQ3A2UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lcnBzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzP2U5MzAiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzJztcclxuLy8gaW1wb3J0IGJhdHVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHUucG5nJztcclxuLy8gaW1wb3J0IGtlcnRhc0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2VydGFzLnBuZyc7XHJcbi8vIGltcG9ydCBndW50aW5nSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ndW50aW5nLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBuYXZpZ2F0ZSgnL2dhbWVsaXN0Jyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVsaXN0Jyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxheWVyTW92ZSA9IChwbGF5ZXJNb3ZlKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlcyA9IFsncm9jaycsICdwYXBlcicsICdzY2lzc29ycyddO1xyXG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID0gbW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKV07XHJcbiAgICBjb25zdCB3aW5uZXIgPSBkZXRlcm1pbmVXaW5uZXIocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKTtcclxuICAgIHNldFJlc3VsdCh7IHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSwgd2lubmVyIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNjb3JlcyhzY29yZXMgKyAxKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL3VwZGF0ZS9zY29yZXMnLFxyXG4gICAgICAgIHsgaWQsIHNjb3Jlczogc2NvcmVzICsgMSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck1vdmUgPT09IGNvbXB1dGVyTW92ZSkge1xyXG4gICAgICByZXR1cm4gXCJEcmF3IVwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdyb2NrJyAmJiBjb21wdXRlck1vdmUgPT09ICdzY2lzc29ycycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAncGFwZXInICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3JvY2snKSB8fFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3NjaXNzb3JzJyAmJiBjb21wdXRlck1vdmUgPT09ICdwYXBlcicpXHJcbiAgICApIHtcclxuICAgICAgdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIHJldHVybiBgJHt1c2VybmFtZX0gd2luIWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ0NvbXB1dGVyIHdpbnMhJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWxvYWQgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXN1bHQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0U2NvcmVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zY29yZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVzXCI+U2NvcmVzOiB7c2NvcmVzfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucyBncmlkLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vdmVcIj5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb3ZlLWJ0blwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXllck1vdmUoJ3JvY2snKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2JhdHUucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb3ZlLWJ0blwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXllck1vdmUoJ3BhcGVyJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9rZXJ0YXMucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb3ZlLWJ0blwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXllck1vdmUoJ3NjaXNzb3JzJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9pbWFnZXMvZ3VudGluZy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgZ3JpZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtb3ZlXCI+Q29tcHV0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbXB1dGVyLW1vdmUtYnRuXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMvYmF0dS5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wdXRlci1tb3ZlLWJ0blwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycvaW1hZ2VzL2tlcnRhcy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWFnZVwiIC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wdXRlci1tb3ZlLWJ0blwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycuL2ltYWdlcy9ndW50aW5nLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltYWdlXCIgLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Jlc3VsdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxvYWRcIiBvbkNsaWNrPXtoYW5kbGVSZWxvYWR9PlxyXG4gICAgICAgICAgUGxheSBBZ2FpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vZ2FtZVJQUy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9nYW1lUlBTLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2dhbWVSUFMubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFMSgpIHtcbiAgICBsZXQgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAgICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAgICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG59KCk7XG5jb25zdCBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQxKCkge1xuICAgIGNvbnN0IG1lbW8gPSB7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICAgICAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gICAgfTtcbn0oKTtcbmNvbnN0IHN0eWxlc0luRG9tID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWRDb3VudE1hcCA9IHtcbiAgICB9O1xuICAgIGNvbnN0IGlkZW50aWZpZXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgY29uc3QgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICAgICAgY29uc3QgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaWQgKyAnICcgKyBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICAgICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IG5vbmNlID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICAgIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi8gY29uc3QgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dDEoKSB7XG4gICAgY29uc3QgdGV4dFN0b3JlID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgfTtcbn0oKTtcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICAgIGNvbnN0IGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gJ0BtZWRpYSAnICsgb2JqLm1lZGlhICsgJyB7JyArIG9iai5jc3MgKyAnfScgOiBvYmouY3NzO1xuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgICBsZXQgY3NzID0gb2JqLmNzcztcbiAgICBjb25zdCBtZWRpYSA9IG9iai5tZWRpYTtcbiAgICBjb25zdCBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICAgIGlmIChtZWRpYSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLyc7XG4gICAgfVxuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShzdHlsZS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmxldCBzaW5nbGV0b24gPSBudWxsO1xubGV0IHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGxldCB1cGRhdGU7XG4gICAgbGV0IHJlbW92ZTtcbiAgICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgICAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShvYmopO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIH07XG4gICAgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gICAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuICAgIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gICAgfVxuICAgIGxpc3QgPSBsaXN0IHx8IFtdO1xuICAgIGxldCBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgICBmb3IobGV0IGkxID0gMDsgaTEgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpMSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaTFdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmIChzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gICAgfTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZXMuY3NzICovXFxyXFxuLyogdW5pdmVyc2FsIHNlbGVjdG9yIC0gQXBwbGllcyB0byB3aG9sZSBkb2N1bWVudCAqL1xcclxcbi5nYW1lUlBTX2JhY2tncm91bmRfX05fdFhOe1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHQgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGJhY2tncm91bmQ6ICMxNTFiMjU7XFxyXFxuXFx0Y29sb3I6ICM4YTZhNmE7XFxyXFxufVxcclxcblxcclxcbi5nYW1lUlBTX2dyaWQtY29udGFpbmVyX19Gam9kVyB7XFxyXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gIFxcdC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXHJcXG4gIFxcdC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgXFx0ICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmdhbWVSUFNfZ3JpZC1pdGVtX18zaGFZYSB7XFxyXFxuXFx0LW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG5cXHQtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG5cXHQgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHQtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcblxcdCAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBUbyBjZW50ZXIgZXZlcnl0aGluZyBpbiBnYW1lICovXFxyXFxuLmdhbWVSUFNfZ2FtZV9fM0JVWVh7XFxyXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHQtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcblxcdC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcblxcdCAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHQtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuXFx0ICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHQtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcblxcdCAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGl0bGUgb2YgdGhlIGdhbWUgKi9cXHJcXG4uZ2FtZVJQU190aXRsZV9fMnVUa3Z7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRmb250LXNpemU6IDRyZW07XFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2NvcmUgQm9hcmQgKi9cXHJcXG4uZ2FtZVJQU19zY29yZV9fMUJaTDN7XFxyXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMzB2dztcXHJcXG5cXHQtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0ICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA3MHB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIFNjb3JlICovXFxyXFxuLmdhbWVSUFNfcC1jb3VudF9fZmoyem0sLmdhbWVSUFNfYy1jb3VudF9fMmlmRzF7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcbi5nYW1lUlBTX2J1dHRvbl9fMVFQaWV7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHR3aWR0aDogNzBweDtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXNwbGF5aW5nIHRocmVlIGJ1dHRvbnMgaW4gb25lIGxpbmUgKi9cXHJcXG4uZ2FtZVJQU19vcHRpb25zX19BR2NMSSB7XFxyXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogNTB2dztcXHJcXG5cXHQtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0ICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZVJQU19vcHRpb25zY29tX18yYjFYMyB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDMwcHg7XFxyXFxuXFx0ZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogNTB2dztcXHJcXG5cXHQtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0ICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsaW5nIG9uIGFsbCB0aHJlZSBidXR0b25zICovXFxyXFxuLmdhbWVSUFNfcm9ja19fM3Z2TWMsIC5nYW1lUlBTX3BhcGVyX18zT3NoUSwgLmdhbWVSUFNfc2Npc3Nvcl9fMzQ0aHMsIC5nYW1lUlBTX3JvY2tjb21fXzFGeHpoLCAuZ2FtZVJQU19wYXBlcmNvbV9fM3FBUGwsIC5nYW1lUlBTX3NjaXNzb3Jjb21fXzFiNmFiIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjhyZW07XFxyXFxuXFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogZ3JlZW47XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXItY29sb3I6IGdyZWVuO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lUlBTX21vdmVfXzF5WFJ5e1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVsb2FkIGJ1dHRvbiBzdHlsZSAqL1xcclxcbi5nYW1lUlBTX3JlbG9hZF9fM3BKLXAge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3JlZnJlc2gucG5nKTtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdG1hcmdpbi10b3A6IDJyZW07XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVSUFNfcmVzdWx0X19yZDdTbXtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZVJQU19pbWFnZV9fMjZVYU8ge1xcclxcblxcdGhlaWdodDogNTBweDtcXHJcXG5cXHR3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuLmdhbWVSUFNfbW92ZS1idG5fX2lsQllzLmdhbWVSUFNfc2VsZWN0ZWRfXzEzRWNEIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTBlODUwOyAvKiBBZGQgeW91ciBkZXNpcmVkIGNvbG9yIGZvciBzZWxlY3RlZCBtb3ZlcyAqL1xcclxcbiAgfVxcclxcblxcclxcbi5nYW1lUlBTX3NlbGVjdGVkLWNvbXB1dGVyX18xSnZIYyB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDsgLyogQWRkIHlvdXIgZGVzaXJlZCBjb2xvciBmb3IgdGhlIGNvbXB1dGVyJ3MgY2hvc2VuIG1vdmUgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTJweClcXHJcXG57XFxyXFxuXFx0LmdhbWVSUFNfdGl0bGVfXzJ1VGt2e1xcclxcblxcdFxcdFxcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFx0LmdhbWVSUFNfc2NvcmVfXzFCWkwze1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDIwMHB4O1xcclxcblxcdFxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHR9XFxyXFxuXFx0LmdhbWVSUFNfb3B0aW9uc19fQUdjTEl7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTtBQUNmLG1EQUFtRDtBQUNuRDtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsOEJBQXNCO0lBQXRCLDJCQUFzQjtTQUF0QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGlCQUFhO0NBQWIsYUFBYTtHQUNYLDJCQUFtQjtHQUFuQiwwQkFBbUI7UUFBbkIsbUJBQW1CO0NBQ3JCLHlCQUF5QjtDQUN6QixhQUFhO0VBQ1o7O0VBRUE7Q0FDRCx5QkFBc0I7Q0FBdEIsMEJBQXNCO01BQXRCLHNCQUFzQjtDQUN0QiwwQ0FBMEM7Q0FDMUMsb0NBQW9DO0NBQ3BDLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysc0JBQW1CO01BQW5CLG1CQUFtQjtFQUNsQjs7QUFFRixpQ0FBaUM7QUFDakM7Q0FDQyxpQkFBYTtDQUFiLGFBQWE7Q0FDYix5QkFBc0I7Q0FBdEIsMEJBQXNCO01BQXRCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsWUFBWTtDQUNaLHFCQUF1QjtNQUF2Qix1QkFBdUI7Q0FDdkIsc0JBQW1CO01BQW5CLG1CQUFtQjtBQUNwQjs7QUFFQSxzQkFBc0I7QUFDdEI7Q0FDQyw2RUFBNkU7Q0FDN0Usa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixlQUFlO0NBQ2YsVUFBVTtBQUNYOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGlCQUFhO0NBQWIsYUFBYTtDQUNiLFdBQVc7Q0FDWCwyQkFBNkI7TUFBN0IsNkJBQTZCO0NBQzdCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBLFVBQVU7QUFDVjtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7Q0FDWix3QkFBd0I7QUFDekI7O0FBRUEseUNBQXlDO0FBQ3pDO0NBQ0MsaUJBQWE7Q0FBYixhQUFhO0NBQ2IsV0FBVztDQUNYLDJCQUE2QjtNQUE3Qiw2QkFBNkI7Q0FDN0IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFhO0NBQWIsYUFBYTtDQUNiLFdBQVc7Q0FDWCwyQkFBNkI7TUFBN0IsNkJBQTZCO0NBQzdCLGdCQUFnQjtBQUNqQjs7QUFFQSxpQ0FBaUM7QUFDakM7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUEsd0JBQXdCO0FBQ3hCO0NBQ0MsMENBQTBDO0NBQzFDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTtDQUNDLHlCQUF5QixFQUFFLDhDQUE4QztFQUN4RTs7QUFFRjtDQUNDLHlCQUF5QixFQUFFLDBEQUEwRDtFQUNwRjs7O0FBR0Ysc0JBQXNCO0FBQ3RCOztDQUVDOztFQUVDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0NBQ2I7Q0FDQTtFQUNDLFlBQVk7Q0FDYjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlcy5jc3MgKi9cXHJcXG4vKiB1bml2ZXJzYWwgc2VsZWN0b3IgLSBBcHBsaWVzIHRvIHdob2xlIGRvY3VtZW50ICovXFxyXFxuLmJhY2tncm91bmR7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMTUxYjI1O1xcclxcblxcdGNvbG9yOiAjOGE2YTZhO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICBcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmdyaWQtaXRlbSB7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogVG8gY2VudGVyIGV2ZXJ5dGhpbmcgaW4gZ2FtZSAqL1xcclxcbi5nYW1le1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaXRsZSBvZiB0aGUgZ2FtZSAqL1xcclxcbi50aXRsZXtcXHJcXG5cXHRmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogNHJlbTtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTY29yZSBCb2FyZCAqL1xcclxcbi5zY29yZXtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiAzMHZ3O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDcwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2NvcmUgKi9cXHJcXG4ucC1jb3VudCwuYy1jb3VudHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuLmJ1dHRvbntcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHdpZHRoOiA3MHB4O1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc3BsYXlpbmcgdGhyZWUgYnV0dG9ucyBpbiBvbmUgbGluZSAqL1xcclxcbi5vcHRpb25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiA1MHZ3O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zY29tIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMzBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiA1MHZ3O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxpbmcgb24gYWxsIHRocmVlIGJ1dHRvbnMgKi9cXHJcXG4ucm9jaywgLnBhcGVyLCAuc2Npc3NvciwgLnJvY2tjb20sIC5wYXBlcmNvbSwgLnNjaXNzb3Jjb20ge1xcclxcblxcdHBhZGRpbmc6IDAuOHJlbTtcXHJcXG5cXHR3aWR0aDogMTAwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdGJvcmRlci1jb2xvcjogZ3JlZW47XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmV7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZWxvYWQgYnV0dG9uIHN0eWxlICovXFxyXFxuLnJlbG9hZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcmVmcmVzaC5wbmcpO1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGJhY2tncm91bmQ6IGdyZWVuO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0e1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcdHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG4ubW92ZS1idG4uc2VsZWN0ZWQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMxMGU4NTA7IC8qIEFkZCB5b3VyIGRlc2lyZWQgY29sb3IgZm9yIHNlbGVjdGVkIG1vdmVzICovXFxyXFxuICB9XFxyXFxuXFxyXFxuLnNlbGVjdGVkLWNvbXB1dGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwOyAvKiBBZGQgeW91ciBkZXNpcmVkIGNvbG9yIGZvciB0aGUgY29tcHV0ZXIncyBjaG9zZW4gbW92ZSAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMnB4KVxcclxcbntcXHJcXG5cXHQudGl0bGV7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHQuc2NvcmV7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMjAwcHg7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdH1cXHJcXG5cXHQub3B0aW9uc3tcXHJcXG5cXHRcXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJiYWNrZ3JvdW5kXCI6IFwiZ2FtZVJQU19iYWNrZ3JvdW5kX19OX3RYTlwiLFxuXHRcImdyaWQtY29udGFpbmVyXCI6IFwiZ2FtZVJQU19ncmlkLWNvbnRhaW5lcl9fRmpvZFdcIixcblx0XCJncmlkLWl0ZW1cIjogXCJnYW1lUlBTX2dyaWQtaXRlbV9fM2hhWWFcIixcblx0XCJnYW1lXCI6IFwiZ2FtZVJQU19nYW1lX18zQlVZWFwiLFxuXHRcInRpdGxlXCI6IFwiZ2FtZVJQU190aXRsZV9fMnVUa3ZcIixcblx0XCJzY29yZVwiOiBcImdhbWVSUFNfc2NvcmVfXzFCWkwzXCIsXG5cdFwicC1jb3VudFwiOiBcImdhbWVSUFNfcC1jb3VudF9fZmoyem1cIixcblx0XCJjLWNvdW50XCI6IFwiZ2FtZVJQU19jLWNvdW50X18yaWZHMVwiLFxuXHRcImJ1dHRvblwiOiBcImdhbWVSUFNfYnV0dG9uX18xUVBpZVwiLFxuXHRcIm9wdGlvbnNcIjogXCJnYW1lUlBTX29wdGlvbnNfX0FHY0xJXCIsXG5cdFwib3B0aW9uc2NvbVwiOiBcImdhbWVSUFNfb3B0aW9uc2NvbV9fMmIxWDNcIixcblx0XCJyb2NrXCI6IFwiZ2FtZVJQU19yb2NrX18zdnZNY1wiLFxuXHRcInBhcGVyXCI6IFwiZ2FtZVJQU19wYXBlcl9fM09zaFFcIixcblx0XCJzY2lzc29yXCI6IFwiZ2FtZVJQU19zY2lzc29yX18zNDRoc1wiLFxuXHRcInJvY2tjb21cIjogXCJnYW1lUlBTX3JvY2tjb21fXzFGeHpoXCIsXG5cdFwicGFwZXJjb21cIjogXCJnYW1lUlBTX3BhcGVyY29tX18zcUFQbFwiLFxuXHRcInNjaXNzb3Jjb21cIjogXCJnYW1lUlBTX3NjaXNzb3Jjb21fXzFiNmFiXCIsXG5cdFwibW92ZVwiOiBcImdhbWVSUFNfbW92ZV9fMXlYUnlcIixcblx0XCJyZWxvYWRcIjogXCJnYW1lUlBTX3JlbG9hZF9fM3BKLXBcIixcblx0XCJyZXN1bHRcIjogXCJnYW1lUlBTX3Jlc3VsdF9fcmQ3U21cIixcblx0XCJpbWFnZVwiOiBcImdhbWVSUFNfaW1hZ2VfXzI2VWFPXCIsXG5cdFwibW92ZS1idG5cIjogXCJnYW1lUlBTX21vdmUtYnRuX19pbEJZc1wiLFxuXHRcInNlbGVjdGVkXCI6IFwiZ2FtZVJQU19zZWxlY3RlZF9fMTNFY0RcIixcblx0XCJzZWxlY3RlZC1jb21wdXRlclwiOiBcImdhbWVSUFNfc2VsZWN0ZWQtY29tcHV0ZXJfXzFKdkhjXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsIkdhbWUiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImhhbmRsZVBsYXllck1vdmUiLCJwbGF5ZXJNb3ZlIiwibW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ3aW5uZXIiLCJkZXRlcm1pbmVXaW5uZXIiLCJ1cGRhdGVTY29yZXMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiaGFuZGxlUmVsb2FkIiwiY2hlY2tUb2tlbiIsImVtYWlsIiwibmF2aWdhdGUiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==