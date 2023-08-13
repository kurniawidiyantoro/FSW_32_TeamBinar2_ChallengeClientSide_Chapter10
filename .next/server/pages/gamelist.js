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
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.fetchUserTotalScore)(userEmail));
  }, [dispatch, userEmail]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {
          className: "ps-3",
          children: [`Welcome, ${userEmail}`, totalScore !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "ps-2",
            children: ["Total Score: ", totalScore]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
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
      lineNumber: 87,
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
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().featureDescription),
          children: "Berbagai permainan yang bisa anda mainkan di website kami"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "primary",
          onClick: handleLeaderBboardkClick,
          children: "Leaderboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
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
            lineNumber: 110,
            columnNumber: 15
          }, undefined), console.log(`Item path: ${item.path}, Played: ${playedGames[item.path]}`), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_7___default().rectangleItemContent),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
              viewBox: "0 0 64 64",
              xmlns: "http://www.w3.org/2000/svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              className: `h4 mb-2`,
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: item.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
              color: "primary",
              onClick: () => handleClick(item.path),
              disabled: loading,
              children: loading ? "Processing" : "Play"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 14
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQjZELE1BQUFBO0FBQXBCLEtBRnFCLEVBR3JCO0FBQ0VHLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxhQUFhLEVBQUcsU0FBUWpDLEtBQU07QUFEdkI7QUFEWCxLQUhxQixDQUF2QjtBQVVBLFVBQU1rQyxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxVQUExQztBQUNBMUQsSUFBQUEsUUFBUSxDQUFDaUQsYUFBYSxDQUFDTyxjQUFELENBQWQsQ0FBUixDQXJCRSxDQXFCdUM7QUFDMUMsR0F0QkQsQ0FzQkUsT0FBTzdCLEtBQVAsRUFBYztBQUNkRixJQUFBQSxPQUFPLENBQUNFLEtBQVIsQ0FBYyxrQ0FBZCxFQUFrREEsS0FBbEQ7QUFDRDtBQUNGLENBMUJNLEVBNEJQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXJVc2VyLmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZWxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5mdW5jdGlvbiBFeGFtcGxlKHsgaXNMb2dnZWRJbiwgdXNlckVtYWlsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicHMtM1wiPlxyXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyBgV2VsY29tZSwgJHt1c2VyRW1haWx9YCA6ICdUZWFtIDInfVxyXG4gICAgICAgIDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgdXNlckVtYWlsOiBzdGF0ZS5yZWR1Y2VyLmVtYWlsIHx8ICcnLCBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXhhbXBsZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmt9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJUb3RhbFNjb3JlIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZiYXJVc2VyKHsgdXNlckVtYWlsLCB0b3RhbFNjb3JlIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJUb3RhbFNjb3JlKHVzZXJFbWFpbCkpO1xyXG4gIH0sIFtkaXNwYXRjaCwgdXNlckVtYWlsXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBjbGFzc05hbWU9XCJwcy0zXCI+e2BXZWxjb21lLCAke3VzZXJFbWFpbH1gfVxyXG4gICAgICAgIHt0b3RhbFNjb3JlICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHMtMlwiPlRvdGFsIFNjb3JlOiB7dG90YWxTY29yZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICBcclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0cHJvZmlsZVwiPkVkaXQgUHJvZmlsZTwvTmF2TGluaz5cclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBlLTNcIj5Mb2dvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgdXNlckVtYWlsOiBzdGF0ZS5yZWR1Y2VyLmVtYWlsLFxyXG4gIHRvdGFsU2NvcmU6IHN0YXRlLnJlZHVjZXIudG90YWxTY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2YmFyVXNlcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgTmF2YmFyVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJVc2VyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mZWF0dXJlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEVtYWlsLCBzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgR2FtZUxpc3QgPSAoeyBpc0xvZ2dlZEluLCB1c2VyLCBwbGF5ZWRHYW1lcyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxlYWRlckJib2FyZGtDbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbGVhZGVyYm9hcmQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUm9jayBQYXBlciBTY2lzc29yXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJhbnR1bmcgR3VudGluZyBLZXJ0YXMgbWVsYXdhbiBjb21wdXRlclwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcvaW1hZ2VzL3JvY2stcGFwZXItc2Npc3Nvci5qcGcnLFxyXG4gICAgICBwYXRoOiBcIi9nYW1lcnBzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIZWFkIG9yIFRhaWxzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1lbmNvYmEgbWVuZWJhayBoYXNpbCBkYXJpIGxlbXBhcmFuIGNvaW5cIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9jb2luLmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVjb2luXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHYW1lIERhZHVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUGVybWFpbmFuIGxlbXBhciBkYWR1IG1lbGF3YW4ga29tcHV0ZXJcIixcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAnL2ltYWdlcy9kYWR1LmpwZycsXHJcbiAgICAgIHBhdGg6IFwiL2dhbWVkaWNlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZWQgIScpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIGRpc3BhdGNoKHNldEVtYWlsKGVtYWlsKSk7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgICAvLyBSZXRyaWV2ZSBwbGF5ZWQgZ2FtZXMgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIFJlZHV4IHN0b3JlXHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZWRHYW1lcycpKSB8fCB7fTtcclxuXHJcbiAgLy8gRGlzcGF0Y2ggdGhlIGFjdGlvbiB0byB1cGRhdGUgdGhlIHBsYXllZCBnYW1lcyBpbiBSZWR1eCBzdG9yZVxyXG4gIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHBsYXllZEdhbWVzKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHBhdGgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7IFxyXG4gICAgY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgdGV4dFRpdGxlID0ge1xyXG4gICAgZm9udFNpemU6ICcyMXB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9O1xyXG5cclxuICBjb25zdCB0ZXh0RGVzY3JpcHRpb24gPSB7XHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5GZWF0dXJlUGFnZUltYWdlfT5cclxuICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgbWQ6cHktMjBcIj5cclxuICAgICAgICB7LyogU2VjdGlvbiBoZWFkZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVUaXRsZX0+R2FtZSBMaXN0PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIEJlcmJhZ2FpIHBlcm1haW5hbiB5YW5nIGJpc2EgYW5kYSBtYWlua2FuIGRpIHdlYnNpdGUga2FtaVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTGVhZGVyQmJvYXJka0NsaWNrfT5cclxuICAgICAgICAgICAgTGVhZGVyYm9hcmRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBJdGVtcyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZXJ3U219PlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlY3RhbmdsZUl0ZW19ICR7cGxheWVkR2FtZXNbaXRlbS5wYXRoXSA/IHN0eWxlcy5wbGF5ZWQgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uYmFja2dyb3VuZEltYWdlfSlgIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVkVGV4dH0+e3BsYXllZEdhbWVzW2l0ZW0ucGF0aF0gPyAnUGVybmFoIERpbWFpbmthbicgOiAnJ308L2Rpdj5cclxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2coYEl0ZW0gcGF0aDogJHtpdGVtLnBhdGh9LCBQbGF5ZWQ6ICR7cGxheWVkR2FtZXNbaXRlbS5wYXRoXX1gKX1cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjdGFuZ2xlSXRlbUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgey8qIEFkZCBTVkcgY29udGVudCBoZXJlIGlmIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BoNCBtYi0yYH0+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfSBcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJQcm9jZXNzaW5nXCIgOiBcIlBsYXlcIn1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgcGxheWVkR2FtZXM6IHN0YXRlLnJlZHVjZXIucGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdhbWVMaXN0KTtcclxuXHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxTY29yZSA9ICh0b3RhbFNjb3JlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfVE9UQUxfU0NPUkUnLFxyXG4gIHBheWxvYWQ6IHRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclRvdGFsU2NvcmUgPSAodXNlckVtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnO1xyXG5cclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemVkIScpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIHJldHVybjsgLy8gUmV0dXJuIGVhcmx5IGlmIG5vdCBhdXRob3JpemVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgeyBlbWFpbDogdXNlckVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVzZXJUb3RhbFNjb3JlID0gcmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmU7XHJcbiAgICBkaXNwYXRjaChzZXRUb3RhbFNjb3JlKHVzZXJUb3RhbFNjb3JlKSk7IC8vIERpc3BhdGNoIHRoZSB0b3RhbCBzY29yZSB0byBSZWR1eCBzdG9yZVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHRvdGFsIHNjb3JlOicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmVhdHVyZVBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfRmVhdHVyZVBhZ2VJbWFnZV9fMTV2U0NcIixcblx0XCJMZWFkZXJib2FyZFBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfTGVhZGVyYm9hcmRQYWdlSW1hZ2VfXzNaaXVBXCIsXG5cdFwiZmVhdHVyZVRpdGxlXCI6IFwiZmVhdHVyZV9mZWF0dXJlVGl0bGVfXzNqX2pYXCIsXG5cdFwiZmVhdHVyZURlc2NyaXB0aW9uXCI6IFwiZmVhdHVyZV9mZWF0dXJlRGVzY3JpcHRpb25fXzFfaWd2XCIsXG5cdFwibWRlcndTbVwiOiBcImZlYXR1cmVfbWRlcndTbV9fMWhuanNcIixcblx0XCJyZWN0YW5nbGVJdGVtXCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtX19SWWpQYVwiLFxuXHRcInJlY3RhbmdsZUl0ZW1Db250ZW50XCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtQ29udGVudF9fMVZYT1lcIixcblx0XCJwbGF5ZWRcIjogXCJmZWF0dXJlX3BsYXllZF9fM0N1c2tcIixcblx0XCJwbGF5ZWRUZXh0XCI6IFwiZmVhdHVyZV9wbGF5ZWRUZXh0X18xbjRweFwiLFxuXHRcInRhYmxlU3R5bGVcIjogXCJmZWF0dXJlX3RhYmxlU3R5bGVfXzFmdmt3XCIsXG5cdFwibWRlcnctc21cIjogXCJmZWF0dXJlX21kZXJ3LXNtX19FdGx3QlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIk5hdmJhciIsIk5hdmJhckJyYW5kIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJFeGFtcGxlIiwiaXNMb2dnZWRJbiIsInVzZXJFbWFpbCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciIsImVtYWlsIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJmZXRjaFVzZXJUb3RhbFNjb3JlIiwiTmF2YmFyVXNlciIsInRvdGFsU2NvcmUiLCJkaXNwYXRjaCIsInVuZGVmaW5lZCIsInVzZVN0YXRlIiwiQnV0dG9uIiwic3R5bGVzIiwic2V0RW1haWwiLCJzZXRQbGF5ZWRHYW1lcyIsIkdhbWVMaXN0IiwidXNlciIsInBsYXllZEdhbWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVMZWFkZXJCYm9hcmRrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwYXRoIiwiY2hlY2tUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUNsaWNrIiwidGV4dFRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVzY3JpcHRpb24iLCJGZWF0dXJlUGFnZUltYWdlIiwiZmVhdHVyZVRpdGxlIiwiZmVhdHVyZURlc2NyaXB0aW9uIiwibWRlcndTbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlY3RhbmdsZUl0ZW0iLCJwbGF5ZWQiLCJwbGF5ZWRUZXh0IiwicmVjdGFuZ2xlSXRlbUNvbnRlbnQiLCJBeGlvcyIsInR5cGUiLCJwYXlsb2FkIiwic2V0VG90YWxTY29yZSIsInNldExvZ2dlZEluIiwiZ2FtZW5hbWUiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJUb3RhbFNjb3JlIiwiZGF0YSIsInRvdGFsc2NvcmUiXSwic291cmNlUm9vdCI6IiJ9