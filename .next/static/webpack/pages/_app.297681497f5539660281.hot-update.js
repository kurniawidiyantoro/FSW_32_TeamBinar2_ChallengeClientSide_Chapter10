"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/reducer/index.js":
/*!********************************!*\
  !*** ./redux/reducer/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  user: {},
  // email: typeof window !== 'undefined' ? localStorage.getItem('email') || '' : '',
  password:  true ? localStorage.getItem('password') || '' : 0,
  error: ''
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        email: action.payload.email
      });

    case 'SET_PLAYED_GAMES':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'LOGIN_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: ''
      });

    case 'LOGIN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        token: action.payload.token,
        email: action.payload.email,
        error: ''
      });

    case 'LOGIN_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOTc2ODE0OTdmNTUzOTY2MDI4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsSUFBSSxFQUFFLEVBRGE7QUFFbkI7QUFDQUMsRUFBQUEsUUFBUSxFQUFFLFFBQWdDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsS0FBb0MsRUFBcEUsR0FBeUUsQ0FIaEU7QUFJbkJDLEVBQUFBLEtBQUssRUFBRTtBQUpZLENBQXJCO0FBT1MsU0FBU0MsT0FBVCxHQUFnRDtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJQLFlBQXNCO0FBQUEsTUFBUlEsTUFBUTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsNkNBQVdGLEtBQVg7QUFBa0JOLFFBQUFBLElBQUksRUFBRU8sTUFBTSxDQUFDRSxPQUFQLENBQWVULElBQXZDO0FBQTZDVSxRQUFBQSxLQUFLLEVBQUVILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQztBQUFuRTs7QUFDRixTQUFLLGtCQUFMO0FBQ0UsNkNBQVlKLEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0UsT0FBN0I7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsNkNBQVlILEtBQVo7QUFBbUJLLFFBQUFBLE9BQU8sRUFBRSxJQUE1QjtBQUFrQ1AsUUFBQUEsS0FBSyxFQUFFO0FBQXpDOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZRSxLQUFaO0FBQW1CSyxRQUFBQSxPQUFPLEVBQUUsS0FBNUI7QUFBbUNDLFFBQUFBLEtBQUssRUFBRUwsTUFBTSxDQUFDRSxPQUFQLENBQWVHLEtBQXpEO0FBQWdFRixRQUFBQSxLQUFLLEVBQUVILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxLQUF0RjtBQUE2Rk4sUUFBQUEsS0FBSyxFQUFFO0FBQXBHOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZRSxLQUFaO0FBQW1CSyxRQUFBQSxPQUFPLEVBQUUsS0FBNUI7QUFBbUNQLFFBQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDRTtBQUFqRDs7QUFDRjtBQUNFLGFBQU9ILEtBQVA7QUFaSjtBQWNEO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjoge30sXHJcbiAgLy8gZW1haWw6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykgfHwgJycgOiAnJyxcclxuICBwYXNzd29yZDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKSB8fCAnJyA6ICcnLFxyXG4gIGVycm9yOiAnJ1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ1NFVF9VU0VSJzpcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLCBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWx9O1xyXG4gICAgICBjYXNlICdTRVRfUExBWUVEX0dBTUVTJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgY2FzZSAnTE9HSU5fUkVRVUVTVCc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiAnJyB9O1xyXG4gICAgICBjYXNlICdMT0dJTl9TVUNDRVNTJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbiwgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLCBlcnJvcjogJycgfTtcclxuICAgICAgY2FzZSAnTE9HSU5fRkFJTFVSRSc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTsgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBhc3N3b3JkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJlbWFpbCIsImxvYWRpbmciLCJ0b2tlbiJdLCJzb3VyY2VSb290IjoiIn0=