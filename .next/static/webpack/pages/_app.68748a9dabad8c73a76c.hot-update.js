"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/action/userActions.js":
/*!*************************************!*\
  !*** ./redux/action/userActions.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginRequest": function() { return /* binding */ loginRequest; },
/* harmony export */   "loginSuccess": function() { return /* binding */ loginSuccess; },
/* harmony export */   "loginFailure": function() { return /* binding */ loginFailure; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "setLoggedIn": function() { return /* binding */ setLoggedIn; },
/* harmony export */   "setPlayedGames": function() { return /* binding */ setPlayedGames; }
/* harmony export */ });
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
; // Async Action to perform login

var loginUser = function loginUser(email, password) {
  return /*#__PURE__*/function () {
    var _ref = (0,D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var response, _response$data, token, userEmail, errorMessage;

      return D_Binar_Chapter_10_challenge_FSW_32_TeamBinar2_ChallengeClientSide_Chapter10_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(loginRequest());
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2__.default.post('http://localhost:3005/login', {
                email: email,
                password: password
              });

            case 4:
              response = _context.sent;
              _response$data = response.data, token = _response$data.token, userEmail = _response$data.email;
              localStorage.setItem('token', token);
              localStorage.setItem('email', userEmail);
              dispatch(loginSuccess(token, userEmail));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              errorMessage = _context.t0.response ? _context.t0.response.data.message : 'An error occurred';
              dispatch(loginFailure(errorMessage));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
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
var setPlayedGames = function setPlayedGames(games) {
  return {
    type: 'SET_PLAYED_GAMES',
    payload: games
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ODc0OGE5ZGFiYWQ4YzczYTc2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLFNBQVNDLFlBQVQsR0FBdUI7QUFDNUIsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUU7QUFERCxHQUFQO0FBR0E7QUFBQTtBQUVNLFNBQVNDLFlBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxLQUE5QixFQUFxQztBQUMzQyxTQUFNO0FBQ05ILElBQUFBLElBQUksRUFBRSxlQURBO0FBRU5JLElBQUFBLE9BQU8sRUFBRTtBQUFFRixNQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFUO0FBRkgsR0FBTjtBQUdBO0FBQUE7QUFFSyxTQUFTRSxZQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUNsQyxTQUFNO0FBQ0pOLElBQUFBLElBQUksRUFBRSxlQURGO0FBRUpJLElBQUFBLE9BQU8sRUFBRUU7QUFGTCxHQUFOO0FBSUQ7QUFBQSxFQUVEOztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLEtBQUQsRUFBUUssUUFBUjtBQUFBO0FBQUEsMldBQXFCLGlCQUFPQyxRQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUNBLGNBQUFBLFFBQVEsQ0FBQ1YsWUFBWSxFQUFiLENBQVI7QUFENEM7QUFBQTtBQUFBLHFCQUluQkQsK0NBQUEsQ0FBVyw2QkFBWCxFQUEwQztBQUMvREssZ0JBQUFBLEtBQUssRUFBTEEsS0FEK0Q7QUFFL0RLLGdCQUFBQSxRQUFRLEVBQVJBO0FBRitELGVBQTFDLENBSm1COztBQUFBO0FBSXBDRyxjQUFBQSxRQUpvQztBQUFBLCtCQVNOQSxRQUFRLENBQUNDLElBVEgsRUFTbENWLEtBVGtDLGtCQVNsQ0EsS0FUa0MsRUFTcEJXLFNBVG9CLGtCQVMzQlYsS0FUMkI7QUFXMUNXLGNBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QmIsS0FBOUI7QUFDQVksY0FBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCRixTQUE5QjtBQUVBSixjQUFBQSxRQUFRLENBQUNSLFlBQVksQ0FBQ0MsS0FBRCxFQUFRVyxTQUFSLENBQWIsQ0FBUjtBQWQwQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCcENHLGNBQUFBLFlBakJvQyxHQWlCckIsWUFBTUwsUUFBTixHQUFpQixZQUFNQSxRQUFOLENBQWVDLElBQWYsQ0FBb0JLLE9BQXJDLEdBQStDLG1CQWpCMUI7QUFrQjFDUixjQUFBQSxRQUFRLENBQUNKLFlBQVksQ0FBQ1csWUFBRCxDQUFiLENBQVI7O0FBbEIwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWxCO0FBdUJBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFVBQUQsRUFBYUMsSUFBYjtBQUFBLFNBQXVCO0FBQ2hEcEIsSUFBQUEsSUFBSSxFQUFFLGVBRDBDO0FBRWhESSxJQUFBQSxPQUFPLEVBQUU7QUFBRWUsTUFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNDLE1BQUFBLElBQUksRUFBSkE7QUFBZDtBQUZ1QyxHQUF2QjtBQUFBLENBQXBCO0FBS0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q3RCLElBQUFBLElBQUksRUFBRSxrQkFEa0M7QUFFeENJLElBQUFBLE9BQU8sRUFBRWtCO0FBRitCLEdBQVo7QUFBQSxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9hY3Rpb24vdXNlckFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdMT0dJTl9SRVFVRVNUJ1xyXG4gIH1cclxuIH07XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyAodG9rZW4sIGVtYWlsKSB7XHJcbiAgcmV0dXJue1xyXG4gIHR5cGU6ICdMT0dJTl9TVUNDRVNTJyxcclxuICBwYXlsb2FkOiB7IHRva2VuLCBlbWFpbCB9LFxyXG59fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbkZhaWx1cmUgKGVycm9yKXtcclxuICByZXR1cm57XHJcbiAgICB0eXBlOiAnTE9HSU5fRkFJTFVSRScsXHJcbiAgICBwYXlsb2FkOiBlcnJvcixcclxuICB9ICBcclxufTtcclxuXHJcbi8vIEFzeW5jIEFjdGlvbiB0byBwZXJmb3JtIGxvZ2luXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChsb2dpblJlcXVlc3QoKSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9sb2dpbicsIHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyB0b2tlbiwgZW1haWw6IHVzZXJFbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyRW1haWwpO1xyXG5cclxuICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzcyh0b2tlbiwgdXNlckVtYWlsKSk7XHJcbiAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnO1xyXG4gICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yTWVzc2FnZSkpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkSW4gPSAoaXNMb2dnZWRJbiwgdXNlcikgPT4gKHtcclxuICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXHJcbiAgcGF5bG9hZDogeyBpc0xvZ2dlZEluLCB1c2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXllZEdhbWVzID0gKGdhbWVzKSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfUExBWUVEX0dBTUVTJyxcclxuICBwYXlsb2FkOiBnYW1lcyxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsImxvZ2luUmVxdWVzdCIsInR5cGUiLCJsb2dpblN1Y2Nlc3MiLCJ0b2tlbiIsImVtYWlsIiwicGF5bG9hZCIsImxvZ2luRmFpbHVyZSIsImVycm9yIiwibG9naW5Vc2VyIiwicGFzc3dvcmQiLCJkaXNwYXRjaCIsInBvc3QiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyRW1haWwiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInNldExvZ2dlZEluIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJzZXRQbGF5ZWRHYW1lcyIsImdhbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==