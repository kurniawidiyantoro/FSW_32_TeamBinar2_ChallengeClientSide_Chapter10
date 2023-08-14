self["webpackHotUpdate_N_E"]("pages/gamedice",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

var normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

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

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


var devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(function () {
        (0, _requestIdleCallback).requestIdleCallback(function () {
          return setTimeout(function () {
            if (!cancelled) {
              reject(err);
            }
          }, ms);
        });
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute)["default"](route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        var routeFilesPromise = getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        });

        if (true) {
          devBuildPromise = new Promise(function (resolve) {
            if (routeFilesPromise) {
              return routeFilesPromise["finally"](function () {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback).requestIdleCallback(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function get() {
    return _router["default"];
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function get() {
    return _withRouter["default"];
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "./node_modules/next/dist/shared/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var singletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
}

_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  var _router1 = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router1[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
        ;
        continue;
      }

      instance[property] = _router1[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router1[field].apply(_router1, arguments);
    };
  });
  return instance;
}

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function withRouter(ComposedComponent) {
  var _s = $RefreshSig$();

  function WithRouterWrapper(props) {
    _s();

    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  _s(WithRouterWrapper, "CeygcqajjFExIxFEzW4x/gfWEGQ=", true);

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

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

/***/ "./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

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

/***/ "./node_modules/next/dist/shared/lib/mitt.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/mitt.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = mitt;

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

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

/***/ "./node_modules/next/dist/shared/lib/router-context.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router-context.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = _react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

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

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "./node_modules/next/dist/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/shared/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/shared/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/shared/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/shared/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/shared/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; } else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function delLocale(path, locale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils).getLocationOrigin();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  var urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  var urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  var urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error("Invalid href passed to next/router: ".concat(urlAsString, ", repeated forward-slashes (//) or backslashes \\ are not valid in the href"));
    var normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils).getLocationOrigin();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

var manualScrollRestoration =  false && 0;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname1, query1, as1, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component1 = _ref.Component,
        err1 = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils).getURL());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as1 = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _parseRelativeUrl2 = (0, _parseRelativeUrl).parseRelativeUrl(url),
          pathname1 = _parseRelativeUrl2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as1 === _this.asPath && pathname1 === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (as1.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        var options = {
          locale: locale
        };
        options._shouldResolveHref = as1 !== pathname1;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL(), options);
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var shouldResolveHref, prevLocale, parsedAs, localePathResult, didNavigate, ref, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, localeChange, parsed, pathname1, query1, pages, rewrites, _yield$getClientBuild, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, ref1, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute, _scroll, shouldScroll, resetScroll;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated

                if (options._h) {
                  this.isReady = true;
                }

                prevLocale = this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils).formatWithValidation(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as;
                localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs) && !localeChange)) {
                  _context.next = 35;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 35:
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname1 = parsed.pathname, query1 = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 37;
                _context.next = 40;
                return this.pageLoader.getPageList();

              case 40:
                pages = _context.sent;
                _context.next = 43;
                return (0, _routeLoader).getClientBuildManifest();

              case 43:
                _yield$getClientBuild = _context.sent;
                rewrites = _yield$getClientBuild.__rewrites;
                _context.next = 51;
                break;

              case 47:
                _context.prev = 47;
                _context.t0 = _context["catch"](37);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 51:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

                if (shouldResolveHref && pathname1 !== '/_error') {
                  options._shouldResolveHref = true;

                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname1, pages);

                    if (parsed.pathname !== pathname1) {
                      pathname1 = parsed.pathname;
                      parsed.pathname = addBasePath(pathname1);
                      url = (0, _utils).formatWithValidation(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

                if (isLocalURL(as)) {
                  _context.next = 61;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 59:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 61:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic).isDynamicRoute(route)) {
                  _context.next = 77;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 76;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query1[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 74;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 74:
                _context.next = 77;
                break;

              case 76:
                if (shouldInterpolate) {
                  as = (0, _utils).formatWithValidation(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query1, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query1, routeMatch);
                }

              case 77:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 78;
                _context.next = 81;
                return this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);

              case 81:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 107;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 93;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 91;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 91:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 93:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 107;
                  break;
                }

                _context.prev = 95;
                _context.next = 98;
                return this.fetchComponent('/404');

              case 98:
                notFoundRoute = '/404';
                _context.next = 104;
                break;

              case 101:
                _context.prev = 101;
                _context.t1 = _context["catch"](95);
                notFoundRoute = '/_error';

              case 104:
                _context.next = 106;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
                  shallow: false
                });

              case 106:
                routeInfo = _context.sent;

              case 107:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                }

                if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;
                shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
                resetScroll = shouldScroll ? {
                  x: 0,
                  y: 0
                } : null;
                _context.next = 116;
                return this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 116:
                if (!error) {
                  _context.next = 119;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 119:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 124:
                _context.prev = 124;
                _context.t2 = _context["catch"](78);

                if (!_context.t2.cancelled) {
                  _context.next = 128;
                  break;
                }

                return _context.abrupt("return", false);

              case 128:
                throw _context.t2;

              case 129:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[37, 47], [78, 124], [95, 101]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils).getURL() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component1, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader).isAssetError(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component1 === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 10;
                return this.fetchComponent('/_error');

              case 10:
                _yield$this$fetchComp = _context2.sent;
                Component1 = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 13:
                routeInfo = {
                  props: props,
                  Component: Component1,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 25;
                  break;
                }

                _context2.prev = 15;
                _context2.next = 18;
                return this.getInitialProps(Component1, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 18:
                routeInfo.props = _context2.sent;
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](15);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 25:
                return _context2.abrupt("return", routeInfo);

              case 28:
                _context2.prev = 28;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 28], [15, 21]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component1, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component1 = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component1)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as,
                    locale: _this2.locale,
                    locales: _this2.locales,
                    defaultLocale: _this2.defaultLocale
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname2,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield$getClientBuild2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
                pathname2 = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader).getClientBuildManifest();

              case 12:
                _yield$getClientBuild2 = _context4.sent;
                rewrites = _yield$getClientBuild2.__rewrites;
                rewritesResult = (0, _resolveRewrites)["default"](addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname2 = rewritesResult.resolvedHref;
                  parsed.pathname = pathname2;
                  url = (0, _utils).formatWithValidation(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname2) {
                  pathname2 = parsed.pathname;
                  parsed.pathname = pathname2;
                  url = (0, _utils).formatWithValidation(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err2 = new Error('Loading initial props cancelled');
          err2.cancelled = true;
          throw err2;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err2) {
        delete _this6.sdr[resourceKey];
        throw err2;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App1 = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App1);

      ctx.AppTree = AppTree;
      return (0, _utils).loadGetInitialProps(App1, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

Router.events = (0, _mitt)["default"]();
exports.default = Router;

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/format-url.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/format-url.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/shared/lib/router/utils/querystring.js"));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js ***!
  \*************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getAssetPathFromRoute;

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/shared/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/shared/lib/router/utils/querystring.js");

function parseRelativeUrl(url, base) {
  var globalBase = new URL( false ? 0 : (0, _utils).getLocationOrigin());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring).searchParamsToUrlQuery(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/querystring.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/querystring.js ***!
  \***********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/route-matcher.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/route-matcher.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRouteMatcher = getRouteMatcher;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/shared/lib/utils.js");

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        throw new _utils.DecodeError('failed to decode param');
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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

/***/ "./node_modules/next/dist/shared/lib/router/utils/route-regex.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/route-regex.js ***!
  \***********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getParametrizedRoute = getParametrizedRoute;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getParametrizedRoute(route) {
  var segments = (route.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    parameterizedRoute: parameterizedRoute,
    groups: groups
  };
}

function getRouteRegex(normalizedRoute) {
  var result = getParametrizedRoute(normalizedRoute);

  if ('routeKeys' in result) {
    return {
      re: new RegExp("^".concat(result.parameterizedRoute, "(?:/)?$")),
      groups: result.groups,
      routeKeys: result.routeKeys,
      namedRegex: "^".concat(result.namedParameterizedRoute, "(?:/)?$")
    };
  }

  return {
    re: new RegExp("^".concat(result.parameterizedRoute, "(?:/)?$")),
    groups: result.groups
  };
}

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

/***/ "./node_modules/next/dist/shared/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/utils.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _wrapNativeSuper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.HtmlContext = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/shared/lib/router/utils/format-url.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function normalizeRepeatedSlashes(url) {
  var urlParts = url.split('?');
  var urlNoQuery = urlParts[0];
  return urlNoQuery // first we replace any non-encoded backslashes with forward
  // then normalize repeated forward slashes
  .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?".concat(urlParts.slice(1).join('?')) : '');
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var ref, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((ref = App.prototype) === null || ref === void 0 ? void 0 : ref.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl).formatUrl(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

var DecodeError = /*#__PURE__*/function (_Error) {
  _inherits(DecodeError, _Error);

  var _super = _createSuper(DecodeError);

  function DecodeError() {
    _classCallCheck(this, DecodeError);

    return _super.apply(this, arguments);
  }

  return DecodeError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.DecodeError = DecodeError;
var HtmlContext = (0, _react).createContext(null);
exports.HtmlContext = HtmlContext;

if (true) {
  HtmlContext.displayName = 'HtmlContext';
}

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

/***/ "./pages/gamedice/index.js":
/*!*********************************!*\
  !*** ./pages/gamedice/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/dice1.svg */ "./assets/images/dice1.svg");
/* harmony import */ var _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/dice2.svg */ "./assets/images/dice2.svg");
/* harmony import */ var _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/dice3.svg */ "./assets/images/dice3.svg");
/* harmony import */ var _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/dice4.svg */ "./assets/images/dice4.svg");
/* harmony import */ var _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/dice5.svg */ "./assets/images/dice5.svg");
/* harmony import */ var _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/dice6.svg */ "./assets/images/dice6.svg");
/* harmony import */ var _styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/GameDice.module.css */ "./styles/GameDice.module.css");
/* harmony import */ var _styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamedice\\index.js",
    _s = $RefreshSig$();













