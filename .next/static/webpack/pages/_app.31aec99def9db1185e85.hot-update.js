"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/reducer/index.js":
/*!********************************!*\
  !*** ./redux/reducer/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userReducer */ "./redux/reducer/userReducer.js");
/* harmony import */ var _navbarReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbarReducer */ "./redux/reducer/navbarReducer.js");
/* harmony import */ var _playedGameReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playedGameReducer */ "./redux/reducer/playedGameReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  user: _userReducer__WEBPACK_IMPORTED_MODULE_0__.default,
  // Add other reducers if needed
  navbar: _navbarReducer__WEBPACK_IMPORTED_MODULE_1__.default,
  playedGames: _playedGameReducer__WEBPACK_IMPORTED_MODULE_2__.default
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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


/***/ }),

/***/ "./redux/reducer/navbarReducer.js":
/*!****************************************!*\
  !*** ./redux/reducer/navbarReducer.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  user: {}
};

var NavbarReducer = function NavbarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    default:
      return state;
  }
};

_c = NavbarReducer;
/* harmony default export */ __webpack_exports__["default"] = (NavbarReducer);

var _c;

$RefreshReg$(_c, "NavbarReducer");

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


/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./redux/reducer/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


 // Import the root reducer you'll create later

var initialState = {}; // Define your initial state here

var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.legacy_createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__.default, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__.default));
/* harmony default export */ __webpack_exports__["default"] = (store);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMWFlYzk5ZGVmOWRiMTE4NWU4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUksV0FBVyxHQUFHSixzREFBZSxDQUFDO0FBQ2xDSyxFQUFBQSxJQUFJLEVBQUVKLGlEQUQ0QjtBQUVsQztBQUNBSyxFQUFBQSxNQUFNLEVBQUdKLG1EQUh5QjtBQUlsQ0ssRUFBQUEsV0FBVyxFQUFFSix1REFBa0JBO0FBSkcsQ0FBRCxDQUFuQztBQVFBLCtEQUFlQyxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSxJQUFNSSxZQUFZLEdBQUc7QUFDbkJILEVBQUFBLElBQUksRUFBRTtBQURhLENBQXJCOztBQUlFLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCRixZQUF5QjtBQUFBLE1BQVhHLE1BQVc7O0FBQ3RELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVMLFFBQUFBLElBQUksRUFBRU0sTUFBTSxDQUFDRTtBQUZmOztBQUtGO0FBQ0UsYUFBT0gsS0FBUDtBQVJKO0FBVUQsQ0FYRDs7S0FBTUQ7QUFhTiwrREFBZUEsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJGO0FBQ0E7Q0FDcUM7O0FBRXJDLElBQU1ELFlBQVksR0FBRyxFQUFyQixFQUF5Qjs7QUFJekIsSUFBTVMsS0FBSyxHQUFHSCx5REFBa0IsQ0FDOUJWLDZDQUQ4QixFQUU5QkksWUFGOEIsRUFHOUJPLHNEQUFlLENBQUNDLGdEQUFELENBSGUsQ0FBaEM7QUFNQSwrREFBZUMsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1eC9yZWR1Y2VyL25hdmJhclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3N0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlclJlZHVjZXInO1xyXG5pbXBvcnQgbmF2YmFyUmVkdWNlciBmcm9tICcuL25hdmJhclJlZHVjZXInO1xyXG5pbXBvcnQgcGxheWVkR2FtZXNSZWR1Y2VyICBmcm9tICcuL3BsYXllZEdhbWVSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAvLyBBZGQgb3RoZXIgcmVkdWNlcnMgaWYgbmVlZGVkXHJcbiAgbmF2YmFyIDogbmF2YmFyUmVkdWNlcixcclxuICBwbGF5ZWRHYW1lczogcGxheWVkR2FtZXNSZWR1Y2VyLFxyXG4gIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjoge30sXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBOYXZiYXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSAnU0VUX1VTRVInOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IE5hdmJhclJlZHVjZXI7XHJcbiAgIiwiaW1wb3J0IHsgbGVnYWN5X2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXInOyAvLyBJbXBvcnQgdGhlIHJvb3QgcmVkdWNlciB5b3UnbGwgY3JlYXRlIGxhdGVyXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTsgLy8gRGVmaW5lIHlvdXIgaW5pdGlhbCBzdGF0ZSBoZXJlXHJcblxyXG5cclxuXHJcbmNvbnN0IHN0b3JlID0gbGVnYWN5X2NyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInVzZXJSZWR1Y2VyIiwibmF2YmFyUmVkdWNlciIsInBsYXllZEdhbWVzUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwidXNlciIsIm5hdmJhciIsInBsYXllZEdhbWVzIiwiaW5pdGlhbFN0YXRlIiwiTmF2YmFyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJsZWdhY3lfY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==