webpackJsonp([1,4],{

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(579);


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_lock__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// FIXME: replace these with your own Auth0 'Client ID' and 'Domain'
var AUTH0_CLIENT_ID = 'yoFkwY3FsbDuufLIJ5Kyy1YEvon4mNdH';
var AUTH0_DOMAIN = 'lucasschneider.auth0.com';
// this is the key to the JWT in the browser localStorage
var ID_TOKEN = 'id_token';
var AuthService = (function () {
    function AuthService() {
        this.lock = new __WEBPACK_IMPORTED_MODULE_1_auth0_lock___default.a(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});
        // listening to 'authenticated' events
        this.lock.on('authenticated', function (authResult) {
            localStorage.setItem(ID_TOKEN, authResult.idToken);
        });
    }
    AuthService.prototype.signIn = function () { this.lock.show(); };
    AuthService.prototype.signOut = function () { localStorage.removeItem(ID_TOKEN); };
    AuthService.prototype.authenticated = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])(); };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListService = (function () {
    function TaskListService(authHttp) {
        this.authHttp = authHttp;
    }
    TaskListService.prototype.loadTasks$ = function () {
        return this.authHttp.get(TaskListService.TASKS_ENDPOINT);
    };
    TaskListService.prototype.addTask$ = function (task) {
        return this.authHttp.post(TaskListService.TASKS_ENDPOINT, { description: task });
    };
    TaskListService.prototype.deleteTask$ = function (task) {
        return this.authHttp.delete(TaskListService.TASKS_ENDPOINT +
            '?id=' + task._id);
    };
    TaskListService.TASKS_ENDPOINT = 'https://wt-23e8bbb0eada50feddaf387921cba3d3-0.run.webtask.io/tasks';
    TaskListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === 'function' && _a) || Object])
    ], TaskListService);
    return TaskListService;
    var _a;
}());
//# sourceMappingURL=task-list.service.js.map

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 578;


/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(730);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, slimLoading) {
        this.authService = authService;
        this.slimLoading = slimLoading;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(900),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_list_task_list_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_list_task_form_task_form_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_service__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__ = __webpack_require__(529);
/* unused harmony export authHttpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














function authHttpFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthConfig"](), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__task_list_task_form_task_form_component__["a" /* TaskFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_service__["a" /* TaskListService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(286);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(authService) {
        this.authService = authService;
    }
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(901),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.taskAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.task = null;
    }
    TaskFormComponent.prototype.addTask = function () {
        this.taskAdded.emit(this.task);
        this.task = null;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskFormComponent.prototype, "taskAdded", void 0);
    TaskFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-form',
            template: __webpack_require__(902),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
//# sourceMappingURL=task-form.component.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_list_service__ = __webpack_require__(490);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    function TaskListComponent(taskListService) {
        this.taskListService = taskListService;
        this.startAjaxRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.completeAjaxRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaskListComponent.prototype.ngOnInit = function () { this.loadTasks(); };
    TaskListComponent.prototype.loadTasks = function () {
        var _this = this;
        this.startAjaxRequest.emit();
        this.taskListService.loadTasks$().subscribe(function (response) { return _this.tasks = response.json(); }, function (error) { return console.log(error); }, function () { return _this.completeAjaxRequest.emit(); });
    };
    TaskListComponent.prototype.taskAddedHandler = function (task) {
        var _this = this;
        this.taskListService.addTask$(task).subscribe(function (response) { return _this.loadTasks(); }, function (error) { return console.log(); });
    };
    TaskListComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.startAjaxRequest.emit();
        this.taskListService.deleteTask$(task).subscribe(function (response) { return _this.loadTasks(); }, function (error) { return console.log(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "startAjaxRequest", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "completeAjaxRequest", void 0);
    TaskListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(903),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_list_service__["a" /* TaskListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__task_list_service__["a" /* TaskListService */]) === 'function' && _a) || Object])
    ], TaskListComponent);
    return TaskListComponent;
    var _a;
}());
//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, ".app-container {\r\n  padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, ".fill-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, ".task-item {\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  background-color: #eee;\r\n}\r\n\r\nbutton.delete {\r\n  float: right;\r\n  top: -60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"app-container\">\r\n  <md-card *ngIf=\"!authService.authenticated()\">\r\n    <md-card-title>Hello, visitor.</md-card-title>\r\n    <md-card-subtitle>\r\n      Please <a (click)=\"authService.signIn()\">sign in</a> to manage your task list.\r\n    </md-card-subtitle>\r\n  </md-card>\r\n\r\n  <app-task-list *ngIf=\"authService.authenticated()\"\r\n\r\n    (startAjaxRequest)=\"slimLoading.start()\"\r\n    (completeAjaxRequest)=\"slimLoading.complete()\">\r\n\r\n  </app-task-list>\r\n\r\n</div>\r\n\r\n<ng2-slim-loading-bar [color]=\"'gold'\" [height]=\"'4px'\"></ng2-slim-loading-bar>"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <span>Task List</span>\r\n\r\n  <span class=\"fill-space\"></span>\r\n\r\n  <button md-button (click)=\"authService.signIn()\" *ngIf=\"!authService.authenticated()\">Sign In</button>\r\n  <button md-button (click)=\"authService.signOut()\" *ngIf=\"authService.authenticated()\">Sign Out</button>\r\n</md-toolbar>"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div class=\"task-form\">\r\n  <md-input-container>\r\n  <input  mdinput=\"\" placeholder=\"New task\" ngmodel=\"\">\r\n</md-input-container>\r\n  <button md-button=\"\" md-raised-button=\"\" color=\"primary\" (click)=\"addTask()\">Add</button>\r\n</div>"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title>Task List</md-card-title>\r\n  <md-card-subtitle>All your tasks in one place.</md-card-subtitle>\r\n\r\n  <app-task-form (taskAdded)=\"taskAddedHandler($event)\"></app-task-form>\r\n\r\n  <md-list>\r\n    <div class=\"task-item\" *ngFor=\"let task of tasks; trackBy: $index\">\r\n      <p><small><strong>{{ task.createdAt | date: 'short' }}</strong></small></p>\r\n      <p>{{ task.description }}</p>\r\n\r\n      <button class=\"delete\" md-button md-raised-button\r\n        color=\"accent\" (click)=\"deleteTask(task)\">Delete</button>\r\n    </div>\r\n    <div class=\"task-item\" *ngIf=\"tasks?.length == 0\">\r\n      <p>You have no pending tasks.</p>\r\n    </div>\r\n  </md-list>\r\n</md-card>"

/***/ })

},[1045]);
//# sourceMappingURL=main.bundle.js.map