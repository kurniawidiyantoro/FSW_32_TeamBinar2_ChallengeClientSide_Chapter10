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
      var response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get', {
                username: username,
                status: status,
                totalscore: totalscore
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 3:
              response = _context.sent;
              console.log(response.data.data);
              setUsername(response.data.data.username);
              setStatus(response.data.data.status);
              setTotalScore(response.data.data.totalscore);
              setPlayerData(response.data.data);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log("Internal Server Error !");

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
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
      lineNumber: 44,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Table, {
      striped: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Total Score"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
        children: playerData.map(function (player, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              scope: "row",
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.totalscore
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuYWI1ZGM3ZTAyODBlYmE1ZTQ5ZjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFVBQXNCLFFBQXRCQSxVQUFzQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDekMsa0JBQWdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFvQ2pCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9rQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ25CLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9vQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWVaLCtDQUFBLENBQVcsdUNBQVgsRUFDdkI7QUFBRUksZ0JBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZRSxnQkFBQUEsTUFBTSxFQUFOQSxNQUFaO0FBQW9CRSxnQkFBQUEsVUFBVSxFQUFWQTtBQUFwQixlQUR1QixFQUV2QjtBQUNBTSxnQkFBQUEsT0FBTyxFQUFFO0FBQ0xDLGtCQUFBQSxhQUFhLGtCQUFXQyxLQUFYO0FBRFI7QUFEVCxlQUZ1QixDQUZmOztBQUFBO0FBRUZDLGNBQUFBLFFBRkU7QUFVWkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUExQjtBQUNBZixjQUFBQSxXQUFXLENBQUNZLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUFkLENBQW1CaEIsUUFBcEIsQ0FBWDtBQUNBRyxjQUFBQSxTQUFTLENBQUNVLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUFkLENBQW1CZCxNQUFwQixDQUFUO0FBQ0FHLGNBQUFBLGFBQWEsQ0FBQ1EsUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQWQsQ0FBbUJaLFVBQXBCLENBQWI7QUFDQUcsY0FBQUEsYUFBYSxDQUFDTSxRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBZixDQUFiO0FBZFk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQlJGLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaOztBQWhCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQUCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBb0JBdkIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1p1QixJQUFBQSxPQUFPO0FBQ1IsR0FGTSxFQUVKLEVBRkksQ0FBVDtBQUtGLHNCQUNFO0FBQUssYUFBUyxFQUFFakIsb0ZBQWhCO0FBQUEsNEJBQ0EsOERBQUMsMkRBQUQ7QUFBWSxnQkFBVSxFQUFFTyxVQUF4QjtBQUFvQyxlQUFTLEVBQUVDLElBQUksQ0FBQ21CO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBLDhEQUFDLDhDQUFEO0FBQU8sYUFBTyxNQUFkO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQUEsa0JBQ0daLFVBQVUsQ0FBQ2EsR0FBWCxDQUFlLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDhCQUNkO0FBQUEsb0NBQ0U7QUFBSSxtQkFBSyxFQUFDLEtBQVY7QUFBQSx3QkFBaUJBLEtBQUssR0FBRztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSx3QkFBS0QsTUFBTSxDQUFDcEI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBQSx3QkFBS29CLE1BQU0sQ0FBQ2xCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUEsd0JBQUtrQixNQUFNLENBQUNoQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQSxhQUFTaUIsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXhERDs7R0FBTXhCOztLQUFBQTs7QUEwRE4sSUFBTXlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaEN6QixJQUFBQSxVQUFVLEVBQUV5QixLQUFLLENBQUNDLE9BQU4sQ0FBYzFCLFVBRE07QUFFaENDLElBQUFBLElBQUksRUFBRXdCLEtBQUssQ0FBQ0MsT0FBTixDQUFjekI7QUFGWSxHQUFaO0FBQUEsQ0FBeEI7O0FBS0UsK0RBQWVQLG9EQUFPLENBQUM4QixlQUFELENBQVAsQ0FBeUJ6QixXQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlYWRlcmJvYXJkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0RW1haWwsIHNldFBsYXllZEdhbWVzICB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IExlYWRlckJvYXJkID0gKHsgaXNMb2dnZWRJbiwgdXNlcn0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BsYXllckRhdGEsIHNldFBsYXllckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQnLFxyXG4gICAgICAgICAgICB7IHVzZXJuYW1lLCBzdGF0dXMsIHRvdGFsc2NvcmUgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgIHNldFRvdGFsU2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmUpO1xyXG4gICAgICAgIHNldFBsYXllckRhdGEocmVzcG9uc2UuZGF0YS5kYXRhKTsgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRmVhdHVyZVBhZ2VJbWFnZX0+XHJcbiAgICA8TmF2YmFyVXNlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyRW1haWw9e3VzZXIuZW1haWx9Lz5cclxuICAgIDxUYWJsZSBzdHJpcGVkPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgPHRoPlRvdGFsIFNjb3JlPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAge3BsYXllckRhdGEubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpbmRleCArIDF9PC90aD5cclxuICAgICAgICAgICAgPHRkPntwbGF5ZXIudXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntwbGF5ZXIuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLnRvdGFsc2NvcmV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgaXNMb2dnZWRJbjogc3RhdGUucmVkdWNlci5pc0xvZ2dlZEluLFxyXG4gICAgdXNlcjogc3RhdGUucmVkdWNlci51c2VyLFxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMZWFkZXJCb2FyZCk7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhYmxlIiwiQnV0dG9uIiwiTmF2YmFyIiwiTmF2YmFyVXNlciIsInN0eWxlcyIsImNvbm5lY3QiLCJ1c2VEaXNwYXRjaCIsInNldEVtYWlsIiwic2V0UGxheWVkR2FtZXMiLCJBeGlvcyIsIkxlYWRlckJvYXJkIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidG90YWxzY29yZSIsInNldFRvdGFsU2NvcmUiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsImdldERhdGEiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJGZWF0dXJlUGFnZUltYWdlIiwiZW1haWwiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=