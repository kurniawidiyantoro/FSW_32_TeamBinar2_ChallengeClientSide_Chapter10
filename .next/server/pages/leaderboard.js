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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
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
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: pageSize,
    1: setPageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);

  const handleBackClick = () => {
    window.location.replace('/gamelist');
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    try {
      if (!token) {
        console.log('Not Authorize !');
        window.location.replace('/login');
      } else {
        const gamename = 'gamerps';
        const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:3005/gamehistory/get/rank', {
          email,
          gamename
        }, {
          headers: {
            Authorization: `Basic ${token}`
          }
        });
        console.log(response.data.data.rows);
        setPlayerData(response.data.data.rows);
      }

      ;
    } catch (error) {
      console.log("Internal Server Error !");
    }
  };

  const slicedPlayerData = playerData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().LeaderboardPageImage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_navbarUser__WEBPACK_IMPORTED_MODULE_3__.default, {
      isLoggedIn: isLoggedIn,
      userEmail: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      color: "primary",
      onClick: handleBackClick,
      className: "mt-3",
      children: "Kembali"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "mt-4",
      children: playerData.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
        active: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
          striped: true,
          datasource: slicedPlayerData,
          pagination: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Rank"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Game Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Total Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
            children: slicedPlayerData.map((player, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                scope: "row",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.gamename
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.totalscore
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 25
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Pagination, {
          current: currentPage,
          pageSize: pageSize,
          total: playerData.length,
          onChange: setCurrentPage,
          showSizeChanger: true,
          onShowSizeChange: (current, size) => {
            setPageSize(size);
            setCurrentPage(1);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
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

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOzs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyVXNlci5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2xlYWRlcmJvYXJkL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gRXhhbXBsZSh7IGlzTG9nZ2VkSW4sIHVzZXJFbWFpbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBzLTNcIj5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gYFdlbGNvbWUsICR7dXNlckVtYWlsfWAgOiAnVGVhbSAyJ31cclxuICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2VkaXRwcm9maWxlXCI+RWRpdCBQcm9maWxlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dvdXRcIj5Mb2dvdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgaXNMb2dnZWRJbjogc3RhdGUucmVkdWNlci5pc0xvZ2dlZEluLFxyXG4gIHVzZXJFbWFpbDogc3RhdGUucmVkdWNlci5lbWFpbCB8fCAnJywgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV4YW1wbGUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZmV0Y2hVc2VyVG90YWxTY29yZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbic7XHJcblxyXG5cclxuZnVuY3Rpb24gTmF2YmFyVXNlcih7IHVzZXJFbWFpbCwgdG90YWxTY29yZSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VyVG90YWxTY29yZSh1c2VyRW1haWwpKTtcclxuICB9LCBbZGlzcGF0Y2gsIHVzZXJFbWFpbF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICA8TmF2YmFyQnJhbmQgY2xhc3NOYW1lPVwicHMtM1wiPntgV2VsY29tZSwgJHt1c2VyRW1haWx9YH1cclxuICAgICAgICB7dG90YWxTY29yZSAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBzLTJcIj5Ub3RhbCBTY29yZToge3RvdGFsU2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwZS0zXCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHVzZXJFbWFpbDogc3RhdGUucmVkdWNlci5lbWFpbCxcclxuICB0b3RhbFNjb3JlOiBzdGF0ZS5yZWR1Y2VyLnRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5hdmJhclVzZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU2tlbGV0b24sIFBhZ2luYXRpb24gIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBMZWFkZXJCb2FyZCA9ICh7IGlzTG9nZ2VkSW4sIHVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG90YWxzY29yZSwgc2V0VG90YWxTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCk9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5yb3dzKTtcclxuICAgICAgICAgICAgc2V0UGxheWVyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEucm93cyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNsaWNlZFBsYXllckRhdGEgPSBwbGF5ZXJEYXRhLnNsaWNlKFxyXG4gICAgICAgIChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemUsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZVxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGVhZGVyYm9hcmRQYWdlSW1hZ2V9PlxyXG4gICAgICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgICAgICAgICB7cGxheWVyRGF0YS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBkYXRhc291cmNlPXtzbGljZWRQbGF5ZXJEYXRhfSBwYWdpbmF0aW9uPScnPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlJhbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYW1lIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgU2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c2xpY2VkUGxheWVyRGF0YS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci51c2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5nYW1lbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIudG90YWxzY29yZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbD17cGxheWVyRGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG9uU2hvd1NpemVDaGFuZ2U9eyhjdXJyZW50LCBzaXplKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgICB1c2VyOiBzdGF0ZS5yZWR1Y2VyLnVzZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExlYWRlckJvYXJkKTtcclxuXHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxTY29yZSA9ICh0b3RhbFNjb3JlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfVE9UQUxfU0NPUkUnLFxyXG4gIHBheWxvYWQ6IHRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclRvdGFsU2NvcmUgPSAodXNlckVtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnO1xyXG5cclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemVkIScpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIHJldHVybjsgLy8gUmV0dXJuIGVhcmx5IGlmIG5vdCBhdXRob3JpemVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgeyBlbWFpbDogdXNlckVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVzZXJUb3RhbFNjb3JlID0gcmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmU7XHJcbiAgICBkaXNwYXRjaChzZXRUb3RhbFNjb3JlKHVzZXJUb3RhbFNjb3JlKSk7IC8vIERpc3BhdGNoIHRoZSB0b3RhbCBzY29yZSB0byBSZWR1eCBzdG9yZVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHRvdGFsIHNjb3JlOicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRmVhdHVyZVBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfRmVhdHVyZVBhZ2VJbWFnZV9fMTV2U0NcIixcblx0XCJMZWFkZXJib2FyZFBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfTGVhZGVyYm9hcmRQYWdlSW1hZ2VfXzNaaXVBXCIsXG5cdFwiZmVhdHVyZVRpdGxlXCI6IFwiZmVhdHVyZV9mZWF0dXJlVGl0bGVfXzNqX2pYXCIsXG5cdFwiZmVhdHVyZURlc2NyaXB0aW9uXCI6IFwiZmVhdHVyZV9mZWF0dXJlRGVzY3JpcHRpb25fXzFfaWd2XCIsXG5cdFwibWRlcndTbVwiOiBcImZlYXR1cmVfbWRlcndTbV9fMWhuanNcIixcblx0XCJyZWN0YW5nbGVJdGVtXCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtX19SWWpQYVwiLFxuXHRcInJlY3RhbmdsZUl0ZW1Db250ZW50XCI6IFwiZmVhdHVyZV9yZWN0YW5nbGVJdGVtQ29udGVudF9fMVZYT1lcIixcblx0XCJwbGF5ZWRcIjogXCJmZWF0dXJlX3BsYXllZF9fM0N1c2tcIixcblx0XCJwbGF5ZWRUZXh0XCI6IFwiZmVhdHVyZV9wbGF5ZWRUZXh0X18xbjRweFwiLFxuXHRcInRhYmxlU3R5bGVcIjogXCJmZWF0dXJlX3RhYmxlU3R5bGVfXzFmdmt3XCIsXG5cdFwibWRlcnctc21cIjogXCJmZWF0dXJlX21kZXJ3LXNtX19FdGx3QlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsIkV4YW1wbGUiLCJpc0xvZ2dlZEluIiwidXNlckVtYWlsIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWR1Y2VyIiwiZW1haWwiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsImZldGNoVXNlclRvdGFsU2NvcmUiLCJOYXZiYXJVc2VyIiwidG90YWxTY29yZSIsImRpc3BhdGNoIiwidW5kZWZpbmVkIiwidXNlU3RhdGUiLCJCdXR0b24iLCJUYWJsZSIsInN0eWxlcyIsIkF4aW9zIiwiU2tlbGV0b24iLCJQYWdpbmF0aW9uIiwiTGVhZGVyQm9hcmQiLCJ1c2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicGxheWVyRGF0YSIsInNldFBsYXllckRhdGEiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJzZXRQYWdlU2l6ZSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdldERhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZ2FtZW5hbWUiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJyb3dzIiwiZXJyb3IiLCJzbGljZWRQbGF5ZXJEYXRhIiwic2xpY2UiLCJMZWFkZXJib2FyZFBhZ2VJbWFnZSIsImxlbmd0aCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiY3VycmVudCIsInNpemUiLCJzZXRFbWFpbCIsInR5cGUiLCJwYXlsb2FkIiwic2V0TG9nZ2VkSW4iLCJzZXRQbGF5ZWRHYW1lcyIsInBsYXllZEdhbWVzIiwidXNlclRvdGFsU2NvcmUiXSwic291cmNlUm9vdCI6IiJ9