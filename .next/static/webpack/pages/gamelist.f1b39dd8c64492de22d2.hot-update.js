"use strict";
self["webpackHotUpdate_N_E"]("pages/gamelist",{

/***/ "./redux/action/index.js":
/*!*******************************!*\
  !*** ./redux/action/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginRequest": function() { return /* binding */ loginRequest; },
/* harmony export */   "loginSuccess": function() { return /* binding */ loginSuccess; },
/* harmony export */   "loginFailure": function() { return /* binding */ loginFailure; },
/* harmony export */   "setEmail": function() { return /* binding */ setEmail; },
/* harmony export */   "setLoggedIn": function() { return /* binding */ setLoggedIn; },
/* harmony export */   "setPlayedGames": function() { return /* binding */ setPlayedGames; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);

function loginRequest() {
  return {
    type: 'LOGIN_REQUEST'
  };
}
;
function loginSuccess(token, email) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token: token,
      email: email
    }
  };
}
;
function loginFailure(error) {
  return {
    type: 'LOGIN_FAILURE',
    payload: error
  };
}
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZWxpc3QuZjFiMzlkZDhjNjQ0OTJkZTIyZDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxTQUFTQyxZQUFULEdBQXVCO0FBQzVCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFO0FBREQsR0FBUDtBQUdBO0FBQUE7QUFFTSxTQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDM0MsU0FBTTtBQUNOSCxJQUFBQSxJQUFJLEVBQUUsZUFEQTtBQUVOSSxJQUFBQSxPQUFPLEVBQUU7QUFBRUYsTUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNDLE1BQUFBLEtBQUssRUFBTEE7QUFBVDtBQUZILEdBQU47QUFHQTtBQUFBO0FBRUssU0FBU0UsWUFBVCxDQUF1QkMsS0FBdkIsRUFBNkI7QUFDbEMsU0FBTTtBQUNKTixJQUFBQSxJQUFJLEVBQUUsZUFERjtBQUVKSSxJQUFBQSxPQUFPLEVBQUVFO0FBRkwsR0FBTjtBQUlEO0FBQUE7QUFFTSxTQUFTQyxRQUFULENBQWtCSixLQUFsQixFQUF5QjtBQUM5QixTQUFPO0FBQ0xILElBQUFBLElBQUksRUFBRSxXQUREO0FBRUxJLElBQUFBLE9BQU8sRUFBRUQ7QUFGSixHQUFQO0FBSUQ7QUFFTSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxVQUFELEVBQWFDLElBQWI7QUFBQSxTQUF1QjtBQUNoRFYsSUFBQUEsSUFBSSxFQUFFLGVBRDBDO0FBRWhESSxJQUFBQSxPQUFPLEVBQUU7QUFBRUssTUFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNDLE1BQUFBLElBQUksRUFBSkE7QUFBZDtBQUZ1QyxHQUF2QjtBQUFBLENBQXBCO0FBS0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFEO0FBQUEsU0FBa0I7QUFDOUNaLElBQUFBLElBQUksRUFBRSxrQkFEd0M7QUFFOUNJLElBQUFBLE9BQU8sRUFBRVE7QUFGcUMsR0FBbEI7QUFBQSxDQUF2QixFQU1QO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luUmVxdWVzdCgpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTE9HSU5fUkVRVUVTVCdcclxuICB9XHJcbiB9O1xyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MgKHRva2VuLCBlbWFpbCkge1xyXG4gIHJldHVybntcclxuICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXHJcbiAgcGF5bG9hZDogeyB0b2tlbiwgZW1haWwgfSxcclxufX07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5GYWlsdXJlIChlcnJvcil7XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTogJ0xPR0lOX0ZBSUxVUkUnLFxyXG4gICAgcGF5bG9hZDogZXJyb3IsXHJcbiAgfSAgXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RW1haWwoZW1haWwpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ1NFVF9FTUFJTCcsXHJcbiAgICBwYXlsb2FkOiBlbWFpbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKHBsYXllZEdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBwbGF5ZWRHYW1lcyxcclxufSk7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDA1L2xvZ2luJywge1xyXG4vLyAgICAgICBlbWFpbCxcclxuLy8gICAgICAgcGFzc3dvcmQsXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCB7IHRva2VuLCBlbWFpbDogdXNlckVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXJFbWFpbCk7XHJcblxyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHRva2VuLCB1c2VyRW1haWwpKTtcclxuLy8gICAgIGRpc3BhdGNoKHNldEVtYWlsKHVzZXJFbWFpbCkpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCc7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3JNZXNzYWdlKSk7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsImxvZ2luUmVxdWVzdCIsInR5cGUiLCJsb2dpblN1Y2Nlc3MiLCJ0b2tlbiIsImVtYWlsIiwicGF5bG9hZCIsImxvZ2luRmFpbHVyZSIsImVycm9yIiwic2V0RW1haWwiLCJzZXRMb2dnZWRJbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwic2V0UGxheWVkR2FtZXMiLCJwbGF5ZWRHYW1lcyJdLCJzb3VyY2VSb290IjoiIn0=