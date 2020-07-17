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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+dWh":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiI+PHRleHQgZGF0YS1uYW1lPSIrIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQzNyAxLjQzNCAtMS40MzcgMS40MzQgLS44MzIgMjMuMDY2KSIgZm9udC1zaXplPSIyNSIgZmlsbD0iIzI3ZWFjOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IlJvYm90byI+PHRzcGFuIHg9IjAiPis8L3RzcGFuPjwvdGV4dD48L3N2Zz4="

/***/ }),

/***/ "/ClC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cloud-shape-2e67ca310a462dc333275200dd940c68.png";

/***/ }),

/***/ "/M1s":
/***/ (function(module, exports) {



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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "3tB4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAANlBMVEUAAAAbIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH8bIH+tE6MjAAAAEnRSTlMAAgoXLTdLTGFnaG13g4SKi4xKYS8hAAAAY0lEQVQI12WPSQ7DMAwDx1bkpd6k/382h6JpEvM2IAWRAEHr8FE1AIB0X6205V0AZFqOQMw2BUK345vjsB5Qz/yUXfmseHFcldH4qw283Lj45r/v1dPFyXX7j0xLt35b/+e+E/IiBCR6rRykAAAAAElFTkSuQmCC"

/***/ }),

/***/ "46vF":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAkCAYAAAC31nXuAAAC70lEQVR42uybXWiNcRzHn+dYDoYtTcdLFuNi3ppoXmtmq90gamXISnaJprhRbrgxRzGiLLeSFGlx48LEiAuXRJkpNIULNcuZsz0+f+dvbes0x3n5P2+/b336nTr1POf5fZ/vc37P+T/HtkR/5DjOZEo1rIIlUAYzIAnf4QO8hme2bb+XjnnXyCjsgnsw4GSuHmiDpdJF75g5FY5An5O7OqFauuquoQ3Q6+RXw9ABpdJhs2ZOggtOYaVOlrVuH6vtscarz7MaNkElVMAc/XY/qAHlHTyGJwwsAxlut4RyC+oNHEYC9vLZboc9RYsgDp/+IxUJuAF1/9j2NOhyzGoImsJq5my4Askcm9gNG9NsPwJ3HXc0CPVhM7QRvuW5ke0wZdQ+Tjnu6gvMC4OZNpwpYCNfQEzdZujLoNu6H+hBSQ9CV6GlwLvq0QPLMo+cy00MTjeDaupZyrEQjg/qJKvE2KSJnUUMGro7pIYqLYbGQCVVDwuvoCTEd25dJLUuSEltC7mhSrWmJuGIgZSqlYx9lkhdFRuCktRWy2M/R7qoGhM7KSpwSqOUPeLliJaP688sSpWVWpSfrlEL8p/hDbzMZmIuKvBB1MJM8XJEFRi5kLofdmhDJ7qK9avfranX4Q4G/zQ2/epExrSBQ1ZqRUWdbSfhuHg5tl1Z9l318xxcxNxE3k3FxHLKTtgMa6A8zbaG4RdExce86i20YOyjnE1VKx76ktGqzRS5JxWYExh7OmtTMXSLij2skH56SpfhMOY6Gd/S6AXmDl4+EEM9qYMQzzip+nuzU09oIm+rmbRem9BUDFX3TQ9hvvTLF/oBKzG2N+3lF0MXiKG+UzG0p02qesiZ0m2lnugT+U/rSevz8UmNi6G+1tExSSWlGyhPpS++1iDERif1vPTE91L/3NsW0SndSlknPQmEav4m9ZD0IjCqUs/gzuXFR8vgQ2gu3MMVh8jUr8rI7QE2tA8uWanlwLCoTCX1gGXoMQuRGf0WYABmNE6S0ZpZMgAAAABJRU5ErkJggg=="

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

