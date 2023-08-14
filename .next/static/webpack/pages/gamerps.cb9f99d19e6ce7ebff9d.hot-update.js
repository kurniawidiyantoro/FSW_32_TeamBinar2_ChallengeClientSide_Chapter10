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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
        children: "Rock Paper Scissors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }, this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().skeletonContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
          active: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().Container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().status),
          children: ["Status Last Round: ", status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().status),
          children: ["Current Round: ", round + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().status),
          children: ["Total Scores: ", totalscore]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
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
            lineNumber: 157,
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
              lineNumber: 159,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
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
              lineNumber: 162,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
              lineNumber: 165,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "".concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridItem), " ").concat((_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().options)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().move),
            children: "Computer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
              lineNumber: 171,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
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
              lineNumber: 174,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
              lineNumber: 177,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().result),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["You chose: ", result.playerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: ["Computer chose: ", result.computerMove]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: result.winner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: (_styles_gameRPS_module_css__WEBPACK_IMPORTED_MODULE_8___default().reload),
        onClick: handleReload,
        children: "Play Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZXJwcy5jYjlmOTlkMTllNmNlN2ViZmY5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUVBLFNBQVNXLElBQVQsR0FBZ0I7QUFBQTs7QUFDZDtBQUNBLGtCQUFvQlYsK0NBQVEsQ0FBQyxJQUFELENBQTVCO0FBQUEsTUFBT1csRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPYSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQmQsK0NBQVEsQ0FBQyxDQUFELENBQWxDO0FBQUEsTUFBT2UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQTRCaEIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT2lCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFnQ2xCLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUFBLE1BQU9tQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFvQ3BCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9xQixVQUFQO0FBQUEsTUFBbUJmLGFBQW5COztBQUNBLG1CQUE0Qk4sK0NBQVEsQ0FBQyxJQUFELENBQXBDO0FBQUEsTUFBT3NCLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLFFBQVEsR0FBR2pCLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTWtCLFdBQVcsR0FBR2pCLHdEQUFXLENBQUMsVUFBQWtCLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsV0FBbEI7QUFBQSxHQUFOLENBQS9COztBQUNBLG1CQUFrQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU80QixTQUFQO0FB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QUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsRUF3Q0duRCxNQUFNLGlCQUNMO0FBQUssaUJBQVMsRUFBRWxCLDBFQUFoQjtBQUFBLGdDQUNFO0FBQUEsb0NBQWVrQixNQUFNLENBQUNhLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEseUNBQW9CYixNQUFNLENBQUNlLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEsb0JBQUlmLE1BQU0sQ0FBQ29CO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0osZUErQ0U7QUFBUSxpQkFBUyxFQUFFdEMsMEVBQW5CO0FBQWtDLGVBQU8sRUFBRXdELFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEREOztHQXJMUWxEO1VBU1VILHNEQUNHQzs7O0tBVmJFO0FBdUxULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVycHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nYW1lUlBTLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge3NldFBsYXllZEdhbWVzLCBzZXRUb3RhbFNjb3JlICB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgYmF0dUltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmF0dS5wbmcnO1xyXG4vLyBpbXBvcnQga2VydGFzSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9rZXJ0YXMucG5nJztcclxuLy8gaW1wb3J0IGd1bnRpbmdJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2d1bnRpbmcucG5nJztcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgLy8gY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JvdW5kLCBzZXRSb3VuZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtnZXRzY29yZSwgc2V0R2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsc2NvcmUsIHNldFRvdGFsU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBwbGF5ZWRHYW1lcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJlZHVjZXIucGxheWVkR2FtZXMpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gbmF2aWdhdGUoJy9nYW1lbGlzdCcpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9nYW1lbGlzdCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYXllck1vdmUgPSAocGxheWVyTW92ZSkgPT4ge1xyXG4gICAgY29uc3QgbW92ZXMgPSBbJ3JvY2snLCAncGFwZXInLCAnc2Npc3NvcnMnXTtcclxuICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9IG1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vdmVzLmxlbmd0aCldO1xyXG4gICAgY29uc3Qgd2lubmVyID0gZGV0ZXJtaW5lV2lubmVyKHBsYXllck1vdmUsIGNvbXB1dGVyTW92ZSk7XHJcbiAgICBzZXRSZXN1bHQoeyBwbGF5ZXJNb3ZlLCBjb21wdXRlck1vdmUsIHdpbm5lciB9KTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllZEdhbWVzKHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZXJwcyc6IHRydWUgfSkpO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZWQgR2FtZXM6XCIsIHBsYXllZEdhbWVzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZWRHYW1lcycsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGxheWVkR2FtZXMsICcvZ2FtZXJwcyc6IHRydWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9pbnNlcnQnLFxyXG4gICAgICAgIHsgZ2FtZW5hbWUsIGlkLCB1c2VybmFtZSwgZW1haWwsIHJvdW5kLCBzdGF0dXMsIGdldHNjb3JlLCB0b3RhbHNjb3JlIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVXaW5uZXIgPSAocGxheWVyTW92ZSwgY29tcHV0ZXJNb3ZlKSA9PiB7XHJcbiAgICBpZiAocGxheWVyTW92ZSA9PT0gY29tcHV0ZXJNb3ZlKSB7XHJcbiAgICAgIHNldFJvdW5kKHJvdW5kICsgMSk7XHJcbiAgICAgIHNldFN0YXR1cygnZHJhdycpO1xyXG4gICAgICBzZXRHZXRTY29yZSgwKTtcclxuICAgICAgdXBkYXRlU2NvcmVzKCk7XHJcbiAgICAgIHJldHVybiBcIkRyYXchXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAocGxheWVyTW92ZSA9PT0gJ3JvY2snICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3NjaXNzb3JzJykgfHxcclxuICAgICAgKHBsYXllck1vdmUgPT09ICdwYXBlcicgJiYgY29tcHV0ZXJNb3ZlID09PSAncm9jaycpIHx8XHJcbiAgICAgIChwbGF5ZXJNb3ZlID09PSAnc2Npc3NvcnMnICYmIGNvbXB1dGVyTW92ZSA9PT0gJ3BhcGVyJylcclxuICAgICkge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ3dpbicpO1xyXG4gICAgICBzZXRHZXRTY29yZSgxKTtcclxuICAgICAgc2V0VG90YWxTY29yZSh0b3RhbHNjb3JlICsgMSk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICBkaXNwYXRjaChzZXRUb3RhbFNjb3JlKHRvdGFsc2NvcmUgKyAxKSk7XHJcbiAgICAgIHJldHVybiBgJHt1c2VybmFtZX0gd2luIWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSb3VuZChyb3VuZCArIDEpO1xyXG4gICAgICBzZXRTdGF0dXMoJ2xvc2UnKTtcclxuICAgICAgc2V0R2V0U2NvcmUoMCk7XHJcbiAgICAgIHVwZGF0ZVNjb3JlcygpO1xyXG4gICAgICByZXR1cm4gJ0NvbXB1dGVyIHdpbnMhJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWxvYWQgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXN1bHQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGNvbnN0IGdhbWVuYW1lID0gJ2dhbWVycHMnXHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBBdXRob3JpemUgIScpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTsgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0JyxcclxuICAgICAgICAgIHsgZW1haWwsIGdhbWVuYW1lIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRJZChyZXNwb25zZS5kYXRhLmRhdGEuaWQpXHJcbiAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBzZXRSb3VuZChyZXNwb25zZS5kYXRhLmRhdGEucm91bmQpO1xyXG4gICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICBzZXRHZXRTY29yZShyZXNwb25zZS5kYXRhLmRhdGEuZ2V0c2NvcmUpO1xyXG4gICAgICAgIHNldFRvdGFsU2NvcmUocmVzcG9uc2UuZGF0YS5kYXRhLnRvdGFsc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvciAhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjaGVja1Rva2VuKCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tDbGlja30+XHJcbiAgICAgICAgICBLZW1iYWxpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cclxuICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Um9jayBQYXBlciBTY2lzc29yczwvZGl2PlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNrZWxldG9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSAvPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5TdGF0dXMgTGFzdCBSb3VuZDoge3N0YXR1c308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PkN1cnJlbnQgUm91bmQ6IHtyb3VuZCArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5Ub3RhbCBTY29yZXM6IHt0b3RhbHNjb3JlfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ3JpZEl0ZW19ICR7c3R5bGVzLm9wdGlvbnN9YH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlfT5DaG9vc2UgeW91ciBtb3ZlPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdyb2NrJyl9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ltYWdlcy9iYXR1LnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdwYXBlcicpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMva2VydGFzLnBuZyd9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5ZXJNb3ZlKCdzY2lzc29ycycpfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4vaW1hZ2VzL2d1bnRpbmcucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRJdGVtfSAke3N0eWxlcy5vcHRpb25zfWB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92ZX0+Q29tcHV0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmVCdG59IGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgJiYgPGltZyBzcmM9eycvaW1hZ2VzL2JhdHUucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnL2ltYWdlcy9rZXJ0YXMucG5nJ30gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZlQnRufSBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICB7cmVzdWx0ICYmIDxpbWcgc3JjPXsnLi9pbWFnZXMvZ3VudGluZy5wbmcnfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZX0gLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Jlc3VsdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+XHJcbiAgICAgICAgICAgIDxwPllvdSBjaG9zZToge3Jlc3VsdC5wbGF5ZXJNb3ZlfTwvcD5cclxuICAgICAgICAgICAgPHA+Q29tcHV0ZXIgY2hvc2U6IHtyZXN1bHQuY29tcHV0ZXJNb3ZlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc3VsdC53aW5uZXJ9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlbG9hZH0gb25DbGljaz17aGFuZGxlUmVsb2FkfT5cclxuICAgICAgICAgIFBsYXkgQWdhaW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkJ1dHRvbiIsInN0eWxlcyIsInNldFBsYXllZEdhbWVzIiwic2V0VG90YWxTY29yZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJTa2VsZXRvbiIsIkdhbWUiLCJpZCIsInNldElkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInJvdW5kIiwic2V0Um91bmQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJnZXRzY29yZSIsInNldEdldFNjb3JlIiwidG90YWxzY29yZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImRpc3BhdGNoIiwicGxheWVkR2FtZXMiLCJzdGF0ZSIsInJlZHVjZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVCYWNrQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJoYW5kbGVQbGF5ZXJNb3ZlIiwicGxheWVyTW92ZSIsIm1vdmVzIiwiY29tcHV0ZXJNb3ZlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwid2lubmVyIiwiZGV0ZXJtaW5lV2lubmVyIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlU2NvcmVzIiwiZ2FtZW5hbWUiLCJ0b2tlbiIsImdldEl0ZW0iLCJlbWFpbCIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZGF0YSIsImhhbmRsZVJlbG9hZCIsImNoZWNrVG9rZW4iLCJmZXRjaERhdGEiLCJiYWNrZ3JvdW5kIiwiZ2FtZSIsInRpdGxlIiwic2tlbGV0b25Db250YWluZXIiLCJDb250YWluZXIiLCJncmlkQ29udGFpbmVyIiwiZ3JpZEl0ZW0iLCJvcHRpb25zIiwibW92ZSIsIm1vdmVCdG4iLCJJbWFnZSIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=