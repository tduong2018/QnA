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

/***/ "./src/app/admin-auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/admin-auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminAuthGuard = /** @class */ (function (_super) {
    __extends(AdminAuthGuard, _super);
    function AdminAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated)
            return false;
        if (this.authService.currentUser.roles == _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].admin)
            return true;
        this.router.navigate(['/no-access']);
        return false;
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AdminAuthGuard);
    return AdminAuthGuard;
}(_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]));



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 54px;\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    body {\r\n      padding-top: 56px;\r\n    }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <!-- Navigation -->\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" href=\"#\">Question and Answer</a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item active\">\r\n                        <a class=\"nav-link\" href=\"#\">\r\n\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"authService.logout()\">Log out</button>\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- Page Content -->\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-3\">\r\n                <h1 class=\"my-4\">Make it!</h1>\r\n                <div class=\"list-group\">\r\n                    <a routerLink=\"/admin/roles\" class=\"list-group-item\" routerLinkActive=\"active\">Roles</a>\r\n                    <a routerLink=\"/admin/users\" class=\"list-group-item\" routerLinkActive=\"active\">Users</a>\r\n                </div>\r\n            </div>\r\n            <!-- /.col-lg-3 -->\r\n\r\n            <div class=\"col-lg-9\">\r\n                <div class=\"card\" style=\"margin-top: 100px\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n                <!--                 <div class=\"card mt-4\">\r\n                    <img class=\"card-img-top img-fluid\" src=\"http://placehold.it/900x400\" alt=\"\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Product Name</h3>\r\n                        <h4>$24.99</h4>\r\n                        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit\r\n                            fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium\r\n                            animi perspiciatis molestias iure, ducimus!</p>\r\n                        <span class=\"text-warning\">&#9733; &#9733; &#9733; &#9733; &#9734;</span>\r\n                        4.0 stars\r\n                    </div>\r\n                </div> -->\r\n                <!-- /.card -->\r\n\r\n                <!-- <div class=\"card card-outline-secondary my-4\">\r\n                    <div class=\"card-header\">\r\n                        Product Reviews\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique\r\n                            necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,\r\n                            necessitatibus quae sint natus.</p>\r\n                        <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\r\n                        <hr>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique\r\n                            necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,\r\n                            necessitatibus quae sint natus.</p>\r\n                        <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\r\n                        <hr>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique\r\n                            necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia,\r\n                            necessitatibus quae sint natus.</p>\r\n                        <small class=\"text-muted\">Posted by Anonymous on 3/1/17</small>\r\n                        <hr>\r\n                        <a href=\"#\" class=\"btn btn-success\">Leave a Review</a>\r\n                    </div>\r\n                </div> -->\r\n                <!-- /.card -->\r\n\r\n            </div>\r\n            <!-- /.col-lg-9 -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- /.container -->\r\n\r\n    <!-- Footer -->\r\n    <!--     <div id=\"footer\">\r\n        <div class=\"container\">\r\n            <p class=\"muted credit\">Example courtesy <a href=\"http://martinbean.co.uk\">Martin Bean</a> and <a href=\"http://ryanfait.com/sticky-footer/\">Ryan\r\n                    Fait\r\n                </a>.</p>\r\n        </div>\r\n    </div> -->\r\n    <!-- Footer -->\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService) {
        this.authService = authService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        /*     this.orderService.getOrders()
              .subscribe(orders => this.orders = orders); */
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/role/role.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/role/role.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/role/role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-editrole\">\r\n  <div class=\"modal-header\">\r\n    <!---->\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit role</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\r\n      <div class=\"form-group\">\r\n        <div *ngIf=\"error != ''\" class=\"alert alert-danger\">{{ error }}.</div>\r\n        <label for=\"RoleName\">Role Name</label>\r\n        <input required [(ngModel)]=\"role.name\" name=\"name\" #roleName=\"ngModel\" type=\"text\" class=\"form-control\">\r\n        <input hidden name=\"id\" [(ngModel)]=\"role.id\" type=\"text\" class=\"form-control\" />\r\n        <div class=\"alert alert-danger\" *ngIf=\"roleName.touched && !roleName.valid\">\r\n          <div *ngIf=\"roleName.errors.required\">\r\n            Rolw name is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p>\r\n        {{f.value | json}}\r\n      </p>\r\n      <div class=\"mb-5\">\r\n        <button class=\"btn btn-primary float-right\" [disabled]=\"!f.valid || !roleName.touched\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoleComponent = /** @class */ (function () {
    function RoleComponent(roleService, router, route, activeModal, toastr) {
        this.roleService = roleService;
        this.router = router;
        this.route = route;
        this.activeModal = activeModal;
        this.toastr = toastr;
        this.error = '';
        this.original = { id: '', name: '' };
        this.role = { id: '', name: '' };
    }
    RoleComponent.prototype.ngOnInit = function () {
        if (this.original == null)
            this.role = { id: '', name: '' };
        else
            this.role = JSON.parse(JSON.stringify(this.original));
    };
    RoleComponent.prototype.submit = function (f) {
        var _this = this;
        if (this.mode) {
            this.roleService.update('', f.value).toPromise().then(function (result) {
                _this.toastr.success('Updated!', 'Success!');
                _this.activeModal.close('Save');
            });
        }
        else {
            this.roleService.create(f.value).subscribe(function (result) {
                _this.toastr.success('Created!', 'Success!');
                _this.activeModal.close('Save');
            }, function (error) {
                if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_2__["BadInput"]) {
                    _this.error = error.originalError;
                }
                else
                    throw error;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RoleComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RoleComponent.prototype, "original", void 0);
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/admin/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/admin/role/role.component.css")]
        }),
        __metadata("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_0__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/admin/rolemangage/role.mangage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/rolemangage/role.mangage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/rolemangage/role.mangage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/rolemangage/role.mangage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <a routerLink=\"/admin/roles\" class=\"btn btn-primary\" (click)=\"editRole(0,null)\">New Role</a>\r\n</p>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Discription</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let r of roles\">\r\n      <td>{{r.name}}</td>\r\n      <td></td>\r\n      <td>\r\n        <button class=\"btn btn-outline-info\" routerLink=\"/admin/roles\" (click)=\"editRole(1,r)\">Edit</button>\r\n        <button class=\"btn badge-danger\" (click)=\"delete(r.id)\" >Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/admin/rolemangage/role.mangage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/rolemangage/role.mangage.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleMangageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMangageComponent", function() { return RoleMangageComponent; });
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../role/role.component */ "./src/app/admin/role/role.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RoleMangageComponent = /** @class */ (function () {
    function RoleMangageComponent(roleService, router, modalService, toastr) {
        this.roleService = roleService;
        this.router = router;
        this.modalService = modalService;
        this.toastr = toastr;
    }
    RoleMangageComponent.prototype.ngOnInit = function () {
        this.get();
    };
    RoleMangageComponent.prototype.get = function () {
        var _this = this;
        this.roleService.getAll().subscribe(function (result) {
            if (result)
                _this.roles = result;
            //else
            //this.invalidLogin = true;
        }, function (error) {
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"]) {
                //this.invalidLogin = true;
                _this.error = error.originalError;
            }
            else
                throw error;
        });
    };
    RoleMangageComponent.prototype.delete = function (id) {
        var _this = this;
        if (!confirm('Are you sure want to delete this role?'))
            return;
        this.roleService.delete(id).subscribe(function (result) {
            _this.get();
            //this.roles = result;
            _this.toastr.success('Deleted!', 'Success!');
        }, function (error) {
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"]) {
                //this.invalidLogin = true;
                _this.error = error.originalError;
            }
            else
                throw error;
        });
        this.router.navigate(['/admin/roles']);
    };
    RoleMangageComponent.prototype.editRole = function (mode, role) {
        var _this = this;
        var modalRef = this.modalService.open(_role_role_component__WEBPACK_IMPORTED_MODULE_0__["RoleComponent"]);
        modalRef.componentInstance.original = role;
        modalRef.componentInstance.mode = mode;
        modalRef.result.then(function (result) {
            var closeResult = result;
            if (closeResult === 'Save')
                _this.get();
        }, function (reason) { });
    };
    RoleMangageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role.mangage',
            template: __webpack_require__(/*! ./role.mangage.component.html */ "./src/app/admin/rolemangage/role.mangage.component.html"),
            styles: [__webpack_require__(/*! ./role.mangage.component.css */ "./src/app/admin/rolemangage/role.mangage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], RoleMangageComponent);
    return RoleMangageComponent;
}());



