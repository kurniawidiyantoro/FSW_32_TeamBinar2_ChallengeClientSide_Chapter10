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
}; // export const fetchUserTotalScore = (userEmail) => async (dispatch) => {
//   try {
//     const response = await Axios.get(`http://localhost:3005/gamehistory/get/${userEmail}`);
//     const userTotalScore = response.data.totalScore; // Adjust this based on your API response
//     dispatch(setTotalScore(userTotalScore));
//   } catch (error) {
//     console.error('Error fetching user total score:', error);
//   }
// };
// export const loginUser = (email, password) => async (dispatch) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuM2U0ZmE0ZjI1ZmZjZGNkNGViZjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQzlCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFLFdBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFRjtBQUZKLEdBQVA7QUFJRDtBQUVNLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRDtBQUFBLFNBQWlCO0FBQzVDSCxJQUFBQSxJQUFJLEVBQUUsaUJBRHNDO0FBRTVDQyxJQUFBQSxPQUFPLEVBQUVFO0FBRm1DLEdBQWpCO0FBQUEsQ0FBdEI7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxVQUFELEVBQWFDLElBQWI7QUFBQSxTQUF1QjtBQUNoRE4sSUFBQUEsSUFBSSxFQUFFLGVBRDBDO0FBRWhEQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUksTUFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNDLE1BQUFBLElBQUksRUFBSkE7QUFBZDtBQUZ1QyxHQUF2QjtBQUFBLENBQXBCO0FBS0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFEO0FBQUEsU0FBa0I7QUFDOUNSLElBQUFBLElBQUksRUFBRSxrQkFEd0M7QUFFOUNDLElBQUFBLE9BQU8sRUFBRU87QUFGcUMsR0FBbEI7QUFBQSxDQUF2QixFQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuLy8gICB9XHJcbi8vICB9O1xyXG5cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4vLyAgIHJldHVybntcclxuLy8gICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbi8vICAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxuLy8gfX07XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbi8vICAgcmV0dXJue1xyXG4vLyAgICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgcGF5bG9hZDogZXJyb3IsXHJcbi8vICAgfSAgXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG90YWxTY29yZSA9ICh0b3RhbFNjb3JlKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfVE9UQUxfU0NPUkUnLFxyXG4gIHBheWxvYWQ6IHRvdGFsU2NvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvZ2dlZEluID0gKGlzTG9nZ2VkSW4sIHVzZXIpID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9MT0dHRURfSU4nLFxyXG4gIHBheWxvYWQ6IHsgaXNMb2dnZWRJbiwgdXNlciB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ZWRHYW1lcyA9IChwbGF5ZWRHYW1lcykgPT4gKHtcclxuICB0eXBlOiAnU0VUX1BMQVlFRF9HQU1FUycsXHJcbiAgcGF5bG9hZDogcGxheWVkR2FtZXMsXHJcbn0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGZldGNoVXNlclRvdGFsU2NvcmUgPSAodXNlckVtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9nYW1laGlzdG9yeS9nZXQvJHt1c2VyRW1haWx9YCk7XHJcbi8vICAgICBjb25zdCB1c2VyVG90YWxTY29yZSA9IHJlc3BvbnNlLmRhdGEudG90YWxTY29yZTsgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBBUEkgcmVzcG9uc2VcclxuLy8gICAgIGRpc3BhdGNoKHNldFRvdGFsU2NvcmUodXNlclRvdGFsU2NvcmUpKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciB0b3RhbCBzY29yZTonLCBlcnJvcik7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsInNldEVtYWlsIiwiZW1haWwiLCJ0eXBlIiwicGF5bG9hZCIsInNldFRvdGFsU2NvcmUiLCJ0b3RhbFNjb3JlIiwic2V0TG9nZ2VkSW4iLCJpc0xvZ2dlZEluIiwidXNlciIsInNldFBsYXllZEdhbWVzIiwicGxheWVkR2FtZXMiXSwic291cmNlUm9vdCI6IiJ9