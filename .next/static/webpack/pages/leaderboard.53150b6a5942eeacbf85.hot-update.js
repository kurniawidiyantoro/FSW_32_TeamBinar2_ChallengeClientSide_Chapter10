"use strict";
self["webpackHotUpdate_N_E"]("pages/leaderboard",{

/***/ "./pages/leaderboard/index.js":
/*!************************************!*\
  !*** ./pages/leaderboard/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\leaderboard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();













var LeaderBoard = function LeaderBoard(_ref) {
  _s();

  var isLoggedIn = _ref.isLoggedIn,
      user = _ref.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      totalscore = _useState3[0],
      setTotalScore = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      playerData = _useState4[0],
      setPlayerData = _useState4[1];

  var getData = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, email, username, status, totalscore, gamename, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              username = localStorage.getItem("username");
              status = localStorage.getItem("status");
              totalscore = localStorage.getItem("totalscore");
              gamename = 'gamerps';
              _context.prev = 6;

              if (token) {
                _context.next = 12;
                break;
              }

              console.log('Not Authorize !');
              window.location.replace('/login');
              _context.next = 20;
              break;

            case 12:
              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get', {
                email: email,
                gamename: gamename,
                username: username,
                status: status,
                totalscore: totalscore
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 14:
              response = _context.sent;
              console.log(response.data.data);
              setUsername(response.data.data.username);
              setStatus(response.data.data.status);
              setTotalScore(response.data.data.totalscore);
              setPlayerData(response.data.data);

            case 20:
              ;
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](6);
              console.log("Internal Server Error !");

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 23]]);
    }));

    return function getData() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_4__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Table, {
      striped: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Total Score"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
        children: playerData.map(function (player, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              scope: "row",
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.totalscore
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(LeaderBoard, "Ph2sH0KlZDCnl/PsyUbDZ4kXBlM=");

_c = LeaderBoard;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.reducer.isLoggedIn,
    user: state.reducer.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps)(LeaderBoard));

var _c;

$RefreshReg$(_c, "LeaderBoard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuNTMxNTBiNmE1OTQyZWVhY2JmODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFVBQXNCLFFBQXRCQSxVQUFzQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDekMsa0JBQWdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFvQ2pCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9rQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ25CLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9vQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FERjtBQUVOQyxjQUFBQSxLQUZNLEdBRUVGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUZGO0FBR05YLGNBQUFBLFFBSE0sR0FHS1UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBSEw7QUFJTlQsY0FBQUEsTUFKTSxHQUlHUSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FKSDtBQUtOUCxjQUFBQSxVQUxNLEdBS09NLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQUxQO0FBTU5FLGNBQUFBLFFBTk0sR0FNSyxTQU5MO0FBQUE7O0FBQUEsa0JBUUhKLEtBUkc7QUFBQTtBQUFBO0FBQUE7O0FBU0pLLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FDLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEI7QUFWSTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFZbUJ0QiwrQ0FBQSxDQUFXLHVDQUFYLEVBQ3ZCO0FBQUVnQixnQkFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNDLGdCQUFBQSxRQUFRLEVBQVJBLFFBQVQ7QUFBbUJiLGdCQUFBQSxRQUFRLEVBQVJBLFFBQW5CO0FBQTZCRSxnQkFBQUEsTUFBTSxFQUFOQSxNQUE3QjtBQUFxQ0UsZ0JBQUFBLFVBQVUsRUFBVkE7QUFBckMsZUFEdUIsRUFFdkI7QUFDQWdCLGdCQUFBQSxPQUFPLEVBQUU7QUFDTEMsa0JBQUFBLGFBQWEsa0JBQVdaLEtBQVg7QUFEUjtBQURULGVBRnVCLENBWm5COztBQUFBO0FBWUVhLGNBQUFBLFFBWkY7QUFvQlJSLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBMUI7QUFDQXRCLGNBQUFBLFdBQVcsQ0FBQ3FCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CdkIsUUFBcEIsQ0FBWDtBQUNBRyxjQUFBQSxTQUFTLENBQUNtQixRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQnJCLE1BQXBCLENBQVQ7QUFDQUcsY0FBQUEsYUFBYSxDQUFDaUIsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWQsQ0FBbUJuQixVQUFwQixDQUFiO0FBQ0FHLGNBQUFBLGFBQWEsQ0FBQ2UsUUFBUSxDQUFDQyxJQUFULENBQWNBLElBQWYsQ0FBYjs7QUF4QlE7QUF5QlA7QUF6Qk87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2QlJULGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaOztBQTdCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQUCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBaUNBdkIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1p1QixJQUFBQSxPQUFPO0FBQ1IsR0FGTSxFQUVKLEVBRkksQ0FBVDtBQUtGLHNCQUNFO0FBQUssYUFBUyxFQUFFakIsb0ZBQWhCO0FBQUEsNEJBQ0EsOERBQUMsMkRBQUQ7QUFBWSxnQkFBVSxFQUFFTyxVQUF4QjtBQUFvQyxlQUFTLEVBQUVDLElBQUksQ0FBQ2E7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUEsOERBQUMsOENBQUQ7QUFBTyxhQUFPLE1BQWQ7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBQSxrQkFDR04sVUFBVSxDQUFDbUIsR0FBWCxDQUFlLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDhCQUNkO0FBQUEsb0NBQ0U7QUFBSSxtQkFBSyxFQUFDLEtBQVY7QUFBQSx3QkFBaUJBLEtBQUssR0FBRztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSx3QkFBS0QsTUFBTSxDQUFDMUI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBQSx3QkFBSzBCLE1BQU0sQ0FBQ3hCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUEsd0JBQUt3QixNQUFNLENBQUN0QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQSxhQUFTdUIsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXJFRDs7R0FBTTlCOztLQUFBQTs7QUF1RU4sSUFBTStCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaEMvQixJQUFBQSxVQUFVLEVBQUUrQixLQUFLLENBQUNDLE9BQU4sQ0FBY2hDLFVBRE07QUFFaENDLElBQUFBLElBQUksRUFBRThCLEtBQUssQ0FBQ0MsT0FBTixDQUFjL0I7QUFGWSxHQUFaO0FBQUEsQ0FBeEI7O0FBS0UsK0RBQWVQLG9EQUFPLENBQUNvQyxlQUFELENBQVAsQ0FBeUIvQixXQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlYWRlcmJvYXJkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0RW1haWwsIHNldFBsYXllZEdhbWVzICB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IExlYWRlckJvYXJkID0gKHsgaXNMb2dnZWRJbiwgdXNlcn0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BsYXllckRhdGEsIHNldFBsYXllckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXR1c1wiKTtcclxuICAgICAgICBjb25zdCB0b3RhbHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbHNjb3JlXCIpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0JyxcclxuICAgICAgICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lLCB1c2VybmFtZSwgc3RhdHVzLCB0b3RhbHNjb3JlIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgICBzZXRUb3RhbFNjb3JlKHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlKTtcclxuICAgICAgICAgICAgc2V0UGxheWVyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEpOyBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRmVhdHVyZVBhZ2VJbWFnZX0+XHJcbiAgICA8TmF2YmFyVXNlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyRW1haWw9e3VzZXIuZW1haWx9Lz5cclxuICAgIDxUYWJsZSBzdHJpcGVkPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgPHRoPlRvdGFsIFNjb3JlPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAge3BsYXllckRhdGEubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpbmRleCArIDF9PC90aD5cclxuICAgICAgICAgICAgPHRkPntwbGF5ZXIudXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntwbGF5ZXIuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLnRvdGFsc2NvcmV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgaXNMb2dnZWRJbjogc3RhdGUucmVkdWNlci5pc0xvZ2dlZEluLFxyXG4gICAgdXNlcjogc3RhdGUucmVkdWNlci51c2VyLFxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMZWFkZXJCb2FyZCk7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhYmxlIiwiQnV0dG9uIiwiTmF2YmFyIiwiTmF2YmFyVXNlciIsInN0eWxlcyIsImNvbm5lY3QiLCJ1c2VEaXNwYXRjaCIsInNldEVtYWlsIiwic2V0UGxheWVkR2FtZXMiLCJBeGlvcyIsIkxlYWRlckJvYXJkIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidG90YWxzY29yZSIsInNldFRvdGFsU2NvcmUiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsImdhbWVuYW1lIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsIkZlYXR1cmVQYWdlSW1hZ2UiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=