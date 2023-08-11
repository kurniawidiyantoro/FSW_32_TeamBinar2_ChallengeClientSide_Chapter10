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
  // password: typeof window !== 'undefined' ? localStorage.getItem('password') || '' : '',
  playedGames: false,
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
      return _objectSpread(_objectSpread({}, state), {}, {
        playedGames: _objectSpread(_objectSpread({}, state.playedGames), action.payload)
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNDMzNDgwYmQ5MzY5ZGVmMTEwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsSUFBSSxFQUFFLEVBRGE7QUFFbkJDLEVBQUFBLEtBQUssRUFBRSxFQUZZO0FBR25CO0FBQ0E7QUFDQUMsRUFBQUEsV0FBVyxFQUFFLEtBTE07QUFNbkJDLEVBQUFBLEtBQUssRUFBRTtBQU5ZLENBQXJCO0FBU1MsU0FBU0MsT0FBVCxHQUFnRDtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJOLFlBQXNCO0FBQUEsTUFBUk8sTUFBUTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsNkNBQVdGLEtBQVg7QUFBa0JMLFFBQUFBLElBQUksRUFBRU0sTUFBTSxDQUFDRSxPQUFQLENBQWVSLElBQXZDO0FBQTZDQyxRQUFBQSxLQUFLLEVBQUVLLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlUDtBQUFuRTs7QUFDRixTQUFLLFdBQUw7QUFDRSw2Q0FBWUksS0FBWjtBQUFtQkosUUFBQUEsS0FBSyxFQUFFSyxNQUFNLENBQUNFO0FBQWpDOztBQUNGLFNBQUssa0JBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkgsUUFBQUEsV0FBVyxrQ0FBT0csS0FBSyxDQUFDSCxXQUFiLEdBQTZCSSxNQUFNLENBQUNFLE9BQXBDO0FBQTlCOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CSSxRQUFBQSxPQUFPLEVBQUUsSUFBNUI7QUFBa0NOLFFBQUFBLEtBQUssRUFBRTtBQUF6Qzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUUsS0FBWjtBQUFtQkksUUFBQUEsT0FBTyxFQUFFLEtBQTVCO0FBQW1DQyxRQUFBQSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRSxLQUF6RDtBQUFnRVQsUUFBQUEsS0FBSyxFQUFFSyxNQUFNLENBQUNFLE9BQVAsQ0FBZVAsS0FBdEY7QUFBNkZFLFFBQUFBLEtBQUssRUFBRTtBQUFwRzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUUsS0FBWjtBQUFtQkksUUFBQUEsT0FBTyxFQUFFLEtBQTVCO0FBQW1DTixRQUFBQSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ0U7QUFBakQ7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBZEo7QUFnQkQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7fSxcclxuICBlbWFpbDogJycsXHJcbiAgLy8gZW1haWw6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykgfHwgJycgOiAnJyxcclxuICAvLyBwYXNzd29yZDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKSB8fCAnJyA6ICcnLFxyXG4gIHBsYXllZEdhbWVzOiBmYWxzZSxcclxuICBlcnJvcjogJydcclxuICB9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVkdWNlciAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlICdTRVRfVVNFUic6XHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlciwgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsfTtcclxuICAgICAgY2FzZSAnU0VUX0VNQUlMJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW1haWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGNhc2UgJ1NFVF9QTEFZRURfR0FNRVMnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwbGF5ZWRHYW1lczogeyAuLi5zdGF0ZS5wbGF5ZWRHYW1lcywgLi4uYWN0aW9uLnBheWxvYWQgfSB9O1xyXG4gICAgICBjYXNlICdMT0dJTl9SRVFVRVNUJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6ICcnIH07XHJcbiAgICAgIGNhc2UgJ0xPR0lOX1NVQ0NFU1MnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgdG9rZW46IGFjdGlvbi5wYXlsb2FkLnRva2VuLCBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWwsIGVycm9yOiAnJyB9O1xyXG4gICAgICBjYXNlICdMT0dJTl9GQUlMVVJFJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9OyAgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiZW1haWwiLCJwbGF5ZWRHYW1lcyIsImVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9