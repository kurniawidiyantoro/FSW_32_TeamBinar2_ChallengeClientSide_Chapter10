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
      dispatch(setTotalScore(totalscore + 1));
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
        window.location.replace('/login'); // Ganti dengan useNavigate()
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
        lineNumber: 126,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().status),
          children: ["Status Last Round: ", status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().status),
          children: ["Current Round: ", round + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().status),
          children: ["Total Scores: ", totalscore]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
            lineNumber: 140,
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
              lineNumber: 142,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
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
              lineNumber: 145,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
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
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: `${(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridItem)} ${(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().options)}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
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
              lineNumber: 154,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
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
              lineNumber: 157,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
              lineNumber: 160,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_6___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZ2FtZXJwcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU1UsSUFBVCxHQUFnQjtBQUNkO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNYLCtDQUFRLENBQUMsSUFBRCxDQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDWSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNjLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CZiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2dCLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCakIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNrQixRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQm5CLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDb0IsVUFBRDtBQUFBLE9BQWFkO0FBQWIsTUFBOEJOLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDcUIsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0J0QiwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxRQUFNdUIsUUFBUSxHQUFHaEIsd0RBQVcsRUFBNUI7QUFDQSxRQUFNaUIsV0FBVyxHQUFHaEIsd0RBQVcsQ0FBQ2lCLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFdBQXhCLENBQS9COztBQUVBLFFBQU1HLGVBQWUsR0FBRyxNQUFNO0FBQzVCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsV0FBeEI7QUFDRCxHQUhEOztBQUtBLFFBQU1DLGdCQUFnQixHQUFJQyxVQUFELElBQWdCO0FBQ3ZDLFVBQU1DLEtBQUssR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBQWQ7QUFDQSxVQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosS0FBSyxDQUFDSyxNQUFqQyxDQUFELENBQTFCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHQyxlQUFlLENBQUNSLFVBQUQsRUFBYUUsWUFBYixDQUE5QjtBQUNBWixJQUFBQSxTQUFTLENBQUM7QUFBRVUsTUFBQUEsVUFBRjtBQUFjRSxNQUFBQSxZQUFkO0FBQTRCSyxNQUFBQTtBQUE1QixLQUFELENBQVQ7QUFDQWhCLElBQUFBLFFBQVEsQ0FBQ2xCLDZEQUFjLGlDQUFNbUIsV0FBTjtBQUFtQixrQkFBWTtBQUEvQixPQUFmLENBQVI7QUFDQWlCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJsQixXQUE3QjtBQUNBbUIsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DQyxJQUFJLENBQUNDLFNBQUwsaUNBQW9CdEIsV0FBcEI7QUFBaUMsa0JBQVk7QUFBN0MsT0FBcEM7QUFDRCxHQVJEOztBQVVBLFFBQU11QixZQUFZLEdBQUcsWUFBWTtBQUMvQixVQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFDQSxVQUFNQyxLQUFLLEdBQUdOLFlBQVksQ0FBQ08sT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsVUFBTUMsS0FBSyxHQUFHUixZQUFZLENBQUNPLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFVBQU1FLFFBQVEsR0FBRyxNQUFNbEQsaURBQUEsQ0FBVywwQ0FBWCxFQUNuQjtBQUFFOEMsTUFBQUEsUUFBRjtBQUFZdEMsTUFBQUEsRUFBWjtBQUFnQkUsTUFBQUEsUUFBaEI7QUFBMEJ1QyxNQUFBQSxLQUExQjtBQUFpQ3JDLE1BQUFBLEtBQWpDO0FBQXdDRSxNQUFBQSxNQUF4QztBQUFnREUsTUFBQUEsUUFBaEQ7QUFBMERFLE1BQUFBO0FBQTFELEtBRG1CLEVBRW5CO0FBQ0VrQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsYUFBYSxFQUFHLFNBQVFOLEtBQU07QUFEdkI7QUFEWCxLQUZtQixDQUF2QjtBQVFBUixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsUUFBUSxDQUFDSSxJQUFULENBQWN4QyxNQUExQjtBQUNELEdBYkQ7O0FBZUEsUUFBTXdCLGVBQWUsR0FBRyxDQUFDUixVQUFELEVBQWFFLFlBQWIsS0FBOEI7QUFDcEQsUUFBSUYsVUFBVSxLQUFLRSxZQUFuQixFQUFpQztBQUMvQm5CLE1BQUFBLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBRyxNQUFBQSxTQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0FFLE1BQUFBLFdBQVcsQ0FBQyxDQUFELENBQVg7QUFDQTRCLE1BQUFBLFlBQVk7QUFDWixhQUFPLE9BQVA7QUFDRCxLQU5ELE1BTU8sSUFDSmYsVUFBVSxLQUFLLE1BQWYsSUFBeUJFLFlBQVksS0FBSyxVQUEzQyxJQUNDRixVQUFVLEtBQUssT0FBZixJQUEwQkUsWUFBWSxLQUFLLE1BRDVDLElBRUNGLFVBQVUsS0FBSyxVQUFmLElBQTZCRSxZQUFZLEtBQUssT0FIMUMsRUFJTDtBQUNBbkIsTUFBQUEsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0FHLE1BQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUUsTUFBQUEsV0FBVyxDQUFDLENBQUQsQ0FBWDtBQUNBYixNQUFBQSxhQUFhLENBQUNjLFVBQVUsR0FBRyxDQUFkLENBQWI7QUFDQTJCLE1BQUFBLFlBQVk7QUFDWnhCLE1BQUFBLFFBQVEsQ0FBQ2pCLGFBQWEsQ0FBQ2MsVUFBVSxHQUFHLENBQWQsQ0FBZCxDQUFSO0FBQ0EsYUFBUSxHQUFFUixRQUFTLE9BQW5CO0FBQ0QsS0FaTSxNQVlBO0FBQ0xHLE1BQUFBLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBRyxNQUFBQSxTQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0FFLE1BQUFBLFdBQVcsQ0FBQyxDQUFELENBQVg7QUFDQTRCLE1BQUFBLFlBQVk7QUFDWixhQUFPLGdCQUFQO0FBQ0Q7QUFDRixHQTFCRDs7QUE0QkEsUUFBTVUsWUFBWSxHQUFHLE1BQU07QUFDekJuQyxJQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxRQUFNb0MsVUFBVSxHQUFHLFlBQVk7QUFDN0IsVUFBTVQsS0FBSyxHQUFHTixZQUFZLENBQUNPLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFVBQU1DLEtBQUssR0FBR1IsWUFBWSxDQUFDTyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQSxVQUFNRixRQUFRLEdBQUcsU0FBakI7QUFDQVAsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDQVIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVo7O0FBQ0EsUUFBSTtBQUNGLFVBQUksQ0FBQ0YsS0FBTCxFQUFZO0FBQ1ZSLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FkLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEIsRUFGVSxDQUV5QjtBQUNwQyxPQUhELE1BR087QUFDTCxjQUFNc0IsUUFBUSxHQUFHLE1BQU1sRCxpREFBQSxDQUFXLHVDQUFYLEVBQ3JCO0FBQUVpRCxVQUFBQSxLQUFGO0FBQVNILFVBQUFBO0FBQVQsU0FEcUIsRUFFckI7QUFDRU0sVUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFlBQUFBLGFBQWEsRUFBRyxTQUFRTixLQUFNO0FBRHZCO0FBRFgsU0FGcUIsQ0FBdkI7QUFRQVIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlVLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUExQjtBQUNBN0MsUUFBQUEsS0FBSyxDQUFDeUMsUUFBUSxDQUFDSSxJQUFULENBQWNBLElBQWQsQ0FBbUI5QyxFQUFwQixDQUFMO0FBQ0FHLFFBQUFBLFdBQVcsQ0FBQ3VDLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUFkLENBQW1CNUMsUUFBcEIsQ0FBWDtBQUNBRyxRQUFBQSxRQUFRLENBQUNxQyxRQUFRLENBQUNJLElBQVQsQ0FBY0EsSUFBZCxDQUFtQjFDLEtBQXBCLENBQVI7QUFDQUcsUUFBQUEsU0FBUyxDQUFDbUMsUUFBUSxDQUFDSSxJQUFULENBQWNBLElBQWQsQ0FBbUJ4QyxNQUFwQixDQUFUO0FBQ0FHLFFBQUFBLFdBQVcsQ0FBQ2lDLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUFkLENBQW1CdEMsUUFBcEIsQ0FBWDtBQUNBWixRQUFBQSxhQUFhLENBQUM4QyxRQUFRLENBQUNJLElBQVQsQ0FBY0EsSUFBZCxDQUFtQnBDLFVBQXBCLENBQWI7QUFDRDtBQUNGLEtBckJELENBcUJFLE9BQU91QyxLQUFQLEVBQWM7QUFDZGxCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FkLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEI7QUFDRDtBQUNGLEdBL0JEOztBQWlDQTdCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkeUQsSUFBQUEsVUFBVTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXRELDhFQUFoQjtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UsOERBQUMsOENBQUQ7QUFBUSxhQUFLLEVBQUMsU0FBZDtBQUF3QixlQUFPLEVBQUV1QixlQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQVMsZUFBUyxFQUFFdkIsd0VBQXBCO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFFQSw2RUFBaEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVBLHlFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRUEsMEVBQWhCO0FBQUEsNENBQW1EWSxNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFLLG1CQUFTLEVBQUVaLDBFQUFoQjtBQUFBLHdDQUErQ1UsS0FBSyxHQUFHLENBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQUssbUJBQVMsRUFBRVYsMEVBQWhCO0FBQUEsdUNBQThDZ0IsVUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBUUU7QUFBSyxpQkFBUyxFQUFFaEIsaUZBQWhCO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBUyxFQUFHLEdBQUVBLDRFQUFnQixJQUFHQSwyRUFBZSxFQUFyRDtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEsd0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFRLHFCQUFTLEVBQUVBLDJFQUFuQjtBQUFtQyxtQkFBTyxFQUFFLE1BQU0yQixnQkFBZ0IsQ0FBQyxNQUFELENBQWxFO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFFLGtCQUFWO0FBQThCLGlCQUFHLEVBQUMsRUFBbEM7QUFBcUMsdUJBQVMsRUFBRTNCLHlFQUFZaUU7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFLSTtBQUFRLHFCQUFTLEVBQUVqRSwyRUFBbkI7QUFBbUMsbUJBQU8sRUFBRSxNQUFNMkIsZ0JBQWdCLENBQUMsT0FBRCxDQUFsRTtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRSxvQkFBVjtBQUFnQyxpQkFBRyxFQUFDLEVBQXBDO0FBQXVDLHVCQUFTLEVBQUUzQix5RUFBWWlFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBUUk7QUFBUSxxQkFBUyxFQUFFakUsMkVBQW5CO0FBQW1DLG1CQUFPLEVBQUUsTUFBTTJCLGdCQUFnQixDQUFDLFVBQUQsQ0FBbEU7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUUsc0JBQVY7QUFBa0MsaUJBQUcsRUFBQyxFQUF0QztBQUF5Qyx1QkFBUyxFQUFFM0IseUVBQVlpRTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFhRTtBQUFLLG1CQUFTLEVBQUcsR0FBRWpFLDRFQUFnQixJQUFHQSwyRUFBZSxFQUFyRDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBRUEsd0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUVBLDJFQUFuQjtBQUFtQyxvQkFBUSxNQUEzQztBQUFBLHNCQUNHaUIsTUFBTSxpQkFBSTtBQUFLLGlCQUFHLEVBQUUsa0JBQVY7QUFBOEIsaUJBQUcsRUFBQyxFQUFsQztBQUFxQyx1QkFBUyxFQUFFakIseUVBQVlpRTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUtFO0FBQVEscUJBQVMsRUFBRWpFLDJFQUFuQjtBQUFtQyxvQkFBUSxNQUEzQztBQUFBLHNCQUNHaUIsTUFBTSxpQkFBSTtBQUFLLGlCQUFHLEVBQUUsb0JBQVY7QUFBZ0MsaUJBQUcsRUFBQyxFQUFwQztBQUF1Qyx1QkFBUyxFQUFFakIseUVBQVlpRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQVFFO0FBQVEscUJBQVMsRUFBRWpFLDJFQUFuQjtBQUFtQyxvQkFBUSxNQUEzQztBQUFBLHNCQUNHaUIsTUFBTSxpQkFBSTtBQUFLLGlCQUFHLEVBQUUsc0JBQVY7QUFBa0MsaUJBQUcsRUFBQyxFQUF0QztBQUF5Qyx1QkFBUyxFQUFFakIseUVBQVlpRTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsRUFrQ0doRCxNQUFNLGlCQUNMO0FBQUssaUJBQVMsRUFBRWpCLDBFQUFoQjtBQUFBLGdDQUNFO0FBQUEsb0NBQWVpQixNQUFNLENBQUNXLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEseUNBQW9CWCxNQUFNLENBQUNhLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEsb0JBQUliLE1BQU0sQ0FBQ2tCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0osZUF5Q0U7QUFBUSxpQkFBUyxFQUFFbkMsMEVBQW5CO0FBQWtDLGVBQU8sRUFBRXFELFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REOztBQUVELGlFQUFlaEQsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVM4RCxRQUFULENBQWtCcEIsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTztBQUNMcUIsSUFBQUEsSUFBSSxFQUFFLFdBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFdEI7QUFGSixHQUFQO0FBSUQ7QUFFTSxNQUFNN0MsYUFBYSxHQUFJb0UsVUFBRCxLQUFpQjtBQUM1Q0YsRUFBQUEsSUFBSSxFQUFFLGlCQURzQztBQUU1Q0MsRUFBQUEsT0FBTyxFQUFFQztBQUZtQyxDQUFqQixDQUF0QjtBQUtBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxVQUFELEVBQWFDLElBQWIsTUFBdUI7QUFDaERMLEVBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsRUFBQUEsT0FBTyxFQUFFO0FBQUVHLElBQUFBLFVBQUY7QUFBY0MsSUFBQUE7QUFBZDtBQUZ1QyxDQUF2QixDQUFwQjtBQUtBLE1BQU14RSxjQUFjLEdBQUltQixXQUFELEtBQWtCO0FBQzlDZ0QsRUFBQUEsSUFBSSxFQUFFLGtCQUR3QztBQUU5Q0MsRUFBQUEsT0FBTyxFQUFFakQ7QUFGcUMsQ0FBbEIsQ0FBdkI7QUFLQSxNQUFNc0QsbUJBQW1CLEdBQUlDLFNBQUQsSUFBZSxNQUFPeEQsUUFBUCxJQUFvQjtBQUNwRSxNQUFJO0FBQ0YsVUFBTTZCLFFBQVEsR0FBRyxNQUFNbEQsZ0RBQUEsQ0FBVyx5Q0FBd0M2RSxTQUFVLEVBQTdELENBQXZCO0FBQ0EsVUFBTUUsY0FBYyxHQUFHN0IsUUFBUSxDQUFDSSxJQUFULENBQWNrQixVQUFyQyxDQUZFLENBRStDOztBQUNqRG5ELElBQUFBLFFBQVEsQ0FBQ2pCLGFBQWEsQ0FBQzJFLGNBQUQsQ0FBZCxDQUFSO0FBQ0QsR0FKRCxDQUlFLE9BQU90QixLQUFQLEVBQWM7QUFDZGxCLElBQUFBLE9BQU8sQ0FBQ2tCLEtBQVIsQ0FBYyxrQ0FBZCxFQUFrREEsS0FBbEQ7QUFDRDtBQUNGLENBUk0sRUFVUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZXJwcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2dhbWVSUFMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7c2V0UGxheWVkR2FtZXMsIHNldFRvdGFsU2NvcmUgIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBiYXR1SW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYXR1LnBuZyc7XHJcbi8vIGltcG9ydCBrZXJ0YXNJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2tlcnRhcy5wbmcnO1xyXG4vLyBpbXBvcnQgZ3VudGluZ0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3VudGluZy5wbmcnO1xyXG5cclxuZnVuY3Rpb24gR2FtZSgpIHtcclxuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcm91bmQsIHNldFJvdW5kXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2dldHNjb3JlLCBzZXRHZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxzY29yZSwgc2V0VG90YWxTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHBsYXllZEdhbWVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucmVkdWNlci5wbGF5ZWRHYW1lcyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIC8vIG5hdmlnYXRlKCcvZ2FtZWxpc3QnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ZXJNb3ZlID0gKHBsYXllck1vdmUpID0+IHtcclxuICAgIGNvbnN0IG1vdmVzID0gWydyb2NrJywgJ3BhcGVyJywgJ3NjaXNzb3JzJ107XHJcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGRldGVybWluZVdpbm5lcihwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUpO1xyXG4gICAgc2V0UmVzdWx0KHsgcGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlLCB3aW5uZXIgfSk7XHJcbiAgICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVycHMnOiB0cnVlIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVkR2FtZXMnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVycHMnOiB0cnVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJ1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvaW5zZXJ0JyxcclxuICAgICAgICB7IGdhbWVuYW1lLCBpZCwgdXNlcm5hbWUsIGVtYWlsLCByb3VuZCwgc3RhdHVzLCBnZXRzY29yZSwgdG90YWxzY29yZSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck1vdmUgPT09IGNvbXB1dGVyTW92ZSkge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ2RyYXcnKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMCk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gXCJEcmF3IVwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdyb2NrJyAmJiBjb21wdXRlck1vdmUgPT09ICdzY2lzc29ycycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAncGFwZXInICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3JvY2snKSB8fFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3NjaXNzb3JzJyAmJiBjb21wdXRlck1vdmUgPT09ICdwYXBlcicpXHJcbiAgICApIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCd3aW4nKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMSk7XHJcbiAgICAgIHNldFRvdGFsU2NvcmUodG90YWxzY29yZSArIDEpO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgZGlzcGF0Y2goc2V0VG90YWxTY29yZSh0b3RhbHNjb3JlICsgMSkpO1xyXG4gICAgICByZXR1cm4gYCR7dXNlcm5hbWV9IHdpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCdsb3NlJyk7XHJcbiAgICAgIHNldEdldFNjb3JlKDApO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zISc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJ1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpXHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRSb3VuZChyZXNwb25zZS5kYXRhLmRhdGEucm91bmQpO1xyXG4gICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICBzZXRHZXRTY29yZShyZXNwb25zZS5kYXRhLmRhdGEuZ2V0c2NvcmUpO1xyXG4gICAgICAgIHNldFRvdGFsU2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQmFja0NsaWNrfT5cclxuICAgICAgICAgIEtlbWJhbGlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Sb2NrIFBhcGVyIFNjaXNzb3JzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+U3RhdHVzIExhc3QgUm91bmQ6IHtzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+Q3VycmVudCBSb3VuZDoge3JvdW5kICsgMX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5Ub3RhbCBTY29yZXM6IHt0b3RhbHNjb3JlfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ3JpZEl0ZW19ICR7c3R5bGVzLm9wdGlvbnN9YH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRJdGVtfSAke3N0eWxlcy5vcHRpb25zfWB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92ZX0+Q29tcHV0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycvaW1hZ2VzL2JhdHUucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9rZXJ0YXMucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnLi9pbWFnZXMvZ3VudGluZy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Jlc3VsdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+XHJcbiAgICAgICAgICAgIDxwPllvdSBjaG9zZToge3Jlc3VsdC5wbGF5ZXJNb3ZlfTwvcD5cclxuICAgICAgICAgICAgPHA+Q29tcHV0ZXIgY2hvc2U6IHtyZXN1bHQuY29tcHV0ZXJNb3ZlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc3VsdC53aW5uZXJ9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlbG9hZH0gb25DbGljaz17aGFuZGxlUmVsb2FkfT5cclxuICAgICAgICAgIFBsYXkgQWdhaW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KCl7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9SRVFVRVNUJ1xyXG4vLyAgIH1cclxuLy8gIH07XHJcblxyXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyAodG9rZW4sIGVtYWlsKSB7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgIHR5cGU6ICdMT0dJTl9TVUNDRVNTJyxcclxuLy8gICBwYXlsb2FkOiB7IHRva2VuLCBlbWFpbCB9LFxyXG4vLyB9fTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpbkZhaWx1cmUgKGVycm9yKXtcclxuLy8gICByZXR1cm57XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fRkFJTFVSRScsXHJcbi8vICAgICBwYXlsb2FkOiBlcnJvcixcclxuLy8gICB9ICBcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbWFpbChlbWFpbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNQUlMJyxcclxuICAgIHBheWxvYWQ6IGVtYWlsLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFNjb3JlID0gKHRvdGFsU2NvcmUpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9UT1RBTF9TQ09SRScsXHJcbiAgcGF5bG9hZDogdG90YWxTY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyVG90YWxTY29yZSA9ICh1c2VyRW1haWwpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC8ke3VzZXJFbWFpbH1gKTtcclxuICAgIGNvbnN0IHVzZXJUb3RhbFNjb3JlID0gcmVzcG9uc2UuZGF0YS50b3RhbFNjb3JlOyAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB5b3VyIEFQSSByZXNwb25zZVxyXG4gICAgZGlzcGF0Y2goc2V0VG90YWxTY29yZSh1c2VyVG90YWxTY29yZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHRvdGFsIHNjb3JlOicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2dyb3VuZFwiOiBcImdhbWVSUFNfYmFja2dyb3VuZF9fTl90WE5cIixcblx0XCJncmlkQ29udGFpbmVyXCI6IFwiZ2FtZVJQU19ncmlkQ29udGFpbmVyX18zVlVlQlwiLFxuXHRcImdyaWRJdGVtXCI6IFwiZ2FtZVJQU19ncmlkSXRlbV9fMlFXN25cIixcblx0XCJnYW1lXCI6IFwiZ2FtZVJQU19nYW1lX18zQlVZWFwiLFxuXHRcInRpdGxlXCI6IFwiZ2FtZVJQU190aXRsZV9fMnVUa3ZcIixcblx0XCJDb250YWluZXJcIjogXCJnYW1lUlBTX0NvbnRhaW5lcl9fVjlZWkJcIixcblx0XCJzdGF0dXNcIjogXCJnYW1lUlBTX3N0YXR1c19fMzI1WUJcIixcblx0XCJzY29yZVwiOiBcImdhbWVSUFNfc2NvcmVfXzFCWkwzXCIsXG5cdFwicC1jb3VudFwiOiBcImdhbWVSUFNfcC1jb3VudF9fZmoyem1cIixcblx0XCJjLWNvdW50XCI6IFwiZ2FtZVJQU19jLWNvdW50X18yaWZHMVwiLFxuXHRcImJ1dHRvblwiOiBcImdhbWVSUFNfYnV0dG9uX18xUVBpZVwiLFxuXHRcIm9wdGlvbnNcIjogXCJnYW1lUlBTX29wdGlvbnNfX0FHY0xJXCIsXG5cdFwib3B0aW9uc2NvbVwiOiBcImdhbWVSUFNfb3B0aW9uc2NvbV9fMmIxWDNcIixcblx0XCJyb2NrXCI6IFwiZ2FtZVJQU19yb2NrX18zdnZNY1wiLFxuXHRcInBhcGVyXCI6IFwiZ2FtZVJQU19wYXBlcl9fM09zaFFcIixcblx0XCJzY2lzc29yXCI6IFwiZ2FtZVJQU19zY2lzc29yX18zNDRoc1wiLFxuXHRcInJvY2tjb21cIjogXCJnYW1lUlBTX3JvY2tjb21fXzFGeHpoXCIsXG5cdFwicGFwZXJjb21cIjogXCJnYW1lUlBTX3BhcGVyY29tX18zcUFQbFwiLFxuXHRcInNjaXNzb3Jjb21cIjogXCJnYW1lUlBTX3NjaXNzb3Jjb21fXzFiNmFiXCIsXG5cdFwibW92ZVwiOiBcImdhbWVSUFNfbW92ZV9fMXlYUnlcIixcblx0XCJyZWxvYWRcIjogXCJnYW1lUlBTX3JlbG9hZF9fM3BKLXBcIixcblx0XCJyZXN1bHRcIjogXCJnYW1lUlBTX3Jlc3VsdF9fcmQ3U21cIixcblx0XCJJbWFnZVwiOiBcImdhbWVSUFNfSW1hZ2VfXzFaSmZNXCIsXG5cdFwibW92ZUJ0blwiOiBcImdhbWVSUFNfbW92ZUJ0bl9fMlp4TFhcIixcblx0XCJzZWxlY3RlZFwiOiBcImdhbWVSUFNfc2VsZWN0ZWRfXzEzRWNEXCIsXG5cdFwic2VsZWN0ZWQtY29tcHV0ZXJcIjogXCJnYW1lUlBTX3NlbGVjdGVkLWNvbXB1dGVyX18xSnZIY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsInNldFBsYXllZEdhbWVzIiwic2V0VG90YWxTY29yZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJHYW1lIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3VuZCIsInNldFJvdW5kIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2V0c2NvcmUiLCJzZXRHZXRTY29yZSIsInRvdGFsc2NvcmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJkaXNwYXRjaCIsInBsYXllZEdhbWVzIiwic3RhdGUiLCJyZWR1Y2VyIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlUGxheWVyTW92ZSIsInBsYXllck1vdmUiLCJtb3ZlcyIsImNvbXB1dGVyTW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIndpbm5lciIsImRldGVybWluZVdpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZVNjb3JlcyIsImdhbWVuYW1lIiwidG9rZW4iLCJnZXRJdGVtIiwiZW1haWwiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJoYW5kbGVSZWxvYWQiLCJjaGVja1Rva2VuIiwiZXJyb3IiLCJiYWNrZ3JvdW5kIiwiZ2FtZSIsIkNvbnRhaW5lciIsInRpdGxlIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwib3B0aW9ucyIsIm1vdmUiLCJtb3ZlQnRuIiwiSW1hZ2UiLCJyZWxvYWQiLCJzZXRFbWFpbCIsInR5cGUiLCJwYXlsb2FkIiwidG90YWxTY29yZSIsInNldExvZ2dlZEluIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJmZXRjaFVzZXJUb3RhbFNjb3JlIiwidXNlckVtYWlsIiwiZ2V0IiwidXNlclRvdGFsU2NvcmUiXSwic291cmNlUm9vdCI6IiJ9