/***/ "9/ps":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAACcklEQVR42uyaTUhVQRTH39V4oQhZEJZCaBgkiSikiSFlFFiLCBQFEQQVXAju/NgHhriwRbQJ2kUbi0R3FrULRPADomhRuogWfaJoUOn0OzHIQ8uP++7cyx3nDz/O4sG8e89/zpyZec9LWCylVAmhHi7AaSiEg/rjJXgP8/AcJjzP+5RwCtyEDGiFKbU3/YIxqHZZDM6MWnil0tdjOOEy6t+ITBiCdRWcvkFD2O/iRbWsEM7BZSiHIjiiP/4K72AanrKuT+8wVjZhFK4aetw+nmHY1pmcA32wuIeZ+gZ6IPmP8ZIwocyr10YzmuBjGklZgGubxryrwlOjLUbILL4XYGJu657RqMLV99g3elnfYdJAcp6kWW2+d1+xbeo8vIwtL3DDstW3hib/0tTgGQYfvN9CM0QDsasQqkOuKeYgaaEhvyHf1DWLqQoZtNQM0QG4Hpsli+oosnSpSlWdSbeDVldUNwAhqjR1W08og1NwVE/y5YS+SWZp+xy1IfX74PrspD4otsElyN5mxZglPIT7uzHH10zmS4oJZ0AOSof1OF80D/ZBhfjRCtyBmxizkrYhmFBFaNcN7bjLr28tQDOmTPkyBCPOE25BrctlYPoJLZjyaNeGyM0sYQQ6Xf6MaF12o5gyvqMheus6rvuEkzmtwllMef1fQ3TDfgEFLl+haAYqMWVty8EQM/IIz5wZoaoCOrZUiP5ZdVLvq53C33kVS5WkVki3MyMyFcKVjSWL6siVA4vLS6RqSO0hPXDI5SRSXfzbQ3Tv+ADHXE4ilYIsMaM6xmaMwQ9LDJENVr7c9sof1hZj+hJycH0LuZaYkvVHgAEAAhFYYp1WhvgAAAAASUVORK5CYII="

/***/ }),

/***/ "AWx+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAuCAYAAADKmOD6AAAEAklEQVR42uycb2hVZRzH75nzT2oTNDQ1nWZM15slgkEtcSioRBN0pa+iQlH2QhQd842vJAjJ6EWoKUvFNxkJ/oGgprIxhmYhIlL2Yq0oIZThovm/7fj5cR9l1r1z59xzdu7d/X7hs4fBHc+9v/O5zznPs+ccL6XEGt/3R9NMhTGOu/A3dHmed3+4fm5Phz5SiUbRLITFUA2VMCNLnfvgV/gZ2uAMXEK2PlVSeSTUQtgL3X5u+RM+ggpVtbiFWg7n/XhyHOarysUl1Dxo8Ycmh2Gyqj68hRoBjXDXH9rchDodgeEp1SQ47Sebz9wEQbPCuEYOmgXwBlSBXexOgzL3kl64Br9BB7RDKzOuGyH7m0Pzjesn6XwLq/gst/V1j06oV+EAXA/xbe+DC7ARygL0+ZKbreVTvodnZUT+zb5uw6cw9Sn9ToEOPz/TXCinxXwUqsIVMK784y7GSzP0XQqtfn7nkCwJLtUGuDVEB+gHdx3Vv/9P/MLIe7JlcEKNgqYEDpCtmi9176HaL5z0wGzNCgeWaizNV/BmQm/hAayH7TCvgL6Pp5gl1kqszFLZdc5JWKFxO1SWIdd3Euv/Yu13o4USLu2IVS2xnpTqfZov5EbOWYRcbRIrLdVMmiugBb/ccwSx3pVYabHsuuotORFJbsHkfPh3j5ewVDU0Z+VDpKlDrGNJv4mShPvfIQ8iT01RnwoZrWxXwiV5EHkuM2JVJf0mShPs+wM5EEtetjVB5Po3yxd6PM2kVPqOIVsQtjuGunl9b8GPWHw46/cPmC4PYsmLiNJJncfZEgQsgddgLkzM8Pp78IuNdqn03ULN/P21QhRLp8F40+gkegfGhzlE0AJNcDTb6JeIWO4GgAmp9PqU3StnN2fehL9gI+zR8S+IdMKHcDDIPY9eRBLZOXt5Kr1V2LYM2xbebLs07znKdMwKKhdgPXJdjlUsd+v4ancRXpMHSxdK/LEBYTNy7YtcLLe1pR62wvOqdVHGNgzUDzST9AJK9TbN7lT6eQRKcedrWJtNLm+QQtkU9XPQTZNK/zS56y4/sFhI9QrNcShXHZUM2YZYuwOJ5faAm1TjVD8lS2yNy/aBnRuUWEhlW4RPwEjVTnlK7BlfVcj1YECxkOp1mmZ4RjVTBpkGxPo4q1hI9QLNjzBFtVICpAtmIVeP/VLyH6nsYRtfSiolROy/L+syjliI1UCzSzVSQuYqI1blE2IhlS16XoWxqo+SQxYg18X+p8KdkkqJILWPRyz3lN6fYITqouQYe8Dd4kdbkzdJKiWi2KPJPY8ftlZ1PRVup6GiZMrMEndOlFSZ87tKECrlJtZK1SFj7sAWOKdSBM5zdiq0PehaEM2eXl1/Bs6ahwIMAKeGPAadwQtRAAAAAElFTkSuQmCC"

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

/***/ "EO5X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class SubscribeFluid extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "subscribe-area bg-F4F7FC"
    }, __jsx("div", {
      className: "container-fluid p-0"
    }, __jsx("div", {
      className: "subscribe-inner-area jarallax",
      "data-jarallax": "{\"speed\": 0.3}"
    }, __jsx("div", {
      className: "subscribe-content"
    }, __jsx("span", {
      className: "sub-title"
    }, "Get Started Instantly!"), __jsx("h2", null, "Get only new update from this newsletter"), __jsx("form", {
      className: "newsletter-form"
    }, __jsx("input", {
      type: "email",
      className: "input-newsletter",
      placeholder: "Enter your email",
      name: "email"
    }), __jsx("button", {
      type: "submit"
    }, "Subscribe"))))), __jsx("div", {
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
      className: "shape-img6"
    }, __jsx("img", {
      src: __webpack_require__("OUB+"),
      alt: "image"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (SubscribeFluid);

/***/ }),

/***/ "MrVA":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "NlGX":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "OUB+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/Navbar.js + 2 modules
var Navbar = __webpack_require__("zCU4");

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// CONCATENATED MODULE: ./components/HoneOne/Banner.js
var __jsx = external_react_default.a.createElement;



class Banner_Banner extends external_react_["Component"] {
  render() {
    return __jsx("div", {
      className: "banner-section"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-7 col-md-12"
    }, __jsx("div", {
      className: "banner-content"
    }, __jsx("span", {
      className: "sub-title"
    }, "Creating. Results."), __jsx("h1", null, "Creative solutions to improve your business!"), __jsx("p", null, "Techman solution recruit and retain the highest calibre of experienced employees with proven ability of providing customer service excellence at all times.."), __jsx("form", null, __jsx("input", {
      type: "email",
      className: "input-newsletter",
      placeholder: "Enter your email address",
      name: "email"
    }), __jsx("button", {
      type: "submit"
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-5 col-md-12"
    }, __jsx("div", {
      className: "banner-image"
    }, __jsx(external_react_wow_default.a, {
      delay: "0.6s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__("qO4G"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: "0.9s",
      animation: "fadeIn"
    }, __jsx("img", {
      src: __webpack_require__("NlGX"),
      alt: "image"
    })))))))), __jsx("div", {
      className: "shape-img2"
    }, __jsx("img", {
      src: __webpack_require__("8ClN"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img4"
    }, __jsx("img", {
      src: __webpack_require__("3tB4"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img7"
    }, __jsx("img", {
      src: __webpack_require__("MrVA"),
      alt: "image"
    })), __jsx("div", {
      className: "cloud-shape"
    }, __jsx("img", {
      src: __webpack_require__("/ClC"),
      alt: "image"
    })), __jsx("div", {
      className: "cloud-icon1"
    }, __jsx("img", {
      src: __webpack_require__("9/ps"),
      alt: "image"
    })), __jsx("div", {
      className: "cloud-icon2"
    }, __jsx("img", {
      src: __webpack_require__("46vF"),
      alt: "image"
    })), __jsx("div", {
      className: "cloud-icon3"
    }, __jsx("img", {
      src: __webpack_require__("AWx+"),
      alt: "image"
    })));
  }

}

/* harmony default export */ var HoneOne_Banner = (Banner_Banner);
// CONCATENATED MODULE: ./components/HoneOne/FeaturedServices.js
var FeaturedServices_jsx = external_react_default.a.createElement;


class FeaturedServices_FeaturedServices extends external_react_["Component"] {
  render() {
    return FeaturedServices_jsx(external_react_default.a.Fragment, null, FeaturedServices_jsx("section", {
      className: "featured-services-area ptb-100 pt-0"
    }, FeaturedServices_jsx("div", {
      className: "container"
    }, FeaturedServices_jsx("div", {
      className: "section-title"
    }, FeaturedServices_jsx("span", {
      className: "sub-title"
    }, "Our Services"), FeaturedServices_jsx("h2", null, "Our Featured Services"), FeaturedServices_jsx("p", null, "Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.")), FeaturedServices_jsx("div", {
      className: "row"
    }, FeaturedServices_jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, FeaturedServices_jsx("div", {
      className: "single-featured-box"
    }, FeaturedServices_jsx("div", {
      className: "icon"
    }, FeaturedServices_jsx("i", {
      className: "flaticon-recruitment"
    })), FeaturedServices_jsx("h3", null, "Recruitment"))), FeaturedServices_jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, FeaturedServices_jsx("div", {
      className: "single-featured-box"
    }, FeaturedServices_jsx("div", {
      className: "icon color-facd60"
    }, FeaturedServices_jsx("i", {
      className: "flaticon-training"
    })), FeaturedServices_jsx("h3", null, "Skill training"))), FeaturedServices_jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3"
    }, FeaturedServices_jsx("div", {
      className: "single-featured-box"
    }, FeaturedServices_jsx("div", {
      className: "icon color-1ac0c6"
    }, FeaturedServices_jsx("i", {
      className: "flaticon-research"
    })), FeaturedServices_jsx("h3", null, "Executive search"))), FeaturedServices_jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3"
    }, FeaturedServices_jsx("div", {
      className: "single-featured-box"
    }, FeaturedServices_jsx("div", {
      className: "icon color-1ac0c6"
    }, FeaturedServices_jsx("i", {
      className: "flaticon-payment"
    })), FeaturedServices_jsx("h3", null, "Payroll services"))), FeaturedServices_jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3"
    }, FeaturedServices_jsx("div", {
      className: "single-featured-box"
    }, FeaturedServices_jsx("div", {
      className: "icon color-1ac0c6"
    }, FeaturedServices_jsx("i", {
      className: "flaticon-group-1"
    })), FeaturedServices_jsx("h3", null, "Manpower consultancy"))), FeaturedServices_jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3"
    }, FeaturedServices_jsx("div", {
      className: "single-featured-box"
    }, FeaturedServices_jsx("div", {
      className: "icon color-1ac0c6"
    }, FeaturedServices_jsx("i", {
      className: "flaticon-executive"
    })), FeaturedServices_jsx("h3", null, "Hr services")))))));
  }

}