/***/ }),

/***/ "./src/app/admin/usermanage/usermanage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/usermanage/usermanage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/usermanage/usermanage.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/usermanage/usermanage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <a routerLink=\"/admin/users/new\" class=\"btn btn-primary\">New User</a>\r\n</p>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th>No</th>\r\n      <th>First name</th>\r\n      <th>Last name</th>\r\n      <th>Email</th>\r\n      <th>Role</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let u of users; let i = index;\">\r\n      <td>{{i+1}}</td>\r\n      <td>{{u.firstName}}</td>\r\n      <td>{{u.lastName}}</td>\r\n      <td>{{u.email}}</td>\r\n      <td>\r\n        <!--         <div ngbDropdown>\r\n          <span class=\"btn\" id=\"dropdownBasic1\" ngbDropdownToggle>\r\n            ...\r\n          </span> -->\r\n        <!-- <div ngbDropdownMenu style=\"position: absolute\"> -->\r\n        <div *ngFor=\"let r of u.roles\">\r\n          <button class=\"dropdown-item\">\r\n            <p>{{r.name}}</p>\r\n          </button>\r\n        </div>\r\n        <!-- </div> -->\r\n        <!-- </div> -->\r\n      </td>\r\n      <td>\r\n        <!--        <a [routerLink]=\"['/admin/roles/',r.id]\">Edit</a>-->\r\n        <button (click)=\"editRole(u.id,u.roles)\" class=\"btn btn-dark\">Edit role</button>\r\n        <button (click)=\"delete(u.id)\" class=\"btn btn-danger\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/admin/usermanage/usermanage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/usermanage/usermanage.component.ts ***!
  \**********************************************************/
/*! exports provided: UsermanageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanageComponent", function() { return UsermanageComponent; });
/* harmony import */ var _services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/admin.user.service */ "./src/app/services/admin.user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _userrole_userrole_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userrole/userrole.component */ "./src/app/admin/userrole/userrole.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsermanageComponent = /** @class */ (function () {
    function UsermanageComponent(adminService, roleService, router, modalService) {
        this.adminService = adminService;
        this.roleService = roleService;
        this.router = router;
        this.modalService = modalService;
    }
    UsermanageComponent.prototype.get = function () {
        var _this = this;
        this.adminService.getAll().subscribe(function (result) {
            if (result)
                _this.users = result;
            //else
            //this.invalidLogin = true;
        }, function (error) {
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]) {
                //this.invalidLogin = true;
                _this.error = error.originalError;
            }
            else
                throw error;
        });
    };
    UsermanageComponent.prototype.delete = function (id) {
        var _this = this;
        if (!confirm('Are you sure want to delete this role?'))
            return;
        this.adminService.delete(id).subscribe(function (result) {
            if (result) { }
            //this.roles = result;
            //else
            //this.invalidLogin = true;
        }, function (error) {
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]) {
                //this.invalidLogin = true;
                _this.error = error.originalError;
            }
            else
                throw error;
        });
        this.router.navigate(['/admin/roles']);
    };
    UsermanageComponent.prototype.editRole = function (iduser, r) {
        var _this = this;
        var modalRef = this.modalService.open(_userrole_userrole_component__WEBPACK_IMPORTED_MODULE_6__["UserroleComponent"]);
        modalRef.componentInstance.userrole = JSON.parse(JSON.stringify(r));
        modalRef.componentInstance.id = iduser;
        modalRef.result.then(function (result) {
            var closeResult = result;
            if (closeResult === 'Save')
                _this.get();
        }, function (reason) { });
    };
    UsermanageComponent.prototype.ngOnInit = function () {
        this.get();
    };
    UsermanageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usermanage',
            template: __webpack_require__(/*! ./usermanage.component.html */ "./src/app/admin/usermanage/usermanage.component.html"),
            styles: [__webpack_require__(/*! ./usermanage.component.css */ "./src/app/admin/usermanage/usermanage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__["AdminUserService"],
            _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], UsermanageComponent);
    return UsermanageComponent;
}());



/***/ }),

/***/ "./src/app/admin/userrole/userrole.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/userrole/userrole.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/userrole/userrole.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/userrole/userrole.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-editrole\">\r\n    <div class=\"modal-header\">\r\n        <!---->\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit role</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n        <div class=\"btn-group mr-3\">\r\n\r\n            <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{buttonText}}</button>\r\n                <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n                    <div *ngFor=\"let role of roles\">\r\n                        <button class=\"dropdown-item\" (click)=\"chooseRole(role)\">{{role.name}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"addRole()\">ADD</button>\r\n        </div>\r\n        <form  #f=\"ngForm\" novalidate (ngSubmit)=\"saveSubmit(f)\" ngForm class=\"mt-4\">\r\n            {{id}}\r\n            <div class=\"form-group\">\r\n                <ul class=\"list-group\">\r\n                    <li *ngFor=\"let role of userrole\" class=\"list-group-item\">\r\n                        {{ role.name }}\r\n                        <button type=\"button\" (click)=\"deletePost(role)\" class=\"close\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!--Content-->\r\n            <div class=\"form-group\">\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" [disabled]=\"!clicked\" (click)=\"saveSubmit(f)\">Save</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/userrole/userrole.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/userrole/userrole.component.ts ***!
  \******************************************************/
/*! exports provided: UserroleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserroleComponent", function() { return UserroleComponent; });
/* harmony import */ var _services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/admin.user.service */ "./src/app/services/admin.user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserroleComponent = /** @class */ (function () {
    function UserroleComponent(activeModal, roleService, adminUserService, toastr) {
        var _this = this;
        this.activeModal = activeModal;
        this.roleService = roleService;
        this.adminUserService = adminUserService;
        this.toastr = toastr;
        this.buttonText = "Choose role";
        this.clicked = false;
        roleService.getAll().subscribe(function (result) {
            if (result)
                _this.roles = result;
            //spiner
        }, function (error) {
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]) {
                //this.invalidLogin = true;
                //this.error = error.originalError;
            }
            else
                throw error;
        });
    }
    UserroleComponent.prototype.deletePost = function (role) {
        var index = this.userrole.indexOf(role);
        this.userrole.splice(index, 1);
        if (this.original > 0 || this.userrole.length > 0)
            this.clicked = true;
        else
            this.clicked = false;
    };
    UserroleComponent.prototype.chooseRole = function (role) {
        this.buttonText = role.name;
        this.roleChoosed = role;
    };
    UserroleComponent.prototype.addRole = function () {
        if (this.buttonText != "Choose role") {
            var idL = this.userrole.map(function (x) { return x.id; });
            if (idL.indexOf(this.roleChoosed.id) === -1) {
                this.userrole.splice(0, 0, this.roleChoosed);
                this.clicked = true;
            }
        }
    };
    UserroleComponent.prototype.saveSubmit = function (f) {
        var _this = this;
        if (!(this.original == this.userrole.length)) {
            // At present we use function update to just for role ***************
            this.adminUserService.update(this.id, this.userrole)
                .subscribe(function (result) {
                if (result) {
                    _this.toastr.success('Updated!', 'Success!');
                    _this.clicked = false;
                    _this.activeModal.close('Save');
                }
            }, function (error) {
                if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]) {
                    //this.invalidLogin = true;
                    //this.error = error.originalError;
                }
                else
                    throw error;
            });
        }
    };
    UserroleComponent.prototype.ngOnInit = function () {
        this.original = this.userrole.length;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UserroleComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], UserroleComponent.prototype, "userrole", void 0);
    UserroleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userrole',
            template: __webpack_require__(/*! ./userrole.component.html */ "./src/app/admin/userrole/userrole.component.html"),
            styles: [__webpack_require__(/*! ./userrole.component.css */ "./src/app/admin/userrole/userrole.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__["AdminUserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], UserroleComponent);
    return UserroleComponent;
}());



