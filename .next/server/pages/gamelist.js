(() => {
var exports = {};
exports.id = "pages/gamelist";
exports.ids = ["pages/gamelist"];
exports.modules = {

/***/ "./pages/components/navbarUser.js":
/*!****************************************!*\
  !*** ./pages/components/navbarUser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Learn\\bootcamp\\binaracademy-fsw\\chapter-10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\components\\navbarUser.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function NavbarUser(args) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar, _objectSpread(_objectSpread({}, args), {}, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.NavbarBrand, {
        className: "ps-3",
        children: "Team 2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Nav, {
        className: "ms-auto",
        navbar: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            href: "/editprofile",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            href: "/",
            className: "pe-3",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarUser);

/***/ }),

/***/ "./pages/gamelist/index.js":
/*!*********************************!*\
  !*** ./pages/gamelist/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Learn\\bootcamp\\binaracademy-fsw\\chapter-10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamelist\\index.js";
 // import { useNavigate } from "react-router-dom";






const GameList = () => {
  // const navigate = useNavigate();
  const items = [{
    title: "Rock Paper Scissor",
    description: "Bantung Gunting Kertas melawan computer",
    backgroundImage: '/images/rock-paper-scissor.jpg',
    path: "/gamerps"
  }, {
    title: "Head or Tails",
    description: "Mencoba menebak hasil dari lemparan coin",
    backgroundImage: '/images/coin.jpg',
    path: "/gamecoin"
  }, {
    title: "Game Dadu",
    description: "Permainan lempar dadu melawan komputer",
    backgroundImage: '/images/dadu.jpg',
    path: "/gamedice"
  }];

  const checkToken = async () => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    console.log(token);
    console.log(email);

    try {
      if (!token) {
        console.log('Not Authorized!');
        window.location.replace('/login');
      } else {
        console.log('Authorized !');
      }
    } catch (error) {
      console.log('Internal Server Error!');
      window.location.replace('/login');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkToken();
  }, []);

  const handleClick = path => {
    // navigate(path);
    console.log(path);
    window.location.replace(path);
  };

  const textTitle = {
    fontSize: '21px',
    textAlign: 'center'
  };
  const textDescription = {
    fontSize: '16px',
    textAlign: 'center'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_4___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "max-w-3xl mx-auto text-center pb-12 md:pb-20",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_4___default().featureTitle),
          children: "Game List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_4___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "mderw-sm mx-auto flex flex-wrap gap-8 md:max-w-2xl lg:max-w-none",
        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "rectangle-item",
          style: {
            backgroundImage: `url(${item.backgroundImage})`
          },
          "data-aos": "fade-up",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "rectangle-item-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
              className: "w-12 h-12 mb-4",
              viewBox: "0 0 64 64",
              xmlns: "http://www.w3.org/2000/svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
              style: textTitle,
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              style: textDescription,
              children: item.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: "primary",
                onClick: () => handleClick(item.path),
                children: "Play"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameList);

/***/ }),

