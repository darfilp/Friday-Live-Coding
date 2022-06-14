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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./js/Article.js\");\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Modal */ \"./js/Modal.js\");\n/* harmony import */ var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ArticleModal */ \"./js/ArticleModal.js\");\n\r\n\r\n\r\n\r\nconst data = [\r\n    {\r\n        id: 1,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: '/src/assets/img/strategy/1.jpg',\r\n        tags: ['Art', 'Design'],\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n        date: '01.01.2022'\r\n    },\r\n    {\r\n        id: 2,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: '/src/assets/img/strategy/2.jpg',\r\n        tags: ['Culture'],\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n        date: '01.01.2022'\r\n    },\r\n    {\r\n        id: 3,\r\n        title: 'Increasing Prosperity With Positive Thinking',\r\n        urlToImage: '/src/assets/img/strategy/3.jpg',\r\n        tags: ['Culture', 'Design', 'Art'],\r\n        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',\r\n        date: '01.01.2022'\r\n    },\r\n];\r\n\r\nwindow.onload = function() {\r\n\r\n    //Render Articles\r\n    if (data) {\r\n        renderArticlestoDOM();\r\n    }\r\n\r\n    //Tags\r\n    addTagsClickHandler();\r\n\r\n    //Generate Modal\r\n    addToolsClickHandler();\r\n};\r\n\r\nconst addTagsClickHandler = () => {\r\n    document.querySelector('.strategies__tags').addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('tag')) {\r\n            let clickedTag = e.target;\r\n            removeSelectedTags('.strategies__tags .tag', 'tag_active');\r\n            selectedClickedTags(clickedTag);\r\n            if (clickedTag.dataset.tag === \"all\") {\r\n                showAllStrategies();\r\n            } else {\r\n                console.log(clickedTag.dataset.tag)\r\n                filterStrategies(clickedTag.dataset.tag);\r\n            }\r\n        }\r\n    });\r\n};\r\n\r\nconst removeSelectedTags = (selectorTags, removeTag) => {\r\n    let selectors = document.querySelectorAll(selectorTags);\r\n    selectors.forEach(selector => {\r\n        selector.classList.remove(removeTag);\r\n    })\r\n};\r\n\r\nconst selectedClickedTags = (clickedTag) => {\r\n    clickedTag.classList.add('tag_active');\r\n};\r\n\r\nconst showAllStrategies = () => {\r\n    const strategies = document.querySelectorAll('.strategies-wrapper .strategy');\r\n    strategies.forEach(strategy => {\r\n        strategy.classList.remove('strategy_hidden');\r\n    })\r\n};\r\n\r\nconst filterStrategies = (selectedTags) => {\r\n    const strategies = document.querySelectorAll('.strategies-wrapper .strategy');\r\n    strategies.forEach(strategy => {\r\n        strategy.classList.add('strategy_hidden');\r\n        strategy.querySelectorAll('.tag').forEach(item => {\r\n            if (item.dataset.tag === selectedTags) {\r\n                strategy.classList.remove('strategy_hidden');\r\n            }\r\n        })\r\n    })\r\n};\r\n\r\nconst renderArticlestoDOM = () => {\r\n    let strategiesWrapper = getStrategiesWrapper();\r\n    generateArticle(data).forEach(item => {\r\n        strategiesWrapper.append(item.generatorArticle());\r\n        \r\n    })\r\n    addArticleHandler();\r\n};\r\n\r\nconst getStrategiesWrapper = () => {\r\n    const strategiesContainer = document.querySelector('.strategies-wrapper');\r\n    \r\n    strategiesContainer.innerHTML = \"\";\r\n    return strategiesContainer;\r\n};\r\n\r\nconst generateArticle = (data) => {\r\n    let articles = [];\r\n    \r\n    data.forEach(arcticle => {\r\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__[\"default\"](arcticle))\r\n    });\r\n\r\n    return articles;\r\n};\r\n\r\nconst addToolsClickHandler = () => {\r\n    document.querySelector('.tools__button').addEventListener('click', () => {\r\n        generateToolsModal();\r\n    })\r\n}\r\n\r\nconst generateToolsModal = () => {\r\n    renderModal('hi')\r\n}\r\n\r\nconst renderModal = (content) => {\r\n    const modal = new _js_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('tools-modal');\r\n    modal.buildModal(content);\r\n};\r\n\r\nconst addArticleHandler = () => {\r\n    document.querySelector('.strategies-wrapper').addEventListener('click', (e) => {\r\n        if (e.target.closest('.strategy')) {\r\n            let idClicked = e.target.closest('.strategy').dataset.id;\r\n            let acticleClicked = getDataId(idClicked);\r\n            console.log(acticleClicked)\r\n\r\n            renderArticleModal(acticleClicked);\r\n        }\r\n    })\r\n}\r\n\r\nconst getDataId = (id) => {\r\n    return data.find(article => article.id == id)\r\n};\r\n\r\nconst renderArticleModal = (article) => {\r\n    const modal = new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('article-modal', article);\r\n    modal.buildContent()\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/Article.js":
/*!***********************!*\
  !*** ./js/Article.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Article {\r\n    constructor({id, title, urlToImage, tags, ...rest}) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags= tags;\r\n    }\r\n\r\n    //ArticleGenerator\r\n    generatorArticle() {\r\n        let template = '';\r\n        let article = document.createElement('arcticle');\r\n        article.classList.add('strategy', 'block-shadows');\r\n        article.dataset.id = this.id;\r\n\r\n        if (this.urlToImage) {\r\n            template += `<img src=\"${this.urlToImage}\" alt=\"${this.title}\" class=\"strategy__img\">`;\r\n        }\r\n\r\n        if (this.title || this.tags) {\r\n            template += `<div class=\"strategy__content\">`;\r\n\r\n            if (this.title) {\r\n                template += `<h3 class=\"strategy__title\">${this.title}</h3>`;\r\n            }\r\n\r\n            if (this.tags) {\r\n                template += `<div class=\"strategy__tags\">`;\r\n                this.tags.map(tag => {\r\n                    template += `<span class=\"tag tag_colored\" data-tag=\"${tag}\">${tag}</span>`\r\n                });\r\n                template += `</div>`;\r\n            }\r\n           \r\n            template += `</div>`;\r\n        }\r\n\r\n        article.innerHTML = template;\r\n        return article\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);\n\n//# sourceURL=webpack:///./js/Article.js?");

/***/ }),