/***/ }),

/***/ "./src/app/answer/answer.component.css":
/*!*********************************************!*\
  !*** ./src/app/answer/answer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-list-comment{\r\n    overflow-y: scroll; \r\n    height: 100%; \r\n}\r\n\r\n.scroll-list-comment::-webkit-scrollbar {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/answer/answer.component.html":
/*!**********************************************!*\
  !*** ./src/app/answer/answer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\" style=\"height: 100%\">\r\n  <ul class=\"navbar-nav scroll-list-comment\">\r\n    <li class=\"nav-item pb-3\" *ngFor=\"let card of cards_answer\">\r\n      <app-card-answer [cards]=\"card\"></app-card-answer>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/answer/answer.component.ts":
/*!********************************************!*\
  !*** ./src/app/answer/answer.component.ts ***!
  \********************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Anwser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Anwser.service */ "./src/app/services/Anwser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(_anwser) {
        this._anwser = _anwser;
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._anwser.get('74d2c91b-2bdf-4f5b-b9c6-d6a2bd2fd1fd').subscribe(function (card) { return _this.cards_answer = card; });
    };
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.css */ "./src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Anwser_service__WEBPACK_IMPORTED_MODULE_1__["AnwserService"]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner [bdColor]=\"spinnerConfig.bdColor\" [size]=\"spinnerConfig.size\" [color]=\"spinnerConfig.color\">\r\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'app works!';
        this.spinnerConfig = {
            bdColor: 'rgba(255,255,255,0)',
            size: 'large',
            color: '#a4f20c',
            loadigText: 'Loading...'
        };
    }
    AppComponent.prototype.showSpinner = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 3000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/admin.user.service */ "./src/app/services/admin.user.service.ts");
/* harmony import */ var _questioner_questioner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questioner/questioner.component */ "./src/app/questioner/questioner.component.ts");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer/answer.component */ "./src/app/answer/answer.component.ts");
/* harmony import */ var _make_question_make_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-question/make-question.component */ "./src/app/make-question/make-question.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-auth-guard.service */ "./src/app/admin-auth-guard.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./no-access/no-access.component */ "./src/app/no-access/no-access.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_app_error_handler__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/app-error-handler */ "./src/app/common/app-error-handler.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _card_question_card_question_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./card-question/card-question.component */ "./src/app/card-question/card-question.component.ts");
/* harmony import */ var _admin_rolemangage_role_mangage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/rolemangage/role.mangage.component */ "./src/app/admin/rolemangage/role.mangage.component.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _admin_role_role_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/role/role.component */ "./src/app/admin/role/role.component.ts");
/* harmony import */ var _admin_usermanage_usermanage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/usermanage/usermanage.component */ "./src/app/admin/usermanage/usermanage.component.ts");
/* harmony import */ var _admin_userrole_userrole_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/userrole/userrole.component */ "./src/app/admin/userrole/userrole.component.ts");
/* harmony import */ var _user_box_user_box_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user-box/user-box.component */ "./src/app/user-box/user-box.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _card_answer_card_answer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./card-answer/card-answer.component */ "./src/app/card-answer/card-answer.component.ts");
/* harmony import */ var _card_comment_card_comment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./card-comment/card-comment.component */ "./src/app/card-comment/card-comment.component.ts");
/* harmony import */ var _services_Anwser_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/Anwser.service */ "./src/app/services/Anwser.service.ts");
/* harmony import */ var _services_Comment_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/Comment.service */ "./src/app/services/Comment.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_17__["NoAccessComponent"],
                _make_question_make_question_component__WEBPACK_IMPORTED_MODULE_3__["MakeQuestionComponent"],
                _answer_answer_component__WEBPACK_IMPORTED_MODULE_2__["AnswerComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_30__["NotfoundComponent"],
                _questioner_questioner_component__WEBPACK_IMPORTED_MODULE_1__["QuestionerComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _card_question_card_question_component__WEBPACK_IMPORTED_MODULE_22__["CardQuestionComponent"],
                _admin_rolemangage_role_mangage_component__WEBPACK_IMPORTED_MODULE_23__["RoleMangageComponent"],
                _admin_role_role_component__WEBPACK_IMPORTED_MODULE_25__["RoleComponent"],
                _admin_usermanage_usermanage_component__WEBPACK_IMPORTED_MODULE_26__["UsermanageComponent"],
                _admin_userrole_userrole_component__WEBPACK_IMPORTED_MODULE_27__["UserroleComponent"],
                _user_box_user_box_component__WEBPACK_IMPORTED_MODULE_28__["UserBoxComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_29__["MenuComponent"],
                _card_answer_card_answer_component__WEBPACK_IMPORTED_MODULE_31__["CardAnswerComponent"],
                _card_comment_card_comment_component__WEBPACK_IMPORTED_MODULE_32__["CardCommentComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_36__["ToastrModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_37__["NgxSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
                    },
                    {
                        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                        canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
                        children: [
                            {
                                path: 'roles', component: _admin_rolemangage_role_mangage_component__WEBPACK_IMPORTED_MODULE_23__["RoleMangageComponent"],
                                canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
                            },
                            {
                                path: 'roles/new', component: _admin_role_role_component__WEBPACK_IMPORTED_MODULE_25__["RoleComponent"],
                                canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
                            },
                            {
                                path: 'roles/:id', component: _admin_role_role_component__WEBPACK_IMPORTED_MODULE_25__["RoleComponent"],
                                canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
                            },
                            {
                                path: 'users', component: _admin_usermanage_usermanage_component__WEBPACK_IMPORTED_MODULE_26__["UsermanageComponent"],
                                canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
                            },
                            {
                                path: 'users/new', component: _admin_role_role_component__WEBPACK_IMPORTED_MODULE_25__["RoleComponent"],
                                canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
                            },
                            {
                                path: 'users/:id', component: _admin_role_role_component__WEBPACK_IMPORTED_MODULE_25__["RoleComponent"],
                                canActivate: [_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
                            }
                        ]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
                    },
                    {
                        path: 'signup',
                        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"]
                    },
                    {
                        path: 'make-question',
                        component: _make_question_make_question_component__WEBPACK_IMPORTED_MODULE_3__["MakeQuestionComponent"]
                    },
                    {
                        path: 'answer',
                        component: _answer_answer_component__WEBPACK_IMPORTED_MODULE_2__["AnswerComponent"]
                    },
                    {
                        path: 'questioner',
                        component: _questioner_questioner_component__WEBPACK_IMPORTED_MODULE_1__["QuestionerComponent"]
                    },
                    {
                        path: '**',
                        component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_30__["NotfoundComponent"]
                    },
                ]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:61759', 'localhost:61758'],
                        blacklistedRoutes: ['']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"],
                _services_role_service__WEBPACK_IMPORTED_MODULE_24__["RoleService"],
                _services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__["AdminUserService"],
                _services_Anwser_service__WEBPACK_IMPORTED_MODULE_33__["AnwserService"],
                _services_Comment_service__WEBPACK_IMPORTED_MODULE_34__["CommentService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ErrorHandler"], useClass: _common_app_error_handler__WEBPACK_IMPORTED_MODULE_20__["AppErrorHandler"] }
            ],
            entryComponents: [_admin_userrole_userrole_component__WEBPACK_IMPORTED_MODULE_27__["UserroleComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/card-answer/card-answer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/card-answer/card-answer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-answer{\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    color: white;\r\n    background-color: rgb(103, 103, 221);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/card-answer/card-answer.component.html":
/*!********************************************************!*\
  !*** ./src/app/card-answer/card-answer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-answer\">\r\n  <div class=\"card-header\">\r\n    <div class=\"\">\r\n      <b class=\"ml-2\">{{card.title}}</b>\r\n      <span class=\"text-info ml-3 small\">{{card.createDate}}</span>\r\n      <div class=\"float-right\">\r\n        <div ngbDropdown>\r\n          <span class=\"btn\" ngbDropdownToggle placement=\"bottom\" ngbTooltip=\"settings\">\r\n            <i class=\"material-icons\">...</i>\r\n          </span>\r\n          <div ngbDropdownMenu style=\"position: absolute;\">\r\n            <a class=\"dropdown-item\" href=\"#\">Update</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ml-5\">\r\n        <span>{{card.contentQuestion}}</span>\r\n      </div>\r\n      <div class=\"small text-right mt-3\">\r\n        <a (click)=\"isCollapsed = !isCollapsed\" class=\"btn\"><span>(22)</span>Comment</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n <!--commet collapsed-->\r\n  <div class=\"card-body\" *ngIf=\"isCollapsed\">\r\n    <app-card-comment [questionID]=\"card.questionId\"></app-card-comment>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/card-answer/card-answer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/card-answer/card-answer.component.ts ***!
  \******************************************************/
/*! exports provided: CardAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAnswerComponent", function() { return CardAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardAnswerComponent = /** @class */ (function () {
    function CardAnswerComponent() {
        this.isCollapsed = false;
    }
    CardAnswerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cards'),
        __metadata("design:type", Object)
    ], CardAnswerComponent.prototype, "card", void 0);
    CardAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-answer',
            template: __webpack_require__(/*! ./card-answer.component.html */ "./src/app/card-answer/card-answer.component.html"),
            styles: [__webpack_require__(/*! ./card-answer.component.css */ "./src/app/card-answer/card-answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardAnswerComponent);
    return CardAnswerComponent;
}());



/***/ }),

/***/ "./src/app/card-comment/card-comment.component.css":
/*!*********************************************************!*\
  !*** ./src/app/card-comment/card-comment.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-account{\r\n    height: 40px; \r\n    width: 40px; \r\n    border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/card-comment/card-comment.component.html":
/*!**********************************************************!*\
  !*** ./src/app/card-comment/card-comment.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"card-comment\">\r\n  <!--list comment-->\r\n  <ul class=\"nav flex-column\">\r\n    <li class=\"nav-item row mb-3 alert alert-info\" *ngFor=\"let item of listAnswer\">\r\n      <img class=\"img-account\" src='https://via.placeholder.com/150/771796' />\r\n      <div class=\"ml-2\">\r\n        <span class=\"text-info small\">{{item.user.userName}}<br /></span>\r\n        <span>{{item.contentAnswer}}</span>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <!--to comment-->\r\n  <div class=\"row alert\">\r\n    <img class=\"img-account\" src='https://via.placeholder.com/150/771796' />\r\n    <textarea class=\"form-control ml-2\" rows=1 style=\"border-radius: 25px; width: 92%\" type=\"text\" name=\"\" id=\"\"></textarea>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/card-comment/card-comment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/card-comment/card-comment.component.ts ***!
  \********************************************************/
/*! exports provided: CardCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCommentComponent", function() { return CardCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Comment.service */ "./src/app/services/Comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardCommentComponent = /** @class */ (function () {
    function CardCommentComponent(_comment) {
        this._comment = _comment;
    }
    CardCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._comment.get(this.questionId + '').subscribe(function (data) { return _this.listAnswer = data; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('questionID'),
        __metadata("design:type", Object)
    ], CardCommentComponent.prototype, "questionId", void 0);
    CardCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-comment',
            template: __webpack_require__(/*! ./card-comment.component.html */ "./src/app/card-comment/card-comment.component.html"),
            styles: [__webpack_require__(/*! ./card-comment.component.css */ "./src/app/card-comment/card-comment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"]])
    ], CardCommentComponent);
    return CardCommentComponent;
}());



