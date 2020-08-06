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

/***/ "./src/server/db/index.js":
/*!********************************!*\
  !*** ./src/server/db/index.js ***!
  \********************************/
/*! exports provided: Query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Query\", function() { return Query; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries/queries */ \"./src/server/db/queries/queries.js\");\n\nconst pool = mysql__WEBPACK_IMPORTED_MODULE_0__[\"createPool\"]({\n  host: 'localhost',\n  user: 'appliedmovement',\n  password: '1234567',\n  database: 'patientportal',\n  connectionLimit: 10\n});\nconst Query = (query, values) => {\n  const sql = mysql__WEBPACK_IMPORTED_MODULE_0__[\"format\"](query, values);\n  return new Promise((resolve, reject) => {\n    pool.query(sql, (err, results) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(results);\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  queries: _queries_queries__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/server/db/index.js?");

/***/ }),

/***/ "./src/server/db/queries/queries.js":
/*!******************************************!*\
  !*** ./src/server/db/queries/queries.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./src/server/db/index.js\");\n\n\nconst all = () => Object(___WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`\n    SELECT * FROM patientportal.patientinfo;\n`);\n\nconst one = id => Object(___WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`\n    SELECT *\n        FROM patientportal.patientinfo\n        WHERE id = ?`, [id]);\n\nconst insert = (userid, content) => Object(___WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`INSERT INTO chirps (userid, content) VALUE (?)`, [[userid, content]]);\n\nconst update = (id, content) => Object(___WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`UPDATE chirps SET content = ? WHERE id = ?`, [content, id]);\n\nconst destroy = id => Object(___WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`DELETE FROM patientinfo WHERE id = ?`, [id]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  all,\n  one,\n  insert,\n  update,\n  destroy\n});\n\n//# sourceURL=webpack:///./src/server/db/queries/queries.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ \"./src/server/routes/test.js\");\n/* harmony import */ var _patientinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patientinfo */ \"./src/server/routes/patientinfo.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.use('/test', _test__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/patientinfo', _patientinfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/patientinfo.js":
/*!******************************************!*\
  !*** ./src/server/routes/patientinfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./src/server/db/index.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // GET /api/chirps/1 or GET /api/chirps\n\nrouter.get('/:id?', async (req, res, next) => {\n  const id = Number(req.params.id);\n\n  if (id) {\n    try {\n      const [patientRecord] = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.one(id);\n      res.json(patientRecord);\n    } catch (error) {\n      next(error);\n    }\n  } else {\n    try {\n      const queries = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.all();\n      res.json(queries);\n    } catch (error) {\n      next(error);\n    }\n  }\n}); // POST /api/patientinfo/\n\nrouter.post('/', async (req, res, next) => {\n  const record = req.body;\n\n  try {\n    const result = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.insert(record.name, record.dateOfBirth, record.phone, record.email);\n    res.json({\n      result\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // PUT /api/chirps/1\n\nrouter.put('/:id', async (req, res, next) => {\n  const id = Number(req.params.id);\n  const chirp = req.body;\n\n  try {\n    await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.update(id, chirp.content);\n    res.json({\n      msg: 'edited',\n      id\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // DELETE /api/chirps/1\n\nrouter.delete('/:id', async (req, res, next) => {\n  try {\n    const id = Number(req.params.id);\n    let response = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.destroy(id);\n    res.json(response);\n  } catch (error) {\n    console.log(error);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/patientinfo.js?");

/***/ }),

/***/ "./src/server/routes/test.js":
/*!***********************************!*\
  !*** ./src/server/routes/test.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./src/server/db/index.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.get('/', async (req, res, next) => {\n  try {\n    const queries = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.all();\n    res.json(queries);\n  } catch (error) {\n    next(error);\n  }\n}); // router.get('/:id?', async (req, res, next) => {\n//   const id = Number(req.params.id);\n//   if (id) {\n//     try {\n//       const [query] = db.queries.one(id);\n//       res.json(query);\n//     } catch (error) {\n//       next(error);\n//     }\n//   } else {\n//     try {\n//       const queries = db.queries.all();\n//       res.json(queries);\n//     } catch (error) {\n//       next(error);\n//     }\n//   }\n// });\n\nrouter.delete('/:id', async (req, res, next) => {\n  try {\n    const id = Number(req.params.id);\n    let response = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.destroy(id);\n    res.json(response);\n  } catch (error) {\n    console.log(error);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/test.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1__();\nlet publicPath = path__WEBPACK_IMPORTED_MODULE_0__[\"join\"](__dirname, '../public');\nconsole.log(publicPath);\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"static\"](publicPath));\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\napp.use('/api', _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.get('/', (req, res) => {\n  res.sendFile('index.html');\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });