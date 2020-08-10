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

/***/ "./src/server/db/connection.js":
/*!*************************************!*\
  !*** ./src/server/db/connection.js ***!
  \*************************************/
/*! exports provided: orm, connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orm\", function() { return orm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connection\", function() { return connection; });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();\nconst connection = mysql.createConnection({\n  host: process.env.DB_HOST,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD,\n  database: process.env.DB_SCHEMA\n});\nconst orm = {\n  // get(users, {name:'sam',email:'sam@email.com'})\n  // SELECT * FROM users WHERE name = ? and email` = ?\n  get(table, condition, callback) {\n    let data = this.generateSetData(condition, ' AND ');\n    connection.execute(`SELECT * FROM \\`${table}\\` WHERE ${data.sql}`, data.data, callback);\n  },\n\n  insert(table, columnValues, callback) {\n    let data = this.generateSetData(columnValues, ', ');\n    connection.execute(`INSERT INTO \\`${table}\\` SET ${data.sql}`, data.data, callback);\n  },\n\n  generateSetData(condition, devider) {\n    let setString = '';\n    let valueArray = [];\n    Object.keys(condition).forEach((key, i) => {\n      setString += (i > 0 ? devider : '') + '`' + key + '` = ?';\n      valueArray.push(condition[key]);\n    });\n    return {\n      sql: setString,\n      data: valueArray\n    };\n  }\n\n}; // SELECT * FROM x WHERE column1 = \"sam\" AND solumn2 = \"free\"\n// UPDATE x SET column1 = \"sam\" , solumn2 = \"free\" WHERE column3 = \"some\"\n\n\n\n//# sourceURL=webpack:///./src/server/db/connection.js?");

/***/ }),

/***/ "./src/server/db/index.js":
/*!********************************!*\
  !*** ./src/server/db/index.js ***!
  \********************************/
/*! exports provided: Query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Query\", function() { return Query; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries/queries */ \"./src/server/db/queries/queries.js\");\n\nconst pool = mysql__WEBPACK_IMPORTED_MODULE_0__[\"createPool\"]({\n  host: 'localhost',\n  user: 'root',\n  password: \"\",\n  database: 'patientportal',\n  connectionLimit: 10\n});\nconst Query = (query, values) => {\n  const sql = mysql__WEBPACK_IMPORTED_MODULE_0__[\"format\"](query, values);\n  return new Promise((resolve, reject) => {\n    pool.query(sql, (err, results) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(results);\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  queries: _queries_queries__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/server/db/index.js?");

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

/***/ "./src/server/email-templates/templates.js":
/*!*************************************************!*\
  !*** ./src/server/email-templates/templates.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.generateContactEmail = message => {\n  let {\n    userEmail,\n    subject,\n    text\n  } = message;\n  return {\n    to: '2020appliedmovement@gmail.com',\n    from: '2020appliedmovement@gmail.com',\n    subject,\n    html: `\n        \n        <div> \n        There email is user email\n        ${userEmail}\n        ${text}\n        </div>\n        `\n  };\n};\n\n//# sourceURL=webpack:///./src/server/email-templates/templates.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _patientinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patientinfo */ \"./src/server/routes/patientinfo.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/messages */ \"./src/server/utils/messages.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_messages__WEBPACK_IMPORTED_MODULE_3__);\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n // import orm from 'orm'\n\n\nrouter.use('/patientinfo', _patientinfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.get('/secret', (req, res) => {\n  // res.json(req.user);\n  res.send('Hello World!');\n});\nrouter.post('/login', async (req, res) => {\n  console.log('Data from controller', req.body);\n\n  try {} catch (err) {\n    console.log(err);\n  }\n\n  orm.get('users', {\n    email: req.body.email\n  }, (err, users) => {\n    if (err) {\n      res.json({\n        error: err\n      }).status(401);\n    }\n\n    if (users.length < 1) {\n      // no such user\n      res.status(401);\n    }\n\n    console.log(user);\n    let user = users[0]; // verify pw\n\n    bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.compare(req.body.password, user.password, (err, result) => {\n      if (err) {\n        res.status(401);\n      } //todo JWT or session\n\n\n      res.status(200).json({\n        token: jwt.sign({\n          id: user.id,\n          email: user.email\n        }, secret, {\n          expiresIn: '2h'\n        }),\n        email: user.email,\n        id: user.id\n      });\n    });\n  });\n});\nrouter.post('/contact', async (req, res, next) => {\n  // let  {userEmail, subject, text} = req.body;\n  let message = req.body;\n  console.log('Message from controller', message);\n\n  try {\n    let sendMessage = await Object(_utils_messages__WEBPACK_IMPORTED_MODULE_3__[\"sendContactMessage\"])(message);\n    sendMessage ? res.status(200).json({\n      success: true,\n      message: \"message sent!\"\n    }) : res.status(400).json({\n      success: false,\n      message: \"error sending message!\"\n    });\n  } catch (err) {\n    console.log(err);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/patientinfo.js":
