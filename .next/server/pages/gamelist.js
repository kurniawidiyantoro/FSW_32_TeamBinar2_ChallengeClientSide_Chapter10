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
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\components\\navbarUser.js";






function NavbarUser({
  userEmail,
  totalScore
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // useEffect(() => {
  //   dispatch(fetchUserTotalScore(userEmail));
  // }, [dispatch, userEmail]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
          className: "ps-3",
          children: `Welcome ${userEmail}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
        className: "ms-auto",
        navbar: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/editprofile",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
            href: "/",
            className: "pe-3",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

const mapStateToProps = state => ({
  userEmail: state.reducer.email,
  totalScore: state.reducer.totalScore
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

  const handleLeaderBboardkClick = () => {
    window.location.replace('/leaderboard');
  };

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
    checkToken();
    const playedGames = JSON.parse(localStorage.getItem('playedGames')) || {};
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
      lineNumber: 84,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "py-12 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
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
        lineNumber: 87,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "primary",
          onClick: handleLeaderBboardkClick,
          children: "Leaderboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
            lineNumber: 107,
            columnNumber: 15
          }, undefined), console.log(`Item path: ${item.path}, Played: ${playedGames[item.path]}`), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().rectangleItemContent),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
              viewBox: "0 0 64 64",
              xmlns: "http://www.w3.org/2000/svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: `h4 mb-2`,
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: item.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              color: "primary",
              onClick: () => handleClick(item.path),
              disabled: loading,
              children: loading ? "Processing" : "Play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 14
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
/* harmony export */   "setTotalScore": () => (/* binding */ setTotalScore),
/* harmony export */   "setLoggedIn": () => (/* binding */ setLoggedIn),
/* harmony export */   "setPlayedGames": () => (/* binding */ setPlayedGames),
/* harmony export */   "fetchUserTotalScore": () => (/* binding */ fetchUserTotalScore)
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
const setTotalScore = totalScore => ({
  type: 'SET_TOTAL_SCORE',
  payload: totalScore
});
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
});
const fetchUserTotalScore = userEmail => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const gamename = 'gamerps';

    if (!token) {
      console.log('Not Authorized!');
      window.location.replace('/login');
      return; // Return early if not authorized
    }

    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('http://localhost:3005/gamehistory/get/rank', {
      email: userEmail,
      gamename
    }, {
      headers: {
        Authorization: `Basic ${token}`
      }
    });
    const userTotalScore = response.data.data.totalscore;
    dispatch(setTotalScore(userTotalScore)); // Dispatch the total score to Redux store
  } catch (error) {
    console.error('Error fetching user total score:', error);
  }
}; // export const loginUser = (email, password) => async (dispatch) => {
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
	"LeaderboardPageImage": "feature_LeaderboardPageImage__3ZiuA",
	"GamecoinPageImage": "feature_GamecoinPageImage__16mwe",
	"GamedicePageImage": "feature_GamedicePageImage__3ZZr_",
	"featureTitle": "feature_featureTitle__3j_jX",
	"featureDescription": "feature_featureDescription__1_igv",
	"mderwSm": "feature_mderwSm__1hnjs",
	"rectangleItem": "feature_rectangleItem__RYjPa",
	"rectangleItemContent": "feature_rectangleItemContent__1VXOY",
	"played": "feature_played__3Cusk",
	"playedText": "feature_playedText__1n4px",
	"tableStyle": "feature_tableStyle__1fvkw",
	"buttonContainer": "feature_buttonContainer__DEWS8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzFDLEdBdEJELENBc0JFLE9BQU83QixLQUFQLEVBQWM7QUFDZEYsSUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWMsa0NBQWQsRUFBa0RBLEtBQWxEO0FBQ0Q7QUFDRixDQTFCTSxFQTRCUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9wYWdlcy9jb21wb25lbnRzL25hdmJhclVzZXIuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9wYWdlcy9nYW1lbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEV4YW1wbGUoeyBpc0xvZ2dlZEluLCB1c2VyRW1haWwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwcy0zXCI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IGBXZWxjb21lLCAke3VzZXJFbWFpbH1gIDogJ1RlYW0gMid9XHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0cHJvZmlsZVwiPkVkaXQgUHJvZmlsZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9nb3V0XCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0ZXI8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICB1c2VyRW1haWw6IHN0YXRlLnJlZHVjZXIuZW1haWwgfHwgJycsIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFeGFtcGxlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2SXRlbSwgTmF2TGlua30gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGZldGNoVXNlclRvdGFsU2NvcmUgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb24nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdmJhclVzZXIoeyB1c2VyRW1haWwsIHRvdGFsU2NvcmUgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKGZldGNoVXNlclRvdGFsU2NvcmUodXNlckVtYWlsKSk7XHJcbiAgLy8gfSwgW2Rpc3BhdGNoLCB1c2VyRW1haWxdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGNsYXNzTmFtZT1cInBzLTNcIj57YFdlbGNvbWUgJHt1c2VyRW1haWx9YH1cclxuICAgICAgICB7Lyoge3RvdGFsU2NvcmUgIT09IHVuZGVmaW5lZCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcy0yXCI+VG90YWwgU2NvcmU6IHt0b3RhbFNjb3JlfTwvc3Bhbj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICBcclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0cHJvZmlsZVwiPkVkaXQgUHJvZmlsZTwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBlLTNcIj5Mb2dvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgdXNlckVtYWlsOiBzdGF0ZS5yZWR1Y2VyLmVtYWlsLFxyXG4gIHRvdGFsU2NvcmU6IHN0YXRlLnJlZHVjZXIudG90YWxTY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2YmFyVXNlcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVtYWlsLCBzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgR2FtZUxpc3QgPSAoeyBpc0xvZ2dlZEluLCB1c2VyLCBwbGF5ZWRHYW1lcyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxlYWRlckJib2FyZGtDbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbGVhZGVyYm9hcmQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUm9jayBQYXBlciBTY2lzc29yXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJhbnR1bmcgR3VudGluZyBLZXJ0YXMgbWVsYXdhbiBjb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL3JvY2stcGFwZXItc2Npc3Nvci5qcGcnLFxyXG4gICAgICBwYXRoOiBcIi9nYW1lcnBzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIZWFkIG9yIFRhaWxzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1lbmNvYmEgbWVuZWJhayBoYXNpbCBkYXJpIGxlbXBhcmFuIGNvaW5cIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9jb2luLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVjb2luXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHYW1lIERhZHVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUGVybWFpbmFuIGxlbXBhciBkYWR1IG1lbGF3YW4ga29tcHV0ZXJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9kYWR1LmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVkaWNlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZWQgIScpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIGRpc3BhdGNoKHNldEVtYWlsKGVtYWlsKSk7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgICBjb25zdCBwbGF5ZWRHYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllZEdhbWVzJykpIHx8IHt9O1xyXG4gICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMocGxheWVkR2FtZXMpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocGF0aCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTsgXHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCB0ZXh0VGl0bGUgPSB7XHJcbiAgICBmb250U2l6ZTogJzIxcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRleHREZXNjcmlwdGlvbiA9IHtcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZlYXR1cmVQYWdlSW1hZ2V9PlxyXG4gICAgICA8TmF2YmFyVXNlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyRW1haWw9e3VzZXIuZW1haWx9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMiBtZDpweS0yMFwiPlxyXG4gICAgICAgIHsvKiBTZWN0aW9uIGhlYWRlciAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZVRpdGxlfT5HYW1lIExpc3Q8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZURlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgQmVyYmFnYWkgcGVybWFpbmFuIHlhbmcgYmlzYSBhbmRhIG1haW5rYW4gZGkgd2Vic2l0ZSBrYW1pXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVMZWFkZXJCYm9hcmRrQ2xpY2t9PlxyXG4gICAgICAgICAgICBMZWFkZXJib2FyZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEl0ZW1zICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRlcndTbX0+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVjdGFuZ2xlSXRlbX0gJHtwbGF5ZWRHYW1lc1tpdGVtLnBhdGhdID8gc3R5bGVzLnBsYXllZCA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5iYWNrZ3JvdW5kSW1hZ2V9KWAgfX1cclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZWRUZXh0fT57cGxheWVkR2FtZXNbaXRlbS5wYXRoXSA/ICdQZXJuYWggRGltYWlua2FuJyA6ICcnfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhgSXRlbSBwYXRoOiAke2l0ZW0ucGF0aH0sIFBsYXllZDogJHtwbGF5ZWRHYW1lc1tpdGVtLnBhdGhdfWApfVxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWN0YW5nbGVJdGVtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICB7LyogQWRkIFNWRyBjb250ZW50IGhlcmUgaWYgbmVlZGVkICovfVxyXG4gICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YGg0IG1iLTJgfT57aXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGl0ZW0ucGF0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIlByb2Nlc3NpbmdcIiA6IFwiUGxheVwifVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgaXNMb2dnZWRJbjogc3RhdGUucmVkdWNlci5pc0xvZ2dlZEluLFxyXG4gIHVzZXI6IHN0YXRlLnJlZHVjZXIudXNlcixcclxuICBwbGF5ZWRHYW1lczogc3RhdGUucmVkdWNlci5wbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoR2FtZUxpc3QpO1xyXG5cclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KCl7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9SRVFVRVNUJ1xyXG4vLyAgIH1cclxuLy8gIH07XHJcblxyXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyAodG9rZW4sIGVtYWlsKSB7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgIHR5cGU6ICdMT0dJTl9TVUNDRVNTJyxcclxuLy8gICBwYXlsb2FkOiB7IHRva2VuLCBlbWFpbCB9LFxyXG4vLyB9fTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpbkZhaWx1cmUgKGVycm9yKXtcclxuLy8gICByZXR1cm57XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fRkFJTFVSRScsXHJcbi8vICAgICBwYXlsb2FkOiBlcnJvcixcclxuLy8gICB9ICBcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbWFpbChlbWFpbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNQUlMJyxcclxuICAgIHBheWxvYWQ6IGVtYWlsLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFNjb3JlID0gKHRvdGFsU2NvcmUpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9UT1RBTF9TQ09SRScsXHJcbiAgcGF5bG9hZDogdG90YWxTY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyVG90YWxTY29yZSA9ICh1c2VyRW1haWwpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcyc7XHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZWQhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgcmV0dXJuOyAvLyBSZXR1cm4gZWFybHkgaWYgbm90IGF1dGhvcml6ZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0L3JhbmsnLFxyXG4gICAgICB7IGVtYWlsOiB1c2VyRW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXNlclRvdGFsU2NvcmUgPSByZXNwb25zZS5kYXRhLmRhdGEudG90YWxzY29yZTtcclxuICAgIGRpc3BhdGNoKHNldFRvdGFsU2NvcmUodXNlclRvdGFsU2NvcmUpKTsgLy8gRGlzcGF0Y2ggdGhlIHRvdGFsIHNjb3JlIHRvIFJlZHV4IHN0b3JlXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgdG90YWwgc2NvcmU6JywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICBkaXNwYXRjaChsb2dpblJlcXVlc3QoKSk7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9sb2dpbicsIHtcclxuLy8gICAgICAgZW1haWwsXHJcbi8vICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgeyB0b2tlbiwgZW1haWw6IHVzZXJFbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyRW1haWwpO1xyXG5cclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzcyh0b2tlbiwgdXNlckVtYWlsKSk7XHJcbi8vICAgICBkaXNwYXRjaChzZXRFbWFpbCh1c2VyRW1haWwpKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yTWVzc2FnZSkpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGZWF0dXJlUGFnZUltYWdlXCI6IFwiZmVhdHVyZV9GZWF0dXJlUGFnZUltYWdlX18xNXZTQ1wiLFxuXHRcIkxlYWRlcmJvYXJkUGFnZUltYWdlXCI6IFwiZmVhdHVyZV9MZWFkZXJib2FyZFBhZ2VJbWFnZV9fM1ppdUFcIixcblx0XCJHYW1lY29pblBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfR2FtZWNvaW5QYWdlSW1hZ2VfXzE2bXdlXCIsXG5cdFwiR2FtZWRpY2VQYWdlSW1hZ2VcIjogXCJmZWF0dXJlX0dhbWVkaWNlUGFnZUltYWdlX18zWlpyX1wiLFxuXHRcImZlYXR1cmVUaXRsZVwiOiBcImZlYXR1cmVfZmVhdHVyZVRpdGxlX18zal9qWFwiLFxuXHRcImZlYXR1cmVEZXNjcmlwdGlvblwiOiBcImZlYXR1cmVfZmVhdHVyZURlc2NyaXB0aW9uX18xX2lndlwiLFxuXHRcIm1kZXJ3U21cIjogXCJmZWF0dXJlX21kZXJ3U21fXzFobmpzXCIsXG5cdFwicmVjdGFuZ2xlSXRlbVwiOiBcImZlYXR1cmVfcmVjdGFuZ2xlSXRlbV9fUllqUGFcIixcblx0XCJyZWN0YW5nbGVJdGVtQ29udGVudFwiOiBcImZlYXR1cmVfcmVjdGFuZ2xlSXRlbUNvbnRlbnRfXzFWWE9ZXCIsXG5cdFwicGxheWVkXCI6IFwiZmVhdHVyZV9wbGF5ZWRfXzNDdXNrXCIsXG5cdFwicGxheWVkVGV4dFwiOiBcImZlYXR1cmVfcGxheWVkVGV4dF9fMW40cHhcIixcblx0XCJ0YWJsZVN0eWxlXCI6IFwiZmVhdHVyZV90YWJsZVN0eWxlX18xZnZrd1wiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcImZlYXR1cmVfYnV0dG9uQ29udGFpbmVyX19ERVdTOFwiLFxuXHRcIm1kZXJ3LXNtXCI6IFwiZmVhdHVyZV9tZGVydy1zbV9fRXRsd0JcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiRXhhbXBsZSIsImlzTG9nZ2VkSW4iLCJ1c2VyRW1haWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlZHVjZXIiLCJlbWFpbCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiZmV0Y2hVc2VyVG90YWxTY29yZSIsIk5hdmJhclVzZXIiLCJ0b3RhbFNjb3JlIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsInN0eWxlcyIsInNldEVtYWlsIiwic2V0UGxheWVkR2FtZXMiLCJHYW1lTGlzdCIsInVzZXIiLCJwbGF5ZWRHYW1lcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlTGVhZGVyQmJvYXJka0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaXRlbXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwicGF0aCIsImNoZWNrVG9rZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVDbGljayIsInRleHRUaXRsZSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidGV4dERlc2NyaXB0aW9uIiwiRmVhdHVyZVBhZ2VJbWFnZSIsImZlYXR1cmVUaXRsZSIsImZlYXR1cmVEZXNjcmlwdGlvbiIsIm1kZXJ3U20iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZWN0YW5nbGVJdGVtIiwicGxheWVkIiwicGxheWVkVGV4dCIsInJlY3RhbmdsZUl0ZW1Db250ZW50IiwiQXhpb3MiLCJ0eXBlIiwicGF5bG9hZCIsInNldFRvdGFsU2NvcmUiLCJzZXRMb2dnZWRJbiIsImdhbWVuYW1lIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1c2VyVG90YWxTY29yZSIsImRhdGEiLCJ0b3RhbHNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==