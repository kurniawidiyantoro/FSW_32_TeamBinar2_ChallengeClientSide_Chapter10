self["webpackHotUpdate_N_E"]("pages/leaderboard",{

/***/ "./pages/leaderboard/index.js":
/*!************************************!*\
  !*** ./pages/leaderboard/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\leaderboard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();














var LeaderBoard = function LeaderBoard(_ref) {
  _s();

  var isLoggedIn = _ref.isLoggedIn,
      user = _ref.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      totalscore = _useState3[0],
      setTotalScore = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      playerData = _useState4[0],
      setPlayerData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      currentPage = _useState5[0],
      setCurrentPage = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10),
      pageSize = _useState6[0],
      setPageSize = _useState6[1];

  var handleBackClick = function handleBackClick() {
    window.location.replace('/gamelist');
  };

  var getData = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var token, email, gamename, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              _context.prev = 2;

              if (token) {
                _context.next = 8;
                break;
              }

              console.log('Not Authorize !');
              window.location.replace('/login');
              _context.next = 14;
              break;

            case 8:
              gamename = 'gamerps';
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_8__.default.post('http://localhost:3005/gamehistory/get/rank', {
                email: email,
                gamename: gamename
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 11:
              response = _context.sent;
              console.log(response.data.data.rows);
              setPlayerData(response.data.data.rows);

            case 14:
              ;
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              console.log("Internal Server Error !");

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 17]]);
    }));

    return function getData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var slicedPlayerData = playerData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_9___default().HomePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_4__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
      color: "primary",
      onClick: handleBackClick,
      children: "Kembali"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "mt-4",
      children: playerData.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Skeleton, {
        active: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Table, {
          striped: true,
          dataSource: slicedPlayerData,
          pagination: false,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Game Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Total Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
            children: slicedPlayerData.map(function (player, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  scope: "row",
                  children: index + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.username
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.gamename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                  children: player.totalscore
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 25
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 23
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Pagination, {
          current: currentPage,
          pageSize: pageSize,
          total: playerData.length,
          onChange: setCurrentPage,
          showSizeChanger: true,
          onShowSizeChange: function onShowSizeChange(current, size) {
            setPageSize(size);
            setCurrentPage(1);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, _this);
};

_s(LeaderBoard, "P8t+WXOpBoOMspVR4V9Ut/mPMNo=");

_c = LeaderBoard;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.reducer.isLoggedIn,
    user: state.reducer.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps)(LeaderBoard));

var _c;

$RefreshReg$(_c, "LeaderBoard");

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

/***/ "./styles/feature.module.css":
/*!***********************************!*\
  !*** ./styles/feature.module.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./feature.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/feature.module.css");

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
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./feature.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/feature.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./feature.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/feature.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/feature.module.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./styles/feature.module.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/images/dark-bg-2.jpg */ "./assets/images/dark-bg-2.jpg");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".feature_FeaturePageImage__15vSC{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 100vh;\r\n}\r\n\r\n.feature_featureTitle__3j_jX {\r\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: #9e9393;  \r\n    font-size: 30px; \r\n}\r\n  \r\n.feature_featureDescription__1_igv {\r\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: #9e9393;  \r\n    font-size: 25px; \r\n}\r\n\r\n.feature_mderwSm__1hnjs {\r\n    display: -moz-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    grid-gap: 8px;\r\n    gap: 8px;\r\n    max-width: 2xl;\r\n    -moz-box-pack: center;\r\n         justify-content: center; /* Center horizontally */\r\n    -moz-box-align: center;\r\n         align-items: center; /* Center vertically */\r\n    padding: 10px;\r\n}\r\n  \r\n.feature_rectangleItem__RYjPa {\r\n    width: 300px; /* Adjust the width of each item */\r\n    height: 530px; /* Adjust the height of each item */\r\n    border-radius: 10px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n  \r\n.feature_rectangleItem__RYjPa::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7); /* Adjust the opacity as needed */\r\n    z-index: 1;\r\n}\r\n  \r\n.feature_rectangleItemContent__1VXOY {\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.feature_played__3Cusk {\r\n  border: 2px solid #ffcc00; /* You can customize this color */\r\n}\r\n\r\n.feature_playedText__1n4px {\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.feature_tableStyle__1fvkw{\r\n  width: 100%;\r\n}\r\n\r\n  @media (min-width: 768px) {\r\n    .feature_mderw-sm__EtlwB {\r\n      max-width: 2xl;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1024px) {\r\n    .feature_mderw-sm__EtlwB {\r\n      max-width: none;\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://styles/feature.module.css"],"names":[],"mappings":"AAAA;IACI,yDAAuD;IACvD,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,qEAAqE;IACrE,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,qEAAqE;IACrE,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAa;IAAb,aAAa;IACb,eAAe;IACf,aAAQ;IAAR,QAAQ;IACR,cAAc;IACd,qBAAuB;SAAvB,uBAAuB,EAAE,wBAAwB;IACjD,sBAAmB;SAAnB,mBAAmB,EAAE,sBAAsB;IAC3C,aAAa;AACjB;;AAEA;IACI,YAAY,EAAE,kCAAkC;IAChD,aAAa,EAAE,mCAAmC;IAClD,mBAAmB;IACnB,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC,EAAE,iCAAiC;IACvE,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,kBAAkB;IAClB,WAAW;AACf;;AAEA;EACE,yBAAyB,EAAE,iCAAiC;AAC9D;;AAEA;EACE,iBAAa;EAAb,aAAa;EACb,sBAAmB;OAAnB,mBAAmB;EACnB,qBAAuB;OAAvB,uBAAuB;EACvB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;EAEE;IACE;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,eAAe;IACjB;EACF","sourcesContent":[".FeaturePageImage{\r\n    background-image: url(\"../assets/images/dark-bg-2.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 100vh;\r\n}\r\n\r\n.featureTitle {\r\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: #9e9393;  \r\n    font-size: 30px; \r\n}\r\n  \r\n.featureDescription {\r\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: #9e9393;  \r\n    font-size: 25px; \r\n}\r\n\r\n.mderwSm {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n    max-width: 2xl;\r\n    justify-content: center; /* Center horizontally */\r\n    align-items: center; /* Center vertically */\r\n    padding: 10px;\r\n}\r\n  \r\n.rectangleItem {\r\n    width: 300px; /* Adjust the width of each item */\r\n    height: 530px; /* Adjust the height of each item */\r\n    border-radius: 10px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n  \r\n.rectangleItem::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7); /* Adjust the opacity as needed */\r\n    z-index: 1;\r\n}\r\n  \r\n.rectangleItemContent {\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.played {\r\n  border: 2px solid #ffcc00; /* You can customize this color */\r\n}\r\n\r\n.playedText {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: white;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.tableStyle{\r\n  width: 100%;\r\n}\r\n\r\n  @media (min-width: 768px) {\r\n    .mderw-sm {\r\n      max-width: 2xl;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1024px) {\r\n    .mderw-sm {\r\n      max-width: none;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FeaturePageImage": "feature_FeaturePageImage__15vSC",
	"featureTitle": "feature_featureTitle__3j_jX",
	"featureDescription": "feature_featureDescription__1_igv",
	"mderwSm": "feature_mderwSm__1hnjs",
	"rectangleItem": "feature_rectangleItem__RYjPa",
	"rectangleItemContent": "feature_rectangleItemContent__1VXOY",
	"played": "feature_played__3Cusk",
	"playedText": "feature_playedText__1n4px",
	"tableStyle": "feature_tableStyle__1fvkw",
	"mderw-sm": "feature_mderw-sm__EtlwB"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./assets/images/dark-bg-2.jpg":
/*!*************************************!*\
  !*** ./assets/images/dark-bg-2.jpg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dark-bg-2.b5b49af74f2219c3037e1d1214c000a3.jpg");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuYTJlYzI1ZjA2ODA5OWRhMmU3MzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsVUFBc0IsUUFBdEJBLFVBQXNCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUN6QyxrQkFBZ0NmLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QmpCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9rQixNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBb0NuQiwrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFBQSxNQUFPb0IsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBb0NyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPc0IsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBc0N2QiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPd0IsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBZ0N6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPMEIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsV0FBeEI7QUFDRCxHQUZIOztBQUtBLE1BQU1DLE9BQU87QUFBQSw0V0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsY0FBQUEsS0FETSxHQUNFQyxZQUFZ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QUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sMkNBQTJDLGtFQUFrRSwrQkFBK0Isb0NBQW9DLHFDQUFxQyxzQkFBc0IsS0FBSyx1QkFBdUIsOEVBQThFLHlCQUF5Qix5QkFBeUIsS0FBSywrQkFBK0IsOEVBQThFLHlCQUF5Qix5QkFBeUIsS0FBSyxrQkFBa0Isc0JBQXNCLHdCQUF3QixpQkFBaUIsdUJBQXVCLGlDQUFpQyxzREFBc0QsNkNBQTZDLEtBQUssMEJBQTBCLHNCQUFzQiwwREFBMEQsZ0VBQWdFLCtCQUErQixvQ0FBb0MscUNBQXFDLHlCQUF5QiwyQkFBMkIsS0FBSyxrQ0FBa0Msc0JBQXNCLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDhDQUE4QyxxREFBcUQsS0FBSyxpQ0FBaUMsMkJBQTJCLG1CQUFtQixzQkFBc0IsMkJBQTJCLG9CQUFvQixLQUFLLGlCQUFpQixpQ0FBaUMsdUNBQXVDLHFCQUFxQixvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsbUJBQW1CLHNCQUFzQix3QkFBd0IsS0FBSyxvQkFBb0Isa0JBQWtCLEtBQUsscUNBQXFDLG1CQUFtQix5QkFBeUIsU0FBUyxPQUFPLHdDQUF3QyxtQkFBbUIsMEJBQTBCLFNBQVMsT0FBTyx5QkFBeUI7QUFDcmxMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkEsK0RBQWUscUJBQXVCLGdFQUFnRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWFkZXJib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzcz8xNDk3Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvaW1hZ2VzL2RhcmstYmctMi5qcGciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVtYWlsLCBzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFNrZWxldG9uLCBQYWdpbmF0aW9uICB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBpc0xvZ2dlZEluLCB1c2VyfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcGxheWVyRGF0YSwgc2V0UGxheWVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3BhZ2VTaXplLCBzZXRQYWdlU2l6ZV0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvcmFuaycsXHJcbiAgICAgICAgICAgICAgICB7IGVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEucm93cyk7XHJcbiAgICAgICAgICAgIHNldFBsYXllckRhdGEocmVzcG9uc2UuZGF0YS5kYXRhLnJvd3MpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzbGljZWRQbGF5ZXJEYXRhID0gcGxheWVyRGF0YS5zbGljZShcclxuICAgICAgICAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlICogcGFnZVNpemVcclxuICAgICAgKTtcclxuICAgICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhvbWVQYWdlSW1hZ2V9PlxyXG4gICAgICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAge3BsYXllckRhdGEubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBhY3RpdmUgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgZGF0YVNvdXJjZT17c2xpY2VkUGxheWVyRGF0YX0gcGFnaW5hdGlvbj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgU2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c2xpY2VkUGxheWVyRGF0YS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5nYW1lbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17cGxheWVyRGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG9uU2hvd1NpemVDaGFuZ2U9eyhjdXJyZW50LCBzaXplKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9mZWF0dXJlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2ZlYXR1cmUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vZmVhdHVyZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9kYXJrLWJnLTIuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mZWF0dXJlX0ZlYXR1cmVQYWdlSW1hZ2VfXzE1dlNDe1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlX2ZlYXR1cmVUaXRsZV9fM2pfalgge1xcclxcbiAgICBmb250LWZhbWlseTpJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiAjOWU5MzkzOyAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDsgXFxyXFxufVxcclxcbiAgXFxyXFxuLmZlYXR1cmVfZmVhdHVyZURlc2NyaXB0aW9uX18xX2lndiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OkltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICM5ZTkzOTM7ICBcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4OyBcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVfbWRlcndTbV9fMWhuanMge1xcclxcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBncmlkLWdhcDogOHB4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyeGw7XFxyXFxuICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xcclxcbiAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLmZlYXR1cmVfcmVjdGFuZ2xlSXRlbV9fUllqUGEge1xcclxcbiAgICB3aWR0aDogMzAwcHg7IC8qIEFkanVzdCB0aGUgd2lkdGggb2YgZWFjaCBpdGVtICovXFxyXFxuICAgIGhlaWdodDogNTMwcHg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuICBcXHJcXG4uZmVhdHVyZV9yZWN0YW5nbGVJdGVtX19SWWpQYTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuICBcXHJcXG4uZmVhdHVyZV9yZWN0YW5nbGVJdGVtQ29udGVudF9fMVZYT1kge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlX3BsYXllZF9fM0N1c2sge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2MwMDsgLyogWW91IGNhbiBjdXN0b21pemUgdGhpcyBjb2xvciAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZV9wbGF5ZWRUZXh0X18xbjRweCB7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZV90YWJsZVN0eWxlX18xZnZrd3tcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuZmVhdHVyZV9tZGVydy1zbV9fRXRsd0Ige1xcclxcbiAgICAgIG1heC13aWR0aDogMnhsO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmZlYXR1cmVfbWRlcnctc21fX0V0bHdCIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseURBQXVEO0lBQ3ZELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxRUFBcUU7SUFDckUsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxRUFBcUU7SUFDckUsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBUTtJQUFSLFFBQVE7SUFDUixjQUFjO0lBQ2QscUJBQXVCO1NBQXZCLHVCQUF1QixFQUFFLHdCQUF3QjtJQUNqRCxzQkFBbUI7U0FBbkIsbUJBQW1CLEVBQUUsc0JBQXNCO0lBQzNDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsa0NBQWtDO0lBQ2hELGFBQWEsRUFBRSxtQ0FBbUM7SUFDbEQsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0MsRUFBRSxpQ0FBaUM7SUFDdkUsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLGlDQUFpQztBQUM5RDs7QUFFQTtFQUNFLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUFtQjtPQUFuQixtQkFBbUI7RUFDbkIscUJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztFQUVFO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuRmVhdHVyZVBhZ2VJbWFnZXtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2RhcmstYmctMi5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZVRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6SW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogIzllOTM5MzsgIFxcclxcbiAgICBmb250LXNpemU6IDMwcHg7IFxcclxcbn1cXHJcXG4gIFxcclxcbi5mZWF0dXJlRGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LWZhbWlseTpJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiAjOWU5MzkzOyAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDsgXFxyXFxufVxcclxcblxcclxcbi5tZGVyd1NtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyeGw7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnJlY3RhbmdsZUl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzAwcHg7IC8qIEFkanVzdCB0aGUgd2lkdGggb2YgZWFjaCBpdGVtICovXFxyXFxuICAgIGhlaWdodDogNTMwcHg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuICBcXHJcXG4ucmVjdGFuZ2xlSXRlbTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuICBcXHJcXG4ucmVjdGFuZ2xlSXRlbUNvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2MwMDsgLyogWW91IGNhbiBjdXN0b21pemUgdGhpcyBjb2xvciAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVkVGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZVN0eWxle1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC5tZGVydy1zbSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyeGw7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAubWRlcnctc20ge1xcclxcbiAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiRmVhdHVyZVBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfRmVhdHVyZVBhZ2VJbWFnZV9fMTV2U0NcIixcblx0XCJmZWF0dXJlVGl0bGVcIjogXCJmZWF0dXJlX2ZlYXR1cmVUaXRsZV9fM2pfalhcIixcblx0XCJmZWF0dXJlRGVzY3JpcHRpb25cIjogXCJmZWF0dXJlX2ZlYXR1cmVEZXNjcmlwdGlvbl9fMV9pZ3ZcIixcblx0XCJtZGVyd1NtXCI6IFwiZmVhdHVyZV9tZGVyd1NtX18xaG5qc1wiLFxuXHRcInJlY3RhbmdsZUl0ZW1cIjogXCJmZWF0dXJlX3JlY3RhbmdsZUl0ZW1fX1JZalBhXCIsXG5cdFwicmVjdGFuZ2xlSXRlbUNvbnRlbnRcIjogXCJmZWF0dXJlX3JlY3RhbmdsZUl0ZW1Db250ZW50X18xVlhPWVwiLFxuXHRcInBsYXllZFwiOiBcImZlYXR1cmVfcGxheWVkX18zQ3Vza1wiLFxuXHRcInBsYXllZFRleHRcIjogXCJmZWF0dXJlX3BsYXllZFRleHRfXzFuNHB4XCIsXG5cdFwidGFibGVTdHlsZVwiOiBcImZlYXR1cmVfdGFibGVTdHlsZV9fMWZ2a3dcIixcblx0XCJtZGVydy1zbVwiOiBcImZlYXR1cmVfbWRlcnctc21fX0V0bHdCXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9kYXJrLWJnLTIuYjViNDlhZjc0ZjIyMTljMzAzN2UxZDEyMTRjMDAwYTMuanBnXCI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJUYWJsZSIsIk5hdmJhciIsIk5hdmJhclVzZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJzZXRFbWFpbCIsInNldFBsYXllZEdhbWVzIiwiQXhpb3MiLCJTa2VsZXRvbiIsIlBhZ2luYXRpb24iLCJMZWFkZXJCb2FyZCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lbmFtZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsInJvd3MiLCJzbGljZWRQbGF5ZXJEYXRhIiwic2xpY2UiLCJIb21lUGFnZUltYWdlIiwibGVuZ3RoIiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJjdXJyZW50Iiwic2l6ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=