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
exports.id = "app/api/orders/user/route";
exports.ids = ["app/api/orders/user/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Fuser%2Froute&page=%2Fapi%2Forders%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Fuser%2Froute.ts&appDir=D%3A%5CStickerfly%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CStickerfly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Fuser%2Froute&page=%2Fapi%2Forders%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Fuser%2Froute.ts&appDir=D%3A%5CStickerfly%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CStickerfly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Stickerfly_app_api_orders_user_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/orders/user/route.ts */ \"(rsc)/./app/api/orders/user/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/user/route\",\n        pathname: \"/api/orders/user\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/user/route\"\n    },\n    resolvedPagePath: \"D:\\\\Stickerfly\\\\app\\\\api\\\\orders\\\\user\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Stickerfly_app_api_orders_user_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/orders/user/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZ1c2VyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZvcmRlcnMlMkZ1c2VyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGb3JkZXJzJTJGdXNlciUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDU3RpY2tlcmZseSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1N0aWNrZXJmbHkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9c3RhbmRhbG9uZSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0E7QUFDN0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja2VyZmx5Lz9jNmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXFN0aWNrZXJmbHlcXFxcYXBwXFxcXGFwaVxcXFxvcmRlcnNcXFxcdXNlclxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29yZGVycy91c2VyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvb3JkZXJzL3VzZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL29yZGVycy91c2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcU3RpY2tlcmZseVxcXFxhcHBcXFxcYXBpXFxcXG9yZGVyc1xcXFx1c2VyXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL29yZGVycy91c2VyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Fuser%2Froute&page=%2Fapi%2Forders%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Fuser%2Froute.ts&appDir=D%3A%5CStickerfly%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CStickerfly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/orders/user/route.ts":
/*!**************************************!*\
  !*** ./app/api/orders/user/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Order */ \"(rsc)/./models/Order.ts\");\n\n\n\n\n// Force dynamic rendering\nconst dynamic = \"force-dynamic\";\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        // Check if user is authenticated\n        if (!session || !session.user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        // Find all orders for the current user\n        const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_3__.Order.find({\n            user: session.user.id\n        }).populate(\"orderItems.product\", \"name\").sort({\n            createdAt: -1\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            orders\n        });\n    } catch (error) {\n        console.error(\"Error fetching user orders:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Failed to fetch orders\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29yZGVycy91c2VyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNOO0FBQ0E7QUFDWDtBQUV2QywwQkFBMEI7QUFDbkIsTUFBTUksVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTU4sZ0VBQWdCQTtRQUV0QyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDTSxXQUFXLENBQUNBLFFBQVFDLElBQUksRUFBRTtZQUM3QixPQUFPUixrRkFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFvQixHQUM3QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTVQsK0RBQWlCQTtRQUV2Qix1Q0FBdUM7UUFDdkMsTUFBTVUsU0FBUyxNQUFNVCxnREFBS0EsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVMLE1BQU1ELFFBQVFDLElBQUksQ0FBQ00sRUFBRTtRQUFDLEdBQ3JEQyxRQUFRLENBQUMsc0JBQXNCLFFBQy9CQyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUU7UUFFeEIsT0FBT2pCLGtGQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUc7UUFBTztJQUNwQyxFQUFFLE9BQU9GLE9BQVk7UUFDbkJRLFFBQVFSLEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU9WLGtGQUFZQSxDQUFDUyxJQUFJLENBQ3RCO1lBQUVDLE9BQU9BLE1BQU1TLE9BQU8sSUFBSTtRQUF5QixHQUNuRDtZQUFFUixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNrZXJmbHkvLi9hcHAvYXBpL29yZGVycy91c2VyL3JvdXRlLnRzPzhmMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9uZXh0JztcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICdAL2xpYi9tb25nb2RiJztcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICdAL21vZGVscy9PcmRlcic7XHJcblxyXG4vLyBGb3JjZSBkeW5hbWljIHJlbmRlcmluZ1xyXG5leHBvcnQgY29uc3QgZHluYW1pYyA9ICdmb3JjZS1keW5hbWljJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcclxuICAgIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuXHJcbiAgICAvLyBGaW5kIGFsbCBvcmRlcnMgZm9yIHRoZSBjdXJyZW50IHVzZXJcclxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoeyB1c2VyOiBzZXNzaW9uLnVzZXIuaWQgfSlcclxuICAgICAgLnBvcHVsYXRlKCdvcmRlckl0ZW1zLnByb2R1Y3QnLCAnbmFtZScpXHJcbiAgICAgIC5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvcmRlcnMgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBvcmRlcnM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZmV0Y2ggb3JkZXJzJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJPcmRlciIsImR5bmFtaWMiLCJHRVQiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJvcmRlcnMiLCJmaW5kIiwiaWQiLCJwb3B1bGF0ZSIsInNvcnQiLCJjcmVhdGVkQXQiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/orders/user/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\n// For development without MongoDB\nconst isDev = \"development\" === \"development\";\nif (!MONGODB_URI && !isDev) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */ let cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\n// Initialize global mongoose cache if not exists\nif (!global.mongoose) {\n    global.mongoose = cached;\n}\nasync function connectToDatabase() {\n    // For development without MongoDB, return mock connection\n    if (!MONGODB_URI && isDev) {\n        console.log(\"Development mode: Using mock MongoDB connection\");\n        return null;\n    }\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false,\n            serverSelectionTimeoutMS: 5000,\n            // Set the database name explicitly if not in the connection string\n            dbName: MONGODB_URI?.includes(\"/stickerfly\") ? undefined : \"stickerfly\"\n        };\n        console.log(`Connecting to MongoDB with URI: ${MONGODB_URI.replace(/:[^:@]+@/, \":****@\")}`);\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"MongoDB connection successful\");\n            return mongoose;\n        }).catch((err)=>{\n            console.error(\"MongoDB connection error:\", err);\n            if (isDev) {\n                console.log(\"Development mode: Continuing without MongoDB\");\n                return (mongoose__WEBPACK_IMPORTED_MODULE_0___default()); // Return mongoose instance without connection in dev\n            }\n            throw err;\n        });\n    }\n    try {\n        const mongoose = await cached.promise;\n        cached.conn = mongoose.connection;\n        return cached.conn;\n    } catch (e) {\n        console.error(\"Failed to establish MongoDB connection:\", e);\n        if (isDev) {\n            console.log(\"Development mode: Continuing without MongoDB\");\n            return null;\n        }\n        throw e;\n    }\n}\n// Keep the default export for backward compatibility\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBY2hDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxrQ0FBa0M7QUFDbEMsTUFBTUcsUUFBUUYsa0JBQXlCO0FBQ3ZDLElBQUksQ0FBQ0QsZUFBZSxDQUFDRyxPQUFPO0lBQzFCLE1BQU0sSUFBSUMsTUFDUjtBQUVKO0FBRUE7Ozs7Q0FJQyxHQUNELElBQUlDLFNBQXdCQyxPQUFPUCxRQUFRLElBQUk7SUFBRVEsTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFM0UsaURBQWlEO0FBQ2pELElBQUksQ0FBQ0YsT0FBT1AsUUFBUSxFQUFFO0lBQ3BCTyxPQUFPUCxRQUFRLEdBQUdNO0FBQ3BCO0FBRU8sZUFBZUk7SUFDcEIsMERBQTBEO0lBQzFELElBQUksQ0FBQ1QsZUFBZUcsT0FBTztRQUN6Qk8sUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBTztJQUNUO0lBRUEsSUFBSU4sT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1JLE9BQU87WUFDWEMsZ0JBQWdCO1lBQ2hCQywwQkFBMEI7WUFDMUIsbUVBQW1FO1lBQ25FQyxRQUFRZixhQUFhZ0IsU0FBUyxpQkFBaUJDLFlBQVk7UUFDN0Q7UUFFQVAsUUFBUUMsR0FBRyxDQUFDLENBQUMsZ0NBQWdDLEVBQUVYLFlBQWFrQixPQUFPLENBQUMsWUFBWSxVQUFVLENBQUM7UUFFM0ZiLE9BQU9HLE9BQU8sR0FBR1QsdURBQWdCLENBQUNDLGFBQWNZLE1BQzdDUSxJQUFJLENBQUMsQ0FBQ3JCO1lBQ0xXLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9aO1FBQ1QsR0FDQ3NCLEtBQUssQ0FBQyxDQUFDQztZQUNOWixRQUFRYSxLQUFLLENBQUMsNkJBQTZCRDtZQUMzQyxJQUFJbkIsT0FBTztnQkFDVE8sUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU9aLGlEQUFRQSxFQUFFLHFEQUFxRDtZQUN4RTtZQUNBLE1BQU11QjtRQUNSO0lBQ0o7SUFFQSxJQUFJO1FBQ0YsTUFBTXZCLFdBQVcsTUFBTU0sT0FBT0csT0FBTztRQUNyQ0gsT0FBT0UsSUFBSSxHQUFHUixTQUFTeUIsVUFBVTtRQUNqQyxPQUFPbkIsT0FBT0UsSUFBSTtJQUNwQixFQUFFLE9BQU9rQixHQUFHO1FBQ1ZmLFFBQVFhLEtBQUssQ0FBQywyQ0FBMkNFO1FBQ3pELElBQUl0QixPQUFPO1lBQ1RPLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU87UUFDVDtRQUNBLE1BQU1jO0lBQ1I7QUFDRjtBQUVBLHFEQUFxRDtBQUNyRCxpRUFBZWhCLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNrZXJmbHkvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIGNhY2hlZCBtb25nb29zZSBjb25uZWN0aW9uIHR5cGVcclxuaW50ZXJmYWNlIE1vbmdvb3NlQ2FjaGUge1xyXG4gIGNvbm46IG1vbmdvb3NlLkNvbm5lY3Rpb24gfCBudWxsO1xyXG4gIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgZ2xvYmFsIG1vbmdvb3NlIHR5cGVcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcclxuICB2YXIgbW9uZ29vc2U6IE1vbmdvb3NlQ2FjaGUgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG4vLyBGb3IgZGV2ZWxvcG1lbnQgd2l0aG91dCBNb25nb0RCXHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcbmlmICghTU9OR09EQl9VUkkgJiYgIWlzRGV2KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXHJcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxyXG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxyXG4gKi9cclxubGV0IGNhY2hlZDogTW9uZ29vc2VDYWNoZSA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbi8vIEluaXRpYWxpemUgZ2xvYmFsIG1vbmdvb3NlIGNhY2hlIGlmIG5vdCBleGlzdHNcclxuaWYgKCFnbG9iYWwubW9uZ29vc2UpIHtcclxuICBnbG9iYWwubW9uZ29vc2UgPSBjYWNoZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAvLyBGb3IgZGV2ZWxvcG1lbnQgd2l0aG91dCBNb25nb0RCLCByZXR1cm4gbW9jayBjb25uZWN0aW9uXHJcbiAgaWYgKCFNT05HT0RCX1VSSSAmJiBpc0Rldikge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmVsb3BtZW50IG1vZGU6IFVzaW5nIG1vY2sgTW9uZ29EQiBjb25uZWN0aW9uJyk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDUwMDAsIC8vIFRpbWVvdXQgYWZ0ZXIgNSBzZWNvbmRzXHJcbiAgICAgIC8vIFNldCB0aGUgZGF0YWJhc2UgbmFtZSBleHBsaWNpdGx5IGlmIG5vdCBpbiB0aGUgY29ubmVjdGlvbiBzdHJpbmdcclxuICAgICAgZGJOYW1lOiBNT05HT0RCX1VSST8uaW5jbHVkZXMoJy9zdGlja2VyZmx5JykgPyB1bmRlZmluZWQgOiAnc3RpY2tlcmZseScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBDb25uZWN0aW5nIHRvIE1vbmdvREIgd2l0aCBVUkk6ICR7TU9OR09EQl9VUkkhLnJlcGxhY2UoLzpbXjpAXStALywgJzoqKioqQCcpfWApO1xyXG4gICAgXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkhLCBvcHRzKVxyXG4gICAgICAudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0aW9uIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICByZXR1cm4gbW9uZ29vc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycik7XHJcbiAgICAgICAgaWYgKGlzRGV2KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGV2ZWxvcG1lbnQgbW9kZTogQ29udGludWluZyB3aXRob3V0IE1vbmdvREInKTtcclxuICAgICAgICAgIHJldHVybiBtb25nb29zZTsgLy8gUmV0dXJuIG1vbmdvb3NlIGluc3RhbmNlIHdpdGhvdXQgY29ubmVjdGlvbiBpbiBkZXZcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1vbmdvb3NlID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcbiAgICBjYWNoZWQuY29ubiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGVzdGFibGlzaCBNb25nb0RCIGNvbm5lY3Rpb246JywgZSk7XHJcbiAgICBpZiAoaXNEZXYpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0RldmVsb3BtZW50IG1vZGU6IENvbnRpbnVpbmcgd2l0aG91dCBNb25nb0RCJyk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEtlZXAgdGhlIGRlZmF1bHQgZXhwb3J0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RhdGFiYXNlOyAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJpc0RldiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJkYk5hbWUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJjb25uZWN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjb25uZWN0aW9uIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/Order.ts":
/*!*************************!*\
  !*** ./models/Order.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Order: () => (/* binding */ Order),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    orderItems: [\n        {\n            product: {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Product\",\n                required: true\n            },\n            quantity: {\n                type: Number,\n                required: true,\n                min: [\n                    1,\n                    \"Quantity must be at least 1\"\n                ]\n            },\n            price: {\n                type: Number,\n                required: true\n            },\n            customImage: {\n                type: String\n            },\n            size: {\n                type: String\n            }\n        }\n    ],\n    shippingAddress: {\n        fullName: {\n            type: String,\n            required: true\n        },\n        address: {\n            type: String,\n            required: true\n        },\n        city: {\n            type: String,\n            required: true\n        },\n        state: {\n            type: String,\n            required: true\n        },\n        postalCode: {\n            type: String,\n            required: true\n        },\n        country: {\n            type: String,\n            required: true\n        }\n    },\n    paymentMethod: {\n        type: String,\n        required: true\n    },\n    paymentResult: {\n        id: {\n            type: String\n        },\n        status: {\n            type: String\n        },\n        email_address: {\n            type: String\n        }\n    },\n    itemsPrice: {\n        type: Number,\n        required: true,\n        default: 0.0\n    },\n    shippingPrice: {\n        type: Number,\n        required: true,\n        default: 0.0\n    },\n    taxPrice: {\n        type: Number,\n        required: true,\n        default: 0.0\n    },\n    totalPrice: {\n        type: Number,\n        required: true,\n        default: 0.0\n    },\n    isPaid: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    paidAt: {\n        type: Date\n    },\n    isShipped: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    shippedAt: {\n        type: Date\n    },\n    isDelivered: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    deliveredAt: {\n        type: Date\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"processing\",\n            \"shipped\",\n            \"delivered\",\n            \"cancelled\"\n        ],\n        default: \"pending\"\n    }\n}, {\n    timestamps: true\n});\n// Check if the model is already defined to prevent overwriting during hot reloads\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvT3JkZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRDtBQTRDdEQsTUFBTUUsY0FBc0IsSUFBSUQsNENBQU1BLENBQ3BDO0lBQ0VFLE1BQU07UUFDSkMsTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBQyxZQUFZO1FBQ1Y7WUFDRUMsU0FBUztnQkFDUE4sTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO2dCQUNwQ0MsS0FBSztnQkFDTEMsVUFBVTtZQUNaO1lBQ0FHLFVBQVU7Z0JBQ1JQLE1BQU1RO2dCQUNOSixVQUFVO2dCQUNWSyxLQUFLO29CQUFDO29CQUFHO2lCQUE4QjtZQUN6QztZQUNBQyxPQUFPO2dCQUNMVixNQUFNUTtnQkFDTkosVUFBVTtZQUNaO1lBQ0FPLGFBQWE7Z0JBQ1hYLE1BQU1ZO1lBQ1I7WUFDQUMsTUFBTTtnQkFDSmIsTUFBTVk7WUFDUjtRQUNGO0tBQ0Q7SUFDREUsaUJBQWlCO1FBQ2ZDLFVBQVU7WUFBRWYsTUFBTVk7WUFBUVIsVUFBVTtRQUFLO1FBQ3pDWSxTQUFTO1lBQUVoQixNQUFNWTtZQUFRUixVQUFVO1FBQUs7UUFDeENhLE1BQU07WUFBRWpCLE1BQU1ZO1lBQVFSLFVBQVU7UUFBSztRQUNyQ2MsT0FBTztZQUFFbEIsTUFBTVk7WUFBUVIsVUFBVTtRQUFLO1FBQ3RDZSxZQUFZO1lBQUVuQixNQUFNWTtZQUFRUixVQUFVO1FBQUs7UUFDM0NnQixTQUFTO1lBQUVwQixNQUFNWTtZQUFRUixVQUFVO1FBQUs7SUFDMUM7SUFDQWlCLGVBQWU7UUFDYnJCLE1BQU1ZO1FBQ05SLFVBQVU7SUFDWjtJQUNBa0IsZUFBZTtRQUNiQyxJQUFJO1lBQUV2QixNQUFNWTtRQUFPO1FBQ25CWSxRQUFRO1lBQUV4QixNQUFNWTtRQUFPO1FBQ3ZCYSxlQUFlO1lBQUV6QixNQUFNWTtRQUFPO0lBQ2hDO0lBQ0FjLFlBQVk7UUFDVjFCLE1BQU1RO1FBQ05KLFVBQVU7UUFDVnVCLFNBQVM7SUFDWDtJQUNBQyxlQUFlO1FBQ2I1QixNQUFNUTtRQUNOSixVQUFVO1FBQ1Z1QixTQUFTO0lBQ1g7SUFDQUUsVUFBVTtRQUNSN0IsTUFBTVE7UUFDTkosVUFBVTtRQUNWdUIsU0FBUztJQUNYO0lBQ0FHLFlBQVk7UUFDVjlCLE1BQU1RO1FBQ05KLFVBQVU7UUFDVnVCLFNBQVM7SUFDWDtJQUNBSSxRQUFRO1FBQ04vQixNQUFNZ0M7UUFDTjVCLFVBQVU7UUFDVnVCLFNBQVM7SUFDWDtJQUNBTSxRQUFRO1FBQ05qQyxNQUFNa0M7SUFDUjtJQUNBQyxXQUFXO1FBQ1RuQyxNQUFNZ0M7UUFDTjVCLFVBQVU7UUFDVnVCLFNBQVM7SUFDWDtJQUNBUyxXQUFXO1FBQ1RwQyxNQUFNa0M7SUFDUjtJQUNBRyxhQUFhO1FBQ1hyQyxNQUFNZ0M7UUFDTjVCLFVBQVU7UUFDVnVCLFNBQVM7SUFDWDtJQUNBVyxhQUFhO1FBQ1h0QyxNQUFNa0M7SUFDUjtJQUNBVixRQUFRO1FBQ054QixNQUFNWTtRQUNOMkIsTUFBTTtZQUFDO1lBQVc7WUFBYztZQUFXO1lBQWE7U0FBWTtRQUNwRVosU0FBUztJQUNYO0FBQ0YsR0FDQTtJQUFFYSxZQUFZO0FBQUs7QUFHckIsa0ZBQWtGO0FBQ2xGLE1BQU1DLFFBQVE3Qyx3REFBZSxDQUFDNkMsS0FBSyxJQUFJN0MscURBQWMsQ0FBUyxTQUFTRTtBQUV0RDtBQUNqQixpRUFBZTJDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja2VyZmx5Ly4vbW9kZWxzL09yZGVyLnRzP2I0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcmRlckl0ZW0ge1xyXG4gIHByb2R1Y3Q6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBjdXN0b21JbWFnZT86IHN0cmluZztcclxuICBzaXplPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaGlwcGluZ0FkZHJlc3Mge1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHBvc3RhbENvZGU6IHN0cmluZztcclxuICBjb3VudHJ5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9yZGVyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHVzZXI6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xyXG4gIG9yZGVySXRlbXM6IElPcmRlckl0ZW1bXTtcclxuICBzaGlwcGluZ0FkZHJlc3M6IElTaGlwcGluZ0FkZHJlc3M7XHJcbiAgcGF5bWVudE1ldGhvZDogc3RyaW5nO1xyXG4gIHBheW1lbnRSZXN1bHQ/OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICBlbWFpbF9hZGRyZXNzOiBzdHJpbmc7XHJcbiAgfTtcclxuICBpdGVtc1ByaWNlOiBudW1iZXI7XHJcbiAgc2hpcHBpbmdQcmljZTogbnVtYmVyO1xyXG4gIHRheFByaWNlOiBudW1iZXI7XHJcbiAgdG90YWxQcmljZTogbnVtYmVyO1xyXG4gIGlzUGFpZDogYm9vbGVhbjtcclxuICBwYWlkQXQ/OiBEYXRlO1xyXG4gIGlzU2hpcHBlZDogYm9vbGVhbjtcclxuICBzaGlwcGVkQXQ/OiBEYXRlO1xyXG4gIGlzRGVsaXZlcmVkOiBib29sZWFuO1xyXG4gIGRlbGl2ZXJlZEF0PzogRGF0ZTtcclxuICBzdGF0dXM6ICdwZW5kaW5nJyB8ICdwcm9jZXNzaW5nJyB8ICdzaGlwcGVkJyB8ICdkZWxpdmVyZWQnIHwgJ2NhbmNlbGxlZCc7XHJcbiAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgT3JkZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcjoge1xyXG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHJlZjogJ1VzZXInLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvcmRlckl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgICByZWY6ICdQcm9kdWN0JyxcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcXVhbnRpdHk6IHtcclxuICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWluOiBbMSwgJ1F1YW50aXR5IG11c3QgYmUgYXQgbGVhc3QgMSddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VzdG9tSW1hZ2U6IHtcclxuICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNoaXBwaW5nQWRkcmVzczoge1xyXG4gICAgICBmdWxsTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIGFkZHJlc3M6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBjaXR5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgc3RhdGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBwb3N0YWxDb2RlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgY291bnRyeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB9LFxyXG4gICAgcGF5bWVudE1ldGhvZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBheW1lbnRSZXN1bHQ6IHtcclxuICAgICAgaWQ6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgICAgZW1haWxfYWRkcmVzczogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIH0sXHJcbiAgICBpdGVtc1ByaWNlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6IDAuMCxcclxuICAgIH0sXHJcbiAgICBzaGlwcGluZ1ByaWNlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6IDAuMCxcclxuICAgIH0sXHJcbiAgICB0YXhQcmljZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0OiAwLjAsXHJcbiAgICB9LFxyXG4gICAgdG90YWxQcmljZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0OiAwLjAsXHJcbiAgICB9LFxyXG4gICAgaXNQYWlkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwYWlkQXQ6IHtcclxuICAgICAgdHlwZTogRGF0ZSxcclxuICAgIH0sXHJcbiAgICBpc1NoaXBwZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHNoaXBwZWRBdDoge1xyXG4gICAgICB0eXBlOiBEYXRlLFxyXG4gICAgfSxcclxuICAgIGlzRGVsaXZlcmVkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBkZWxpdmVyZWRBdDoge1xyXG4gICAgICB0eXBlOiBEYXRlLFxyXG4gICAgfSxcclxuICAgIHN0YXR1czoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGVudW06IFsncGVuZGluZycsICdwcm9jZXNzaW5nJywgJ3NoaXBwZWQnLCAnZGVsaXZlcmVkJywgJ2NhbmNlbGxlZCddLFxyXG4gICAgICBkZWZhdWx0OiAncGVuZGluZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbi8vIENoZWNrIGlmIHRoZSBtb2RlbCBpcyBhbHJlYWR5IGRlZmluZWQgdG8gcHJldmVudCBvdmVyd3JpdGluZyBkdXJpbmcgaG90IHJlbG9hZHNcclxuY29uc3QgT3JkZXIgPSBtb25nb29zZS5tb2RlbHMuT3JkZXIgfHwgbW9uZ29vc2UubW9kZWw8SU9yZGVyPignT3JkZXInLCBPcmRlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgeyBPcmRlciB9O1xyXG5leHBvcnQgZGVmYXVsdCBPcmRlcjsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiT3JkZXJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsIm9yZGVySXRlbXMiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJOdW1iZXIiLCJtaW4iLCJwcmljZSIsImN1c3RvbUltYWdlIiwiU3RyaW5nIiwic2l6ZSIsInNoaXBwaW5nQWRkcmVzcyIsImZ1bGxOYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsInBvc3RhbENvZGUiLCJjb3VudHJ5IiwicGF5bWVudE1ldGhvZCIsInBheW1lbnRSZXN1bHQiLCJpZCIsInN0YXR1cyIsImVtYWlsX2FkZHJlc3MiLCJpdGVtc1ByaWNlIiwiZGVmYXVsdCIsInNoaXBwaW5nUHJpY2UiLCJ0YXhQcmljZSIsInRvdGFsUHJpY2UiLCJpc1BhaWQiLCJCb29sZWFuIiwicGFpZEF0IiwiRGF0ZSIsImlzU2hpcHBlZCIsInNoaXBwZWRBdCIsImlzRGVsaXZlcmVkIiwiZGVsaXZlcmVkQXQiLCJlbnVtIiwidGltZXN0YW1wcyIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Order.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Forders%2Fuser%2Froute&page=%2Fapi%2Forders%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Fuser%2Froute.ts&appDir=D%3A%5CStickerfly%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CStickerfly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();