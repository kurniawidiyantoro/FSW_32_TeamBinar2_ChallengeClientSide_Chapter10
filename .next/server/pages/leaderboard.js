(() => {
var exports = {};
exports.id = "pages/leaderboard";
exports.ids = ["pages/leaderboard"];
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

/***/ "./pages/leaderboard/index.js":
/*!************************************!*\
  !*** ./pages/leaderboard/index.js ***!
  \************************************/
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
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/feature.module.css */ "./styles/feature.module.css");
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\leaderboard\\index.js";










const LeaderBoard = ({
  isLoggedIn,
  user
}) => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: totalscore,
    1: setTotalScore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: playerData,
    1: setPlayerData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleBackClick = () => {
    window.location.replace('/gamelist');
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");
    const status = localStorage.getItem("status");
    const totalscore = localStorage.getItem("totalscore");
    const gamename = localStorage.getItem("gamename");

    try {
      if (!token) {
        console.log('Not Authorize !');
        window.location.replace('/login');
      } else {
        const gamename = 'gamerps';
        const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().post('http://localhost:3005/gamehistory/get/rank', {
          gamename
        }, {
          headers: {
            Authorization: `Basic ${token}`
          }
        });
        console.log(response.data.data);
        setUsername(response.data.data.username);
        setStatus(response.data.data.status);
        setTotalScore(response.data.data.totalscore);
        setPlayerData(response.data.data);
      }

      ;
    } catch (error) {
      console.log("Internal Server Error !");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().FeaturePageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_3__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "mt-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
        striped: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Game Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              children: "Total Score"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
          children: playerData.map((player, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
              scope: "row",
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.gamename
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
              children: player.totalscore
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  isLoggedIn: state.reducer.isLoggedIn,
  user: state.reducer.user
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(LeaderBoard));

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
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:3005/gamehistory/get/${userEmail}`);
    const userTotalScore = response.data.totalScore; // Adjust this based on your API response

    dispatch(setTotalScore(userTotalScore));
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
var __webpack_exports__ = (__webpack_exec__("./pages/leaderboard/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FSTSxFQVVQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyVXNlci5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2xlYWRlcmJvYXJkL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gRXhhbXBsZSh7IGlzTG9nZ2VkSW4sIHVzZXJFbWFpbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBzLTNcIj5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gYFdlbGNvbWUsICR7dXNlckVtYWlsfWAgOiAnVGVhbSAyJ31cclxuICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2VkaXRwcm9maWxlXCI+RWRpdCBQcm9maWxlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dvdXRcIj5Mb2dvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgaXNMb2dnZWRJbjogc3RhdGUucmVkdWNlci5pc0xvZ2dlZEluLFxyXG4gIHVzZXJFbWFpbDogc3RhdGUucmVkdWNlci5lbWFpbCB8fCAnJywgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV4YW1wbGUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZmV0Y2hVc2VyVG90YWxTY29yZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbic7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2YmFyVXNlcih7IHVzZXJFbWFpbCwgdG90YWxTY29yZSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goZmV0Y2hVc2VyVG90YWxTY29yZSh1c2VyRW1haWwpKTtcclxuICAvLyB9LCBbZGlzcGF0Y2gsIHVzZXJFbWFpbF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgY2xhc3NOYW1lPVwicHMtM1wiPntgV2VsY29tZSwgJHt1c2VyRW1haWx9YH1cclxuICAgICAgICB7dG90YWxTY29yZSAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBzLTJcIj5Ub3RhbCBTY29yZToge3RvdGFsU2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwZS0zXCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHVzZXJFbWFpbDogc3RhdGUucmVkdWNlci5lbWFpbCxcclxuICB0b3RhbFNjb3JlOiBzdGF0ZS5yZWR1Y2VyLnRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5hdmJhclVzZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0RW1haWwsIHNldFBsYXllZEdhbWVzICB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IExlYWRlckJvYXJkID0gKHsgaXNMb2dnZWRJbiwgdXNlcn0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3BsYXllckRhdGEsIHNldFBsYXllckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXR1c1wiKTtcclxuICAgICAgICBjb25zdCB0b3RhbHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbHNjb3JlXCIpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lbmFtZVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgICAgICAgICAgIHsgZ2FtZW5hbWUgfSxcclxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgICBzZXRUb3RhbFNjb3JlKHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlKTtcclxuICAgICAgICAgICAgc2V0UGxheWVyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEpOyBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRmVhdHVyZVBhZ2VJbWFnZX0+XHJcbiAgICA8TmF2YmFyVXNlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyRW1haWw9e3VzZXIuZW1haWx9Lz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZD5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+R2FtZSBOYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Ub3RhbCBTY29yZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtwbGF5ZXJEYXRhLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIuZ2FtZW5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxTY29yZSA9ICh0b3RhbFNjb3JlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfVE9UQUxfU0NPUkUnLFxyXG4gIHBheWxvYWQ6IHRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclRvdGFsU2NvcmUgPSAodXNlckVtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvJHt1c2VyRW1haWx9YCk7XHJcbiAgICBjb25zdCB1c2VyVG90YWxTY29yZSA9IHJlc3BvbnNlLmRhdGEudG90YWxTY29yZTsgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBBUEkgcmVzcG9uc2VcclxuICAgIGRpc3BhdGNoKHNldFRvdGFsU2NvcmUodXNlclRvdGFsU2NvcmUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciB0b3RhbCBzY29yZTonLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkZlYXR1cmVQYWdlSW1hZ2VcIjogXCJmZWF0dXJlX0ZlYXR1cmVQYWdlSW1hZ2VfXzE1dlNDXCIsXG5cdFwiZmVhdHVyZVRpdGxlXCI6IFwiZmVhdHVyZV9mZWF0dXJlVGl0bGVfXzNqX2pYXCIsXG5cdFwiZmVhdHVyZURlc2NyaXB0aW9uXCI6IFwiZmVhdHVyZV9mZWF0dXJlRGVzY3JpcHRpb25fXzFfaWd2XCIsXG5cdFwibWRlcndTbVwiOiBcImZlYXR1cmVfbWRlcndTbV9fMWhuanNcIixcblx0XCJyZWN0YW5nbGVJdGVtXCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtX19SWWpQYVwiLFxuXHRcInJlY3RhbmdsZUl0ZW1Db250ZW50XCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtQ29udGVudF9fMVZYT1lcIixcblx0XCJwbGF5ZWRcIjogXCJmZWF0dXJlX3BsYXllZF9fM0N1c2tcIixcblx0XCJwbGF5ZWRUZXh0XCI6IFwiZmVhdHVyZV9wbGF5ZWRUZXh0X18xbjRweFwiLFxuXHRcInRhYmxlU3R5bGVcIjogXCJmZWF0dXJlX3RhYmxlU3R5bGVfXzFmdmt3XCIsXG5cdFwibWRlcnctc21cIjogXCJmZWF0dXJlX21kZXJ3LXNtX19FdGx3QlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIk5hdmJhciIsIk5hdmJhckJyYW5kIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJFeGFtcGxlIiwiaXNMb2dnZWRJbiIsInVzZXJFbWFpbCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciIsImVtYWlsIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJmZXRjaFVzZXJUb3RhbFNjb3JlIiwiTmF2YmFyVXNlciIsInRvdGFsU2NvcmUiLCJkaXNwYXRjaCIsInVuZGVmaW5lZCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJzdHlsZXMiLCJzZXRFbWFpbCIsInNldFBsYXllZEdhbWVzIiwiQXhpb3MiLCJMZWFkZXJCb2FyZCIsInVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidG90YWxzY29yZSIsInNldFRvdGFsU2NvcmUiLCJwbGF5ZXJEYXRhIiwic2V0UGxheWVyRGF0YSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnYW1lbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsIkZlYXR1cmVQYWdlSW1hZ2UiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsInR5cGUiLCJwYXlsb2FkIiwic2V0TG9nZ2VkSW4iLCJwbGF5ZWRHYW1lcyIsImdldCIsInVzZXJUb3RhbFNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==