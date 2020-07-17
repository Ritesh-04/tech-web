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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iX55");


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

/***/ "Aff2":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzg0RUMzOTk1RDFFMTFFOThFQUM5OTMxNDlDNDZEMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg0RUMzOUE1RDFFMTFFOThFQUM5OTMxNDlDNDZEMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODRFQzM5NzVEMUUxMUU5OEVBQzk5MzE0OUM0NkQyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODRFQzM5ODVEMUUxMUU5OEVBQzk5MzE0OUM0NkQyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYG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"

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABdCAYAAABTl8MxAAARFklEQVR42u1d6X9U1RkOKAIWwVIVrdZiRa1ara1brYKoWK1WlFq1tVVQkzuTmTBZsL/+6oZVEcUFd4SKJRDWENlmS0JAQbZs+v/Ml55nznOck+HOPefO3Elyk3x4CZncmbnzPufdnvc9Z2pSvbkaymQhlwn5o5CnhDwr5K9CFgr5mZAztWsnpEqi/gNl3y0kIaRBSL0m+H25kMVCLpxQ2vAAskjI80IiQpwS0kyAbhQyaUJ51QPkUlqGFxiQOiExIU1C7hMybUKB1QFkAV2SYyn1tBa4sLMnlBg8II9RyY4PiRKUJUKmTigyWECWlgGIkiZaykQGFiAgz1QAiALlDxOBPjhAnq4QkAiTglsnFDpyMaRYYnyNKyeUWjkg91GhToWSYHV/3oRiKwPkJiFxk8Kz/VIMdQoyr0eFTPF5I+eQnjl7AhBZGJasQ9J98ucX2ZzzZZcAZaDwmEeQv93yBn5CluAfQp7jz5vHc9aGf2ZRGdFSgGSEZXyazDmvbMk5Xx3LOZ0DxhoF8WSu4c0vZcrdxAURo9trFPKAkOnjFRCwvPdTGa5KBgB7BBCvbcs5H+6TrivjbSVwgY970CszySg3u1A2ALRFyENluL4xQy5eSyWUVHL3YM7Z2JlzXhZWsv1rYzxRqfCCEm98B8lMx0BmLhqvgJzHDKlkcM8QgDW7c87q9pyTPGmMJXG6oWLXNUPIk5b8GUD97XgEpIbV9govBcF1bT2cc1a25Zz/iiDfNWBVxf9FyFna+1xMMCKW9U2tkIvGIyDXUlFRLyXBUhBHEE8Q4A2gROgKb9De53KTe3SxkocZ68YVIFjFf2OWUxqQvqIAP2AM8PXM4mZpwDf5ZJYbWS+NK0BqWD94upN0r7SK1oM558XWnLO5R/w+KB/3KBih0Hv4Htf4BKSO91Q7HliA4gfOJfsbM1XtcF3v75GWsve4iC/mrCtKhV7m02UpUPCce8cbIKq/3mBSEqyk49uc8+rWnPPxfgmQIetazkGKS2gxkZT/plgDKZZxBcgFVFbEBhRVm8B1GSp4xJJlQuYL+bvJCjsZm5Knp9IPj2Vqxe3BSfT3xjohTXnvq5zzxnYR7I8X6hUPUJZy3qu+1Gvi545vZPLgkjDExzLNX+oPF3AFR02gdNJ1/WdrgVYxuC5P68Pz953IOW/ulIQmXr8oYYDbesKSVsE11wu5RcjsMAOiCsUWBlQjKP/rzjkvbc45m0T21f2dZ9blmABBkvDGjpzzecYV4Cit5HrDh5vKKcwGyjOs+ieHFZBL6FaMvRK4FShtrci6XlUF42B5jS4AsF9YyFuCnlmXKpksNJIB8FLuPSwqo1wAcbrhe0czaWm6YBFJPsfGSuBqXhcre017AaiyADkpObNPDkgwXACJUrnXlrjvK7VR2GLLbCaTfGYYATmfpt5go0wwwtu/kVkXVreBES5pbfgJa1u7tySwenfSTbGLDcUnnvvgaHRfNhfNtyUDsZKRCq9Py2ZW2yFjwViyIYbaZk1HzjlwqqSlRaj0K1yK26WGLDFCt3dXGAGZxfqh3naFJ0nTIxXee8JYn7hSM7CwVTulG/RIpRMug3rztK6lTaF5Y9gAqWF20miTcak4sBup8DZJr2T6/bmvgyJL25iVz0dtY3hunAmIutdf03IiFosnLl47RgY6VIBMY0s2bqtUWMUWUb2/KFLh9RnWE5ZBHrEIlT/c3u6jRguLM71Vk5M3Ml03AiKsr07UUAlxX7WjpU7xc/EvtDTSynXl44lwPS8JVritx951IWVGmxg82dZDRguJ0nLn8D5vsWgP5+9vQybPMtQJF9skQClupI16QGo4DdLiJ4XFBwe1AuW2H7UDBdfA5a0SKfSXncb0OcJYsJD3eBM7nxFT8oBMDvVOPrWWi21+2AC5UGNurUFB5Q3l4sPvP2WOJwAA2dU7u+X4ERVmYpKf0votjSZLxmu+2yEXC7ueUcpVYQJENbFsdlwNWfEgC1cKK/lon1S4qWiEkj4Qdcg7HTJrM8QfVShew/57vSnLwvu/3S75N81q4wT23DABchbJvQY/9QXiAniufJBPS4V7gQI+7PO0rPwPnLRKCFDs/UnITzkB6ZmAJIUFrt6Vcz5LnuZGVdEYGkBqWIzF/FgJFNrJovEFkJDdEpRSisa1uAYk464jVjSMcjm/okITXveCdBqAbMic5kLVlr3rwgTIJLLB1rWJmliBYuEm1MBdKRIS1wII0PBgkjN2dUwzA/MDpnlltAxW75RJg0tMa+Cc2o/DAoiiKJ6ja6jzE+QRsFHJox+PbArWkCzRqMIqBo1imTLXMwYs5r1FSsUPBTas0AWQOloYgD0jLIDU0D00+XFdSbojlXlBKaBXsgPu4H2wRwbfdK8x01KKjJOaX1YSkH5pnXhvFK8e1reclX9oAKkhld2c8snqIn7sOio7jUhvEbiLrQArGVsgwGnhWkv6JUJy8VkvKwXxCUC2HfaMTzG+zvlhAuRCzkw1lAPKtq8lRYIiLd07VOlQlOLENnZJSsXH69d6AbL5oAQE6bghYVDbI0IDiKqOfdUmOl2P1Yr2b36cqK/gQtJkjhFHUL90DVi5Las41kpAdh6xmrzEYrs6TIBM5nhO3K9yFCitrFFQF+htW/xEqgy3ld8s1B8MIAjmb9IVWqTUjUwWZoYFENVdrC1nR6+qUb7olJaieulQFABoPyIfbxVKPDgYLCBgky2KTjU5eVeYAFG9iHKmEvPKz4KBzUrlwyoAEqwHafLbuxhn+srr1VcIiD7tMnc0ATKZ9cccWsSMohMcJpG+aClHURnODKN6Bij4CUDyDatOGfw7vvXXgQwQEEdLqaeMBkCmczZXFU0x7oS6mx031UuYzVQxURYodF8A44VWaSmHvhfx47jMtvC4xRyxNSDtR31bHED53UgDgp71I0L+qcUINevUTDf1ONnWGlLY9akyT4jIMnaszxTcF1JeBHxU94Y+e9BZlhsgtdWqTfxW5KbjmtTQAfaf31nJkR0q/QUoyL6whQ7Kw+DExs7yRoyG1CE91nVIqa16D4wUIJOp5Jgll5Rgpaym3COVgAJr+YKBfl2y0OVDoE9XAEjbYQnI1sNlARIjrTJvJACZ7mcMSAMmwiG7igIwrATuC4wvgvrr26Tbwu/dg+W/5g5yWZt7ynZ/jewLTR9uQOZ4nfSQKnOoupw6BYMS4L6wlQ7jqhg5LXc6EsEcgHzZXZH7a+ZQxbADUms6eiPdV7nibSp6+Hwo8oVNcqIFVuL3vVWDCq/j0qDyu6vLCTLA21w0NeVxDCB8Oah0fddT1YChpaB2AL+FHj1iAEDx+76KI8NAdwV1jSoB7h/uLGuBW3cQKwuZz2vb5UCCarUeHKwuMPmzV47LJtfKLTKFxWN+VnqaQw4Y6O6qrNBUreMrhhMQtTt3SHcQHwp+HBwUet9ITz/aL5s/6d7yVq41KP1yUAHvh5jyeapA3yctAVnLqZZs5fcIK3ksiO6in4svJyDx03y7UPy+kzLzWbVd9ssx84R0Nb9leqCwqSeoWJMkKHmqhWkxUuJ9lsPduJ91aZlC4x4rXDhR1iY3DzeXdZ22E+k0NwJgYDFIJQEIphXRpsVQA3oeapwny1Q2COvJp8WcIwa1ApoeKW1+EfR7AwJXt4rFYaX8GK3kmUoHI8p50tXahpmImytRvrz9Wzl5iGwGtQPcGppQ6BJiJauuIYDMVpCpqQwMwR5x4ZU22fpVvJhX6gsQAUz3YCCW20KGYtjp94tZFLVow86np8N9cngBmRhW8CcCjLdEZvPyZqkIWM6mLpkY7GNPHcwulKPckS1IuK6bwCKVxesjvsBi3ZSNe8NexteFi/0sJQfzAgBE7UuZMxL9EFDQd7C9mTBtwvnBpZ2QqSqmEjHcgOobMQe+HG1aKLO1R4IEhheBWz0XVtCpSddA4TG8D67H88DkwlX+exMHGVxcmAIa2eG7aqdWfyCgNLAFcUZqhBpUF3Ovnwr4xuOdsGKhYByC1nFMWg+YXKSxiDuQNzicDdAwEI2MCBYFK0Pt8PEBaQEf7pV/R7YE68PoKawDj4GExE+AjtdXlX1aZ3275flfcF9dwbitCLmuq1Ij2DGcwtjyBEExDjyoCl+tcPyOoI/YAuVgKgQML5SP7AkKR3yA0ldTABhAfP8rGZtwPZIHnACR1GgVMMZQurKWbH/BwrAgYKGYagkIEL+HG1S1hQsz/Q0bV81+huhUzFG0u/p/Whe3oz20vxc//4c41i8zKYAH5X96QFpLz3fyb7A+AJ3qrYzWd9m/eNNIA6LkbKbIf6a1JKrJc9lW9wAIbgzWgmAOK+z5XloNiloVawJ6T3zmp1OFg9tGFBDdYtQXjan5Jl9T80FKlvELw3fv7ZEgwB0iEcDmVFiQxV4Uv2nwgtEEiA4MDi+7jXs3oqnCF5ANLzh9BWvJdw13yeIQ8eXVNpmhdQY0kMd4GvGTBo/EppSp7L0/xMq2kSspNpzAqAoficQGkYK/SS4OrgwkafdgxaSj3siy/n6Vkd4GPJvbmBdzJT1fzkhqEM2vvcfkgB4YBaTdyNgwlX9wMJBpyVjRXvpRC4jet7+IWckjqcI58LGU5el2lRKViC9IezH3hco93y7eLlPmjmPmLXgWrmuJzdkqo/GIojMZb66nW6vVpgbjWr8+eGsht9bJkyg+Scq4AmBQlCJ1Tmtf3ZHxlwbHbAa2R/sJa1hR5/CD3M+BZ+WXm5gURAOPL32FlgEGvNFrUQQpMjEE/j0nCqSmJTGa4OzalDAD4nbExzxyaA9zGqax3Hli22IVFnOA/R51CAKGLRBzcByV6sEoctPDShIsnMcMIG4jSpfTemqrGms0a4A7Q1NsJSdgkDqjzZCnbY4XyFCdN9OsxHNbQ5jBmMH0eT4TgdpqB3+9vwLrgKWA7IRLAxmKPgwoGDDIyNJQ+ecJTZ3W6cutECD9fiwB8iOCsEybLa5qgYmeTpY1C7ZRI8jnh/W6pLLVsYQ7v5FtBcyM4RpVcILeB9uM2CNqnFh+6rLP/fShsIGBD6G+MCBejYBePCsAARBbOAsMHgwWALeV1ZpoisRURCdc15ZD0noQd8BUYy4Zk5fCchLidReGHZDpBKO52hU8isEsW8I4SG0Vq3iwwoq+96pJ0npCwPYCrAKcGWaKRcEZEX+rc6NUwgSI1TlYfmqOdBFFD0ERiGwKVoBGF6ZZUIMAiExfBfPEfYU+DFPkBrcJ+rCAMZVdyeXlpq7qmMG8aP0V9PIxRwbXgiZYnmTcKhtgmDdD5a769QHPmKkCd24YAZnpNc6qiELVBYTyFDmo+uQIuvDr6EZiygRBFgCg5atOlMDv2BwEcjF5qrCiqziF2UQ2YuwAolY5XA0CLbY5Y8WDWkczCukpfP9qBmRwVBh9VWOk2HOCgJ0/3qN/aLdyGMhNdXL4FWEDZJo2SOEUj7KqoTwIFJ6XNql41AVoPoGXQm2wuWfo2FH3oNW3l1ZL1HzbEjWlEqagfmdxhpXmQWRwQRhSQEsWI0Y7jkhrAQ+VH8g7NXTmq4vxID3CbeWifSZXhw2QS+lzE24dwB9iSNH8lj7wkOodlaK+YwtTKtPCVhjeQL+7opxjPEaZRLQYghT4X0jtw0idoJG1iO3fFlpNVav2CkZKY9pkp2oZrKAoS19K60AcuT3M5CKmzH/J2PIoycXlVIBqZsUo9QFIrEjimqgvjVmu7WN/intG0J6+j/d5K48fwddp/JxHW80mP3dGagzQ73rhOJNUxJV0bfjwCzmCtISgPcEhvqdpYctcZCknY57k9Y/x+Q9SsfdQubdxHuA6jo3OpfXO5izWDGaHU1I+vhbj/+66oTyJUp0XAAAAAElFTkSuQmCC"

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "T8nY":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjYwM0QwMjY1RDFFMTFFOUFBRDlBQzMyMDczMjVGQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjYwM0QwMjc1RDFFMTFFOUFBRDlBQzMyMDczMjVGQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjAzRDAyNDVEMUUxMUU5QUFEOUFDMzIwNzMyNUZBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjAzRDAyNTVEMUUxMUU5QUFEOUFDMzIwNzMyNUZBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYG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"

