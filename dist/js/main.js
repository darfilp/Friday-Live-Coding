/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./js/Article.js\");\n\r\n\r\nconst data = [\r\n    {\r\n        id: 1,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: './assets/img/strategy/1.jpg',\r\n        tags: ['Art', 'Design'],\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n        date: '01.01.2022'\r\n    },\r\n    {\r\n        id: 2,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: './assets/img/strategy/2.jpg',\r\n        tags: ['Culture'],\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n        date: '01.01.2022'\r\n    },\r\n    {\r\n        id: 3,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: './assets/img/strategy/3.jpg',\r\n        tags: ['Culture', 'Design', 'Art'],\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n        date: '01.01.2022'\r\n    },\r\n    // {\r\n    //     id: 4,\r\n    //     title: 'Increasing Prosperity With Positive Thinking',\r\n    //     urlToImage: './src/assets/4.png',\r\n    //     tags: ['Culture', 'Design', 'Art'],\r\n    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n    //     date: '01.01.2022'\r\n    // },\r\n    // {\r\n    //     id: 5,\r\n    //     title: 'Increasing Prosperity With Positive Thinking',\r\n    //     urlToImage: './src/assets/5.png',\r\n    //     tags: ['Design'],\r\n    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n    //     date: '01.01.2022'\r\n    // },\r\n];\r\n\r\nwindow.onload = function() {\r\n\r\n    //Render Articles\r\n    if (data) {\r\n        renderArticlestoDOM();\r\n    }\r\n\r\n    //Tags\r\n    addTagsClickHandler();\r\n\r\n};\r\n\r\nconst addTagsClickHandler = () => {\r\n    document.querySelector('.strategies__tags').addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('tag')) {\r\n            let clickedTag = e.target;\r\n            removeSelectedTags('.strategies__tags .tag', 'tag_active');\r\n            selectedClickedTags(clickedTag);\r\n            if (clickedTag.dataset.tag === \"all\") {\r\n                showAllStrategies();\r\n            } else {\r\n                filterStrategies(clickedTag.dataset.tag);\r\n            }\r\n        }\r\n    });\r\n};\r\n\r\nconst removeSelectedTags = (selectorTags, removeTag) => {\r\n    let selectors = document.querySelectorAll(selectorTags);\r\n    selectors.forEach(selector => {\r\n        selector.classList.remove(removeTag);\r\n    })\r\n};\r\n\r\nconst selectedClickedTags = (clickedTag) => {\r\n    clickedTag.classList.add('tag_active');\r\n};\r\n\r\nconst showAllStrategies = () => {\r\n    const strategies = document.querySelectorAll('.strategies-wrapper .strategy');\r\n    strategies.forEach(strategy => {\r\n        strategy.classList.remove('strategy_hidden');\r\n    })\r\n};\r\n\r\nconst filterStrategies = (selectedTags) => {\r\n    console.log(selectedTags)\r\n    const strategies = document.querySelectorAll('.strategies-wrapper .strategy');\r\n    strategies.forEach(strategy => {\r\n        strategy.classList.add('strategy_hidden');\r\n        strategy.querySelectorAll('.tag').forEach(item => {\r\n            if (item.dataset.tag === selectedTags) {\r\n                strategy.classList.remove('strategy_hidden');\r\n            }\r\n        })\r\n    })\r\n};\r\n\r\nconst renderArticlestoDOM = () => {\r\n    let strategiesWrapper = getStrategiesWrapper();\r\n    //console.log(generateArticle(data))\r\n    generateArticle(data).forEach(item => {\r\n        console.log(item);\r\n        strategiesWrapper.append(item.generatorArticle());\r\n    })\r\n};\r\n\r\nconst getStrategiesWrapper = () => {\r\n    const strategiesContainer = document.querySelector('.strategies-wrapper');\r\n    \r\n    strategiesContainer.innerHTML = \"\";\r\n    return strategiesContainer;\r\n};\r\n\r\nconst generateArticle = (data) => {\r\n    let articles = [];\r\n    \r\n    data.forEach(arcticle => {\r\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__[\"default\"](arcticle))\r\n    });\r\n\r\n    return articles;\r\n};\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/Article.js":
/*!***********************!*\
  !*** ./js/Article.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Article {\r\n    constructor({id, title, urlToImage, tags, ...rest}) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags= tags;\r\n    }\r\n\r\n    //ArticleGenerator\r\n    generatorArticle() {\r\n        let template = '';\r\n        let article = document.createElement('arcticle');\r\n        article.classList.add('strategy', 'block-shadows');\r\n        article.dataset.id = this.id;\r\n\r\n        if (this.urlToImage) {\r\n            template += `<img src=\"${this.urlToImage}\" alt=\"${this.title}\" class=\"strategy__img\">`;\r\n        }\r\n\r\n        if (this.title || this.tags) {\r\n            template += `<div class=\"strategy__content\">`;\r\n\r\n            if (this.title) {\r\n                template += `<h3 class=\"strategy__title\">${this.title}</h3>`;\r\n            }\r\n\r\n            if (this.tags) {\r\n                template += `<div class=\"strategy__tags\">`;\r\n                this.tags.map(tag => {\r\n                    template += `<span class=\"tag tag_colored\" data-tag=\"art\">${tag}</span>`\r\n                });\r\n                template += `</div>`;\r\n            }\r\n           \r\n            template += `</div>`;\r\n        }\r\n\r\n        article.innerHTML = template;\r\n        return article\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);\n\n//# sourceURL=webpack:///./js/Article.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;