/***/ }),

/***/ "./src/app/card-question/card-question.component.css":
/*!***********************************************************!*\
  !*** ./src/app/card-question/card-question.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-questioner{\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;\r\n}\r\n.card-questioner img{\r\n    height: 40px; \r\n    width: 40px; \r\n    border-radius: 50%;\r\n}\r\n.dropdown-item:hover{\r\n    color: white;\r\n    background-color: rgb(103, 103, 221);\r\n}"

/***/ }),

/***/ "./src/app/card-question/card-question.component.html":
/*!************************************************************!*\
  !*** ./src/app/card-question/card-question.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-questioner\">\r\n  <div class=\"card-header\">\r\n    <div class=\"\">\r\n      <img src='https://via.placeholder.com/150/771796' />\r\n      <span class=\"ml-2\">Trần Dưỡng</span>\r\n      <span class=\"text-info ml-3 small\">(just now)</span>\r\n      <div class=\"float-right\">\r\n        <div ngbDropdown>\r\n          <span class=\"btn\" ngbDropdownToggle placement=\"bottom\" ngbTooltip=\"settings\">\r\n            <i class=\"material-icons\">...</i>\r\n          </span>\r\n          <div ngbDropdownMenu style=\"position: absolute;\">\r\n            <a class=\"dropdown-item\" href=\"#\">Update</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ml-5\">\r\n        <span>why sky is blue?</span>\r\n      </div>\r\n      <div class=\"small text-right mt-3\">\r\n        <a (click)=\"isCollapsed = !isCollapsed\" class=\"btn\"><span>(22)</span>Comment</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n <!--commet collapsed-->\r\n  <div class=\"card-body\" *ngIf=\"isCollapsed\">\r\n    <div id=\"collapseExample\">\r\n      <!--list comment-->\r\n      <ul class=\"nav flex-column\">\r\n        <li class=\"nav-item row mb-3 alert alert-info\">\r\n          <img src='https://via.placeholder.com/150/771796' class=\"bg-primary\" />\r\n          <div class=\"ml-2\">\r\n            <span class=\"text-info small\">trần Dưỡng<br /></span>\r\n            <span>because you craze =)) <br /> dsadasd ádas<br />đấ</span>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item row mb-3 alert alert-info\">\r\n          <img src='https://via.placeholder.com/150/771796' />\r\n          <div class=\"ml-2\">\r\n            <span class=\"text-info small\">trần Dưỡng<br /></span>\r\n            <span>because it is blue :))</span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <!--to comment-->\r\n      <div class=\"row alert\">\r\n        <img src='https://via.placeholder.com/150/771796' />\r\n        <textarea class=\"form-control ml-2\" rows=1 style=\"border-radius: 25px; width: 92%\" type=\"text\" name=\"\" id=\"\"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/card-question/card-question.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/card-question/card-question.component.ts ***!
  \**********************************************************/
/*! exports provided: CardQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardQuestionComponent", function() { return CardQuestionComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardQuestionComponent = /** @class */ (function () {
    function CardQuestionComponent(http) {
        this.http = http;
        this.isSetting = false;
        this.isCollapsed = false;
    }
    CardQuestionComponent.prototype.ngOnInit = function () {
    };
    CardQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-question',
            template: __webpack_require__(/*! ./card-question.component.html */ "./src/app/card-question/card-question.component.html"),
            styles: [__webpack_require__(/*! ./card-question.component.css */ "./src/app/card-question/card-question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CardQuestionComponent);
    return CardQuestionComponent;
}());



/***/ }),

