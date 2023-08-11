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
        lineNumber: 109,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
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
            lineNumber: 116,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
            src: diceImages[0],
            ref: playerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: ["Score: ", scores]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceArea),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
            src: diceImages[0],
            ref: computerRef,
            alt: "Dice"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
          className: "result",
          ref: resultDice,
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().diceWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: roll,
          className: (_styles_gameDice_module_css__WEBPACK_IMPORTED_MODULE_12___default().btn),
          children: "Roll the dice"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZWRpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9yZWR1eC9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2ZyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL2Fzc2V0cy9pbWFnZXMvZGljZTIuc3ZnIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vYXNzZXRzL2ltYWdlcy9kaWNlMy5zdmciLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnN2ZyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL2Fzc2V0cy9pbWFnZXMvZGljZTUuc3ZnIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vYXNzZXRzL2ltYWdlcy9kaWNlNi5zdmciLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9zdHlsZXMvZ2FtZURpY2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVEaWNlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7c2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBkaWNlMSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UxLnN2Zyc7XHJcbmltcG9ydCBkaWNlMiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UyLnN2Zyc7XHJcbmltcG9ydCBkaWNlMyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2UzLnN2Zyc7XHJcbmltcG9ydCBkaWNlNCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U0LnN2Zyc7XHJcbmltcG9ydCBkaWNlNSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U1LnN2Zyc7XHJcbmltcG9ydCBkaWNlNiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2RpY2U2LnN2Zyc7XHJcblxyXG5cclxuZnVuY3Rpb24gRGljZXMoKSB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Njb3Jlcywgc2V0U2NvcmVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnQ2xpY2sgdG9tYm9sIGRpYmF3YWggdW50dWsgbWVtdWxhaSBwZXJtYWluYW4nKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICBjb25zdCBwbGF5ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29tcHV0ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcmVzdWx0RGljZSA9IHVzZVJlZihudWxsKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGxldCBkaWNlSW1hZ2VzID0gW2RpY2UxLCBkaWNlMiwgZGljZTMsIGRpY2U0LCBkaWNlNSwgZGljZTZdO1xyXG5cclxuICBjb25zdCByb2xsID0gKCkgPT4ge1xyXG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIG51bWJlclxyXG4gICAgY29uc3QgcGxheWVyUmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgICBjb25zdCBjb21wdXRlclJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG5cclxuICAgIC8vIExvZ2ljIGZvciB0aGlzIGdhbWVcclxuICAgIGlmIChwbGF5ZXJSYW5kb21OdW0gPiBjb21wdXRlclJhbmRvbU51bSkge1xyXG4gICAgICBzZXRSZXN1bHQoYFBsYXllciBtZW5hbmcgZGVuZ2FuICR7cGxheWVyUmFuZG9tTnVtICsgMX0gcG9pbnRzYCk7XHJcbiAgICAgIHNldFNjb3JlcygocHJldlNjb3JlKSA9PiBwcmV2U2NvcmUgKyAxKTtcclxuICAgICAgLy8gdXBkYXRlU2NvcmVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllclJhbmRvbU51bSA8IGNvbXB1dGVyUmFuZG9tTnVtKSB7XHJcbiAgICAgIHNldFJlc3VsdChgQ29tcHV0ZXIgbWVuYW5nIGRlbmdhbiAke2NvbXB1dGVyUmFuZG9tTnVtICsgMX0gcG9pbnRzYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSZXN1bHQoYFNlcmkhIFBsYXllciBkYW4gcGVtYWluIG1lbmRhcGF0a2FuICR7cGxheWVyUmFuZG9tTnVtICsgMX0gcG9pbnRzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyUmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBkaWNlSW1hZ2VzW3BsYXllclJhbmRvbU51bV0pO1xyXG4gICAgY29tcHV0ZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpY2VJbWFnZXNbY29tcHV0ZXJSYW5kb21OdW1dKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbCBQbGF5ZWQgR2FtZXM6XCIsIHBsYXllZEdhbWVzKTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWRpY2UnOiB0cnVlIH0pKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZWRHYW1lcycsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWRpY2UnOiB0cnVlIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdnYW1lbGlzdCcpIC8vIFNwZWNpZnkgdGhlIGRlc2lyZWQgcGF0aCBoZXJlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U2NvcmVzKHNjb3JlcyArIDEpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvdXBkYXRlL3Njb3JlcycsXHJcbiAgICAgICAgeyBpZCwgc2NvcmVzOiBzY29yZXMgKyAxIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpY2VBcmVhfT5cclxuICAgICAgICAgIDxwPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZGljZUltYWdlc1swXX0gcmVmPXtwbGF5ZXJSZWZ9IGFsdD0nRGljZScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+U2NvcmU6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZUFyZWF9PlxyXG4gICAgICAgICAgPHA+Q29tcHV0ZXI8L3A+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZGljZUltYWdlc1swXX0gcmVmPXtjb21wdXRlclJlZn0gYWx0PSdEaWNlJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWNlV3JhcHBlcn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0ncmVzdWx0JyByZWY9e3Jlc3VsdERpY2V9PlxyXG4gICAgICAgIHtyZXN1bHR9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGljZVdyYXBwZXJ9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvbGx9IGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XHJcbiAgICAgICAgUm9sbCB0aGUgZGljZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlcztcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KCl7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9SRVFVRVNUJ1xyXG4vLyAgIH1cclxuLy8gIH07XHJcblxyXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyAodG9rZW4sIGVtYWlsKSB7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgIHR5cGU6ICdMT0dJTl9TVUNDRVNTJyxcclxuLy8gICBwYXlsb2FkOiB7IHRva2VuLCBlbWFpbCB9LFxyXG4vLyB9fTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpbkZhaWx1cmUgKGVycm9yKXtcclxuLy8gICByZXR1cm57XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fRkFJTFVSRScsXHJcbi8vICAgICBwYXlsb2FkOiBlcnJvcixcclxuLy8gICB9ICBcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbWFpbChlbWFpbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNQUlMJyxcclxuICAgIHBheWxvYWQ6IGVtYWlsLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dnZWRJbiA9IChpc0xvZ2dlZEluLCB1c2VyKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfTE9HR0VEX0lOJyxcclxuICBwYXlsb2FkOiB7IGlzTG9nZ2VkSW4sIHVzZXIgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGxheWVkR2FtZXMgPSAocGxheWVkR2FtZXMpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9QTEFZRURfR0FNRVMnLFxyXG4gIHBheWxvYWQ6IHBsYXllZEdhbWVzLFxyXG59KTtcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZXMvZGljZTEuNmMzYzM3ZjdlOTIzNTExYmViYzI2MWRmNTM4MzlkNDMuc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZXMvZGljZTIuNjFiYWI3N2RiMjMxNmJlYmIzOWNhYTVkZjVhNGE1YzAuc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZXMvZGljZTMuNTBlYjAxYzYyM2RlNzI2NzNiMTYyN2RhMTcwZjk2ZjAuc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZXMvZGljZTQuZmQ4NTllN2EyZDI4ZTkzZmMxNzg0ZGQzODI1MzNkZDQuc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZXMvZGljZTUuMWJhMGQyNTg5YzY2MDQ1NGNhOTBmZjJhNzRkNmE1YjYuc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9pbWFnZXMvZGljZTYuNmQ3OGRkMDRhNThjY2U5OTNjNGMxOGRkM2NkYjBkYmMuc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGljZVdyYXBwZXJcIjogXCJnYW1lRGljZV9kaWNlV3JhcHBlcl9fMmFhRW1cIixcblx0XCJkaWNlQXJlYVwiOiBcImdhbWVEaWNlX2RpY2VBcmVhX184SDBuQlwiLFxuXHRcImgyXCI6IFwiZ2FtZURpY2VfaDJfXzJRY3A1XCIsXG5cdFwicFwiOiBcImdhbWVEaWNlX3BfXzNFZjU0XCIsXG5cdFwiYnRuXCI6IFwiZ2FtZURpY2VfYnRuX18zWDI3TVwiLFxuXHRcInJlc2V0XCI6IFwiZ2FtZURpY2VfcmVzZXRfXzN1QUpQXCIsXG5cdFwidWxcIjogXCJnYW1lRGljZV91bF9fMi10ZzBcIixcblx0XCJjZW50ZXJDb250YWluZXJcIjogXCJnYW1lRGljZV9jZW50ZXJDb250YWluZXJfXzJ1aWFRXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkF4aW9zIiwic3R5bGVzIiwiQnV0dG9uIiwic2V0UGxheWVkR2FtZXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZGljZTEiLCJkaWNlMiIsImRpY2UzIiwiZGljZTQiLCJkaWNlNSIsImRpY2U2IiwiRGljZXMiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImRpc3BhdGNoIiwicGxheWVkR2FtZXMiLCJzdGF0ZSIsInJlZHVjZXIiLCJwbGF5ZXJSZWYiLCJjb21wdXRlclJlZiIsInJlc3VsdERpY2UiLCJkaWNlSW1hZ2VzIiwicm9sbCIsInBsYXllclJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbXB1dGVyUmFuZG9tTnVtIiwicHJldlNjb3JlIiwiY3VycmVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsIm5hdmlnYXRlIiwiZXJyb3IiLCJjZW50ZXJDb250YWluZXIiLCJkaWNlV3JhcHBlciIsImRpY2VBcmVhIiwiYnRuIiwic2V0RW1haWwiLCJ0eXBlIiwicGF5bG9hZCIsInNldExvZ2dlZEluIiwiaXNMb2dnZWRJbiIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9