function GameDice() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Click tombol dibawah untuk memulai permainan'),
      result = _useState[0],
      setResult = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      playerScore = _useState2[0],
      setPlayerScore = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      computerScore = _useState3[0],
      setComputerScore = _useState3[1];

  var playerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var computerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var resultDice = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var diceImages = [_assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_2__.default, _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_3__.default, _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_4__.default, _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_5__.default, _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_6__.default, _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_7__.default];

  var roll = function roll() {
    // Generate random number
    var playerRandomNum = Math.floor(Math.random() * 6);
    var computerRandomNum = Math.floor(Math.random() * 6); // Logic for this game

    if (playerRandomNum > computerRandomNum) {
      setResult("Player menang dengan ".concat(playerRandomNum + 1, " points"));
      setPlayerScore(function (prevScore) {
        return prevScore + 1;
      });
    } else if (playerRandomNum < computerRandomNum) {
      setResult("Computer menang dengan ".concat(computerRandomNum + 1, " points"));
      setComputerScore(function (prevScore) {
        return prevScore + 1;
      });
    } else {
      setResult("Seri! Player dan pemain mendapatkan ".concat(playerRandomNum + 1, " points"));
    }

    playerRef.current.setAttribute('src', diceImages[playerRandomNum]);
    computerRef.current.setAttribute('src', diceImages[computerRandomNum]);
  };

  var reset = function reset() {
    setResult('Click tombol ini untuk memulai permainan');
    setPlayerScore(0);
    setComputerScore(0);
  };

  var handleBackClick = function handleBackClick() {
    router.push("/gamelist"); // Use router.push instead of navigate
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().centerContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().diceWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: "Player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: _assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_2__.default,
            ref: playerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: ["Score: ", playerScore]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: _assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_2__.default,
            ref: computerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: ["Score: ", computerScore]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().result),
          ref: resultDice,
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().diceWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          onClick: roll,
          className: (_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn),
          children: "Roll the dice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          onClick: reset,
          className: "".concat((_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn), " ").concat((_styles_GameDice_module_css__WEBPACK_IMPORTED_MODULE_9___default().reset)),
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(GameDice, "cT0S/PdzTw2hESamcHV0BEio+ps=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = GameDice;
/* harmony default export */ __webpack_exports__["default"] = (GameDice);

var _c;

$RefreshReg$(_c, "GameDice");

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

/***/ "./styles/GameDice.module.css":
/*!************************************!*\
  !*** ./styles/GameDice.module.css ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./GameDice.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/GameDice.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./GameDice.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/GameDice.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./GameDice.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/GameDice.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/GameDice.module.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/GameDice.module.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".GameDice_diceWrapper__KMIfG {\r\n    width: 90%;\r\n    display: -moz-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n  }\r\n  \r\n  .GameDice_diceArea__1YB5z {\r\n    text-align: center;\r\n  }\r\n  \r\n  .GameDice_h2__1nB2J {\r\n    margin: 2rem 0;\r\n  }\r\n  \r\n  .GameDice_p__2FBZT {\r\n    font-size: 1.6rem;\r\n    margin: 3rem 0;\r\n  }\r\n  \r\n  .GameDice_btn__36r-g {\r\n    background-color: #836fa9;\r\n    border: none;\r\n    outline: none;\r\n    padding: 1.5rem 0;\r\n    width: 15rem;\r\n    letter-spacing: 0.1rem;\r\n    border-radius: 0.5rem;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .GameDice_reset__3F5Hx {\r\n    background-color: transparent;\r\n    color: #836fa9;\r\n  }\r\n  \r\n  .GameDice_ul__3DH1M {\r\n    list-style: none;\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .GameDice_centerContainer__3bFkM {\r\n    display: grid;\r\n    -moz-box-pack: center;\r\n         justify-content: center;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    height: 10vh;\r\n  }", "",{"version":3,"sources":["webpack://styles/GameDice.module.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,iBAAa;IAAb,aAAa;IACb,6BAA6B;IAC7B,sBAAmB;SAAnB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;IACX,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IACE,6BAA6B;IAC7B,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,qBAAuB;SAAvB,uBAAuB;IACvB,sBAAmB;SAAnB,mBAAmB;IACnB,YAAY;EACd","sourcesContent":[".diceWrapper {\r\n    width: 90%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n  }\r\n  \r\n  .diceArea {\r\n    text-align: center;\r\n  }\r\n  \r\n  .h2 {\r\n    margin: 2rem 0;\r\n  }\r\n  \r\n  .p {\r\n    font-size: 1.6rem;\r\n    margin: 3rem 0;\r\n  }\r\n  \r\n  .btn {\r\n    background-color: #836fa9;\r\n    border: none;\r\n    outline: none;\r\n    padding: 1.5rem 0;\r\n    width: 15rem;\r\n    letter-spacing: 0.1rem;\r\n    border-radius: 0.5rem;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .reset {\r\n    background-color: transparent;\r\n    color: #836fa9;\r\n  }\r\n  \r\n  .ul {\r\n    list-style: none;\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .centerContainer {\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 10vh;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"diceWrapper": "GameDice_diceWrapper__KMIfG",
	"diceArea": "GameDice_diceArea__1YB5z",
	"h2": "GameDice_h2__1nB2J",
	"p": "GameDice_p__2FBZT",
	"btn": "GameDice_btn__36r-g",
	"reset": "GameDice_reset__3F5Hx",
	"ul": "GameDice_ul__3DH1M",
	"centerContainer": "GameDice_centerContainer__3bFkM"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/server/denormalize-page-path.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/server/denormalize-page-path.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathSep = normalizePathSep;
exports.denormalizePagePath = denormalizePagePath;
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
}
function denormalizePagePath(page) {
    page = normalizePathSep(page);
    if (page.startsWith('/index/')) {
        page = page.slice(6);
    } else if (page === '/index') {
        page = '/';
    }
    return page;
}

//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWRpY2UuN2Y5YWE0Y2UxYTY5MTU0NDZhNDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNYckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNMckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7O0FDVHJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNyQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ1ByRSxxQkFBcUIsbUJBQU8sQ0FBQyxvRkFBcUI7O0FBRWxELCtCQUErQixtQkFBTyxDQUFDLHdHQUErQjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQkFBeUIsbUJBQW1CLHlCQUF5QjtBQUN6RSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNCQUF5QixtQkFBbUIseUJBQXlCO0FBQ3pFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ3pCckU7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxnSUFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVkaWNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvR2FtZURpY2UubW9kdWxlLmNzcz84NTExIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvR2FtZURpY2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL2lnbm9yZWR8RDpcXEJpbmFyXFxDaGFwdGVyIDEwXFxjaGFsbGVuZ2VcXEZTV18zMl9UZWFtQmluYXIyX0NoYWxsZW5nZUNsaWVudFNpZGVfQ2hhcHRlcjEwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZUZ1bmN0aW9uO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlRnVuY3Rpb24uanNcIik7XG5cbnZhciBjb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3QuanNcIik7XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoID0gbm9ybWFsaXplTG9jYWxlUGF0aDtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsIGxvY2FsZXMpIHtcbiAgICBsZXQgZGV0ZWN0ZWRMb2NhbGU7XG4gICAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgKGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSk9PntcbiAgICAgICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgZGV0ZWN0ZWRMb2NhbGVcbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uICh0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZiAodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0ICh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcik9PntcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Sb3V0ZXJDb250ZXh0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IFJvdXRlckNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0cy5Sb3V0ZXJDb250ZXh0ID0gUm91dGVyQ29udGV4dDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSb3V0ZXJDb250ZXh0Jztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXRVcmwgPSBmb3JtYXRVcmw7XG52YXIgcXVlcnlzdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG59XG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO1xuZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iaikge1xuICAgIGxldCB7IGF1dGggLCBob3N0bmFtZSAgfSA9IHVybE9iajtcbiAgICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJyc7XG4gICAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnO1xuICAgIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJyc7XG4gICAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnO1xuICAgIGxldCBob3N0ID0gZmFsc2U7XG4gICAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJztcbiAgICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICAgICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdDtcbiAgICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSk7XG4gICAgICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7XG4gICAgfVxuICAgIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IHF1ZXJ5ICYmIGA/JHtxdWVyeX1gIHx8ICcnO1xuICAgIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcbiAgICBpZiAodXJsT2JqLnNsYXNoZXMgfHwgKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSkge1xuICAgICAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKTtcbiAgICAgICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgICAgICBob3N0ID0gJyc7XG4gICAgfVxuICAgIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2g7XG4gICAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpO1xuICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEFzc2V0UGF0aEZyb21Sb3V0ZTtcbmZ1bmN0aW9uIGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgZXh0ID0gJycpIHtcbiAgICBjb25zdCBwYXRoID0gcm91dGUgPT09ICcvJyA/ICcvaW5kZXgnIDogL15cXC9pbmRleChcXC98JCkvLnRlc3Qocm91dGUpID8gYC9pbmRleCR7cm91dGV9YCA6IGAke3JvdXRlfWA7XG4gICAgcmV0dXJuIHBhdGggKyBleHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsID0gcGFyc2VSZWxhdGl2ZVVybDtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7XG5mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCwgYmFzZSkge1xuICAgIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCkpO1xuICAgIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZTtcbiAgICBjb25zdCB7IHBhdGhuYW1lICwgc2VhcmNoUGFyYW1zICwgc2VhcmNoICwgaGFzaCAsIGhyZWYgLCBvcmlnaW4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKTtcbiAgICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5OiAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgaGFzaCxcbiAgICAgICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpXG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtcbmV4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyA9IHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7XG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbmZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSB7XG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgfTtcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSk9PntcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtrZXldID0gW1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pIHx8IHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcocGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pPT57XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSk9PnJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgLi4uc2VhcmNoUGFyYW1zTGlzdCkge1xuICAgIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKT0+e1xuICAgICAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSk9PnRhcmdldC5kZWxldGUoa2V5KVxuICAgICAgICApO1xuICAgICAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSAsIGdyb3VwcyAgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSk9PntcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pPT57XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBfdXRpbHMuRGVjb2RlRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKT0+e1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKSA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KT0+ZGVjb2RlKGVudHJ5KVxuICAgICAgICAgICAgICAgICkgOiBnLnJlcGVhdCA/IFtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlKG0pXG4gICAgICAgICAgICAgICAgXSA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0UGFyYW1ldHJpemVkUm91dGUgPSBnZXRQYXJhbWV0cml6ZWRSb3V0ZTtcbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKSB7XG4gICAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKTtcbiAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO1xuICAgIGlmIChyZXBlYXQpIHtcbiAgICAgICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBwYXJhbSxcbiAgICAgICAgcmVwZWF0LFxuICAgICAgICBvcHRpb25hbFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRQYXJhbWV0cml6ZWRSb3V0ZShyb3V0ZSkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gKHJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHtcbiAgICB9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50cy5tYXAoKHNlZ21lbnQpPT57XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5ICwgb3B0aW9uYWwgLCByZXBlYXQgIH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSk7XG4gICAgICAgICAgICBncm91cHNba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBwb3M6IGdyb3VwSW5kZXgrKyxcbiAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcmVwZWF0ID8gb3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDtcbiAgICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTc7XG4gICAgICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxO1xuICAgICAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpPT57XG4gICAgICAgICAgICBsZXQgcm91dGVLZXkgPSAnJztcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlKys7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5NztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVLZXk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJvdXRlS2V5cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHMubWFwKChzZWdtZW50KT0+e1xuICAgICAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5ICwgb3B0aW9uYWwgLCByZXBlYXQgIH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSk7XG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBlYXQgPyBvcHRpb25hbCA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1ldGVyaXplZFJvdXRlLFxuICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUsXG4gICAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgICByb3V0ZUtleXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1ldGVyaXplZFJvdXRlLFxuICAgICAgICBncm91cHNcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXRQYXJhbWV0cml6ZWRSb3V0ZShub3JtYWxpemVkUm91dGUpO1xuICAgIGlmICgncm91dGVLZXlzJyBpbiByZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtyZXN1bHQucGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgICAgICAgIGdyb3VwczogcmVzdWx0Lmdyb3VwcyxcbiAgICAgICAgICAgIHJvdXRlS2V5czogcmVzdWx0LnJvdXRlS2V5cyxcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtyZXN1bHQubmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3Jlc3VsdC5wYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgICBncm91cHM6IHJlc3VsdC5ncm91cHNcbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5leHBvcnRzLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyA9IG5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcztcbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCA9IGV4cG9ydHMuSHRtbENvbnRleHQgPSBleHBvcnRzLnVybE9iamVjdEtleXMgPSB2b2lkIDA7XG52YXIgX2Zvcm1hdFVybCA9IHJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoLi4uYXJncyk9PntcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wgLCBob3N0bmFtZSAsIHBvcnQgIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycgPyBDb21wb25lbnQgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybCkge1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsLnNwbGl0KCc/Jyk7XG4gICAgY29uc3QgdXJsTm9RdWVyeSA9IHVybFBhcnRzWzBdO1xuICAgIHJldHVybiB1cmxOb1F1ZXJ5Ly8gZmlyc3Qgd2UgcmVwbGFjZSBhbnkgbm9uLWVuY29kZWQgYmFja3NsYXNoZXMgd2l0aCBmb3J3YXJkXG4gICAgLy8gdGhlbiBub3JtYWxpemUgcmVwZWF0ZWQgZm9yd2FyZCBzbGFzaGVzXG4gICAgLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9cXC9cXC8rL2csICcvJykgKyAodXJsUGFydHNbMV0gPyBgPyR7dXJsUGFydHMuc2xpY2UoMSkuam9pbignPycpfWAgOiAnJyk7XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgaWYgKChyZWYgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCBjdHguY3R4ICYmIGN0eC5jdHgucmVzO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsIFxuXTtcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IHVybE9iamVjdEtleXM7XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgwLCBfZm9ybWF0VXJsKS5mb3JtYXRVcmwodXJsKTtcbn1cbmNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1AgPSBTUDtcbmNvbnN0IFNUID0gU1AgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG5leHBvcnRzLlNUID0gU1Q7XG5jbGFzcyBEZWNvZGVFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmV4cG9ydHMuRGVjb2RlRXJyb3IgPSBEZWNvZGVFcnJvcjtcbmNvbnN0IEh0bWxDb250ZXh0ID0gKDAsIF9yZWFjdCkuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydHMuSHRtbENvbnRleHQgPSBIdG1sQ29udGV4dDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgSHRtbENvbnRleHQuZGlzcGxheU5hbWUgPSAnSHRtbENvbnRleHQnO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGRpY2UxIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTEuc3ZnJztcclxuaW1wb3J0IGRpY2UyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTIuc3ZnJztcclxuaW1wb3J0IGRpY2UzIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTMuc3ZnJztcclxuaW1wb3J0IGRpY2U0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTQuc3ZnJztcclxuaW1wb3J0IGRpY2U1IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTUuc3ZnJztcclxuaW1wb3J0IGRpY2U2IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGljZTYuc3ZnJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0dhbWVEaWNlLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gR2FtZURpY2UoKSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCdDbGljayB0b21ib2wgZGliYXdhaCB1bnR1ayBtZW11bGFpIHBlcm1haW5hbicpO1xyXG4gIGNvbnN0IFtwbGF5ZXJTY29yZSwgc2V0UGxheWVyU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NvbXB1dGVyU2NvcmUsIHNldENvbXB1dGVyU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHBsYXllclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjb21wdXRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByZXN1bHREaWNlID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBsZXQgZGljZUltYWdlcyA9IFtkaWNlMSwgZGljZTIsIGRpY2UzLCBkaWNlNCwgZGljZTUsIGRpY2U2XTtcclxuXHJcbiAgY29uc3Qgcm9sbCA9ICgpID0+IHtcclxuICAgIC8vIEdlbmVyYXRlIHJhbmRvbSBudW1iZXJcclxuICAgIGNvbnN0IHBsYXllclJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJSYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuXHJcbiAgICAvLyBMb2dpYyBmb3IgdGhpcyBnYW1lXHJcbiAgICBpZiAocGxheWVyUmFuZG9tTnVtID4gY29tcHV0ZXJSYW5kb21OdW0pIHtcclxuICAgICAgc2V0UmVzdWx0KGBQbGF5ZXIgbWVuYW5nIGRlbmdhbiAke3BsYXllclJhbmRvbU51bSArIDF9IHBvaW50c2ApO1xyXG4gICAgICBzZXRQbGF5ZXJTY29yZSgocHJldlNjb3JlKSA9PiBwcmV2U2NvcmUgKyAxKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyUmFuZG9tTnVtIDwgY29tcHV0ZXJSYW5kb21OdW0pIHtcclxuICAgICAgc2V0UmVzdWx0KGBDb21wdXRlciBtZW5hbmcgZGVuZ2FuICR7Y29tcHV0ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgICAgc2V0Q29tcHV0ZXJTY29yZSgocHJldlNjb3JlKSA9PiBwcmV2U2NvcmUgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlc3VsdChgU2VyaSEgUGxheWVyIGRhbiBwZW1haW4gbWVuZGFwYXRrYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpY2VJbWFnZXNbcGxheWVyUmFuZG9tTnVtXSk7XHJcbiAgICBjb21wdXRlclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZGljZUltYWdlc1tjb21wdXRlclJhbmRvbU51bV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KCdDbGljayB0b21ib2wgaW5pIHVudHVrIG1lbXVsYWkgcGVybWFpbmFuJyk7XHJcbiAgICBzZXRQbGF5ZXJTY29yZSgwKTtcclxuICAgIHNldENvbXB1dGVyU2NvcmUoMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvZ2FtZWxpc3RcIik7IC8vIFVzZSByb3V0ZXIucHVzaCBpbnN0ZWFkIG9mIG5hdmlnYXRlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlQXJlYX0+XHJcbiAgICAgICAgICAgIDxwPlBsYXllcjwvcD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2RpY2UxfSByZWY9e3BsYXllclJlZn0gYWx0PSdEaWNlJyAvPlxyXG4gICAgICAgICAgICA8cD5TY29yZToge3BsYXllclNjb3JlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlQXJlYX0+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyPC9wPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZGljZTF9IHJlZj17Y29tcHV0ZXJSZWZ9IGFsdD0nRGljZScgLz5cclxuICAgICAgICAgICAgPHA+U2NvcmU6IHtjb21wdXRlclNjb3JlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fSByZWY9e3Jlc3VsdERpY2V9PlxyXG4gICAgICAgICAgICB7cmVzdWx0fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb2xsfSBjbGFzc05hbWU9e3N0eWxlcy5idG59PlxyXG4gICAgICAgICAgICBSb2xsIHRoZSBkaWNlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ0bn0gJHtzdHlsZXMucmVzZXR9YH0+XHJcbiAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lRGljZTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0dhbWVEaWNlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0dhbWVEaWNlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0dhbWVEaWNlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkdhbWVEaWNlX2RpY2VXcmFwcGVyX19LTUlmRyB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuR2FtZURpY2VfZGljZUFyZWFfXzFZQjV6IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuR2FtZURpY2VfaDJfXzFuQjJKIHtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5HYW1lRGljZV9wX18yRkJaVCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBtYXJnaW46IDNyZW0gMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkdhbWVEaWNlX2J0bl9fMzZyLWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM2ZmE5O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkdhbWVEaWNlX3Jlc2V0X18zRjVIeCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogIzgzNmZhOTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkdhbWVEaWNlX3VsX18zREgxTSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLkdhbWVEaWNlX2NlbnRlckNvbnRhaW5lcl9fM2JGa00ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvR2FtZURpY2UubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isc0JBQW1CO1NBQW5CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXVCO1NBQXZCLHVCQUF1QjtJQUN2QixzQkFBbUI7U0FBbkIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGljZVdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRpY2VBcmVhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaDIge1xcclxcbiAgICBtYXJnaW46IDJyZW0gMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnAge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgbWFyZ2luOiAzcmVtIDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM2ZmE5O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJlc2V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiAjODM2ZmE5O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jZW50ZXJDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImRpY2VXcmFwcGVyXCI6IFwiR2FtZURpY2VfZGljZVdyYXBwZXJfX0tNSWZHXCIsXG5cdFwiZGljZUFyZWFcIjogXCJHYW1lRGljZV9kaWNlQXJlYV9fMVlCNXpcIixcblx0XCJoMlwiOiBcIkdhbWVEaWNlX2gyX18xbkIySlwiLFxuXHRcInBcIjogXCJHYW1lRGljZV9wX18yRkJaVFwiLFxuXHRcImJ0blwiOiBcIkdhbWVEaWNlX2J0bl9fMzZyLWdcIixcblx0XCJyZXNldFwiOiBcIkdhbWVEaWNlX3Jlc2V0X18zRjVIeFwiLFxuXHRcInVsXCI6IFwiR2FtZURpY2VfdWxfXzNESDFNXCIsXG5cdFwiY2VudGVyQ29udGFpbmVyXCI6IFwiR2FtZURpY2VfY2VudGVyQ29udGFpbmVyX18zYkZrTVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwID0gbm9ybWFsaXplUGF0aFNlcDtcbmV4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aCA9IGRlbm9ybWFsaXplUGFnZVBhdGg7XG5mdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG59XG5mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2UpIHtcbiAgICBwYWdlID0gbm9ybWFsaXplUGF0aFNlcChwYWdlKTtcbiAgICBpZiAocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpIHtcbiAgICAgICAgcGFnZSA9IHBhZ2Uuc2xpY2UoNik7XG4gICAgfSBlbHNlIGlmIChwYWdlID09PSAnL2luZGV4Jykge1xuICAgICAgICBwYWdlID0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJvYmoiLCJfX2VzTW9kdWxlIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwia2V5IiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImUiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwiaHJlZiIsImFzIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZXJyIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiRXJyb3IiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInAiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJwcmVmZXRjaCIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfcm91dGVyIiwiX3dpdGhSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcmVhY3QiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsInN0YWNrIiwiX2RlZmF1bHQiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImFyZ3MiLCJfcm91dGVyMSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJsb2NhbGUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwidHlwZSIsImhhbmRsZXIiLCJvZmYiLCJpbmRleE9mIiwiZW1pdCIsImV2dHMiLCJjcmVhdGVDb250ZXh0IiwiZ2V0RG9tYWluTG9jYWxlIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsImludGVycG9sYXRlQXMiLCJyZXNvbHZlSHJlZiIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkb21haW5Mb2NhbGVzIiwiZGV0ZWN0ZWREb21haW4iLCJ1bmRlZmluZWQiLCJodHRwIiwiZG9tYWluIiwiZGVmYXVsdExvY2FsZSIsInBhdGhMb3dlciIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsIl8iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJrZXlzIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJyZXBsYWNlIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJyZXNvbHZlZEhyZWYiLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsInJlc29sdmVkQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQxIiwiQ29tcG9uZW50IiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJvcHRpb25zIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJzaGFsbG93IiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJpc0xvY2FsZURvbWFpbiIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJyZWYiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsImdldFBhZ2VMaXN0IiwicmV3cml0ZXMiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJ3YXJuIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsImZldGNoQ29tcG9uZW50Iiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInJlZjEiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsIl9zY3JvbGwiLCJzY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJsb2FkRXJyb3JGYWlsIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsInByaW9yaXR5IiwiY2FuY2VsIiwibG9hZFBhZ2UiLCJjb21wb25lbnRSZXN1bHQiLCJlcnIyIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJuZXdPYmoiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNsYXNoZXMiLCJnZXRBc3NldFBhdGhGcm9tUm91dGUiLCJleHQiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJ0YXJnZXQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJEZWNvZGVFcnJvciIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJnZXRQYXJhbWV0cml6ZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50Iiwibm9ybWFsaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJTUCIsIkh0bWxDb250ZXh0IiwidXJsT2JqZWN0S2V5cyIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsInVybE5vUXVlcnkiLCJtZWFzdXJlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkJ1dHRvbiIsImRpY2UxIiwiZGljZTIiLCJkaWNlMyIsImRpY2U0IiwiZGljZTUiLCJkaWNlNiIsIkdhbWVEaWNlIiwic2V0UmVzdWx0IiwicGxheWVyU2NvcmUiLCJzZXRQbGF5ZXJTY29yZSIsImNvbXB1dGVyU2NvcmUiLCJzZXRDb21wdXRlclNjb3JlIiwicGxheWVyUmVmIiwiY29tcHV0ZXJSZWYiLCJyZXN1bHREaWNlIiwiZGljZUltYWdlcyIsInJvbGwiLCJwbGF5ZXJSYW5kb21OdW0iLCJmbG9vciIsInJhbmRvbSIsImNvbXB1dGVyUmFuZG9tTnVtIiwicHJldlNjb3JlIiwiY3VycmVudCIsInNldEF0dHJpYnV0ZSIsInJlc2V0IiwiaGFuZGxlQmFja0NsaWNrIiwiYmFja2dyb3VuZCIsImNlbnRlckNvbnRhaW5lciIsImRpY2VXcmFwcGVyIiwiZGljZUFyZWEiLCJidG4iXSwic291cmNlUm9vdCI6IiJ9