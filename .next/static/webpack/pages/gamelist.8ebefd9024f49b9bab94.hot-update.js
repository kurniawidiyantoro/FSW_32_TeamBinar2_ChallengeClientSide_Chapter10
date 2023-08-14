"use strict";
self["webpackHotUpdate_N_E"]("pages/gamelist",{

/***/ "./pages/gamelist/index.js":
/*!*********************************!*\
  !*** ./pages/gamelist/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamelist\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import { useNavigate } from "react-router-dom";








var GameList = function GameList(_ref) {
  _s();

  var isLoggedIn = _ref.isLoggedIn,
      user = _ref.user;
  // const navigate = useNavigate();
  var items = [{
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

  var checkToken = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, email;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem('token');
              email = localStorage.getItem('email');
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

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    checkToken();
  }, []);

  var handleClick = function handleClick(path) {
    // navigate(path);
    console.log(path);
    window.location.replace(path);
  };

  var textTitle = {
    fontSize: '21px',
    textAlign: 'center'
  };
  var textDescription = {
    fontSize: '16px',
    textAlign: 'center'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_4__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTitle),
          children: "Selamat datang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTitle),
          children: "Game List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().mderwSm),
        children: items.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().rectangleItem),
            style: {
              backgroundImage: "url(".concat(item.backgroundImage, ")")
            },
            "data-aos": "fade-up",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().rectangleItemContent),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
                className: "h4 mb-2",
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {
                color: "primary",
                onClick: function onClick() {
                  return handleClick(item.path);
                },
                children: "Play"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 14
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 14
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s(GameList, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = GameList;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps)(GameList));

var _c;

$RefreshReg$(_c, "GameList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuOGViZWZkOTAyNGY0OWI5YmFiOTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pDO0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsSUFBQUEsS0FBSyxFQUFFLG9CQURUO0FBRUVDLElBQUFBLFdBQVcsRUFBRSx5Q0FGZjtBQUdFQyxJQUFBQSxlQUFlLEVBQUUsZ0NBSG5CO0FBSUVDLElBQUFBLElBQUksRUFBRTtBQUpSLEdBRFksRUFPWjtBQUNFSCxJQUFBQSxLQUFLLEVBQUUsZUFEVDtBQUVFQyxJQUFBQSxXQUFXLEVBQUUsMENBRmY7QUFHRUMsSUFBQUEsZUFBZSxFQUFFLGtCQUhuQjtBQUlFQyxJQUFBQSxJQUFJLEVBQUU7QUFKUixHQVBZLEVBYVo7QUFDRUgsSUFBQUEsS0FBSyxFQUFFLFdBRFQ7QUFFRUMsSUFBQUEsV0FBVyxFQUFFLHdDQUZmO0FBR0VDLElBQUFBLGVBQWUsRUFBRSxrQkFIbkI7QUFJRUMsSUFBQUEsSUFBSSxFQUFFO0FBSlIsR0FiWSxDQUFkOztBQXFCQSxNQUFNQyxVQUFVO0FBQUEsNFdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGNBQUFBLEtBRFcsR0FDSEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBREc7QUFFWEMsY0FBQUEsS0FGVyxHQUVIRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FGRztBQUdqQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQUksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlG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QkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQSxhQUNLdUIsS0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQXZHRDs7R0FBTTlCOztLQUFBQTs7QUF5R04sSUFBTWlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENqQyxJQUFBQSxVQUFVLEVBQUVpQyxLQUFLLENBQUNqQyxVQURnQjtBQUVsQ0MsSUFBQUEsSUFBSSxFQUFFZ0MsS0FBSyxDQUFDaEM7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztBQUtBLCtEQUFlSCxvREFBTyxDQUFDa0MsZUFBRCxDQUFQLENBQXlCakMsUUFBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lbGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgR2FtZUxpc3QgPSAoeyBpc0xvZ2dlZEluLCB1c2VyIH0pID0+IHtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3JcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQmFudHVuZyBHdW50aW5nIEtlcnRhcyBtZWxhd2FuIGNvbXB1dGVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJy9pbWFnZXMvcm9jay1wYXBlci1zY2lzc29yLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVycHNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhlYWQgb3IgVGFpbHNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTWVuY29iYSBtZW5lYmFrIGhhc2lsIGRhcmkgbGVtcGFyYW4gY29pblwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL2NvaW4uanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZWNvaW5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdhbWUgRGFkdVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJQZXJtYWluYW4gbGVtcGFyIGRhZHUgbWVsYXdhbiBrb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL2RhZHUuanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZWRpY2VcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZWQgIScpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocGF0aCkgPT4ge1xyXG4gICAgLy8gbmF2aWdhdGUocGF0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgdGV4dFRpdGxlID0ge1xyXG4gICAgZm9udFNpemU6ICcyMXB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHREZXNjcmlwdGlvbiA9IHtcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgbWQ6cHktMjBcIj5cclxuICAgICAgICB7LyogU2VjdGlvbiBoZWFkZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVUaXRsZX0+U2VsYW1hdCBkYXRhbmc8L2gyPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVUaXRsZX0+R2FtZSBMaXN0PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIEJlcmJhZ2FpIHBlcm1haW5hbiB5YW5nIGJpc2EgYW5kYSBtYWlua2FuIGRpIHdlYnNpdGUga2FtaVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogSXRlbXMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGVyd1NtfT5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVjdGFuZ2xlSXRlbX1cclxuICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uYmFja2dyb3VuZEltYWdlfSlgIH19XHJcbiAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjdGFuZ2xlSXRlbUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgey8qIEFkZCBTVkcgY29udGVudCBoZXJlIGlmIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BoNCBtYi0yYH0+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBpc0xvZ2dlZEluOiBzdGF0ZS5pc0xvZ2dlZEluLFxyXG4gIHVzZXI6IHN0YXRlLnVzZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdhbWVMaXN0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsIkdhbWVMaXN0IiwiaXNMb2dnZWRJbiIsInVzZXIiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwYXRoIiwiY2hlY2tUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJ0ZXh0VGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHREZXNjcmlwdGlvbiIsIkZlYXR1cmVQYWdlSW1hZ2UiLCJmZWF0dXJlVGl0bGUiLCJmZWF0dXJlRGVzY3JpcHRpb24iLCJtZGVyd1NtIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVjdGFuZ2xlSXRlbSIsInJlY3RhbmdsZUl0ZW1Db250ZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9