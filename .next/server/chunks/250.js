exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 7250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1467);
/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const items = [{
  src: '/images/rock-paper-scissor.jpg',
  altText: 'Your happiness is here',
  caption: 'Don\'t let it go!',
  key: 1
}, {
  src: '/images/coin.jpg',
  altText: 'Your happiness is here',
  caption: 'Don\'t let it go!',
  key: 2
}, {
  src: '/images/dadu.jpg',
  altText: 'Your happiness is here',
  caption: 'Don\'t let it go!',
  key: 3
} // Rest of the items...
];

function Carouselcom(args) {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: animating,
    1: setAnimating
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map(item => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.CarouselItem, {
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_3___default().carouselImage),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: item.src,
          alt: item.altText,
          className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_3___default().carouselImage)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.CarouselCaption, {
        captionText: item.altText,
        captionHeader: item.caption
      })]
    }, item.src);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Carousel, _objectSpread(_objectSpread({
    activeIndex: activeIndex,
    next: next,
    previous: previous
  }, args), {}, {
    children: [slides, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: previous
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: next
    })]
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carouselcom);

/***/ }),

/***/ 1467:
/***/ ((module) => {

// Exports
module.exports = {
	"HomePage": "HomePage_HomePage__4rGld",
	"HomePageLogo": "HomePage_HomePageLogo__2GNcd",
	"HomePageImage": "HomePage_HomePageImage__2ASwP",
	"carouselWrapper": "HomePage_carouselWrapper__M9zaw",
	"carouselImage": "HomePage_carouselImage__2mMyx",
	"contentContainer": "HomePage_contentContainer__3brX9",
	"welcomeText": "HomePage_welcomeText__W0MIG",
	"HomePage-logo": "HomePage_HomePage-logo__32LVh",
	"App-logo-spin": "HomePage_App-logo-spin__en1-M",
	"HomePageHeader": "HomePage_HomePageHeader__3BQqw",
	"HomePageLink": "HomePage_HomePageLink__8wwjH"
};


/***/ })

};
;