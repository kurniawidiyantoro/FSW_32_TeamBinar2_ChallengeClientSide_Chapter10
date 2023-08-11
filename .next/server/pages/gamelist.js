(() => {
var exports = {};
exports.id = "pages/gamelist";
exports.ids = ["pages/gamelist"];
exports.modules = {

/***/ "./pages/components/navbar.js":
/*!************************************!*\
  !*** ./pages/components/navbar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\components\\navbar.js";






function Example({
  isLoggedIn,
  userEmail
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
        href: "/",
        className: "ps-3",
        children: isLoggedIn ? `Welcome, ${userEmail}` : 'Team 2'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
        className: "ms-auto",
        navbar: true,
        children: isLoggedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/editprofile",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/logout",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this)]
        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/register",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/login",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

const mapStateToProps = state => ({
  isLoggedIn: state.reducer.isLoggedIn,
  userEmail: state.reducer.email || ''
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Example));

/***/ }),

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\components\\navbarUser.js";





function NavbarUser({
  userEmail
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
          className: "ps-3",
          children: `Welcome, ${userEmail}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
        className: "ms-auto",
        navbar: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/editprofile",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/",
            className: "pe-3",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

const mapStateToProps = state => ({
  userEmail: state.reducer.email
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(NavbarUser));

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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./pages/components/navbar.js");
/* harmony import */ var _components_navbarUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbarUser */ "./pages/components/navbarUser.js");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamelist\\index.js";









const GameList = ({
  isLoggedIn,
  user,
  playedGames
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
    const email = localStorage.getItem('email');
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_5__.setEmail)(email));
    checkToken(); // Retrieve played games from local storage or Redux store

    const playedGames = JSON.parse(localStorage.getItem('playedGames')) || {}; // Dispatch the action to update the played games in Redux store

    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_5__.setPlayedGames)(playedGames));
  }, []);

  const handleClick = path => {
    setLoading(true);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_3__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTitle),
          children: "Selamat datang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureTitle),
          children: "Game List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().mderwSm),
        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: `${(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().rectangleItem)} ${playedGames[item.path] ? (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().played) : ''}`,
          style: {
            backgroundImage: `url(${item.backgroundImage})`
          },
          "data-aos": "fade-up",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().playedText),
            children: playedGames[item.path] ? 'Pernah Dimainkan' : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined), console.log(`Item path: ${item.path}, Played: ${playedGames[item.path]}`), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().rectangleItemContent),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
              viewBox: "0 0 64 64",
              xmlns: "http://www.w3.org/2000/svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: `h4 mb-2`,
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: item.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              color: "primary",
              onClick: () => handleClick(item.path),
              disabled: loading,
              children: loading ? "Processing" : "Play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 14
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  isLoggedIn: state.reducer.isLoggedIn,
  user: state.reducer.user,
  playedGames: state.reducer.playedGames
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(GameList));

/***/ }),

/***/ "./redux/action/index.js":
/*!*******************************!*\
  !*** ./redux/action/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setEmail": () => (/* binding */ setEmail),
/* harmony export */   "setLoggedIn": () => (/* binding */ setLoggedIn),
/* harmony export */   "setPlayedGames": () => (/* binding */ setPlayedGames)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // export function loginRequest(){
//   return {
//     type: 'LOGIN_REQUEST'
//   }
//  };
//  export function loginSuccess (token, email) {
//   return{
//   type: 'LOGIN_SUCCESS',
//   payload: { token, email },
// }};
// export function loginFailure (error){
//   return{
//     type: 'LOGIN_FAILURE',
//     payload: error,
//   }  
// };

function setEmail(email) {
  return {
    type: 'SET_EMAIL',
    payload: email
  };
}
const setLoggedIn = (isLoggedIn, user) => ({
  type: 'SET_LOGGED_IN',
  payload: {
    isLoggedIn,
    user
  }
});
const setPlayedGames = playedGames => ({
  type: 'SET_PLAYED_GAMES',
  payload: playedGames
}); // export const loginUser = (email, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await Axios.post('http://localhost:3005/login', {
//       email,
//       password,
//     });
//     const { token, email: userEmail } = response.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('email', userEmail);
//     dispatch(loginSuccess(token, userEmail));
//     dispatch(setEmail(userEmail));
//   } catch (error) {
//     const errorMessage = error.response ? error.response.data.message : 'An error occurred';
//     dispatch(loginFailure(errorMessage));
//   }
// };

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
	"rectangleItemContent": "feature_rectangleItemContent__1VXOY",
	"played": "feature_played__3Cusk",
	"playedText": "feature_playedText__1n4px",
	"mderw-sm": "feature_mderw-sm__EtlwB"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZ2FtZWxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTTyxPQUFULENBQWlCO0FBQUVDLEVBQUFBLFVBQUY7QUFBY0MsRUFBQUE7QUFBZCxDQUFqQixFQUE0QztBQUMxQyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFDLE1BQWQ7QUFBcUIsVUFBSSxNQUF6QjtBQUEwQixZQUFNLEVBQUMsSUFBakM7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFzQixpQkFBUyxFQUFDLE1BQWhDO0FBQUEsa0JBQ0dELFVBQVUsR0FBSSxZQUFXQyxTQUFVLEVBQXpCLEdBQTZCO0FBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLDJDQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGNBQU0sTUFBL0I7QUFBQSxrQkFDR0QsVUFBVSxnQkFDUDtBQUFBLGtDQUNFLDhEQUFDLCtDQUFEO0FBQVMsZ0JBQUksRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBUyxnQkFBSSxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQSx3QkFETyxnQkFNUDtBQUFBLGtDQUNFLDhEQUFDLCtDQUFEO0FBQVMsZ0JBQUksRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBUyxnQkFBSSxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0FBRUQsTUFBTUUsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbENILEVBQUFBLFVBQVUsRUFBRUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFVBRFE7QUFFbENDLEVBQUFBLFNBQVMsRUFBRUUsS0FBSyxDQUFDQyxPQUFOLENBQWNDLEtBQWQsSUFBdUI7QUFGQSxDQUFaLENBQXhCOztBQUtBLGlFQUFlWixvREFBTyxDQUFDUyxlQUFELENBQVAsQ0FBeUJILE9BQXpCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNPLFVBQVQsQ0FBb0I7QUFBRUwsRUFBQUE7QUFBRixDQUFwQixFQUFtQztBQUNqQyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhDQUFEO0FBQVEsV0FBSyxFQUFDLE1BQWQ7QUFBcUIsVUFBSSxNQUF6QjtBQUEwQixZQUFNLEVBQUMsSUFBakM7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBLCtCQUNBLDhEQUFDLG1EQUFEO0FBQWEsbUJBQVMsRUFBQyxNQUF2QjtBQUFBLG9CQUFnQyxZQUFXQSxTQUFVO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSw4REFBQywyQ0FBRDtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixjQUFNLE1BQS9CO0FBQUEsZ0NBQ0UsOERBQUMsK0NBQUQ7QUFBQSxpQ0FDRSw4REFBQywrQ0FBRDtBQUFTLGdCQUFJLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSw4REFBQywrQ0FBRDtBQUFBLGlDQUNFLDhEQUFDLCtDQUFEO0FBQVMsZ0JBQUksRUFBQyxHQUFkO0FBQWtCLHFCQUFTLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7QUFDRCxNQUFNQyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0YsRUFBQUEsU0FBUyxFQUFFRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0M7QUFEUyxDQUFaLENBQXhCOztBQUlBLGlFQUFlWixvREFBTyxDQUFDUyxlQUFELENBQVAsQ0FBeUJJLFVBQXpCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxNQUFNUSxRQUFRLEdBQUcsQ0FBQztBQUFFZCxFQUFBQSxVQUFGO0FBQWNlLEVBQUFBLElBQWQ7QUFBb0JDLEVBQUFBO0FBQXBCLENBQUQsS0FBdUM7QUFDdEQsUUFBTUMsUUFBUSxHQUFHTix3REFBVyxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDTyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlgsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsUUFBTVksS0FBSyxHQUFHLENBQ1o7QUFDRUMsSUFBQUEsS0FBSyxFQUFFLG9CQURUO0FBRUVDLElBQUFBLFdBQVcsRUFBRSx5Q0FGZjtBQUdFQyxJQUFBQSxlQUFlLEVBQUUsZ0NBSG5CO0FBSUVDLElBQUFBLElBQUksRUFBRTtBQUpSLEdBRFksRUFPWjtBQUNFSCxJQUFBQSxLQUFLLEVBQUUsZUFEVDtBQUVFQyxJQUFBQSxXQUFXLEVBQUUsMENBRmY7QUFHRUMsSUFBQUEsZUFBZSxFQUFFLGtCQUhuQjtBQUlFQyxJQUFBQSxJQUFJLEVBQUU7QUFKUixHQVBZLEVBYVo7QUFDRUgsSUFBQUEsS0FBSyxFQUFFLFdBRFQ7QUFFRUMsSUFBQUEsV0FBVyxFQUFFLHdDQUZmO0FBR0VDLElBQUFBLGVBQWUsRUFBRSxrQkFIbkI7QUFJRUMsSUFBQUEsSUFBSSxFQUFFO0FBSlIsR0FiWSxDQUFkOztBQW9CQSxRQUFNQyxVQUFVLEdBQUcsWUFBWTtBQUM3QixVQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsVUFBTXZCLEtBQUssR0FBR3NCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZekIsS0FBWjs7QUFDQSxRQUFJO0FBQ0YsVUFBSSxDQUFDcUIsS0FBTCxFQUFZO0FBQ1ZHLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FDLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEI7QUFDRCxPQUhELE1BR087QUFDTEosUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNEO0FBQ0YsS0FQRCxDQU9FLE9BQU9JLEtBQVAsRUFBYztBQUNkTCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBQyxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFFBQXhCO0FBQ0Q7QUFDRixHQWhCRDs7QUFrQkExQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNRixLQUFLLEdBQUdzQixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBWCxJQUFBQSxRQUFRLENBQUNMLHVEQUFRLENBQUNQLEtBQUQsQ0FBVCxDQUFSO0FBQ0FvQixJQUFBQSxVQUFVLEdBSEksQ0FJZDs7QUFDRixVQUFNVCxXQUFXLEdBQUdtQixJQUFJLENBQUNDLEtBQUwsQ0FBV1QsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQVgsS0FBbUQsRUFBdkUsQ0FMZ0IsQ0FPaEI7O0FBQ0FYLElBQUFBLFFBQVEsQ0FBQ0osNkRBQWMsQ0FBQ0csV0FBRCxDQUFmLENBQVI7QUFDRyxHQVRNLEVBU0osRUFUSSxDQUFUOztBQVdBLFFBQU1xQixXQUFXLEdBQUliLElBQUQsSUFBVTtBQUM1QkwsSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBVSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBTyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCVCxJQUF4QjtBQUNELEdBSkQ7O0FBT0EsUUFBTWMsU0FBUyxHQUFHO0FBQ2hCQyxJQUFBQSxRQUFRLEVBQUUsTUFETTtBQUVoQkMsSUFBQUEsU0FBUyxFQUFFO0FBRkssR0FBbEI7QUFLQSxRQUFNQyxlQUFlLEdBQUc7QUFDdEJGLElBQUFBLFFBQVEsRUFBRSxNQURZO0FBRXRCQyxJQUFBQSxTQUFTLEVBQUU7QUFGVyxHQUF4QjtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFOUIsb0ZBQWhCO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBWSxnQkFBVSxFQUFFVixVQUF4QjtBQUFvQyxlQUFTLEVBQUVlLElBQUksQ0FBQ1Y7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBRUU7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVLLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFQSxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUcsbUJBQVMsRUFBRUEsc0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBV0U7QUFBSyxpQkFBUyxFQUFFQSwyRUFBaEI7QUFBQSxrQkFDQ1UsS0FBSyxDQUFDMEIsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsS0FBUCxrQkFDUDtBQUVFLG1CQUFTLEVBQUcsR0FBRXRDLGlGQUFxQixJQUFHTSxXQUFXLENBQUMrQixJQUFJLENBQUN2QixJQUFOLENBQVgsR0FBeUJkLDBFQUF6QixHQUF5QyxFQUFHLEVBRnBGO0FBR0UsZUFBSyxFQUFFO0FBQUVhLFlBQUFBLGVBQWUsRUFBRyxPQUFNd0IsSUFBSSxDQUFDeEIsZUFBZ0I7QUFBL0MsV0FIVDtBQUlFLHNCQUFTLFNBSlg7QUFBQSxrQ0FNRTtBQUFLLHFCQUFTLEVBQUViLDhFQUFoQjtBQUFBLHNCQUFvQ00sV0FBVyxDQUFDK0IsSUFBSSxDQUFDdkIsSUFBTixDQUFYLEdBQXlCLGtCQUF6QixHQUE4QztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLEVBT0dLLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGNBQWFpQixJQUFJLENBQUN2QixJQUFLLGFBQVlSLFdBQVcsQ0FBQytCLElBQUksQ0FBQ3ZCLElBQU4sQ0FBWSxFQUF2RSxDQVBILGVBUUM7QUFBSyxxQkFBUyxFQUFFZCx3RkFBaEI7QUFBQSxvQ0FDRTtBQUFLLHFCQUFPLEVBQUMsV0FBYjtBQUF5QixtQkFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUcsU0FBaEI7QUFBQSx3QkFBMkJxQyxJQUFJLENBQUMxQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQSx3QkFBSTBCLElBQUksQ0FBQ3pCO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQU1LLDhEQUFDLDhDQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUscUJBQU8sRUFBRSxNQUFNZSxXQUFXLENBQUNVLElBQUksQ0FBQ3ZCLElBQU4sQ0FGNUI7QUFHRSxzQkFBUSxFQUFFTixPQUhaO0FBQUEsd0JBS0dBLE9BQU8sR0FBRyxZQUFILEdBQWtCO0FBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJEO0FBQUEsV0FDTzhCLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNENELENBbkhEOztBQXNIQSxNQUFNOUMsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbENILEVBQUFBLFVBQVUsRUFBRUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFVBRFE7QUFFbENlLEVBQUFBLElBQUksRUFBRVosS0FBSyxDQUFDQyxPQUFOLENBQWNXLElBRmM7QUFHbENDLEVBQUFBLFdBQVcsRUFBRWIsS0FBSyxDQUFDQyxPQUFOLENBQWNZO0FBSE8sQ0FBWixDQUF4Qjs7QUFNQSxpRUFBZXZCLG9EQUFPLENBQUNTLGVBQUQsQ0FBUCxDQUF5QlksUUFBekIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTRixRQUFULENBQWtCUCxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xpRCxJQUFBQSxJQUFJLEVBQUUsV0FERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVsRDtBQUZKLEdBQVA7QUFJRDtBQUVNLE1BQU1tRCxXQUFXLEdBQUcsQ0FBQ3hELFVBQUQsRUFBYWUsSUFBYixNQUF1QjtBQUNoRHVDLEVBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsRUFBQUEsT0FBTyxFQUFFO0FBQUV2RCxJQUFBQSxVQUFGO0FBQWNlLElBQUFBO0FBQWQ7QUFGdUMsQ0FBdkIsQ0FBcEI7QUFLQSxNQUFNRixjQUFjLEdBQUlHLFdBQUQsS0FBa0I7QUFDOUNzQyxFQUFBQSxJQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxFQUFBQSxPQUFPLEVBQUV2QztBQUZxQyxDQUFsQixDQUF2QixFQU1QO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9wYWdlcy9jb21wb25lbnRzL25hdmJhclVzZXIuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9wYWdlcy9nYW1lbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEV4YW1wbGUoeyBpc0xvZ2dlZEluLCB1c2VyRW1haWwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwcy0zXCI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IGBXZWxjb21lLCAke3VzZXJFbWFpbH1gIDogJ1RlYW0gMid9XHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0cHJvZmlsZVwiPkVkaXQgUHJvZmlsZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9nb3V0XCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICB1c2VyRW1haWw6IHN0YXRlLnJlZHVjZXIuZW1haWwgfHwgJycsIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFeGFtcGxlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZiYXJVc2VyKHsgdXNlckVtYWlsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGNsYXNzTmFtZT1cInBzLTNcIj57YFdlbGNvbWUsICR7dXNlckVtYWlsfWB9PC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwZS0zXCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHVzZXJFbWFpbDogc3RhdGUucmVkdWNlci5lbWFpbCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2YmFyVXNlcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVtYWlsLCBzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgR2FtZUxpc3QgPSAoeyBpc0xvZ2dlZEluLCB1c2VyLCBwbGF5ZWRHYW1lcyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcblxyXG4gIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3JcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQmFudHVuZyBHdW50aW5nIEtlcnRhcyBtZWxhd2FuIGNvbXB1dGVyXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJy9pbWFnZXMvcm9jay1wYXBlci1zY2lzc29yLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVycHNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhlYWQgb3IgVGFpbHNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTWVuY29iYSBtZW5lYmFrIGhhc2lsIGRhcmkgbGVtcGFyYW4gY29pblwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL2NvaW4uanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZWNvaW5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkdhbWUgRGFkdVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJQZXJtYWluYW4gbGVtcGFyIGRhZHUgbWVsYXdhbiBrb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL2RhZHUuanBnJyxcclxuICAgICAgcGF0aDogXCIvZ2FtZWRpY2VcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemVkIScpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXV0aG9yaXplZCAhJylcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0ludGVybmFsIFNlcnZlciBFcnJvciEnKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgZGlzcGF0Y2goc2V0RW1haWwoZW1haWwpKTtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICAgIC8vIFJldHJpZXZlIHBsYXllZCBnYW1lcyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgUmVkdXggc3RvcmVcclxuICBjb25zdCBwbGF5ZWRHYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllZEdhbWVzJykpIHx8IHt9O1xyXG5cclxuICAvLyBEaXNwYXRjaCB0aGUgYWN0aW9uIHRvIHVwZGF0ZSB0aGUgcGxheWVkIGdhbWVzIGluIFJlZHV4IHN0b3JlXHJcbiAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMocGxheWVkR2FtZXMpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocGF0aCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTsgXHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCB0ZXh0VGl0bGUgPSB7XHJcbiAgICBmb250U2l6ZTogJzIxcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRleHREZXNjcmlwdGlvbiA9IHtcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZlYXR1cmVQYWdlSW1hZ2V9PlxyXG4gICAgICA8TmF2YmFyVXNlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyRW1haWw9e3VzZXIuZW1haWx9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMiBtZDpweS0yMFwiPlxyXG4gICAgICAgIHsvKiBTZWN0aW9uIGhlYWRlciAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZVRpdGxlfT5TZWxhbWF0IGRhdGFuZzwvaDI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZVRpdGxlfT5HYW1lIExpc3Q8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZURlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgQmVyYmFnYWkgcGVybWFpbmFuIHlhbmcgYmlzYSBhbmRhIG1haW5rYW4gZGkgd2Vic2l0ZSBrYW1pXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBJdGVtcyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZXJ3U219PlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlY3RhbmdsZUl0ZW19ICR7cGxheWVkR2FtZXNbaXRlbS5wYXRoXSA/IHN0eWxlcy5wbGF5ZWQgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uYmFja2dyb3VuZEltYWdlfSlgIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVkVGV4dH0+e3BsYXllZEdhbWVzW2l0ZW0ucGF0aF0gPyAnUGVybmFoIERpbWFpbmthbicgOiAnJ308L2Rpdj5cclxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2coYEl0ZW0gcGF0aDogJHtpdGVtLnBhdGh9LCBQbGF5ZWQ6ICR7cGxheWVkR2FtZXNbaXRlbS5wYXRoXX1gKX1cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjdGFuZ2xlSXRlbUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgey8qIEFkZCBTVkcgY29udGVudCBoZXJlIGlmIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BoNCBtYi0yYH0+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfSBcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJQcm9jZXNzaW5nXCIgOiBcIlBsYXlcIn1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgcGxheWVkR2FtZXM6IHN0YXRlLnJlZHVjZXIucGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdhbWVMaXN0KTtcclxuXHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZlYXR1cmVQYWdlSW1hZ2VcIjogXCJmZWF0dXJlX0ZlYXR1cmVQYWdlSW1hZ2VfXzE1dlNDXCIsXG5cdFwiZmVhdHVyZVRpdGxlXCI6IFwiZmVhdHVyZV9mZWF0dXJlVGl0bGVfXzNqX2pYXCIsXG5cdFwiZmVhdHVyZURlc2NyaXB0aW9uXCI6IFwiZmVhdHVyZV9mZWF0dXJlRGVzY3JpcHRpb25fXzFfaWd2XCIsXG5cdFwibWRlcndTbVwiOiBcImZlYXR1cmVfbWRlcndTbV9fMWhuanNcIixcblx0XCJyZWN0YW5nbGVJdGVtXCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtX19SWWpQYVwiLFxuXHRcInJlY3RhbmdsZUl0ZW1Db250ZW50XCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtQ29udGVudF9fMVZYT1lcIixcblx0XCJwbGF5ZWRcIjogXCJmZWF0dXJlX3BsYXllZF9fM0N1c2tcIixcblx0XCJwbGF5ZWRUZXh0XCI6IFwiZmVhdHVyZV9wbGF5ZWRUZXh0X18xbjRweFwiLFxuXHRcIm1kZXJ3LXNtXCI6IFwiZmVhdHVyZV9tZGVydy1zbV9fRXRsd0JcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiRXhhbXBsZSIsImlzTG9nZ2VkSW4iLCJ1c2VyRW1haWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlZHVjZXIiLCJlbWFpbCIsIk5hdmJhclVzZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsInN0eWxlcyIsInVzZURpc3BhdGNoIiwic2V0RW1haWwiLCJzZXRQbGF5ZWRHYW1lcyIsIkdhbWVMaXN0IiwidXNlciIsInBsYXllZEdhbWVzIiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmRJbWFnZSIsInBhdGgiLCJjaGVja1Rva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImVycm9yIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2xpY2siLCJ0ZXh0VGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHREZXNjcmlwdGlvbiIsIkZlYXR1cmVQYWdlSW1hZ2UiLCJmZWF0dXJlVGl0bGUiLCJmZWF0dXJlRGVzY3JpcHRpb24iLCJtZGVyd1NtIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVjdGFuZ2xlSXRlbSIsInBsYXllZCIsInBsYXllZFRleHQiLCJyZWN0YW5nbGVJdGVtQ29udGVudCIsIkF4aW9zIiwidHlwZSIsInBheWxvYWQiLCJzZXRMb2dnZWRJbiJdLCJzb3VyY2VSb290IjoiIn0=