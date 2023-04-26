/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

var navbar = document.querySelector('.nav');
var top = navbar.offsetTop;
function sticky() {
  if (window.scrollY >= top) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
window.addEventListener('scroll', sticky);

/***/ }),

/***/ "./src/onscroll.js":
/*!*************************!*\
  !*** ./src/onscroll.js ***!
  \*************************/
/***/ (() => {

var items = document.querySelectorAll('.item');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
items.forEach(function (el) {
  return observer.observe(el);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ysabeau:wght@100;200;300;400;500;600;700;800;900;1000&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10000;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #393646;\n  padding: 20px;\n}\n.nav h1 {\n  font-size: 2rem;\n  color: #F4EEE0;\n  padding: 10px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.links {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  color: #F4EEE0;\n  text-decoration: none;\n  font-size: 1.5rem;\n  margin-right: 45px;\n  transition: all ease-in-out 0.5s;\n}\n.links:hover {\n  border-bottom: 3px solid #393646;\n  color: white;\n  transform: translateY(-5px);\n  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.5);\n}\n\n@media only screen and (max-width: 768px) {\n  .links {\n    display: none;\n  }\n}\n.hero {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 100px;\n  margin-right: 100px;\n}\n@media only screen and (max-width: 768px) {\n  .hero {\n    flex-direction: column;\n    justify-content: left;\n    align-items: start;\n    padding: 10px;\n    margin-top: 140px;\n  }\n}\n\n.hero-text {\n  height: 440px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n}\n\n.h1-txt {\n  font-size: 1.7rem;\n  font-weight: 600;\n  padding-bottom: 30px;\n  color: #393646;\n}\n@media only screen and (max-width: 768px) {\n  .h1-txt {\n    font-size: 1.4rem;\n  }\n}\n\n.p-txt {\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding-bottom: 20px;\n  color: #6D5D6E;\n}\n@media only screen and (max-width: 768px) {\n  .p-txt {\n    font-size: 0.8rem;\n  }\n}\n\n.btn {\n  font-size: 1rem;\n  text-decoration: none;\n  color: #6D5D6E;\n  border-bottom: 3px solid #393646;\n  transition: all ease-in-out 0.5s;\n  padding: 10px;\n}\n.btn:hover {\n  cursor: pointer;\n  background-color: #393646;\n  color: #F4EEE0;\n}\n@media only screen and (max-width: 768px) {\n  .btn {\n    font-size: 0.8rem;\n    padding: 5px;\n  }\n}\n\n.hero-img {\n  height: 470px;\n  width: 700px;\n  border-radius: 250px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  color: #393646;\n  background-color: #F4EEE0;\n}\n@media only screen and (max-width: 768px) {\n  .hero-img {\n    display: none;\n  }\n}\n\n.menu {\n  background-color: #f1f1f1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.menu h2 {\n  font-size: 2rem;\n  font-weight: 500;\n  color: #393646;\n  letter-spacing: 1px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.menu .items {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  width: 800px;\n  margin-top: 20px;\n}\n.menu .items .item {\n  opacity: 0;\n  filter: blur(5px);\n  transform: translate3d(-100%, 0, 0);\n  transition: all 1s;\n  will-change: transform, opacity;\n}\n.menu .items .show {\n  opacity: 1;\n  filter: blur(0);\n  transform: translateX(0);\n  flex: 1 1 30%;\n  max-width: 30%;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.menu .items .show img {\n  height: 350px;\n  width: 400px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  margin-bottom: 20px;\n}\n.menu .items .show h3 {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #393646;\n  margin-bottom: 5px;\n}\n.menu .items .show p {\n  font-size: 1rem;\n  color: #6D5D6E;\n}\n@media only screen and (max-width: 768px) {\n  .menu .items {\n    width: 100%;\n  }\n  .menu .items .item {\n    max-width: 100%;\n    flex: 1 1 auto;\n  }\n}\n\n.learn-more {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 130px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.learn-more .text {\n  flex-basis: 50%;\n}\n.learn-more .text h2 {\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #393646;\n  letter-spacing: 1px;\n}\n.learn-more .text p {\n  font-size: 1.2rem;\n  line-height: 1.5;\n  color: #4F4557;\n}\n.learn-more .map {\n  flex-basis: 45%;\n  margin-left: 5%;\n}\n@media (max-width: 768px) {\n  .learn-more {\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 0;\n  }\n  .learn-more .text,\n  .learn-more .map {\n    flex-basis: 100%;\n    margin: 10px 20px;\n  }\n  .learn-more iframe {\n    height: 200px;\n    width: 300px;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Ysabeau\", sans-serif;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}", "",{"version":3,"sources":["webpack://./src/styles/nav.scss","webpack://./src/styles/main.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/hero.scss","webpack://./src/styles/menu.scss","webpack://./src/styles/learn.scss"],"names":[],"mappings":"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","sourcesContent":["@import './variables.scss';\r\n\r\n@mixin flexBetween {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 10000;\r\n}\r\n\r\n.nav {\r\n    @include flexBetween();\r\n    background-color: $firstColor;\r\n    padding: 20px;\r\n    h1 {\r\n        font-size: 2rem;\r\n        color: $textColor;\r\n        padding: 10px;\r\n        font-weight: 600;\r\n        letter-spacing: 1px;\r\n    }\r\n}\r\n\r\n.links {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    color: $textColor;\r\n    text-decoration: none;\r\n    font-size: 1.5rem;\r\n    margin-right: 45px;\r\n    transition: all ease-in-out .5s;\r\n    &:hover {\r\n        border-bottom: 3px solid $firstColor;\r\n        color: white;\r\n        transform: translateY(-5px);\r\n        box-shadow: $boxShadow2;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .links {\r\n        display: none;\r\n    }\r\n}","@import url('https://fonts.googleapis.com/css2?family=Ysabeau:wght@100;200;300;400;500;600;700;800;900;1000&display=swap');\r\n@import './nav.scss';\r\n@import './variables.scss';\r\n@import './hero.scss';\r\n@import './menu.scss';\r\n@import './learn.scss';\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Ysabeau', sans-serif;\r\n    overflow-x: hidden;\r\n    scroll-behavior: smooth;\r\n}","$firstColor: #393646;\r\n$secondColor: #4F4557;\r\n$thirdColor: #6D5D6E;\r\n$textColor: #F4EEE0;\r\n\r\n$bgcolor: #f1f1f1;\r\n\r\n$boxShadow1: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n$boxShadow2: 0px 10px 10px -10px rgba(0, 0, 0, 0.5);","@import './variables.scss';\r\n\r\n.hero {\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-left: 100px;\r\n  margin-right: 100px;\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    flex-direction: column;\r\n    justify-content: left;\r\n    align-items: start;\r\n    padding: 10px;\r\n    margin-top: 140px;\r\n  }\r\n}\r\n\r\n.hero-text {\r\n  height: 440px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: center;\r\n}\r\n\r\n.h1-txt {\r\n  font-size: 1.7rem;\r\n  font-weight: 600;\r\n  padding-bottom: 30px;\r\n  color: $firstColor;\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n.p-txt {\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n  padding-bottom: 20px;\r\n  color: $thirdColor;\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n.btn {\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n  color: $thirdColor;\r\n  border-bottom: 3px solid $firstColor;\r\n  transition: all ease-in-out .5s;\r\n  padding: 10px;\r\n  \r\n  &:hover {\r\n    cursor: pointer;\r\n    background-color: $firstColor;\r\n    color: $textColor;\r\n  }\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    font-size: 0.8rem;\r\n    padding: 5px;\r\n  }\r\n}\r\n\r\n.hero-img {\r\n  height: 470px;\r\n  width: 700px;\r\n  border-radius: 250px;\r\n  box-shadow: $boxShadow1;\r\n  color: $firstColor;\r\n  background-color: $textColor;\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    display: none;\r\n  }\r\n}",".menu {\r\n    background-color: $bgcolor;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n  \r\n    h2 {\r\n      font-size: 2rem;\r\n      font-weight: 500;\r\n      color: $firstColor;\r\n      letter-spacing: 1px;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n    }\r\n  \r\n    .items {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      gap: 20px;\r\n      width: 800px;\r\n      margin-top: 20px;\r\n\r\n      .item {\r\n  opacity: 0;\r\n  filter: blur(5px);\r\n  transform: translate3d(-100%, 0, 0);\r\n  transition: all 1s;\r\n  will-change: transform, opacity;\r\n}\r\n  \r\n      .show {\r\n        opacity: 1;\r\n        filter: blur(0);\r\n        transform: translateX(0);\r\n        flex: 1 1 30%;\r\n        max-width: 30%;\r\n        text-align: center;\r\n        margin-bottom: 20px;\r\n        \r\n        img {\r\n          height: 350px;\r\n          width: 400px;\r\n          box-shadow: $boxShadow1;\r\n          margin-bottom: 20px;\r\n        }\r\n  \r\n        h3 {\r\n          font-size: 1.5rem;\r\n          font-weight: 400;\r\n          color: $firstColor;\r\n          margin-bottom: 5px;\r\n        }\r\n  \r\n        p {\r\n          font-size: 1rem;\r\n          color: $thirdColor;\r\n        }\r\n      }\r\n    }\r\n  \r\n    @media only screen and (max-width: 768px) {\r\n      .items {\r\n        width: 100%;\r\n  \r\n        .item {\r\n          max-width: 100%;\r\n          flex: 1 1 auto;\r\n        }\r\n      }\r\n    }\r\n  }","@import './variables.scss';\r\n\r\n.learn-more {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-left: 130px;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n  \r\n    .text {\r\n      flex-basis: 50%;\r\n  \r\n      h2 {\r\n        margin-bottom: 1rem;\r\n        font-size: 2rem;\r\n        font-weight: 600;\r\n        color: $firstColor;\r\n        letter-spacing: 1px;\r\n      }\r\n  \r\n      p {\r\n        font-size: 1.2rem;\r\n        line-height: 1.5;\r\n        color: $secondColor;\r\n      }\r\n    }\r\n  \r\n    .map {\r\n      flex-basis: 45%;\r\n      margin-left: 5%;\r\n    }\r\n  \r\n    @media (max-width: 768px) {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      margin: 0;\r\n  \r\n      .text,\r\n      .map {\r\n        flex-basis: 100%;\r\n        margin: 10px 20px;\r\n      }\r\n      \r\n      iframe {\r\n        height: 200px;\r\n        width: 300px;\r\n      }\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/causa.jpeg":
/*!*******************************!*\
  !*** ./src/assets/causa.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/causa.jpeg";

/***/ }),

/***/ "./src/assets/ceviche.jpg":
/*!********************************!*\
  !*** ./src/assets/ceviche.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ceviche.jpg";

/***/ }),

