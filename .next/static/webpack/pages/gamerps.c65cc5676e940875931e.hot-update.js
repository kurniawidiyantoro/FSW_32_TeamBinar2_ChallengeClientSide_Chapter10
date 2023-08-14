"use strict";
self["webpackHotUpdate_N_E"]("pages/gamerps",{

/***/ "./pages/gamerps/index.js":
/*!********************************!*\
  !*** ./pages/gamerps/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/gameRPS.module.css */ "./styles/gameRPS.module.css");
/* harmony import */ var _styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Binar\\Chapter 10\\challenge\\FSW_32_TeamBinar2_ChallengeClientSide_Chapter10\\pages\\gamerps\\index.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import { useNavigate } from 'react-router-dom';




 // import batuImage from '../../assets/images/batu.png';
// import kertasImage from '../../assets/images/kertas.png';
// import guntingImage from '../../assets/images/gunting.png';




function Game() {
  _s();

  // const navigate = useNavigate();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      round = _useState3[0],
      setRound = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      getscore = _useState5[0],
      setGetScore = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      totalscore = _useState6[0],
      setTotalScore = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      result = _useState7[0],
      setResult = _useState7[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var playedGames = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.reducer.playedGames;
  });

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1];

  var handleBackClick = function handleBackClick() {
    // navigate('/gamelist');
    window.location.replace('/gamelist');
  };

  var handlePlayerMove = function handlePlayerMove(playerMove) {
    var moves = ['rock', 'paper', 'scissors'];
    var computerMove = moves[Math.floor(Math.random() * moves.length)];
    var winner = determineWinner(playerMove, computerMove);
    setResult({
      playerMove: playerMove,
      computerMove: computerMove,
      winner: winner
    });
    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_4__.setPlayedGames)(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamerps': true
    })));
    console.log("Played Games:", playedGames);
    localStorage.setItem('playedGames', JSON.stringify(_objectSpread(_objectSpread({}, playedGames), {}, {
      '/gamerps': true
    })));
  };

  var updateScores = /*#__PURE__*/function () {
    var _ref = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var gamename, token, email, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              gamename = 'gamerps';
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/gamehistory/insert', {
                gamename: gamename,
                id: id,
                username: username,
                email: email,
                round: round,
                status: status,
                getscore: getscore,
                totalscore: totalscore
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 5:
              response = _context.sent;
              console.log(response.data.status);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateScores() {
      return _ref.apply(this, arguments);
    };
  }();

  var determineWinner = function determineWinner(playerMove, computerMove) {
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
      return "".concat(username, " win!");
    } else {
      setRound(round + 1);
      setStatus('lose');
      setGetScore(0);
      updateScores();
      return 'Computer wins!';
    }
  };

  var handleReload = function handleReload() {
    setResult(null);
  };

  var checkToken = /*#__PURE__*/function () {
    var _ref2 = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var token, email, gamename, response;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = localStorage.getItem("token");
              email = localStorage.getItem("email");
              gamename = 'gamerps';
              console.log(token);
              console.log(email);
              _context2.prev = 5;

              if (token) {
                _context2.next = 11;
                break;
              }

              console.log('Not Authorize !');
              window.location.replace('/login');
              _context2.next = 21;
              break;

            case 11:
              _context2.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_7__.default.post('http://localhost:3005/gamehistory/get', {
                email: email,
                gamename: gamename
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 13:
              response = _context2.sent;
              console.log(response.data.data);
              setId(response.data.data.id);
              setUsername(response.data.data.username);
              setRound(response.data.data.round);
              setStatus(response.data.data.status);
              setGetScore(response.data.data.getscore);
              setTotalScore(response.data.data.totalscore);

            case 21:
              _context2.next = 27;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](5);
              console.log("Internal Server Error !");
              window.location.replace('/login');

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 23]]);
    }));

    return function checkToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return checkToken();

              case 3:
                setIsLoading(false);
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                setIsLoading(false);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
        color: "primary",
        onClick: handleBackClick,
        children: "Kembali"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().game),
      children: [isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().skeletonContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
          active: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
          children: "Rock Paper Scissors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().status),
          children: ["Status Last Round: ", status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().status),
          children: ["Current Round: ", round + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().status),
          children: ["Total Scores: ", totalscore]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridItem), " ").concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().options)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().move),
            children: "Choose your move"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('rock');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('paper');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            onClick: function onClick() {
              return handlePlayerMove('scissors');
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridItem), " ").concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().options)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/batu.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: '/images/kertas.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().moveBtn),
            disabled: true,
            children: result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: './images/gunting.png',
              alt: "",
              className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

