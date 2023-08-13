"use strict";
self["webpackHotUpdate_N_E"]("pages/leaderboard",{

/***/ "./pages/components/navbarUser.js":
/*!****************************************!*\
  !*** ./pages/components/navbarUser.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\components\\navbarUser.js",
    _s = $RefreshSig$();







function NavbarUser(_ref) {
  _s();

  var userEmail = _ref.userEmail,
      totalscore = _ref.totalscore;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.fetchUserTotalScore)(userEmail));
  }, [dispatch, userEmail]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavbarBrand, {
          className: "ps-3",
          children: ["Welcome, ".concat(userEmail), totalscore !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "ps-2",
            children: ["Total Score: ", totalscore]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
        className: "ms-auto",
        navbar: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            href: "/editprofile",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            href: "/",
            className: "pe-3",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(NavbarUser, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];
});

_c = NavbarUser;

var mapStateToProps = function mapStateToProps(state) {
  return {
    userEmail: state.reducer.email,
    totalscore: state.reducer.totalscore
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(NavbarUser));

var _c;

$RefreshReg$(_c, "NavbarUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuN2ZlZGUxZmE0MGEzZWMzNDhhYmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU1UsVUFBVCxPQUErQztBQUFBOztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDN0MsTUFBTUMsUUFBUSxHQUFHVix3REFBVyxFQUE1QjtBQUVBRixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFksSUFBQUEsUUFBUSxDQUFDSixrRUFBbUIsQ0FBQ0UsU0FBRCxDQUFwQixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNFLFFBQUQsRUFBV0YsU0FBWCxDQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFDLE1BQWQ7QUFBcUIsVUFBSSxNQUF6QjtBQUEwQixZQUFNLEVBQUMsSUFBakM7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBLCtCQUNBLDhEQUFDLG1EQUFEO0FBQWEsbUJBQVMsRUFBQyxNQUF2QjtBQUFBLHdDQUEyQ0EsU0FBM0MsR0FDQ0MsVUFBVSxLQUFLRSxTQUFmLGlCQUNDO0FBQU0scUJBQVMsRUFBQyxNQUFoQjtBQUFBLHdDQUFxQ0YsVUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFLDhEQUFDLDJDQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGNBQU0sTUFBL0I7QUFBQSxnQ0FDRSw4REFBQywrQ0FBRDtBQUFBLGlDQUNFLDhEQUFDLCtDQUFEO0FBQVMsZ0JBQUksRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLDhEQUFDLCtDQUFEO0FBQUEsaUNBQ0UsOERBQUMsK0NBQUQ7QUFBUyxnQkFBSSxFQUFDLEdBQWQ7QUFBa0IscUJBQVMsRUFBQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQTVCUUY7VUFDVVA7OztLQURWTzs7QUE2QlQsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0wsSUFBQUEsU0FBUyxFQUFFSyxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsS0FEUztBQUVsQ04sSUFBQUEsVUFBVSxFQUFFSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0w7QUFGUSxHQUFaO0FBQUEsQ0FBeEI7O0FBS0EsK0RBQWVWLG9EQUFPLENBQUNhLGVBQUQsQ0FBUCxDQUF5QkwsVUFBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL25hdmJhclVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2SXRlbSwgTmF2TGlua30gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGZldGNoVXNlclRvdGFsU2NvcmUgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb24nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmJhclVzZXIoeyB1c2VyRW1haWwsIHRvdGFsc2NvcmUgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlclRvdGFsU2NvcmUodXNlckVtYWlsKSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCB1c2VyRW1haWxdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGNsYXNzTmFtZT1cInBzLTNcIj57YFdlbGNvbWUsICR7dXNlckVtYWlsfWB9XHJcbiAgICAgICAge3RvdGFsc2NvcmUgIT09IHVuZGVmaW5lZCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcy0yXCI+VG90YWwgU2NvcmU6IHt0b3RhbHNjb3JlfTwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2VkaXRwcm9maWxlXCI+RWRpdCBQcm9maWxlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicGUtM1wiPkxvZ291dDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICB1c2VyRW1haWw6IHN0YXRlLnJlZHVjZXIuZW1haWwsXHJcbiAgdG90YWxzY29yZTogc3RhdGUucmVkdWNlci50b3RhbHNjb3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShOYXZiYXJVc2VyKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsImZldGNoVXNlclRvdGFsU2NvcmUiLCJOYXZiYXJVc2VyIiwidXNlckVtYWlsIiwidG90YWxzY29yZSIsImRpc3BhdGNoIiwidW5kZWZpbmVkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWR1Y2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9