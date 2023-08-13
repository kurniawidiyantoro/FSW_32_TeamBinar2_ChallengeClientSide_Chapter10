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
var setTotalScore = function setTotalScore(totalScore) {
  return {
    type: 'SET_TOTAL_SCORE',
    payload: totalScore
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
      var token, gamename, response, userTotalScore;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              token = localStorage.getItem('token');
              gamename = 'gamerps';

              if (token) {
                _context.next = 7;
                break;
              }

              console.log('Not Authorized!');
              window.location.replace('/login');
              return _context.abrupt("return");

            case 7:
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_2__.default.post('http://localhost:3005/gamehistory/get/rank', {
                email: userEmail,
                gamename: gamename
              }, {
                headers: {
                  Authorization: "Basic ".concat(token)
                }
              });

            case 9:
              response = _context.sent;
              userTotalScore = response.data.data.totalscore;
              dispatch(setTotalScore(userTotalScore)); // Dispatch the total score to Redux store

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching user total score:', _context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuZGNmOGJiMDk3MDcwNmM1NDVmY2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQ7QUFFTSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQ7QUFBQSxTQUFpQjtBQUM1Q0gsSUFBQUEsSUFBSSxFQUFFLGlCQURzQztBQUU1Q0MsSUFBQUEsT0FBTyxFQUFFRTtBQUZtQyxHQUFqQjtBQUFBLENBQXRCO0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiO0FBQUEsU0FBdUI7QUFDaEROLElBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsSUFBQUEsT0FBTyxFQUFFO0FBQUVJLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxNQUFBQSxJQUFJLEVBQUpBO0FBQWQ7QUFGdUMsR0FBdkI7QUFBQSxDQUFwQjtBQUtBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRDtBQUFBLFNBQWtCO0FBQzlDUixJQUFBQSxJQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxJQUFBQSxPQUFPLEVBQUVPO0FBRnFDLEdBQWxCO0FBQUEsQ0FBdkI7QUFLQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFNBQUQ7QUFBQTtBQUFBLDJXQUFlLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXhDQyxjQUFBQSxLQUZ3QyxHQUVoQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRmdDO0FBR3hDQyxjQUFBQSxRQUh3QyxHQUc3QixTQUg2Qjs7QUFBQSxrQkFLekNILEtBTHlDO0FBQUE7QUFBQTtBQUFBOztBQU01Q0ksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQUMsY0FBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixRQUF4QjtBQVA0Qzs7QUFBQTtBQUFBO0FBQUEscUJBV3ZCdkIsK0NBQUEsQ0FDckIsNENBRHFCLEVBRXJCO0FBQUVFLGdCQUFBQSxLQUFLLEVBQUVXLFNBQVQ7QUFBb0JLLGdCQUFBQSxRQUFRLEVBQVJBO0FBQXBCLGVBRnFCLEVBR3JCO0FBQ0VPLGdCQUFBQSxPQUFPLEVBQUU7QUFDUEMsa0JBQUFBLGFBQWEsa0JBQVdYLEtBQVg7QUFETjtBQURYLGVBSHFCLENBWHVCOztBQUFBO0FBV3hDWSxjQUFBQSxRQVh3QztBQXFCeENDLGNBQUFBLGNBckJ3QyxHQXFCdkJELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUFkLENBQW1CQyxVQXJCSTtBQXNCOUNoQixjQUFBQSxRQUFRLENBQUNULGFBQWEsQ0FBQ3VCLGNBQUQsQ0FBZCxDQUFSLENBdEI4QyxDQXNCTDs7QUF0Qks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QjlDVCxjQUFBQSxPQUFPLENBQUNZLEtBQVIsQ0FBYyxrQ0FBZDs7QUF4QjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QixFQTRCUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpblJlcXVlc3QoKXtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX1JFUVVFU1QnXHJcbi8vICAgfVxyXG4vLyAgfTtcclxuXHJcbi8vICBleHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzICh0b2tlbiwgZW1haWwpIHtcclxuLy8gICByZXR1cm57XHJcbi8vICAgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4vLyAgIHBheWxvYWQ6IHsgdG9rZW4sIGVtYWlsIH0sXHJcbi8vIH19O1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luRmFpbHVyZSAoZXJyb3Ipe1xyXG4vLyAgIHJldHVybntcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9GQUlMVVJFJyxcclxuLy8gICAgIHBheWxvYWQ6IGVycm9yLFxyXG4vLyAgIH0gIFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVtYWlsKGVtYWlsKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdTRVRfRU1BSUwnLFxyXG4gICAgcGF5bG9hZDogZW1haWwsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRvdGFsU2NvcmUgPSAodG90YWxTY29yZSkgPT4gKHtcclxuICB0eXBlOiAnU0VUX1RPVEFMX1NDT1JFJyxcclxuICBwYXlsb2FkOiB0b3RhbFNjb3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dnZWRJbiA9IChpc0xvZ2dlZEluLCB1c2VyKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfTE9HR0VEX0lOJyxcclxuICBwYXlsb2FkOiB7IGlzTG9nZ2VkSW4sIHVzZXIgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGxheWVkR2FtZXMgPSAocGxheWVkR2FtZXMpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9QTEFZRURfR0FNRVMnLFxyXG4gIHBheWxvYWQ6IHBsYXllZEdhbWVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJUb3RhbFNjb3JlID0gKHVzZXJFbWFpbCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBnYW1lbmFtZSA9ICdnYW1lcnBzJztcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgQXV0aG9yaXplZCEnKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgICByZXR1cm47IC8vIFJldHVybiBlYXJseSBpZiBub3QgYXV0aG9yaXplZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdChcclxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvcmFuaycsXHJcbiAgICAgIHsgZW1haWw6IHVzZXJFbWFpbCwgZ2FtZW5hbWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1c2VyVG90YWxTY29yZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbHNjb3JlO1xyXG4gICAgZGlzcGF0Y2goc2V0VG90YWxTY29yZSh1c2VyVG90YWxTY29yZSkpOyAvLyBEaXNwYXRjaCB0aGUgdG90YWwgc2NvcmUgdG8gUmVkdXggc3RvcmVcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciB0b3RhbCBzY29yZTonLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsInNldEVtYWlsIiwiZW1haWwiLCJ0eXBlIiwicGF5bG9hZCIsInNldFRvdGFsU2NvcmUiLCJ0b3RhbFNjb3JlIiwic2V0TG9nZ2VkSW4iLCJpc0xvZ2dlZEluIiwidXNlciIsInNldFBsYXllZEdhbWVzIiwicGxheWVkR2FtZXMiLCJmZXRjaFVzZXJUb3RhbFNjb3JlIiwidXNlckVtYWlsIiwiZGlzcGF0Y2giLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnYW1lbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsInVzZXJUb3RhbFNjb3JlIiwiZGF0YSIsInRvdGFsc2NvcmUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=