"use strict";
self["webpackHotUpdate_N_E"]("pages/leaderboard",{

/***/ "./redux/action/index.js":
/*!*******************************!*\
  !*** ./redux/action/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setEmail": function() { return /* binding */ setEmail; },
/* harmony export */   "setTotalScore": function() { return /* binding */ setTotalScore; },
/* harmony export */   "setLoggedIn": function() { return /* binding */ setLoggedIn; },
/* harmony export */   "setPlayedGames": function() { return /* binding */ setPlayedGames; },
/* harmony export */   "fetchUserTotalScore": function() { return /* binding */ fetchUserTotalScore; }
/* harmony export */ });
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


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
var setTotalScore = function setTotalScore(totalscore) {
  return {
    type: 'SET_TOTAL_SCORE',
    payload: totalscore
  };
};
var setLoggedIn = function setLoggedIn(isLoggedIn, user) {
  return {
    type: 'SET_LOGGED_IN',
    payload: {
      isLoggedIn: isLoggedIn,
      user: user
    }
  };
};
var setPlayedGames = function setPlayedGames(playedGames) {
  return {
    type: 'SET_PLAYED_GAMES',
    payload: playedGames
  };
};
var fetchUserTotalScore = function fetchUserTotalScore(userEmail) {
  return /*#__PURE__*/function () {
    var _ref = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var response, userTotalScore;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2__.default.get('http://localhost:3005/gamehistory/get/rank');

            case 3:
              response = _context.sent;
              userTotalScore = response.data.data.rows.totalscore; // Adjust this based on your API response

              dispatch(setTotalScore(userTotalScore));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching user total score:', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuOGQ3MDAzMDA3MGNlNjljNjcxMTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQ7QUFFTSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQ7QUFBQSxTQUFpQjtBQUM1Q0gsSUFBQUEsSUFBSSxFQUFFLGlCQURzQztBQUU1Q0MsSUFBQUEsT0FBTyxFQUFFRTtBQUZtQyxHQUFqQjtBQUFBLENBQXRCO0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiO0FBQUEsU0FBdUI7QUFDaEROLElBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsSUFBQUEsT0FBTyxFQUFFO0FBQUVJLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxNQUFBQSxJQUFJLEVBQUpBO0FBQWQ7QUFGdUMsR0FBdkI7QUFBQSxDQUFwQjtBQUtBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRDtBQUFBLFNBQWtCO0FBQzlDUixJQUFBQSxJQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxJQUFBQSxPQUFPLEVBQUVPO0FBRnFDLEdBQWxCO0FBQUEsQ0FBdkI7QUFLQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFNBQUQ7QUFBQTtBQUFBLDJXQUFlLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFdkJkLDhDQUFBLENBQVUsNENBQVYsQ0FGdUI7O0FBQUE7QUFFeENnQixjQUFBQSxRQUZ3QztBQUd4Q0MsY0FBQUEsY0FId0MsR0FHdkJELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxJQUFuQixDQUF3QmIsVUFIRCxFQUdhOztBQUMzRFEsY0FBQUEsUUFBUSxDQUFDVCxhQUFhLENBQUNZLGNBQUQsQ0FBZCxDQUFSO0FBSjhDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTTlDRyxjQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxrQ0FBZDs7QUFOOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTVCLEVBVVA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9hY3Rpb24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KCl7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9SRVFVRVNUJ1xyXG4vLyAgIH1cclxuLy8gIH07XHJcblxyXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyAodG9rZW4sIGVtYWlsKSB7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgIHR5cGU6ICdMT0dJTl9TVUNDRVNTJyxcclxuLy8gICBwYXlsb2FkOiB7IHRva2VuLCBlbWFpbCB9LFxyXG4vLyB9fTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpbkZhaWx1cmUgKGVycm9yKXtcclxuLy8gICByZXR1cm57XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fRkFJTFVSRScsXHJcbi8vICAgICBwYXlsb2FkOiBlcnJvcixcclxuLy8gICB9ICBcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbWFpbChlbWFpbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnU0VUX0VNQUlMJyxcclxuICAgIHBheWxvYWQ6IGVtYWlsLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFNjb3JlID0gKHRvdGFsc2NvcmUpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9UT1RBTF9TQ09SRScsXHJcbiAgcGF5bG9hZDogdG90YWxzY29yZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyVG90YWxTY29yZSA9ICh1c2VyRW1haWwpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyk7XHJcbiAgICBjb25zdCB1c2VyVG90YWxTY29yZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5yb3dzLnRvdGFsc2NvcmU7IC8vIEFkanVzdCB0aGlzIGJhc2VkIG9uIHlvdXIgQVBJIHJlc3BvbnNlXHJcbiAgICBkaXNwYXRjaChzZXRUb3RhbFNjb3JlKHVzZXJUb3RhbFNjb3JlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgdG90YWwgc2NvcmU6JywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICBkaXNwYXRjaChsb2dpblJlcXVlc3QoKSk7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9sb2dpbicsIHtcclxuLy8gICAgICAgZW1haWwsXHJcbi8vICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgeyB0b2tlbiwgZW1haWw6IHVzZXJFbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyRW1haWwpO1xyXG5cclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzcyh0b2tlbiwgdXNlckVtYWlsKSk7XHJcbi8vICAgICBkaXNwYXRjaChzZXRFbWFpbCh1c2VyRW1haWwpKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yTWVzc2FnZSkpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJzZXRFbWFpbCIsImVtYWlsIiwidHlwZSIsInBheWxvYWQiLCJzZXRUb3RhbFNjb3JlIiwidG90YWxzY29yZSIsInNldExvZ2dlZEluIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJzZXRQbGF5ZWRHYW1lcyIsInBsYXllZEdhbWVzIiwiZmV0Y2hVc2VyVG90YWxTY29yZSIsInVzZXJFbWFpbCIsImRpc3BhdGNoIiwiZ2V0IiwicmVzcG9uc2UiLCJ1c2VyVG90YWxTY29yZSIsImRhdGEiLCJyb3dzIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==