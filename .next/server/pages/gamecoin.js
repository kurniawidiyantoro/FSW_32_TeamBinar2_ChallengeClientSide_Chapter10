(() => {
var exports = {};
exports.id = "pages/gamecoin";
exports.ids = ["pages/gamecoin"];
exports.modules = {

/***/ "./pages/gamecoin/index.js":
/*!*********************************!*\
  !*** ./pages/gamecoin/index.js ***!
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/gameCoin.module.css */ "./styles/gameCoin.module.css");
/* harmony import */ var _styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamecoin\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { useNavigate } from "react-router-dom";






const CoinFlipGame = () => {
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
    0: guessedOption,
    1: setGuessedOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: coinSide,
    1: setCoinSide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: isFlipping,
    1: setIsFlipping
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPopup,
    1: setShowPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: headsImgLoaded,
    1: setHeadsImgLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: tailsImgLoaded,
    1: setTailsImgLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.reducer.playedGames); // const navigate = useNavigate();

  const handleHeadsImgLoad = () => {
    setHeadsImgLoaded(true);
  };

  const handleTailsImgLoad = () => {
    setTailsImgLoaded(true);
  };

  const handleGuess = option => {
    setGuessedOption(option);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isFlipping && coinSide && guessedOption) {
      // Update the score after the animation has ended based on coinSide and guessedOption
      if (coinSide === "heads" && guessedOption === "heads" || coinSide === "tails" && guessedOption === "tails") {
        setScores(prevScore => prevScore + 1); // updateScores();
      }

      setShowPopup(true);
    }
  }, [isFlipping, coinSide, guessedOption]);

  const handleFlipCoin = () => {
    if (!guessedOption) {
      alert("Please make a guess before flipping the coin.");
      return;
    }

    if (isFlipping) return;
    setIsFlipping(true); // Calculate the new coin side based on Math.random()

    const newCoinSide = Math.random() < 0.5 ? "heads" : "tails";
    setCoinSide(newCoinSide);
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamecoin': true
    })));
    localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamecoin': true
    })));
    console.log("Played Games:", playedGames);
  };

  const handleBackClick = () => {
    window.location.replace('gamelist');
  };

  const handleGuessAgain = () => {
    setGuessedOption(null);
    setCoinSide(null);
    setShowPopup(false);
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
        window.location.replace('login');
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: `${(_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().coin)} ${isFlipping ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().flipping) : ""}`,
        onAnimationEnd: () => setIsFlipping(false),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `${(_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().heads)} ${coinSide === "heads" && headsImgLoaded ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().show) : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: '/images/coin.jpg',
            alt: "Heads",
            onLoad: handleHeadsImgLoad
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `${(_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().tails)} ${coinSide === "tails" && tailsImgLoaded ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().show) : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: '/images/coin2.jpg',
            alt: "Tails",
            onLoad: handleTailsImgLoad
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Player: ", username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Scores: ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttons),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().guessButton),
          onClick: () => handleGuess("heads"),
          disabled: isFlipping || coinSide,
          children: "Heads"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().guessButton),
          onClick: () => handleGuess("tails"),
          disabled: isFlipping || coinSide,
          children: "Tails"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: handleFlipCoin,
          disabled: !guessedOption || isFlipping,
          children: "Flip Coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined), showPopup && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "result-popup",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Kamu menebak ", guessedOption, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Hasilnya adalah ", coinSide]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Scoremu : ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: handleGuessAgain,
          children: "Tebak lagi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 4
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinFlipGame);

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

