exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 2833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9583);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const Footer = () => {
  const socialMediaLinks = [{
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__/* .FaFacebook */ .Am9, {})
  }, {
    name: 'Twitter',
    url: 'https://www.twitter.com/',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__/* .FaTwitter */ .fWC, {})
  }, {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__/* .FaInstagram */ .Zf_, {})
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("footer", {
    className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("ul", {
      className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().socialMediaLinks),
      children: socialMediaLinks.map(link => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: link.icon
        })
      }, link.name))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 1712:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__A2QDl",
	"socialMediaLinks": "footer_socialMediaLinks__7suV2"
};


/***/ })

};
;