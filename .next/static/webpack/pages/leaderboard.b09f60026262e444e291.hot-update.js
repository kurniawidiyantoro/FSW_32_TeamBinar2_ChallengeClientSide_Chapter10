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

  var handleGamecoinClick = function handleGamecoinClick() {
    window.location.replace('/leaderboard/gamecoin');
  };

  var handleGamedadulick = function handleGamedadulick() {
    window.location.replace('/leaderboard/gamedice');
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
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/gamehistory/get/rank', {
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
      lineNumber: 66,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
      color: "primary",
      onClick: handleBackClick,
      className: "mt-3",
      children: "Kembali"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "d-flex flex-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
        color: "primary",
        onClick: handleGamecoinClick,
        className: "mt-3",
        children: "Game Coin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
        color: "primary",
        onClick: handleGamedadulick,
        className: "mt-3",
        children: "Game Dadu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "mt-4",
      children: playerData.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
        active: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Table, {
          striped: true,
          datasource: slicedPlayerData,
          pagination: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Game Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                children: "Total Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
            children: slicedPlayerData.map(function (player, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                  scope: "row",
                  children: index + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.gamename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                  children: player.totalscore
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 25
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
          lineNumber: 105,
          columnNumber: 17
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuYjA5ZjYwMDI2MjYyZTQ0NGUyOTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUN6QyxrQkFBZ0NiLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9jLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQW9DakIsK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBQUEsTUFBT2tCLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQW9DbkIsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT29CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQXNDckIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3NCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdkIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT3dCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FGSDs7QUFHQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUJILElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FB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O0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXVCRSw4REFBQyw2Q0FBRDtBQUNFLGlCQUFPLEVBQUU5QixXQURYO0FBRUUsa0JBQVEsRUFBRUUsUUFGWjtBQUdFLGVBQUssRUFBRUosVUFBVSxDQUFDNkIsTUFIcEI7QUFJRSxrQkFBUSxFQUFFMUIsY0FKWjtBQUtFLHlCQUFlLE1BTGpCO0FBTUUsMEJBQWdCLEVBQUUsMEJBQUM4QixPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDbkM3QixZQUFBQSxXQUFXLENBQUM2QixJQUFELENBQVg7QUFDQS9CLFlBQUFBLGNBQWMsQ0FBQyxDQUFELENBQWQ7QUFDRDtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJGO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFzREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRETCxDQWxIRDs7R0FBTVo7O0tBQUFBOztBQW9ITixJQUFNNEMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQzVDLElBQUFBLFVBQVUsRUFBRTRDLEtBQUssQ0FBQ0MsT0FBTixDQUFjN0MsVUFETTtBQUVoQ0MsSUFBQUEsSUFBSSxFQUFFMkMsS0FBSyxDQUFDQyxPQUFOLENBQWM1QztBQUZZLEdBQVo7QUFBQSxDQUF4Qjs7QUFLRSwrREFBZVAsb0RBQU8sQ0FBQ2lELGVBQUQsQ0FBUCxDQUF5QjVDLFdBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVhZGVyYm9hcmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFNrZWxldG9uLCBQYWdpbmF0aW9uICB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBpc0xvZ2dlZEluLCB1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUdhbWVjb2luQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sZWFkZXJib2FyZC9nYW1lY29pbicpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgIGNvbnN0IGhhbmRsZUdhbWVkYWR1bGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xlYWRlcmJvYXJkL2dhbWVkaWNlJyk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvcmFuaycsXHJcbiAgICAgICAgICAgICAgICB7IGVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEucm93cyk7XHJcbiAgICAgICAgICAgIHNldFBsYXllckRhdGEocmVzcG9uc2UuZGF0YS5kYXRhLnJvd3MpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzbGljZWRQbGF5ZXJEYXRhID0gcGxheWVyRGF0YS5zbGljZShcclxuICAgICAgICAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlICogcGFnZVNpemVcclxuICAgICAgKTtcclxuICAgICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxlYWRlcmJvYXJkUGFnZUltYWdlfT5cclxuICAgICAgICAgIDxOYXZiYXJVc2VyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXJFbWFpbD17dXNlci5lbWFpbH0gLz5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfSBjbGFzc05hbWU9J210LTMnPlxyXG4gICAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUdhbWVjb2luQ2xpY2t9IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgICAgICAgICBHYW1lIENvaW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlR2FtZWRhZHVsaWNrfSBjbGFzc05hbWU9J210LTMnPlxyXG4gICAgICAgICAgICAgICAgR2FtZSBEYWR1XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgIHtwbGF5ZXJEYXRhLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b24gYWN0aXZlIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGRhdGFzb3VyY2U9e3NsaWNlZFBsYXllckRhdGF9IHBhZ2luYXRpb249Jyc+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBTY29yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzbGljZWRQbGF5ZXJEYXRhLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLmdhbWVuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci50b3RhbHNjb3JlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsPXtwbGF5ZXJEYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXJcclxuICAgICAgICAgICAgICAgICAgb25TaG93U2l6ZUNoYW5nZT17KGN1cnJlbnQsIHNpemUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYWdlU2l6ZShzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZSgxKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICAgIHVzZXI6IHN0YXRlLnJlZHVjZXIudXNlcixcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGVhZGVyQm9hcmQpO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJUYWJsZSIsIk5hdmJhciIsIk5hdmJhclVzZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJBeGlvcyIsIlNrZWxldG9uIiwiUGFnaW5hdGlvbiIsIkxlYWRlckJvYXJkIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidG90YWxzY29yZSIsInNldFRvdGFsU2NvcmUiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwYWdlU2l6ZSIsInNldFBhZ2VTaXplIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlR2FtZWNvaW5DbGljayIsImhhbmRsZUdhbWVkYWR1bGljayIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lbmFtZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInJvd3MiLCJzbGljZWRQbGF5ZXJEYXRhIiwic2xpY2UiLCJMZWFkZXJib2FyZFBhZ2VJbWFnZSIsImxlbmd0aCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiY3VycmVudCIsInNpemUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9