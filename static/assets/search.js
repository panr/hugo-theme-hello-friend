/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/search.js":
/*!*****************************!*\
  !*** ./source/js/search.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("summaryInclude = 60;\nvar fuseOptions = {\n  shouldSort: true,\n  includeMatches: true,\n  threshold: 0.0,\n  tokenize: true,\n  location: 0,\n  distance: 100,\n  maxPatternLength: 32,\n  minMatchCharLength: 1,\n  keys: [{\n    name: \"title\",\n    weight: 0.8\n  }, {\n    name: \"contents\",\n    weight: 0.5\n  }, {\n    name: \"tags\",\n    weight: 0.3\n  }, {\n    name: \"categories\",\n    weight: 0.3\n  }]\n};\nvar searchQuery = param(\"s\");\n\nif (searchQuery) {\n  $('#search-results-enter-string').hide();\n  $(\"#search-query\").val(searchQuery);\n  executeSearch(searchQuery);\n} else {\n  $('#search-results-enter-string').show();\n}\n\nfunction executeSearch(searchQuery) {\n  $.getJSON(\"/index.json\", function (data) {\n    var pages = data;\n    var fuse = new Fuse(pages, fuseOptions);\n    var result = fuse.search(searchQuery);\n    console.log({\n      \"matches\": result\n    });\n\n    if (result.length > 0) {\n      $('#search-results-not-found').hide();\n      populateResults(result);\n    } else {\n      $('#search-results-not-found').show();\n    }\n  });\n}\n\nfunction populateResults(result) {\n  $.each(result, function (key, value) {\n    var contents = value.item.contents;\n    var snippet = \"\";\n    var snippetHighlights = [];\n    var tags = [];\n\n    if (fuseOptions.tokenize) {\n      snippetHighlights.push(searchQuery);\n    } else {\n      $.each(value.matches, function (matchKey, mvalue) {\n        if (mvalue.key == \"tags\" || mvalue.key == \"categories\") {\n          snippetHighlights.push(mvalue.value);\n        } else if (mvalue.key == \"contents\") {\n          start = mvalue.indices[0][0] - summaryInclude > 0 ? mvalue.indices[0][0] - summaryInclude : 0;\n          end = mvalue.indices[0][1] + summaryInclude < contents.length ? mvalue.indices[0][1] + summaryInclude : contents.length;\n          snippet += contents.substring(start, end);\n          snippetHighlights.push(mvalue.value.substring(mvalue.indices[0][0], mvalue.indices[0][1] - mvalue.indices[0][0] + 1));\n        }\n      });\n    }\n\n    if (snippet.length < 1) {\n      snippet += contents.substring(0, summaryInclude * 2);\n    } //pull template from hugo templarte definition\n\n\n    var templateDefinition = $('#search-result-template').html(); //replace values\n\n    var output = render(templateDefinition, {\n      key: key,\n      title: value.item.title,\n      link: value.item.permalink,\n      tags: value.item.tags,\n      categories: value.item.categories,\n      author: value.item.author,\n      readingTime: value.item.readingTime,\n      date: value.item.date,\n      snippet: snippet\n    });\n    $('#search-results').append(output);\n  });\n}\n\nfunction param(name) {\n  return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\\+/g, ' ');\n}\n\nfunction render(templateString, data) {\n  var conditionalMatches, conditionalPattern, copy;\n  conditionalPattern = /\\$\\{\\s*isset ([a-zA-Z]*) \\s*\\}(.*)\\$\\{\\s*end\\s*}/g; //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop\n\n  copy = templateString;\n\n  while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {\n    if (data[conditionalMatches[1]]) {\n      //valid key, remove conditionals, leave contents.\n      copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);\n    } else {\n      //not valid, remove entire section\n      copy = copy.replace(conditionalMatches[0], '');\n    }\n  }\n\n  templateString = copy; //now any conditionals removed we can do simple substitution\n\n  var key, find, re;\n\n  for (key in data) {\n    find = '\\\\$\\\\{\\\\s*' + key + '\\\\s*\\\\}';\n    re = new RegExp(find, 'g');\n    templateString = templateString.replace(re, data[key]);\n  }\n\n  return templateString;\n}\n\n//# sourceURL=webpack:///./source/js/search.js?");

/***/ })

/******/ });