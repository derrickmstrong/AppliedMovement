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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
=======
/***/ "./src/server/db/index.js":
/*!********************************!*\
  !*** ./src/server/db/index.js ***!
  \********************************/
/*! exports provided: Query, default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/package.json: Error while parsing JSON - Unexpected token < in JSON at position 836\\n    at JSON.parse (<anonymous>)\\n    at /Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/files/package.js:57:20\\n    at /Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/files/utils.js:37:12\\n    at Generator.next (<anonymous>)\\n    at Function.<anonymous> (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/gensync-utils/async.js:26:3)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/gensync/index.js:84:14)\\n    at sync (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/gensync-utils/async.js:66:25)\\n    at sync (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/gensync/index.js:177:19)\\n    at onFirstPause (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/gensync/index.js:204:19)\\n    at Generator.next (<anonymous>)\\n    at cachedFunction (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/caching.js:68:46)\\n    at cachedFunction.next (<anonymous>)\\n    at findPackageData (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/files/package.js:33:18)\\n    at findPackageData.next (<anonymous>)\\n    at buildRootChain (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/config-chain.js:105:92)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/partial.js:95:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at Function.<anonymous> (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/partial.js:120:25)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/gensync/index.js:84:14)\\n    at Object.<anonymous> (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/@babel/core/lib/config/index.js:41:61)\\n    at Object.<anonymous> (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/babel-loader/lib/index.js:151:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/babel-loader/lib/index.js:5:194)\\n    at /Volumes/WD_Programming/InnovateBham/Source/Final/AppliedMovement/node_modules/babel-loader/lib/index.js:5:364\");\n\n//# sourceURL=webpack:///./src/server/db/index.js?");

/***/ }),

>>>>>>> master
/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ \"./src/server/routes/test.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.use(\"/test\", _test__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/test.js":
/*!***********************************!*\
  !*** ./src/server/routes/test.js ***!
  \***********************************/
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _patientinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patientinfo */ \"./src/server/routes/patientinfo.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.use('/patientinfo', _patientinfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/patientinfo.js":
/*!******************************************!*\
  !*** ./src/server/routes/patientinfo.js ***!
  \******************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.use(\"/\", (req, res, next) => {\n  res.send(\"testing route\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/test.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./src/server/db/index.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // WORKING - GET /api/patientinfo/1 or GET /api/patientinfo\n\nrouter.get('/:id?', async (req, res, next) => {\n  const id = Number(req.params.id);\n\n  if (id) {\n    try {\n      const [patientRecord] = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.one(id);\n      res.json(patientRecord);\n    } catch (error) {\n      next(error);\n    }\n  } else {\n    try {\n      const queries = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.all();\n      res.json(queries);\n    } catch (error) {\n      next(error);\n    }\n  }\n}); // In PROGRESS - POST /api/patientinfo/\n\nrouter.post('/', async (req, res, next) => {\n  const record = req.body;\n\n  try {\n    const result = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.insert(record.name, record.dateOfBirth, record.phone, record.email);\n    res.json({\n      result\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // PUT /api/chirps/1\n\nrouter.put('/:id', async (req, res, next) => {\n  const id = Number(req.params.id);\n  const chirp = req.body;\n\n  try {\n    await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.update(id, chirp.content);\n    res.json({\n      msg: 'edited',\n      id\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // WORKING -  DELETE /api/chirps/1\n\nrouter.delete('/:id', async (req, res, next) => {\n  try {\n    const id = Number(req.params.id);\n    let response = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.destroy(id);\n    res.json(response);\n  } catch (error) {\n    console.log(error);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/patientinfo.js?");
>>>>>>> master

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.js\");\n\n\n\n\n\n\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\").config({\n  path: './config/config.env'\n});\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\nconst PORT = 3000;\nlet publicPath = path__WEBPACK_IMPORTED_MODULE_3__[\"resolve\"](__dirname, '..') + '/Public';\nconsole.log(publicPath);\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](publicPath));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"json\"]()); // api\n\napp.use('/api', _routes_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\napp.get('/', (req, res) => {\n  res.sendFile('index.html');\n});\napp.listen(PORT, () => {\n  console.log('app running at http://localhost:' + PORT);\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1__();\nlet publicPath = path__WEBPACK_IMPORTED_MODULE_0__[\"join\"](__dirname, '../public');\nconsole.log(publicPath);\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"static\"](publicPath));\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\napp.use('/api', _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.get('/', (req, res) => {\n  res.sendFile('index.html');\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");
>>>>>>> master

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

<<<<<<< HEAD
/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

=======
>>>>>>> master
/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });