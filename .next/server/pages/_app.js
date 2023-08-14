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
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\_app.js";

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
  playedGames: {},
  totalScore: 0,
  error: ''
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        email: action.payload.email
      });

    case 'SET_TOTAL_SCORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        totalScore: action.payload
      });

    case 'SET_EMAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        email: action.payload
      });

    case 'SET_PLAYED_GAMES':
      return _objectSpread(_objectSpread({}, state), {}, {
        playedGames: _objectSpread(_objectSpread({}, state.playedGames), action.payload)
      });
    // case 'LOGIN_REQUEST':
    //   return { ...state, loading: true, error: '' };
    // case 'LOGIN_SUCCESS':
    //   return { ...state, loading: false, token: action.payload.token, email: action.payload.email, error: '' };
    // case 'LOGIN_FAILURE':
    //   return { ...state, loading: false, error: action.payload };  

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRUE7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFBTyw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUosaURBQWpCO0FBQUEsMkJBQ0wsOERBQUMsU0FBRCxvQkFBZUksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLE1BQU1HLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsSUFBSSxFQUFFLEVBRGE7QUFFbkJDLEVBQUFBLEtBQUssRUFBRSxFQUZZO0FBR25CO0FBQ0E7QUFDQUMsRUFBQUEsV0FBVyxFQUFFLEVBTE07QUFNbkJDLEVBQUFBLFVBQVUsRUFBRSxDQU5PO0FBT25CQyxFQUFBQSxLQUFLLEVBQUU7QUFQWSxDQUFyQjtBQVVTLFNBQVNDLE9BQVQsQ0FBa0JDLEtBQUssR0FBR1AsWUFBMUIsRUFBd0NRLE1BQXhDLEVBQWdEO0FBQ3JELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFLDZDQUFXRixLQUFYO0FBQWtCTixRQUFBQSxJQUFJLEVBQUVPLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVCxJQUF2QztBQUE2Q0MsUUFBQUEsS0FBSyxFQUFFTSxNQUFNLENBQUNFLE9BQVAsQ0FBZVI7QUFBbkU7O0FBQ0YsU0FBSyxpQkFBTDtBQUNFLDZDQUFZSyxLQUFaO0FBQW1CSCxRQUFBQSxVQUFVLEVBQUVJLE1BQU0sQ0FBQ0U7QUFBdEM7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsNkNBQVlILEtBQVo7QUFBbUJMLFFBQUFBLEtBQUssRUFBRU0sTUFBTSxDQUFDRTtBQUFqQzs7QUFDRixTQUFLLGtCQUFMO0FBQ0UsNkNBQVlILEtBQVo7QUFBbUJKLFFBQUFBLFdBQVcsa0NBQU9JLEtBQUssQ0FBQ0osV0FBYixHQUE2QkssTUFBTSxDQUFDRSxPQUFwQztBQUE5QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNFLGFBQU9ILEtBQVA7QUFoQko7QUFrQkQ7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qkg7QUFDQTtBQUNBO0FBR0EsTUFBTVEsUUFBUSxHQUFHRixzREFBZSxDQUFDO0FBQUVQLEVBQUFBLE9BQU9BLCtDQUFBQTtBQUFULENBQUQsQ0FBaEM7QUFDQSxNQUFNWCxLQUFLLEdBQUdnQix5REFBa0IsQ0FBQ0ksUUFBRCxFQUFXSCxzREFBZSxDQUFDRSxvREFBRCxDQUExQixDQUFoQztBQUVBLGlFQUFlbkIsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuLy8gaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgPC9Qcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IHt9LFxyXG4gIGVtYWlsOiAnJyxcclxuICAvLyBlbWFpbDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSB8fCAnJyA6ICcnLFxyXG4gIC8vIHBhc3N3b3JkOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpIHx8ICcnIDogJycsXHJcbiAgcGxheWVkR2FtZXM6IHt9LFxyXG4gIHRvdGFsU2NvcmU6IDAsXHJcbiAgZXJyb3I6ICcnXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSAnU0VUX1VTRVInOlxyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsIGVtYWlsOiBhY3Rpb24ucGF5bG9hZC5lbWFpbH07XHJcbiAgICAgIGNhc2UgJ1NFVF9UT1RBTF9TQ09SRSc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvdGFsU2NvcmU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGNhc2UgJ1NFVF9FTUFJTCc6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVtYWlsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBjYXNlICdTRVRfUExBWUVEX0dBTUVTJzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGxheWVkR2FtZXM6IHsgLi4uc3RhdGUucGxheWVkR2FtZXMsIC4uLmFjdGlvbi5wYXlsb2FkIH0gfTtcclxuICAgICAgLy8gY2FzZSAnTE9HSU5fUkVRVUVTVCc6XHJcbiAgICAgIC8vICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiAnJyB9O1xyXG4gICAgICAvLyBjYXNlICdMT0dJTl9TVUNDRVNTJzpcclxuICAgICAgLy8gICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbiwgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLCBlcnJvcjogJycgfTtcclxuICAgICAgLy8gY2FzZSAnTE9HSU5fRkFJTFVSRSc6XHJcbiAgICAgIC8vICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTsgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4iLCJpbXBvcnQgeyBsZWdhY3lfY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlclwiOyBcclxuXHJcblxyXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7IHJlZHVjZXIgfSk7XHJcbmNvbnN0IHN0b3JlID0gbGVnYWN5X2NyZWF0ZVN0b3JlKHJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJlbWFpbCIsInBsYXllZEdhbWVzIiwidG90YWxTY29yZSIsImVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJsZWdhY3lfY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJ0aHVuayIsInJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==