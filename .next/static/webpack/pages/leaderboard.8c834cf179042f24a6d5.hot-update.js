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
      var token, username, status, totalscore, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem("token");
              username = localStorage.getItem("username");
              status = localStorage.getItem("status");
              totalscore = localStorage.getItem("totalscore");
              _context.prev = 4;

              if (token) {
                _context.next = 10;
                break;
              }

              console.log('Not Authorize !');
              window.location.replace('/login');
              _context.next = 18;
              break;

            case 10:
              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get', {
                username: username,
                status: status,
                totalscore: totalscore
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 12:
              response = _context.sent;
              console.log(response.data.data);
              setUsername(response.data.data.username);
              setStatus(response.data.data.status);
              setTotalScore(response.data.data.totalscore);
              setPlayerData(response.data.data);

            case 18:
              ;
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](4);
              console.log("Internal Server Error !");

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 21]]);
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
      lineNumber: 55,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Table, {
      striped: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Total Score"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
        children: playerData.map(function (player, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              scope: "row",
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.totalscore
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuOGM4MzRjZjE3OTA0MmYyNGE2ZDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFVBQXNCLFFBQXRCQSxVQUFzQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDekMsa0JBQWdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFvQ2pCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9rQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ25CLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9vQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FERjtBQUVOWCxjQUFBQSxRQUZNLEdBRUtVLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUZMO0FBR05ULGNBQUFBLE1BSE0sR0FHR1EsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBSEg7QUFJTlAsY0FBQUEsVUFKTSxHQUlPTSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FKUDtBQUFBOztBQUFBLGtCQU1IRixLQU5HO0FBQUE7QUFBQTtBQUFBOztBQU9KRyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBQyxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFFBQXhCO0FBUkk7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBVW1CcEIsK0NBQUEsQ0FBVyx1Q0FBWCxFQUN2QjtBQUFFSSxnQkFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlFLGdCQUFBQSxNQUFNLEVBQU5BLE1BQVo7QUFBb0JFLGdCQUFBQSxVQUFVLEVBQVZBO0FBQXBCLGVBRHVCLEVBRXZCO0FBQ0FjLGdCQUFBQSxPQUFPLEVBQUU7QUFDTEMsa0JBQUFBLGFBQWEsa0JBQVdWLEtBQVg7QUFEUjtBQURULGVBRnVCLENBVm5COztBQUFBO0FBVUVXLGNBQUFBLFFBVkY7QUFrQlJSLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBMUI7QUFDQXBCLGNBQUFBLFdBQVcsQ0FBQ21CLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CckIsUUFBcEIsQ0FBWDtBQUNBRyxjQUFBQSxTQUFTLENBQUNpQixRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQm5CLE1BQXBCLENBQVQ7QUFDQUcsY0FBQUEsYUFBYSxDQUFDZSxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZCxDQUFtQmpCLFVBQXBCLENBQWI7QUFDQUcsY0FBQUEsYUFBYSxDQUFDYSxRQUFRLENBQUNDLElBQVQsQ0FBY0EsSUFBZixDQUFiOztBQXRCUTtBQXVCUDtBQXZCTztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTJCUlQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7O0FBM0JRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBMLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUErQkF2QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWnVCLElBQUFBLE9BQU87QUFDUixHQUZNLEVBRUosRUFGSSxDQUFUO0FBS0Ysc0JBQ0U7QUFBSyxhQUFTLEVBQUVqQixvRkFBaEI7QUFBQSw0QkFDQSw4REFBQywyREFBRDtBQUFZLGdCQUFVLEVBQUVPLFVBQXhCO0FBQW9DLGVBQVMsRUFBRUMsSUFBSSxDQUFDd0I7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUEsOERBQUMsOENBQUQ7QUFBTyxhQUFPLE1BQWQ7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBQSxrQkFDR2pCLFVBQVUsQ0FBQ2tCLEdBQVgsQ0FBZSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSw4QkFDZDtBQUFBLG9DQUNFO0FBQUksbUJBQUssRUFBQyxLQUFWO0FBQUEsd0JBQWlCQSxLQUFLLEdBQUc7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQUtELE1BQU0sQ0FBQ3pCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUEsd0JBQUt5QixNQUFNLENBQUN2QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFBLHdCQUFLdUIsTUFBTSxDQUFDckI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUEsYUFBU3NCLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FuRUQ7O0dBQU03Qjs7S0FBQUE7O0FBcUVOLElBQU04QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDOUIsSUFBQUEsVUFBVSxFQUFFOEIsS0FBSyxDQUFDQyxPQUFOLENBQWMvQixVQURNO0FBRWhDQyxJQUFBQSxJQUFJLEVBQUU2QixLQUFLLENBQUNDLE9BQU4sQ0FBYzlCO0FBRlksR0FBWjtBQUFBLENBQXhCOztBQUtFLCtEQUFlUCxvREFBTyxDQUFDbUMsZUFBRCxDQUFQLENBQXlCOUIsV0FBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWFkZXJib2FyZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVtYWlsLCBzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBMZWFkZXJCb2FyZCA9ICh7IGlzTG9nZ2VkSW4sIHVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG90YWxzY29yZSwgc2V0VG90YWxTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCk9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXR1c1wiKTtcclxuICAgICAgICBjb25zdCB0b3RhbHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbHNjb3JlXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldCcsXHJcbiAgICAgICAgICAgICAgICB7IHVzZXJuYW1lLCBzdGF0dXMsIHRvdGFsc2NvcmUgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShyZXNwb25zZS5kYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2UuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIHNldFRvdGFsU2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmUpO1xyXG4gICAgICAgICAgICBzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7IFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgIDxOYXZiYXJVc2VyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXJFbWFpbD17dXNlci5lbWFpbH0vPlxyXG4gICAgPFRhYmxlIHN0cmlwZWQ+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICA8dGg+VG90YWwgU2NvcmU8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIDx0Ym9keT5cclxuICAgICAgICB7cGxheWVyRGF0YS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxyXG4gICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3BsYXllci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvVGFibGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJCdXR0b24iLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwic2V0RW1haWwiLCJzZXRQbGF5ZWRHYW1lcyIsIkF4aW9zIiwiTGVhZGVyQm9hcmQiLCJpc0xvZ2dlZEluIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0b3RhbHNjb3JlIiwic2V0VG90YWxTY29yZSIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwiZ2V0RGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJGZWF0dXJlUGFnZUltYWdlIiwiZW1haWwiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=