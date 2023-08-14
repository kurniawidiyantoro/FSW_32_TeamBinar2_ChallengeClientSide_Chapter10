"use strict";
self["webpackHotUpdate_N_E"]("pages/gamelist",{

/***/ "./pages/components/navbarUser.js":
/*!****************************************!*\
  !*** ./pages/components/navbarUser.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\components\\navbarUser.js",
    _s = $RefreshSig$();






function NavbarUser(_ref) {
  _s();

  var userEmail = _ref.userEmail,
      totalScore = _ref.totalScore;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  useEffect(function () {
    dispatch(fetchUserTotalScore(userEmail));
  }, [dispatch, userEmail]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {
          className: "ps-3",
          children: ["Welcome, ".concat(userEmail), totalScore !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "ps-2",
            children: ["Total Score: ", totalScore]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
        className: "ms-auto",
        navbar: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
            href: "/editprofile",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
            href: "/",
            className: "pe-3",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
    totalScore: state.reducer.totalScore
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuZDhkNzQ2YTc0MWFhNThhZjFkODkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU1EsVUFBVCxPQUErQztBQUFBOztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDN0MsTUFBTUMsUUFBUSxHQUFHVCx3REFBVyxFQUE1QjtBQUVBVSxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkRCxJQUFBQSxRQUFRLENBQUNFLG1CQUFtQixDQUFDSixTQUFELENBQXBCLENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0UsUUFBRCxFQUFXRixTQUFYLENBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsOENBQUQ7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFxQixVQUFJLE1BQXpCO0FBQTBCLFlBQU0sRUFBQyxJQUFqQztBQUFBLDhCQUNFLDhEQUFDLCtDQUFEO0FBQUEsK0JBQ0EsOERBQUMsbURBQUQ7QUFBYSxtQkFBUyxFQUFDLE1BQXZCO0FBQUEsd0NBQTJDQSxTQUEzQyxHQUNDQyxVQUFVLEtBQUtJLFNBQWYsaUJBQ0M7QUFBTSxxQkFBUyxFQUFDLE1BQWhCO0FBQUEsd0NBQXFDSixVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0UsOERBQUMsMkNBQUQ7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBeUIsY0FBTSxNQUEvQjtBQUFBLGdDQUNFLDhEQUFDLCtDQUFEO0FBQUEsaUNBQ0UsOERBQUMsK0NBQUQ7QUFBUyxnQkFBSSxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsOERBQUMsK0NBQUQ7QUFBQSxpQ0FDRSw4REFBQywrQ0FBRDtBQUFTLGdCQUFJLEVBQUMsR0FBZDtBQUFrQixxQkFBUyxFQUFDLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBNUJRRjtVQUNVTjs7O0tBRFZNOztBQTZCVCxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDUCxJQUFBQSxTQUFTLEVBQUVPLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxLQURTO0FBRWxDUixJQUFBQSxVQUFVLEVBQUVNLEtBQUssQ0FBQ0MsT0FBTixDQUFjUDtBQUZRLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQSwrREFBZVQsb0RBQU8sQ0FBQ2MsZUFBRCxDQUFQLENBQXlCUCxVQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyVXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZiYXJVc2VyKHsgdXNlckVtYWlsLCB0b3RhbFNjb3JlIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJUb3RhbFNjb3JlKHVzZXJFbWFpbCkpO1xyXG4gIH0sIFtkaXNwYXRjaCwgdXNlckVtYWlsXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBjbGFzc05hbWU9XCJwcy0zXCI+e2BXZWxjb21lLCAke3VzZXJFbWFpbH1gfVxyXG4gICAgICAgIHt0b3RhbFNjb3JlICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHMtMlwiPlRvdGFsIFNjb3JlOiB7dG90YWxTY29yZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICBcclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0cHJvZmlsZVwiPkVkaXQgUHJvZmlsZTwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBlLTNcIj5Mb2dvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgdXNlckVtYWlsOiBzdGF0ZS5yZWR1Y2VyLmVtYWlsLFxyXG4gIHRvdGFsU2NvcmU6IHN0YXRlLnJlZHVjZXIudG90YWxTY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2YmFyVXNlcik7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJ1c2VEaXNwYXRjaCIsIk5hdmJhciIsIk5hdmJhckJyYW5kIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJOYXZiYXJVc2VyIiwidXNlckVtYWlsIiwidG90YWxTY29yZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyVG90YWxTY29yZSIsInVuZGVmaW5lZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==