/***/ "./src/app/common/app-error-handler.ts":
/*!*********************************************!*\
  !*** ./src/app/common/app-error-handler.ts ***!
  \*********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An unexpected error occurred.');
        console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/bad-input.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadInput = /** @class */ (function (_super) {
    __extends(BadInput, _super);
    function BadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInput;
}(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page{\r\n    height: 100%;\r\n}\r\n\r\n.main-left{\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row home-page\">\r\n    <div class=\"col-md-2 bg-light main-left\">\r\n        <app-user-box></app-user-box>\r\n    </div>\r\n    <div class=\"col-md-8 main-center\">\r\n        <app-menu></app-menu>\r\n\r\n        <div style=\"height: 82%\">\r\n            <div *ngIf=\"userRoles == 1; else answerPage\" style=\"height: 100%\">\r\n                <app-questioner></app-questioner>\r\n            </div>\r\n\r\n            <ng-template #answerPage>\r\n                <app-answer></app-answer>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-2 main-right bg-warning\">\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--nothing\r\n<h1>Home Page</h1>\r\n<p *ngIf=\"authService.isLoggedIn()\">\r\n  Welcome {{ authService.currentUser.sub }}\r\n</p>\r\n<ul>\r\n  <li *ngIf=\"authService.isLoggedIn() && (this.authService.currentUser.roles == adminRole)\"><a routerLink=\"/admin\">Admin</a></li>\r\n  <li *ngIf=\"!authService.isLoggedIn()\"><a routerLink=\"/login\">Login</a></li>\r\n  <li *ngIf=\"!authService.isLoggedIn()\"><a routerLink=\"/signup\">Signup</a></li>\r\n</ul>\r\n\r\n<button *ngIf=\"authService.isLoggedIn()\" (click)=\"authService.logout()\">Logout</button>-->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userRoles = 1;
        if (!this.authService.isLoggedIn())
            this.router.navigate(['/login']);
        if (this.authService.hasRole(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].admin))
            this.router.navigate(['/admin']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n\r\n@font-face {\r\n  font-family: Poppins-Medium;\r\n  src: url('../../images/bg-01.jpg'); \r\n}\r\n */\r\n/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n@font-face {\r\n  font-family: Poppins-Regular;\r\n  src: url('/src/fonts/poppins/Poppins-Regular.ttf'); \r\n}\r\n@font-face {\r\n  font-family: Poppins-Medium;\r\n  src: url('/src/fonts/poppins/Poppins-Medium.ttf'); \r\n}\r\n@font-face {\r\n  font-family: Poppins-Bold;\r\n  src: url('/src/fonts/poppins/Poppins-Bold.ttf'); \r\n}\r\n@font-face {\r\n  font-family: Poppins-SemiBold;\r\n  src: url('/src/fonts/poppins/Poppins-SemiBold.ttf'); \r\n}\r\n@font-face {\r\n  font-family: Montserrat-Bold;\r\n  src: url('/src/fonts/montserrat/Montserrat-Bold.ttf'); \r\n}\r\n@font-face {\r\n  font-family: Montserrat-SemiBold;\r\n  src: url('/src/fonts/montserrat/Montserrat-SemiBold.ttf'); \r\n}\r\n@font-face {\r\n  font-family: Montserrat-Regular;\r\n  src: url('/src/fonts/montserrat/Montserrat-Regular.ttf'); \r\n}\r\n/*//////////////////////////////////////////////////////////////////\r\n[ RESTYLE TAG ]*/\r\n* {\r\n\tmargin: 0px; \r\n\tpadding: 0px; \r\n\tbox-sizing: border-box;\r\n}\r\nbody, html {\r\n\theight: 100%;\r\n\tfont-family: Poppins-Regular, sans-serif;\r\n}\r\n/*---------------------------------------------*/\r\na {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\na:focus {\r\n\toutline: none !important;\r\n}\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: #6675df;\r\n}\r\n/*---------------------------------------------*/\r\nh1,h2,h3,h4,h5,h6 {\r\n\tmargin: 0px;\r\n}\r\np {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\nul, li {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n/*---------------------------------------------*/\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\nlabel {\r\n  display: block;\r\n  margin: 0;\r\n}\r\n/*---------------------------------------------*/\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\niframe {\r\n\tborder: none !important;\r\n}\r\n/*//////////////////////////////////////////////////////////////////\r\n[ utility ]*/\r\n/*==================================================================\r\n[ Text ]*/\r\n.txt1 {\r\n  font-family: Montserrat-Regular;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  color: #555555;\r\n}\r\n.txt2 {\r\n  font-family: Montserrat-Regular;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  color: #999999;\r\n}\r\n/*==================================================================\r\n[ Size ]*/\r\n.size1 {\r\n  width: 355px;\r\n  max-width: 100%;\r\n}\r\n.size2 {\r\n  width: calc(100% - 43px);\r\n}\r\n/*==================================================================\r\n[ Background ]*/\r\n.bg1 {background: #3b5998;}\r\n.bg2 {background: #1da1f2;}\r\n.bg3 {background: #cd201f;}\r\n/*//////////////////////////////////////////////////////////////////\r\n[ login ]*/\r\n.limiter {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.container-login100 {\r\n  width: 100%;  \r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #f2f2f2;\r\n}\r\n.wrap-login100 {\r\n  width: 100%;\r\n  background: #fff;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  flex-direction: row-reverse;\r\n\r\n}\r\n/*==================================================================\r\n[ login more ]*/\r\n.login100-more {\r\n  width: calc(100% - 560px);\r\n  background-image: url('/src/images/bg-01.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.login100-more::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0,0,0,0.1);\r\n}\r\n/*==================================================================\r\n[ Form ]*/\r\n.login100-form {\r\n  width: 560px;\r\n  min-height: 100vh;\r\n  display: block;\r\n  background-color: #f7f7f7;\r\n  padding: 173px 55px 55px 55px;\r\n}\r\n.login100-form-title {\r\n  width: 100%;\r\n  display: block;\r\n  font-family: Poppins-Regular;\r\n  font-size: 30px;\r\n  color: #333333;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n}\r\n/*------------------------------------------------------------------\r\n[ Input ]*/\r\n.wrap-input100 {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-end;\r\n  width: 100%;\r\n  height: 80px;\r\n  position: relative;\r\n  border: 1px solid #e6e6e6;\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.label-input100 {\r\n  font-family: Montserrat-Regular;\r\n  font-size: 18px;\r\n  color: #999999;\r\n  line-height: 1.2;\r\n\r\n  display: block;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  width: 100%;\r\n  padding-left: 24px;\r\n  left: 0;\r\n  top: 30px;\r\n  transition: all 0.4s;\r\n}\r\n.input100 {\r\n  display: block;\r\n  width: 100%;\r\n  background: transparent;\r\n  font-family: Montserrat-Regular;\r\n  font-size: 18px;\r\n  color: #555555;\r\n  line-height: 1.2;\r\n  padding: 0 26px;\r\n}\r\ninput.input100 {\r\n  height: 100%;\r\n  transition: all 0.4s;\r\n}\r\n/*---------------------------------------------*/\r\n.focus-input100 {\r\n  position: absolute;\r\n  display: block;\r\n  width: calc(100% + 2px);\r\n  height: calc(100% + 2px);\r\n  top: -1px;\r\n  left: -1px;\r\n  pointer-events: none;\r\n  border: 1px solid #6675df;\r\n  border-radius: 10px;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.4s;\r\n\r\n  -webkit-transform: scaleX(1.1) scaleY(1.3);\r\n  transform: scaleX(1.1) scaleY(1.3);\r\n}\r\n.input100:focus + .focus-input100 {\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n.eff-focus-selection {\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n.input100:focus {\r\n  height: 48px;\r\n}\r\n.input100:focus + .focus-input100 + .label-input100 {\r\n  top: 14px;\r\n  font-size: 13px;\r\n}\r\n.has-val {\r\n  height: 48px !important;\r\n}\r\n.has-val + .focus-input100 + .label-input100 {\r\n  top: 14px;\r\n  font-size: 13px;\r\n}\r\n/*==================================================================\r\n[ Restyle Checkbox ]*/\r\n.input-checkbox100 {\r\n  display: none;\r\n}\r\n.label-checkbox100 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 13px;\r\n  color: #999999;\r\n  line-height: 1.4;\r\n\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 26px;\r\n  cursor: pointer;\r\n}\r\n.label-checkbox100::before {\r\n  content: \"\\f00c\";\r\n  font-family: FontAwesome;\r\n  font-size: 13px;\r\n  color: transparent;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 2px;\r\n  background: #fff;\r\n  border: 1px solid #6675df;\r\n  left: 0;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n.input-checkbox100:checked + .label-checkbox100::before {\r\n  color: #6675df;\r\n}\r\n/*------------------------------------------------------------------\r\n[ Button ]*/\r\n.container-login100-form-btn {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.login100-form-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n  width: 100%;\r\n  height: 50px;\r\n  border-radius: 10px;\r\n  background: #6675df;\r\n\r\n  font-family: Montserrat-Bold;\r\n  font-size: 12px;\r\n  color: #fff;\r\n  line-height: 1.2;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  transition: all 0.4s;\r\n}\r\n.login100-form-btn:hover {\r\n  background: #333333;\r\n}\r\n/*------------------------------------------------------------------\r\n[ Responsive ]*/\r\n@media (max-width: 992px) {\r\n  .login100-form {\r\n    width: 50%;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n  }\r\n\r\n  .login100-more {\r\n    width: 50%;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .login100-form {\r\n    width: 100%;\r\n  }\r\n\r\n  .login100-more {\r\n    display: none;\r\n  }\r\n}\r\n@media (max-width: 576px) {\r\n  .login100-form {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    padding-top: 70px;\r\n  }\r\n}\r\n/*------------------------------------------------------------------\r\n[ Alert validate ]*/\r\n.validate-input {\r\n  position: relative;\r\n}\r\n.alert-validate::before {\r\n  content: attr(data-validate);\r\n  position: absolute;\r\n  z-index: 100;\r\n  max-width: 70%;\r\n  background-color: #fff;\r\n  border: 1px solid #c80000;\r\n  border-radius: 2px;\r\n  padding: 4px 25px 4px 10px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 12px;\r\n  pointer-events: none;\r\n\r\n  font-family: Poppins-Regular;\r\n  color: #c80000;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.4s;\r\n}\r\n.alert-validate::after {\r\n  content: \"\\f12a\";\r\n  font-family: FontAwesome;\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 110;\r\n  color: #c80000;\r\n  font-size: 16px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 18px;\r\n}\r\n.alert-validate:hover:before {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n@media (max-width: 992px) {\r\n  .alert-validate::before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n/*==================================================================\r\n[ Social ]*/\r\n.login100-form-social-item {\r\n  width: 36px;\r\n  height: 36px;\r\n  font-size: 18px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n}\r\n.login100-form-social-item:hover {\r\n  background: #333333;\r\n  color: #fff;\r\n}\r\n.flex-c-m {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\r\n    <div class=\"container-login100\">\r\n        <div class=\"wrap-login100\">\r\n            <form class=\"login100-form validate-form\" #f=\"ngForm\" (ngSubmit)=\"signIn(f.value)\">\r\n                <span class=\"login100-form-title p-b-43 mb-5\">\r\n                    Login to continue\r\n                </span>\r\n                \r\n                <div class=\"row mb-1\" style=\"border-radius: 10px\">\r\n                    <div class=\"col new-user-alert\">\r\n                        <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n                            <strong class=\"ml-4\">All set!</strong> Please login with your account\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"invalidLogin\" class=\"alert alert-danger mb-1\"><p class=\"ml-4\">{{ error }}.</p></div>\r\n\r\n                <div type=\"email\" class=\"wrap-input100 validate-input form-control\" id=\"inputEmail\" data-validate=\"Valid email is required: ex@abc.xyz\">\r\n                    <input [ngClass]=\"(f.value.userName === '')?'input100':'input100 has-val'\" type=\"text\" name=\"userName\" [(ngModel)]=\"this.credentials.email\">\r\n                    <span class=\"focus-input100\"></span>\r\n                    <span class=\"label-input100\">Email</span>\r\n                </div>\r\n\r\n                <div class=\"wrap-input100 validate-input form-control\" id=\"inputPassword\" data-validate=\"Password is required\">\r\n                    <input [ngClass]=\"(f.value.password === '')?'input100':'input100 has-val'\" type=\"password\" name=\"password\" ngModel>\r\n                    <span class=\"focus-input100\"></span>\r\n                    <span class=\"label-input100\">Password</span>\r\n                </div>\r\n\r\n                <div class=\"flex-sb-m w-full p-t-3 p-b-32 mb-4\">\r\n                    <div class=\"contact100-form-checkbox float-left\">\r\n                        <input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\r\n                        <label class=\"label-checkbox100\" for=\"ckb1\">\r\n                            Remember me\r\n                        </label>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <a href=\"#\" class=\"txt1 float-right\">\r\n                            Forgot Password?\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"container-login100-form-btn pt-3\">\r\n                    <button class=\"login100-form-btn\" type=\"submit\">\r\n                        Login\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"text-center p-t-46 p-b-20\">\r\n                    <span class=\"txt2\">\r\n                        or sign up using\r\n                    </span>\r\n                </div>\r\n\r\n                <div class=\"login100-form-social flex-c-m\">\r\n    <!--                 <a href=\"#\" class=\"login100-form-social-item flex-c-m bg1 m-r-5\">\r\n                        <i class=\"fa fa-facebook-f\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n\r\n                    <a href=\"#\" class=\"login100-form-social-item flex-c-m bg2 m-r-5\">\r\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                    </a> -->\r\n\r\n                    <a class=\"btn btn-outline-info text-info\" (click)=\"open()\"> &nbsp; Registry now! &nbsp; </a>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"login100-more\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, activatedRoute, modalService) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.credentials = { email: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            if (!param['email'])
                _this.credentials.email = '';
            else
                _this.credentials.email = param['email'];
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.signIn = function (credential) {
        var _this = this;
        this.authService.login(credential)
            .subscribe(function (result) {
            console.log(result);
            if (result) {
                if (_this.authService.hasRole(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].admin))
                    _this.router.navigate(['/admin']);
                else
                    _this.router.navigate(['/']);
            }
            else
                _this.invalidLogin = true;
        }, function (error) {
            if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                _this.invalidLogin = true;
                _this.error = error.originalError;
            }
            else
                throw error;
        });
    };
    LoginComponent.prototype.open = function () {
        this.modalService.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/make-question/make-question.component.css":
/*!***********************************************************!*\
  !*** ./src/app/make-question/make-question.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-item:hover{\r\n    color: white;\r\n    background-color: rgb(103, 103, 221);\r\n}"

/***/ }),

/***/ "./src/app/make-question/make-question.component.html":
/*!************************************************************!*\
  !*** ./src/app/make-question/make-question.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-create-question\">\r\n  <div class=\"modal-header\">\r\n    <!---->\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">New Question</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"form\" #f=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Danh mục</label>\r\n        <div ngbDropdown>\r\n          <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{Category}}</button>\r\n          <div ngbDropdownMenu>\r\n            <button class=\"dropdown-item\" *ngFor=\"let item of Categorys\" (click)=\"selectCategory(item)\">\r\n              {{item}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Title-->\r\n      <div class=\"form-group\">\r\n        <label for=\"questionTitle\">\r\n          Title\r\n          <span *ngIf=\"questionTitle.touched && !questionTitle.valid\" class=\"text-danger\">\r\n            <span *ngIf=\"questionTitle.errors.required\">\r\n              can't null\r\n            </span>\r\n          </span>\r\n        </label>\r\n        <div class=\"input-group\">\r\n          <input formControlName=\"questionTitle\" id=\"questionTitle\" class=\"form-control\" placeholder=\"@Your Title\" />\r\n        </div>\r\n      </div>\r\n\r\n      <!--Content-->\r\n      <div class=\"form-group\">\r\n        <label for=\"questionContent\">\r\n          Question\r\n          <span *ngIf=\"questionContent.touched && questionContent.invalid\" class=\"text-danger\">\r\n            <span *ngIf=\"questionContent.errors.required\">\r\n              can't null\r\n            </span>\r\n            <span *ngIf=\"questionContent.errors.minlength\">\r\n              can't less than {{questionContent.errors.minlength.requiredLength}}\r\n            </span>\r\n          </span>\r\n        </label>\r\n        <div class=\"input-group\">\r\n          <textarea formControlName=\"questionContent\" type=\"are\" id=\"questionContent\" rows=3 class=\"form-control\" placeholder=\"@Your Question\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"saveSubmit(f)\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/make-question/make-question.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/make-question/make-question.component.ts ***!
  \**********************************************************/
/*! exports provided: MakeQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeQuestionComponent", function() { return MakeQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakeQuestionComponent = /** @class */ (function () {
    function MakeQuestionComponent(activeModal) {
        this.activeModal = activeModal;
        this.Categorys = ["Chọn Danh Mục", "C#", "Angular", "ASP.NET MVC", "ASP.NET MVC Core"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            questionTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            questionContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)
            ]),
        });
    }
    MakeQuestionComponent.prototype.ngOnInit = function () {
        this.Category = this.Categorys[0];
    };
    MakeQuestionComponent.prototype.saveSubmit = function (ObjectQuestion) {
        this.ObjectQuestion = ObjectQuestion.value;
        this.activeModal.close();
    };
    Object.defineProperty(MakeQuestionComponent.prototype, "questionTitle", {
        get: function () {
            return this.form.get('questionTitle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MakeQuestionComponent.prototype, "questionContent", {
        get: function () {
            return this.form.get('questionContent');
        },
        enumerable: true,
        configurable: true
    });
    MakeQuestionComponent.prototype.selectCategory = function (item) {
        this.Category = item;
    };
    MakeQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-question',
            template: __webpack_require__(/*! ./make-question.component.html */ "./src/app/make-question/make-question.component.html"),
            styles: [__webpack_require__(/*! ./make-question.component.css */ "./src/app/make-question/make-question.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], MakeQuestionComponent);
    return MakeQuestionComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons:hover{\r\n    color: white;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    color: white;\r\n    background-color: rgb(103, 103, 221);\r\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-primary\">\r\n  <div class=\"input-group col-7\">\r\n    <div ngbDropdown class=\"input-group-prepend\">\r\n      <button type=\"button\" class=\"btn\" ngbDropdownToggle>\r\n        {{Category}}\r\n      </button>\r\n      <div ngbDropdownMenu class=\"position-absolute\">\r\n        <span class=\"dropdown-item btn\" *ngFor=\"let item of Categorys\"(click)=\"selectCategory(item)\">\r\n          {{item}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" name=\"search\">\r\n    <div class=\"input-group-append\">\r\n      <button type=\"button\" class=\"btn material-icons\" placement=\"bottom\" ngbTooltip=\"Search\">\r\n        search\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-1\">\r\n    <span class=\"nav-link material-icons btn\" style=\"font-size: 20px\" placement=\"bottom\" ngbTooltip=\"notifications\">notifications</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.Categorys = ["All", "C#", "Angular", "ASP.NET MVC", "ASP.NET MVC Core"];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.Category = this.Categorys[0];
    };
    MenuComponent.prototype.selectCategory = function (item) {
        this.Category = item;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/no-access/no-access.component.css":
/*!***************************************************!*\
  !*** ./src/app/no-access/no-access.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/no-access/no-access.component.html":
/*!****************************************************!*\
  !*** ./src/app/no-access/no-access.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1>Access Denied</h1>"

/***/ }),

/***/ "./src/app/no-access/no-access.component.ts":
/*!**************************************************!*\
  !*** ./src/app/no-access/no-access.component.ts ***!
  \**************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoAccessComponent = /** @class */ (function () {
    function NoAccessComponent() {
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__(/*! ./no-access.component.html */ "./src/app/no-access/no-access.component.html"),
            styles: [__webpack_require__(/*! ./no-access.component.css */ "./src/app/no-access/no-access.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  notfound works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/questioner/questioner.component.css":
/*!*****************************************************!*\
  !*** ./src/app/questioner/questioner.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-list-comment{\r\n    overflow-y: scroll; \r\n    height: 100%; \r\n}\r\n\r\n.scroll-list-comment::-webkit-scrollbar {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/questioner/questioner.component.html":
/*!******************************************************!*\
  !*** ./src/app/questioner/questioner.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\" style=\"height: 100%\">\r\n    <span class=\"btn btn-outline-warning nav-link\" (click)=\"CreatQuestion()\">New Question</span>\r\n    <ul class=\"navbar-nav scroll-list-comment\">\r\n        <li class=\"nav-item pb-3\">\r\n            <app-card-question></app-card-question>\r\n        </li>\r\n        <li class=\"nav-item pb-3\">\r\n            <app-card-question></app-card-question>\r\n        </li>\r\n        <li class=\"nav-item pb-3\">\r\n            <app-card-question></app-card-question>\r\n        </li>\r\n        <li class=\"nav-item pb-3\">\r\n            <app-card-question></app-card-question>\r\n        </li>\r\n        <li class=\"nav-item pb-3\">\r\n            <app-card-question></app-card-question>\r\n        </li>\r\n        <li class=\"nav-item pb-3\">\r\n            <app-card-question></app-card-question>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/questioner/questioner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/questioner/questioner.component.ts ***!
  \****************************************************/
/*! exports provided: QuestionerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionerComponent", function() { return QuestionerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _make_question_make_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../make-question/make-question.component */ "./src/app/make-question/make-question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionerComponent = /** @class */ (function () {
    function QuestionerComponent(modalService) {
        this.modalService = modalService;
    }
    QuestionerComponent.prototype.ngOnInit = function () {
    };
    QuestionerComponent.prototype.CreatQuestion = function () {
        this.modalService.open(_make_question_make_question_component__WEBPACK_IMPORTED_MODULE_2__["MakeQuestionComponent"]);
    };
    QuestionerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questioner',
            template: __webpack_require__(/*! ./questioner.component.html */ "./src/app/questioner/questioner.component.html"),
            styles: [__webpack_require__(/*! ./questioner.component.css */ "./src/app/questioner/questioner.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], QuestionerComponent);
    return QuestionerComponent;
}());



/***/ }),

/***/ "./src/app/services/Anwser.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/Anwser.service.ts ***!
  \********************************************/
/*! exports provided: AnwserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnwserService", function() { return AnwserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnwserService = /** @class */ (function (_super) {
    __extends(AnwserService, _super);
    function AnwserService(http, spinner) {
        return _super.call(this, 'Answerapi', http, spinner) || this;
    }
    AnwserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AnwserService);
    return AnwserService;
}(_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/Comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/Comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = /** @class */ (function (_super) {
    __extends(CommentService, _super);
    function CommentService(http, spinner) {
        return _super.call(this, 'Commentapi', http, spinner) || this;
    }
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], CommentService);
    return CommentService;
}(_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/admin.user.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/admin.user.service.ts ***!
  \************************************************/
/*! exports provided: AdminUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserService", function() { return AdminUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserService = /** @class */ (function (_super) {
    __extends(AdminUserService, _super);
    function AdminUserService(http, spinner) {
        return _super.call(this, 'users', http, spinner) || this;
    }
    AdminUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AdminUserService);
    return AdminUserService;
}(_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper, router, spinner) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.spinner = spinner;
        this.baseUrl = '';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        var token = localStorage.getItem('token');
        if (token) {
            this.currentUser = jwtHelper.decodeToken(token);
        }
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        this.spinner.show();
        return this.http.post(this.baseUrl + '/auth/login', JSON.stringify(credentials), { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var result = response;
            if (result) {
                localStorage.setItem('token', result.auth_token);
                _this.currentUser = _this.jwtHelper.decodeToken(localStorage.getItem('token'));
                return true;
            }
            else
                return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.HandleError));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.currentUser = null;
        this.router.navigate(['/login']);
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        return token && !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.hasRole = function (role) {
        var roles;
        if (this.currentUser != null)
            roles = this.currentUser.roles;
        if (roles != null) {
            if (roles.indexOf(role) >= 0)
                return true;
        }
        return false;
    };
    AuthService.prototype.register = function (userRegistration) {
        var _this = this;
        this.spinner.show();
        var body = JSON.stringify(userRegistration);
        return this.http.post(this.baseUrl + '/accounts', body, { headers: this.headers }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.HandleError));
    };
    AuthService.prototype.HandleError = function (error) {
        var modelStateErrors = '';
        var serverError = error["error"];
        console.log(serverError);
        for (var key in serverError) {
            if (serverError[key])
                modelStateErrors += serverError[key] + '\n';
        }
        if (error.status == 400)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_bad_input__WEBPACK_IMPORTED_MODULE_7__["BadInput"](modelStateErrors)); //createPost
        if (error.status == 404)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_8__["NotFoundError"](modelStateErrors));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_9__["AppError"](modelStateErrors));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DataService = /** @class */ (function () {
    function DataService(url, http, spinner) {
        this.url = url;
        this.http = http;
        this.spinner = spinner;
        this.baseUrl = '';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl;
    }
    DataService.prototype.getAll = function () {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.baseUrl + '/' + this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.HandleError));
    };
    DataService.prototype.get = function (id) {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.baseUrl + '/' + this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.HandleError));
    };
    DataService.prototype.create = function (resource) {
        var _this = this;
        this.spinner.show();
        return this.http.post(this.baseUrl + '/' + this.url, JSON.stringify(resource), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.HandleError));
        ;
    };
    DataService.prototype.update = function (id, resource) {
        var _this = this;
        this.spinner.show();
        return this.http.put(this.baseUrl + '/' + this.url + '/' + id, JSON.stringify(resource), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.HandleError));
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + '/' + this.url + '/' + id).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(
        /*           (error:Response) => {
                    if (error.status == 404)
                      return throwError(new NotFoundError(error.json()));
                    return throwError(new AppError(error));
                  }) */
        this.HandleError));
    };
    DataService.prototype.HandleError = function (error) {
        var modelStateErrors = '';
        var serverError = error["error"];
        console.log(serverError);
        for (var key in serverError) {
            if (serverError[key])
                modelStateErrors += serverError[key] + '\n';
        }
        if (error.status == 400)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(new _common_bad_input__WEBPACK_IMPORTED_MODULE_2__["BadInput"](modelStateErrors)); //createPost
        if (error.status == 404)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"](modelStateErrors));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_3__["AppError"](modelStateErrors));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        __metadata("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/role.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleService = /** @class */ (function (_super) {
    __extends(RoleService, _super);
    function RoleService(http, spinner) {
        return _super.call(this, 'role', http, spinner) || this;
    }
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], RoleService);
    return RoleService;
}(_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-editrole\">\r\n  <div class=\"modal-header\">\r\n    <!---->\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Please enter your information</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\r\n          <div class=\"form-group\">\r\n            <label for=\"first-name\">First name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First name\" name=\"firstName\" tmFocus ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"last-name\">Last name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last name\" name=\"lastName\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel #email=\"ngModel\">\r\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"location\">Location</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Location\" required name=\"location\" ngModel>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\r\n            <!-- <app-spinner [isRunning]=\"isRequesting\"></app-spinner> -->\r\n          </div>\r\n\r\n          <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n            <strong>Oops!</strong> {{errors}}\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, activeModal, toastr) {
        this.authService = authService;
        this.router = router;
        this.activeModal = activeModal;
        this.toastr = toastr;
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.authService.register(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isRequesting = false; }))
                .subscribe(function (result) {
                if (result) {
                    _this.toastr.success('Please login!', 'Account was created!');
                    _this.activeModal.dismiss();
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (error) {
                if (error instanceof _common_bad_input__WEBPACK_IMPORTED_MODULE_4__["BadInput"]) {
                    _this.errors = error.originalError;
                }
                else
                    throw error;
            });
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-box/user-box.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-box/user-box.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account img{\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%; \r\n}\r\n\r\n.dropdown-item:hover{\r\n    color: white;\r\n    background-color: rgb(103, 103, 221);\r\n}"

/***/ }),

