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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.get('http://localhost:3005/gamehistory/get/rank', {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().LeaderboardPageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_4__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
      color: "primary",
      onClick: handleBackClick,
      className: "mt-3",
      children: "Kembali"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "mt-4",
      children: playerData.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
        active: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Table, {
          striped: true,
          datasource: slicedPlayerData,
          pagination: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Rank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Game Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Total Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
            children: slicedPlayerData.map(function (player, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "row",
                  children: index + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.gamename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.totalscore
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 25
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Pagination, {
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
          lineNumber: 91,
          columnNumber: 17
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuM2NmN2ZmZTRiOGEyYTJjYzY5OTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUN6QyxrQkFBZ0NiLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9jLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQW9DakIsK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBQUEsTUFBT2tCLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQW9DbkIsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT29CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQXNDckIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3NCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdkIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT3dCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FGSDs7QUFLQSxNQUFNQyxPQUFPO0FBQUEsNFdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ05DLGNBQUFBLEtBRE0sR0FDRUMsWUFBWSxDQUFDQyxP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QUEsU0FBWTtBQUNoQzFDLElBQUFBLFVBQVUsRUFBRTBDLEtBQUssQ0FBQ0MsT0FBTixDQUFjM0MsVUFETTtBQUVoQ0MsSUFBQUEsSUFBSSxFQUFFeUMsS0FBSyxDQUFDQyxPQUFOLENBQWMxQztBQUZZLEdBQVo7QUFBQSxDQUF4Qjs7QUFLRSwrREFBZVAsb0RBQU8sQ0FBQytDLGVBQUQsQ0FBUCxDQUF5QjFDLFdBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVhZGVyYm9hcmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFNrZWxldG9uLCBQYWdpbmF0aW9uICB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBpc0xvZ2dlZEluLCB1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5yb3dzKTtcclxuICAgICAgICAgICAgc2V0UGxheWVyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEucm93cyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNsaWNlZFBsYXllckRhdGEgPSBwbGF5ZXJEYXRhLnNsaWNlKFxyXG4gICAgICAgIChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemUsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZVxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGVhZGVyYm9hcmRQYWdlSW1hZ2V9PlxyXG4gICAgICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgICAgICAgICB7cGxheWVyRGF0YS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBkYXRhc291cmNlPXtzbGljZWRQbGF5ZXJEYXRhfSBwYWdpbmF0aW9uPScnPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlJhbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgU2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c2xpY2VkUGxheWVyRGF0YS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5nYW1lbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17cGxheWVyRGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG9uU2hvd1NpemVDaGFuZ2U9eyhjdXJyZW50LCBzaXplKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwiQXhpb3MiLCJTa2VsZXRvbiIsIlBhZ2luYXRpb24iLCJMZWFkZXJCb2FyZCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lbmFtZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJkYXRhIiwicm93cyIsInNsaWNlZFBsYXllckRhdGEiLCJzbGljZSIsIkxlYWRlcmJvYXJkUGFnZUltYWdlIiwibGVuZ3RoIiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJjdXJyZW50Iiwic2l6ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=