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
      var token, email, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              _context.prev = 2;

              if (token) {
                _context.next = 8;
                break;
              }

              console.log('Not Authorize !');
              window.location.replace('/login');
              _context.next = 16;
              break;

            case 8:
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get', {
                username: username,
                status: status,
                totalscore: totalscore
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 10:
              response = _context.sent;
              console.log(response.data.data);
              setUsername(response.data.data.username);
              setStatus(response.data.data.status);
              setTotalScore(response.data.data.totalscore);
              setPlayerData(response.data.data);

            case 16:
              ;
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](2);
              console.log("Internal Server Error !");

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 19]]);
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
      lineNumber: 53,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Table, {
      striped: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
            children: "Total Score"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
        children: playerData.map(function (player, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              scope: "row",
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.totalscore
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuMWZiNTU5YzczOTNhMTQ4MjFmM2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFVBQXNCLFFBQXRCQSxVQUFzQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDekMsa0JBQWdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFvQ2pCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9rQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ25CLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9vQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FERjtBQUVOQyxjQUFBQSxLQUZNLEdBRUVGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUZGO0FBQUE7O0FBQUEsa0JBSUhGLEtBSkc7QUFBQTtBQUFBO0FBQUE7O0FBS0pJLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FDLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEI7QUFOSTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFRbUJyQiwr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QUssQ0FBQ0MsT0FBTixDQUFjL0IsVUFETTtBQUVoQ0MsSUFBQUEsSUFBSSxFQUFFNkIsS0FBSyxDQUFDQyxPQUFOLENBQWM5QjtBQUZZLEdBQVo7QUFBQSxDQUF4Qjs7QUFLRSwrREFBZVAsb0RBQU8sQ0FBQ21DLGVBQUQsQ0FBUCxDQUF5QjlCLFdBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVhZGVyYm9hcmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IE5hdmJhclVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyVXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRFbWFpbCwgc2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBpc0xvZ2dlZEluLCB1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0JyxcclxuICAgICAgICAgICAgICAgIHsgdXNlcm5hbWUsIHN0YXR1cywgdG90YWxzY29yZSB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICAgICAgc2V0VG90YWxTY29yZShyZXNwb25zZS5kYXRhLmRhdGEudG90YWxzY29yZSk7XHJcbiAgICAgICAgICAgIHNldFBsYXllckRhdGEocmVzcG9uc2UuZGF0YS5kYXRhKTsgXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZlYXR1cmVQYWdlSW1hZ2V9PlxyXG4gICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfS8+XHJcbiAgICA8VGFibGUgc3RyaXBlZD5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgIDx0aD5Vc2VybmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgIDx0aD5Ub3RhbCBTY29yZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtwbGF5ZXJEYXRhLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3BsYXllci50b3RhbHNjb3JlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC9UYWJsZT5cclxuICA8L2Rpdj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICAgIHVzZXI6IHN0YXRlLnJlZHVjZXIudXNlcixcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGVhZGVyQm9hcmQpO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIkJ1dHRvbiIsIk5hdmJhciIsIk5hdmJhclVzZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJzZXRFbWFpbCIsInNldFBsYXllZEdhbWVzIiwiQXhpb3MiLCJMZWFkZXJCb2FyZCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJnZXREYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJkYXRhIiwiRmVhdHVyZVBhZ2VJbWFnZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==