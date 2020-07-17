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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dzTp");


/***/ }),

/***/ "3tB4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAANlBMVEUAAAAbIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH+tE6MjAAAAEnRSTlMAAgoXLTdLTGFnaG13g4SKi4xKYS8hAAAAY0lEQVQI12WPSQ7DMAwDx1bkpd6k/382h6JpEvM2IAWRAEHr8FE1AIB0X6205V0AZFqOQMw2BUK345vjsB5Qz/yUXfmseHFcldH4qw283Lj45r/v1dPFyXX7j0xLt35b/+e+E/IiBCR6rRykAAAAAElFTkSuQmCC"

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "F2rp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-bc561a24a1ea47003f9d9988a646a989.png";

/***/ }),

/***/ "HQDP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/10-3358cb604b3943fe75e234500b8fec7b.png";

/***/ }),

/***/ "MrVA":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Su4Z":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "V+kr":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-3358cb604b3943fe75e234500b8fec7b.png";

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

/***/ "dzTp":
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

// CONCATENATED MODULE: ./components/Partner/PageHeader.js
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
    }, __jsx("h2", null, "Partner"), __jsx("ul", null, __jsx("li", null, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, "Partner")))))), __jsx("div", {
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

/* harmony default export */ var Partner_PageHeader = (PageHeader_PageHeader);
// CONCATENATED MODULE: ./components/Partner/PartnerLogo.js
var PartnerLogo_jsx = external_react_default.a.createElement;



class PartnerLogo_PartnerLogo extends external_react_["Component"] {
  render() {
    return PartnerLogo_jsx(external_react_default.a.Fragment, null, PartnerLogo_jsx("div", {
      className: "partner-area ptb-100"
    }, PartnerLogo_jsx("div", {
      className: "container"
    }, PartnerLogo_jsx("div", {
      className: "row align-items-center"
    }, PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("F2rp"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("F2rp"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("V+kr"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("V+kr"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("tV0U"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("tV0U"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("gV10"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("gV10"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("ev96"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("ev96"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("kDfg"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("kDfg"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("fCHf"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("fCHf"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("Su4Z"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("Su4Z"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("xcO6"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("xcO6"),
      alt: "image"
    })))), PartnerLogo_jsx("div", {
      className: "single-partner-item"
    }, PartnerLogo_jsx(link_default.a, {
      href: "#"
    }, PartnerLogo_jsx("a", null, PartnerLogo_jsx("img", {
      src: __webpack_require__("HQDP"),
      alt: "image"
    }), PartnerLogo_jsx("img", {
      src: __webpack_require__("HQDP"),
      alt: "image"
    })))))), PartnerLogo_jsx("div", {
      className: "shape-img2"
    }, PartnerLogo_jsx("img", {
      src: __webpack_require__("8ClN"),
      alt: "image"
    })), PartnerLogo_jsx("div", {
      className: "shape-img3"
    }, PartnerLogo_jsx("img", {
      src: __webpack_require__("+dWh"),
      alt: "image"
    })), PartnerLogo_jsx("div", {
      className: "shape-img4"
    }, PartnerLogo_jsx("img", {
      src: __webpack_require__("3tB4"),
      alt: "image"
    })), PartnerLogo_jsx("div", {
      className: "shape-img5"
    }, PartnerLogo_jsx("img", {
      src: __webpack_require__("uDff"),
      alt: "image"
    }))));
  }

}

/* harmony default export */ var Partner_PartnerLogo = (PartnerLogo_PartnerLogo);
// EXTERNAL MODULE: ./components/Layout/Footer.js
var Footer = __webpack_require__("v6Hh");

// CONCATENATED MODULE: ./pages/partner.js
var partner_jsx = external_react_default.a.createElement;






class partner_partner extends external_react_["Component"] {
  render() {
    return partner_jsx(external_react_default.a.Fragment, null, partner_jsx(Navbar["a" /* default */], null), partner_jsx(Partner_PageHeader, null), partner_jsx(Partner_PartnerLogo, null), partner_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var pages_partner = __webpack_exports__["default"] = (partner_partner);

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

/***/ "ev96":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "fCHf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "gV10":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "kDfg":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "tV0U":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-afd41c8bb629d8d7904bd7cd0b8e0488.png";

/***/ }),

/***/ "uDff":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAM1BMVEUAAADyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmDyWmB/M/cWAAAAEXRSTlMAAQcXHCssQVNbZnN7foWIjJzgQlEAAABoSURBVBjTbZBHDsBADAJne1/7/6/NIUVJZI4jYwEAuNyW6mrZcSkOlV5rFx3xJEl28QC+bEkAUWa478OUCG7sh0DYw5G18FLRTBP/Rl4aq/NRX2j9oqoWMozGeyOEEdUoZNW2xvlPeABQfwT1cOzLDQAAAABJRU5ErkJggg=="

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

/***/ "xcO6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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