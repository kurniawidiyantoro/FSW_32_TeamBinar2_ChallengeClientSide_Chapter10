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
            src: diceImages[0],
            ref: playerRef,
            alt: "Dice"
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
            src: diceImages[0],
            ref: computerRef,
            alt: "Dice"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWRpY2UuM2M5OTk3ZjliOGE0MWZkOWRjNjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLFNBQVNnQixLQUFULEdBQWlCO0FBQUE7O0FBQ2Ysa0JBQW9CZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPZ0IsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDakIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT2tCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCbkIsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT29CLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUE0QnJCLCtDQUFRLENBQUMsOENBQUQsQ0FBcEM7QUFBQSxNQUFPc0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQVcsRUFBNUI7QUFDQSxNQUFNa0IsV0FBVyxHQUFHakIsd0RBQVcsQ0FBQyxVQUFBa0IsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUFsQjtBQUFBLEdBQU4sQ0FBL0I7QUFDQSxNQUFNRyxTQUFTLEdBQUczQiw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNNEIsV0FBVyxHQUFHNUIsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsTUFBTTZCLFVBQVUsR0FBRzdCLDZDQUFNLENBQUMsSUFBRCxDQUF6QixDQVRlLENBVWY7O0FBRUEsTUFBSThCLFVBQVUsR0FBRyxDQUNmLCtCQURlLEVBRWYsK0JBRmUsRUFHZiwrQkFIZSxFQUlmLCtCQUplLEVBS2YsK0JBTGUsRUFNZiwrQkFOZSxDQUFqQjtBQU9B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QkFBUyxFQUFFekIsaUZBQWhCO0FBQUEsK0JBQ0E7QUFBRyxtQkFBUyxFQUFDLFFBQWI7QUFBc0IsYUFBRyxFQUFFMEIsVUFBM0I7QUFBQSxvQkFDR1I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBbUJFO0FBQUssaUJBQVMsRUFBRWxCLGlGQUFoQjtBQUFBLCtCQUNBO0FBQVEsaUJBQU8sRUFBRThCLElBQWpCO0FBQXVCLG1CQUFTLEVBQUU5Qix5RUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5BO0FBQUEsa0JBREY7QUFtQ0Q7O0dBcElRVztVQUtVUixzREFDR0M7OztLQU5iTztBQXNJVCwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lZGljZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9nYW1lRGljZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge3NldFBsYXllZEdhbWVzICB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgZGljZTEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlMS5zdmcnO1xyXG5pbXBvcnQgZGljZTIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlMi5zdmcnO1xyXG5pbXBvcnQgZGljZTMgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlMy5zdmcnO1xyXG5pbXBvcnQgZGljZTQgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlNC5zdmcnO1xyXG5pbXBvcnQgZGljZTUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlNS5zdmcnO1xyXG5pbXBvcnQgZGljZTYgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlNi5zdmcnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIERpY2VzKCkge1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzY29yZXMsIHNldFNjb3Jlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoJ0NsaWNrIHRvbWJvbCBkaWJhd2FoIHVudHVrIG1lbXVsYWkgcGVybWFpbmFuJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHBsYXllZEdhbWVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVkdWNlci5wbGF5ZWRHYW1lcyk7XHJcbiAgY29uc3QgcGxheWVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGNvbXB1dGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJlc3VsdERpY2UgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy8gY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBsZXQgZGljZUltYWdlcyA9IFtcclxuICAgICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2ZycsIFxyXG4gICAgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTIuc3ZnJywgXHJcbiAgICAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlMy5zdmcnLCBcclxuICAgICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnN2ZycsIFxyXG4gICAgJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTUuc3ZnJywgXHJcbiAgICAnLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWNlNi5zdmcnXTtcclxuICBjb25zb2xlLmxvZyhkaWNlSW1hZ2VzKVxyXG5cclxuICBjb25zdCByb2xsID0gKCkgPT4ge1xyXG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIG51bWJlclxyXG4gICAgY29uc3QgcGxheWVyUmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgICBjb25zdCBjb21wdXRlclJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG5cclxuICAgIC8vIExvZ2ljIGZvciB0aGlzIGdhbWVcclxuICAgIGlmIChwbGF5ZXJSYW5kb21OdW0gPiBjb21wdXRlclJhbmRvbU51bSkge1xyXG4gICAgICBzZXRSZXN1bHQoYFBsYXllciBtZW5hbmcgZGVuZ2FuICR7cGxheWVyUmFuZG9tTnVtICsgMX0gcG9pbnRzYCk7XHJcbiAgICAgIHNldFNjb3JlcygocHJldlNjb3JlKSA9PiBwcmV2U2NvcmUgKyAxKTtcclxuICAgICAgLy8gdXBkYXRlU2NvcmVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllclJhbmRvbU51bSA8IGNvbXB1dGVyUmFuZG9tTnVtKSB7XHJcbiAgICAgIHNldFJlc3VsdChgQ29tcHV0ZXIgbWVuYW5nIGRlbmdhbiAke2NvbXB1dGVyUmFuZG9tTnVtICsgMX0gcG9pbnRzYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSZXN1bHQoYFNlcmkhIFBsYXllciBkYW4gcGVtYWluIG1lbmRhcGF0a2FuICR7cGxheWVyUmFuZG9tTnVtICsgMX0gcG9pbnRzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyUmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBkaWNlSW1hZ2VzW3BsYXllclJhbmRvbU51bV0pO1xyXG4gICAgY29tcHV0ZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpY2VJbWFnZXNbY29tcHV0ZXJSYW5kb21OdW1dKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbCBQbGF5ZWQgR2FtZXM6XCIsIHBsYXllZEdhbWVzKTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWRpY2UnOiB0cnVlIH0pKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZWRHYW1lcycsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWRpY2UnOiB0cnVlIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdnYW1lbGlzdCcpIC8vIFNwZWNpZnkgdGhlIGRlc2lyZWQgcGF0aCBoZXJlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U2NvcmVzKHNjb3JlcyArIDEpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvdXBkYXRlL3Njb3JlcycsXHJcbiAgICAgICAgeyBpZCwgc2NvcmVzOiBzY29yZXMgKyAxIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VBcmVhfT5cclxuICAgICAgICAgIDxwPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZGljZUltYWdlc1swXX0gcmVmPXtwbGF5ZXJSZWZ9IGFsdD0nRGljZScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+U2NvcmU6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZUFyZWF9PlxyXG4gICAgICAgICAgPHA+Q29tcHV0ZXI8L3A+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZGljZUltYWdlc1swXX0gcmVmPXtjb21wdXRlclJlZn0gYWx0PSdEaWNlJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0ncmVzdWx0JyByZWY9e3Jlc3VsdERpY2V9PlxyXG4gICAgICAgIHtyZXN1bHR9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGx9IGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XHJcbiAgICAgICAgUm9sbCB0aGUgZGljZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsInN0eWxlcyIsIkJ1dHRvbiIsInNldFBsYXllZEdhbWVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImRpY2UxIiwiZGljZTIiLCJkaWNlMyIsImRpY2U0IiwiZGljZTUiLCJkaWNlNiIsIkRpY2VzIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzY29yZXMiLCJzZXRTY29yZXMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJkaXNwYXRjaCIsInBsYXllZEdhbWVzIiwic3RhdGUiLCJyZWR1Y2VyIiwicGxheWVyUmVmIiwiY29tcHV0ZXJSZWYiLCJyZXN1bHREaWNlIiwiZGljZUltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJyb2xsIiwicGxheWVyUmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJSYW5kb21OdW0iLCJwcmV2U2NvcmUiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJ1cGRhdGVTY29yZXMiLCJ0b2tlbiIsImdldEl0ZW0iLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJjaGVja1Rva2VuIiwiZW1haWwiLCJuYXZpZ2F0ZSIsImNlbnRlckNvbnRhaW5lciIsImRpY2VXcmFwcGVyIiwiZGljZUFyZWEiLCJidG4iXSwic291cmNlUm9vdCI6IiJ9