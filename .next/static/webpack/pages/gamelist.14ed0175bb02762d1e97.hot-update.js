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

  var handleLeaderBboardkClick = function handleLeaderBboardkClick() {
    window.location.replace('/leaderboard');
  };

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
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().featureTitle),
          children: "Game List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
          color: "primary",
          onClick: handleLeaderBboardkClick,
          userEmail: user.email,
          children: "Leaderboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().mderwSm),
        children: items.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "".concat((_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().rectangleItem), " ").concat(playedGames[item.path] ? (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().played) : ''),
            style: {
              backgroundImage: "url(".concat(item.backgroundImage, ")")
            },
            "data-aos": "fade-up",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().playedText),
              children: playedGames[item.path] ? 'Pernah Dimainkan' : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), console.log("Item path: ".concat(item.path, ", Played: ").concat(playedGames[item.path])), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().rectangleItemContent),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("svg", {
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
                className: "h4 mb-2",
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 16
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
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
                lineNumber: 118,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 14
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuMTRlZDAxNzViYjAyNzYyZDFlOTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN0RCxNQUFNQyxRQUFRLEdBQUdQLHdEQUFXLEVBQTVCOztBQUNBLGtCQUE4Qk4sK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT2MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckNDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsY0FBeEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLElBQUFBLEtBQUssRUFBRSxvQkFEVDtBQUVFQyxJQUFBQSxXQUFXLEVBQUUseUNBRmY7QUFHRUMsSUFBQUEsZUFBZSxFQUFFLGdDQUhuQjtBQUlFQyxJQUFBQSxJQUFJLEVBQUU7QUFKUixHQURZLEVBT1o7QUFDRUgsSUFBQUEsS0FBSyxFQUFFLGVBRFQ7QUFFRUMsSUFBQUEsV0FBVyxFQUFFLDBDQUZmO0FBR0VDLElBQUFBLGVBQWUsRUFBRSxrQkFIbkI7QUFJRUMsSUFBQUEsSUFBSSxFQUFFO0FBSlIsR0FQWSxFQWFaO0FBQ0VILElBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLElBQUFBLFdBQVcsRUFBRSx3Q0FGZjtBQUdFQyxJQUFBQSxlQUFlLEVBQUUsa0JBSG5CO0FBSUVDLElBQUFBLElBQUksRUFBRTtBQUpSLEdB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QyxTQURSO0FBRUUsdUJBQU8sRUFBRTtBQUFBLHlCQUFNYSxXQUFXLENBQUNVLElBQUksQ0FBQ3JCLElBQU4sQ0FBakI7QUFBQSxpQkFGWDtBQUdFLHdCQUFRLEVBQUVWLE9BSFo7QUFBQSwwQkFLR0EsT0FBTyxHQUFHLFlBQUgsR0FBa0I7QUFMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkQ7QUFBQSxhQUNPZ0MsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPO0FBQUEsU0FBVjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStDRCxDQTFIRDs7R0FBTXJDO1VBQ2FIOzs7S0FEYkc7O0FBNkhOLElBQU0wQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDMUMsSUFBQUEsVUFBVSxFQUFFMEMsS0FBSyxDQUFDQyxPQUFOLENBQWMzQyxVQURRO0FBRWxDQyxJQUFBQSxJQUFJLEVBQUV5QyxLQUFLLENBQUNDLE9BQU4sQ0FBYzFDLElBRmM7QUFHbENDLElBQUFBLFdBQVcsRUFBRXdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjekM7QUFITyxHQUFaO0FBQUEsQ0FBeEI7O0FBTUEsK0RBQWVQLG9EQUFPLENBQUM4QyxlQUFELENBQVAsQ0FBeUIxQyxRQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVsaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVtYWlsLCBzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgR2FtZUxpc3QgPSAoeyBpc0xvZ2dlZEluLCB1c2VyLCBwbGF5ZWRHYW1lcyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxlYWRlckJib2FyZGtDbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbGVhZGVyYm9hcmQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUm9jayBQYXBlciBTY2lzc29yXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJhbnR1bmcgR3VudGluZyBLZXJ0YXMgbWVsYXdhbiBjb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL3JvY2stcGFwZXItc2Npc3Nvci5qcGcnLFxyXG4gICAgICBwYXRoOiBcIi9nYW1lcnBzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIZWFkIG9yIFRhaWxzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1lbmNvYmEgbWVuZWJhayBoYXNpbCBkYXJpIGxlbXBhcmFuIGNvaW5cIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9jb2luLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVjb2luXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHYW1lIERhZHVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUGVybWFpbmFuIGxlbXBhciBkYWR1IG1lbGF3YW4ga29tcHV0ZXJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9kYWR1LmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVkaWNlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZWQgIScpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIGRpc3BhdGNoKHNldEVtYWlsKGVtYWlsKSk7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgICAvLyBSZXRyaWV2ZSBwbGF5ZWQgZ2FtZXMgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIFJlZHV4IHN0b3JlXHJcbiAgICBjb25zdCBwbGF5ZWRHYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllZEdhbWVzJykpIHx8IHt9O1xyXG5cclxuICAgIC8vIERpc3BhdGNoIHRoZSBhY3Rpb24gdG8gdXBkYXRlIHRoZSBwbGF5ZWQgZ2FtZXMgaW4gUmVkdXggc3RvcmVcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHBsYXllZEdhbWVzKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHBhdGgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7IFxyXG4gICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgdGV4dFRpdGxlID0ge1xyXG4gICAgZm9udFNpemU6ICcyMXB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9O1xyXG5cclxuICBjb25zdCB0ZXh0RGVzY3JpcHRpb24gPSB7XHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgbWQ6cHktMjBcIj5cclxuICAgICAgICB7LyogU2VjdGlvbiBoZWFkZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVUaXRsZX0+R2FtZSBMaXN0PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIEJlcmJhZ2FpIHBlcm1haW5hbiB5YW5nIGJpc2EgYW5kYSBtYWlua2FuIGRpIHdlYnNpdGUga2FtaVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTGVhZGVyQmJvYXJka0NsaWNrfSB1c2VyRW1haWw9e3VzZXIuZW1haWx9PlxyXG4gICAgICAgICAgICBMZWFkZXJib2FyZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEl0ZW1zICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRlcndTbX0+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVjdGFuZ2xlSXRlbX0gJHtwbGF5ZWRHYW1lc1tpdGVtLnBhdGhdID8gc3R5bGVzLnBsYXllZCA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5iYWNrZ3JvdW5kSW1hZ2V9KWAgfX1cclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZWRUZXh0fT57cGxheWVkR2FtZXNbaXRlbS5wYXRoXSA/ICdQZXJuYWggRGltYWlua2FuJyA6ICcnfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhgSXRlbSBwYXRoOiAke2l0ZW0ucGF0aH0sIFBsYXllZDogJHtwbGF5ZWRHYW1lc1tpdGVtLnBhdGhdfWApfVxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWN0YW5nbGVJdGVtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICB7LyogQWRkIFNWRyBjb250ZW50IGhlcmUgaWYgbmVlZGVkICovfVxyXG4gICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YGg0IG1iLTJgfT57aXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGl0ZW0ucGF0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIlByb2Nlc3NpbmdcIiA6IFwiUGxheVwifVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgaXNMb2dnZWRJbjogc3RhdGUucmVkdWNlci5pc0xvZ2dlZEluLFxyXG4gIHVzZXI6IHN0YXRlLnJlZHVjZXIudXNlcixcclxuICBwbGF5ZWRHYW1lczogc3RhdGUucmVkdWNlci5wbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoR2FtZUxpc3QpO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJOYXZiYXIiLCJOYXZiYXJVc2VyIiwic3R5bGVzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwic2V0RW1haWwiLCJzZXRQbGF5ZWRHYW1lcyIsIkdhbWVMaXN0IiwiaXNMb2dnZWRJbiIsInVzZXIiLCJwbGF5ZWRHYW1lcyIsImRpc3BhdGNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVMZWFkZXJCYm9hcmRrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwYXRoIiwiY2hlY2tUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2xpY2siLCJ0ZXh0VGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHREZXNjcmlwdGlvbiIsIkZlYXR1cmVQYWdlSW1hZ2UiLCJmZWF0dXJlVGl0bGUiLCJmZWF0dXJlRGVzY3JpcHRpb24iLCJtZGVyd1NtIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVjdGFuZ2xlSXRlbSIsInBsYXllZCIsInBsYXllZFRleHQiLCJyZWN0YW5nbGVJdGVtQ29udGVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=