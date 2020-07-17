module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+dWh":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiI+PHRleHQgZGF0YS1uYW1lPSIrIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQzNyAxLjQzNCAtMS40MzcgMS40MzQgLS44MzIgMjMuMDY2KSIgZm9udC1zaXplPSIyNSIgZmlsbD0iIzI3ZWFjOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IlJvYm90byI+PHRzcGFuIHg9IjAiPis8L3RzcGFuPjwvdGV4dD48L3N2Zz4="

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0DA9":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALBAMAAAC5XnFsAAAAGFBMVEUAAAD///8bIH8bIH8bIH8bIH8bIH8bIH/wy76IAAAACHRSTlMAABcuW4GIjDxq1bsAAAA1SURBVAjXY2BQCQ9RYGRgTi8vT2ZkUCsvLy9TZHAHUuWODOEgKpABRJYXwnhQOahKqD6IKQBXORYxzfeqlwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "0XOs":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAD+UlEQVR42syZW0hUQRjHZ4+XMMWkvGSFGYZEFt3IhJAosAvRQwZFZVAUFFQQWT1Vz1HSQz0EdsceMiQyLEiki9qL+GDFZkh2Q7ubgZfMdd3+H30LwzCr65xzdveDP7Mzs2fmt3Pmm/lm1iNcsgctvjgkC6BFUB6UBSVztQ/6Dn2EvFDrxsKEwfHa9LgAmYhkHbQeSg3zsRGoEboP6J6IwAJ0IZK90DTDJoahu9BDQAdcgwXoZiSlIar7oE/QL87TdJgFZYb4/kvoIoCHHIcFaBm/etn8UDP0BHqnGyk8l46kGFoLpSjVndAZGdjjAOgGJDuU4g7oKjr6HGYbk5Fsg9ZoRrgi+EM9NkHJy09BcVLxM+g6OvAbtEejvA+ypOJqtFUnlMKJNkw/dI8C+pxH1G/SJp5rQnJFKS5FXxm2YGEroNlSvptBA3beFgM/looSoE12YUuU/E105HNocamG+qV8Mc1ry3AK0DqaLzsUQNudWgZ5N6uXiuKh5aYjO1/JN7uwYzcp+QJT2Fwl73WaFKP7E8kPqSjHFFbeTn1Ko05al/Q50xQ2Wd5K7a4AY5jsZAmmsPI6GifcMytkZgLWJ31OxeoQ7xLsVHmUTWG/KsFQrgtxMbHlSEXfTGE7lfxiF0Y1X/GNt6aw7RwoyzuM01NBjcBeGMHC+/8iaVHmVomDUyCHY4+g9dJabic2qFPyW9DJDAdAKXDZrzg/HXNGjWHxcDfHrkGbBJWjsyk2neqA6lhQg92oi+w2JJ9G6Ux1Gp3ONACl08IRqFAqHoUqMTAjTh1r5iA5CSUqp9R70CN0NBxGEL8MKtOciqvwfL0jZ7BdFT5P1bGEADqkKOwoTwV1u6SIrI0uNNBxv3S3QKfbAmglpHsTNfh+rSOnW4BuR0Kv7hoD0wgfhjLGuczwa36Uendwg08M9u8NAEq3LTs5+5QaB7AfwEn4vJXXSBN/eM2gXxy5kQFoEZKDmk4uAfg3v+Ysvj4q0twH6IKiNp7f7Y7ddQGU5uYJTaRFHZ4DrFdzOZfHms7Thna6AYiC6w98JBoMp3/PBEBz2OuTNNWXAdooXDYrTFC65jkeArQmEqBhwQI0hV99mqa6AaC1IkJmjQNK62E5lK2pbqVFW0TQrDFALfb6uZrqDvb+0ZiAhe2GlmrKKYA5D9BhEWGzQowqXQyv1lT18hI1IKJglgZ0ldDfYP+BzgK0R0TJLAV0ifj/n4BuT6dX3yWiaJYESo50SLNRBNiZ3ogom8Wg2bxEJWq+cwugLSIGzAJoGi/6uoCjDqD1IkYseOZJ19RRPHlHxJAR7DxN+atgUB1rsGqg+x66ANAREWNGsJW8K5F5edEfEjFo/wQYAC0WRQtRnugzAAAAAElFTkSuQmCC"

