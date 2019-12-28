(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n    background: rgba(0, 0, 0, 0.9);\n    margin: 0;\n    color: #fff;\n    font-family: 'Open Sans', sans-serif;\n  }\n.header::after {\n    content: '';\n    height: 100vh;\n    width: 100%;\n    background-image: url('header_bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    display: block;\n    filter: blur(10px);\n    -webkit-filter: blur(10px);\n    transition: all 1000ms;\n  }\n.header:hover::after {\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n  }\n.header:hover .header-content {\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n  }\n.header-content {\n    position: absolute;\n    z-index: 1;\n    top: 10%;\n    left: 50%;\n    margin-top: 105px;\n    margin-left: -145px;\n    width: 300px;\n    height: 350px;\n    text-align: center;\n    transition: all 1000ms;\n  }\n.header-content .logo {\n    height: 100px;\n    width: 100px;\n  }\n.title {\n    font-family: 'Oswald', sans-serif;\n    font-size: 2.5rem;\n  }\n.header-content .text {\n    line-height: 1.7;\n    margin-top: 1rem;\n  }\n.container {\n    max-width: 960px;\n    margin: auto;\n    overflow: hidden;\n    padding: 4rem 1rem;\n  }\n.grid-3 {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr; /* 30px 30px 30px or repeat(3, 1fr)*/\n    grid-gap: 20px;\n  }\n.grid-2 {\n    display: grid;\n    grid-grap: 20px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n.text-center {\n    text-align: center;\n    margin: auto;\n  }\n.bg-light {\n    background: #fff;\n    color: #333;\n  }\n.bg-dark {\n    background: #2f3542;\n    color: #f4f4f4;\n  }\n.services {\n    padding: 2rem 0;\n  }\nfooter {\n    padding: 2.2rem;\n  }\nfooter p {\n    margin: 0;\n  }\n/* RESPONSIVE */\n@media (max-width: 560px) {\n    .header::after {\n      height: 50vh;\n    }\n    \n    .header-content {\n      top: 5%;\n      margin-top: 5px;\n    }\n  \n    .header-content .logo {\n      height: 140px;\n      width: 140px;\n    }\n  \n    .header-content .text {\n      display: none;\n    }\n    \n    .grid-3, .grid-2 {\n      grid-template-columns: 1fr;\n    }\n  \n    .services div {\n      padding: 1.4rem 1rem;\n    }\n  }\n/* Landscape */\n@media(max-height: 500px) {\n    .header-content .title, .header-content .text {\n      display: none;\n    }\n    .header-content {\n      top: 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsV0FBVztJQUNYLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0NBQTZDO0lBQzdDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGFBQWE7SUFDYixrQ0FBa0MsRUFBRSxvQ0FBb0M7SUFDeEUsY0FBYztFQUNoQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixxQ0FBcUM7RUFDdkM7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxTQUFTO0VBQ1g7QUFFQSxlQUFlO0FBQ2Y7SUFDRTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLE9BQU87TUFDUCxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtNQUNiLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLDBCQUEwQjtJQUM1Qjs7SUFFQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGO0FBRUEsY0FBYztBQUNkO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLE1BQU07SUFDUjtFQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5oZWFkZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2hlYWRlcl9iZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwMG1zO1xuICB9XG4gIFxuICAuaGVhZGVyOmhvdmVyOjphZnRlciB7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgfVxuICBcbiAgLmhlYWRlcjpob3ZlciAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IDEwNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTQ1cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXM7XG4gIH1cbiAgXG4gIC5oZWFkZXItY29udGVudCAubG9nbyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIFxuICAuaGVhZGVyLWNvbnRlbnQgLnRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA0cmVtIDFyZW07XG4gIH1cbiAgXG4gIC5ncmlkLTMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgLyogMzBweCAzMHB4IDMwcHggb3IgcmVwZWF0KDMsIDFmcikqL1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAuZ3JpZC0yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ3JhcDogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG4gIFxuICAudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5iZy1saWdodCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLmJnLWRhcmsge1xuICAgIGJhY2tncm91bmQ6ICMyZjM1NDI7XG4gICAgY29sb3I6ICNmNGY0ZjQ7XG4gIH1cbiAgXG4gIC5zZXJ2aWNlcyB7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICB9XG4gIFxuICBmb290ZXIge1xuICAgIHBhZGRpbmc6IDIuMnJlbTtcbiAgfVxuICBcbiAgZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLyogUkVTUE9OU0lWRSAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICAuaGVhZGVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICB0b3A6IDUlO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgXG4gICAgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICB3aWR0aDogMTQwcHg7XG4gICAgfVxuICBcbiAgICAuaGVhZGVyLWNvbnRlbnQgLnRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmdyaWQtMywgLmdyaWQtMiB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gIFxuICAgIC5zZXJ2aWNlcyBkaXYge1xuICAgICAgcGFkZGluZzogMS40cmVtIDFyZW07XG4gICAgfVxuICB9XG4gIFxuICAvKiBMYW5kc2NhcGUgKi9cbiAgQG1lZGlhKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgLmhlYWRlci1jb250ZW50IC50aXRsZSwgLmhlYWRlci1jb250ZW50IC50ZXh0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! M:\UNIVERSIDAD\TrashQubeAngular\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map