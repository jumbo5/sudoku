"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/board";
exports.ids = ["pages/api/board"];
exports.modules = {

/***/ "@forfuns/sudoku":
/*!**********************************!*\
  !*** external "@forfuns/sudoku" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@forfuns/sudoku");

/***/ }),

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVycy5qcz9iYmU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSG9pc3RzIGEgbmFtZSBmcm9tIGEgbW9kdWxlIG9yIHByb21pc2VkIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gbW9kdWxlIHRoZSBtb2R1bGUgdG8gaG9pc3QgdGhlIG5hbWUgZnJvbVxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gaG9pc3RcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvbiB0aGUgbW9kdWxlIChvciBwcm9taXNlZCBtb2R1bGUpXG4gKi8gXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJob2lzdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaG9pc3Q7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBob2lzdChtb2R1bGUsIG5hbWUpIHtcbiAgICAvLyBJZiB0aGUgbmFtZSBpcyBhdmFpbGFibGUgaW4gdGhlIG1vZHVsZSwgcmV0dXJuIGl0LlxuICAgIGlmIChuYW1lIGluIG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW25hbWVdO1xuICAgIH1cbiAgICAvLyBJZiBhIHByb3BlcnR5IGNhbGxlZCBgdGhlbmAgZXhpc3RzLCBhc3N1bWUgaXQncyBhIHByb21pc2UgYW5kXG4gICAgLy8gcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuYW1lLlxuICAgIGlmIChcInRoZW5cIiBpbiBtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS50aGVuKChtb2QpPT5ob2lzdChtb2QsIG5hbWUpKTtcbiAgICB9XG4gICAgLy8gSWYgd2UncmUgdHJ5aW5nIHRvIGhvaXNlIHRoZSBkZWZhdWx0IGV4cG9ydCwgYW5kIHRoZSBtb2R1bGUgaXMgYSBmdW5jdGlvbixcbiAgICAvLyByZXR1cm4gdGhlIG1vZHVsZSBpdHNlbGYuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBuYW1lID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJldHVybiB1bmRlZmluZWQuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fboard&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fboard.ts&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fboard&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fboard.ts&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _src_pages_api_board_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/board.ts */ \"(api)/./src/pages/api/board.ts\");\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_board_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_board_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/board\",\n        pathname: \"/api/board\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_board_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmJvYXJkJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTJGcGFnZXMlMkZhcGklMkZib2FyZC50cyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNpRjtBQUNsQjtBQUNtQjtBQUNsRiw0QkFBNEIsdUdBQTBCO0FBQ3REO0FBQ0E7QUFDcUQ7QUFDckQ7QUFDQSxpRUFBZSxnR0FBSyxDQUFDLG9EQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsZ0dBQUssQ0FBQyxvREFBUTtBQUNwQztBQUNPO0FBQ1A7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vcy8/NGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGVcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnNcIjtcbmNvbnN0IFBhZ2VzQVBJUm91dGVNb2R1bGUgPSBtb2R1bGUuUGFnZXNBUElSb3V0ZU1vZHVsZTtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyYy9wYWdlcy9hcGkvYm9hcmQudHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ib2FyZFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2JvYXJkXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fboard&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fboard.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/board.ts":
/*!********************************!*\
  !*** ./src/pages/api/board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _forfuns_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @forfuns/sudoku */ \"@forfuns/sudoku\");\n/* harmony import */ var _forfuns_sudoku__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_forfuns_sudoku__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/utils/array */ \"(api)/./src/utils/array.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_req, res)=>{\n    const originalPuzzle = (0,_forfuns_sudoku__WEBPACK_IMPORTED_MODULE_0__.generator)(Number(_req.query.difficulty) || 0).map((i)=>i === -1 ? 0 : i);\n    res.status(200).json({\n        board: (0,_app_utils_array__WEBPACK_IMPORTED_MODULE_1__.separateBoard)(originalPuzzle)\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2JvYXJkLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFHSztBQUdoRCxpRUFBZSxDQUNiRSxNQUNBQztJQUVBLE1BQU1DLGlCQUEyQkosMERBQVNBLENBQ3hDSyxPQUFPSCxLQUFLSSxLQUFLLENBQUNDLFVBQVUsS0FBSyxHQUNqQ0MsR0FBRyxDQUFDLENBQUNDLElBQU9BLE1BQU0sQ0FBQyxJQUFJLElBQUlBO0lBRTdCTixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE9BQU9YLCtEQUFhQSxDQUFDRztJQUFnQjtBQUM5RCxHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvcGFnZXMvYXBpL2JvYXJkLnRzP2I5YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdG9yIH0gZnJvbSAnQGZvcmZ1bnMvc3Vkb2t1J1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IHsgc2VwYXJhdGVCb2FyZCB9IGZyb20gJ0BhcHAvdXRpbHMvYXJyYXknXG5pbXBvcnQgeyBHZW5lcmF0ZUJvYXJkUmVzcG9uc2UgfSBmcm9tICdAYXBwL3ZpZXdzL0luZGV4UGFnZS9jb250cm9sL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIF9yZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxHZW5lcmF0ZUJvYXJkUmVzcG9uc2U+LFxuKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsUHV6emxlOiBudW1iZXJbXSA9IGdlbmVyYXRvcihcbiAgICBOdW1iZXIoX3JlcS5xdWVyeS5kaWZmaWN1bHR5KSB8fCAwLFxuICApLm1hcCgoaSkgPT4gKGkgPT09IC0xID8gMCA6IGkpKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYm9hcmQ6IHNlcGFyYXRlQm9hcmQob3JpZ2luYWxQdXp6bGUpIH0pXG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdG9yIiwic2VwYXJhdGVCb2FyZCIsIl9yZXEiLCJyZXMiLCJvcmlnaW5hbFB1enpsZSIsIk51bWJlciIsInF1ZXJ5IiwiZGlmZmljdWx0eSIsIm1hcCIsImkiLCJzdGF0dXMiLCJqc29uIiwiYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/board.ts\n");

