"use strict";
self["webpackHotUpdate_N_E"]("pages/gamedice",{

/***/ "./redux/action/index.js":
/*!*******************************!*\
  !*** ./redux/action/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setEmail": function() { return /* binding */ setEmail; },
/* harmony export */   "setLoggedIn": function() { return /* binding */ setLoggedIn; },
/* harmony export */   "setPlayedGames": function() { return /* binding */ setPlayedGames; }
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWRpY2UuNTc2YTk5YjE4NTdlNGYzYjdkMzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsV0FERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVGO0FBRkosR0FBUDtBQUlEO0FBRU0sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxJQUFiO0FBQUEsU0FBdUI7QUFDaERKLElBQUFBLElBQUksRUFBRSxlQUQwQztBQUVoREMsSUFBQUEsT0FBTyxFQUFFO0FBQUVFLE1BQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxNQUFBQSxJQUFJLEVBQUpBO0FBQWQ7QUFGdUMsR0FBdkI7QUFBQSxDQUFwQjtBQUtBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRDtBQUFBLFNBQWtCO0FBQzlDTixJQUFBQSxJQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxJQUFBQSxPQUFPLEVBQUVLO0FBRnFDLEdBQWxCO0FBQUEsQ0FBdkIsRUFNUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2FjdGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2dpblJlcXVlc3QoKXtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX1JFUVVFU1QnXHJcbi8vICAgfVxyXG4vLyAgfTtcclxuXHJcbi8vICBleHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzICh0b2tlbiwgZW1haWwpIHtcclxuLy8gICByZXR1cm57XHJcbi8vICAgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4vLyAgIHBheWxvYWQ6IHsgdG9rZW4sIGVtYWlsIH0sXHJcbi8vIH19O1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luRmFpbHVyZSAoZXJyb3Ipe1xyXG4vLyAgIHJldHVybntcclxuLy8gICAgIHR5cGU6ICdMT0dJTl9GQUlMVVJFJyxcclxuLy8gICAgIHBheWxvYWQ6IGVycm9yLFxyXG4vLyAgIH0gIFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVtYWlsKGVtYWlsKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdTRVRfRU1BSUwnLFxyXG4gICAgcGF5bG9hZDogZW1haWwsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICBkaXNwYXRjaChsb2dpblJlcXVlc3QoKSk7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9sb2dpbicsIHtcclxuLy8gICAgICAgZW1haWwsXHJcbi8vICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgeyB0b2tlbiwgZW1haWw6IHVzZXJFbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyRW1haWwpO1xyXG5cclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzcyh0b2tlbiwgdXNlckVtYWlsKSk7XHJcbi8vICAgICBkaXNwYXRjaChzZXRFbWFpbCh1c2VyRW1haWwpKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yTWVzc2FnZSkpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJzZXRFbWFpbCIsImVtYWlsIiwidHlwZSIsInBheWxvYWQiLCJzZXRMb2dnZWRJbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2V0UGxheWVkR2FtZXMiLCJwbGF5ZWRHYW1lcyJdLCJzb3VyY2VSb290IjoiIn0=