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
              console.log(response);
              leaderboardData = response.data.data; // Adjust this based on your API response structure

              console.log(leaderboardData);
              userEntry = leaderboardData.find(function (entry) {
                return entry.email === userEmail;
              }); // Find the user's entry

              console.log(userEntry);
              userTotalScore = userEntry ? userEntry.totalscore : 0; // Get the user's total score

              dispatch(setTotalScore(userTotalScore));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuNzliZGE3NzJlYWNhNDA3YWUyYTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQ7QUFFTSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQ7QUFBQSxTQUFpQjtBQUM1Q0gsSUFBQUEsSUFBSSxFQUFFLGlCQURzQztBQUU1Q0MsSUFBQUEsT0FBTyxFQUFFRTtBQUZtQyxHQUFqQjtBQUFBLENBQXRCO0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiO0FBQUEsU0FBdUI7QUFDaEROLElBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsSUFBQUEsT0FBTyxFQUFFO0FBQUVJLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxNQUFBQSxJQUFJLEVBQUpBO0FBQWQ7QUFGdUMsR0FBdkI7QUFBQSxDQUFwQjtBQUtBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRDtBQUFBLFNBQWtCO0FBQzlDUixJQUFBQSxJQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxJQUFBQSxPQUFPLEVBQUVPO0FBRnFDLEdBQWxCO0FBQUEsQ0FBdkI7QUFLQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLFNBQUQ7QUFBQTtBQUFBLDJXQUFlLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFdkJkLCtDQUFBLENBQVcsNENBQVgsQ0FGdUI7O0FBQUE7QUFFeENnQixjQUFBQSxRQUZ3QztBQUVtQztBQUNqRkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDTUcsY0FBQUEsZUFKd0MsR0FJdEJILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQSxJQUpRLEVBSUY7O0FBQzVDSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBWjtBQUNNRSxjQUFBQSxTQU53QyxHQU01QkYsZUFBZSxDQUFDRyxJQUFoQixDQUFxQixVQUFBQyxLQUFLO0FBQUEsdUJBQUlBLEtBQUssQ0FBQ3JCLEtBQU4sS0FBZ0JXLFNBQXBCO0FBQUEsZUFBMUIsQ0FONEIsRUFNOEI7O0FBQzVFSSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsU0FBWjtBQUNNRyxjQUFBQSxjQVJ3QyxHQVF2QkgsU0FBUyxHQUFHQSxTQUFTLENBQUNJLFVBQWIsR0FBMEIsQ0FSWixFQVFlOztBQUM3RFgsY0FBQUEsUUFBUSxDQUFDVCxhQUFhLENBQUNtQixjQUFELENBQWQsQ0FBUjtBQVQ4QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVc5Q1AsY0FBQUEsT0FBTyxDQUFDUyxLQUFSLENBQWMsa0NBQWQ7O0FBWDhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QixFQWVQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxTY29yZSA9ICh0b3RhbFNjb3JlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfVE9UQUxfU0NPUkUnLFxyXG4gIHBheWxvYWQ6IHRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlclRvdGFsU2NvcmUgPSAodXNlckVtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvZ2FtZWhpc3RvcnkvZ2V0L3JhbmsnKTsgLy8gRmV0Y2ggdGhlIGxlYWRlcmJvYXJkIGRhdGFcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgY29uc3QgbGVhZGVyYm9hcmREYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhOyAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB5b3VyIEFQSSByZXNwb25zZSBzdHJ1Y3R1cmVcclxuICAgIGNvbnNvbGUubG9nKGxlYWRlcmJvYXJkRGF0YSlcclxuICAgIGNvbnN0IHVzZXJFbnRyeSA9IGxlYWRlcmJvYXJkRGF0YS5maW5kKGVudHJ5ID0+IGVudHJ5LmVtYWlsID09PSB1c2VyRW1haWwpOyAvLyBGaW5kIHRoZSB1c2VyJ3MgZW50cnlcclxuICAgIGNvbnNvbGUubG9nKHVzZXJFbnRyeSlcclxuICAgIGNvbnN0IHVzZXJUb3RhbFNjb3JlID0gdXNlckVudHJ5ID8gdXNlckVudHJ5LnRvdGFsc2NvcmUgOiAwOyAvLyBHZXQgdGhlIHVzZXIncyB0b3RhbCBzY29yZVxyXG4gICAgZGlzcGF0Y2goc2V0VG90YWxTY29yZSh1c2VyVG90YWxTY29yZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHRvdGFsIHNjb3JlOicsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDUvbG9naW4nLCB7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZCxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdG9rZW4sIGVtYWlsOiB1c2VyRW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckVtYWlsKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3ModG9rZW4sIHVzZXJFbWFpbCkpO1xyXG4vLyAgICAgZGlzcGF0Y2goc2V0RW1haWwodXNlckVtYWlsKSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJztcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvck1lc3NhZ2UpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkF4aW9zIiwic2V0RW1haWwiLCJlbWFpbCIsInR5cGUiLCJwYXlsb2FkIiwic2V0VG90YWxTY29yZSIsInRvdGFsU2NvcmUiLCJzZXRMb2dnZWRJbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2V0UGxheWVkR2FtZXMiLCJwbGF5ZWRHYW1lcyIsImZldGNoVXNlclRvdGFsU2NvcmUiLCJ1c2VyRW1haWwiLCJkaXNwYXRjaCIsInBvc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsZWFkZXJib2FyZERhdGEiLCJkYXRhIiwidXNlckVudHJ5IiwiZmluZCIsImVudHJ5IiwidXNlclRvdGFsU2NvcmUiLCJ0b3RhbHNjb3JlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9