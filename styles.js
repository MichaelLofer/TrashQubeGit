(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n    background: rgba(0, 0, 0, 0.9);\n    margin: 0;\n    color: #fff;\n    font-family: 'Open Sans', sans-serif;\n  }\n.header::after {\n    content: '';\n    height: 100vh;\n    width: 100%;\n    background-image: url('skeleton.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    display: block;\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n    transition: all 1000ms;\n  }\n/* fondo */\n.header:hover::after {\n    filter: blur(4px);\n    -webkit-filter: blur(4px);\n  }\n.header:hover .header-content {\n    filter: blur(0px);\n    -webkit-filter: blur(0px);\n  }\n/* letras */\n.header-content {\n    position: absolute;\n    z-index: 1;\n    top: 10%;\n    left: 50%;\n    margin-top: 105px;\n    margin-left: -145px;\n    width: 300px;\n    height: 350px;\n    text-align: center;\n    transition: all 1000ms;\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n  }\n.header-content .logo {\n    height: 100px;\n    width: 100px;\n  }\n.title {\n    font-family: 'Oswald', sans-serif;\n    font-size: 2.5rem;\n  }\n.header-content .text {\n    line-height: 1.7;\n    margin-top: 1rem;\n  }\n.container {\n    max-width: 960px;\n    margin: auto;\n    overflow: hidden;\n    padding: 4rem 1rem;\n  }\n.grid-3 {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr; /* 30px 30px 30px or repeat(3, 1fr)*/\n    grid-gap: 20px;\n  }\n.grid-2 {\n    display: grid;\n    grid-grap: 20px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n.text-center {\n    text-align: center;\n    margin: auto;\n  }\n.bg-light {\n    background: #fff;\n    color: #333;\n  }\n.bg-dark {\n    background: #2f3542;\n    color: #f4f4f4;\n  }\n.services {\n    padding: 2rem 0;\n  }\nfooter {\n    padding: 2.2rem;\n  }\nfooter p {\n    margin: 0;\n  }\n/* RESPONSIVE */\n@media (max-width: 560px) {\n    .header::after {\n      height: 50vh;\n    }\n    \n    .header-content {\n      top: 5%;\n      margin-top: 5px;\n    }\n  \n    .header-content .logo {\n      height: 140px;\n      width: 140px;\n    }\n  \n    .header-content .text {\n      display: none;\n    }\n    \n    .grid-3, .grid-2 {\n      grid-template-columns: 1fr;\n    }\n  \n    .services div {\n      padding: 1.4rem 1rem;\n    }\n  }\n/* Landscape */\n@media(max-height: 500px) {\n    .header-content .title, .header-content .text {\n      display: none;\n    }\n    .header-content {\n      top: 0;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsV0FBVztJQUNYLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gscUNBQTRDO0lBQzVDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QjtBQUVBLFVBQVU7QUFDVjtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7QUFFQSxXQUFXO0FBQ1g7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtBQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxhQUFhO0lBQ2Isa0NBQWtDLEVBQUUsb0NBQW9DO0lBQ3hFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YscUNBQXFDO0VBQ3ZDO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsU0FBUztFQUNYO0FBRUEsZUFBZTtBQUNmO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxPQUFPO01BQ1AsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSwwQkFBMEI7SUFDNUI7O0lBRUE7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjtBQUVBLGNBQWM7QUFDZDtJQUNFO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxNQUFNO0lBQ1I7RUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuaGVhZGVyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9za2VsZXRvbi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcztcbiAgfVxuXG4gIC8qIGZvbmRvICovXG4gIC5oZWFkZXI6aG92ZXI6OmFmdGVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0cHgpO1xuICB9XG4gIFxuICAuaGVhZGVyOmhvdmVyIC5oZWFkZXItY29udGVudCB7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgfVxuICBcbiAgLyogbGV0cmFzICovXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IDEwNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTQ1cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXM7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgfVxuICBcbiAgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICBcbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgXG4gIC5oZWFkZXItY29udGVudCAudGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDRyZW0gMXJlbTtcbiAgfVxuICBcbiAgLmdyaWQtMyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAvKiAzMHB4IDMwcHggMzBweCBvciByZXBlYXQoMywgMWZyKSovXG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC5ncmlkLTIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1ncmFwOiAyMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgXG4gIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBcbiAgLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAuYmctZGFyayB7XG4gICAgYmFja2dyb3VuZDogIzJmMzU0MjtcbiAgICBjb2xvcjogI2Y0ZjRmNDtcbiAgfVxuICBcbiAgLnNlcnZpY2VzIHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gIH1cbiAgXG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogMi4ycmVtO1xuICB9XG4gIFxuICBmb290ZXIgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAvKiBSRVNQT05TSVZFICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIC5oZWFkZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogNTB2aDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgIHRvcDogNSU7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICBcbiAgICAuaGVhZGVyLWNvbnRlbnQgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICB9XG4gIFxuICAgIC5oZWFkZXItY29udGVudCAudGV4dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuZ3JpZC0zLCAuZ3JpZC0yIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgXG4gICAgLnNlcnZpY2VzIGRpdiB7XG4gICAgICBwYWRkaW5nOiAxLjRyZW0gMXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIExhbmRzY2FwZSAqL1xuICBAbWVkaWEobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAuaGVhZGVyLWNvbnRlbnQgLnRpdGxlLCAuaGVhZGVyLWNvbnRlbnQgLnRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH0iXX0= */", '', '']]

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

module.exports = __webpack_require__(/*! C:\UNIVERSIDAD\GIT\TrashQube\TrashQubeAngular\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map