/***/ }),

/***/ "(api)/./src/utils/array.ts":
/*!****************************!*\
  !*** ./src/utils/array.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   separateBoard: () => (/* binding */ separateBoard)\n/* harmony export */ });\nconst separateBoard = (arr)=>{\n    const puzzle = [];\n    while(arr.length > 0){\n        puzzle.push(arr.splice(0, 9));\n    }\n    return puzzle;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvYXJyYXkudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdCQUFnQixDQUFDQztJQUM1QixNQUFNQyxTQUFxQixFQUFFO0lBRTdCLE1BQU9ELElBQUlFLE1BQU0sR0FBRyxFQUFHO1FBQ3JCRCxPQUFPRSxJQUFJLENBQUNILElBQUlJLE1BQU0sQ0FBQyxHQUFHO0lBQzVCO0lBRUEsT0FBT0g7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvdXRpbHMvYXJyYXkudHM/NmJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2VwYXJhdGVCb2FyZCA9IChhcnI6IG51bWJlcltdKTogbnVtYmVyW11bXSA9PiB7XG4gIGNvbnN0IHB1enpsZTogbnVtYmVyW11bXSA9IFtdXG5cbiAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgcHV6emxlLnB1c2goYXJyLnNwbGljZSgwLCA5KSlcbiAgfVxuXG4gIHJldHVybiBwdXp6bGVcbn1cbiJdLCJuYW1lcyI6WyJzZXBhcmF0ZUJvYXJkIiwiYXJyIiwicHV6emxlIiwibGVuZ3RoIiwicHVzaCIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/utils/array.ts\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmQuanM/YTlkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlS2luZFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUm91dGVLaW5kO1xuICAgIH1cbn0pO1xudmFyIFJvdXRlS2luZDtcbihmdW5jdGlvbihSb3V0ZUtpbmQpIHtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU2AgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBwYWdlcy9gLlxuICAgKi8gXCJQQUdFU1wiXSA9IFwiUEFHRVNcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU19BUElgIHJlcHJlc2VudHMgYWxsIHRoZSBBUEkgcm91dGVzIHVuZGVyIGBwYWdlcy9hcGkvYC5cbiAgICovIFwiUEFHRVNfQVBJXCJdID0gXCJQQUdFU19BUElcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBBUFBfUEFHRWAgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcGFnZS57aix0fXN7LHh9YC5cbiAgICovIFwiQVBQX1BBR0VcIl0gPSBcIkFQUF9QQUdFXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1JPVVRFYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyBhbmQgbWV0YWRhdGEgcm91dGVzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcm91dGUue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9ST1VURVwiXSA9IFwiQVBQX1JPVVRFXCI7XG59KShSb3V0ZUtpbmQgfHwgKFJvdXRlS2luZCA9IHt9KSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWtpbmQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5qcz8xMmEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZXNBUElSb3V0ZU1vZHVsZTogbnVsbCxcbiAgICBkZWZhdWx0OiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUGFnZXNBUElSb3V0ZU1vZHVsZTtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfcm91dGVtb2R1bGUgPSByZXF1aXJlKFwiLi4vcm91dGUtbW9kdWxlXCIpO1xuY29uc3QgX25vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vYXBpLXV0aWxzL25vZGVcIik7XG5jbGFzcyBQYWdlc0FQSVJvdXRlTW9kdWxlIGV4dGVuZHMgX3JvdXRlbW9kdWxlLlJvdXRlTW9kdWxlIHtcbiAgICAvKipcbiAgICpcbiAgICogQHBhcmFtIHJlcSB0aGUgaW5jb21pbmcgc2VydmVyIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcyB0aGUgb3V0Z29pbmcgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGZvciB0aGUgcmVuZGVyXG4gICAqLyBhc3luYyByZW5kZXIocmVxLCByZXMsIGNvbnRleHQpIHtcbiAgICAgICAgYXdhaXQgKDAsIF9ub2RlLmFwaVJlc29sdmVyKShyZXEsIHJlcywgY29udGV4dC5xdWVyeSwgdGhpcy51c2VybGFuZCwge1xuICAgICAgICAgICAgLi4uY29udGV4dC5wcmV2aWV3UHJvcHMsXG4gICAgICAgICAgICByZXZhbGlkYXRlOiBjb250ZXh0LnJldmFsaWRhdGUsXG4gICAgICAgICAgICB0cnVzdEhvc3RIZWFkZXI6IGNvbnRleHQudHJ1c3RIb3N0SGVhZGVyLFxuICAgICAgICAgICAgYWxsb3dlZFJldmFsaWRhdGVIZWFkZXJLZXlzOiBjb250ZXh0LmFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5cyxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBjb250ZXh0Lmhvc3RuYW1lXG4gICAgICAgIH0sIGNvbnRleHQubWluaW1hbE1vZGUsIGNvbnRleHQuZGV2LCBjb250ZXh0LnBhZ2UpO1xuICAgIH1cbn1cbmNvbnN0IF9kZWZhdWx0ID0gUGFnZXNBUElSb3V0ZU1vZHVsZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fboard&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fboard.ts&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();