/***/ "./src/app/user-box/user-box.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-box/user-box.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"account text-center mt-4\">\r\n  <div class=\"form-group\">\r\n    <img src=\"https://via.placeholder.com/150/771796\" alt=\"\">\r\n    <p>Trần Dưỡng</p>\r\n  </div>\r\n  <div ngbDropdown class=\"form-group\">\r\n    <span class=\"btn\" id=\"dropdownBasic1\" ngbDropdownToggle>\r\n      <span>{{Role}}</span>\r\n    </span>\r\n    <div ngbDropdownMenu style=\"position: absolute\">\r\n      <button class=\"dropdown-item btn\" *ngFor=\"let item of RolesAccount\" (click)=\"changeRole(item)\">{{item}}</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group form-inline justify-content-center\">\r\n    <button class=\"btn\" (click)=\"authService.logout()\">\r\n      Sign Out\r\n    </button>\r\n    <i class=\"material-icons\">\r\n      exit_to_app\r\n    </i>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/user-box/user-box.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-box/user-box.component.ts ***!
  \************************************************/
/*! exports provided: UserBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBoxComponent", function() { return UserBoxComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserBoxComponent = /** @class */ (function () {
    function UserBoxComponent(homeComponent, authService) {
        this.homeComponent = homeComponent;
        this.authService = authService;
        this.RolesAccount = ["Questioner", "Answer"];
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        this.Role = this.RolesAccount[0];
    };
    UserBoxComponent.prototype.changeRole = function (item) {
        this.Role = item;
        if (item == this.RolesAccount[1])
            item = 2;
        else
            item = 1;
        this.homeComponent.userRoles = item;
    };
    UserBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-box',
            template: __webpack_require__(/*! ./user-box.component.html */ "./src/app/user-box/user-box.component.html"),
            styles: [__webpack_require__(/*! ./user-box.component.css */ "./src/app/user-box/user-box.component.css")]
        }),
        __metadata("design:paramtypes", [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], UserBoxComponent);
    return UserBoxComponent;
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
    production: false,
    admin: "Admin",
    baseUrl: 'http://localhost:61759/api'
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

module.exports = __webpack_require__(/*! C:\Users\hntlk\Desktop\QnA\QnS2\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map