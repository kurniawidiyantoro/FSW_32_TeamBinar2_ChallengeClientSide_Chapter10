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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamelist\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var GameList = function GameList(_ref) {
  _s();

  var isLoggedIn = _ref.isLoggedIn,
      user = _ref.user,
      playedGames = _ref.playedGames;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

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
    var email = localStorage.getItem('email');
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_6__.setEmail)(email));
    checkToken(); // Retrieve played games from local storage or Redux store

    var playedGames = JSON.parse(localStorage.getItem('playedGames')) || {}; // Dispatch the action to update the played games in Redux store

    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_6__.setPlayedGames)(playedGames));
  }, []);

  var handleClick = function handleClick(path) {
    setLoading(true);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_4__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().featureTitle),
          children: "Selamat datang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().featureTitle),
          children: "Game List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().mderwSm),
        children: items.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "".concat((_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().rectangleItem), " ").concat(playedGames[item.path] ? 'Pernah Dimainkan' : ''),
            style: {
              backgroundImage: "url(".concat(item.backgroundImage, ")")
            },
            "data-aos": "fade-up",
            children: [console.log("Item path: ".concat(item.path, ", Played: ").concat(playedGames[item.path])), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().rectangleItemContent),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("svg", {
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
                className: "h4 mb-2",
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                color: "primary",
                onClick: function onClick() {
                  return handleClick(item.path);
                },
                disabled: loading,
                children: loading ? "Processing" : "Play"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 14
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, _this);
};

_s(GameList, "S06ECIVsVsXLKRSJOLLEgi7PKo8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];
});