/***/ "./js/ArticleModal.js":
/*!****************************!*\
  !*** ./js/ArticleModal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./js/Modal.js\");\n\r\n\r\nclass ModalArticle extends _Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(classes, {id, title, urlToImage, tags, content, date}) {\r\n        super(classes);\r\n        this.id = id;\r\n        this.title = title;\r\n        this.urlToImage = urlToImage;\r\n        this.tags= tags;\r\n        this.content = content;\r\n        this.date= date;\r\n    }\r\n\r\n    generatorContent() {\r\n        let template = '';\r\n        let content = document.createElement('div');\r\n        content.classList.add('article-modal__content');\r\n\r\n        if (this.urlToImage) {\r\n            template += `<img src=\"${this.urlToImage}\" alt=\"${this.title}\" class=\"strategy__img\">`;\r\n        }\r\n\r\n        if (this.title || this.tags || this.content || this.date) {\r\n            template += `<div class=\"strategy__content\">`;\r\n\r\n            if (this.title) {\r\n                template += `<h3 class=\"strategy__title\">${this.title}</h3>`;\r\n            }\r\n\r\n            if (this.tags) {\r\n                template += `<div class=\"strategy__tags\">`;\r\n                this.tags.map(tag => {\r\n                    template += `<span class=\"tag tag_colored\" data-tag=\"${tag}\">${tag}</span>`\r\n                });\r\n                template += `</div>`;\r\n            }\r\n\r\n            if (this.content) {\r\n                template += `<p class=\"strategy__text\">${this.content}</p>`;\r\n            }\r\n\r\n            if (this.date) {\r\n                template += `<p class=\"strategy__date\">${this.date}</p>`;\r\n            }\r\n           \r\n            template += `</div>`;\r\n        }\r\n\r\n        content.innerHTML = template;\r\n        return content\r\n    };\r\n\r\n    buildContent() {\r\n        let content = this.generatorContent();\r\n        super.buildModal(content);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalArticle);\n\n//# sourceURL=webpack:///./js/ArticleModal.js?");

/***/ }),

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal {\r\n    constructor(classes) {\r\n        this.classes = classes;\r\n        this.modal = '';\r\n        this.modalContent = '';\r\n        this.modalCloseBtn = '';\r\n        this.overlay = '';\r\n    }\r\n\r\n    buildModal(content) {\r\n        this.overlay = this.createDOMNode(this.overlay, 'div', 'overlay', 'overlay_modal');\r\n        this.modal = this.createDOMNode(this.modal, 'div', 'modal', this.classes);\r\n        this.modalContent = this.createDOMNode(this.modalContent, 'div', 'modal__content');\r\n        this.modalCloseBtn = this.createDOMNode(this.modalCloseBtn, 'span', 'modal__close-icon');\r\n        this.modalCloseBtn.innerHTML = `<svg width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z\" fill=\"#2F281E\"/>\r\n        </svg>`;\r\n\r\n        this.setContent(content);\r\n        this.appendElements();\r\n        this.bindEvents();\r\n        this.openModal();\r\n    }\r\n\r\n    createDOMNode(node, element, ...classes) {\r\n        node = document.createElement(element);\r\n        node.classList.add(...classes);\r\n        return node \r\n    }\r\n\r\n    setContent(content) {\r\n        if (typeof content === 'string') {\r\n            this.modalContent.innerHTML = content;\r\n        } else {\r\n            this.modalContent.innerHTML = '';\r\n            this.modalContent.append(content);\r\n        }\r\n    }\r\n\r\n    appendElements() {\r\n        this.modal.append(this.modalCloseBtn);\r\n        this.modal.append(this.modalContent);\r\n        this.overlay.append(this.modal);\r\n    }\r\n\r\n    bindEvents() {\r\n        this.modalCloseBtn.addEventListener('click', this.closeModal);\r\n        this.overlay.addEventListener('click', this.closeModal);\r\n    }\r\n\r\n    openModal() {\r\n        document.body.append(this.overlay);\r\n    }\r\n\r\n    closeModal(e) {\r\n        if (e.target.classList.contains('overlay') || e.target.classList.contains('modal__close-icon')) {\r\n            document.querySelector('.overlay').remove();\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack:///./js/Modal.js?");

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