/*!******************************************!*\
  !*** ./src/server/routes/patientinfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ \"./src/server/db/index.js\");\n/* harmony import */ var _db_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/connection */ \"./src/server/db/connection.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"](); // WORKING - GET /api/patientinfo/1 or GET /api/patientinfo\n\nrouter.get('/:id', async (req, res, next) => {\n  _db_connection__WEBPACK_IMPORTED_MODULE_2__[\"orm\"].get('patientinfo', {\n    id: req.params.id\n  }, (err, results) => {\n    if (err || results.length < 1) {\n      res.status(500);\n    }\n\n    res.json(results[0]);\n  });\n}); // In PROGRESS - POST /api/patientinfo/\n\nrouter.post('/', async (req, res, next) => {\n  _db_connection__WEBPACK_IMPORTED_MODULE_2__[\"orm\"].insert('patientinfo', req.body, (err, result) => {\n    res.json({\n      id: result.insertId\n    });\n  });\n}); // PUT /api/chirps/1\n\nrouter.put('/:id', async (req, res, next) => {\n  const id = Number(req.params.id);\n  const chirp = req.body;\n\n  try {\n    await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chirps.update(id, chirp.content);\n    res.json({\n      msg: 'edited',\n      id\n    });\n  } catch (error) {\n    next(error);\n  }\n}); // WORKING -  DELETE /api/chirps/1\n\nrouter.delete('/:id', async (req, res, next) => {\n  try {\n    const id = Number(req.params.id);\n    let response = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queries.destroy(id);\n    res.json(response);\n  } catch (error) {\n    console.log(error);\n  }\n});\nrouter.get('/search/:term', (req, res) => {\n  _db_connection__WEBPACK_IMPORTED_MODULE_2__[\"connection\"].execute('SELECT * FROM patientinfo WHERE name LIKE ?', [req.params.term + '%'], (err, results) => {\n    res.json(results);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/patientinfo.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config();\nconst app = express__WEBPACK_IMPORTED_MODULE_1__();\nlet publicPath = path__WEBPACK_IMPORTED_MODULE_0__[\"join\"](__dirname, '../public'); // console.log(publicPath);\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"static\"](publicPath));\napp.use(express__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\napp.use('/api', _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.get('/', (req, res) => {\n  res.sendFile('index.html');\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on http://localhost:${port}`);\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/utils/messages.js":
/*!**************************************!*\
  !*** ./src/server/utils/messages.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nconst sendgridTransport = __webpack_require__(/*! nodemailer-sendgrid-transport */ \"nodemailer-sendgrid-transport\");\n\nconst {\n  generateContactEmail\n} = __webpack_require__(/*! ../email-templates/templates */ \"./src/server/email-templates/templates.js\"); //repace send_api_key with key from .env file\n\n\nconst options = {\n  auth: {\n    api_key: process.env.SENDGRID_API_KEY\n  }\n};\nlet mailer = nodemailer.createTransport(sendgridTransport(options));\n\nexports.sendContactMessage = async message => {\n  console.log('Message from message utility', message);\n  let messageSent;\n\n  try {\n    let emailMessage = await generateContactEmail(message);\n    console.log('Generated email', emailMessage);\n    let sendMessage = await mailer.sendMail(emailMessage, (err, res) => {\n      if (err) return console.log(err);\n      return true;\n    });\n    console.log(sendMessage);\n    return messageSent = true;\n  } catch (err) {\n    console.info(err);\n  }\n};\n\n//# sourceURL=webpack:///./src/server/utils/messages.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

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

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql2\");\n\n//# sourceURL=webpack:///external_%22mysql2%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "nodemailer-sendgrid-transport":
/*!************************************************!*\
  !*** external "nodemailer-sendgrid-transport" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer-sendgrid-transport\");\n\n//# sourceURL=webpack:///external_%22nodemailer-sendgrid-transport%22?");

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