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

  var handleBackClick = function handleBackClick() {
    window.location.replace('/gamelist');
  };

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
              gamename = localStorage.getItem("gamename");
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
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get/all', {
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
      lineNumber: 62,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "mt-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Table, {
        striped: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Game Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Total Score"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
          children: playerData.map(function (player, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                scope: "row",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.gamename
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.totalscore
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuMzlhMGZhODBjZDE0MDEzY2MwMzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNYSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxVQUFzQixRQUF0QkEsVUFBc0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQ3pDLGtCQUFnQ2IsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT2MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBNEJmLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9nQixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBb0NqQiwrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFBQSxNQUFPa0IsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBb0NuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPb0IsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFHQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsV0FBeEI7QUFDRCxHQUZIOztBQUtBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FERjtBQUVOQyxjQUFBQSxLQUZNLEdBRUVGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUZGO0FBR05mLGNBQUFBLFFBSE0sR0FHS2MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBSEw7QUFJTmIsY0FBQUEs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b250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IE5hdmJhclVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyVXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRFbWFpbCwgc2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBpc0xvZ2dlZEluLCB1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVsaXN0Jyk7XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXR1c1wiKTtcclxuICAgICAgICBjb25zdCB0b3RhbHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbHNjb3JlXCIpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lbmFtZVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvYWxsJyxcclxuICAgICAgICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lLCB1c2VybmFtZSwgc3RhdHVzLCB0b3RhbHNjb3JlIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgICBzZXRUb3RhbFNjb3JlKHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlKTtcclxuICAgICAgICAgICAgc2V0UGxheWVyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEpOyBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRmVhdHVyZVBhZ2VJbWFnZX0+XHJcbiAgICA8TmF2YmFyVXNlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyRW1haWw9e3VzZXIuZW1haWx9Lz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZD5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+R2FtZSBOYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Ub3RhbCBTY29yZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtwbGF5ZXJEYXRhLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIuZ2FtZW5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwic2V0RW1haWwiLCJzZXRQbGF5ZWRHYW1lcyIsIkF4aW9zIiwiTGVhZGVyQm9hcmQiLCJpc0xvZ2dlZEluIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0b3RhbHNjb3JlIiwic2V0VG90YWxTY29yZSIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZ2V0RGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVtYWlsIiwiZ2FtZW5hbWUiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJkYXRhIiwiRmVhdHVyZVBhZ2VJbWFnZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==