/***/ "./styles/gameCoin.module.css":
/*!************************************!*\
  !*** ./styles/gameCoin.module.css ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"body": "gameCoin_body__1JsR5",
	"container": "gameCoin_container__pMpcS",
	"stats": "gameCoin_stats__kCQFK",
	"coin": "gameCoin_coin__348FD",
	"heads": "gameCoin_heads__3MsS4",
	"tails": "gameCoin_tails__2enI-",
	"buttons": "gameCoin_buttons__30h4G",
	"button": "gameCoin_button__jViyH",
	"flip-button": "gameCoin_flip-button__1jWsA",
	"reset-button": "gameCoin_reset-button__348Ke",
	"guessButton": "gameCoin_guessButton__3RuKS",
	"guess-button": "gameCoin_guess-button__3TDvp",
	"flipping": "gameCoin_flipping__3nPos",
	"flip-heads": "gameCoin_flip-heads__3ZsbC",
	"flip-tails": "gameCoin_flip-tails__3Zq04",
	"spin-tails": "gameCoin_spin-tails__SJWNt",
	"spin-heads": "gameCoin_spin-heads__1gz8l"
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
var __webpack_exports__ = (__webpack_exec__("./pages/gamecoin/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZ2FtZWNvaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUyxZQUFZLEdBQUcsTUFBTTtBQUN6QixRQUFNO0FBQUEsT0FBQ0MsRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY1YsK0NBQVEsQ0FBQyxFQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JkLCtDQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDZSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DaEIsK0NBQVEsQ0FBQyxJQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQixRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmxCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDbUIsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCdEIsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDeEIsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUN5QixjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDMUIsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTTJCLFFBQVEsR0FBR3JCLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTXNCLFdBQVcsR0FBR3JCLHdEQUFXLENBQUNzQixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUF4QixDQUEvQixDQVh5QixDQVl6Qjs7QUFFQSxRQUFNRyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CUCxJQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNUSxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CTixJQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNTyxXQUFXLEdBQUlDLE1BQUQsSUFBWTtBQUM5QmxCLElBQUFBLGdCQUFnQixDQUFDa0IsTUFBRCxDQUFoQjtBQUNELEdBRkQ7O0FBSUFqQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNrQixVQUFELElBQWVGLFFBQWYsSUFBMkJGLGFBQS9CLEVBQThDO0FBQzVDO0FBQ0EsVUFBS0UsUUFBUSxLQUFLLE9BQWIsSUFBd0JGLGFBQWEsS0FBSyxPQUEzQyxJQUF3REUsUUFBUSxLQUFLLE9BQWIsSUFBd0JGLGFBQWEsS0FBSyxPQUF0RyxFQUFnSDtBQUM5R0QsUUFBQUEsU0FBUyxDQUFFcUIsU0FBRCxJQUFlQSxTQUFTLEdBQUcsQ0FBNUIsQ0FBVCxDQUQ4RyxDQUU5RztBQUNEOztBQUVEYixNQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRixHQVZRLEVBVU4sQ0FBQ0gsVUFBRCxFQUFhRixRQUFiLEVBQXVCRixhQUF2QixDQVZNLENBQVQ7O0FBWUEsUUFBTXFCLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQUksQ0FBQ3JCLGFBQUwsRUFBb0I7QUFDbEJzQixNQUFBQSxLQUFLLENBQUMsK0NBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSWxCLFVBQUosRUFBZ0I7QUFFaEJDLElBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWIsQ0FSMkIsQ0FVM0I7O0FBQ0EsVUFBTWtCLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLE9BQXRCLEdBQWdDLE9BQXBEO0FBQ0F0QixJQUFBQSxXQUFXLENBQUNvQixXQUFELENBQVg7QUFDQVgsSUFBQUEsUUFBUSxDQUFDdEIsNkRBQWMsaUNBQU11QixXQUFOO0FBQW1CLG1CQUFhO0FBQWhDLE9BQWYsQ0FBUjtBQUNBYSxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NDLElBQUksQ0FBQ0MsU0FBTCxpQ0FBb0JoQixXQUFwQjtBQUFpQyxtQkFBYTtBQUE5QyxPQUFwQztBQUNBaUIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QmxCLFdBQTdCO0FBQ0QsR0FoQkQ7O0FBa0JBLFFBQU1tQixlQUFlLEdBQUcsTUFBTTtBQUM1QkMsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixVQUF4QjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3Qm5DLElBQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBSSxJQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsR0FKRDs7QUFNQSxRQUFNOEIsWUFBWSxHQUFHLFlBQVk7QUFDL0J0QyxJQUFBQSxTQUFTLENBQUNELE1BQU0sR0FBRyxDQUFWLENBQVQ7QUFDQSxVQUFNd0MsS0FBSyxHQUFHWixZQUFZLENBQUNhLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNckQsaURBQUEsQ0FBVyw4Q0FBWCxFQUNuQjtBQUFFTyxNQUFBQSxFQUFGO0FBQU1JLE1BQUFBLE1BQU0sRUFBRUEsTUFBTSxHQUFHO0FBQXZCLEtBRG1CLEVBRW5CO0FBQ0U0QyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsYUFBYSxFQUFHLFNBQVFMLEtBQU07QUFEdkI7QUFEWCxLQUZtQixDQUF2QjtBQVFBUixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsUUFBUSxDQUFDSSxJQUFULENBQWNDLE1BQTFCO0FBQ0QsR0FaRDs7QUFjQSxRQUFNQyxVQUFVLEdBQUcsWUFBWTtBQUM3QixVQUFNUixLQUFLLEdBQUdaLFlBQVksQ0FBQ2EsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsVUFBTVEsS0FBSyxHQUFHckIsWUFBWSxDQUFDYSxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQVQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQVIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixLQUFaOztBQUNBLFFBQUk7QUFDRixVQUFJLENBQUNULEtBQUwsRUFBWTtBQUNWUixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRSxRQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTUssUUFBUSxHQUFHLE1BQU1yRCxpREFBQSxDQUFXLG9DQUFYLEVBQ3JCO0FBQUU0RCxVQUFBQTtBQUFGLFNBRHFCLEVBRXJCO0FBQ0VMLFVBQUFBLE9BQU8sRUFBRTtBQUNQQyxZQUFBQSxhQUFhLEVBQUcsU0FBUUwsS0FBTTtBQUR2QjtBQURYLFNBRnFCLENBQXZCO0FBUUFSLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxRQUFRLENBQUNJLElBQVQsQ0FBY0EsSUFBMUI7QUFDQWpELFFBQUFBLEtBQUssQ0FBQzZDLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUFkLENBQW1CbEQsRUFBcEIsQ0FBTDtBQUNBRyxRQUFBQSxXQUFXLENBQUMyQyxRQUFRLENBQUNJLElBQVQsQ0FBY0EsSUFBZCxDQUFtQmhELFFBQXBCLENBQVg7QUFDQUcsUUFBQUEsU0FBUyxDQUFDeUMsUUFBUSxDQUFDSSxJQUFULENBQWNBLElBQWQsQ0FBbUI5QyxNQUFwQixDQUFUO0FBQ0Q7QUFDRixLQWxCRCxDQWtCRSxPQUFPa0QsS0FBUCxFQUFjO0FBQ2RsQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBRSxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0Q7QUFDRixHQTNCRDs7QUE2QkFqRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDRELElBQUFBLFVBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNHO0FBQUEsNkJBQ0UsOERBQUMsOENBQUQ7QUFBUSxhQUFLLEVBQUMsU0FBZDtBQUF3QixlQUFPLEVBQUVkLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxlQU1HO0FBQUssZUFBUyxFQUFFM0MsOEVBQWhCO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFHLEdBQUVBLHlFQUFZLElBQUdlLFVBQVUsR0FBR2YsNkVBQUgsR0FBcUIsRUFBRyxFQURqRTtBQUVFLHNCQUFjLEVBQUUsTUFBTWdCLGFBQWEsQ0FBQyxLQUFELENBRnJDO0FBQUEsZ0NBSUk7QUFBSyxtQkFBUyxFQUFHLEdBQUVoQiwwRUFBYSxJQUFHYSxRQUFRLEtBQUssT0FBYixJQUF3Qk0sY0FBeEIsR0FBeUNuQix5RUFBekMsR0FBdUQsRUFBRyxFQUE3RjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFLGtCQUFWO0FBQThCLGVBQUcsRUFBQyxPQUFsQztBQUEwQyxrQkFBTSxFQUFFMkI7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFPSTtBQUFLLG1CQUFTLEVBQUcsR0FBRTNCLDBFQUFhLElBQUdhLFFBQVEsS0FBSyxPQUFiLElBQXdCUSxjQUF4QixHQUF5Q3JCLHlFQUF6QyxHQUF1RCxFQUFHLEVBQTdGO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUUsbUJBQVY7QUFBK0IsZUFBRyxFQUFDLE9BQW5DO0FBQTJDLGtCQUFNLEVBQUU0QjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFZRTtBQUFLLGlCQUFTLEVBQUU1QiwwRUFBaEI7QUFBQSxnQ0FDRTtBQUFBLGlDQUFZTyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsaUNBQVlFLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQWdCRTtBQUFLLGlCQUFTLEVBQUVULDRFQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDhDQUFEO0FBQ0UsbUJBQVMsRUFBRUEsZ0ZBRGI7QUFFRSxpQkFBTyxFQUFFLE1BQU02QixXQUFXLENBQUMsT0FBRCxDQUY1QjtBQUdFLGtCQUFRLEVBQUVkLFVBQVUsSUFBSUYsUUFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRSw4REFBQyw4Q0FBRDtBQUNFLG1CQUFTLEVBQUViLGdGQURiO0FBRUUsaUJBQU8sRUFBRSxNQUFNNkIsV0FBVyxDQUFDLE9BQUQsQ0FGNUI7QUFHRSxrQkFBUSxFQUFFZCxVQUFVLElBQUlGLFFBSDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBZUUsOERBQUMsOENBQUQ7QUFBUSxpQkFBTyxFQUFFbUIsY0FBakI7QUFBaUMsa0JBQVEsRUFBRSxDQUFDckIsYUFBRCxJQUFrQkksVUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRixFQW1DR0UsU0FBUyxpQkFDUjtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNFO0FBQUEsc0NBQWlCTixhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHlDQUFvQkUsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBQSxtQ0FBY0osTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLEVBQUVzQyxnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFzREQsQ0F2S0Q7O0FBeUtBLGlFQUFlM0MsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNpRSxRQUFULENBQWtCWCxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xZLElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRWI7QUFGSixHQUFQO0FBSUQ7QUFFTSxNQUFNYyxhQUFhLEdBQUlDLFVBQUQsS0FBaUI7QUFDNUNILEVBQUFBLElBQUksRUFBRSxpQkFEc0M7QUFFNUNDLEVBQUFBLE9BQU8sRUFBRUU7QUFGbUMsQ0FBakIsQ0FBdEI7QUFLQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiLE1BQXVCO0FBQ2hETixFQUFBQSxJQUFJLEVBQUUsZUFEMEM7QUFFaERDLEVBQUFBLE9BQU8sRUFBRTtBQUFFSSxJQUFBQSxVQUFGO0FBQWNDLElBQUFBO0FBQWQ7QUFGdUMsQ0FBdkIsQ0FBcEI7QUFLQSxNQUFNM0UsY0FBYyxHQUFJdUIsV0FBRCxLQUFrQjtBQUM5QzhDLEVBQUFBLElBQUksRUFBRSxrQkFEd0M7QUFFOUNDLEVBQUFBLE9BQU8sRUFBRS9DO0FBRnFDLENBQWxCLENBQXZCO0FBS0EsTUFBTXFELG1CQUFtQixHQUFJQyxTQUFELElBQWUsTUFBT3ZELFFBQVAsSUFBb0I7QUFDcEUsTUFBSTtBQUNGLFVBQU0wQixLQUFLLEdBQUdaLFlBQVksQ0FBQ2EsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsVUFBTTZCLFFBQVEsR0FBRyxTQUFqQjs7QUFFQSxRQUFJLENBQUM5QixLQUFMLEVBQVk7QUFDVlIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQUUsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixRQUF4QjtBQUNBLGFBSFUsQ0FHRjtBQUNUOztBQUVELFVBQU1LLFFBQVEsR0FBRyxNQUFNckQsaURBQUEsQ0FDckIsNENBRHFCLEVBRXJCO0FBQUU0RCxNQUFBQSxLQUFLLEVBQUVvQixTQUFUO0FBQW9CQyxNQUFBQTtBQUFwQixLQUZxQixFQUdyQjtBQUNFMUIsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLGFBQWEsRUFBRyxTQUFRTCxLQUFNO0FBRHZCO0FBRFgsS0FIcUIsQ0FBdkI7QUFVQSxVQUFNK0IsY0FBYyxHQUFHN0IsUUFBUSxDQUFDSSxJQUFULENBQWNBLElBQWQsQ0FBbUIwQixVQUExQztBQUNBMUQsSUFBQUEsUUFBUSxDQUFDaUQsYUFBYSxDQUFDUSxjQUFELENBQWQsQ0FBUixDQXJCRSxDQXFCdUM7QUFDMUMsR0F0QkQsQ0FzQkUsT0FBT3JCLEtBQVAsRUFBYztBQUNkbEIsSUFBQUEsT0FBTyxDQUFDa0IsS0FBUixDQUFjLGtDQUFkLEVBQWtEQSxLQUFsRDtBQUNEO0FBQ0YsQ0ExQk0sRUE0QlA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2dhbWVjb2luL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vc3R5bGVzL2dhbWVDb2luLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVDb2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IENvaW5GbGlwR2FtZSA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2d1ZXNzZWRPcHRpb24sIHNldEd1ZXNzZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvaW5TaWRlLCBzZXRDb2luU2lkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNGbGlwcGluZywgc2V0SXNGbGlwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZHNJbWdMb2FkZWQsIHNldEhlYWRzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFpbHNJbWdMb2FkZWQsIHNldFRhaWxzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhlYWRzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldEhlYWRzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhaWxzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldFRhaWxzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1ZXNzID0gKG9wdGlvbikgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihvcHRpb24pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmxpcHBpbmcgJiYgY29pblNpZGUgJiYgZ3Vlc3NlZE9wdGlvbikge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIHNjb3JlIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGVuZGVkIGJhc2VkIG9uIGNvaW5TaWRlIGFuZCBndWVzc2VkT3B0aW9uXHJcbiAgICAgIGlmICgoY29pblNpZGUgPT09IFwiaGVhZHNcIiAmJiBndWVzc2VkT3B0aW9uID09PSBcImhlYWRzXCIpIHx8IChjb2luU2lkZSA9PT0gXCJ0YWlsc1wiICYmIGd1ZXNzZWRPcHRpb24gPT09IFwidGFpbHNcIikpIHtcclxuICAgICAgICBzZXRTY29yZXMoKHByZXZTY29yZSkgPT4gcHJldlNjb3JlICsgMSk7XHJcbiAgICAgICAgLy8gdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFNob3dQb3B1cCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbaXNGbGlwcGluZywgY29pblNpZGUsIGd1ZXNzZWRPcHRpb25dKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmxpcENvaW4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWd1ZXNzZWRPcHRpb24pIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgbWFrZSBhIGd1ZXNzIGJlZm9yZSBmbGlwcGluZyB0aGUgY29pbi5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGbGlwcGluZykgcmV0dXJuO1xyXG5cclxuICAgIHNldElzRmxpcHBpbmcodHJ1ZSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgY29pbiBzaWRlIGJhc2VkIG9uIE1hdGgucmFuZG9tKClcclxuICAgIGNvbnN0IG5ld0NvaW5TaWRlID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaGVhZHNcIiA6IFwidGFpbHNcIjtcclxuICAgIHNldENvaW5TaWRlKG5ld0NvaW5TaWRlKTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWNvaW4nOiB0cnVlIH0pKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZWRHYW1lcycsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZWNvaW4nOiB0cnVlIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnZ2FtZWxpc3QnKSBcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWVzc0FnYWluID0gKCkgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihudWxsKTtcclxuICAgIHNldENvaW5TaWRlKG51bGwpO1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzICsgMSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS91cGRhdGUvc2NvcmVzJyxcclxuICAgICAgICB7IGlkLCBzY29yZXM6IHNjb3JlcyArIDEgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvaW59ICR7aXNGbGlwcGluZyA/IHN0eWxlcy5mbGlwcGluZyA6IFwiXCJ9YH1cclxuICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBzZXRJc0ZsaXBwaW5nKGZhbHNlKX1cclxuICAgICAgICAgID4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRzfSAke2NvaW5TaWRlID09PSBcImhlYWRzXCIgJiYgaGVhZHNJbWdMb2FkZWQgPyBzdHlsZXMuc2hvdyA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2NvaW4uanBnJ30gYWx0PVwiSGVhZHNcIiBvbkxvYWQ9e2hhbmRsZUhlYWRzSW1nTG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFpbHN9ICR7Y29pblNpZGUgPT09IFwidGFpbHNcIiAmJiB0YWlsc0ltZ0xvYWRlZCA/IHN0eWxlcy5zaG93IDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvY29pbjIuanBnJ30gYWx0PVwiVGFpbHNcIiBvbkxvYWQ9e2hhbmRsZVRhaWxzSW1nTG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+XHJcbiAgICAgICAgICA8cD5QbGF5ZXI6IHt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8cD5TY29yZXM6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmd1ZXNzQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHdWVzcyhcImhlYWRzXCIpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNGbGlwcGluZyB8fCBjb2luU2lkZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSGVhZHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ndWVzc0J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR3Vlc3MoXCJ0YWlsc1wiKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmxpcHBpbmcgfHwgY29pblNpZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRhaWxzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRmxpcENvaW59IGRpc2FibGVkPXshZ3Vlc3NlZE9wdGlvbiB8fCBpc0ZsaXBwaW5nfT5cclxuICAgICAgICAgICAgRmxpcCBDb2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxwPkthbXUgbWVuZWJhayB7Z3Vlc3NlZE9wdGlvbn0hPC9wPlxyXG4gICAgICAgICAgICA8cD5IYXNpbG55YSBhZGFsYWgge2NvaW5TaWRlfTwvcD5cclxuICAgICAgICAgICAgPHA+U2NvcmVtdSA6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUd1ZXNzQWdhaW59PlRlYmFrIGxhZ2k8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2luRmxpcEdhbWU7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxTY29yZSA9ICh0b3RhbFNjb3JlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfVE9UQUxfU0NPUkUnLFxyXG4gIHBheWxvYWQ6IHRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclRvdGFsU2NvcmUgPSAodXNlckVtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnO1xyXG5cclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemVkIScpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIHJldHVybjsgLy8gUmV0dXJuIGVhcmx5IGlmIG5vdCBhdXRob3JpemVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyxcclxuICAgICAgeyBlbWFpbDogdXNlckVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVzZXJUb3RhbFNjb3JlID0gcmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmU7XHJcbiAgICBkaXNwYXRjaChzZXRUb3RhbFNjb3JlKHVzZXJUb3RhbFNjb3JlKSk7IC8vIERpc3BhdGNoIHRoZSB0b3RhbCBzY29yZSB0byBSZWR1eCBzdG9yZVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHRvdGFsIHNjb3JlOicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcImdhbWVDb2luX2JvZHlfXzFKc1I1XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiZ2FtZUNvaW5fY29udGFpbmVyX19wTXBjU1wiLFxuXHRcInN0YXRzXCI6IFwiZ2FtZUNvaW5fc3RhdHNfX2tDUUZLXCIsXG5cdFwiY29pblwiOiBcImdhbWVDb2luX2NvaW5fXzM0OEZEXCIsXG5cdFwiaGVhZHNcIjogXCJnYW1lQ29pbl9oZWFkc19fM01zUzRcIixcblx0XCJ0YWlsc1wiOiBcImdhbWVDb2luX3RhaWxzX18yZW5JLVwiLFxuXHRcImJ1dHRvbnNcIjogXCJnYW1lQ29pbl9idXR0b25zX18zMGg0R1wiLFxuXHRcImJ1dHRvblwiOiBcImdhbWVDb2luX2J1dHRvbl9falZpeUhcIixcblx0XCJmbGlwLWJ1dHRvblwiOiBcImdhbWVDb2luX2ZsaXAtYnV0dG9uX18xaldzQVwiLFxuXHRcInJlc2V0LWJ1dHRvblwiOiBcImdhbWVDb2luX3Jlc2V0LWJ1dHRvbl9fMzQ4S2VcIixcblx0XCJndWVzc0J1dHRvblwiOiBcImdhbWVDb2luX2d1ZXNzQnV0dG9uX18zUnVLU1wiLFxuXHRcImd1ZXNzLWJ1dHRvblwiOiBcImdhbWVDb2luX2d1ZXNzLWJ1dHRvbl9fM1REdnBcIixcblx0XCJmbGlwcGluZ1wiOiBcImdhbWVDb2luX2ZsaXBwaW5nX18zblBvc1wiLFxuXHRcImZsaXAtaGVhZHNcIjogXCJnYW1lQ29pbl9mbGlwLWhlYWRzX18zWnNiQ1wiLFxuXHRcImZsaXAtdGFpbHNcIjogXCJnYW1lQ29pbl9mbGlwLXRhaWxzX18zWnEwNFwiLFxuXHRcInNwaW4tdGFpbHNcIjogXCJnYW1lQ29pbl9zcGluLXRhaWxzX19TSldOdFwiLFxuXHRcInNwaW4taGVhZHNcIjogXCJnYW1lQ29pbl9zcGluLWhlYWRzX18xZ3o4bFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsInNldFBsYXllZEdhbWVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNvaW5GbGlwR2FtZSIsImlkIiwic2V0SWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2NvcmVzIiwic2V0U2NvcmVzIiwiZ3Vlc3NlZE9wdGlvbiIsInNldEd1ZXNzZWRPcHRpb24iLCJjb2luU2lkZSIsInNldENvaW5TaWRlIiwiaXNGbGlwcGluZyIsInNldElzRmxpcHBpbmciLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJoZWFkc0ltZ0xvYWRlZCIsInNldEhlYWRzSW1nTG9hZGVkIiwidGFpbHNJbWdMb2FkZWQiLCJzZXRUYWlsc0ltZ0xvYWRlZCIsImRpc3BhdGNoIiwicGxheWVkR2FtZXMiLCJzdGF0ZSIsInJlZHVjZXIiLCJoYW5kbGVIZWFkc0ltZ0xvYWQiLCJoYW5kbGVUYWlsc0ltZ0xvYWQiLCJoYW5kbGVHdWVzcyIsIm9wdGlvbiIsInByZXZTY29yZSIsImhhbmRsZUZsaXBDb2luIiwiYWxlcnQiLCJuZXdDb2luU2lkZSIsIk1hdGgiLCJyYW5kb20iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJoYW5kbGVHdWVzc0FnYWluIiwidXBkYXRlU2NvcmVzIiwidG9rZW4iLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwic3RhdHVzIiwiY2hlY2tUb2tlbiIsImVtYWlsIiwiZXJyb3IiLCJjb250YWluZXIiLCJjb2luIiwiZmxpcHBpbmciLCJoZWFkcyIsInNob3ciLCJ0YWlscyIsInN0YXRzIiwiYnV0dG9ucyIsImd1ZXNzQnV0dG9uIiwic2V0RW1haWwiLCJ0eXBlIiwicGF5bG9hZCIsInNldFRvdGFsU2NvcmUiLCJ0b3RhbFNjb3JlIiwic2V0TG9nZ2VkSW4iLCJpc0xvZ2dlZEluIiwidXNlciIsImZldGNoVXNlclRvdGFsU2NvcmUiLCJ1c2VyRW1haWwiLCJnYW1lbmFtZSIsInVzZXJUb3RhbFNjb3JlIiwidG90YWxzY29yZSJdLCJzb3VyY2VSb290IjoiIn0=