/***/ "./src/assets/hero-png.jpg":
/*!*********************************!*\
  !*** ./src/assets/hero-png.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/hero-png.jpg";

/***/ }),

/***/ "./src/assets/lomo-saltado.jpg":
/*!*************************************!*\
  !*** ./src/assets/lomo-saltado.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/lomo-saltado.jpg";

/***/ }),

/***/ "./src/assets/papa.jpg":
/*!*****************************!*\
  !*** ./src/assets/papa.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/papa.jpg";

/***/ }),

/***/ "./src/assets/peruvian.jpg":
/*!*********************************!*\
  !*** ./src/assets/peruvian.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/peruvian.jpg";

/***/ }),

/***/ "./src/assets/pollo.jpg":
/*!******************************!*\
  !*** ./src/assets/pollo.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/pollo.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onscroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onscroll.js */ "./src/onscroll.js");
/* harmony import */ var _onscroll_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onscroll_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_hero_png_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/hero-png.jpg */ "./src/assets/hero-png.jpg");
/* harmony import */ var _assets_ceviche_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ceviche.jpg */ "./src/assets/ceviche.jpg");
/* harmony import */ var _assets_lomo_saltado_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/lomo-saltado.jpg */ "./src/assets/lomo-saltado.jpg");
/* harmony import */ var _assets_pollo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/pollo.jpg */ "./src/assets/pollo.jpg");
/* harmony import */ var _assets_papa_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/papa.jpg */ "./src/assets/papa.jpg");
/* harmony import */ var _assets_peruvian_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/peruvian.jpg */ "./src/assets/peruvian.jpg");
/* harmony import */ var _assets_causa_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/causa.jpeg */ "./src/assets/causa.jpeg");










})();

/******/ })()
;
//# sourceMappingURL=app.js.map