_c = GameList;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.reducer.isLoggedIn,
    user: state.reducer.user,
    playedGames: state.reducer.playedGames
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuOTE5M2JkYzc4NWEyNjExNWNlYjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN0RCxNQUFNQyxRQUFRLEdBQUdQLHdEQUFXLEVBQTVCOztBQUNBLGtCQUE4Qk4sK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT2MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxJQUFBQSxLQUFLLEVBQUUsb0JBRFQ7QUFFRUMsSUFBQUEsV0FBVyxFQUFFLHlDQUZmO0FBR0VDLElBQUFBLGVBQWUsRUFBRSxnQ0FIbkI7QUFJRUMsSUFBQUEsSUFBSSxFQUFFO0FBSlIsR0FEWSxFQU9aO0FBQ0VILElBQUFBLEtBQUssRUFBRSxlQURUO0FBRUVDLElBQUFBLFdBQVcsRUFBRSwwQ0FGZjtBQUdFQyxJQUFBQSxlQUFlLEVBQUUsa0JBSG5CO0FBSUVDLElBQUFBLElBQUksRUFBRTtBQUpSLEdBUFksRUFhWjtBQUNFSCxJQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFQyxJQUFBQSxXQUFXLEVBQUUsd0NBRmY7QUFHRUMsSUFBQUEsZUFBZSxFQUFFLGtCQUhuQjtBQUlFQyxJQUFBQSxJQUFJLEVBQUU7QUFKUixHQWJZLENBQWQ7O0FBb0JBLE1BQU1DLFVBQVU7QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsY0FBQUEsS0FEVyxHQUNIQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIs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YUg7OztLQURiRzs7QUFzSE4sSUFBTXVDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbEN2QyxJQUFBQSxVQUFVLEVBQUV1QyxLQUFLLENBQUNDLE9BQU4sQ0FBY3hDLFVBRFE7QUFFbENDLElBQUFBLElBQUksRUFBRXNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjdkMsSUFGYztBQUdsQ0MsSUFBQUEsV0FBVyxFQUFFcUMsS0FBSyxDQUFDQyxPQUFOLENBQWN0QztBQUhPLEdBQVo7QUFBQSxDQUF4Qjs7QUFNQSwrREFBZVAsb0RBQU8sQ0FBQzJDLGVBQUQsQ0FBUCxDQUF5QnZDLFFBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZWxpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0RW1haWwsIHNldFBsYXllZEdhbWVzICB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIjtcclxuXHJcblxyXG5jb25zdCBHYW1lTGlzdCA9ICh7IGlzTG9nZ2VkSW4sIHVzZXIsIHBsYXllZEdhbWVzIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcbiAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlJvY2sgUGFwZXIgU2Npc3NvclwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJCYW50dW5nIEd1bnRpbmcgS2VydGFzIG1lbGF3YW4gY29tcHV0ZXJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9yb2NrLXBhcGVyLXNjaXNzb3IuanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZXJwc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSGVhZCBvciBUYWlsc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJNZW5jb2JhIG1lbmViYWsgaGFzaWwgZGFyaSBsZW1wYXJhbiBjb2luXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJy9pbWFnZXMvY29pbi5qcGcnLFxyXG4gICAgICBwYXRoOiBcIi9nYW1lY29pblwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR2FtZSBEYWR1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcm1haW5hbiBsZW1wYXIgZGFkdSBtZWxhd2FuIGtvbXB1dGVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJy9pbWFnZXMvZGFkdS5qcGcnLFxyXG4gICAgICBwYXRoOiBcIi9nYW1lZGljZVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZWQhJyk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRob3JpemVkICEnKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW50ZXJuYWwgU2VydmVyIEVycm9yIScpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XHJcbiAgICBkaXNwYXRjaChzZXRFbWFpbChlbWFpbCkpO1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gICAgLy8gUmV0cmlldmUgcGxheWVkIGdhbWVzIGZyb20gbG9jYWwgc3RvcmFnZSBvciBSZWR1eCBzdG9yZVxyXG4gIGNvbnN0IHBsYXllZEdhbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVkR2FtZXMnKSkgfHwge307XHJcblxyXG4gIC8vIERpc3BhdGNoIHRoZSBhY3Rpb24gdG8gdXBkYXRlIHRoZSBwbGF5ZWQgZ2FtZXMgaW4gUmVkdXggc3RvcmVcclxuICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyhwbGF5ZWRHYW1lcykpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChwYXRoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpOyBcclxuICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IHRleHRUaXRsZSA9IHtcclxuICAgIGZvbnRTaXplOiAnMjFweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGV4dERlc2NyaXB0aW9uID0ge1xyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRmVhdHVyZVBhZ2VJbWFnZX0+XHJcbiAgICAgIDxOYXZiYXJVc2VyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXJFbWFpbD17dXNlci5lbWFpbH0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyIG1kOnB5LTIwXCI+XHJcbiAgICAgICAgey8qIFNlY3Rpb24gaGVhZGVyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlVGl0bGV9PlNlbGFtYXQgZGF0YW5nPC9oMj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlVGl0bGV9PkdhbWUgTGlzdDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCZXJiYWdhaSBwZXJtYWluYW4geWFuZyBiaXNhIGFuZGEgbWFpbmthbiBkaSB3ZWJzaXRlIGthbWlcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEl0ZW1zICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRlcndTbX0+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVjdGFuZ2xlSXRlbX0gJHtwbGF5ZWRHYW1lc1tpdGVtLnBhdGhdID8gJ1Blcm5haCBEaW1haW5rYW4nICA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5iYWNrZ3JvdW5kSW1hZ2V9KWAgfX1cclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVkVGV4dH0+e3BsYXllZEdhbWVzW2l0ZW0ucGF0aF0gPyA6ICcnfTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2coYEl0ZW0gcGF0aDogJHtpdGVtLnBhdGh9LCBQbGF5ZWQ6ICR7cGxheWVkR2FtZXNbaXRlbS5wYXRoXX1gKX1cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjdGFuZ2xlSXRlbUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgey8qIEFkZCBTVkcgY29udGVudCBoZXJlIGlmIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BoNCBtYi0yYH0+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfSBcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJQcm9jZXNzaW5nXCIgOiBcIlBsYXlcIn1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgcGxheWVkR2FtZXM6IHN0YXRlLnJlZHVjZXIucGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdhbWVMaXN0KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiTmF2YmFyIiwiTmF2YmFyVXNlciIsInN0eWxlcyIsImNvbm5lY3QiLCJ1c2VEaXNwYXRjaCIsInNldEVtYWlsIiwic2V0UGxheWVkR2FtZXMiLCJHYW1lTGlzdCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwicGxheWVkR2FtZXMiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXRlbXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwicGF0aCIsImNoZWNrVG9rZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlcnJvciIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUNsaWNrIiwidGV4dFRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVzY3JpcHRpb24iLCJGZWF0dXJlUGFnZUltYWdlIiwiZmVhdHVyZVRpdGxlIiwiZmVhdHVyZURlc2NyaXB0aW9uIiwibWRlcndTbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlY3RhbmdsZUl0ZW0iLCJyZWN0YW5nbGVJdGVtQ29udGVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=