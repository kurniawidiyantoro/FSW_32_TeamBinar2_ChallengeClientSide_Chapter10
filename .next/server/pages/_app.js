(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Bootcamp\\Challenge Chapter 10\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10-1\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import '../styles/globals.css'





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_1__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./redux/reducer/index.js":
/*!********************************!*\
  !*** ./redux/reducer/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  user: {},
  email: '',
  // email: typeof window !== 'undefined' ? localStorage.getItem('email') || '' : '',
  // password: typeof window !== 'undefined' ? localStorage.getItem('password') || '' : '',
  error: ''
};
function reducer(state = initialState, action) {
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

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./redux/reducer/index.js");



const reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__.reducer
});
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore)(reducers, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRUE7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFBTyw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUosaURBQWpCO0FBQUEsMkJBQ0wsOERBQUMsU0FBRCxvQkFBZUksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLE1BQU1HLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsSUFBSSxFQUFFLEVBRGE7QUFFbkJDLEVBQUFBLEtBQUssRUFBRSxFQUZZO0FBR25CO0FBQ0E7QUFDQUMsRUFBQUEsS0FBSyxFQUFFO0FBTFksQ0FBckI7QUFRUyxTQUFTQyxPQUFULENBQWtCQyxLQUFLLEdBQUdMLFlBQTFCLEVBQXdDTSxNQUF4QyxFQUFnRDtBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSw2Q0FBV0YsS0FBWDtBQUFrQkosUUFBQUEsSUFBSSxFQUFFSyxNQUFNLENBQUNFLE9BQVAsQ0FBZVAsSUFBdkM7QUFBNkNDLFFBQUFBLEtBQUssRUFBRUksTUFBTSxDQUFDRSxPQUFQLENBQWVOO0FBQW5FOztBQUNGLFNBQUssV0FBTDtBQUNFLDZDQUFZRyxLQUFaO0FBQW1CSCxRQUFBQSxLQUFLLEVBQUVJLE1BQU0sQ0FBQ0U7QUFBakM7O0FBQ0YsU0FBSyxrQkFBTDtBQUNFLDZDQUFZSCxLQUFaLEdBQXNCQyxNQUFNLENBQUNFLE9BQTdCOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CSSxRQUFBQSxPQUFPLEVBQUUsSUFBNUI7QUFBa0NOLFFBQUFBLEtBQUssRUFBRTtBQUF6Qzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUUsS0FBWjtBQUFtQkksUUFBQUEsT0FBTyxFQUFFLEtBQTVCO0FBQW1DQyxRQUFBQSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRSxLQUF6RDtBQUFnRVIsUUFBQUEsS0FBSyxFQUFFSSxNQUFNLENBQUNFLE9BQVAsQ0FBZU4sS0FBdEY7QUFBNkZDLFFBQUFBLEtBQUssRUFBRTtBQUFwRzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUUsS0FBWjtBQUFtQkksUUFBQUEsT0FBTyxFQUFFLEtBQTVCO0FBQW1DTixRQUFBQSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ0U7QUFBakQ7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBZEo7QUFnQkQ7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qkg7QUFDQTtBQUNBO0FBR0EsTUFBTVUsUUFBUSxHQUFHRixzREFBZSxDQUFDO0FBQUVULEVBQUFBLE9BQU9BLCtDQUFBQTtBQUFULENBQUQsQ0FBaEM7QUFDQSxNQUFNVCxLQUFLLEdBQUdnQix5REFBa0IsQ0FBQ0ksUUFBRCxFQUFXSCxzREFBZSxDQUFDRSxvREFBRCxDQUExQixDQUFoQztBQUVBLGlFQUFlbkIsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFUkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbi8vIGltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIDwvUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7fSxcclxuICBlbWFpbDogJycsXHJcbiAgLy8gZW1haWw6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykgfHwgJycgOiAnJyxcclxuICAvLyBwYXNzd29yZDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKSB8fCAnJyA6ICcnLFxyXG4gIGVycm9yOiAnJ1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ1NFVF9VU0VSJzpcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLCBlbWFpbDogYWN0aW9uLnBheWxvYWQuZW1haWx9O1xyXG4gICAgICBjYXNlICdTRVRfRU1BSUwnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbWFpbDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgY2FzZSAnU0VUX1BMQVlFRF9HQU1FUyc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGNhc2UgJ0xPR0lOX1JFUVVFU1QnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogJycgfTtcclxuICAgICAgY2FzZSAnTE9HSU5fU1VDQ0VTUyc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCB0b2tlbjogYWN0aW9uLnBheWxvYWQudG9rZW4sIGVtYWlsOiBhY3Rpb24ucGF5bG9hZC5lbWFpbCwgZXJyb3I6ICcnIH07XHJcbiAgICAgIGNhc2UgJ0xPR0lOX0ZBSUxVUkUnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07ICBcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxuIiwiaW1wb3J0IHsgbGVnYWN5X2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjsgXHJcblxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyByZWR1Y2VyIH0pO1xyXG5jb25zdCBzdG9yZSA9IGxlZ2FjeV9jcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiZW1haWwiLCJlcnJvciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsInRva2VuIiwibGVnYWN5X2NyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwidGh1bmsiLCJyZWR1Y2VycyJdLCJzb3VyY2VSb290IjoiIn0=