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
              lineNumber: 63,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Game Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Total Score"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
          children: playerData.map(function (player, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                scope: "row",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.gamename
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.totalscore
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 13
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 11
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuMjI1NmM3YWI0MmFmZWVjZWM3YTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFVBQXNCLFFBQXRCQSxVQUFzQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDekMsa0JBQWdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmYsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2dCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFvQ2pCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9rQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFvQ25CLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9vQixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUVBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FERjtBQUVOQyxjQUFBQSxLQUZNLEdBRUVGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUZGO0FBR05YLGNBQUFBLFFBSE0sR0FHS1UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBSEw7QUFJTlQsY0FBQUEsTUFKTSxHQUlHUSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FKSDtBQUtOUCxjQUFBQSxVQUxNLEdBS09NLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQUxQ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QUE7QUFBQSx1QkFIRixlQUlFO0FBQUEsMEJBQUthLE1BQU0sQ0FBQ3hCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQUtFO0FBQUEsMEJBQUt3QixNQUFNLENBQUN0QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQSxlQUFTdUIsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBM0VEOztHQUFNOUI7O0tBQUFBOztBQTZFTixJQUFNK0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQy9CLElBQUFBLFVBQVUsRUFBRStCLEtBQUssQ0FBQ0MsT0FBTixDQUFjaEMsVUFETTtBQUVoQ0MsSUFBQUEsSUFBSSxFQUFFOEIsS0FBSyxDQUFDQyxPQUFOLENBQWMvQjtBQUZZLEdBQVo7QUFBQSxDQUF4Qjs7QUFLRSwrREFBZVAsb0RBQU8sQ0FBQ29DLGVBQUQsQ0FBUCxDQUF5Qi9CLFdBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVhZGVyYm9hcmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IE5hdmJhclVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyVXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRFbWFpbCwgc2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBpc0xvZ2dlZEluLCB1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdHVzXCIpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsc2NvcmVcIik7XHJcbiAgICAgICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcydcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQnLFxyXG4gICAgICAgICAgICAgICAgeyBlbWFpbCwgZ2FtZW5hbWUsIHVzZXJuYW1lLCBzdGF0dXMsIHRvdGFsc2NvcmUgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShyZXNwb25zZS5kYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2UuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIHNldFRvdGFsU2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmUpO1xyXG4gICAgICAgICAgICBzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7IFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgIDxOYXZiYXJVc2VyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXJFbWFpbD17dXNlci5lbWFpbH0vPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgPFRhYmxlIHN0cmlwZWQ+XHJcbiAgICAgICAgXHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoPkdhbWUgTmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgIDx0aD5Ub3RhbCBTY29yZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtwbGF5ZXJEYXRhLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLmdhbWVuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cGxheWVyLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3BsYXllci50b3RhbHNjb3JlfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgICBcclxuICAgIDwvVGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICAgIHVzZXI6IHN0YXRlLnJlZHVjZXIudXNlcixcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGVhZGVyQm9hcmQpO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIkJ1dHRvbiIsIk5hdmJhciIsIk5hdmJhclVzZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJzZXRFbWFpbCIsInNldFBsYXllZEdhbWVzIiwiQXhpb3MiLCJMZWFkZXJCb2FyZCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJnZXREYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1haWwiLCJnYW1lbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJGZWF0dXJlUGFnZUltYWdlIiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9