/***/ }),

/***/ "V2MJ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-83e12d23b3b76dc5e6523d956327293c.jpg";

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

/***/ "aO6t":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZFQUFFNEY1RDFEMTFFOThCREZFOTQzMUY2Q0JDMzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZFQUFFNTA1RDFEMTFFOThCREZFOTQzMUY2Q0JDMzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkVBQUU0RDVEMUQxMUU5OEJERkU5NDMxRjZDQkMzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkVBQUU0RTVEMUQxMUU5OEJERkU5NDMxRjZDQkMzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYG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"

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

/***/ "iX55":
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

// CONCATENATED MODULE: ./components/BlogDetails/PageHeader.js
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
    }, __jsx("h2", null, "Blog Details"), __jsx("ul", null, __jsx("li", null, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, "Blog Details")))))), __jsx("div", {
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

/* harmony default export */ var BlogDetails_PageHeader = (PageHeader_PageHeader);
// EXTERNAL MODULE: ./components/Blog/BlogSideBar.js
var BlogSideBar = __webpack_require__("ZIYp");

// CONCATENATED MODULE: ./components/BlogDetails/BlogDetailsContent.js
var BlogDetailsContent_jsx = external_react_default.a.createElement;




class BlogDetailsContent_BlogDetailsContent extends external_react_["Component"] {
  render() {
    return BlogDetailsContent_jsx(external_react_default.a.Fragment, null, BlogDetailsContent_jsx("div", {
      className: "blog-area blog-ptb-100"
    }, BlogDetailsContent_jsx("div", {
      className: "container"
    }, BlogDetailsContent_jsx("div", {
      className: "row"
    }, BlogDetailsContent_jsx("div", {
      className: "col-lg-8 col-md-12"
    }, BlogDetailsContent_jsx("div", {
      className: "blog-details-desc"
    }, BlogDetailsContent_jsx("div", {
      className: "article-image"
    }, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("uc8i"),
      alt: "image"
    })), BlogDetailsContent_jsx("div", {
      className: "article-content"
    }, BlogDetailsContent_jsx("div", {
      className: "entry-meta"
    }, BlogDetailsContent_jsx("ul", null, BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("span", null, "Posted On:"), BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, "September 31, 2020"))), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("span", null, "Posted By:"), BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, "John Anderson"))))), BlogDetailsContent_jsx("h3", null, "How To Boost Your Digital Marketing Agency"), BlogDetailsContent_jsx("p", null, "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing."), BlogDetailsContent_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."), BlogDetailsContent_jsx("blockquote", {
      className: "wp-block-quote"
    }, BlogDetailsContent_jsx("p", null, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."), BlogDetailsContent_jsx("cite", null, "Tom Cruise")), BlogDetailsContent_jsx("p", null, "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing."), BlogDetailsContent_jsx("ul", {
      className: "wp-block-gallery columns-3"
    }, BlogDetailsContent_jsx("li", {
      className: "blocks-gallery-item"
    }, BlogDetailsContent_jsx("figure", null, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("V2MJ"),
      alt: "image"
    }))), BlogDetailsContent_jsx("li", {
      className: "blocks-gallery-item"
    }, BlogDetailsContent_jsx("figure", null, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("3Vrq"),
      alt: "image"
    }))), BlogDetailsContent_jsx("li", {
      className: "blocks-gallery-item"
    }, BlogDetailsContent_jsx("figure", null, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("V2MJ"),
      alt: "image"
    })))), BlogDetailsContent_jsx("h3", null, "Four major elements that we offer:"), BlogDetailsContent_jsx("ul", {
      className: "features-list"
    }, BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("i", {
      className: "fas fa-check"
    }), "Scientific Skills For getting a better result"), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("i", {
      className: "fas fa-check"
    }), "Communication Skills to getting in touch"), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("i", {
      className: "fas fa-check"
    }), "A Career Overview opportunity Available"), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("i", {
      className: "fas fa-check"
    }), "A good Work Environment For work")), BlogDetailsContent_jsx("h3", null, "Setting the mood with incense"), BlogDetailsContent_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."), BlogDetailsContent_jsx("h3", null, "The Rise Of Smarketing And Why You Need It"), BlogDetailsContent_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.")), BlogDetailsContent_jsx("div", {
      className: "article-footer"
    }, BlogDetailsContent_jsx("div", {
      className: "article-tags"
    }, BlogDetailsContent_jsx("span", null, BlogDetailsContent_jsx("i", {
      className: "fas fa-bookmark"
    })), BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, "Fashion,")), BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, "Games,")), BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, "Travel"))), BlogDetailsContent_jsx("div", {
      className: "article-share"
    }, BlogDetailsContent_jsx("ul", {
      className: "social"
    }, BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("span", null, "Share:")), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx("a", {
      href: "#",
      target: "_blank"
    }, BlogDetailsContent_jsx("i", {
      className: "fab fa-facebook-f"
    }))), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      target: "_blank"
    }, BlogDetailsContent_jsx("i", {
      className: "fab fa-twitter"
    })))), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      target: "_blank"
    }, BlogDetailsContent_jsx("i", {
      className: "fab fa-linkedin-in"
    })))), BlogDetailsContent_jsx("li", null, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      target: "_blank"
    }, BlogDetailsContent_jsx("i", {
      className: "fab fa-instagram"
    }))))))), BlogDetailsContent_jsx("div", {
      className: "post-navigation"
    }, BlogDetailsContent_jsx("div", {
      className: "navigation-links"
    }, BlogDetailsContent_jsx("div", {
      className: "nav-previous"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, BlogDetailsContent_jsx("i", {
      className: "flaticon-left-chevron"
    }), " Prev Post"))), BlogDetailsContent_jsx("div", {
      className: "nav-next"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, "Next Post ", BlogDetailsContent_jsx("i", {
      className: "flaticon-right-chevron"
    })))))), BlogDetailsContent_jsx("div", {
      className: "comments-area"
    }, BlogDetailsContent_jsx("h3", {
      className: "comments-title"
    }, "2 Comments:"), BlogDetailsContent_jsx("ol", {
      className: "comment-list"
    }, BlogDetailsContent_jsx("li", {
      className: "comment"
    }, BlogDetailsContent_jsx("article", {
      className: "comment-body"
    }, BlogDetailsContent_jsx("footer", {
      className: "comment-meta"
    }, BlogDetailsContent_jsx("div", {
      className: "comment-author vcard"
    }, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("T8nY"),
      className: "avatar",
      alt: "image"
    }), BlogDetailsContent_jsx("b", {
      className: "fn"
    }, "John Jones"), BlogDetailsContent_jsx("span", {
      className: "says"
    }, "says:")), BlogDetailsContent_jsx("div", {
      className: "comment-metadata"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, BlogDetailsContent_jsx("time", null, "April 24, 2019 at 10:59 am"))))), BlogDetailsContent_jsx("div", {
      className: "comment-content"
    }, BlogDetailsContent_jsx("p", null, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), BlogDetailsContent_jsx("div", {
      className: "reply"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      className: "comment-reply-link"
    }, "Reply")))), BlogDetailsContent_jsx("ol", {
      className: "children"
    }, BlogDetailsContent_jsx("li", {
      className: "comment"
    }, BlogDetailsContent_jsx("article", {
      className: "comment-body"
    }, BlogDetailsContent_jsx("footer", {
      className: "comment-meta"
    }, BlogDetailsContent_jsx("div", {
      className: "comment-author vcard"
    }, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("aO6t"),
      className: "avatar",
      alt: "image"
    }), BlogDetailsContent_jsx("b", {
      className: "fn"
    }, "Steven Smith"), BlogDetailsContent_jsx("span", {
      className: "says"
    }, "says:")), BlogDetailsContent_jsx("div", {
      className: "comment-metadata"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, BlogDetailsContent_jsx("time", null, "April 24, 2019 at 10:59 am"))))), BlogDetailsContent_jsx("div", {
      className: "comment-content"
    }, BlogDetailsContent_jsx("p", null, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), BlogDetailsContent_jsx("div", {
      className: "reply"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      className: "comment-reply-link"
    }, "Reply"))))), BlogDetailsContent_jsx("ol", {
      className: "children"
    }, BlogDetailsContent_jsx("li", {
      className: "comment"
    }, BlogDetailsContent_jsx("article", {
      className: "comment-body"
    }, BlogDetailsContent_jsx("footer", {
      className: "comment-meta"
    }, BlogDetailsContent_jsx("div", {
      className: "comment-author vcard"
    }, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("Aff2"),
      className: "avatar",
      alt: "image"
    }), BlogDetailsContent_jsx("b", {
      className: "fn"
    }, "Sarah Taylor"), BlogDetailsContent_jsx("span", {
      className: "says"
    }, "says:")), BlogDetailsContent_jsx("div", {
      className: "comment-metadata"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, BlogDetailsContent_jsx("time", null, "April 24, 2019 at 10:59 am"))))), BlogDetailsContent_jsx("div", {
      className: "comment-content"
    }, BlogDetailsContent_jsx("p", null, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), BlogDetailsContent_jsx("div", {
      className: "reply"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      className: "comment-reply-link"
    }, "Reply")))))))), BlogDetailsContent_jsx("li", {
      className: "comment"
    }, BlogDetailsContent_jsx("article", {
      className: "comment-body"
    }, BlogDetailsContent_jsx("footer", {
      className: "comment-meta"
    }, BlogDetailsContent_jsx("div", {
      className: "comment-author vcard"
    }, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("aO6t"),
      className: "avatar",
      alt: "image"
    }), BlogDetailsContent_jsx("b", {
      className: "fn"
    }, "John Doe"), BlogDetailsContent_jsx("span", {
      className: "says"
    }, "says:")), BlogDetailsContent_jsx("div", {
      className: "comment-metadata"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, BlogDetailsContent_jsx("time", null, "April 24, 2019 at 10:59 am"))))), BlogDetailsContent_jsx("div", {
      className: "comment-content"
    }, BlogDetailsContent_jsx("p", null, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), BlogDetailsContent_jsx("div", {
      className: "reply"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      className: "comment-reply-link"
    }, "Reply")))), BlogDetailsContent_jsx("ol", {
      className: "children"
    }, BlogDetailsContent_jsx("li", {
      className: "comment"
    }, BlogDetailsContent_jsx("article", {
      className: "comment-body"
    }, BlogDetailsContent_jsx("footer", {
      className: "comment-meta"
    }, BlogDetailsContent_jsx("div", {
      className: "comment-author vcard"
    }, BlogDetailsContent_jsx("img", {
      src: __webpack_require__("Aff2"),
      className: "avatar",
      alt: "image"
    }), BlogDetailsContent_jsx("b", {
      className: "fn"
    }, "James Anderson"), BlogDetailsContent_jsx("span", {
      className: "says"
    }, "says:")), BlogDetailsContent_jsx("div", {
      className: "comment-metadata"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", null, BlogDetailsContent_jsx("time", null, "April 24, 2019 at 10:59 am"))))), BlogDetailsContent_jsx("div", {
      className: "comment-content"
    }, BlogDetailsContent_jsx("p", null, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")), BlogDetailsContent_jsx("div", {
      className: "reply"
    }, BlogDetailsContent_jsx(link_default.a, {
      href: "#"
    }, BlogDetailsContent_jsx("a", {
      className: "comment-reply-link"
    }, "Reply")))))))), BlogDetailsContent_jsx("div", {
      className: "comment-respond"
    }, BlogDetailsContent_jsx("h3", {
      className: "comment-reply-title"
    }, "Leave a Reply"), BlogDetailsContent_jsx("form", {
      className: "comment-form"
    }, BlogDetailsContent_jsx("p", {
      className: "comment-notes"
    }, BlogDetailsContent_jsx("span", {
      id: "email-notes"
    }, "Your email address will not be published."), "Required fields are marked", BlogDetailsContent_jsx("span", {
      className: "required"
    }, "*")), BlogDetailsContent_jsx("p", {
      className: "comment-form-comment"
    }, BlogDetailsContent_jsx("label", null, "Comment"), BlogDetailsContent_jsx("textarea", {
      name: "comment",
      id: "comment",
      rows: "5"
    })), BlogDetailsContent_jsx("p", {
      className: "comment-form-author"
    }, BlogDetailsContent_jsx("label", null, "Name ", BlogDetailsContent_jsx("span", {
      className: "required"
    }, "*")), BlogDetailsContent_jsx("input", {
      type: "text",
      id: "author",
      name: "author"
    })), BlogDetailsContent_jsx("p", {
      className: "comment-form-email"
    }, BlogDetailsContent_jsx("label", null, "Email ", BlogDetailsContent_jsx("span", {
      className: "required"
    }, "*")), BlogDetailsContent_jsx("input", {
      type: "email",
      id: "email",
      name: "email"
    })), BlogDetailsContent_jsx("p", {
      className: "comment-form-url"
    }, BlogDetailsContent_jsx("label", null, "Website"), BlogDetailsContent_jsx("input", {
      type: "url",
      id: "url",
      name: "url"
    })), BlogDetailsContent_jsx("p", {
      className: "comment-form-cookies-consent"
    }, BlogDetailsContent_jsx("input", {
      type: "checkbox",
      value: "yes",
      name: "wp-comment-cookies-consent",
      id: "wp-comment-cookies-consent"
    }), BlogDetailsContent_jsx("label", null, "Save my name, email, and website in this browser for the next time I comment.")), BlogDetailsContent_jsx("p", {
      className: "form-submit"
    }, BlogDetailsContent_jsx("input", {
      type: "submit",
      name: "submit",
      id: "submit",
      className: "submit",
      value: "Post Comment"
    }))))))), BlogDetailsContent_jsx("div", {
      className: "col-lg-4 col-md-12"
    }, BlogDetailsContent_jsx(BlogSideBar["a" /* default */], null))))));
  }

}

/* harmony default export */ var BlogDetails_BlogDetailsContent = (BlogDetailsContent_BlogDetailsContent);
// EXTERNAL MODULE: ./components/Layout/Footer.js
var Footer = __webpack_require__("v6Hh");

// CONCATENATED MODULE: ./pages/blog-details.js
var blog_details_jsx = external_react_default.a.createElement;






class blog_details_BlogDetails extends external_react_["Component"] {
  render() {
    return blog_details_jsx(external_react_default.a.Fragment, null, blog_details_jsx(Navbar["a" /* default */], null), blog_details_jsx(BlogDetails_PageHeader, null), blog_details_jsx(BlogDetails_BlogDetailsContent, null), blog_details_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var blog_details = __webpack_exports__["default"] = (blog_details_BlogDetails);

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