/***/ }),

/***/ "3Vrq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-d076b1eecb1d9cf15df3bf7bafed8ef3.jpg";

/***/ }),

/***/ "3tB4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAANlBMVEUAAAAbIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH+tE6MjAAAAEnRSTlMAAgoXLTdLTGFnaG13g4SKi4xKYS8hAAAAY0lEQVQI12WPSQ7DMAwDx1bkpd6k/382h6JpEvM2IAWRAEHr8FE1AIB0X6205V0AZFqOQMw2BUK345vjsB5Qz/yUXfmseHFcldH4qw283Lj45r/v1dPFyXX7j0xLt35b/+e+E/IiBCR6rRykAAAAAElFTkSuQmCC"

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZuWU");


/***/ }),

/***/ "6xYp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-dc1eb5b0e4d157ff5e6211cd8c0b1c24.jpg";

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8ClN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTQ5Ljg5MSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBFOTJCIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZBOCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoMTMyIDgxLjYyNyAxNjYuMTY0KSIgZD0iTTIgMzIzbDEwLjU5OCAxM0wyMyAzMjN6IiBzdHJva2U9InVybCgjYSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjY1OSIvPjwvc3ZnPg=="

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "MrVA":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "OlZ4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/7-237041cca9cdcc9dc6539da8eccc55b6.jpg";

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "V2MJ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-83e12d23b3b76dc5e6523d956327293c.jpg";

/***/ }),

/***/ "WItf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/8-f2cebfea2b54a7a697944b9a002ce2ab.jpg";

/***/ }),

