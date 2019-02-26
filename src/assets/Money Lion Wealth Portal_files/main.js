(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _services_authgaurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authgaurd.service */ "./src/app/services/authgaurd.service.ts");
/* harmony import */ var _pages_wealth_profile_wealth_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/wealth-profile/wealth-profile.component */ "./src/app/pages/wealth-profile/wealth-profile.component.ts");
/* harmony import */ var _pages_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-home/main-home.component */ "./src/app/pages/main-home/main-home.component.ts");








var routes = [
    { path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    { path: 'main',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_services_authgaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthgaurdService"]],
        children: [
            { path: '',
                component: _pages_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_7__["MainHomeComponent"],
                canActivate: [_services_authgaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthgaurdService"]]
            },
            { path: 'wealth-profile/:userId',
                component: _pages_wealth_profile_wealth_profile_component__WEBPACK_IMPORTED_MODULE_6__["WealthProfileComponent"],
                canActivate: [_services_authgaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthgaurdService"]]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false, useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'wealth-portal-fe';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authgaurd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authgaurd.service */ "./src/app/services/authgaurd.service.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/token.interceptor.service */ "./src/app/services/token.interceptor.service.ts");
/* harmony import */ var _coomponents_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coomponents/left-menu/left-menu.component */ "./src/app/coomponents/left-menu/left-menu.component.ts");
/* harmony import */ var _pages_wealth_profile_wealth_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/wealth-profile/wealth-profile.component */ "./src/app/pages/wealth-profile/wealth-profile.component.ts");
/* harmony import */ var _pages_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/main-home/main-home.component */ "./src/app/pages/main-home/main-home.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _coomponents_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_13__["LeftMenuComponent"],
                _pages_wealth_profile_wealth_profile_component__WEBPACK_IMPORTED_MODULE_14__["WealthProfileComponent"],
                _pages_main_home_main_home_component__WEBPACK_IMPORTED_MODULE_15__["MainHomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _form_form_module__WEBPACK_IMPORTED_MODULE_10__["FormComponentModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_authgaurd_service__WEBPACK_IMPORTED_MODULE_8__["AuthgaurdService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coomponents/left-menu/left-menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/coomponents/left-menu/left-menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidenav\" *ngIf=\"isOpen\" [@slideInOut] style=\"padding-top: 70px\">\n    <div>\n      <div style=\"display:table;\">\n          <div style=\"display:table-cell; vertical-align:middle; padding-left:10px\">\n            <!--<img src=\"/img/blank-user.svg\" class=\"profileImage sideMenuProfileImage\">\n              <profile-pic [user]=\"user\" [width]=\"'50px'\"></profile-pic>\n            -->\n            \n          </div>\n          <div style=\"display:table-cell; vertical-align:middle; padding-left:10px\">\n            <div class=\"profileName\">{{user.firstname}} {{user.lastname}}</div>\n            \n          </div>\n      </div>\n    </div>\n    <div class=\"mt-40 pt-40\">\n\n      \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/coomponents/left-menu/left-menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/coomponents/left-menu/left-menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidenav {\n  top: 0;\n  width: 250px;\n  height: 100%;\n  position: fixed;\n  background-color: #e8eef5;\n  z-index: 10000;\n  border-right: 1px solid #5a5a57; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9ycmlzL3dvcmtzcGFjZS90eXBlc2NyaXB0L3dlYWx0aC1wb3J0YWwtZmUvc3JjL2FwcC9jb29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGVuYXYge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWY1O1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1YTVhNTc7XG59Il19 */"

/***/ }),

/***/ "./src/app/coomponents/left-menu/left-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/coomponents/left-menu/left-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/user.service */ "./src/app/services/user.service.ts");





var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(userService, router, eRef) {
        this.userService = userService;
        this.router = router;
        this.eRef = eRef;
        this.isOpen = false;
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser();
        this.router.events.subscribe(function (event) {
            if (_this.isOpen && (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                _this.slideOut();
            }
        });
    };
    LeftMenuComponent.prototype.toggle = function () {
        if (this.isOpen) {
            console.log("slide out");
            this.slideOut();
        }
        else {
            console.log("slide in");
            this.slideIn();
        }
    };
    LeftMenuComponent.prototype.reset = function () {
        this.slideOut();
    };
    ;
    LeftMenuComponent.prototype.clickout = function (event) {
        if (!this.eRef.nativeElement.contains(event.target) &&
            this.isOpen === true &&
            event.target.id !== 'menuToggle') {
            this.slideOut();
        }
    };
    /*
    * Slides the menu out of the screen.
    */
    LeftMenuComponent.prototype.slideOut = function () {
        this.isOpen = false;
        return;
    };
    /*
    * Slides the menu into the screen.
    */
    LeftMenuComponent.prototype.slideIn = function () {
        this.isOpen = true;
        return;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LeftMenuComponent.prototype, "clickout", null);
    LeftMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/coomponents/left-menu/left-menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./left-menu.component.scss */ "./src/app/coomponents/left-menu/left-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/form/checkbox/checkbox.component.css":
/*!******************************************************!*\
  !*** ./src/app/form/checkbox/checkbox.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pure-material-checkbox {\n    z-index: 0;\n    position: relative;\n    display: inline-block;\n    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);\n    font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n    font-size: 16px;\n    line-height: 1.5;\n}\n\n/* Input */\n\n.pure-material-checkbox > input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, -webkit-transform 0.2s;\n    transition: opacity 0.3s, transform 0.2s;\n    transition: opacity 0.3s, transform 0.2s, -webkit-transform 0.2s;\n}\n\n/* Span */\n\n.pure-material-checkbox > span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n}\n\n/* Box */\n\n.pure-material-checkbox > span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px; /* Safari */\n    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n}\n\n/* Checkmark */\n\n.pure-material-checkbox > span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    -webkit-transform: translate(3px, 4px) rotate(-45deg);\n            transform: translate(3px, 4px) rotate(-45deg);\n}\n\n/* Checked, Indeterminate */\n\n.pure-material-checkbox > input:checked,\n.pure-material-checkbox > input:indeterminate {\n    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));\n}\n\n.pure-material-checkbox > input:checked + span::before,\n.pure-material-checkbox > input:indeterminate + span::before {\n    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));\n    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));\n}\n\n.pure-material-checkbox > input:checked + span::after,\n.pure-material-checkbox > input:indeterminate + span::after {\n    border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));\n}\n\n.pure-material-checkbox > input:indeterminate + span::after {\n    border-left: none;\n    -webkit-transform: translate(4px, 3px);\n            transform: translate(4px, 3px);\n}\n\n/* Hover, Focus */\n\n.pure-material-checkbox:hover > input {\n    opacity: 0.04;\n}\n\n.pure-material-checkbox > input:focus {\n    opacity: 0.12;\n}\n\n.pure-material-checkbox:hover > input:focus {\n    opacity: 0.16;\n}\n\n/* Active */\n\n.pure-material-checkbox > input:active {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: opacity 0s, -webkit-transform 0s;\n    transition: transform 0s, opacity 0s;\n    transition: transform 0s, opacity 0s, -webkit-transform 0s;\n}\n\n.pure-material-checkbox > input:active + span::before {\n    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));\n}\n\n.pure-material-checkbox > input:checked:active + span::before {\n    border-color: transparent;\n    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);\n}\n\n/* Disabled */\n\n.pure-material-checkbox > input:disabled {\n    opacity: 0;\n}\n\n.pure-material-checkbox > input:disabled + span {\n    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);\n    cursor: initial;\n}\n\n.pure-material-checkbox > input:disabled + span::before {\n    border-color: currentColor;\n}\n\n.pure-material-checkbox > input:checked:disabled + span::before,\n.pure-material-checkbox > input:indeterminate:disabled + span::before {\n    border-color: transparent;\n    background-color: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsOERBQThEO0lBQzlELDBHQUEwRztJQUMxRyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0RBQXdDO0lBQXhDLHdDQUF3QztJQUF4QyxnRUFBd0M7QUFDNUM7O0FBRUEsU0FBUzs7QUFDVDtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQSxRQUFROztBQUNSO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGlCQUFpQixFQUFFLFdBQVc7SUFDOUIsb0VBQW9FO0lBQ3BFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvREFBb0Q7QUFDeEQ7O0FBRUEsY0FBYzs7QUFDZDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxREFBNkM7WUFBN0MsNkNBQTZDO0FBQ2pEOztBQUVBLDJCQUEyQjs7QUFDM0I7O0lBRUkscUVBQXFFO0FBQ3pFOztBQUVBOztJQUVJLGlFQUFpRTtJQUNqRSxxRUFBcUU7QUFDekU7O0FBRUE7O0lBRUksb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsaUJBQWlCOztBQUNqQjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxXQUFXOztBQUNYO0lBQ0ksVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNENBQW9DO0lBQXBDLG9DQUFvQztJQUFwQywwREFBb0M7QUFDeEM7O0FBRUE7SUFDSSxpRUFBaUU7QUFDckU7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0VBQXdFO0FBQzVFOztBQUVBLGFBQWE7O0FBQ2I7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1cmUtbWF0ZXJpYWwtY2hlY2tib3gge1xuICAgIHotaW5kZXg6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1wdXJlLW1hdGVyaWFsLW9uc3VyZmFjZS1yZ2IsIDAsIDAsIDApLCAwLjg3KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHVyZS1tYXRlcmlhbC1mb250LCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogSW5wdXQgKi9cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgdG9wOiAtOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHVyZS1tYXRlcmlhbC1vbnN1cmZhY2UtcmdiLCAwLCAwLCAwKSwgMC42KTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuMnM7XG59XG5cbi8qIFNwYW4gKi9cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQm94ICovXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDNweCAxMXB4IDNweCAxcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAycHg7IC8qIFNhZmFyaSAqL1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1wdXJlLW1hdGVyaWFsLW9uc3VyZmFjZS1yZ2IsIDAsIDAsIDApLCAwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4vKiBDaGVja21hcmsgKi9cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gc3Bhbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDFweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDRweCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi8qIENoZWNrZWQsIEluZGV0ZXJtaW5hdGUgKi9cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCxcbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXB1cmUtbWF0ZXJpYWwtcHJpbWFyeS1yZ2IsIDMzLCAxNTAsIDI0MykpO1xufVxuXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgKyBzcGFuOjpiZWZvcmUsXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmluZGV0ZXJtaW5hdGUgKyBzcGFuOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLXB1cmUtbWF0ZXJpYWwtcHJpbWFyeS1yZ2IsIDMzLCAxNTAsIDI0MykpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1wdXJlLW1hdGVyaWFsLXByaW1hcnktcmdiLCAzMywgMTUwLCAyNDMpKTtcbn1cblxuLnB1cmUtbWF0ZXJpYWwtY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkICsgc3Bhbjo6YWZ0ZXIsXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmluZGV0ZXJtaW5hdGUgKyBzcGFuOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tcHVyZS1tYXRlcmlhbC1vbnByaW1hcnktcmdiLCAyNTUsIDI1NSwgMjU1KSk7XG59XG5cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSArIHNwYW46OmFmdGVyIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDNweCk7XG59XG5cbi8qIEhvdmVyLCBGb2N1cyAqL1xuLnB1cmUtbWF0ZXJpYWwtY2hlY2tib3g6aG92ZXIgPiBpbnB1dCB7XG4gICAgb3BhY2l0eTogMC4wNDtcbn1cblxuLnB1cmUtbWF0ZXJpYWwtY2hlY2tib3ggPiBpbnB1dDpmb2N1cyB7XG4gICAgb3BhY2l0eTogMC4xMjtcbn1cblxuLnB1cmUtbWF0ZXJpYWwtY2hlY2tib3g6aG92ZXIgPiBpbnB1dDpmb2N1cyB7XG4gICAgb3BhY2l0eTogMC4xNjtcbn1cblxuLyogQWN0aXZlICovXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcbn1cblxuLnB1cmUtbWF0ZXJpYWwtY2hlY2tib3ggPiBpbnB1dDphY3RpdmUgKyBzcGFuOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLXB1cmUtbWF0ZXJpYWwtcHJpbWFyeS1yZ2IsIDMzLCAxNTAsIDI0MykpO1xufVxuXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQ6YWN0aXZlICsgc3Bhbjo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHVyZS1tYXRlcmlhbC1vbnN1cmZhY2UtcmdiLCAwLCAwLCAwKSwgMC42KTtcbn1cblxuLyogRGlzYWJsZWQgKi9cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQ6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQ6ZGlzYWJsZWQgKyBzcGFuIHtcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1wdXJlLW1hdGVyaWFsLW9uc3VyZmFjZS1yZ2IsIDAsIDAsIDApLCAwLjM4KTtcbiAgICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbi5wdXJlLW1hdGVyaWFsLWNoZWNrYm94ID4gaW5wdXQ6ZGlzYWJsZWQgKyBzcGFuOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQ6ZGlzYWJsZWQgKyBzcGFuOjpiZWZvcmUsXG4ucHVyZS1tYXRlcmlhbC1jaGVja2JveCA+IGlucHV0OmluZGV0ZXJtaW5hdGU6ZGlzYWJsZWQgKyBzcGFuOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/form/checkbox/checkbox.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/form/checkbox/checkbox.component.ts ***!
  \*****************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.value === true) {
            this.inputObj.nativeElement.checked = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputObj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CheckboxComponent.prototype, "inputObj", void 0);
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'checkbox',
            template: "<label class=\"pure-material-checkbox\">\n                <input #inputObj \n                      type=\"checkbox\"\n                      value=\"{{value}}\"\n                >\n                <span class=\"{{class}}\" >{{label}}</span>\n              </label>",
            styles: [__webpack_require__(/*! ./checkbox.component.css */ "./src/app/form/checkbox/checkbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentModule", function() { return FormComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text/text.component */ "./src/app/form/text/text.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/form/checkbox/checkbox.component.ts");






var FormComponentModule = /** @class */ (function () {
    function FormComponentModule() {
    }
    FormComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]
            ],
            exports: [
                _text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]
            ],
            providers: []
        })
    ], FormComponentModule);
    return FormComponentModule;
}());



