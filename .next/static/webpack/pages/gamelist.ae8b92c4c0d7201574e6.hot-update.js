"use strict";
self["webpackHotUpdate_N_E"]("pages/gamelist",{

/***/ "./pages/gamelist/index.js":
/*!*********************************!*\
  !*** ./pages/gamelist/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Learn\\bootcamp\\binaracademy-fsw\\chapter-10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamelist\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import { useNavigate } from "react-router-dom";






var GameList = function GameList() {
  _s();

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
    var _ref = (0,D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, email;
      return D_Learn_bootcamp_binaracademy_fsw_chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    checkToken();
  }, []);

  var handleClick = function handleClick(path) {
    // navigate(path);
    console.log(path);
    window.location.replace('/login');
  };

  var textTitle = {
    fontSize: '21px',
    textAlign: 'center'
  };
  var textDescription = {
    fontSize: '16px',
    textAlign: 'center'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_5___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "max-w-3xl mx-auto text-center pb-12 md:pb-20",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_5___default().featureTitle),
          children: "Game List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_5___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "mderw-sm mx-auto flex flex-wrap gap-8 md:max-w-2xl lg:max-w-none",
        children: items.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "rectangle-item",
            style: {
              backgroundImage: "url(".concat(item.backgroundImage, ")")
            },
            "data-aos": "fade-up",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "rectangle-item-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("svg", {
                className: "w-12 h-12 mb-4",
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
                style: textTitle,
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                style: textDescription,
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
                  color: "primary",
                  onClick: function onClick() {
                    return handleClick(item.path);
                  },
                  children: "Play"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(GameList, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = GameList;
/* harmony default export */ __webpack_exports__["default"] = (GameList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuYWU4YjkyYzRjMGQ3MjAxNTc0ZTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQjtBQUVBLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLElBQUFBLEtBQUssRUFBRSxvQkFEVDtBQUVFQyxJQUFBQSxXQUFXLEVBQUUseUNBRmY7QUFHRUMsSUFBQUEsZUFBZSxFQUFFLGdDQUhuQjtBQUlFQyxJQUFBQSxJQUFJLEVBQUU7QUFKUixHQURZLEVBT1o7QUFDRUgsSUFBQUEsS0FBSyxFQUFFLGVBRFQ7QUFFRUMsSUFBQUEsV0FBVyxFQUFFLDBDQUZmO0FBR0VDLElBQUFBLGVBQWUsRUFBRSxrQkFIbkI7QUFJRUMsSUFBQUEsSUFBSSxFQUFFO0FBSlIsR0FQWSxFQWFaO0FBQ0VILElBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLElBQUFBLFdBQVcsRUFBRSx3Q0FGZjtBQUdFQyxJQUFBQSxlQUFlLEVBQUUsa0JBSG5CO0FBSUVDLElBQUFBLElBQUksRUFBRTtBQUpSLEdBYlksQ0FBZDs7QUFxQkEsTUFBTUMsVUFBVTtBQUFBLCtaQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYQyxjQUFBQSxLQURXLEdBQ0hDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQURHO0FBRVhDLGNBQUFBLEtBRlcsR0FFSEYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRkc7QUFHakJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0FJLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQUNBLGtCQUFJO0FBQ0Ysb0JBQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1ZJLGtCQUFBQSxPQUFPLENBQUNDLEdB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U0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQTlHRDs7R0FBTTNCOztLQUFBQTtBQWdITiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lbGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgR2FtZUxpc3QgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUm9jayBQYXBlciBTY2lzc29yXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJhbnR1bmcgR3VudGluZyBLZXJ0YXMgbWVsYXdhbiBjb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL3JvY2stcGFwZXItc2Npc3Nvci5qcGcnLFxyXG4gICAgICBwYXRoOiBcIi9nYW1lcnBzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIZWFkIG9yIFRhaWxzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1lbmNvYmEgbWVuZWJhayBoYXNpbCBkYXJpIGxlbXBhcmFuIGNvaW5cIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9jb2luLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVjb2luXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHYW1lIERhZHVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUGVybWFpbmFuIGxlbXBhciBkYWR1IG1lbGF3YW4ga29tcHV0ZXJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9kYWR1LmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVkaWNlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZWQhJyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRob3JpemVkICEnKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW50ZXJuYWwgU2VydmVyIEVycm9yIScpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHBhdGgpID0+IHtcclxuICAgIC8vIG5hdmlnYXRlKHBhdGgpO1xyXG4gICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB0ZXh0VGl0bGUgPSB7XHJcbiAgICBmb250U2l6ZTogJzIxcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGV4dERlc2NyaXB0aW9uID0ge1xyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZlYXR1cmVQYWdlSW1hZ2V9PlxyXG4gICAgICA8TmF2YmFyVXNlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyIG1kOnB5LTIwXCI+XHJcbiAgICAgICAgey8qIFNlY3Rpb24gaGVhZGVyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gdGV4dC1jZW50ZXIgcGItMTIgbWQ6cGItMjBcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlVGl0bGV9PkdhbWUgTGlzdDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCZXJiYWdhaSBwZXJtYWluYW4geWFuZyBiaXNhIGFuZGEgbWFpbmthbiBkaSB3ZWJzaXRlIGthbWlcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEl0ZW1zICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRlcnctc20gbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBnYXAtOCBtZDptYXgtdy0yeGwgbGc6bWF4LXctbm9uZVwiPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVjdGFuZ2xlLWl0ZW1cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uYmFja2dyb3VuZEltYWdlfSlgIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgey8qIFNWRyBjb2RlICovfVxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3RleHRUaXRsZX0+e2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt0ZXh0RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGl0ZW0ucGF0aCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQbGF5XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiR2FtZUxpc3QiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwYXRoIiwiY2hlY2tUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJ0ZXh0VGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHREZXNjcmlwdGlvbiIsIkZlYXR1cmVQYWdlSW1hZ2UiLCJmZWF0dXJlVGl0bGUiLCJmZWF0dXJlRGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9