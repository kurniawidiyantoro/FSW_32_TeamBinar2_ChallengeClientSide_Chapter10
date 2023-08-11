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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/gameRPS.module.css */ "./styles/gameRPS.module.css");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
<<<<<<< HEAD
var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamerps\\index.js";




=======
var _jsxFileName = "D:\\Bootcamp\\Challenge Chapter 10\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10-1\\pages\\gamerps\\index.js";


 // import { useNavigate } from 'react-router-dom';


 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d



function Game() {
<<<<<<< HEAD
=======
  // const navigate = useNavigate();
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: id,
    1: setId
<<<<<<< HEAD
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
=======
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
<<<<<<< HEAD
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
=======
    0: scores,
    1: setScores
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: result,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handleBackClick = () => {
<<<<<<< HEAD
=======
    // navigate('/gamelist');
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
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
  };

<<<<<<< HEAD
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
=======
  const updateScores = async () => {
    //setScores(prevScores => prevScores + 1);
    const token = localStorage.getItem("token");
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3005/usergame/update/scores', {
      id,
      scores: scores + 1
    }, {
      headers: {
        Authorization: `Basic ${token}`
      }
    });
    console.log(response.data.status);
  };

  const determineWinner = (playerMove, computerMove) => {
    if (playerMove === computerMove) {
      return "Draw!";
    } else if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
      updateScores();
      return `${username} win!`;
    } else {
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
      return 'Computer wins!';
    }
  };

  const handleReload = () => {
    setResult(null);
  };

<<<<<<< HEAD
  const updateScores = async () => {
    const gamename = 'gamerps';
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3005/gamehistory/insert', {
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

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const gamename = 'gamerps';
=======
  const checkToken = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
    console.log(token);
    console.log(email);

    try {
      if (!token) {
        console.log('Not Authorize !');
        navigate('/login'); // Ganti dengan useNavigate()
      } else {
<<<<<<< HEAD
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3005/gamehistory/get', {
          email,
          gamename
=======
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3005/usergame/get', {
          email
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
        }, {
          headers: {
            Authorization: `Basic ${token}`
          }
        });
        console.log(response.data.data);
        setId(response.data.data.id);
        setUsername(response.data.data.username);
<<<<<<< HEAD
        setRound(response.data.data.round);
        setStatus(response.data.data.status);
        setGetScore(response.data.data.getscore);
        setTotalScore(response.data.data.totalscore);
      }
    } catch (error) {
      console.log("Internal Server Error !");
=======
        setScores(response.data.data.scores);
      }
    } catch (error) {
      console.log("Internal Server Error !"); // navigate('/login'); // Ganti dengan useNavigate()

>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
      window.location.replace('/login');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
<<<<<<< HEAD
    checkToken();
=======
    checkToken(); //handleReload();
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 116,
=======
        lineNumber: 103,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 115,
=======
      lineNumber: 102,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
<<<<<<< HEAD
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
          children: "Rock Paper Scissors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().status),
          children: ["Status Last Round: ", status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().status),
          children: ["Current Round: ", round + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().status),
          children: ["Total Scores: ", totalscore]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
=======
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Rock Paper Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().score),
        children: ["Scores: ", scores]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 129,
