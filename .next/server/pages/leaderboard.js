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

  const handleGamecoinClick = () => {
    window.location.replace('/leaderboard/gamecoin');
  };

  const handleGamedadulick = () => {
    window.location.replace('/leaderboard/gamedice');
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
      lineNumber: 66,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      color: "primary",
      onClick: handleBackClick,
      className: "mt-3",
      children: "Kembali"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttonContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
        color: "success",
        onClick: handleGamecoinClick,
        className: "mt-3",
        children: "Game Coin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
        color: "success",
        onClick: handleGamedadulick,
        className: "mt-3",
        children: "Game Dadu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "mt-4",
      children: playerData.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
        active: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
          striped: true,
          datasource: slicedPlayerData,
          pagination: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Game Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                children: "Total Score"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
            children: slicedPlayerData.map((player, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                scope: "row",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.gamename
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                children: player.totalscore
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 25
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 23
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
          lineNumber: 105,
          columnNumber: 17
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDSSxJQUFULENBQWNBLElBQWQsQ0FBbUJ6QixVQUExQztBQUNBZCxJQUFBQSxRQUFRLENBQUNlLGFBQWEsQ0FBQzJDLGNBQUQsQ0FBZCxDQUFSLENBckJFLENBcUJ1QztBQUMxQyxHQXRCRCxDQXNCRSxPQUFPakIsS0FBUCxFQUFjO0FBQ2RULElBQUFBLE9BQU8sQ0FBQ1MsS0FBUixDQUFjLGtDQUFkLEVBQWtEQSxLQUFsRDtBQUNEO0FBQ0YsQ0ExQk0sRUE0QlA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXJVc2VyLmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvbGVhZGVyYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9zdHlsZXMvZmVhdHVyZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5mdW5jdGlvbiBFeGFtcGxlKHsgaXNMb2dnZWRJbiwgdXNlckVtYWlsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicHMtM1wiPlxyXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyBgV2VsY29tZSwgJHt1c2VyRW1haWx9YCA6ICdUZWFtIDInfVxyXG4gICAgICAgIDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBpc0xvZ2dlZEluOiBzdGF0ZS5yZWR1Y2VyLmlzTG9nZ2VkSW4sXHJcbiAgdXNlckVtYWlsOiBzdGF0ZS5yZWR1Y2VyLmVtYWlsIHx8ICcnLCBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXhhbXBsZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmt9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJUb3RhbFNjb3JlIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9uJztcclxuXHJcblxyXG5mdW5jdGlvbiBOYXZiYXJVc2VyKHsgdXNlckVtYWlsLCB0b3RhbFNjb3JlIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChmZXRjaFVzZXJUb3RhbFNjb3JlKHVzZXJFbWFpbCkpO1xyXG4gIC8vIH0sIFtkaXNwYXRjaCwgdXNlckVtYWlsXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBjbGFzc05hbWU9XCJwcy0zXCI+e2BXZWxjb21lICR7dXNlckVtYWlsfWB9XHJcbiAgICAgICAgey8qIHt0b3RhbFNjb3JlICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHMtMlwiPlRvdGFsIFNjb3JlOiB7dG90YWxTY29yZX08L3NwYW4+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdHByb2ZpbGVcIj5FZGl0IFByb2ZpbGU8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwZS0zXCI+TG9nb3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHVzZXJFbWFpbDogc3RhdGUucmVkdWNlci5lbWFpbCxcclxuICB0b3RhbFNjb3JlOiBzdGF0ZS5yZWR1Y2VyLnRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5hdmJhclVzZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBOYXZiYXJVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclVzZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZlYXR1cmUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU2tlbGV0b24sIFBhZ2luYXRpb24gIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBMZWFkZXJCb2FyZCA9ICh7IGlzTG9nZ2VkSW4sIHVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG90YWxzY29yZSwgc2V0VG90YWxTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJEYXRhLCBzZXRQbGF5ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gICAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlR2FtZWNvaW5DbGljayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xlYWRlcmJvYXJkL2dhbWVjb2luJyk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgY29uc3QgaGFuZGxlR2FtZWRhZHVsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbGVhZGVyYm9hcmQvZ2FtZWRpY2UnKTtcclxuICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCk9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5yb3dzKTtcclxuICAgICAgICAgICAgc2V0UGxheWVyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEucm93cyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNsaWNlZFBsYXllckRhdGEgPSBwbGF5ZXJEYXRhLnNsaWNlKFxyXG4gICAgICAgIChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemUsXHJcbiAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZVxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGVhZGVyYm9hcmRQYWdlSW1hZ2V9PlxyXG4gICAgICAgICAgPE5hdmJhclVzZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlckVtYWlsPXt1c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic3VjY2Vzc1wiIG9uQ2xpY2s9e2hhbmRsZUdhbWVjb2luQ2xpY2t9IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgICAgICAgICBHYW1lIENvaW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzdWNjZXNzXCIgb25DbGljaz17aGFuZGxlR2FtZWRhZHVsaWNrfSBjbGFzc05hbWU9J210LTMnPlxyXG4gICAgICAgICAgICAgICAgR2FtZSBEYWR1XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgIHtwbGF5ZXJEYXRhLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICA8U2tlbGV0b24gYWN0aXZlIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGRhdGFzb3VyY2U9e3NsaWNlZFBsYXllckRhdGF9IHBhZ2luYXRpb249Jyc+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBTY29yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzbGljZWRQbGF5ZXJEYXRhLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLmdhbWVuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGxheWVyLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3BsYXllci50b3RhbHNjb3JlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsPXtwbGF5ZXJEYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXJcclxuICAgICAgICAgICAgICAgICAgb25TaG93U2l6ZUNoYW5nZT17KGN1cnJlbnQsIHNpemUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYWdlU2l6ZShzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZSgxKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGlzTG9nZ2VkSW46IHN0YXRlLnJlZHVjZXIuaXNMb2dnZWRJbixcclxuICAgIHVzZXI6IHN0YXRlLnJlZHVjZXIudXNlcixcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGVhZGVyQm9hcmQpO1xyXG5cclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KCl7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9SRVFVRVNUJ1xyXG4vLyAgIH1cclxuLy8gIH07XHJcblxyXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyAodG9rZW4sIGVtYWlsKSB7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgIHR5cGU6ICdMT0dJTl9TVUNDRVNTJyxcclxuLy8gICBwYXlsb2FkOiB7IHRva2VuLCBlbWFpbCB9LFxyXG4vLyB9fTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpbkZhaWx1cmUgKGVycm9yKXtcclxuLy8gICByZXR1cm57XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fRkFJTFVSRScsXHJcbi8vICAgICBwYXlsb2FkOiBlcnJvcixcclxuLy8gICB9ICBcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbWFpbChlbWFpbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNQUlMJyxcclxuICAgIHBheWxvYWQ6IGVtYWlsLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFNjb3JlID0gKHRvdGFsU2NvcmUpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9UT1RBTF9TQ09SRScsXHJcbiAgcGF5bG9hZDogdG90YWxTY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyVG90YWxTY29yZSA9ICh1c2VyRW1haWwpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcyc7XHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZWQhJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgcmV0dXJuOyAvLyBSZXR1cm4gZWFybHkgaWYgbm90IGF1dGhvcml6ZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0L3JhbmsnLFxyXG4gICAgICB7IGVtYWlsOiB1c2VyRW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXNlclRvdGFsU2NvcmUgPSByZXNwb25zZS5kYXRhLmRhdGEudG90YWxzY29yZTtcclxuICAgIGRpc3BhdGNoKHNldFRvdGFsU2NvcmUodXNlclRvdGFsU2NvcmUpKTsgLy8gRGlzcGF0Y2ggdGhlIHRvdGFsIHNjb3JlIHRvIFJlZHV4IHN0b3JlXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgdG90YWwgc2NvcmU6JywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICBkaXNwYXRjaChsb2dpblJlcXVlc3QoKSk7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9sb2dpbicsIHtcclxuLy8gICAgICAgZW1haWwsXHJcbi8vICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgeyB0b2tlbiwgZW1haWw6IHVzZXJFbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyRW1haWwpO1xyXG5cclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzcyh0b2tlbiwgdXNlckVtYWlsKSk7XHJcbi8vICAgICBkaXNwYXRjaChzZXRFbWFpbCh1c2VyRW1haWwpKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yTWVzc2FnZSkpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJGZWF0dXJlUGFnZUltYWdlXCI6IFwiZmVhdHVyZV9GZWF0dXJlUGFnZUltYWdlX18xNXZTQ1wiLFxuXHRcIkxlYWRlcmJvYXJkUGFnZUltYWdlXCI6IFwiZmVhdHVyZV9MZWFkZXJib2FyZFBhZ2VJbWFnZV9fM1ppdUFcIixcblx0XCJHYW1lY29pblBhZ2VJbWFnZVwiOiBcImZlYXR1cmVfR2FtZWNvaW5QYWdlSW1hZ2VfXzE2bXdlXCIsXG5cdFwiR2FtZWRpY2VQYWdlSW1hZ2VcIjogXCJmZWF0dXJlX0dhbWVkaWNlUGFnZUltYWdlX18zWlpyX1wiLFxuXHRcImZlYXR1cmVUaXRsZVwiOiBcImZlYXR1cmVfZmVhdHVyZVRpdGxlX18zal9qWFwiLFxuXHRcImZlYXR1cmVEZXNjcmlwdGlvblwiOiBcImZlYXR1cmVfZmVhdHVyZURlc2NyaXB0aW9uX18xX2lndlwiLFxuXHRcIm1kZXJ3U21cIjogXCJmZWF0dXJlX21kZXJ3U21fXzFobmpzXCIsXG5cdFwicmVjdGFuZ2xlSXRlbVwiOiBcImZlYXR1cmVfcmVjdGFuZ2xlSXRlbV9fUllqUGFcIixcblx0XCJyZWN0YW5nbGVJdGVtQ29udGVudFwiOiBcImZlYXR1cmVfcmVjdGFuZ2xlSXRlbUNvbnRlbnRfXzFWWE9ZXCIsXG5cdFwicGxheWVkXCI6IFwiZmVhdHVyZV9wbGF5ZWRfXzNDdXNrXCIsXG5cdFwicGxheWVkVGV4dFwiOiBcImZlYXR1cmVfcGxheWVkVGV4dF9fMW40cHhcIixcblx0XCJ0YWJsZVN0eWxlXCI6IFwiZmVhdHVyZV90YWJsZVN0eWxlX18xZnZrd1wiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcImZlYXR1cmVfYnV0dG9uQ29udGFpbmVyX19ERVdTOFwiLFxuXHRcIm1kZXJ3LXNtXCI6IFwiZmVhdHVyZV9tZGVydy1zbV9fRXRsd0JcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIk5hdmJhciIsIk5hdmJhckJyYW5kIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJFeGFtcGxlIiwiaXNMb2dnZWRJbiIsInVzZXJFbWFpbCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciIsImVtYWlsIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJmZXRjaFVzZXJUb3RhbFNjb3JlIiwiTmF2YmFyVXNlciIsInRvdGFsU2NvcmUiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJzdHlsZXMiLCJBeGlvcyIsIlNrZWxldG9uIiwiUGFnaW5hdGlvbiIsIkxlYWRlckJvYXJkIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0b3RhbHNjb3JlIiwic2V0VG90YWxTY29yZSIsInBsYXllckRhdGEiLCJzZXRQbGF5ZXJEYXRhIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJoYW5kbGVHYW1lY29pbkNsaWNrIiwiaGFuZGxlR2FtZWRhZHVsaWNrIiwiZ2V0RGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJnYW1lbmFtZSIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInJvd3MiLCJlcnJvciIsInNsaWNlZFBsYXllckRhdGEiLCJzbGljZSIsIkxlYWRlcmJvYXJkUGFnZUltYWdlIiwiYnV0dG9uQ29udGFpbmVyIiwibGVuZ3RoIiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJjdXJyZW50Iiwic2l6ZSIsInNldEVtYWlsIiwidHlwZSIsInBheWxvYWQiLCJzZXRMb2dnZWRJbiIsInNldFBsYXllZEdhbWVzIiwicGxheWVkR2FtZXMiLCJ1c2VyVG90YWxTY29yZSJdLCJzb3VyY2VSb290IjoiIn0=