/***/ "Y2rC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-04503aba5208f4549db084e11adb9186.jpg";

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "ZIYp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BlogSideBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("aside", {
      className: "widget-area",
      id: "secondary"
    }, __jsx("div", {
      className: "widget widget_search"
    }, __jsx("form", {
      className: "search-form"
    }, __jsx("label", null, __jsx("span", {
      className: "screen-reader-text"
    }, "Search for:"), __jsx("input", {
      type: "search",
      className: "search-field",
      placeholder: "Search..."
    })), __jsx("button", {
      type: "submit"
    }, __jsx("i", {
      className: "fas fa-search"
    })))), __jsx("div", {
      className: "widget widget_aronix_posts_thumb"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Popular Posts"), __jsx("article", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "thumb"
    }, __jsx("span", {
      className: "fullimage cover bg1",
      role: "img"
    }))), __jsx("div", {
      className: "info"
    }, __jsx("time", null, "June 10, 2019"), __jsx("h4", {
      className: "title usmall"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Making Peace With The Feast Or Famine Of Freelancing")))), __jsx("div", {
      className: "clear"
    })), __jsx("article", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "thumb"
    }, __jsx("span", {
      className: "fullimage cover bg2",
      role: "img"
    }))), __jsx("div", {
      className: "info"
    }, __jsx("time", null, "June 21, 2019"), __jsx("h4", {
      className: "title usmall"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "I Used The Web For A Day On A 50 MB Budget")))), __jsx("div", {
      className: "clear"
    })), __jsx("article", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "thumb"
    }, __jsx("span", {
      className: "fullimage cover bg3",
      role: "img"
    }))), __jsx("div", {
      className: "info"
    }, __jsx("time", null, "June 30, 2019"), __jsx("h4", {
      className: "title usmall"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "How To Create A Responsive Popup Gallery?")))), __jsx("div", {
      className: "clear"
    }))), __jsx("div", {
      className: "widget widget_categories"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Categories"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Business"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Privacy"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Technology"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Tips"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Uncategorized"))))), __jsx("div", {
      className: "widget widget_recent_comments"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Recent Comments"), __jsx("ul", null, __jsx("li", null, __jsx("span", {
      className: "comment-author-link"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "A WordPress Commenter"))), __jsx("span", {
      className: "plr-5"
    }, "on"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hello world!"))), __jsx("li", null, __jsx("span", {
      className: "comment-author-link"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Aronix"))), __jsx("span", {
      className: "plr-5"
    }, "on"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hello world!"))), __jsx("li", null, __jsx("span", {
      className: "comment-author-link"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Wordpress"))), __jsx("span", {
      className: "plr-5"
    }, "on"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hello world!"))), __jsx("li", null, __jsx("span", {
      className: "comment-author-link"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "A WordPress Commenter"))), __jsx("span", {
      className: "plr-5"
    }, "on"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hello world!"))), __jsx("li", null, __jsx("span", {
      className: "comment-author-link"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Aronix"))), __jsx("span", {
      className: "plr-5"
    }, "on"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hello world!"))))), __jsx("div", {
      className: "widget widget_recent_entries"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Recent Posts"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "How to Become a Successful Entry Level UX Designer"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "How to start your business as an entrepreneur"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "How to be a successful entrepreneur"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "10 Building Mobile Apps With Ionic And React"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Protect your workplace from cyber attacks"))))), __jsx("div", {
      className: "widget widget_archive"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Archives"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "May 2019"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "April 2019"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "June 2019"))))), __jsx("div", {
      className: "widget widget_meta"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Meta"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Log in"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Entries ", __jsx("abbr", {
      title: "Really Simple Syndication"
    }, "RSS")))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Comments ", __jsx("abbr", {
      title: "Really Simple Syndication"
    }, "RSS")))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "WordPress.org"))))), __jsx("div", {
      className: "widget widget_tag_cloud"
    }, __jsx("h3", {
      className: "widget-title"
    }, "Tags"), __jsx("div", {
      className: "tagcloud"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "IT ", __jsx("span", {
      className: "tag-link-count"
    }, " (3)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Aronix ", __jsx("span", {
      className: "tag-link-count"
    }, " (3)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Games ", __jsx("span", {
      className: "tag-link-count"
    }, " (2)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Fashion ", __jsx("span", {
      className: "tag-link-count"
    }, " (2)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Travel ", __jsx("span", {
      className: "tag-link-count"
    }, " (1)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Smart ", __jsx("span", {
      className: "tag-link-count"
    }, " (1)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Marketing ", __jsx("span", {
      className: "tag-link-count"
    }, " (1)"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Tips ", __jsx("span", {
      className: "tag-link-count"
    }, " (2)")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (BlogSideBar);

/***/ }),

/***/ "ZuWU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/Navbar.js + 2 modules
var Navbar = __webpack_require__("zCU4");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/BlogTwo/PageHeader.js
var __jsx = external_react_default.a.createElement;



class PageHeader_PageHeader extends external_react_["Component"] {
  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "page-title-area page-title-bg2"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "page-title-content"
    }, __jsx("h2", null, "Blog Right Sidebar"), __jsx("ul", null, __jsx("li", null, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, "Blog Right Sidebar")))))), __jsx("div", {
      className: "shape-img2"
    }, __jsx("img", {
      src: __webpack_require__("8ClN"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img3"
    }, __jsx("img", {
      src: __webpack_require__("+dWh"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img4"
    }, __jsx("img", {
      src: __webpack_require__("3tB4"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img5"
    }, __jsx("img", {
      src: __webpack_require__("uDff"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img7"
    }, __jsx("img", {
      src: __webpack_require__("MrVA"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img8"
    }, __jsx("img", {
      src: __webpack_require__("wdfV"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img9"
    }, __jsx("img", {
      src: __webpack_require__("0XOs"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img10"
    }, __jsx("img", {
      src: __webpack_require__("0DA9"),
      alt: "image"
    }))));
  }

}

/* harmony default export */ var BlogTwo_PageHeader = (PageHeader_PageHeader);
// CONCATENATED MODULE: ./components/BlogTwo/BlogCard.js
var BlogCard_jsx = external_react_default.a.createElement;



class BlogCard_BlogCard extends external_react_["Component"] {
  render() {
    return BlogCard_jsx(external_react_default.a.Fragment, null, BlogCard_jsx("div", {
      className: "row"
    }, BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("Y2rC"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Sarah Taylor"))), BlogCard_jsx("li", null, "June 24, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "How To Boost Your Digital Marketing Agency"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("uc8i"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "James Anderson"))), BlogCard_jsx("li", null, "June 26, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "The Rise Of Smarketing And Why You Need It"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("V2MJ"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Steven Smith"))), BlogCard_jsx("li", null, "June 25, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "How To Use Music To Boost Your Business"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("3Vrq"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Sarah Taylor"))), BlogCard_jsx("li", null, "June 24, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Creative solutions to improve your business!"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("6xYp"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "James Anderson"))), BlogCard_jsx("li", null, "June 26, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Finding the human in technology"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("fDh5"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Steven Smith"))), BlogCard_jsx("li", null, "June 25, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Ideas people want to spend time with"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("OlZ4"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Sarah Taylor"))), BlogCard_jsx("li", null, "June 24, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Ideas people want to spend time with"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, BlogCard_jsx("div", {
      className: "single-blog-post"
    }, BlogCard_jsx("div", {
      className: "post-image"
    }, BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", null, BlogCard_jsx("img", {
      src: __webpack_require__("WItf"),
      alt: "image"
    })))), BlogCard_jsx("div", {
      className: "post-content"
    }, BlogCard_jsx("div", {
      className: "post-meta"
    }, BlogCard_jsx("ul", null, BlogCard_jsx("li", null, "By:", BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "James Anderson"))), BlogCard_jsx("li", null, "June 26, 2019"))), BlogCard_jsx("h3", null, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", null, "Ideas people want to spend time with"))), BlogCard_jsx("p", null, "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt."), BlogCard_jsx(link_default.a, {
      href: "/blog-details"
    }, BlogCard_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", BlogCard_jsx("i", {
      className: "flaticon-right-arrow"
    })))))), BlogCard_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, BlogCard_jsx("div", {
      className: "pagination-area"
    }, BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", {
      className: "prev page-numbers"
    }, BlogCard_jsx("i", {
      className: "fas fa-angle-double-left"
    }))), BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", {
      className: "page-numbers"
    }, "1")), BlogCard_jsx("span", {
      className: "page-numbers current",
      "aria-current": "page"
    }, "2"), BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", {
      className: "page-numbers"
    }, "3")), BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", {
      className: "page-numbers"
    }, "4")), BlogCard_jsx(link_default.a, {
      href: "#"
    }, BlogCard_jsx("a", {
      className: "next page-numbers"
    }, BlogCard_jsx("i", {
      className: "fas fa-angle-double-right"
    })))))));
  }

}