/***/ }),

/***/ "./src/app/form/text/text.component.ts":
/*!*********************************************!*\
  !*** ./src/app/form/text/text.component.ts ***!
  \*********************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/validation.service */ "./src/app/services/validation.service.ts");



var TextComponent = /** @class */ (function () {
    function TextComponent(validationService) {
        this.validationService = validationService;
        this.placeholder = '';
        this.icon = 'fa-question';
        this.leftIcon = 'fa-pencil';
        this.type = 'text';
        this.val = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.iconPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.width) {
            this.width = '100%';
        }
    }
    TextComponent.prototype.ngOnInit = function () { };
    TextComponent.prototype.getInputNativeElement = function () {
        return this.inputObj.nativeElement;
    };
    TextComponent.prototype.onblur = function (val) {
        this.val.emit(val);
    };
    TextComponent.prototype.iconClicked = function () {
        this.iconPress.emit('hit');
    };
    TextComponent.prototype.isValid = function () {
        return this.isValid;
    };
    TextComponent.prototype.onKeyUp = function ($event) {
        this.keyUp.emit($event);
    };
    TextComponent.prototype.validate = function () {
        var _this = this;
        var notFound = false;
        var validation = this.validations.find(function (v) {
            if (_this.validationService.validationExists(v.key)) {
                return !_this.validationService.validate(v.key, _this.getValue());
            }
            else {
                notFound = true;
                return true;
            }
        });
        if (notFound) {
            this.setError(validation.key + " not found");
            return false;
        }
        else if (validation) {
            this.setError(validation.message);
            return false;
        }
        else {
            this.clearError();
            return true;
        }
    };
    TextComponent.prototype.setVerified = function (message) {
        this.valid = true;
        /* $(this.confirmWrap.nativeElement).text(message)
         $(this.inputwrapper.nativeElement).css("border-color","green")*/
    };
    TextComponent.prototype.getValue = function () {
        return this.inputObj.nativeElement.value;
    };
    TextComponent.prototype.clearError = function () {
        this.valid = true;
        /*$(this.errorWrap.nativeElement).text("")
        $(this.inputwrapper.nativeElement).css("border-color","black")*/
    };
    TextComponent.prototype.setError = function (message) {
        /*this.valid = false;
        $(this.errorWrap.nativeElement).text(message)
        $(this.inputwrapper.nativeElement).css("border-color","red")*/
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextComponent.prototype, "tooltip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "leftIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TextComponent.prototype, "validations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TextComponent.prototype, "val", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TextComponent.prototype, "keyUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TextComponent.prototype, "iconPress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputObj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextComponent.prototype, "inputObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputwrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextComponent.prototype, "inputwrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('errorMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextComponent.prototype, "errorWrap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextComponent.prototype, "confirmWrap", void 0);
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'input-text',
            template: "<div *ngIf=\"label\"><label>{{label}}</label></div>\n            <div class=\"inputgroup\" #inputwrapper style=\"display:table; border:1px solid grey; width:100%\" >\n                <div style=\"display:table-cell; width:20px; padding-left:5px; padding-right:10px; text-align:left\">\n                    <i class=\"fa {{leftIcon}}\"></i>\n                </div>\n                <div style=\"display:table-cell;\">\n                    <input type=\"{{type}}\"\n                          #inputObj\n                          style=\"width:100%\"\n                          [placeholder]=\"placeholder\"\n                          (keyup)=\"onKeyUp($event)\"\n                          (blur)=\"onblur(inputObj.value)\"\n                          validation='[{\"rule\": \"isValidEmail(value)\", \"message\":\"This is not a valid email\"}]'\n                    />\n                    <div #errorMessage class=\"error_message\"></div>\n                    <div #confirmMessage class=\"confirm_message\"></div>\n                </div>\n                <div style=\"display:table-cell;  text-align:right; padding-left:10px\">\n                  <span class=\"info\"  *ngIf=\"tooltip\">\n                      <i class=\"fa {{icon}} cursor\" (click)=\"iconClicked()\" data-toggle=\"tooltip\" title=\"{{tooltip}}\"></i>\n                  </span>\n                </div>\n            </div>\n            "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\"\n     style=\" background-color: rgba(240, 248, 255, 0.75);\n            position:fixed;\n            top:0;\n            width:100%;\n            border-radius:0px;\n            color:white;\n            z-index:9999;\n            margin-bottom:0px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\"\n>\n<div>\n\n  <div style=\"display:inline-block; width: 35px\"> \n <!--   <i class=\"fa fa-bars good-font menu-icon mr-20\" id=\"menuToggle\" (click)=\"toggleMenu()\" ></i>-->\n  </div>\n  <img src=\"/assets/ML_ForDark_Monochrome_Horizontal@3x.png\" style=\"width:100px\">\n</div>\n\n\n</nav>\n\n<div class=\"container\" style=\"margin-top:250px\">\n    <div class=\"row\">\n       \n      <div style=\"margin:auto; width: 400px\">\n        <div>\n          <input-text #email [placeholder]=\"'Email'\"></input-text>\n        </div>\n        <div class=\"mt-10\">\n          <input-text #password [type]=\"'password'\" [placeholder]=\"'Password'\"></input-text>\n        </div>\n        <div class=\"mt-10\">\n          <button (click)=\"login()\" style=\"float:right\" class=\"btn btn-primary\">Login</button>\n\n        </div>\n      </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_form_text_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/form/text/text.component */ "./src/app/form/text/text.component.ts");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/user.service */ "./src/app/services/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.email.getValue(), this.password.getValue())
            .subscribe(function (u) {
            window.location.href = '#/main';
        }, function (err) {
            console.log(err);
            _this.alert = { message: "error with signup " + err.error, type: 'danger' };
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("email"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_form_text_text_component__WEBPACK_IMPORTED_MODULE_2__["TextComponent"])
    ], LoginComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("password"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_form_text_text_component__WEBPACK_IMPORTED_MODULE_2__["TextComponent"])
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-home/main-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-home/main-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-sm-4\">\n        <div class=\"card\">\n            <div>Search</div>\n            <div>\n              <input-text #searchTxt\n                    [leftIcon]=\"'fa-search'\" \n                    (keyUp)=\"search($event)\"\n                    [placeholder]=\"'Account Number'\"></input-text>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n\n    </div>\n    <div class=\"col-sm-4\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/main-home/main-home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-home/main-home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4taG9tZS9tYWluLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/main-home/main-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-home/main-home.component.ts ***!
  \********************************************************/
/*! exports provided: MainHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomeComponent", function() { return MainHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_form_text_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/form/text/text.component */ "./src/app/form/text/text.component.ts");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/user.service */ "./src/app/services/user.service.ts");




