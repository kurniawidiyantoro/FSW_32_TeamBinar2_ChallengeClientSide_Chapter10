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
var _jsxFileName = "D:\\Bootcamp\\Challenge Chapter 10\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\_app.js";

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

const stateAwal = {
  warna: 'merah',
  umur: 35,
  nama: 'Rudi'
};
function reducer(state = stateAwal, action // const action = { payload: .... , type: "MENGUBAH_WARNA" }
) {
  switch (action.type) {
    case "MENGUBAH_WARNA":
      return _objectSpread(_objectSpread({}, state), {}, {
        warna: action.payload
      });

    case "MENGUBAH_UMUR":
      return _objectSpread(_objectSpread({}, state), {}, {
        umur: action.payload
      });

    case "MENGUBAH_NAMA":
      return _objectSpread(_objectSpread({}, state), {}, {
        nama: action.payload
      });

    default:
      return state;
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRUE7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFBTyw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUosaURBQWpCO0FBQUEsMkJBQ0wsOERBQUMsU0FBRCxvQkFBZUksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLE1BQU1HLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFLE9BRFM7QUFFaEJDLEVBQUFBLElBQUksRUFBRSxFQUZVO0FBR2hCQyxFQUFBQSxJQUFJLEVBQUU7QUFIVSxDQUFsQjtBQU1PLFNBQVNDLE9BQVQsQ0FDTEMsS0FBSyxHQUFHTCxTQURILEVBRUxNLE1BRkssQ0FFRTtBQUZGLEVBR0w7QUFDQSxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDRSxTQUFLLGdCQUFMO0FBQ0UsNkNBQVlGLEtBQVo7QUFBbUJKLFFBQUFBLEtBQUssRUFBRUssTUFBTSxDQUFDRTtBQUFqQzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkgsUUFBQUEsSUFBSSxFQUFFSSxNQUFNLENBQUNFO0FBQWhDOztBQUNGLFNBQUssZUFBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CRixRQUFBQSxJQUFJLEVBQUVHLE1BQU0sQ0FBQ0U7QUFBaEM7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBUko7QUFVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUVBO0FBRUEsTUFBTVEsUUFBUSxHQUFHRixzREFBZSxDQUFDO0FBQUVQLEVBQUFBLE9BQU9BLCtDQUFBQTtBQUFULENBQUQsQ0FBaEM7QUFFQSxNQUFNVCxLQUFLLEdBQUdjLHlEQUFrQixDQUFDSSxRQUFELEVBQVdILHNEQUFlLENBQUNFLG9EQUFELENBQTFCLENBQWhDO0FBRUEsaUVBQWVqQixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVUQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3JlZHV4L3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuLy8gaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgPC9Qcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiY29uc3Qgc3RhdGVBd2FsID0ge1xyXG4gIHdhcm5hOiAnbWVyYWgnLFxyXG4gIHVtdXI6IDM1LFxyXG4gIG5hbWE6ICdSdWRpJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlciAoXHJcbiAgc3RhdGUgPSBzdGF0ZUF3YWwsXHJcbiAgYWN0aW9uIC8vIGNvbnN0IGFjdGlvbiA9IHsgcGF5bG9hZDogLi4uLiAsIHR5cGU6IFwiTUVOR1VCQUhfV0FSTkFcIiB9XHJcbikge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIk1FTkdVQkFIX1dBUk5BXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3YXJuYTogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgY2FzZSBcIk1FTkdVQkFIX1VNVVJcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVtdXI6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgIGNhc2UgXCJNRU5HVUJBSF9OQU1BXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1hOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBsZWdhY3lfY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XHJcblxyXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7IHJlZHVjZXIgfSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGxlZ2FjeV9jcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0YXRlQXdhbCIsIndhcm5hIiwidW11ciIsIm5hbWEiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImxlZ2FjeV9jcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVSZWR1Y2VycyIsInRodW5rIiwicmVkdWNlcnMiXSwic291cmNlUm9vdCI6IiJ9