/***/ "./styles/feature.module.css":
/*!***********************************!*\
  !*** ./styles/feature.module.css ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"FeaturePageImage": "feature_FeaturePageImage__15vSC",
	"featureTitle": "feature_featureTitle__3j_jX",
	"featureDescription": "feature_featureDescription__1_igv",
	"mderwSm": "feature_mderwSm__1hnjs",
	"rectangleItem": "feature_rectangleItem__RYjPa",
	"rectangleItemBefore": "feature_rectangleItemBefore__9m5vj",
	"rectangleItemContent": "feature_rectangleItemContent__1VXOY"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/gamelist/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUNFLHVCQUFTLEVBQUMsZ0JBRFo7QUFFRSxxQkFBTyxFQUFDLFdBRlY7QUFHRSxtQkFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVFFO0FBQUksbUJBQUssRUFBRWMsU0FBWDtBQUFBLHdCQUF1QlEsSUFBSSxDQUFDeEI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRixlQVNFO0FBQUcsbUJBQUssRUFBRW1CLGVBQVY7QUFBQSx3QkFDR0ssSUFBSSxDQUFDdkI7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRGLGVBWUU7QUFBQSxxQ0FDRSw4REFBQyw4Q0FBRDtBQUNFLHFCQUFLLEVBQUMsU0FEUjtBQUVFLHVCQUFPLEVBQUUsTUFBTWMsV0FBVyxDQUFDUyxJQUFJLENBQUNyQixJQUFOLENBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixXQUNPc0IsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnREQsQ0E5R0Q7O0FBZ0hBLGlFQUFlM0IsUUFBZjs7Ozs7Ozs7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyVXNlci5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2dhbWVsaXN0L2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmt9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyVXNlcihhcmdzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgey4uLmFyZ3N9IGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgY2xhc3NOYW1lPVwicHMtM1wiPlRlYW0gMjwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwZS0zXCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclVzZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE5hdmJhclVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyVXNlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBHYW1lTGlzdCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3JcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQmFudHVuZyBHdW50aW5nIEtlcnRhcyBtZWxhd2FuIGNvbXB1dGVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJy9pbWFnZXMvcm9jay1wYXBlci1zY2lzc29yLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVycHNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhlYWQgb3IgVGFpbHNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTWVuY29iYSBtZW5lYmFrIGhhc2lsIGRhcmkgbGVtcGFyYW4gY29pblwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL2NvaW4uanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZWNvaW5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdhbWUgRGFkdVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJQZXJtYWluYW4gbGVtcGFyIGRhZHUgbWVsYXdhbiBrb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL2RhZHUuanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZWRpY2VcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZWQgIScpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocGF0aCkgPT4ge1xyXG4gICAgLy8gbmF2aWdhdGUocGF0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgdGV4dFRpdGxlID0ge1xyXG4gICAgZm9udFNpemU6ICcyMXB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHREZXNjcmlwdGlvbiA9IHtcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgICAgPE5hdmJhclVzZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMiBtZDpweS0yMFwiPlxyXG4gICAgICAgIHsvKiBTZWN0aW9uIGhlYWRlciAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHRleHQtY2VudGVyIHBiLTEyIG1kOnBiLTIwXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZVRpdGxlfT5HYW1lIExpc3Q8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZURlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgQmVyYmFnYWkgcGVybWFpbmFuIHlhbmcgYmlzYSBhbmRhIG1haW5rYW4gZGkgd2Vic2l0ZSBrYW1pXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBJdGVtcyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kZXJ3LXNtIG14LWF1dG8gZmxleCBmbGV4LXdyYXAgZ2FwLTggbWQ6bWF4LXctMnhsIGxnOm1heC13LW5vbmVcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlY3RhbmdsZS1pdGVtXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpdGVtLmJhY2tncm91bmRJbWFnZX0pYCB9fVxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZS1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0IDY0XCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTVkcgY29kZSAqL31cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt0ZXh0VGl0bGV9PntpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17dGV4dERlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmVhdHVyZVBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfRmVhdHVyZVBhZ2VJbWFnZV9fMTV2U0NcIixcblx0XCJmZWF0dXJlVGl0bGVcIjogXCJmZWF0dXJlX2ZlYXR1cmVUaXRsZV9fM2pfalhcIixcblx0XCJmZWF0dXJlRGVzY3JpcHRpb25cIjogXCJmZWF0dXJlX2ZlYXR1cmVEZXNjcmlwdGlvbl9fMV9pZ3ZcIixcblx0XCJtZGVyd1NtXCI6IFwiZmVhdHVyZV9tZGVyd1NtX18xaG5qc1wiLFxuXHRcInJlY3RhbmdsZUl0ZW1cIjogXCJmZWF0dXJlX3JlY3RhbmdsZUl0ZW1fX1JZalBhXCIsXG5cdFwicmVjdGFuZ2xlSXRlbUJlZm9yZVwiOiBcImZlYXR1cmVfcmVjdGFuZ2xlSXRlbUJlZm9yZV9fOW01dmpcIixcblx0XCJyZWN0YW5nbGVJdGVtQ29udGVudFwiOiBcImZlYXR1cmVfcmVjdGFuZ2xlSXRlbUNvbnRlbnRfXzFWWE9ZXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiTmF2YmFyVXNlciIsImFyZ3MiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJzdHlsZXMiLCJHYW1lTGlzdCIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmRJbWFnZSIsInBhdGgiLCJjaGVja1Rva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJoYW5kbGVDbGljayIsInRleHRUaXRsZSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidGV4dERlc2NyaXB0aW9uIiwiRmVhdHVyZVBhZ2VJbWFnZSIsImZlYXR1cmVUaXRsZSIsImZlYXR1cmVEZXNjcmlwdGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=