/* harmony default export */ var BlogTwo_BlogCard = (BlogCard_BlogCard);
// EXTERNAL MODULE: ./components/Blog/BlogSideBar.js
var BlogSideBar = __webpack_require__("ZIYp");

// EXTERNAL MODULE: ./components/Layout/Footer.js
var Footer = __webpack_require__("v6Hh");

// CONCATENATED MODULE: ./pages/blog2.js
var blog2_jsx = external_react_default.a.createElement;







class blog2_blog2 extends external_react_["Component"] {
  render() {
    return blog2_jsx(external_react_default.a.Fragment, null, blog2_jsx(Navbar["a" /* default */], null), blog2_jsx(BlogTwo_PageHeader, null), blog2_jsx("div", {
      className: "blog-area blog-ptb-100"
    }, blog2_jsx("div", {
      className: "container"
    }, blog2_jsx("div", {
      className: "row"
    }, blog2_jsx("div", {
      className: "col-lg-8 col-md-12"
    }, blog2_jsx(BlogTwo_BlogCard, null)), blog2_jsx("div", {
      className: "col-lg-4 col-md-12"
    }, blog2_jsx(BlogSideBar["a" /* default */], null))))), blog2_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var pages_blog2 = __webpack_exports__["default"] = (blog2_blog2);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fDh5":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/6-4e7878f7ca44616ee9c0d7906ea56da5.jpg";

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "uDff":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAM1BMVEUAAADyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmB/M/cWAAAAEXRSTlMAAQcXHCssQVNbZnN7foWIjJzgQlEAAABoSURBVBjTbZBHDsBADAJne1/7/6/NIUVJZI4jYwEAuNyW6mrZcSkOlV5rFx3xJEl28QC+bEkAUWa478OUCG7sh0DYw5G18FLRTBP/Rl4aq/NRX2j9oqoWMozGeyOEEdUoZNW2xvlPeABQfwT1cOzLDQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "uc8i":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-94872a3dc167048f07c04174a03d43da.jpg";

/***/ }),

/***/ "v6Hh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "footer-area pt-1"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-sm-6 col-md-6"
    }, __jsx("p", null, __jsx("i", {
      className: "flaticon-copyright"
    }), " Copyright 2019 ", __jsx("a", {
      href: "https://techmansolution.in/"
    }, "Techman Solution"), ". All rights reserved")), __jsx("div", {
      className: "col-lg-6 col-sm-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Privacy Policy"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "wdfV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAFT0lEQVR42uyby3PjRBDGW5LtxI84tuNNNmQ3BNilIIdAcdgDXDhQXPh7KR4n4AYX2BRUQbHLPsKjNomfsp3Er6E7GsfyWLLlbMuSZXfVlLJrS/b89PU3PaOxBksYX/7UoUMGWwFbXrbyF4/ix27nxJYEDPUzJ4EM4MSVt4lJ19AiCiatQNnw2NevUFXdSCoKoRhSLfY0StzycnTuWSRAIZiUopYsY2YUFhKUVMumopY1Hz8yvxAehWCSNiAFCWme35H86Wv0KREaRSEUXYKwg1kP+F7FZNlgBgYKwaw7qEUPYcYX5gZKqiWrmG5yQcYL+q4vfAGFYNYUteRCqhavinp9M0comoNaUhGrWb9BQ2/PpCgEk1CgkFqMiM96qJ+vXEFJtWwoYNJLOG8ujIFCONuKWgItQrdzGrx3T4fHz/pQa4ogFTUSZLgfYHuIrRg0pExSg48eGNfH+8VAa+GczK4RUJWw6P3oLR10bQgtwBhMnUZAlcMAabegQS49hBMLfrjIq2YeCkU9fMNb2ZVa06CwgVBxopFKaKDjaS9O+/BfWfgB6pkdVA1bP8gCcQcNXE013fbPTVTa3bzV0uvjKZnPGNC66nGb/0jhqWNh1ZewAouDnfF7REp5d0+HT48M+OTQgHd2dUdI11Uz/vfhPvt9Tsr56Y1HQZA+RZ3fymqOKfYA05GOnvIk43wdLp8agArMp/bv8HXuYJtdVYVQKIpSZq/I1zkqVplHy1FFoU9d4aE1b1B3NjVIxHjBEyzG2JRLRiMj3dzTr9vjv2aR16d0Oa0bmbJQ+u35AaNUBzg3seExjqnx8fvWa/UW/1zOXrQypl855peinp8C/H6CdUdz9BEseYgQVpoQxMalgMw6X+fSWI/RtQXfPSBDf2pPPbzfwJYMfazOqs3x59QEp2ZzQwLJOkCApVpuQ78BJR/RVPi8wv01SsEhKP70MwzW9Fujh67q2MwGKpsC1xHNb1CdLv+8TwXFWk9tuaiqZANFhs7oJ5juwo/RtOCboialn3kBcNmx/u71LUPniIs2wK/P+74suYyAQp+ir9+Yh0+VmNKPzjyrCfjlrx58f9z1peTAyDi5CKkqw5J6G9YoJFx8am9rOPLdK842op7XBbyqUutDu+N7bWw4gSKfus9xdaqZaIGt0phs6NUpiiIPI6WUTAHnqJ5yQ1zDmmP03BTFauhOoMpYqfeFtUBntqyO0xoUQWmiZ5GPmRcCzxVQxdabL5gx+3MCRd0iMcdZJr4I6sm/6hqUlZadLhYpcQvYtz93r9M0YCCupd8YKCo8scAiVW1zGbq9kcKSCWffCXGcuC1ysIEi9Xz2ISxynKJ4qvoEUKuwLOhYXY9SQYkVJPgR1XThCkrutTaXGBLtDP4BOdxk1qSFWHpTdknACCmMErZ/7IC8gKLC880Ip1VF9pGOVbdfLHhVVFTCVMA0EMxMF5i4woX11Ofg7wZ4v9RStUGpTFOLp+nYlNfpg+6GHEzDDkWqhX3EXjRQXRuQgVo68/jgaaCC3jvVVNRi+qEWDlBVeRfnsWWx56CWdlikPPVxBRr6kU9lQksZiepBqYVDURR/YNuF2/9YcKCWmjISXS3SUOrpARiqip6WPoLZ16h+k3DqcsPawobnJ4Xyd7qH2HY8nkfG+11UKtbb/BaGUpC2FtOD60uw1tcPHN76EkE9jgqomUczORKd2cARrH2HlYgyRChee7sbgiNQLyM+V2TbMv0ErC3Yg2gjwMYK1LiqaBXwJKpq4lQUxVMYLh+vQE1QFc3L/o6ikXMriuJP6VVVWMXUOuvtKPbrfwEGAFtgxPhWjUiMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "zCU4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ActiveLink.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(link_default.a, props, external_react_default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ var utils_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// CONCATENATED MODULE: ./components/SidebarModal/SidebarModal.js
var SidebarModal_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SidebarModal_SidebarModal extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return SidebarModal_jsx(external_react_default.a.Fragment, null, SidebarModal_jsx("div", {
      className: `sidebar-modal ${this.props.active}`
    }, SidebarModal_jsx("div", {
      className: "sidebar-modal-inner"
    }, SidebarModal_jsx("div", {
      className: "sidebar-about-area"
    }, SidebarModal_jsx("div", {
      className: "title"
    }, SidebarModal_jsx("h2", null, "About Us"), SidebarModal_jsx("p", null, "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration."))), SidebarModal_jsx("div", {
      className: "sidebar-contact-area"
    }, SidebarModal_jsx("div", {
      className: "contact-info"
    }, SidebarModal_jsx("div", {
      className: "contact-info-content"
    }, SidebarModal_jsx("h2", null, SidebarModal_jsx("span", {
      className: "main-color"
    }), SidebarModal_jsx("span", {
      className: "or"
    }, "OR"), SidebarModal_jsx("span", null, SidebarModal_jsx("a", {
      href: "mailto:info@techmansolution.in"
    }, "info@techmansolution.in"))), SidebarModal_jsx("ul", {
      className: "social"
    }, SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "fab fa-twitter"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "fab fa-youtube"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "fab fa-facebook-f"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "fab fa-linkedin-in"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "fab fa-instagram"
    })))))))), SidebarModal_jsx("span", {
      onClick: this.closeModal,
      className: "close-btn sidebar-modal-close-btn"
    }, SidebarModal_jsx("i", {
      className: "flaticon-close"
    })))));
  }

}
/* harmony default export */ var components_SidebarModal_SidebarModal = (SidebarModal_SidebarModal);
// CONCATENATED MODULE: ./components/Layout/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Navbar_Navbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Navbar_defineProperty(this, "state", {
      sidebarModal: false
    });

    Navbar_defineProperty(this, "toggleModal", () => {
      this.setState({
        sidebarModal: !this.state.sidebarModal
      });
    });

    Navbar_defineProperty(this, "state", {
      searchForm: false
    });

    Navbar_defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Navbar_defineProperty(this, "_isMounted", false);

    Navbar_defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    Navbar_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("div", {
      id: "navbar",
      className: "navbar-area"
    }, Navbar_jsx("div", {
      className: "adani-nav"
    }, Navbar_jsx("div", {
      className: "container"
    }, Navbar_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/"
    }, Navbar_jsx("a", {
      className: "navbar-brand",
      style: {
        fontWeight: "900",
        color: "#007bff"
      }
    }, "Techman solution")), Navbar_jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Navbar_jsx("span", {
      className: "navbar-toggler-icon"
    })), Navbar_jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, Navbar_jsx("ul", {
      className: "navbar-nav"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, " Home "))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/about",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "About Us"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/contact",
      activeClassName: "active"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Contact")))), Navbar_jsx("div", {
      className: "others-options"
    }, Navbar_jsx("div", {
      className: "burger-menu",
      onClick: this.toggleModal
    }, Navbar_jsx("span", null), Navbar_jsx("span", null), Navbar_jsx("span", null)))))))), Navbar_jsx(components_SidebarModal_SidebarModal, {
      onClick: this.toggleModal,
      active: this.state.sidebarModal ? 'active' : ''
    }));
  }

}

/* harmony default export */ var Layout_Navbar = __webpack_exports__["a"] = (Navbar_Navbar);

/***/ })

/******/ });