/* harmony default export */ var HoneOne_FeaturedServices = (FeaturedServices_FeaturedServices);
// EXTERNAL MODULE: ./components/Common/Solution.js
var Solution = __webpack_require__("eDn/");

// EXTERNAL MODULE: ./components/Common/SubscribeFluid.js
var SubscribeFluid = __webpack_require__("EO5X");

// EXTERNAL MODULE: ./components/Layout/Footer.js
var Footer = __webpack_require__("v6Hh");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;








class pages_Index extends external_react_["Component"] {
  render() {
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(Navbar["a" /* default */], null), pages_jsx(HoneOne_Banner, null), pages_jsx(HoneOne_FeaturedServices, null), pages_jsx(Solution["a" /* default */], null), pages_jsx(SubscribeFluid["a" /* default */], null), pages_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

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

/***/ "eDn/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tpJJ");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/M1s");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Solution extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "solution-area ptb-100 extra-pb"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "solution-content"
    }, __jsx("h2", null, "Get Better Solution For Your Business"), __jsx("p", null, "No fake products and services. The customer is king, their lives and needs are the inspiration."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", {
      className: "default-btn"
    }, "Contact Us ", __jsx("span", null)))))))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Solution);

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

/***/ "qO4G":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/rocket-f71907f0fbdf64047242c14b365928db.png";

/***/ }),

/***/ "tpJJ":
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

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