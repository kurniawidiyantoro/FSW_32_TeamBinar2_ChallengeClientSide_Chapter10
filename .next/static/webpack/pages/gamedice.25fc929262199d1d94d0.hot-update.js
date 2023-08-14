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
/* harmony import */ var _assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/dice1.svg */ "./assets/images/dice1.svg");
/* harmony import */ var _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/dice2.svg */ "./assets/images/dice2.svg");
/* harmony import */ var _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/dice3.svg */ "./assets/images/dice3.svg");
/* harmony import */ var _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/dice4.svg */ "./assets/images/dice4.svg");
/* harmony import */ var _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/dice5.svg */ "./assets/images/dice5.svg");
/* harmony import */ var _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/dice6.svg */ "./assets/images/dice6.svg");
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

  var diceImages = ['../../assets/images/dice1.svg', '../../assets/images/dice2.svg', '../../assets/images/dice3.svg', '../../assets/images/dice4.svg', '../../assets/images/dice5.svg', '../../assets/images/dice6.svg'];
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
        lineNumber: 116,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
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
            lineNumber: 123,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("img", {
            src: "../../assets/images/dice1.svg",
            alt: "Dice",
            ref: playerRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
            children: ["Score: ", scores]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("img", {
            src: "../../assets/images/dice1.svg",
            alt: "Dice",
            ref: playerRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
          className: "result",
          ref: resultDice,
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
          onClick: roll,
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_15___default().btn),
          children: "Roll the dice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWRpY2UuMjVmYzkyOTI2MjE5OWQxZDk0ZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLFNBQVNnQixLQUFULEdBQWlCO0FBQUE7O0FBQ2Ysa0JBQW9CZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPZ0IsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDakIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT2tCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCbkIsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT29CLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE0QnJCLCtDQUFRLENBQUMsOENBQUQsQ0FBcEM7QUFBQSxNQUFPc0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQVcsRUFBNUI7QUFDQSxNQUFNa0IsV0FBVyxHQUFHakIsd0RBQVcsQ0FBQyxVQUFBa0IsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUFsQjtBQUFBLEdBQU4sQ0FBL0I7QUFDQSxNQUFNRyxTQUFTLEdBQUczQiw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNNEIsV0FBVyxHQUFHNUIsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsTUFBTTZCLFVBQVUsR0FBRzdCLDZDQUFNLENBQUMsSUFBRCxDQUF6QixDQVRlLENBVWY7O0FBRUEsTUFBSThCLFVBQVUsR0FBRyxDQUNmLCtCQURlLEVBRWYsK0JBRmUsRUFHZiwrQkFIZSxFQUlmLCtCQUplLEVBS2YsK0JBTGUsRUFNZiwrQkFOZSxDQUFqQjtBQU9B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QUcsbUJBQVMsRUFBQyxRQUFiO0FBQXNCLGFBQUcsRUFBRTBCLFVBQTNCO0FBQUEsb0JBQ0dSO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQW1CRTtBQUFLLGlCQUFTLEVBQUVsQixpRkFBaEI7QUFBQSwrQkFDQTtBQUFRLGlCQUFPLEVBQUU4QixJQUFqQjtBQUF1QixtQkFBUyxFQUFFOUIseUVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOQTtBQUFBLGtCQURGO0FBbUNEOztHQXBJUVc7VUFLVVIsc0RBQ0dDOzs7S0FOYk87QUFzSVQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZWRpY2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZ2FtZURpY2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGRpY2UxIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTEuc3ZnJztcclxuaW1wb3J0IGRpY2UyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTIuc3ZnJztcclxuaW1wb3J0IGRpY2UzIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTMuc3ZnJztcclxuaW1wb3J0IGRpY2U0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTQuc3ZnJztcclxuaW1wb3J0IGRpY2U1IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTUuc3ZnJztcclxuaW1wb3J0IGRpY2U2IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTYuc3ZnJztcclxuXHJcblxyXG5mdW5jdGlvbiBEaWNlcygpIHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCdDbGljayB0b21ib2wgZGliYXdhaCB1bnR1ayBtZW11bGFpIHBlcm1haW5hbicpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBwbGF5ZWRHYW1lcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJlZHVjZXIucGxheWVkR2FtZXMpO1xyXG4gIGNvbnN0IHBsYXllclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjb21wdXRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByZXN1bHREaWNlID0gdXNlUmVmKG51bGwpO1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgbGV0IGRpY2VJbWFnZXMgPSBbXHJcbiAgICAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlMS5zdmcnLCBcclxuICAgICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UyLnN2ZycsIFxyXG4gICAgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTMuc3ZnJywgXHJcbiAgICAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlNC5zdmcnLCBcclxuICAgICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U1LnN2ZycsIFxyXG4gICAgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTYuc3ZnJ107XHJcbiAgY29uc29sZS5sb2coZGljZUltYWdlcylcclxuXHJcbiAgY29uc3Qgcm9sbCA9ICgpID0+IHtcclxuICAgIC8vIEdlbmVyYXRlIHJhbmRvbSBudW1iZXJcclxuICAgIGNvbnN0IHBsYXllclJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJSYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuXHJcbiAgICAvLyBMb2dpYyBmb3IgdGhpcyBnYW1lXHJcbiAgICBpZiAocGxheWVyUmFuZG9tTnVtID4gY29tcHV0ZXJSYW5kb21OdW0pIHtcclxuICAgICAgc2V0UmVzdWx0KGBQbGF5ZXIgbWVuYW5nIGRlbmdhbiAke3BsYXllclJhbmRvbU51bSArIDF9IHBvaW50c2ApO1xyXG4gICAgICBzZXRTY29yZXMoKHByZXZTY29yZSkgPT4gcHJldlNjb3JlICsgMSk7XHJcbiAgICAgIC8vIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXJSYW5kb21OdW0gPCBjb21wdXRlclJhbmRvbU51bSkge1xyXG4gICAgICBzZXRSZXN1bHQoYENvbXB1dGVyIG1lbmFuZyBkZW5nYW4gJHtjb21wdXRlclJhbmRvbU51bSArIDF9IHBvaW50c2ApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmVzdWx0KGBTZXJpISBQbGF5ZXIgZGFuIHBlbWFpbiBtZW5kYXBhdGthbiAke3BsYXllclJhbmRvbU51bSArIDF9IHBvaW50c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZGljZUltYWdlc1twbGF5ZXJSYW5kb21OdW1dKTtcclxuICAgIGNvbXB1dGVyUmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBkaWNlSW1hZ2VzW2NvbXB1dGVyUmFuZG9tTnVtXSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWwgUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVkaWNlJzogdHJ1ZSB9KSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVkR2FtZXMnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVkaWNlJzogdHJ1ZSB9KSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBsYXllZCBHYW1lczpcIiwgcGxheWVkR2FtZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnZ2FtZWxpc3QnKSAvLyBTcGVjaWZ5IHRoZSBkZXNpcmVkIHBhdGggaGVyZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNjb3JlcyhzY29yZXMgKyAxKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL3VwZGF0ZS9zY29yZXMnLFxyXG4gICAgICAgIHsgaWQsIHNjb3Jlczogc2NvcmVzICsgMSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJnYW1lL2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0U2NvcmVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zY29yZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnbG9naW4nKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlQXJlYX0+XHJcbiAgICAgICAgICA8cD57dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2Z1wiIGFsdD0nRGljZScgcmVmPXtwbGF5ZXJSZWZ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlNjb3JlOiB7c2NvcmVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VBcmVhfT5cclxuICAgICAgICAgIDxwPkNvbXB1dGVyPC9wPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2Z1wiIGFsdD0nRGljZScgcmVmPXtwbGF5ZXJSZWZ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VXcmFwcGVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdyZXN1bHQnIHJlZj17cmVzdWx0RGljZX0+XHJcbiAgICAgICAge3Jlc3VsdH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17cm9sbH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cclxuICAgICAgICBSb2xsIHRoZSBkaWNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkF4aW9zIiwic3R5bGVzIiwiQnV0dG9uIiwic2V0UGxheWVkR2FtZXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZGljZTEiLCJkaWNlMiIsImRpY2UzIiwiZGljZTQiLCJkaWNlNSIsImRpY2U2IiwiRGljZXMiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImRpc3BhdGNoIiwicGxheWVkR2FtZXMiLCJzdGF0ZSIsInJlZHVjZXIiLCJwbGF5ZXJSZWYiLCJjb21wdXRlclJlZiIsInJlc3VsdERpY2UiLCJkaWNlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsInJvbGwiLCJwbGF5ZXJSYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wdXRlclJhbmRvbU51bSIsInByZXZTY29yZSIsImN1cnJlbnQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwiZ2V0SXRlbSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsIm5hdmlnYXRlIiwiY2VudGVyQ29udGFpbmVyIiwiZGljZVdyYXBwZXIiLCJkaWNlQXJlYSIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=