_s(Game, "3wHmCX7lxGA+OgMB9rX4cBFlphI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c = Game;
/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c;

$RefreshReg$(_c, "Game");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy5jNjVjYzU2NzZlOTQwODc1OTMxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUVBLFNBQVNXLElBQVQsR0FBZ0I7QUFBQTs7QUFDZDtBQUNBLGtCQUFvQlYsK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT1csRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQmQsK0NBQVEsQ0FBQyxDQUFELENBQWxDO0FBQUEsTUFBT2UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTRCaEIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2lCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFnQ2xCLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUFBLE1BQU9tQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFvQ3BCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9xQixVQUFQO0FBQUEsTUFBbUJmLGFBQW5COztBQUNBLG1CQUE0Qk4sK0NBQVEsQ0FBQyxJQUFELENBQXBDO0FBQUEsTUFBT3NCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLFFBQVEsR0FBR2pCLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTWtCLFdBQVcsR0FBR2pCLHdEQUFXLENBQUMsVUFBQWtCLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsV0FBbEI7QUFBQSxHQUFOLENBQS9COztBQUNBLG1CQUFrQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU80QixTQUFQO0FB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QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLEVBdUNHbkQsTUFBTSxpQkFDTDtBQUFLLGlCQUFTLEVBQUVsQiwwRUFBaEI7QUFBQSxnQ0FDRTtBQUFBLG9DQUFla0IsTUFBTSxDQUFDYSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHlDQUFvQmIsTUFBTSxDQUFDZSxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUFJZixNQUFNLENBQUNvQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENKLGVBOENFO0FBQVEsaUJBQVMsRUFBRXRDLDBFQUFuQjtBQUFrQyxlQUFPLEVBQUV3RCxZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0FwTFFsRDtVQVNVSCxzREFDR0M7OztLQVZiRTtBQXNMVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lcnBzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2FtZVJQUy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtzZXRQbGF5ZWRHYW1lcywgc2V0VG90YWxTY29yZSAgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IGJhdHVJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhdHUucG5nJztcclxuLy8gaW1wb3J0IGtlcnRhc0ltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2VydGFzLnBuZyc7XHJcbi8vIGltcG9ydCBndW50aW5nSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9ndW50aW5nLnBuZyc7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyb3VuZCwgc2V0Um91bmRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZ2V0c2NvcmUsIHNldEdldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbHNjb3JlLCBzZXRUb3RhbFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheWVkR2FtZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWR1Y2VyLnBsYXllZEdhbWVzKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcclxuICAgIC8vIG5hdmlnYXRlKCcvZ2FtZWxpc3QnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZWxpc3QnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGF5ZXJNb3ZlID0gKHBsYXllck1vdmUpID0+IHtcclxuICAgIGNvbnN0IG1vdmVzID0gWydyb2NrJywgJ3BhcGVyJywgJ3NjaXNzb3JzJ107XHJcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPSBtb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHdpbm5lciA9IGRldGVybWluZVdpbm5lcihwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUpO1xyXG4gICAgc2V0UmVzdWx0KHsgcGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlLCB3aW5uZXIgfSk7XHJcbiAgICBkaXNwYXRjaChzZXRQbGF5ZWRHYW1lcyh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVycHMnOiB0cnVlIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVkIEdhbWVzOlwiLCBwbGF5ZWRHYW1lcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVkR2FtZXMnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBsYXllZEdhbWVzLCAnL2dhbWVycHMnOiB0cnVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJ1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvaW5zZXJ0JyxcclxuICAgICAgICB7IGdhbWVuYW1lLCBpZCwgdXNlcm5hbWUsIGVtYWlsLCByb3VuZCwgc3RhdHVzLCBnZXRzY29yZSwgdG90YWxzY29yZSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lV2lubmVyID0gKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSkgPT4ge1xyXG4gICAgaWYgKHBsYXllck1vdmUgPT09IGNvbXB1dGVyTW92ZSkge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ2RyYXcnKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMCk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gXCJEcmF3IVwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdyb2NrJyAmJiBjb21wdXRlck1vdmUgPT09ICdzY2lzc29ycycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAncGFwZXInICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3JvY2snKSB8fFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3NjaXNzb3JzJyAmJiBjb21wdXRlck1vdmUgPT09ICdwYXBlcicpXHJcbiAgICApIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCd3aW4nKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMSk7XHJcbiAgICAgIHNldFRvdGFsU2NvcmUodG90YWxzY29yZSArIDEpO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgZGlzcGF0Y2goc2V0VG90YWxTY29yZSh0b3RhbHNjb3JlICsgMSkpO1xyXG4gICAgICByZXR1cm4gYCR7dXNlcm5hbWV9IHdpbiFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Um91bmQocm91bmQgKyAxKTtcclxuICAgICAgc2V0U3RhdHVzKCdsb3NlJyk7XHJcbiAgICAgIHNldEdldFNjb3JlKDApO1xyXG4gICAgICB1cGRhdGVTY29yZXMoKTtcclxuICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zISc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJ1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplICEnKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7IFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldCcsXHJcbiAgICAgICAgICB7IGVtYWlsLCBnYW1lbmFtZSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SWQocmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0Um91bmQocmVzcG9uc2UuZGF0YS5kYXRhLnJvdW5kKTtcclxuICAgICAgICBzZXRTdGF0dXMocmVzcG9uc2UuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgc2V0R2V0U2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLmdldHNjb3JlKTtcclxuICAgICAgICBzZXRUb3RhbFNjb3JlKHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IgIVwiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY2hlY2tUb2tlbigpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVCYWNrQ2xpY2t9PlxyXG4gICAgICAgICAgS2VtYmFsaVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tlbGV0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8U2tlbGV0b24gYWN0aXZlIC8+IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+U3RhdHVzIExhc3QgUm91bmQ6IHtzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5DdXJyZW50IFJvdW5kOiB7cm91bmQgKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+VG90YWwgU2NvcmVzOiB7dG90YWxzY29yZX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRJdGVtfSAke3N0eWxlcy5vcHRpb25zfWB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92ZX0+Q2hvb3NlIHlvdXIgbW92ZTwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgncm9jaycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvYmF0dS5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgncGFwZXInKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL2tlcnRhcy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWVyTW92ZSgnc2Npc3NvcnMnKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9eycuL2ltYWdlcy9ndW50aW5nLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncmlkSXRlbX0gJHtzdHlsZXMub3B0aW9uc31gfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PkNvbXB1dGVyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW92ZUJ0bn0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAge3Jlc3VsdCAmJiA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PlxyXG4gICAgICAgICAgICA8cD5Zb3UgY2hvc2U6IHtyZXN1bHQucGxheWVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPkNvbXB1dGVyIGNob3NlOiB7cmVzdWx0LmNvbXB1dGVyTW92ZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXN1bHQud2lubmVyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZWxvYWR9IG9uQ2xpY2s9e2hhbmRsZVJlbG9hZH0+XHJcbiAgICAgICAgICBQbGF5IEFnYWluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJCdXR0b24iLCJzdHlsZXMiLCJzZXRQbGF5ZWRHYW1lcyIsInNldFRvdGFsU2NvcmUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiU2tlbGV0b24iLCJHYW1lIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3VuZCIsInNldFJvdW5kIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2V0c2NvcmUiLCJzZXRHZXRTY29yZSIsInRvdGFsc2NvcmUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJkaXNwYXRjaCIsInBsYXllZEdhbWVzIiwic3RhdGUiLCJyZWR1Y2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlQmFja0NsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlUGxheWVyTW92ZSIsInBsYXllck1vdmUiLCJtb3ZlcyIsImNvbXB1dGVyTW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIndpbm5lciIsImRldGVybWluZVdpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZVNjb3JlcyIsImdhbWVuYW1lIiwidG9rZW4iLCJnZXRJdGVtIiwiZW1haWwiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImRhdGEiLCJoYW5kbGVSZWxvYWQiLCJjaGVja1Rva2VuIiwiZmV0Y2hEYXRhIiwiYmFja2dyb3VuZCIsImdhbWUiLCJza2VsZXRvbkNvbnRhaW5lciIsIkNvbnRhaW5lciIsInRpdGxlIiwiZ3JpZENvbnRhaW5lciIsImdyaWRJdGVtIiwib3B0aW9ucyIsIm1vdmUiLCJtb3ZlQnRuIiwiSW1hZ2UiLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9