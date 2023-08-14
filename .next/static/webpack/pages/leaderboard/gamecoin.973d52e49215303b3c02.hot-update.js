"use strict";
self["webpackHotUpdate_N_E"]("pages/leaderboard/gamecoin",{

/***/ "./pages/leaderboard/gamecoin.js":
/*!***************************************!*\
  !*** ./pages/leaderboard/gamecoin.js ***!
  \***************************************/
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


var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\leaderboard\\gamecoin.js",
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

  var handleGamerpsClick = function handleGamerpsClick() {
    window.location.replace('/leaderboard');
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
              gamename = 'gamecoin';
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
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().GamecoinPageImage),
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
        onClick: handleGamerpsClick,
        className: "mt-3",
        children: "Game RPS"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQvZ2FtZWNvaW4uOTczZDUyZTQ5MjE1MzAzYjNjMDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUN6QyxrQkFBZ0NiLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9jLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPZ0IsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQW9DakIsK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBQUEsTUFBT2tCLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQW9DbkIsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT29CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQXNDckIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3NCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdkIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT3dCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFdBQXhCO0FBQ0QsR0FGSDs7QUFHRSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JILElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMs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QURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBdUJFLDhEQUFDLDZDQUFEO0FBQ0UsaUJBQU8sRUFBRTlCLFdBRFg7QUFFRSxrQkFBUSxFQUFFRSxRQUZaO0FBR0UsZUFBSyxFQUFFSixVQUFVLENBQUM2QixNQUhwQjtBQUlFLGtCQUFRLEVBQUUxQixjQUpaO0FBS0UseUJBQWUsTUFMakI7QUFNRSwwQkFBZ0IsRUFBRSwwQkFBQzhCLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUNuQzdCLFlBQUFBLFdBQVcsQ0FBQzZCLElBQUQsQ0FBWDtBQUNBL0IsWUFBQUEsY0FBYyxDQUFDLENBQUQsQ0FBZDtBQUNEO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkY7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQXNERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNERMLENBbEhEOztHQUFNWjs7S0FBQUE7O0FBb0hOLElBQU00QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDNUMsSUFBQUEsVUFBVSxFQUFFNEMsS0FBSyxDQUFDQyxPQUFOLENBQWM3QyxVQURNO0FBRWhDQyxJQUFBQSxJQUFJLEVBQUUyQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzVDO0FBRlksR0FBWjtBQUFBLENBQXhCOztBQUtFLCtEQUFlUCxvREFBTyxDQUFDaUQsZUFBRCxDQUFQLENBQXlCNUMsV0FBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWFkZXJib2FyZC9nYW1lY29pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU2tlbGV0b24sIFBhZ2luYXRpb24gIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBMZWFkZXJCb2FyZCA9ICh7IGlzTG9nZ2VkSW4sIHVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG90YWxzY29yZSwgc2V0VG90YWxTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBoYW5kbGVHYW1lcnBzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sZWFkZXJib2FyZCcpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgY29uc3QgaGFuZGxlR2FtZWRhZHVsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbGVhZGVyYm9hcmQvZ2FtZWRpY2UnKTtcclxuICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCk9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lY29pbic7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvcmFuaycsXHJcbiAgICAgICAgICAgICAgICB7IGVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEucm93cyk7XHJcbiAgICAgICAgICAgIHNldFBsYXllckRhdGEocmVzcG9uc2UuZGF0YS5kYXRhLnJvd3MpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzbGljZWRQbGF5ZXJEYXRhID0gcGxheWVyRGF0YS5zbGljZShcclxuICAgICAgICAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlICogcGFnZVNpemVcclxuICAgICAgKTtcclxuICAgICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkdhbWVjb2luUGFnZUltYWdlfT5cclxuICAgICAgICAgIDxOYXZiYXJVc2VyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXJFbWFpbD17dXNlci5lbWFpbH0gLz5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfSBjbGFzc05hbWU9J210LTMnPlxyXG4gICAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUdhbWVycHNDbGlja30gY2xhc3NOYW1lPSdtdC0zJz5cclxuICAgICAgICAgICAgICAgIEdhbWUgUlBTXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUdhbWVkYWR1bGlja30gY2xhc3NOYW1lPSdtdC0zJz5cclxuICAgICAgICAgICAgICAgIEdhbWUgRGFkdVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgICAgICAgICB7cGxheWVyRGF0YS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBkYXRhc291cmNlPXtzbGljZWRQbGF5ZXJEYXRhfSBwYWdpbmF0aW9uPScnPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgU2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c2xpY2VkUGxheWVyRGF0YS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5nYW1lbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17cGxheWVyRGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG9uU2hvd1NpemVDaGFuZ2U9eyhjdXJyZW50LCBzaXplKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwiQXhpb3MiLCJTa2VsZXRvbiIsIlBhZ2luYXRpb24iLCJMZWFkZXJCb2FyZCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImhhbmRsZUdhbWVycHNDbGljayIsImhhbmRsZUdhbWVkYWR1bGljayIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lbmFtZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInJvd3MiLCJzbGljZWRQbGF5ZXJEYXRhIiwic2xpY2UiLCJHYW1lY29pblBhZ2VJbWFnZSIsImxlbmd0aCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiY3VycmVudCIsInNpemUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9