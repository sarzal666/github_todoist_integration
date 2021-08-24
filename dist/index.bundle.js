/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("const renderBtns = () => {\n    const comp = document.createElement(\"button\");\n    comp.id = \"auth\";\n    comp.innerText = \"gith auth\";\n\n    const wrapper = document.querySelector(\".wrapper\");\n    wrapper.prepend(comp);\n\n    comp.addEventListener(\"click\", async (e) => {\n      try {\n        const res = await call('https://api.github.com/repos', reqParams);\n        console.log(res);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  };\n\n  //\n  const urls = {\n    basic: \"https://api.github.com\",\n    repos: 'https://api.github.com/repos/sarzal666'\n  };\n\n  console.log(urls);\n\n  const reqParams = {\n    method: \"GET\",\n    Authentication: `Token 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`,\n  };\n\n  const call = async (url, params) => {\n    const result = await fetch(url);\n\n    return result.json();\n  };\n\n\n  renderBtns();\n\n//# sourceURL=webpack://github_todoist/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;