var MainHomeComponent = /** @class */ (function () {
    function MainHomeComponent(userService) {
        this.userService = userService;
    }
    MainHomeComponent.prototype.ngOnInit = function () {
    };
    MainHomeComponent.prototype.search = function ($event) {
        if ($event.code === 'Enter') {
            this.userService.getUserIdViaAccountNumber(this.searchTxt.getValue())
                .subscribe(function (userId) {
                window.location.href = "#/main/wealth-profile/" + userId;
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchTxt'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_form_text_text_component__WEBPACK_IMPORTED_MODULE_2__["TextComponent"])
    ], MainHomeComponent.prototype, "searchTxt", void 0);
    MainHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-home',
            template: __webpack_require__(/*! ./main-home.component.html */ "./src/app/pages/main-home/main-home.component.html"),
            styles: [__webpack_require__(/*! ./main-home.component.scss */ "./src/app/pages/main-home/main-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], MainHomeComponent);
    return MainHomeComponent;
}());

/*  search(event) {
    console.log(event)
  /*  if($event.code === 'Enter'){
      this.userService.getUserIdViaAccountNumber(this.searchTxt.getValue())
        .subscribe(userId => {
          window.location.href = `#/main/wealth-profile/${userId}`;
        })

    }
  }
*/ 


/***/ }),

/***/ "./src/app/pages/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\"\n     style=\" background-color: rgba(240, 248, 255, 0.75);\n            position:fixed;\n            top:0;\n            width:100%;\n            border-radius:0px;\n            color:white;\n            z-index:9999;\n            margin-bottom:0px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\"\n>\n<div>\n\n  <div style=\"display:inline-block; width: 35px\"> \n   <i class=\"fa fa-bars good-font menu-icon mr-20 cursor\" id=\"menuToggle\" (click)=\"toggleMenu()\" ></i>\n  </div>\n  <img src=\"/assets/ML_ForDark_Monochrome_Horizontal@3x.png\" style=\"width:100px\">\n</div>\n\n\n</nav>\n<div>\n  <left-menu #leftMenu></left-menu>\n  <div class=\"container-fluid\" style=\"margin-top: 70px\" >\n      <router-outlet></router-outlet>  \n  </div>\n  \n</div> "

/***/ }),

