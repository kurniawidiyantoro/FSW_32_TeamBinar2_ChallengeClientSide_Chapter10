"use strict";
self["webpackHotUpdate_N_E"]("pages/gamedice",{

/***/ "./pages/gamedice/index.js":
/*!*********************************!*\
  !*** ./pages/gamedice/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/gameDice.module.css */ "./styles/gameDice.module.css");
/* harmony import */ var _styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/dice1.svg */ "./assets/images/dice1.svg");
/* harmony import */ var _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/dice2.svg */ "./assets/images/dice2.svg");
/* harmony import */ var _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/dice3.svg */ "./assets/images/dice3.svg");
/* harmony import */ var _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/dice4.svg */ "./assets/images/dice4.svg");
/* harmony import */ var _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/dice5.svg */ "./assets/images/dice5.svg");
/* harmony import */ var _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/dice6.svg */ "./assets/images/dice6.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamedice\\index.js",
    _s = $RefreshSig$();



 // import { useNavigate } from "react-router-dom";














function Dices() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      scores = _useState3[0],
      setScores = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Click tombol dibawah untuk memulai permainan'),
      result = _useState4[0],
      setResult = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.reducer.playedGames;
  });
  var playerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var computerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var resultDice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null); // const navigate = useNavigate();

  var diceImages = [_assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_5__.default, _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_6__.default, _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_7__.default, _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_8__.default, _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_9__.default, _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_10__.default];

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
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.setPlayedGames)({
      '/gamedice': true
    }));
    console.log("Played Games:", playedGames);
  };

  var handleBackClick = function handleBackClick() {
    window.location.replace('gamelist'); // Specify the desired path here
  };

  var updateScores = /*#__PURE__*/function () {
    var _ref = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setScores(scores + 1);
              token = localStorage.getItem("token");
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_12__.default.post('http://localhost:3005/usergame/update/scores', {
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
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var token, email, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
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
              return axios__WEBPACK_IMPORTED_MODULE_12__.default.post('http://localhost:3005/usergame/get', {
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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    checkToken();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_13__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().centerContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().diceWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
            src: diceImages[0],
            ref: playerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["Score: ", scores]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
            src: diceImages[0],
            ref: computerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
          className: "result",
          ref: resultDice,
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: roll,
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_14___default().btn),
          children: "Roll the dice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Dices, "YejLe/323RhPJRig84+eZVv6yiM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWRpY2UuYTczMWI0YTM1ZTU1MmIwYWQwODguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0EsU0FBU2dCLEtBQVQsR0FBaUI7QUFBQTs7QUFDZixrQkFBb0JmLCtDQUFRLENBQUMsRUFBRCxDQUE1QjtBQUFBLE1BQU9nQixFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBZ0NqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPa0IsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBNEJuQiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFBQSxNQUFPb0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQTRCckIsK0NBQVEsQ0FBQyw4Q0FBRCxDQUFwQztBQUFBLE1BQU9zQixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdqQix3REFBVyxFQUE1QjtBQUNBLE1BQU1rQixXQUFXLEdBQUdqQix3REFBVyxDQUFDLFVBQUFrQixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFdBQWxCO0FBQUEsR0FBTixDQUEvQjtBQUNBLE1BQU1HLFNBQVMsR0FBRzNCLDZDQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU00QixXQUFXLEdBQUc1Qiw2Q0FBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxNQUFNNkIsVUFBVSxHQUFHN0IsNkNBQU0sQ0FBQyxJQUFELENBQXpCLENBVGUsQ0FVZjs7QUFFQSxNQUFJOEIsVUFBVSxHQUFHLENBQUN0Qiw2REFBRCxFQUFRQyw2REFBUixFQUFlQyw2REFBZixFQUFzQkMsNkRBQXRCLEVBQTZCQyw2REFBN0IsRUFBb0NDLDhEQUFwQyxDQUFq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QUFLLGlCQUFTLEVBQUVsQixpRkFBaEI7QUFBQSwrQkFDQTtBQUFRLGlCQUFPLEVBQUU0QixJQUFqQjtBQUF1QixtQkFBUyxFQUFFNUIseUVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOQTtBQUFBLGtCQURGO0FBbUNEOztHQTVIUVc7VUFLVVIsc0RBQ0dDOzs7S0FOYk87QUE4SFQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZWRpY2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZ2FtZURpY2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGRpY2UxIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTEuc3ZnJztcclxuaW1wb3J0IGRpY2UyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTIuc3ZnJztcclxuaW1wb3J0IGRpY2UzIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTMuc3ZnJztcclxuaW1wb3J0IGRpY2U0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTQuc3ZnJztcclxuaW1wb3J0IGRpY2U1IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTUuc3ZnJztcclxuaW1wb3J0IGRpY2U2IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTYuc3ZnJztcclxuXHJcblxyXG5mdW5jdGlvbiBEaWNlcygpIHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCdDbGljayB0b21ib2wgZGliYXdhaCB1bnR1ayBtZW11bGFpIHBlcm1haW5hbicpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBwbGF5ZWRHYW1lcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJlZHVjZXIucGxheWVkR2FtZXMpO1xyXG4gIGNvbnN0IHBsYXllclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjb21wdXRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByZXN1bHREaWNlID0gdXNlUmVmKG51bGwpO1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgbGV0IGRpY2VJbWFnZXMgPSBbZGljZTEsIGRpY2UyLCBkaWNlMywgZGljZTQsIGRpY2U1LCBkaWNlNl07XHJcblxyXG4gIGNvbnN0IHJvbGwgPSAoKSA9PiB7XHJcbiAgICAvLyBHZW5lcmF0ZSByYW5kb20gbnVtYmVyXHJcbiAgICBjb25zdCBwbGF5ZXJSYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgIGNvbnN0IGNvbXB1dGVyUmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcblxyXG4gICAgLy8gTG9naWMgZm9yIHRoaXMgZ2FtZVxyXG4gICAgaWYgKHBsYXllclJhbmRvbU51bSA+IGNvbXB1dGVyUmFuZG9tTnVtKSB7XHJcbiAgICAgIHNldFJlc3VsdChgUGxheWVyIG1lbmFuZyBkZW5nYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgICAgc2V0U2NvcmVzKChwcmV2U2NvcmUpID0+IHByZXZTY29yZSArIDEpO1xyXG4gICAgICAvLyB1cGRhdGVTY29yZXMoKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyUmFuZG9tTnVtIDwgY29tcHV0ZXJSYW5kb21OdW0pIHtcclxuICAgICAgc2V0UmVzdWx0KGBDb21wdXRlciBtZW5hbmcgZGVuZ2FuICR7Y29tcHV0ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlc3VsdChgU2VyaSEgUGxheWVyIGRhbiBwZW1haW4gbWVuZGFwYXRrYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpY2VJbWFnZXNbcGxheWVyUmFuZG9tTnVtXSk7XHJcbiAgICBjb21wdXRlclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZGljZUltYWdlc1tjb21wdXRlclJhbmRvbU51bV0pO1xyXG4gICAgY29uc29sZS5sb2coXCJJbml0aWFsIFBsYXllZCBHYW1lczpcIiwgcGxheWVkR2FtZXMpO1xyXG4gICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMoeyAnL2dhbWVkaWNlJzogdHJ1ZSB9KSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBsYXllZCBHYW1lczpcIiwgcGxheWVkR2FtZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnZ2FtZWxpc3QnKSAvLyBTcGVjaWZ5IHRoZSBkZXNpcmVkIHBhdGggaGVyZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNjb3JlcyhzY29yZXMgKyAxKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL3VwZGF0ZS9zY29yZXMnLFxyXG4gICAgICAgIHsgaWQsIHNjb3Jlczogc2NvcmVzICsgMSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0U2NvcmVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zY29yZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnbG9naW4nKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlQXJlYX0+XHJcbiAgICAgICAgICA8cD57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2RpY2VJbWFnZXNbMF19IHJlZj17cGxheWVyUmVmfSBhbHQ9J0RpY2UnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlNjb3JlOiB7c2NvcmVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VBcmVhfT5cclxuICAgICAgICAgIDxwPkNvbXB1dGVyPC9wPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2RpY2VJbWFnZXNbMF19IHJlZj17Y29tcHV0ZXJSZWZ9IGFsdD0nRGljZScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3Jlc3VsdCcgcmVmPXtyZXN1bHREaWNlfT5cclxuICAgICAgICB7cmVzdWx0fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VXcmFwcGVyfT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb2xsfSBjbGFzc05hbWU9e3N0eWxlcy5idG59PlxyXG4gICAgICAgIFJvbGwgdGhlIGRpY2VcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJzdHlsZXMiLCJCdXR0b24iLCJzZXRQbGF5ZWRHYW1lcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJkaWNlMSIsImRpY2UyIiwiZGljZTMiLCJkaWNlNCIsImRpY2U1IiwiZGljZTYiLCJEaWNlcyIsImlkIiwic2V0SWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2NvcmVzIiwic2V0U2NvcmVzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZGlzcGF0Y2giLCJwbGF5ZWRHYW1lcyIsInN0YXRlIiwicmVkdWNlciIsInBsYXllclJlZiIsImNvbXB1dGVyUmVmIiwicmVzdWx0RGljZSIsImRpY2VJbWFnZXMiLCJyb2xsIiwicGxheWVyUmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJSYW5kb21OdW0iLCJwcmV2U2NvcmUiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsIm5hdmlnYXRlIiwiY2VudGVyQ29udGFpbmVyIiwiZGljZVdyYXBwZXIiLCJkaWNlQXJlYSIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=