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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      currentPage = _useState5[0],
      setCurrentPage = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10),
      pageSize = _useState6[0],
      setPageSize = _useState6[1];

  var handleBackClick = function handleBackClick() {
    window.location.replace('/gamelist');
  };

  var getData = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, email, gamename, response;
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
              _context.next = 14;
              break;

            case 8:
              gamename = 'gamerps';
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get/rank', {
                email: email,
                gamename: gamename
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 11:
              response = _context.sent;
              console.log(response.data.data.rows);
              setPlayerData(response.data.data.rows);

            case 14:
              ;
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              console.log("Internal Server Error !");

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 17]]);
    }));

    return function getData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var slicedPlayerData = playerData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
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
      lineNumber: 61,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "mt-4",
      children: playerData.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
        active: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__.Table, {
          striped: true,
          dataSource: slicedPlayerData,
          pagination: false,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Game Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Total Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
            children: slicedPlayerData.map(function (player, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  scope: "row",
                  children: index + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.gamename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.totalscore
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 25
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Pagination, {
          current: currentPage,
          pageSize: pageSize,
          total: playerData.length,
          onChange: setCurrentPage,
          showSizeChanger: true,
          onShowSizeChange: function onShowSizeChange(current, size) {
            setPageSize(size);
            setCurrentPage(1);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_11__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, _this);
};

_s(LeaderBoard, "P8t+WXOpBoOMspVR4V9Ut/mPMNo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuMTI5MmEwMWNlOGQ5MzVlNzZiZDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUN6QyxrQkFBZ0NmLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmpCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9rQixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBb0NuQiwrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFBQSxNQUFPb0IsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBb0NyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPc0IsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBc0N2QiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPd0IsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBZ0N6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPMEIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsV0FBeEI7QUFDRCxHQUZIOztBQUtBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZ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QUFDaEMxQyxJQUFBQSxVQUFVLEVBQUUwQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzNDLFVBRE07QUFFaENDLElBQUFBLElBQUksRUFBRXlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjMUM7QUFGWSxHQUFaO0FBQUEsQ0FBeEI7O0FBS0UsK0RBQWVULG9EQUFPLENBQUNpRCxlQUFELENBQVAsQ0FBeUIxQyxXQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlYWRlcmJvYXJkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IE5hdmJhclVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyVXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRFbWFpbCwgc2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiwgUGFnaW5hdGlvbiAgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IExlYWRlckJvYXJkID0gKHsgaXNMb2dnZWRJbiwgdXNlcn0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BsYXllckRhdGEsIHNldFBsYXllckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoMTApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVsaXN0Jyk7XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0L3JhbmsnLFxyXG4gICAgICAgICAgICAgICAgeyBlbWFpbCwgZ2FtZW5hbWUgfSxcclxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLnJvd3MpO1xyXG4gICAgICAgICAgICBzZXRQbGF5ZXJEYXRhKHJlc3BvbnNlLmRhdGEuZGF0YS5yb3dzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2xpY2VkUGxheWVyRGF0YSA9IHBsYXllckRhdGEuc2xpY2UoXHJcbiAgICAgICAgKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZSxcclxuICAgICAgICBjdXJyZW50UGFnZSAqIHBhZ2VTaXplXHJcbiAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgICAgICAgIDxOYXZiYXJVc2VyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXJFbWFpbD17dXNlci5lbWFpbH0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAge3BsYXllckRhdGEubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBhY3RpdmUgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgZGF0YVNvdXJjZT17c2xpY2VkUGxheWVyRGF0YX0gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgU2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c2xpY2VkUGxheWVyRGF0YS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5nYW1lbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17cGxheWVyRGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG9uU2hvd1NpemVDaGFuZ2U9eyhjdXJyZW50LCBzaXplKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwic2V0RW1haWwiLCJzZXRQbGF5ZWRHYW1lcyIsIkF4aW9zIiwiU2tlbGV0b24iLCJQYWdpbmF0aW9uIiwiTGVhZGVyQm9hcmQiLCJpc0xvZ2dlZEluIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0b3RhbHNjb3JlIiwic2V0VG90YWxTY29yZSIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJnZXREYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiZ2FtZW5hbWUiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJyb3dzIiwic2xpY2VkUGxheWVyRGF0YSIsInNsaWNlIiwiRmVhdHVyZVBhZ2VJbWFnZSIsImxlbmd0aCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiY3VycmVudCIsInNpemUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9