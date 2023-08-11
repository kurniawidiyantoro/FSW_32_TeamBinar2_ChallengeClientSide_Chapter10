(() => {
var exports = {};
exports.id = "pages/gamerps";
exports.ids = ["pages/gamerps"];
exports.modules = {

/***/ "./pages/gamerps/index.js":
/*!********************************!*\
  !*** ./pages/gamerps/index.js ***!
  \********************************/
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
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/gameRPS.module.css */ "./styles/gameRPS.module.css");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamerps\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { useNavigate } from 'react-router-dom';




 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';



function Game() {
  // const navigate = useNavigate();
  const {
    0: id,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: round,
    1: setRound
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: getscore,
    1: setGetScore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: totalscore,
    1: setTotalScore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: result,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.reducer.playedGames);

  const handleBackClick = () => {
    // navigate('/gamelist');
    window.location.replace('/gamelist');
  };

  const handlePlayerMove = playerMove => {
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    const winner = determineWinner(playerMove, computerMove);
    setResult({
      playerMove,
      computerMove,
      winner
    });
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_3__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamerps': true
    })));
    console.log("Played Games:", playedGames);
    localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamerps': true
    })));
  };

  const updateScores = async () => {
    const gamename = 'gamerps';
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://localhost:3005/gamehistory/insert', {
      gamename,
      id,
      username,
      email,
      round,
      status,
      getscore,
      totalscore
    }, {
      headers: {
        Authorization: `Basic ${token}`
      }
    });
    console.log(response.data.status);
  };

  const determineWinner = (playerMove, computerMove) => {
    if (playerMove === computerMove) {
      setRound(round + 1);
      setStatus('draw');
      setGetScore(0);
      updateScores();
      return "Draw!";
    } else if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
      setRound(round + 1);
      setStatus('win');
      setGetScore(1);
      setTotalScore(totalscore + 1);
      updateScores();
      return `${username} win!`;
    } else {
      setRound(round + 1);
      setStatus('lose');
      setGetScore(0);
      updateScores();
      return 'Computer wins!';
    }
  };

  const handleReload = () => {
    setResult(null);
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const gamename = 'gamerps';
    console.log(token);
    console.log(email);

    try {
      if (!token) {
        console.log('Not Authorize !');
        navigate('/login'); // Ganti dengan useNavigate()
      } else {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://localhost:3005/gamehistory/get', {
          email,
          gamename
        }, {
          headers: {
            Authorization: `Basic ${token}`
          }
        });
        console.log(response.data.data);
        setId(response.data.data.id);
        setUsername(response.data.data.username);
        setRound(response.data.data.round);
        setStatus(response.data.data.status);
        setGetScore(response.data.data.getscore);
        setTotalScore(response.data.data.totalscore);
      }
    } catch (error) {
      console.log("Internal Server Error !");
      window.location.replace('/login');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkToken();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
          children: "Rock Paper Scissors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().status),
          children: ["Status Last Round: ", status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().status),
          children: ["Current Round: ", round + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().status),
          children: ["Total Scores: ", totalscore]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `${(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridItem)} ${(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().options)}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            onClick: () => handlePlayerMove('rock'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            onClick: () => handlePlayerMove('paper'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            onClick: () => handlePlayerMove('scissors'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `${(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridItem)} ${(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().options)}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

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

/***/ "./styles/gameRPS.module.css":
/*!***********************************!*\
  !*** ./styles/gameRPS.module.css ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"background": "gameRPS_background__N_tXN",
	"gridContainer": "gameRPS_gridContainer__3VUeB",
	"gridItem": "gameRPS_gridItem__2QW7n",
	"game": "gameRPS_game__3BUYX",
	"title": "gameRPS_title__2uTkv",
	"Container": "gameRPS_Container__V9YZB",
	"status": "gameRPS_status__325YB",
	"score": "gameRPS_score__1BZL3",
	"p-count": "gameRPS_p-count__fj2zm",
	"c-count": "gameRPS_c-count__2ifG1",
	"button": "gameRPS_button__1QPie",
	"options": "gameRPS_options__AGcLI",
	"optionscom": "gameRPS_optionscom__2b1X3",
	"rock": "gameRPS_rock__3vvMc",
	"paper": "gameRPS_paper__3OshQ",
	"scissor": "gameRPS_scissor__344hs",
	"rockcom": "gameRPS_rockcom__1Fxzh",
	"papercom": "gameRPS_papercom__3qAPl",
	"scissorcom": "gameRPS_scissorcom__1b6ab",
	"move": "gameRPS_move__1yXRy",
	"reload": "gameRPS_reload__3pJ-p",
	"result": "gameRPS_result__rd7Sm",
	"Image": "gameRPS_Image__1ZJfM",
	"moveBtn": "gameRPS_moveBtn__2ZxLX",
	"selected": "gameRPS_selected__13EcD",
	"selected-computer": "gameRPS_selected-computer__1JvHc"
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
var __webpack_exports__ = (__webpack_exec__("./pages/gamerps/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBdkIsRUFNUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZXJwcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2dhbWVSUFMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7c2V0UGxheWVkR2FtZXMgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBiYXR1SW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYXR1LnBuZyc7XHJcbi8vIGltcG9ydCBrZXJ0YXNJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2tlcnRhcy5wbmcnO1xyXG4vLyBpbXBvcnQgZ3VudGluZ0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3VudGluZy5wbmcnO1xyXG5cclxuZnVuY3Rpb24gR2FtZSgpIHtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcm91bmQsIHNldFJvdW5kXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2dldHNjb3JlLCBzZXRHZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxzY29yZSwgc2V0VG90YWxTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHBsYXllZEdhbWVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVkdWNlci5wbGF5ZWRHYW1lcyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIC8vIG5hdmlnYXRlKCcvZ2FtZWxpc3QnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ZXJNb3ZlID0gKHBsYXllck1vdmUpID0+IHtcclxuICAgIGNvbnN0IG1vdmVzID0gWydyb2NrJywgJ3BhcGVyJywgJ3NjaXNzb3JzJ107XHJcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGRldGVybWluZVdpbm5lcihwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUpO1xyXG4gICAgc2V0UmVzdWx0KHsgcGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlLCB3aW5uZXIgfSk7XHJcbiAgICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVycHMnOiB0cnVlIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVkR2FtZXMnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVycHMnOiB0cnVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJ1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvaW5zZXJ0JyxcclxuICAgICAgICB7IGdhbWVuYW1lLCBpZCwgdXNlcm5hbWUsIGVtYWlsLCByb3VuZCwgc3RhdHVzLCBnZXRzY29yZSwgdG90YWxzY29yZSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck1vdmUgPT09IGNvbXB1dGVyTW92ZSkge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ2RyYXcnKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMCk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gXCJEcmF3IVwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdyb2NrJyAmJiBjb21wdXRlck1vdmUgPT09ICdzY2lzc29ycycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAncGFwZXInICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3JvY2snKSB8fFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3NjaXNzb3JzJyAmJiBjb21wdXRlck1vdmUgPT09ICdwYXBlcicpXHJcbiAgICApIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCd3aW4nKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMSk7XHJcbiAgICAgIHNldFRvdGFsU2NvcmUodG90YWxzY29yZSArIDEpO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuIGAke3VzZXJuYW1lfSB3aW4hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJvdW5kKHJvdW5kICsgMSk7XHJcbiAgICAgIHNldFN0YXR1cygnbG9zZScpO1xyXG4gICAgICBzZXRHZXRTY29yZSgwKTtcclxuICAgICAgdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyEnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbG9hZCA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcydcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0Um91bmQocmVzcG9uc2UuZGF0YS5kYXRhLnJvdW5kKTtcclxuICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2UuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgc2V0R2V0U2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLmdldHNjb3JlKTtcclxuICAgICAgICBzZXRUb3RhbFNjb3JlKHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PlN0YXR1cyBMYXN0IFJvdW5kOiB7c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PkN1cnJlbnQgUm91bmQ6IHtyb3VuZCArIDF9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+VG90YWwgU2NvcmVzOiB7dG90YWxzY29yZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRJdGVtfSAke3N0eWxlcy5vcHRpb25zfWB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92ZX0+Q2hvb3NlIHlvdXIgbW92ZTwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgncm9jaycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvYmF0dS5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgncGFwZXInKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2tlcnRhcy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgnc2Npc3NvcnMnKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycuL2ltYWdlcy9ndW50aW5nLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncmlkSXRlbX0gJHtzdHlsZXMub3B0aW9uc31gfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhY2tncm91bmRcIjogXCJnYW1lUlBTX2JhY2tncm91bmRfX05fdFhOXCIsXG5cdFwiZ3JpZENvbnRhaW5lclwiOiBcImdhbWVSUFNfZ3JpZENvbnRhaW5lcl9fM1ZVZUJcIixcblx0XCJncmlkSXRlbVwiOiBcImdhbWVSUFNfZ3JpZEl0ZW1fXzJRVzduXCIsXG5cdFwiZ2FtZVwiOiBcImdhbWVSUFNfZ2FtZV9fM0JVWVhcIixcblx0XCJ0aXRsZVwiOiBcImdhbWVSUFNfdGl0bGVfXzJ1VGt2XCIsXG5cdFwiQ29udGFpbmVyXCI6IFwiZ2FtZVJQU19Db250YWluZXJfX1Y5WVpCXCIsXG5cdFwic3RhdHVzXCI6IFwiZ2FtZVJQU19zdGF0dXNfXzMyNVlCXCIsXG5cdFwic2NvcmVcIjogXCJnYW1lUlBTX3Njb3JlX18xQlpMM1wiLFxuXHRcInAtY291bnRcIjogXCJnYW1lUlBTX3AtY291bnRfX2ZqMnptXCIsXG5cdFwiYy1jb3VudFwiOiBcImdhbWVSUFNfYy1jb3VudF9fMmlmRzFcIixcblx0XCJidXR0b25cIjogXCJnYW1lUlBTX2J1dHRvbl9fMVFQaWVcIixcblx0XCJvcHRpb25zXCI6IFwiZ2FtZVJQU19vcHRpb25zX19BR2NMSVwiLFxuXHRcIm9wdGlvbnNjb21cIjogXCJnYW1lUlBTX29wdGlvbnNjb21fXzJiMVgzXCIsXG5cdFwicm9ja1wiOiBcImdhbWVSUFNfcm9ja19fM3Z2TWNcIixcblx0XCJwYXBlclwiOiBcImdhbWVSUFNfcGFwZXJfXzNPc2hRXCIsXG5cdFwic2Npc3NvclwiOiBcImdhbWVSUFNfc2Npc3Nvcl9fMzQ0aHNcIixcblx0XCJyb2NrY29tXCI6IFwiZ2FtZVJQU19yb2NrY29tX18xRnh6aFwiLFxuXHRcInBhcGVyY29tXCI6IFwiZ2FtZVJQU19wYXBlcmNvbV9fM3FBUGxcIixcblx0XCJzY2lzc29yY29tXCI6IFwiZ2FtZVJQU19zY2lzc29yY29tX18xYjZhYlwiLFxuXHRcIm1vdmVcIjogXCJnYW1lUlBTX21vdmVfXzF5WFJ5XCIsXG5cdFwicmVsb2FkXCI6IFwiZ2FtZVJQU19yZWxvYWRfXzNwSi1wXCIsXG5cdFwicmVzdWx0XCI6IFwiZ2FtZVJQU19yZXN1bHRfX3JkN1NtXCIsXG5cdFwiSW1hZ2VcIjogXCJnYW1lUlBTX0ltYWdlX18xWkpmTVwiLFxuXHRcIm1vdmVCdG5cIjogXCJnYW1lUlBTX21vdmVCdG5fXzJaeExYXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJnYW1lUlBTX3NlbGVjdGVkX18xM0VjRFwiLFxuXHRcInNlbGVjdGVkLWNvbXB1dGVyXCI6IFwiZ2FtZVJQU19zZWxlY3RlZC1jb21wdXRlcl9fMUp2SGNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJCdXR0b24iLCJzdHlsZXMiLCJzZXRQbGF5ZWRHYW1lcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJHYW1lIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3VuZCIsInNldFJvdW5kIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2V0c2NvcmUiLCJzZXRHZXRTY29yZSIsInRvdGFsc2NvcmUiLCJzZXRUb3RhbFNjb3JlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZGlzcGF0Y2giLCJwbGF5ZWRHYW1lcyIsInN0YXRlIiwicmVkdWNlciIsImhhbmRsZUJhY2tDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImhhbmRsZVBsYXllck1vdmUiLCJwbGF5ZXJNb3ZlIiwibW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ3aW5uZXIiLCJkZXRlcm1pbmVXaW5uZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVTY29yZXMiLCJnYW1lbmFtZSIsInRva2VuIiwiZ2V0SXRlbSIsImVtYWlsIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiaGFuZGxlUmVsb2FkIiwiY2hlY2tUb2tlbiIsIm5hdmlnYXRlIiwiZXJyb3IiLCJiYWNrZ3JvdW5kIiwiZ2FtZSIsIkNvbnRhaW5lciIsInRpdGxlIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwib3B0aW9ucyIsIm1vdmUiLCJtb3ZlQnRuIiwiSW1hZ2UiLCJyZWxvYWQiLCJzZXRFbWFpbCIsInR5cGUiLCJwYXlsb2FkIiwic2V0TG9nZ2VkSW4iLCJpc0xvZ2dlZEluIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=