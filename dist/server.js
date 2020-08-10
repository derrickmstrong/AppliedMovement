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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _patientinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patientinfo */ \"./src/server/routes/patientinfo.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nrouter.use('/patientinfo', _patientinfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/patientinfo.js":
/*!******************************************!*\
  !*** ./src/server/routes/patientinfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./src/server/db/index.js\");\n\n // import { orm, connection } from '../db/connection';\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // WORKING - GET /api/patientinfo/1 or GET /api/patientinfo\n\nrouter.get('/:id?', async (req, res, next) => {\n  const id = Number(req.params.id);\n\n  if (id) {\n    try {\n      const [patientRecord] = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.one(id);\n      res.json(patientRecord);\n    } catch (error) {\n      next(error);\n    }\n  } else {\n    try {\n      const queries = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.all();\n      res.json(queries);\n    } catch (error) {\n      next(error);\n    }\n  }\n}); // In PROGRESS - POST /api/patientinfo/\n\nrouter.post('/', async (req, res, next) => {\n  const record = req.body;\n\n  try {\n    const result = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.insert(record.name, record.dateOfBirth, record.phone, record.email);\n    res.json({\n      result\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // PUT /api/chirps/1\n\nrouter.put('/:id', async (req, res, next) => {\n  const id = Number(req.params.id);\n  const chirp = req.body;\n\n  try {\n    await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.update(id, chirp.content);\n    res.json({\n      msg: 'edited',\n      id\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // WORKING -  DELETE /api/chirps/1\n\nrouter.delete('/:id', async (req, res, next) => {\n  try {\n    const id = Number(req.params.id);\n    let response = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.destroy(id);\n    res.json(response);\n  } catch (error) {\n    console.log(error);\n  }\n}); // // Search Component\n// router.get('/search/:term', (req, res) => {\n//   connection.execute('SELECT * FROM patientinfo WHERE name LIKE ?',[req.params.term+'%'],(err, results)=> {\n//     res.json(results)\n//   })\n// })\n// // BY ID\n// router.get('/:id', async (req, res, next) => {\n//   orm.get('patientinfo', { id: req.params.id }, (err, results) => {\n//     if (err || results.length < 1) {\n//       res.status(500);\n//     }\n//     res.json(results[0]);\n//   });\n// });\n// // POST \n// router.post('/', async (req, res, next) => {\n//   orm.insert('patientinfo', req.body, (err, result) => {\n//     res.json({ id: result.insertId });\n//   });\n// });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/patientinfo.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n\n\n\n\nconst cors = __webpack_require__(/*! cors */ \"cors\");\n\nconst sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\"); // TODO: Figure out how to make this work so that we don't leave out API open\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config({\n  path: __dirname + './.env'\n});\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1__();\nlet publicPath = path__WEBPACK_IMPORTED_MODULE_0__[\"join\"](__dirname, '../public');\nconsole.log(publicPath);\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"static\"](publicPath));\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\napp.use('/api', _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.get('/', (req, res) => {\n  res.sendFile('index.html');\n}); // SendGrid API\n// Use cors middleware\n\napp.use(cors()); // Setup Headers\n\napp.use((req, res, next) => {\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');\n  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');\n  next();\n}); // TODO: Setup Post route - Note: Move to own file in Routes later (see patientinfo.js) and import into Routes/index.js\n\napp.post('/contact', (req, res) => {\n  // Add API KEY\n  sgMail.setApiKey(''); // Setup req.body\n\n  const {\n    email,\n    subject,\n    message\n  } = req.body; // Create msg\n\n  const msg = {\n    to: 'derrickmstrong@gmail.com',\n    from: 'clearmarketinganddesign@gmail.com',\n    subject: `New AM Contact: ${subject}`,\n    text: `\n    From: ${email} \n    Message: ${message}\n    `\n  }; // Send mail\n\n  sgMail.send(msg) // THEN create Promise to check for success and catch on failure\n  .then(result => {\n    res.status(200).json({\n      success: true\n    });\n  }).catch(err => {\n    console.log('Err:', err);\n    res.status(401).json({\n      success: false\n    });\n  });\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sendgrid/mail\");\n\n//# sourceURL=webpack:///external_%22@sendgrid/mail%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

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