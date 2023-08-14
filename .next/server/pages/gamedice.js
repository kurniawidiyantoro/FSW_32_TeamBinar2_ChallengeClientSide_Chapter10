(() => {
var exports = {};
exports.id = "pages/gamedice";
exports.ids = ["pages/gamedice"];
exports.modules = {

/***/ "./pages/gamedice/index.js":
/*!*********************************!*\
  !*** ./pages/gamedice/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/gameDice.module.css */ "./styles/gameDice.module.css");
/* harmony import */ var _styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/dice1.svg */ "./assets/images/dice1.svg");
/* harmony import */ var _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/dice2.svg */ "./assets/images/dice2.svg");
/* harmony import */ var _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/dice3.svg */ "./assets/images/dice3.svg");
/* harmony import */ var _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/dice4.svg */ "./assets/images/dice4.svg");
/* harmony import */ var _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/dice5.svg */ "./assets/images/dice5.svg");
/* harmony import */ var _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/dice6.svg */ "./assets/images/dice6.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamedice\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { useNavigate } from "react-router-dom";














function Dices() {
  const {
    0: id,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: scores,
    1: setScores
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: result,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Click tombol dibawah untuk memulai permainan');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.reducer.playedGames);
  const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const computerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const resultDice = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // const navigate = useNavigate();

  let diceImages = [_assets_images_dice1_svg__WEBPACK_IMPORTED_MODULE_5__.default, _assets_images_dice2_svg__WEBPACK_IMPORTED_MODULE_6__.default, _assets_images_dice3_svg__WEBPACK_IMPORTED_MODULE_7__.default, _assets_images_dice4_svg__WEBPACK_IMPORTED_MODULE_8__.default, _assets_images_dice5_svg__WEBPACK_IMPORTED_MODULE_9__.default, _assets_images_dice6_svg__WEBPACK_IMPORTED_MODULE_10__.default];
  console.log(diceImages);

  const roll = () => {
    // Generate random number
    const playerRandomNum = Math.floor(Math.random() * 6);
    const computerRandomNum = Math.floor(Math.random() * 6); // Logic for this game

    if (playerRandomNum > computerRandomNum) {
      setResult(`Player menang dengan ${playerRandomNum + 1} points`);
      setScores(prevScore => prevScore + 1); // updateScores();
    } else if (playerRandomNum < computerRandomNum) {
      setResult(`Computer menang dengan ${computerRandomNum + 1} points`);
    } else {
      setResult(`Seri! Player dan pemain mendapatkan ${playerRandomNum + 1} points`);
    }

    playerRef.current.setAttribute('src', diceImages[playerRandomNum]);
    computerRef.current.setAttribute('src', diceImages[computerRandomNum]);
    console.log("Initial Played Games:", playedGames);
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamedice': true
    })));
    localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamedice': true
    })));
    console.log("Played Games:", playedGames);
  };

  const handleBackClick = () => {
    window.location.replace('gamelist'); // Specify the desired path here
  };

  const updateScores = async () => {
    setScores(scores + 1);
    const token = localStorage.getItem("token");
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://localhost:3005/usergame/update/scores', {
      id,
      scores: scores + 1
    }, {
      headers: {
        Authorization: `Basic ${token}`
      }
    });
    console.log(response.data.status);
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    console.log(token);
    console.log(email);

    try {
      if (!token) {
        console.log('Not Authorize !');
        navigate('/login'); // Ganti dengan useNavigate()
      } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://localhost:3005/usergame/get', {
          email
        }, {
          headers: {
            Authorization: `Basic ${token}`
          }
        });
        console.log(response.data.data);
        setId(response.data.data.id);
        setUsername(response.data.data.username);
        setScores(response.data.data.scores);
      }
    } catch (error) {
      console.log("Internal Server Error !");
      window.location.replace('login');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkToken();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().centerContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
            src: diceImages[0],
            ref: playerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["Score: ", scores]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
            src: diceImages[0],
            ref: computerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
          className: "result",
          ref: resultDice,
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: roll,
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
          children: "Roll the dice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dices);

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

/***/ "./assets/images/dice1.svg":
/*!*********************************!*\
  !*** ./assets/images/dice1.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/images/dice1.6c3c37f7e923511bebc261df53839d43.svg","height":100,"width":100});

/***/ }),

/***/ "./assets/images/dice2.svg":
/*!*********************************!*\
  !*** ./assets/images/dice2.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/images/dice2.61bab77db2316bebb39caa5df5a4a5c0.svg","height":100,"width":100});

/***/ }),

/***/ "./assets/images/dice3.svg":
/*!*********************************!*\
  !*** ./assets/images/dice3.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/images/dice3.50eb01c623de72673b1627da170f96f0.svg","height":100,"width":100});

/***/ }),

/***/ "./assets/images/dice4.svg":
/*!*********************************!*\
  !*** ./assets/images/dice4.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/images/dice4.fd859e7a2d28e93fc1784dd382533dd4.svg","height":100,"width":100});

/***/ }),

/***/ "./assets/images/dice5.svg":
/*!*********************************!*\
  !*** ./assets/images/dice5.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/images/dice5.1ba0d2589c660454ca90ff2a74d6a5b6.svg","height":100,"width":100});

/***/ }),

/***/ "./assets/images/dice6.svg":
/*!*********************************!*\
  !*** ./assets/images/dice6.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/images/dice6.6d78dd04a58cce993c4c18dd3cdb0dbc.svg","height":100,"width":100});

/***/ }),

/***/ "./styles/gameDice.module.css":
/*!************************************!*\
  !*** ./styles/gameDice.module.css ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"diceWrapper": "gameDice_diceWrapper__2aaEm",
	"diceArea": "gameDice_diceArea__8H0nB",
	"h2": "gameDice_h2__2Qcp5",
	"p": "gameDice_p__3Ef54",
	"btn": "gameDice_btn__3X27M",
	"reset": "gameDice_reset__3uAJP",
	"ul": "gameDice_ul__2-tg0",
	"centerContainer": "gameDice_centerContainer__2uiaQ"
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
var __webpack_exports__ = (__webpack_exec__("./pages/gamedice/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZWRpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2ZyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL2Fzc2V0cy9pbWFnZXMvZGljZTIuc3ZnIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vYXNzZXRzL2ltYWdlcy9kaWNlMy5zdmciLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnN2ZyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL2Fzc2V0cy9pbWFnZXMvZGljZTUuc3ZnIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vYXNzZXRzL2ltYWdlcy9kaWNlNi5zdmciLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9zdHlsZXMvZ2FtZURpY2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVEaWNlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7c2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBkaWNlMSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2Zyc7XHJcbmltcG9ydCBkaWNlMiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UyLnN2Zyc7XHJcbmltcG9ydCBkaWNlMyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UzLnN2Zyc7XHJcbmltcG9ydCBkaWNlNCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnN2Zyc7XHJcbmltcG9ydCBkaWNlNSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U1LnN2Zyc7XHJcbmltcG9ydCBkaWNlNiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U2LnN2Zyc7XHJcblxyXG5cclxuZnVuY3Rpb24gRGljZXMoKSB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Njb3Jlcywgc2V0U2NvcmVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnQ2xpY2sgdG9tYm9sIGRpYmF3YWggdW50dWsgbWVtdWxhaSBwZXJtYWluYW4nKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICBjb25zdCBwbGF5ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29tcHV0ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcmVzdWx0RGljZSA9IHVzZVJlZihudWxsKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGxldCBkaWNlSW1hZ2VzID0gW2RpY2UxLCBkaWNlMiwgZGljZTMsIGRpY2U0LCBkaWNlNSwgZGljZTZdO1xyXG4gIGNvbnNvbGUubG9nKGRpY2VJbWFnZXMpXHJcblxyXG4gIGNvbnN0IHJvbGwgPSAoKSA9PiB7XHJcbiAgICAvLyBHZW5lcmF0ZSByYW5kb20gbnVtYmVyXHJcbiAgICBjb25zdCBwbGF5ZXJSYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgIGNvbnN0IGNvbXB1dGVyUmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcblxyXG4gICAgLy8gTG9naWMgZm9yIHRoaXMgZ2FtZVxyXG4gICAgaWYgKHBsYXllclJhbmRvbU51bSA+IGNvbXB1dGVyUmFuZG9tTnVtKSB7XHJcbiAgICAgIHNldFJlc3VsdChgUGxheWVyIG1lbmFuZyBkZW5nYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgICAgc2V0U2NvcmVzKChwcmV2U2NvcmUpID0+IHByZXZTY29yZSArIDEpO1xyXG4gICAgICAvLyB1cGRhdGVTY29yZXMoKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyUmFuZG9tTnVtIDwgY29tcHV0ZXJSYW5kb21OdW0pIHtcclxuICAgICAgc2V0UmVzdWx0KGBDb21wdXRlciBtZW5hbmcgZGVuZ2FuICR7Y29tcHV0ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlc3VsdChgU2VyaSEgUGxheWVyIGRhbiBwZW1haW4gbWVuZGFwYXRrYW4gJHtwbGF5ZXJSYW5kb21OdW0gKyAxfSBwb2ludHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpY2VJbWFnZXNbcGxheWVyUmFuZG9tTnVtXSk7XHJcbiAgICBjb21wdXRlclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZGljZUltYWdlc1tjb21wdXRlclJhbmRvbU51bV0pO1xyXG4gICAgY29uc29sZS5sb2coXCJJbml0aWFsIFBsYXllZCBHYW1lczpcIiwgcGxheWVkR2FtZXMpO1xyXG4gICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lZGljZSc6IHRydWUgfSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllZEdhbWVzJywgSlNPTi5zdHJpbmdpZnkoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lZGljZSc6IHRydWUgfSkpO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZWQgR2FtZXM6XCIsIHBsYXllZEdhbWVzKTtcclxuICAgIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2dhbWVsaXN0JykgLy8gU3BlY2lmeSB0aGUgZGVzaXJlZCBwYXRoIGhlcmVcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzICsgMSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS91cGRhdGUvc2NvcmVzJyxcclxuICAgICAgICB7IGlkLCBzY29yZXM6IHNjb3JlcyArIDEgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbG9naW4nKTsgLy8gR2FudGkgZGVuZ2FuIHVzZU5hdmlnYXRlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS9nZXQnLFxyXG4gICAgICAgICAgeyBlbWFpbCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKTtcclxuICAgICAgICBzZXRVc2VybmFtZShyZXNwb25zZS5kYXRhLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIHNldFNjb3JlcyhyZXNwb25zZS5kYXRhLmRhdGEuc2NvcmVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2xvZ2luJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZUFyZWF9PlxyXG4gICAgICAgICAgPHA+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkaWNlSW1hZ2VzWzBdfSByZWY9e3BsYXllclJlZn0gYWx0PSdEaWNlJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5TY29yZToge3Njb3Jlc308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlQXJlYX0+XHJcbiAgICAgICAgICA8cD5Db21wdXRlcjwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkaWNlSW1hZ2VzWzBdfSByZWY9e2NvbXB1dGVyUmVmfSBhbHQ9J0RpY2UnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VXcmFwcGVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdyZXN1bHQnIHJlZj17cmVzdWx0RGljZX0+XHJcbiAgICAgICAge3Jlc3VsdH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17cm9sbH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cclxuICAgICAgICBSb2xsIHRoZSBkaWNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2VzO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpblJlcXVlc3QoKXtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX1JFUVVFU1QnXHJcbi8vICAgfVxyXG4vLyAgfTtcclxuXHJcbi8vICBleHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzICh0b2tlbiwgZW1haWwpIHtcclxuLy8gICByZXR1cm57XHJcbi8vICAgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4vLyAgIHBheWxvYWQ6IHsgdG9rZW4sIGVtYWlsIH0sXHJcbi8vIH19O1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luRmFpbHVyZSAoZXJyb3Ipe1xyXG4vLyAgIHJldHVybntcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9GQUlMVVJFJyxcclxuLy8gICAgIHBheWxvYWQ6IGVycm9yLFxyXG4vLyAgIH0gIFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVtYWlsKGVtYWlsKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdTRVRfRU1BSUwnLFxyXG4gICAgcGF5bG9hZDogZW1haWwsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRvdGFsU2NvcmUgPSAodG90YWxTY29yZSkgPT4gKHtcclxuICB0eXBlOiAnU0VUX1RPVEFMX1NDT1JFJyxcclxuICBwYXlsb2FkOiB0b3RhbFNjb3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dnZWRJbiA9IChpc0xvZ2dlZEluLCB1c2VyKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfTE9HR0VEX0lOJyxcclxuICBwYXlsb2FkOiB7IGlzTG9nZ2VkSW4sIHVzZXIgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGxheWVkR2FtZXMgPSAocGxheWVkR2FtZXMpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9QTEFZRURfR0FNRVMnLFxyXG4gIHBheWxvYWQ6IHBsYXllZEdhbWVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJUb3RhbFNjb3JlID0gKHVzZXJFbWFpbCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJztcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICByZXR1cm47IC8vIFJldHVybiBlYXJseSBpZiBub3QgYXV0aG9yaXplZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdChcclxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvcmFuaycsXHJcbiAgICAgIHsgZW1haWw6IHVzZXJFbWFpbCwgZ2FtZW5hbWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1c2VyVG90YWxTY29yZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlO1xyXG4gICAgZGlzcGF0Y2goc2V0VG90YWxTY29yZSh1c2VyVG90YWxTY29yZSkpOyAvLyBEaXNwYXRjaCB0aGUgdG90YWwgc2NvcmUgdG8gUmVkdXggc3RvcmVcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciB0b3RhbCBzY29yZTonLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2VzL2RpY2UxLjZjM2MzN2Y3ZTkyMzUxMWJlYmMyNjFkZjUzODM5ZDQzLnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2VzL2RpY2UyLjYxYmFiNzdkYjIzMTZiZWJiMzljYWE1ZGY1YTRhNWMwLnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2VzL2RpY2UzLjUwZWIwMWM2MjNkZTcyNjczYjE2MjdkYTE3MGY5NmYwLnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2VzL2RpY2U0LmZkODU5ZTdhMmQyOGU5M2ZjMTc4NGRkMzgyNTMzZGQ0LnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2VzL2RpY2U1LjFiYTBkMjU4OWM2NjA0NTRjYTkwZmYyYTc0ZDZhNWI2LnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvaW1hZ2VzL2RpY2U2LjZkNzhkZDA0YTU4Y2NlOTkzYzRjMThkZDNjZGIwZGJjLnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpY2VXcmFwcGVyXCI6IFwiZ2FtZURpY2VfZGljZVdyYXBwZXJfXzJhYUVtXCIsXG5cdFwiZGljZUFyZWFcIjogXCJnYW1lRGljZV9kaWNlQXJlYV9fOEgwbkJcIixcblx0XCJoMlwiOiBcImdhbWVEaWNlX2gyX18yUWNwNVwiLFxuXHRcInBcIjogXCJnYW1lRGljZV9wX18zRWY1NFwiLFxuXHRcImJ0blwiOiBcImdhbWVEaWNlX2J0bl9fM1gyN01cIixcblx0XCJyZXNldFwiOiBcImdhbWVEaWNlX3Jlc2V0X18zdUFKUFwiLFxuXHRcInVsXCI6IFwiZ2FtZURpY2VfdWxfXzItdGcwXCIsXG5cdFwiY2VudGVyQ29udGFpbmVyXCI6IFwiZ2FtZURpY2VfY2VudGVyQ29udGFpbmVyX18ydWlhUVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsInN0eWxlcyIsIkJ1dHRvbiIsInNldFBsYXllZEdhbWVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImRpY2UxIiwiZGljZTIiLCJkaWNlMyIsImRpY2U0IiwiZGljZTUiLCJkaWNlNiIsIkRpY2VzIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzY29yZXMiLCJzZXRTY29yZXMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJkaXNwYXRjaCIsInBsYXllZEdhbWVzIiwic3RhdGUiLCJyZWR1Y2VyIiwicGxheWVyUmVmIiwiY29tcHV0ZXJSZWYiLCJyZXN1bHREaWNlIiwiZGljZUltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJyb2xsIiwicGxheWVyUmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJSYW5kb21OdW0iLCJwcmV2U2NvcmUiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJ1cGRhdGVTY29yZXMiLCJ0b2tlbiIsImdldEl0ZW0iLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJzdGF0dXMiLCJjaGVja1Rva2VuIiwiZW1haWwiLCJuYXZpZ2F0ZSIsImVycm9yIiwiY2VudGVyQ29udGFpbmVyIiwiZGljZVdyYXBwZXIiLCJkaWNlQXJlYSIsImJ0biIsInNldEVtYWlsIiwidHlwZSIsInBheWxvYWQiLCJzZXRUb3RhbFNjb3JlIiwidG90YWxTY29yZSIsInNldExvZ2dlZEluIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJmZXRjaFVzZXJUb3RhbFNjb3JlIiwidXNlckVtYWlsIiwiZ2FtZW5hbWUiLCJ1c2VyVG90YWxTY29yZSIsInRvdGFsc2NvcmUiXSwic291cmNlUm9vdCI6IiJ9