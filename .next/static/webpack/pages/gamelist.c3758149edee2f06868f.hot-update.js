"use strict";
self["webpackHotUpdate_N_E"]("pages/gamelist",{

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
      var response, leaderboardData, userEntry, userTotalScore;
      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2__.default.post('http://localhost:3005/gamehistory/get/rank');

            case 3:
              response = _context.sent;
              // Fetch the leaderboard data
              console.log('data response', response);
              leaderboardData = response.data.data; // Adjust this based on your API response structure

              console.log('data', leaderboardData);
              userEntry = leaderboardData.find(function (entry) {
                return entry.email === userEmail;
              }); // Find the user's entry

              console.log('User Entry', userEntry);
              userTotalScore = userEntry ? userEntry.totalscore : 0; // Get the user's total score

              dispatch(setTotalScore('Total score', userTotalScore));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching user total score:', _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuYzM3NTgxNDllZGVlMmYwNjg2OGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQ7QUFFTSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQ7QUFBQSxTQUFpQjtBQUM1Q0gsSUFBQUEsSUFBSSxFQUFFLGlCQURzQztBQUU1Q0MsSUFBQUEsT0FBTyxFQUFFRTtBQUZtQyxHQUFqQjtBQUFBLENBQXRCO0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiO0FBQUEsU0FBdUI7QUFDaEROLElBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsSUFBQUEsT0FBTyxFQUFFO0FBQUVJLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxNQUFBQSxJQUFJLEVBQUpBO0FBQWQ7QUFGdUMsR0FBdkI7QUFBQSxDQUFwQjtBQUtBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRDtBQUFBLFNBQWtCO0FBQzlDUixJQUFBQSxJQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxJQUFBQSxPQUFPLEVBQUVPO0FBRnFDLEdBQWxCO0FBQUEsQ0FBdkI7QUFLQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFNBQUQ7QUFBQTtBQUFBLDJXQUFlLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFdkJkLCtDQUFBLENBQVcsNENBQVgsQ0FGdUI7O0FBQUE7QUFFeENnQixjQUFBQSxRQUZ3QztBQUVtQztBQUNqRkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE0QkYsUUFBNUI7QUFDTUcsY0FBQUEsZUFKd0MsR0FJdEJILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUpRLEVBSUY7O0FBQzVDSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CQyxlQUFuQjtBQUNNRSxjQUFBQSxTQU53QyxHQU01QkYsZUFBZSxDQUFDRyxJQUFoQixDQUFxQixVQUFBQyxLQUFLO0FBQUEsdUJBQUlBLEtBQUssQ0FBQ3JCLEtBQU4sS0FBZ0JXLFNBQXBCO0FBQUEsZUFBMUIsQ0FONEIsRUFNOEI7O0FBQzVFSSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCRyxTQUF6QjtBQUNNRyxjQUFBQSxjQVJ3QyxHQVF2QkgsU0FBUyxHQUFHQSxTQUFTLENBQUNJLFVBQWIsR0FBMEIsQ0FSWixFQVFlOztBQUM3RFgsY0FBQUEsUUFBUSxDQUFDVCxhQUFhLENBQUMsYUFBRCxFQUFlbUIsY0FBZixDQUFkLENBQVI7QUFUOEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXOUNQLGNBQUFBLE9BQU8sQ0FBQ1MsS0FBUixDQUFjLGtDQUFkOztBQVg4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBNUIsRUFlUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpblJlcXVlc3QoKXtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX1JFUVVFU1QnXHJcbi8vICAgfVxyXG4vLyAgfTtcclxuXHJcbi8vICBleHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzICh0b2tlbiwgZW1haWwpIHtcclxuLy8gICByZXR1cm57XHJcbi8vICAgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4vLyAgIHBheWxvYWQ6IHsgdG9rZW4sIGVtYWlsIH0sXHJcbi8vIH19O1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luRmFpbHVyZSAoZXJyb3Ipe1xyXG4vLyAgIHJldHVybntcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9GQUlMVVJFJyxcclxuLy8gICAgIHBheWxvYWQ6IGVycm9yLFxyXG4vLyAgIH0gIFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVtYWlsKGVtYWlsKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdTRVRfRU1BSUwnLFxyXG4gICAgcGF5bG9hZDogZW1haWwsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRvdGFsU2NvcmUgPSAodG90YWxTY29yZSkgPT4gKHtcclxuICB0eXBlOiAnU0VUX1RPVEFMX1NDT1JFJyxcclxuICBwYXlsb2FkOiB0b3RhbFNjb3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2dnZWRJbiA9IChpc0xvZ2dlZEluLCB1c2VyKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfTE9HR0VEX0lOJyxcclxuICBwYXlsb2FkOiB7IGlzTG9nZ2VkSW4sIHVzZXIgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGxheWVkR2FtZXMgPSAocGxheWVkR2FtZXMpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9QTEFZRURfR0FNRVMnLFxyXG4gIHBheWxvYWQ6IHBsYXllZEdhbWVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJUb3RhbFNjb3JlID0gKHVzZXJFbWFpbCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2dhbWVoaXN0b3J5L2dldC9yYW5rJyk7IC8vIEZldGNoIHRoZSBsZWFkZXJib2FyZCBkYXRhXHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSByZXNwb25zZScscmVzcG9uc2UpXHJcbiAgICBjb25zdCBsZWFkZXJib2FyZERhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7IC8vIEFkanVzdCB0aGlzIGJhc2VkIG9uIHlvdXIgQVBJIHJlc3BvbnNlIHN0cnVjdHVyZVxyXG4gICAgY29uc29sZS5sb2coJ2RhdGEnLGxlYWRlcmJvYXJkRGF0YSlcclxuICAgIGNvbnN0IHVzZXJFbnRyeSA9IGxlYWRlcmJvYXJkRGF0YS5maW5kKGVudHJ5ID0+IGVudHJ5LmVtYWlsID09PSB1c2VyRW1haWwpOyAvLyBGaW5kIHRoZSB1c2VyJ3MgZW50cnlcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIEVudHJ5Jyx1c2VyRW50cnkpXHJcbiAgICBjb25zdCB1c2VyVG90YWxTY29yZSA9IHVzZXJFbnRyeSA/IHVzZXJFbnRyeS50b3RhbHNjb3JlIDogMDsgLy8gR2V0IHRoZSB1c2VyJ3MgdG90YWwgc2NvcmVcclxuICAgIGRpc3BhdGNoKHNldFRvdGFsU2NvcmUoJ1RvdGFsIHNjb3JlJyx1c2VyVG90YWxTY29yZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHRvdGFsIHNjb3JlOicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkF4aW9zIiwic2V0RW1haWwiLCJlbWFpbCIsInR5cGUiLCJwYXlsb2FkIiwic2V0VG90YWxTY29yZSIsInRvdGFsU2NvcmUiLCJzZXRMb2dnZWRJbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2V0UGxheWVkR2FtZXMiLCJwbGF5ZWRHYW1lcyIsImZldGNoVXNlclRvdGFsU2NvcmUiLCJ1c2VyRW1haWwiLCJkaXNwYXRjaCIsInBvc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsZWFkZXJib2FyZERhdGEiLCJkYXRhIiwidXNlckVudHJ5IiwiZmluZCIsImVudHJ5IiwidXNlclRvdGFsU2NvcmUiLCJ0b3RhbHNjb3JlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9