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

        dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
          '/gamecoin': true
        })));
        console.log("Played Games:", playedGames);
        localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
          '/gamecoin': true
        })));
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
        lineNumber: 126,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
            lineNumber: 136,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `${(_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().tails)} ${coinSide === "tails" && tailsImgLoaded ? (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().show) : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: '/images/coin2.jpg',
            alt: "Tails",
            onLoad: handleTailsImgLoad
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().stats),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Player: ", username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Scores: ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
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
          lineNumber: 147,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: (_styles_gameCoin_module_css__WEBPACK_IMPORTED_MODULE_6___default().guessButton),
          onClick: () => handleGuess("tails"),
          disabled: isFlipping || coinSide,
          children: "Tails"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: handleFlipCoin,
          disabled: !guessedOption || isFlipping,
          children: "Flip Coin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined), showPopup && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "result-popup",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Kamu menebak ", guessedOption, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Hasilnya adalah ", coinSide]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Scoremu : ", scores]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: handleGuessAgain,
          children: "Tebak lagi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZ2FtZWNvaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUyxZQUFZLEdBQUcsTUFBTTtBQUN6QixRQUFNO0FBQUEsT0FBQ0MsRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY1YsK0NBQVEsQ0FBQyxFQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JkLCtDQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDZSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DaEIsK0NBQVEsQ0FBQyxJQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQixRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmxCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDbUIsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCdEIsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDeEIsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUN5QixjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDMUIsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTTJCLFFBQVEsR0FBR3JCLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTXNCLFdBQVcsR0FBR3JCLHdEQUFXLENBQUNzQixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixXQUF4QixDQUEvQixDQVh5QixDQVl6Qjs7QUFFQSxRQUFNRyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CUCxJQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNUSxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CTixJQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNTyxXQUFXLEdBQUlDLE1BQUQsSUFBWTtBQUM5QmxCLElBQUFBLGdCQUFnQixDQUFDa0IsTUFBRCxDQUFoQjtBQUNELEdBRkQ7O0FBSUFqQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNrQixVQUFELElBQWVGLFFBQWYsSUFBMkJGLGFBQS9CLEVBQThDO0FBQzVDO0FBQ0EsVUFBS0UsUUFBUSxLQUFLLE9BQWIsSUFBd0JGLGFBQWEsS0FBSyxPQUEzQyxJQUF3REUsUUFBUSxLQUFLLE9BQWIsSUFBd0JGLGFBQWEsS0FBSyxPQUF0RyxFQUFnSDtBQUM5R0QsUUFBQUEsU0FBUyxDQUFFcUIsU0FBRCxJQUFlQSxTQUFTLEdBQUcsQ0FBNUIsQ0FBVCxDQUQ4RyxDQUU5Rzs7QUFDQVIsUUFBQUEsUUFBUSxDQUFDdEIsNkRBQWMsaUNBQU11QixXQUFOO0FBQW1CLHVCQUFhO0FBQWhDLFdBQWYsQ0FBUjtBQUNBUSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCVCxXQUE3QjtBQUNBVSxRQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NDLElBQUksQ0FBQ0MsU0FBTCxpQ0FBb0JiLFdBQXBCO0FBQWlDLHVCQUFhO0FBQTlDLFdBQXBDO0FBQ0Q7O0FBRUROLE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGLEdBYlEsRUFhTixDQUFDSCxVQUFELEVBQWFGLFFBQWIsRUFBdUJGLGFBQXZCLENBYk0sQ0FBVDs7QUFlQSxRQUFNMkIsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBSSxDQUFDM0IsYUFBTCxFQUFvQjtBQUNsQjRCLE1BQUFBLEtBQUssQ0FBQywrQ0FBRCxDQUFMO0FBQ0E7QUFDRDs7QUFFRCxRQUFJeEIsVUFBSixFQUFnQjtBQUVoQkMsSUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYixDQVIyQixDQVUzQjs7QUFDQSxVQUFNd0IsV0FBVyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsT0FBdEIsR0FBZ0MsT0FBcEQ7QUFDQTVCLElBQUFBLFdBQVcsQ0FBQzBCLFdBQUQsQ0FBWDtBQUNBakIsSUFBQUEsUUFBUSxDQUFDdEIsNkRBQWMsaUNBQU11QixXQUFOO0FBQW1CLG1CQUFhO0FBQWhDLE9BQWYsQ0FBUjtBQUNELEdBZEQ7O0FBZ0JBLFFBQU1tQixlQUFlLEdBQUcsTUFBTTtBQUM1QkMsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixVQUF4QjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3Qm5DLElBQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBSSxJQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsR0FKRDs7QUFNQSxRQUFNOEIsWUFBWSxHQUFHLFlBQVk7QUFDL0J0QyxJQUFBQSxTQUFTLENBQUNELE1BQU0sR0FBRyxDQUFWLENBQVQ7QUFDQSxVQUFNd0MsS0FBSyxHQUFHZixZQUFZLENBQUNnQixPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTXJELGlEQUFBLENBQVcsOENBQVgsRUFDbkI7QUFBRU8sTUFBQUEsRUFBRjtBQUFNSSxNQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUF2QixLQURtQixFQUVuQjtBQUNFNEMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLGFBQWEsRUFBRyxTQUFRTCxLQUFNO0FBRHZCO0FBRFgsS0FGbUIsQ0FBdkI7QUFRQWpCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsUUFBUSxDQUFDSSxJQUFULENBQWNDLE1BQTFCO0FBQ0QsR0FaRDs7QUFjQSxRQUFNQyxVQUFVLEdBQUcsWUFBWTtBQUM3QixVQUFNUixLQUFLLEdBQUdmLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFVBQU1RLEtBQUssR0FBR3hCLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBbEIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixLQUFaO0FBQ0FqQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXlCLEtBQVo7O0FBQ0EsUUFBSTtBQUNGLFVBQUksQ0FBQ1QsS0FBTCxFQUFZO0FBQ1ZqQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBVyxRQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBTUssUUFBUSxHQUFHLE1BQU1yRCxpREFBQSxDQUFXLG9DQUFYLEVBQ3JCO0FBQUU0RCxVQUFBQTtBQUFGLFNBRHFCLEVBRXJCO0FBQ0VMLFVBQUFBLE9BQU8sRUFBRTtBQUNQQyxZQUFBQSxhQUFhLEVBQUcsU0FBUUwsS0FBTTtBQUR2QjtBQURYLFNBRnFCLENBQXZCO0FBUUFqQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUExQjtBQUNBakQsUUFBQUEsS0FBSyxDQUFDNkMsUUFBUSxDQUFDSSxJQUFULENBQWNBLElBQWQsQ0FBbUJsRCxFQUFwQixDQUFMO0FBQ0FHLFFBQUFBLFdBQVcsQ0FBQzJDLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUFkLENBQW1CaEQsUUFBcEIsQ0FBWDtBQUNBRyxRQUFBQSxTQUFTLENBQUN5QyxRQUFRLENBQUNJLElBQVQsQ0FBY0EsSUFBZCxDQUFtQjlDLE1BQXBCLENBQVQ7QUFDRDtBQUNGLEtBbEJELENBa0JFLE9BQU9rRCxLQUFQLEVBQWM7QUFDZDNCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FXLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsT0FBeEI7QUFDRDtBQUNGLEdBM0JEOztBQTZCQWpELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkNEQsSUFBQUEsVUFBVTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0c7QUFBQSw2QkFDRSw4REFBQyw4Q0FBRDtBQUFRLGFBQUssRUFBQyxTQUFkO0FBQXdCLGVBQU8sRUFBRWQsZUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILGVBTUc7QUFBSyxlQUFTLEVBQUUzQyw4RUFBaEI7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUcsR0FBRUEseUVBQVksSUFBR2UsVUFBVSxHQUFHZiw2RUFBSCxHQUFxQixFQUFHLEVBRGpFO0FBRUUsc0JBQWMsRUFBRSxNQUFNZ0IsYUFBYSxDQUFDLEtBQUQsQ0FGckM7QUFBQSxnQ0FJSTtBQUFLLG1CQUFTLEVBQUcsR0FBRWhCLDBFQUFhLElBQUdhLFFBQVEsS0FBSyxPQUFiLElBQXdCTSxjQUF4QixHQUF5Q25CLHlFQUF6QyxHQUF1RCxFQUFHLEVBQTdGO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUUsa0JBQVY7QUFBOEIsZUFBRyxFQUFDLE9BQWxDO0FBQTBDLGtCQUFNLEVBQUUyQjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQU9JO0FBQUssbUJBQVMsRUFBRyxHQUFFM0IsMEVBQWEsSUFBR2EsUUFBUSxLQUFLLE9BQWIsSUFBd0JRLGNBQXhCLEdBQXlDckIseUVBQXpDLEdBQXVELEVBQUcsRUFBN0Y7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRSxtQkFBVjtBQUErQixlQUFHLEVBQUMsT0FBbkM7QUFBMkMsa0JBQU0sRUFBRTRCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVlFO0FBQUssaUJBQVMsRUFBRTVCLDBFQUFoQjtBQUFBLGdDQUNFO0FBQUEsaUNBQVlPLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxpQ0FBWUUsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBZ0JFO0FBQUssaUJBQVMsRUFBRVQsNEVBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsOENBQUQ7QUFDRSxtQkFBUyxFQUFFQSxnRkFEYjtBQUVFLGlCQUFPLEVBQUUsTUFBTTZCLFdBQVcsQ0FBQyxPQUFELENBRjVCO0FBR0Usa0JBQVEsRUFBRWQsVUFBVSxJQUFJRixRQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFLDhEQUFDLDhDQUFEO0FBQ0UsbUJBQVMsRUFBRWIsZ0ZBRGI7QUFFRSxpQkFBTyxFQUFFLE1BQU02QixXQUFXLENBQUMsT0FBRCxDQUY1QjtBQUdFLGtCQUFRLEVBQUVkLFVBQVUsSUFBSUYsUUFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFlRSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLEVBQUV5QixjQUFqQjtBQUFpQyxrQkFBUSxFQUFFLENBQUMzQixhQUFELElBQWtCSSxVQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGLEVBbUNHRSxTQUFTLGlCQUNSO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFBQSxzQ0FBaUJOLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEseUNBQW9CRSxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLG1DQUFjSixNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFLDhEQUFDLDhDQUFEO0FBQVEsaUJBQU8sRUFBRXNDLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQXNERCxDQXhLRDs7QUEwS0EsaUVBQWUzQyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNpRSxRQUFULENBQWtCWCxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xZLElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRWI7QUFGSixHQUFQO0FBSUQ7QUFFTSxNQUFNYyxXQUFXLEdBQUcsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiLE1BQXVCO0FBQ2hESixFQUFBQSxJQUFJLEVBQUUsZUFEMEM7QUFFaERDLEVBQUFBLE9BQU8sRUFBRTtBQUFFRSxJQUFBQSxVQUFGO0FBQWNDLElBQUFBO0FBQWQ7QUFGdUMsQ0FBdkIsQ0FBcEI7QUFLQSxNQUFNekUsY0FBYyxHQUFJdUIsV0FBRCxLQUFrQjtBQUM5QzhDLEVBQUFBLElBQUksRUFBRSxrQkFEd0M7QUFFOUNDLEVBQUFBLE9BQU8sRUFBRS9DO0FBRnFDLENBQWxCLENBQXZCLEVBTVA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2dhbWVjb2luL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vc3R5bGVzL2dhbWVDb2luLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWVDb2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcyAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IENvaW5GbGlwR2FtZSA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2d1ZXNzZWRPcHRpb24sIHNldEd1ZXNzZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvaW5TaWRlLCBzZXRDb2luU2lkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNGbGlwcGluZywgc2V0SXNGbGlwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZHNJbWdMb2FkZWQsIHNldEhlYWRzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGFpbHNJbWdMb2FkZWQsIHNldFRhaWxzSW1nTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUhlYWRzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldEhlYWRzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhaWxzSW1nTG9hZCA9ICgpID0+IHtcclxuICAgIHNldFRhaWxzSW1nTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUd1ZXNzID0gKG9wdGlvbikgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihvcHRpb24pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmxpcHBpbmcgJiYgY29pblNpZGUgJiYgZ3Vlc3NlZE9wdGlvbikge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIHNjb3JlIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGVuZGVkIGJhc2VkIG9uIGNvaW5TaWRlIGFuZCBndWVzc2VkT3B0aW9uXHJcbiAgICAgIGlmICgoY29pblNpZGUgPT09IFwiaGVhZHNcIiAmJiBndWVzc2VkT3B0aW9uID09PSBcImhlYWRzXCIpIHx8IChjb2luU2lkZSA9PT0gXCJ0YWlsc1wiICYmIGd1ZXNzZWRPcHRpb24gPT09IFwidGFpbHNcIikpIHtcclxuICAgICAgICBzZXRTY29yZXMoKHByZXZTY29yZSkgPT4gcHJldlNjb3JlICsgMSk7XHJcbiAgICAgICAgLy8gdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UGxheWVkR2FtZXMoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lY29pbic6IHRydWUgfSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsYXllZEdhbWVzJywgSlNPTi5zdHJpbmdpZnkoeyAuLi5wbGF5ZWRHYW1lcywgJy9nYW1lY29pbic6IHRydWUgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRmxpcHBpbmcsIGNvaW5TaWRlLCBndWVzc2VkT3B0aW9uXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZsaXBDb2luID0gKCkgPT4ge1xyXG4gICAgaWYgKCFndWVzc2VkT3B0aW9uKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIG1ha2UgYSBndWVzcyBiZWZvcmUgZmxpcHBpbmcgdGhlIGNvaW4uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRmxpcHBpbmcpIHJldHVybjtcclxuXHJcbiAgICBzZXRJc0ZsaXBwaW5nKHRydWUpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IGNvaW4gc2lkZSBiYXNlZCBvbiBNYXRoLnJhbmRvbSgpXHJcbiAgICBjb25zdCBuZXdDb2luU2lkZSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhlYWRzXCIgOiBcInRhaWxzXCI7XHJcbiAgICBzZXRDb2luU2lkZShuZXdDb2luU2lkZSk7XHJcbiAgICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVjb2luJzogdHJ1ZSB9KSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnZ2FtZWxpc3QnKSBcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHdWVzc0FnYWluID0gKCkgPT4ge1xyXG4gICAgc2V0R3Vlc3NlZE9wdGlvbihudWxsKTtcclxuICAgIHNldENvaW5TaWRlKG51bGwpO1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTY29yZXMoc2NvcmVzICsgMSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS91c2VyZ2FtZS91cGRhdGUvc2NvcmVzJyxcclxuICAgICAgICB7IGlkLCBzY29yZXM6IHNjb3JlcyArIDEgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvaW59ICR7aXNGbGlwcGluZyA/IHN0eWxlcy5mbGlwcGluZyA6IFwiXCJ9YH1cclxuICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBzZXRJc0ZsaXBwaW5nKGZhbHNlKX1cclxuICAgICAgICAgID4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRzfSAke2NvaW5TaWRlID09PSBcImhlYWRzXCIgJiYgaGVhZHNJbWdMb2FkZWQgPyBzdHlsZXMuc2hvdyA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2NvaW4uanBnJ30gYWx0PVwiSGVhZHNcIiBvbkxvYWQ9e2hhbmRsZUhlYWRzSW1nTG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFpbHN9ICR7Y29pblNpZGUgPT09IFwidGFpbHNcIiAmJiB0YWlsc0ltZ0xvYWRlZCA/IHN0eWxlcy5zaG93IDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvY29pbjIuanBnJ30gYWx0PVwiVGFpbHNcIiBvbkxvYWQ9e2hhbmRsZVRhaWxzSW1nTG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+XHJcbiAgICAgICAgICA8cD5QbGF5ZXI6IHt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8cD5TY29yZXM6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmd1ZXNzQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHdWVzcyhcImhlYWRzXCIpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNGbGlwcGluZyB8fCBjb2luU2lkZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSGVhZHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ndWVzc0J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlR3Vlc3MoXCJ0YWlsc1wiKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmxpcHBpbmcgfHwgY29pblNpZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRhaWxzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRmxpcENvaW59IGRpc2FibGVkPXshZ3Vlc3NlZE9wdGlvbiB8fCBpc0ZsaXBwaW5nfT5cclxuICAgICAgICAgICAgRmxpcCBDb2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxwPkthbXUgbWVuZWJhayB7Z3Vlc3NlZE9wdGlvbn0hPC9wPlxyXG4gICAgICAgICAgICA8cD5IYXNpbG55YSBhZGFsYWgge2NvaW5TaWRlfTwvcD5cclxuICAgICAgICAgICAgPHA+U2NvcmVtdSA6IHtzY29yZXN9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUd1ZXNzQWdhaW59PlRlYmFrIGxhZ2k8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2luRmxpcEdhbWU7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJnYW1lQ29pbl9ib2R5X18xSnNSNVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImdhbWVDb2luX2NvbnRhaW5lcl9fcE1wY1NcIixcblx0XCJzdGF0c1wiOiBcImdhbWVDb2luX3N0YXRzX19rQ1FGS1wiLFxuXHRcImNvaW5cIjogXCJnYW1lQ29pbl9jb2luX18zNDhGRFwiLFxuXHRcImhlYWRzXCI6IFwiZ2FtZUNvaW5faGVhZHNfXzNNc1M0XCIsXG5cdFwidGFpbHNcIjogXCJnYW1lQ29pbl90YWlsc19fMmVuSS1cIixcblx0XCJidXR0b25zXCI6IFwiZ2FtZUNvaW5fYnV0dG9uc19fMzBoNEdcIixcblx0XCJidXR0b25cIjogXCJnYW1lQ29pbl9idXR0b25fX2pWaXlIXCIsXG5cdFwiZmxpcC1idXR0b25cIjogXCJnYW1lQ29pbl9mbGlwLWJ1dHRvbl9fMWpXc0FcIixcblx0XCJyZXNldC1idXR0b25cIjogXCJnYW1lQ29pbl9yZXNldC1idXR0b25fXzM0OEtlXCIsXG5cdFwiZ3Vlc3NCdXR0b25cIjogXCJnYW1lQ29pbl9ndWVzc0J1dHRvbl9fM1J1S1NcIixcblx0XCJndWVzcy1idXR0b25cIjogXCJnYW1lQ29pbl9ndWVzcy1idXR0b25fXzNURHZwXCIsXG5cdFwiZmxpcHBpbmdcIjogXCJnYW1lQ29pbl9mbGlwcGluZ19fM25Qb3NcIixcblx0XCJmbGlwLWhlYWRzXCI6IFwiZ2FtZUNvaW5fZmxpcC1oZWFkc19fM1pzYkNcIixcblx0XCJmbGlwLXRhaWxzXCI6IFwiZ2FtZUNvaW5fZmxpcC10YWlsc19fM1pxMDRcIixcblx0XCJzcGluLXRhaWxzXCI6IFwiZ2FtZUNvaW5fc3Bpbi10YWlsc19fU0pXTnRcIixcblx0XCJzcGluLWhlYWRzXCI6IFwiZ2FtZUNvaW5fc3Bpbi1oZWFkc19fMWd6OGxcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJCdXR0b24iLCJzdHlsZXMiLCJzZXRQbGF5ZWRHYW1lcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJDb2luRmxpcEdhbWUiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNjb3JlcyIsInNldFNjb3JlcyIsImd1ZXNzZWRPcHRpb24iLCJzZXRHdWVzc2VkT3B0aW9uIiwiY29pblNpZGUiLCJzZXRDb2luU2lkZSIsImlzRmxpcHBpbmciLCJzZXRJc0ZsaXBwaW5nIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGVhZHNJbWdMb2FkZWQiLCJzZXRIZWFkc0ltZ0xvYWRlZCIsInRhaWxzSW1nTG9hZGVkIiwic2V0VGFpbHNJbWdMb2FkZWQiLCJkaXNwYXRjaCIsInBsYXllZEdhbWVzIiwic3RhdGUiLCJyZWR1Y2VyIiwiaGFuZGxlSGVhZHNJbWdMb2FkIiwiaGFuZGxlVGFpbHNJbWdMb2FkIiwiaGFuZGxlR3Vlc3MiLCJvcHRpb24iLCJwcmV2U2NvcmUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVGbGlwQ29pbiIsImFsZXJ0IiwibmV3Q29pblNpZGUiLCJNYXRoIiwicmFuZG9tIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlR3Vlc3NBZ2FpbiIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInN0YXR1cyIsImNoZWNrVG9rZW4iLCJlbWFpbCIsImVycm9yIiwiY29udGFpbmVyIiwiY29pbiIsImZsaXBwaW5nIiwiaGVhZHMiLCJzaG93IiwidGFpbHMiLCJzdGF0cyIsImJ1dHRvbnMiLCJndWVzc0J1dHRvbiIsInNldEVtYWlsIiwidHlwZSIsInBheWxvYWQiLCJzZXRMb2dnZWRJbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==