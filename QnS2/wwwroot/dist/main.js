(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full{\r\n    height: 100%;\r\n   \r\n \r\n}\r\n.menu-left{\r\n    text-align: center;\r\n    background-color: #34395d;\r\n    width: 15%;\r\n  float: left;\r\n}\r\n.menu-left .icon img{\r\n    height:15%;\r\n     width:45%;\r\n     \r\n  \r\n}\r\n.menu-left .icon select{\r\n    \r\n    display: inline;\r\n    background-color: #3d4369;\r\n    color:#fcfdff;\r\n    border-radius: 12px;\r\n    width: 80%;\r\n}\r\n.menu-left  .listmenu{\r\n    background-color: #34395d;\r\n    color:#fcfdff;\r\n  \r\n   \r\n    display: flex;\r\n    text-align: left;\r\n}\r\n.menu-left  .listmenu ul li p{\r\n    padding-top: 60%;\r\n    padding-bottom: 25%;\r\n    color: red;\r\n}\r\n.menu-left  .listmenu ul li{\r\n    margin-left:50%;\r\n   \r\n}\r\n.menu-left  .listmenu >*{\r\n   display: block;\r\n}\r\n.menu-left  .listmenu nav ul li a{\r\n    color: #fcfdff;\r\n    \r\n}\r\n.menu-left  .listmenu nav ul li a:hover{\r\n    background-color: #2a2c44;\r\n    \r\n}\r\n.menu-right{\r\n   float: right;\r\n   width: 85%;\r\n    background-color: #fcfdff;\r\n}\r\n.menu-right .titlecard img{\r\n    float: right;\r\n    height: 957px;\r\n   width: 300px;\r\n}\r\n.menu-right .titlecard select{\r\n    margin-top: 2%;\r\n    width: 10%;\r\n    display: inline;\r\n    font-weight: bold;\r\n  \r\n}\r\n.menu-right .titlecard p{\r\n    margin-left: 10%;\r\n    padding-right: 3%;\r\n    display: inline;\r\n    font-weight: bold;\r\n \r\n}\r\n.menu-right .displayallcard .card{\r\n    float: left;\r\n    display: block;\r\n    margin: 5%;\r\n    width: 15%;\r\n   \r\n}\r\n.menu-right .displayallcard .card .card-body{\r\n\r\n}\r\n.menu-right .card .card-img-top{\r\n    width: 70%;\r\n  margin: 12% ;\r\n}\r\n.menu-right .displayallcard{\r\n    display: block;\r\n   \r\n   \r\n}\r\n.menu-right .displayEmplyees table{\r\n    width: 80%;\r\n}\r\n.menu-right .displayEmplyees p{\r\n    margin-left: 8%;\r\n   \r\n    display: -webkit-inline-box;\r\n    font-weight: bold;\r\n}\r\n.menu-right .displayEmplyees{\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row full\">\n  <div class=\"menu-left\">\n    <div class=\"icon\">\n      <img src=\"https://cdn1.iconfinder.com/data/icons/lumin-social-media-icons/512/Pinterest-512.png\">\n      <select class=\"form-control\" id=\"sel1\">\n        <option>Project:Kumela</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n      </select>\n    </div>\n    <div class=\"listmenu\">\n\n\n      <nav class>\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <p>MAIN</p>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Report</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Insights</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Spredsheets</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Leaderboard</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Administrator</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Sales</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Schedule</a>\n          </li>\n          <li class=\"nav-item active\">\n            <p>HELP</p>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Settings</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Library</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Support</a>\n          </li>\n\n        </ul>\n      </nav>\n\n    </div>\n\n  </div>\n  <div class=\"menu-right\">\n    <div class=\"titlecard\">\n      <p>Leaderboard For </p>\n      <select class=\"form-control\" id=\"sel1\">\n        <option>Today</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n      </select>\n      <img src=\"Closing-Costs-and-Commissions-in-Nashville-800x800.jpg\">\n    </div>\n    <diV class=\"displayallcard\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://www.w3schools.com/bootstrap4/img_avatar1.png\" alt=\"Card image\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">John Doe</h4>\n          <p class=\"card-text\">Some example text</p>\n          <a href=\"#\" class=\"btn btn-primary\">See Profile</a>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://www.w3schools.com/bootstrap4/img_avatar1.png\" alt=\"Card image\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">John Doe</h4>\n          <p class=\"card-text\">Some example text</p>\n          <a href=\"#\" class=\"btn btn-primary\">See Profile</a>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://www.w3schools.com/bootstrap4/img_avatar1.png\" alt=\"Card image\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">John Doe</h4>\n          <p class=\"card-text\">Some example text</p>\n          <a href=\"#\" class=\"btn btn-primary\">See Profile</a>\n        </div>\n      </div>\n    </diV>\n    <div class=\"displayEmplyees\">\n      <p>Other employees </p>\n      <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Firstname</th>\n              <th>Lastname</th>\n              <th>Email</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>John</td>\n              <td>Doe</td>\n              <td>john@example.com</td>\n            </tr>\n            <tr>\n              <td>Mary</td>\n              <td>Moe</td>\n              <td>mary@example.com</td>\n            </tr>\n            <tr>\n              <td>July</td>\n              <td>Dooley</td>\n              <td>july@example.com</td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'giaodien';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HauL\giaodien\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map