/***/ "./src/app/pages/main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_coomponents_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/coomponents/left-menu/left-menu.component */ "./src/app/coomponents/left-menu/left-menu.component.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.toggleMenu = function () {
        this.leftMenu.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("leftMenu"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_coomponents_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__["LeftMenuComponent"])
    ], MainComponent.prototype, "leftMenu", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/pages/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/wealth-profile/wealth-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/wealth-profile/wealth-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"card\">\n     <div class=\"title mb-20\">\n        {{user.name.first}} \n        {{user.name.last}}\n      </div>\n      <div class=\"text muted\">\n          <label>Email:</label> {{user.email}}\n      </div>\n      <div class=\"text muted\">\n          <label>Onboarding Status:</label> {{drivewealthUser.onboardingStatus}}\n      </div>\n      <div class=\"text muted\">\n         <label>Deposit Status:</label> {{drivewealthUser.depositStatus}}\n      </div>\n      <div class=\"text muted\">\n        <label>DW Account Number:</label> {{drivewealthUser.driveWealthAccountSnapshot.accountNo}}\n     </div>\n     \n      <checkbox [label]=\"'Full Rebalance'\" [value]=\"drivewealthUser.fullRebalance\"></checkbox>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n        \n            <canvas #lineChart >{{ chart }}</canvas>\n            \n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/wealth-profile/wealth-profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/wealth-profile/wealth-profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlYWx0aC1wcm9maWxlL3dlYWx0aC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/wealth-profile/wealth-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/wealth-profile/wealth-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: WealthProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WealthProfileComponent", function() { return WealthProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/user.service */ "./src/app/services/user.service.ts");




