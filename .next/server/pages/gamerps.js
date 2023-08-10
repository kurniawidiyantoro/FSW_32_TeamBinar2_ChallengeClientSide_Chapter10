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
var _jsxFileName = "D:\\Bootcamp\\Challenge Chapter 10\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10-1\\pages\\gamerps\\index.js";


 // import { useNavigate } from 'react-router-dom';


 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';



function Game() {
  // const navigate = useNavigate();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

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
  };

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
      return 'Computer wins!';
    }
  };

  const handleReload = () => {
    setResult(null);
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
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3005/usergame/get', {
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
      console.log("Internal Server Error !"); // navigate('/login'); // Ganti dengan useNavigate()

      window.location.replace('/login');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkToken(); //handleReload();
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
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
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
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
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
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
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
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().gridItem),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
              lineNumber: 126,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
              lineNumber: 129,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
              lineNumber: 132,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_5___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
	"score": "gameRPS_score__1BZL3",
	"p-count": "gameRPS_p-count__fj2zm",
	"c-count": "gameRPS_c-count__2ifG1",
	"button": "gameRPS_button__1QPie",
	"options": "gameRPS_options__AGcLI",
	"optionscom": "gameRPS_optionscom__2b1X3",
	"moveBtn": "gameRPS_moveBtn__2ZxLX",
	"move": "gameRPS_move__1yXRy",
	"reload": "gameRPS_reload__3pJ-p",
	"result": "gameRPS_result__rd7Sm",
	"image": "gameRPS_image__26UaO",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUVBQVlrRDtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsRUE2Qkd6QyxNQUFNLGlCQUNMO0FBQUssaUJBQVMsRUFBRVQsMEVBQWhCO0FBQUEsZ0NBQ0U7QUFBQSxvQ0FBZVMsTUFBTSxDQUFDTyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHlDQUFvQlAsTUFBTSxDQUFDUyxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUFJVCxNQUFNLENBQUNjO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkosZUFvQ0U7QUFBUSxpQkFBUyxFQUFFdkIsMEVBQW5CO0FBQWtDLGVBQU8sRUFBRXFDLFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztBQUVELGlFQUFlcEMsSUFBZjs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0Ly4vcGFnZXMvZ2FtZXJwcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC8uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FydGljbGUtd2l0aC1uZXh0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS13aXRoLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9hcnRpY2xlLXdpdGgtbmV4dC9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzJztcclxuLy8gaW1wb3J0IGJhdHVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHUucG5nJztcclxuLy8gaW1wb3J0IGtlcnRhc0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2VydGFzLnBuZyc7XHJcbi8vIGltcG9ydCBndW50aW5nSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ndW50aW5nLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBuYXZpZ2F0ZSgnL2dhbWVsaXN0Jyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2dhbWVsaXN0Jyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxheWVyTW92ZSA9IChwbGF5ZXJNb3ZlKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlcyA9IFsncm9jaycsICdwYXBlcicsICdzY2lzc29ycyddO1xyXG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID0gbW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKV07XHJcbiAgICBjb25zdCB3aW5uZXIgPSBkZXRlcm1pbmVXaW5uZXIocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKTtcclxuICAgIHNldFJlc3VsdCh7IHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSwgd2lubmVyIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vc2V0U2NvcmVzKHByZXZTY29yZXMgPT4gcHJldlNjb3JlcyArIDEpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvdXBkYXRlL3Njb3JlcycsXHJcbiAgICAgICAgeyBpZCwgc2NvcmVzOiBzY29yZXMgKyAxIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKSA9PiB7XHJcbiAgICBpZiAocGxheWVyTW92ZSA9PT0gY29tcHV0ZXJNb3ZlKSB7XHJcbiAgICAgIHJldHVybiBcIkRyYXchXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3JvY2snICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3NjaXNzb3JzJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdwYXBlcicgJiYgY29tcHV0ZXJNb3ZlID09PSAncm9jaycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAnc2Npc3NvcnMnICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3BhcGVyJylcclxuICAgICkge1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuIGAke3VzZXJuYW1lfSB3aW4hYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyEnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbG9hZCA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7IC8vIEdhbnRpIGRlbmdhbiB1c2VOYXZpZ2F0ZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcmdhbWUvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldElkKHJlc3BvbnNlLmRhdGEuZGF0YS5pZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YS5kYXRhLnNjb3Jlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yICFcIik7XHJcbiAgICAgIC8vIG5hdmlnYXRlKCcvbG9naW4nKTsgLy8gR2FudGkgZGVuZ2FuIHVzZU5hdmlnYXRlKClcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1Rva2VuKCk7XHJcbiAgICAvL2hhbmRsZVJlbG9hZCgpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PlNjb3Jlczoge3Njb3Jlc308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2dyb3VuZFwiOiBcImdhbWVSUFNfYmFja2dyb3VuZF9fTl90WE5cIixcblx0XCJncmlkQ29udGFpbmVyXCI6IFwiZ2FtZVJQU19ncmlkQ29udGFpbmVyX18zVlVlQlwiLFxuXHRcImdyaWRJdGVtXCI6IFwiZ2FtZVJQU19ncmlkSXRlbV9fMlFXN25cIixcblx0XCJnYW1lXCI6IFwiZ2FtZVJQU19nYW1lX18zQlVZWFwiLFxuXHRcInRpdGxlXCI6IFwiZ2FtZVJQU190aXRsZV9fMnVUa3ZcIixcblx0XCJzY29yZVwiOiBcImdhbWVSUFNfc2NvcmVfXzFCWkwzXCIsXG5cdFwicC1jb3VudFwiOiBcImdhbWVSUFNfcC1jb3VudF9fZmoyem1cIixcblx0XCJjLWNvdW50XCI6IFwiZ2FtZVJQU19jLWNvdW50X18yaWZHMVwiLFxuXHRcImJ1dHRvblwiOiBcImdhbWVSUFNfYnV0dG9uX18xUVBpZVwiLFxuXHRcIm9wdGlvbnNcIjogXCJnYW1lUlBTX29wdGlvbnNfX0FHY0xJXCIsXG5cdFwib3B0aW9uc2NvbVwiOiBcImdhbWVSUFNfb3B0aW9uc2NvbV9fMmIxWDNcIixcblx0XCJtb3ZlQnRuXCI6IFwiZ2FtZVJQU19tb3ZlQnRuX18yWnhMWFwiLFxuXHRcIm1vdmVcIjogXCJnYW1lUlBTX21vdmVfXzF5WFJ5XCIsXG5cdFwicmVsb2FkXCI6IFwiZ2FtZVJQU19yZWxvYWRfXzNwSi1wXCIsXG5cdFwicmVzdWx0XCI6IFwiZ2FtZVJQU19yZXN1bHRfX3JkN1NtXCIsXG5cdFwiaW1hZ2VcIjogXCJnYW1lUlBTX2ltYWdlX18yNlVhT1wiLFxuXHRcInNlbGVjdGVkXCI6IFwiZ2FtZVJQU19zZWxlY3RlZF9fMTNFY0RcIixcblx0XCJzZWxlY3RlZC1jb21wdXRlclwiOiBcImdhbWVSUFNfc2VsZWN0ZWQtY29tcHV0ZXJfXzFKdkhjXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF4aW9zIiwiQnV0dG9uIiwic3R5bGVzIiwiR2FtZSIsInJvdXRlciIsImlkIiwic2V0SWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2NvcmVzIiwic2V0U2NvcmVzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlUGxheWVyTW92ZSIsInBsYXllck1vdmUiLCJtb3ZlcyIsImNvbXB1dGVyTW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIndpbm5lciIsImRldGVybWluZVdpbm5lciIsInVwZGF0ZVNjb3JlcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXMiLCJoYW5kbGVSZWxvYWQiLCJjaGVja1Rva2VuIiwiZW1haWwiLCJuYXZpZ2F0ZSIsImVycm9yIiwiYmFja2dyb3VuZCIsImdhbWUiLCJ0aXRsZSIsInNjb3JlIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwibW92ZSIsIm1vdmVCdG4iLCJJbWFnZSIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=