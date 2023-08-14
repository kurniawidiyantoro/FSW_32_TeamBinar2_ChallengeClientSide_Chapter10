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
  email: '',
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

    case 'SET_EMAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        email: action.payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZjIyMTRhMGQ5MWY4MjYxZmZlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsSUFBSSxFQUFFLEVBRGE7QUFFbkJDLEVBQUFBLEtBQUssRUFBRSxFQUZZO0FBR25CO0FBQ0FDLEVBQUFBLFFBQVEsRUFBRSxRQUFnQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEtBQW9DLEVBQXBFLEdBQXlFLENBSmhFO0FBS25CQyxFQUFBQSxLQUFLLEVBQUU7QUFMWSxDQUFyQjtBQVFTLFNBQVNDLE9BQVQsR0FBZ0Q7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCUixZQUFzQjtBQUFBLE1BQVJTLE1BQVE7O0FBQ3JELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFLDZDQUFXRixLQUFYO0FBQWtCUCxRQUFBQSxJQUFJLEVBQUVRLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVixJQUF2QztBQUE2Q0MsUUFBQUEsS0FBSyxFQUFFTyxNQUFNLENBQUNFLE9BQVAsQ0FBZVQ7QUFBbkU7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsNkNBQVlNLEtBQVo7QUFBbUJOLFFBQUFBLEtBQUssRUFBRU8sTUFBTSxDQUFDRTtBQUFqQzs7QUFDRixTQUFLLGtCQUFMO0FBQ0UsNkNBQVlILEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0UsT0FBN0I7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsNkNBQVlILEtBQVo7QUFBbUJJLFFBQUFBLE9BQU8sRUFBRSxJQUE1QjtBQUFrQ04sUUFBQUEsS0FBSyxFQUFFO0FBQXpDOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZRSxLQUFaO0FBQW1CSSxRQUFBQSxPQUFPLEVBQUUsS0FBNUI7QUFBbUNDLFFBQUFBLEtBQUssRUFBRUosTUFBTSxDQUFDRSxPQUFQLENBQWVFLEtBQXpEO0FBQWdFWCxRQUFBQSxLQUFLLEVBQUVPLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVCxLQUF0RjtBQUE2RkksUUFBQUEsS0FBSyxFQUFFO0FBQXBHOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZRSxLQUFaO0FBQW1CSSxRQUFBQSxPQUFPLEVBQUUsS0FBNUI7QUFBbUNOLFFBQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDRTtBQUFqRDs7QUFDRjtBQUNFLGFBQU9ILEtBQVA7QUFkSjtBQWdCRDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3JlZHVjZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IHt9LFxyXG4gIGVtYWlsOiAnJyxcclxuICAvLyBlbWFpbDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSB8fCAnJyA6ICcnLFxyXG4gIHBhc3N3b3JkOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpIHx8ICcnIDogJycsXHJcbiAgZXJyb3I6ICcnXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSAnU0VUX1VTRVInOlxyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsIGVtYWlsOiBhY3Rpb24ucGF5bG9hZC5lbWFpbH07XHJcbiAgICAgIGNhc2UgJ1NFVF9FTUFJTCc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVtYWlsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBjYXNlICdTRVRfUExBWUVEX0dBTUVTJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgY2FzZSAnTE9HSU5fUkVRVUVTVCc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiAnJyB9O1xyXG4gICAgICBjYXNlICdMT0dJTl9TVUNDRVNTJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbiwgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLCBlcnJvcjogJycgfTtcclxuICAgICAgY2FzZSAnTE9HSU5fRkFJTFVSRSc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTsgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbmciLCJ0b2tlbiJdLCJzb3VyY2VSb290IjoiIn0=