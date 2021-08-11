(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,988];
exports.modules = {

/***/ 198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./pages/LoginMain.tsx + 2 modules
var LoginMain = __webpack_require__(10);
;// CONCATENATED MODULE: ./config/config.js
const prefix =  true ? "https://WONJUNGHEE.github.io/study_room/" : 0;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./context/context.js

const PortfolioContext = /*#__PURE__*/external_react_default().createContext();
const PortfolioProvider = PortfolioContext.Provider;
const PortfolioConsumer = PortfolioContext.Consumer;
/* harmony default export */ var context = ((/* unused pure expression or super */ null && (PortfolioContext)));
;// CONCATENATED MODULE: ./pages/index.tsx





const IndexPage = () => /*#__PURE__*/jsx_runtime_.jsx(PortfolioProvider, {
  value: {
    prefix: prefix
  },
  children: /*#__PURE__*/jsx_runtime_.jsx(LoginMain.default, {})
});

/* harmony default export */ var pages = (IndexPage);

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [867,10], function() { return __webpack_exec__(198); });
module.exports = __webpack_exports__;

})();