=======
            lineNumber: 112,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            onClick: () => handlePlayerMove('rock'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 131,
=======
              lineNumber: 114,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 130,
=======
            lineNumber: 113,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            onClick: () => handlePlayerMove('paper'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 134,
=======
              lineNumber: 117,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 133,
=======
            lineNumber: 116,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            onClick: () => handlePlayerMove('scissors'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 137,
=======
              lineNumber: 120,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 136,
=======
            lineNumber: 119,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 128,
=======
          lineNumber: 111,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 141,
=======
            lineNumber: 124,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 143,
=======
              lineNumber: 126,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 142,
=======
            lineNumber: 125,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 146,
=======
              lineNumber: 129,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 145,
=======
            lineNumber: 128,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
<<<<<<< HEAD
              lineNumber: 149,
=======
              lineNumber: 132,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
<<<<<<< HEAD
            lineNumber: 148,
=======
            lineNumber: 131,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 140,
=======
          lineNumber: 123,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 127,
=======
        lineNumber: 110,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 155,
=======
          lineNumber: 138,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 156,
=======
          lineNumber: 139,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 157,
=======
          lineNumber: 140,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 154,
=======
        lineNumber: 137,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 160,
=======
        lineNumber: 143,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
<<<<<<< HEAD
      lineNumber: 120,
=======
      lineNumber: 107,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
<<<<<<< HEAD
    lineNumber: 114,
=======
    lineNumber: 101,
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

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
<<<<<<< HEAD
	"Container": "gameRPS_Container__V9YZB",
	"status": "gameRPS_status__325YB",
=======
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
	"score": "gameRPS_score__1BZL3",
	"p-count": "gameRPS_p-count__fj2zm",
	"c-count": "gameRPS_c-count__2ifG1",
	"button": "gameRPS_button__1QPie",
	"options": "gameRPS_options__AGcLI",
	"optionscom": "gameRPS_optionscom__2b1X3",
<<<<<<< HEAD
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
=======
	"moveBtn": "gameRPS_moveBtn__2ZxLX",
	"move": "gameRPS_move__1yXRy",
	"reload": "gameRPS_reload__3pJ-p",
	"result": "gameRPS_result__rd7Sm",
	"image": "gameRPS_image__26UaO",
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUREOztBQUVELGlFQUFlL0IsSUFBZjs7Ozs7Ozs7OztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3BhZ2VzL2dhbWVycHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2dhbWVSUFMubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyb3VuZCwgc2V0Um91bmRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZ2V0c2NvcmUsIHNldEdldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYXllck1vdmUgPSAocGxheWVyTW92ZSkgPT4ge1xyXG4gICAgY29uc3QgbW92ZXMgPSBbJ3JvY2snLCAncGFwZXInLCAnc2Npc3NvcnMnXTtcclxuICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9IG1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCldO1xyXG4gICAgY29uc3Qgd2lubmVyID0gZGV0ZXJtaW5lV2lubmVyKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSk7XHJcbiAgICBzZXRSZXN1bHQoeyBwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUsIHdpbm5lciB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKSA9PiB7XHJcbiAgICBpZiAocGxheWVyTW92ZSA9PT0gY29tcHV0ZXJNb3ZlKSB7XHJcbiAgICAgIHNldFJvdW5kKHJvdW5kICsgMSk7XHJcbiAgICAgIHNldFN0YXR1cygnZHJhdycpO1xyXG4gICAgICBzZXRHZXRTY29yZSgwKTtcclxuICAgICAgdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIHJldHVybiBcIkRyYXchXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3JvY2snICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3NjaXNzb3JzJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdwYXBlcicgJiYgY29tcHV0ZXJNb3ZlID09PSAncm9jaycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAnc2Npc3NvcnMnICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3BhcGVyJylcclxuICAgICkge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ3dpbicpO1xyXG4gICAgICBzZXRHZXRTY29yZSgxKTtcclxuICAgICAgc2V0VG90YWxTY29yZSh0b3RhbHNjb3JlICsgMSk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gYCR7dXNlcm5hbWV9IHdpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCdsb3NlJyk7XHJcbiAgICAgIHNldEdldFNjb3JlKDApO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zISc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9pbnNlcnQnLFxyXG4gICAgICAgIHsgZ2FtZW5hbWUsIGlkLCB1c2VybmFtZSwgZW1haWwsIHJvdW5kLCBzdGF0dXMsIGdldHNjb3JlLCB0b3RhbHNjb3JlIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc3QgZ2FtZW5hbWUgPSAnZ2FtZXJwcydcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IEF1dGhvcml6ZSAhJyk7XHJcbiAgICAgICAgbmF2aWdhdGUoJy9sb2dpbicpOyAvLyBHYW50aSBkZW5nYW4gdXNlTmF2aWdhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0Um91bmQocmVzcG9uc2UuZGF0YS5kYXRhLnJvdW5kKTtcclxuICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2UuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgc2V0R2V0U2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLmdldHNjb3JlKTtcclxuICAgICAgICBzZXRUb3RhbFNjb3JlKHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PlN0YXR1cyBMYXN0IFJvdW5kOiB7c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PkN1cnJlbnQgUm91bmQ6IHtyb3VuZCArIDF9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+VG90YWwgU2NvcmVzOiB7dG90YWxzY29yZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2dyb3VuZFwiOiBcImdhbWVSUFNfYmFja2dyb3VuZF9fTl90WE5cIixcblx0XCJncmlkQ29udGFpbmVyXCI6IFwiZ2FtZVJQU19ncmlkQ29udGFpbmVyX18zVlVlQlwiLFxuXHRcImdyaWRJdGVtXCI6IFwiZ2FtZVJQU19ncmlkSXRlbV9fMlFXN25cIixcblx0XCJnYW1lXCI6IFwiZ2FtZVJQU19nYW1lX18zQlVZWFwiLFxuXHRcInRpdGxlXCI6IFwiZ2FtZVJQU190aXRsZV9fMnVUa3ZcIixcblx0XCJDb250YWluZXJcIjogXCJnYW1lUlBTX0NvbnRhaW5lcl9fVjlZWkJcIixcblx0XCJzdGF0dXNcIjogXCJnYW1lUlBTX3N0YXR1c19fMzI1WUJcIixcblx0XCJzY29yZVwiOiBcImdhbWVSUFNfc2NvcmVfXzFCWkwzXCIsXG5cdFwicC1jb3VudFwiOiBcImdhbWVSUFNfcC1jb3VudF9fZmoyem1cIixcblx0XCJjLWNvdW50XCI6IFwiZ2FtZVJQU19jLWNvdW50X18yaWZHMVwiLFxuXHRcImJ1dHRvblwiOiBcImdhbWVSUFNfYnV0dG9uX18xUVBpZVwiLFxuXHRcIm9wdGlvbnNcIjogXCJnYW1lUlBTX29wdGlvbnNfX0FHY0xJXCIsXG5cdFwib3B0aW9uc2NvbVwiOiBcImdhbWVSUFNfb3B0aW9uc2NvbV9fMmIxWDNcIixcblx0XCJyb2NrXCI6IFwiZ2FtZVJQU19yb2NrX18zdnZNY1wiLFxuXHRcInBhcGVyXCI6IFwiZ2FtZVJQU19wYXBlcl9fM09zaFFcIixcblx0XCJzY2lzc29yXCI6IFwiZ2FtZVJQU19zY2lzc29yX18zNDRoc1wiLFxuXHRcInJvY2tjb21cIjogXCJnYW1lUlBTX3JvY2tjb21fXzFGeHpoXCIsXG5cdFwicGFwZXJjb21cIjogXCJnYW1lUlBTX3BhcGVyY29tX18zcUFQbFwiLFxuXHRcInNjaXNzb3Jjb21cIjogXCJnYW1lUlBTX3NjaXNzb3Jjb21fXzFiNmFiXCIsXG5cdFwibW92ZVwiOiBcImdhbWVSUFNfbW92ZV9fMXlYUnlcIixcblx0XCJyZWxvYWRcIjogXCJnYW1lUlBTX3JlbG9hZF9fM3BKLXBcIixcblx0XCJyZXN1bHRcIjogXCJnYW1lUlBTX3Jlc3VsdF9fcmQ3U21cIixcblx0XCJJbWFnZVwiOiBcImdhbWVSUFNfSW1hZ2VfXzFaSmZNXCIsXG5cdFwibW92ZUJ0blwiOiBcImdhbWVSUFNfbW92ZUJ0bl9fMlp4TFhcIixcblx0XCJzZWxlY3RlZFwiOiBcImdhbWVSUFNfc2VsZWN0ZWRfXzEzRWNEXCIsXG5cdFwic2VsZWN0ZWQtY29tcHV0ZXJcIjogXCJnYW1lUlBTX3NlbGVjdGVkLWNvbXB1dGVyX18xSnZIY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsIkdhbWUiLCJyb3V0ZXIiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInJvdW5kIiwic2V0Um91bmQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJnZXRzY29yZSIsInNldEdldFNjb3JlIiwidG90YWxzY29yZSIsInNldFRvdGFsU2NvcmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJoYW5kbGVQbGF5ZXJNb3ZlIiwicGxheWVyTW92ZSIsIm1vdmVzIiwiY29tcHV0ZXJNb3ZlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwid2lubmVyIiwiZGV0ZXJtaW5lV2lubmVyIiwidXBkYXRlU2NvcmVzIiwiaGFuZGxlUmVsb2FkIiwiZ2FtZW5hbWUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbWFpbCIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjaGVja1Rva2VuIiwibmF2aWdhdGUiLCJlcnJvciIsImJhY2tncm91bmQiLCJnYW1lIiwiQ29udGFpbmVyIiwidGl0bGUiLCJncmlkQ29udGFpbmVyIiwiZ3JpZEl0ZW0iLCJtb3ZlIiwibW92ZUJ0biIsIkltYWdlIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUVBQVlrRDtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsRUE2Qkd6QyxNQUFNLGlCQUNMO0FBQUssaUJBQVMsRUFBRVQsMEVBQWhCO0FBQUEsZ0NBQ0U7QUFBQSxvQ0FBZVMsTUFBTSxDQUFDTyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHlDQUFvQlAsTUFBTSxDQUFDUyxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUFJVCxNQUFNLENBQUNjO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkosZUFvQ0U7QUFBUSxpQkFBUyxFQUFFdkIsMEVBQW5CO0FBQWtDLGVBQU8sRUFBRXFDLFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztBQUVELGlFQUFlcEMsSUFBZjs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZXJwcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzJztcclxuLy8gaW1wb3J0IGJhdHVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHUucG5nJztcclxuLy8gaW1wb3J0IGtlcnRhc0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2VydGFzLnBuZyc7XHJcbi8vIGltcG9ydCBndW50aW5nSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ndW50aW5nLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBuYXZpZ2F0ZSgnL2dhbWVsaXN0Jyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVsaXN0Jyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxheWVyTW92ZSA9IChwbGF5ZXJNb3ZlKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlcyA9IFsncm9jaycsICdwYXBlcicsICdzY2lzc29ycyddO1xyXG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID0gbW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKV07XHJcbiAgICBjb25zdCB3aW5uZXIgPSBkZXRlcm1pbmVXaW5uZXIocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKTtcclxuICAgIHNldFJlc3VsdCh7IHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSwgd2lubmVyIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vc2V0U2NvcmVzKHByZXZTY29yZXMgPT4gcHJldlNjb3JlcyArIDEpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvdXBkYXRlL3Njb3JlcycsXHJcbiAgICAgICAgeyBpZCwgc2NvcmVzOiBzY29yZXMgKyAxIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKSA9PiB7XHJcbiAgICBpZiAocGxheWVyTW92ZSA9PT0gY29tcHV0ZXJNb3ZlKSB7XHJcbiAgICAgIHJldHVybiBcIkRyYXchXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3JvY2snICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3NjaXNzb3JzJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdwYXBlcicgJiYgY29tcHV0ZXJNb3ZlID09PSAncm9jaycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAnc2Npc3NvcnMnICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3BhcGVyJylcclxuICAgICkge1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuIGAke3VzZXJuYW1lfSB3aW4hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyEnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbG9hZCA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIC8vIG5hdmlnYXRlKCcvbG9naW4nKTsgLy8gR2FudGkgZGVuZ2FuIHVzZU5hdmlnYXRlKClcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgICAvL2hhbmRsZVJlbG9hZCgpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PlNjb3Jlczoge3Njb3Jlc308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2dyb3VuZFwiOiBcImdhbWVSUFNfYmFja2dyb3VuZF9fTl90WE5cIixcblx0XCJncmlkQ29udGFpbmVyXCI6IFwiZ2FtZVJQU19ncmlkQ29udGFpbmVyX18zVlVlQlwiLFxuXHRcImdyaWRJdGVtXCI6IFwiZ2FtZVJQU19ncmlkSXRlbV9fMlFXN25cIixcblx0XCJnYW1lXCI6IFwiZ2FtZVJQU19nYW1lX18zQlVZWFwiLFxuXHRcInRpdGxlXCI6IFwiZ2FtZVJQU190aXRsZV9fMnVUa3ZcIixcblx0XCJzY29yZVwiOiBcImdhbWVSUFNfc2NvcmVfXzFCWkwzXCIsXG5cdFwicC1jb3VudFwiOiBcImdhbWVSUFNfcC1jb3VudF9fZmoyem1cIixcblx0XCJjLWNvdW50XCI6IFwiZ2FtZVJQU19jLWNvdW50X18yaWZHMVwiLFxuXHRcImJ1dHRvblwiOiBcImdhbWVSUFNfYnV0dG9uX18xUVBpZVwiLFxuXHRcIm9wdGlvbnNcIjogXCJnYW1lUlBTX29wdGlvbnNfX0FHY0xJXCIsXG5cdFwib3B0aW9uc2NvbVwiOiBcImdhbWVSUFNfb3B0aW9uc2NvbV9fMmIxWDNcIixcblx0XCJtb3ZlQnRuXCI6IFwiZ2FtZVJQU19tb3ZlQnRuX18yWnhMWFwiLFxuXHRcIm1vdmVcIjogXCJnYW1lUlBTX21vdmVfXzF5WFJ5XCIsXG5cdFwicmVsb2FkXCI6IFwiZ2FtZVJQU19yZWxvYWRfXzNwSi1wXCIsXG5cdFwicmVzdWx0XCI6IFwiZ2FtZVJQU19yZXN1bHRfX3JkN1NtXCIsXG5cdFwiaW1hZ2VcIjogXCJnYW1lUlBTX2ltYWdlX18yNlVhT1wiLFxuXHRcInNlbGVjdGVkXCI6IFwiZ2FtZVJQU19zZWxlY3RlZF9fMTNFY0RcIixcblx0XCJzZWxlY3RlZC1jb21wdXRlclwiOiBcImdhbWVSUFNfc2VsZWN0ZWQtY29tcHV0ZXJfXzFKdkhjXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF4aW9zIiwiQnV0dG9uIiwic3R5bGVzIiwiR2FtZSIsInJvdXRlciIsImlkIiwic2V0SWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2NvcmVzIiwic2V0U2NvcmVzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlUGxheWVyTW92ZSIsInBsYXllck1vdmUiLCJtb3ZlcyIsImNvbXB1dGVyTW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIndpbm5lciIsImRldGVybWluZVdpbm5lciIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXMiLCJoYW5kbGVSZWxvYWQiLCJjaGVja1Rva2VuIiwiZW1haWwiLCJuYXZpZ2F0ZSIsImVycm9yIiwiYmFja2dyb3VuZCIsImdhbWUiLCJ0aXRsZSIsInNjb3JlIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwibW92ZSIsIm1vdmVCdG4iLCJJbWFnZSIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> f8507369fbedc281bf776d468f68f51031cfed1d