//DWXP000061
var WealthProfileComponent = /** @class */ (function () {
    function WealthProfileComponent(activatedroute, userService) {
        this.activatedroute = activatedroute;
        this.userService = userService;
    }
    WealthProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.activatedroute.snapshot.params['userId'];
        this.userService.getMoneyLionUser(userId).subscribe(function (user) {
            _this.user = user;
            console.log(user);
        });
        this.userService.getDrivewealthUser(userId).subscribe(function (dwu) {
            _this.drivewealthUser = dwu;
        });
        this.userService.getSnaphots(userId).subscribe(function (res) {
            var dates = [];
            var cashBalances = [];
            res.forEach(function (snapshot) {
                var jsdate = new Date(snapshot.createdOn);
                dates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
                if (snapshot.cash.createdOn != null) {
                    cashBalances.push(snapshot.cash.cashBalance);
                }
                else {
                    cashBalances.push(0);
                }
            });
            /* let temp_max = res['list'].map(res => res.main.temp_max);
             let temp_min = res['list'].map(res => res.main.temp_min);
             let alldates = res['list'].map(res => res.dt)
             
             let weatherDates = []
             alldates.forEach((res) => {
                 let jsdate = new Date(res * 1000)
                 weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
             });
       
             this.chart = new Chart(this.chartRef.nativeElement, {
               type: 'line',
               data: {
                 labels: weatherDates,
                 datasets: [
                   {
                     data: temp_max,
                     borderColor: "#3cba9f",
                     fill: false
                   },
                   {
                     data: temp_min,
                     borderColor: "#ffcc00",
                     fill: false
                   },
                 ]
               },
               options: {
                 legend: {
                   display: false
                 },
                 scales: {
                   xAxes: [{
                     display: true
                   }],
                   yAxes: [{
                     display: true
                   }],
                 }
               }
             });*/
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WealthProfileComponent.prototype, "chartRef", void 0);
    WealthProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wealth-profile',
            template: __webpack_require__(/*! ./wealth-profile.component.html */ "./src/app/pages/wealth-profile/wealth-profile.component.html"),
            styles: [__webpack_require__(/*! ./wealth-profile.component.scss */ "./src/app/pages/wealth-profile/wealth-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], WealthProfileComponent);
    return WealthProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/authgaurd.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authgaurd.service.ts ***!
  \***********************************************/
/*! exports provided: AuthgaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthgaurdService", function() { return AuthgaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthgaurdService = /** @class */ (function () {
    function AuthgaurdService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthgaurdService.prototype.canActivate = function (route, state) {
        if (!this.userService.getUser()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthgaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthgaurdService);
    return AuthgaurdService;
}());



/***/ }),

/***/ "./src/app/services/token.interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token.interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
        console.log('TokenInterceptor Instantiated');
        //hi there
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var assets_weather_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/weather.json */ "./src/assets/weather.json");
var assets_weather_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/weather.json */ "./src/assets/weather.json", 1);







var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return this.http
            .put(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiDomain + "/v1/user/login?username=" + username + "&password=" + password, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.setUser(res.user);
            return res.user;
        }));
    };
    UserService.prototype.getUserIdViaAccountNumber = function (accountNum) {
        return this.http
            .get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiDomain + "/v1/drivewealth/userId?accountNum=" + accountNum)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.userId;
        }));
    };
    UserService.prototype.getDrivewealthUser = function (userId) {
        return this.http
            .get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiDomain + "/v1/drivewealth?userId=" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.drivewealthuser;
        }));
    };
    UserService.prototype.getMoneyLionUser = function (userId) {
        return this.http
            .get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiDomain + "/v1/user/info?userId=" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.user;
        }));
    };
    UserService.prototype.getSnaphots = function (userId) {
        return this.http
            .get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiDomain + "/v1/drivewealth/snapshots?userId=" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.snapshots;
        }));
    };
    UserService.prototype.dailyForecast = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (ob) {
            ob.next(assets_weather_json__WEBPACK_IMPORTED_MODULE_6__);
        });
        /*this.http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
        .pipe(map((result:any) => {
          return result;
        }));*/
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
        this.validationMap = new Map();
        this.validationMap.set('notblank', function (v) {
            return v === '';
        });
        this.validationMap.set('isValidEmail', function (v) {
            return v && v.indexOf('@') === -1;
        });
    }
    ValidationService.prototype.validate = function (name, value) {
        var func = this.validationMap.get(name);
        return !func(value);
    };
    ValidationService.prototype.validationExists = function (name) {
        return this.validationMap.has(name);
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/assets/weather.json":
/*!*********************************!*\
  !*** ./src/assets/weather.json ***!
  \*********************************/
/*! exports provided: message, cod, city_id, calctime, cnt, list, default */
/***/ (function(module) {

module.exports = {"message":"","cod":"200","city_id":2643743,"calctime":0.0875,"cnt":3,"list":[{"main":{"temp":279.946,"temp_min":279.946,"temp_max":279.946,"pressure":1016.76,"sea_level":1024.45,"grnd_level":1016.76,"humidity":100},"wind":{"speed":4.59,"deg":163.001},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"rain":{"3h":2.69},"dt":1485717216},{"main":{"temp":282.597,"temp_min":282.597,"temp_max":282.597,"pressure":1012.12,"sea_level":1019.71,"grnd_level":1012.12,"humidity":98},"wind":{"speed":4.04,"deg":226},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"rain":{"3h":0.405},"dt":1485745061},{"main":{"temp":279.38,"pressure":1011,"humidity":93,"temp_min":278.15,"temp_max":280.15},"wind":{"speed":2.6,"deg":30},"clouds":{"all":90},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"},{"id":741,"main":"Fog","description":"fog","icon":"50d"}],"dt":1485768552}]};

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiDomain: 'http://localhost:8080',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/amorris/workspace/typescript/wealth-portal-fe/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/amorris/workspace/typescript/wealth-portal-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map