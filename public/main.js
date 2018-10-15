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
        this.pageTitle = "Ticket Blaster 3000";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" style=\"color: white\"> {{pageTitle}}</a>\n    <ul class=\"nav nav-pills\">\n      <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\"\n        [routerLink]=\"['/landing']\">Home</a>\n      </li>\n\n      <li><a class=\"nav-link\" routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\" [routerLink]=\"['/tickets']\">Current Tickets</a></li>\n\n      <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/tickets', 0, 'edit']\">New Ticket</a>\n          </li>\n\n    </ul>\n  </nav>\n  <div class=\"container\" style=\"margin-top: 3em\">\n    <router-outlet></router-outlet>\n  </div>\n"
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _ticket_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket.module */ "./src/app/ticket.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
                    { path: '', redirectTo: 'landing', pathMatch: 'full' },
                    { path: '**', redirectTo: 'landing', pathMatch: 'full' }
                ]),
                _ticket_module__WEBPACK_IMPORTED_MODULE_6__["TicketModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n    <p style=\"font-size: 20pt\"  class=\"text-center\">Supercharge your ticket management system</p>\n\n  </div>\n  <div class=\"card-body\">\n    <div class=\"container-fluid\">\n      <div class=\"text-center\">\n        <img [src]=\"LOGO\"\n             class=\"img-responsive center-block\"\n             style=\"height:350px\" />\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.LOGO = './assets/cellphone-coffee-desk-860379.jpg';
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/shared/generic-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/generic-validator.ts ***!
  \*********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = /** @class */ (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    GenericValidator.prototype.getErrorCount = function (container) {
        var errorCount = 0;
        for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                    console.log(errorCount);
                }
            }
        }
        return errorCount;
    };
    return GenericValidator;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/ticket-detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/ticket-detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header'\n       *ngIf='ticket'>\n    {{pageTitle + ': ' + ticket.title}}\n  </div>\n\n  <div class='card-body'\n       *ngIf='ticket'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-3'>Title:</div>\n          <div class='col-md-6'>{{ticket.title}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Description:</div>\n          <div class='col-md-6'>{{ticket.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Status:</div>\n          <div class='col-md-6'>{{ticket.status}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-3'>Department:</div>\n          <div class='col-md-6'>{{ticket.department}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Notes:</div>\n          <div class=\"col-md-6\">{{ticket.notes}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class='row'>\n      <div class=\"col-md-1\">\n        <button class='btn btn-outline-secondary'\n                style='width:80px'\n                (click)='onBack()'>\n          <i class='fa fa-chevron-left'></i> Back\n        </button>\n      </div>\n      <div class=\"col-md-1\">\n        <button class=\"btn btn-outline-primary\"\n                style=\"width:80px\"\n                [routerLink]=\"['/tickets', ticket.id, 'edit']\">\n          Edit\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class='alert alert-danger'\n       *ngIf='errorMessage'>{{errorMessage}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ticket-detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/ticket-detail.component.ts ***!
  \********************************************/
/*! exports provided: TicketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function() { return TicketDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket.service */ "./src/app/ticket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketDetailComponent = /** @class */ (function () {
    function TicketDetailComponent(route, router, ticketService) {
        this.route = route;
        this.router = router;
        this.ticketService = ticketService;
        this.pageTitle = 'Ticket Detail';
        this.errorMessage = '';
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getTicket(id);
        });
    };
    TicketDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TicketDetailComponent.prototype.getTicket = function (id) {
        var _this = this;
        this.ticketService.getTicket(id).subscribe(function (ticket) { return _this.ticket = ticket; }, function (error) { return _this.errorMessage = error; });
    };
    TicketDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/tickets']);
    };
    TicketDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ticket-detail.component.html */ "./src/app/ticket-detail.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]])
    ], TicketDetailComponent);
    return TicketDetailComponent;
}());



/***/ }),

/***/ "./src/app/ticket-detail.guard.ts":
/*!****************************************!*\
  !*** ./src/app/ticket-detail.guard.ts ***!
  \****************************************/
/*! exports provided: TicketDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailGuard", function() { return TicketDetailGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketDetailGuard = /** @class */ (function () {
    function TicketDetailGuard(router) {
        this.router = router;
    }
    TicketDetailGuard.prototype.canActivate = function (next, state) {
        var id = +next.paramMap.get('id');
        if (id < 1) {
            alert('Invalid product Id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    };
    TicketDetailGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TicketDetailGuard);
    return TicketDetailGuard;
}());



/***/ }),

/***/ "./src/app/ticket-edit.component.html":
/*!********************************************!*\
  !*** ./src/app/ticket-edit.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n    <form novalidate\n          autocomplete=\"off\"\n          (ngSubmit)=\"saveTicket()\"\n          [formGroup]=\"ticketForm\">\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"ticketTitleId\">Ticket Title</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"ticketTitleId\"\n                 type=\"text\"\n                 placeholder=\"Name (required)\"\n                 name=\"title\"\n                 formControlName=\"ticketTitle\"\n                 [ngClass]=\"{'is-invalid': displayMessage.ticketTitle }\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.ticketTitle}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"ticketDescription\">Ticket Description</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"ticketDescriptionId\"\n                 type=\"text\"\n                 placeholder=\"Description (required)\"\n                 name=\"description\"\n                 formControlName=\"ticketDescription\"\n                 [ngClass]=\"{'is-invalid': displayMessage.ticketDescription}\" />\n          <span class=\"invalid-feedback\">\n            {{displayMessage.ticketDescription}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n\n                       <label class=\"col-md-2 control-label\"\n                           for=\"statusId\">Status</label>\n\n                       <div class=\"col-md-8\">\n                         <select class=\"col-md-3 form-control\"\n                         (change)=\"onStatusChange($event.target.value)\"\n                         id=\"ticketStatusId\"\n                         name=\"status\"\n                         FormControlName=\"ticketStatus\">\n                            <option\n\n                             *ngFor = \"let s of status\"\n                            value={{s.value}}> {{s.value}} ></option>\n\n\n                         </select>\n                       </div>\n                   </div>\n\n                   <div class=\"form-group\">\n\n                     <label class=\"col-md-2 control-label\"\n                      for=\"departmentId\">Department</label>\n\n                      <div class=\"col-md-8\">\n                        <select class=\"col-md-3 form-control\"\n                        (change)=\"onDepartmentChange($event.target.value)\"\n                          id=\"ticketDepartmentId\"\n                          name=\"department\"\n                          FormControlName=\"ticketDepartment\">\n\n                            <option\n                             *ngFor = \"let d of department\"\n                              value={{d.value}}> {{d.value}} ></option>\n                        </select>\n                      </div>\n                    </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-1\">\n          <button class=\"btn btn-primary\"\n                  style='width:80px'\n                  type=\"submit\"\n                  >\n            Save\n          </button>\n        </div>\n        <div class=\"col-md-1\">\n          <button class=\"btn btn-outline-secondary\"\n                  style='width:80px'\n                  type=\"button\"\n                  [routerLink]=\"['/tickets']\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col-md-1\">\n          <button class=\"btn btn-outline-warning\"\n                  style='width:80px'\n                  type=\"button\"\n                  (click)=\"deleteTicket()\">\n            Delete\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <p class=\"col-md-12\"> </p>\n\n  <div class='alert alert-danger'\n       *ngIf='errorMessage'>{{errorMessage}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ticket-edit.component.ts":
/*!******************************************!*\
  !*** ./src/app/ticket-edit.component.ts ***!
  \******************************************/
/*! exports provided: TicketEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEditComponent", function() { return TicketEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket.service */ "./src/app/ticket.service.ts");
/* harmony import */ var _shared_generic_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/generic-validator */ "./src/app/shared/generic-validator.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TicketEditComponent = /** @class */ (function () {
    function TicketEditComponent(fb, route, router, ticketService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.ticketService = ticketService;
        this.pageTitle = 'Ticket Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            ticketName: {
                required: 'Ticket name is required.',
                minlength: 'Ticket name must be at least three characters.',
                maxlength: 'Ticket name cannot exceed 50 characters.'
            }
        };
        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_6__["GenericValidator"](this.validationMessages);
    }
    Object.defineProperty(TicketEditComponent.prototype, "tags", {
        get: function () {
            return this.ticketForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    TicketEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = [{ id: 1, value: 'Select' },
            { id: 2, value: 'Open' },
            { id: 3, value: 'On Hold' },
            { id: 4, value: 'Closed' }];
        this.department = [{ id: 1, value: 'Select' },
            { id: 2, value: 'Billing' },
            { id: 3, value: 'Sales' },
            { id: 4, value: 'Customer Service' },
            { id: 5, value: 'Retention' },
            { id: 6, value: 'Scheduling' }];
        this.ticketForm = this.fb.group({
            ticketTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            ticketDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ticketStatus: '',
            ticketDepartment: ''
        });
        // Read the ticket Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getTicket(id);
        });
    };
    TicketEditComponent.prototype.onStatusChange = function (value) {
        this.ticketForm = this.fb.group({
            ticketTitle: this.ticketForm.value.ticketTitle,
            ticketDescription: this.ticketForm.value.ticketDescription,
            ticketStatus: value
        });
    };
    TicketEditComponent.prototype.onDepartmentChange = function (value) {
        this.ticketForm = this.fb.group({
            ticketTitle: this.ticketForm.value.ticketTitle,
            ticketDescription: this.ticketForm.value.ticketDescription,
            ticketStatus: this.ticketForm.value.ticketStatus,
            ticketDepartment: value
        });
    };
    TicketEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TicketEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, [this.ticketForm.valueChanges].concat(controlBlurs)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(800)).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.ticketForm);
        });
    };
    TicketEditComponent.prototype.addTag = function () {
        this.tags.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
    };
    TicketEditComponent.prototype.deleteTag = function (index) {
        this.tags.removeAt(index);
        this.tags.markAsDirty();
    };
    TicketEditComponent.prototype.getTicket = function (id) {
        var _this = this;
        this.ticketService.getTicket(id)
            .subscribe(function (ticket) { return _this.displayTicket(ticket); }, function (error) { return _this.errorMessage = error; });
    };
    TicketEditComponent.prototype.displayTicket = function (ticket) {
        if (this.ticketForm) {
            this.ticketForm.reset();
        }
        this.ticket = ticket;
        if (this.ticket._id == 0) {
            this.pageTitle = 'Add Ticket';
        }
        else {
            this.pageTitle = "Edit Ticket: " + this.ticket.title;
        }
        // Update the data on the form
        this.ticketForm.patchValue({
            ticketTitle: this.ticket.title,
            ticketDescription: this.ticket.description,
            ticketStatus: this.ticket.status,
            ticketDepartment: this.ticket.department,
        });
    };
    TicketEditComponent.prototype.deleteTicket = function () {
        var _this = this;
        if (this.ticket._id == 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the ticket: " + this.ticket.title + "?")) {
                this.ticketService.deleteTicket(this.ticket._id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    TicketEditComponent.prototype.saveTicket = function () {
        var _this = this;
        if (this.ticketForm.valid) {
            //  if (this.ticketForm.dirty) {
            // Copy over all of the original ticket properties
            // Then copy over the values from the form
            // This ensures values not on the form, such as the Id, are retained
            var p = __assign({}, this.ticket, this.ticketForm.value);
            if (p._id == 0) {
                this.ticketService.createTicket(p)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
            else {
                this.ticketService.updateTicket(p)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    TicketEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.ticketForm.reset();
        this.router.navigate(['/tickets']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Array)
    ], TicketEditComponent.prototype, "formInputElements", void 0);
    TicketEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ticket-edit.component.html */ "./src/app/ticket-edit.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]])
    ], TicketEditComponent);
    return TicketEditComponent;
}());



/***/ }),

/***/ "./src/app/ticket-edit.guard.ts":
/*!**************************************!*\
  !*** ./src/app/ticket-edit.guard.ts ***!
  \**************************************/
/*! exports provided: TicketEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEditGuard", function() { return TicketEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TicketEditGuard = /** @class */ (function () {
    function TicketEditGuard() {
    }
    TicketEditGuard.prototype.canDeactivate = function (component) {
        if (component.ticketForm.dirty) {
            var ticketName = component.ticketForm.get('ticketTitle').value || 'New Ticket';
            return confirm("Navigate away and lose all changes to " + ticketName + "?");
        }
        return true;
    };
    TicketEditGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TicketEditGuard);
    return TicketEditGuard;
}());



/***/ }),

/***/ "./src/app/ticket-list.component.html":
/*!********************************************!*\
  !*** ./src/app/ticket-list.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header'>\n    {{pageTitle}}\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-2'>Filter by:</div>\n      <div class='col-md-4'>\n        <input type='text'\n               [(ngModel)]='listFilter' />\n      </div>\n    </div>\n    <div class='row'\n         *ngIf='listFilter'>\n      <div class='col-md-6'>\n        <h4>Filtered by: {{listFilter}}</h4>\n      </div>\n    </div>\n    <div class='table-responsive'>\n      <table class='table'\n             *ngIf='tickets && tickets.length'>\n        <thead>\n          <tr>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Status</th>\n            <th>Department</th>\n            <th>Notes</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let ticket of filteredTickets'>\n\n            <td>\n              <a [routerLink]=\"['/tickets', ticket._id]\">\n                {{ ticket.title }}\n              </a>\n            </td>\n            <td>{{ticket.description}} </td>\n            <td>{{ticket.status}} </td>\n            <td>{{ticket.department}} </td>\n            <td>{{ticket.notes}} </td>\n            <td>\n              <a class=\"btn btn-primary\"\n                 [routerLink]=\"['/tickets', ticket._id, 'edit']\">\n                Edit\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div *ngIf='errorMessage'\n     class='alert alert-danger'>\n  Error: {{ errorMessage }}\n</div>\n"

/***/ }),

/***/ "./src/app/ticket-list.component.ts":
/*!******************************************!*\
  !*** ./src/app/ticket-list.component.ts ***!
  \******************************************/
/*! exports provided: TicketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketListComponent", function() { return TicketListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.service */ "./src/app/ticket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketListComponent = /** @class */ (function () {
    function TicketListComponent(ticketService) {
        this.ticketService = ticketService;
        this.pageTitle = 'Ticket List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredTickets = [];
        this.tickets = [];
    }
    Object.defineProperty(TicketListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredTickets = this.listFilter ? this.performFilter(this.listFilter) : this.tickets;
        },
        enumerable: true,
        configurable: true
    });
    TicketListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.tickets.filter(function (ticket) {
            return ticket.title.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    TicketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.getTickets().subscribe(function (tickets) {
            _this.tickets = tickets;
            _this.filteredTickets = _this.tickets;
        }, function (error) { return _this.errorMessage = error; });
    };
    TicketListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ticket-list.component.html */ "./src/app/ticket-list.component.html"),
        }),
        __metadata("design:paramtypes", [_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]])
    ], TicketListComponent);
    return TicketListComponent;
}());



/***/ }),

/***/ "./src/app/ticket.module.ts":
/*!**********************************!*\
  !*** ./src/app/ticket.module.ts ***!
  \**********************************/
/*! exports provided: TicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModule", function() { return TicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ticket_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-list.component */ "./src/app/ticket-list.component.ts");
/* harmony import */ var _ticket_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-detail.component */ "./src/app/ticket-detail.component.ts");
/* harmony import */ var _ticket_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-edit.component */ "./src/app/ticket-edit.component.ts");
/* harmony import */ var _ticket_detail_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket-detail.guard */ "./src/app/ticket-detail.guard.ts");
/* harmony import */ var _ticket_edit_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ticket-edit.guard */ "./src/app/ticket-edit.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TicketModule = /** @class */ (function () {
    function TicketModule() {
    }
    TicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'tickets', component: _ticket_list_component__WEBPACK_IMPORTED_MODULE_4__["TicketListComponent"] },
                    {
                        path: 'tickets/:id',
                        canActivate: [_ticket_detail_guard__WEBPACK_IMPORTED_MODULE_7__["TicketDetailGuard"]],
                        component: _ticket_detail_component__WEBPACK_IMPORTED_MODULE_5__["TicketDetailComponent"]
                    },
                    {
                        path: 'tickets/:id/edit',
                        canDeactivate: [_ticket_edit_guard__WEBPACK_IMPORTED_MODULE_8__["TicketEditGuard"]],
                        component: _ticket_edit_component__WEBPACK_IMPORTED_MODULE_6__["TicketEditComponent"]
                    },
                ])
            ],
            declarations: [
                _ticket_list_component__WEBPACK_IMPORTED_MODULE_4__["TicketListComponent"],
                _ticket_detail_component__WEBPACK_IMPORTED_MODULE_5__["TicketDetailComponent"],
                _ticket_edit_component__WEBPACK_IMPORTED_MODULE_6__["TicketEditComponent"]
            ]
        })
    ], TicketModule);
    return TicketModule;
}());



/***/ }),

/***/ "./src/app/ticket.service.ts":
/*!***********************************!*\
  !*** ./src/app/ticket.service.ts ***!
  \***********************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketService = /** @class */ (function () {
    function TicketService(http) {
        this.http = http;
        this.ticketsUrl = "dash/tickets";
    }
    TicketService.prototype.getTickets = function () {
        return this.http.get(this.ticketsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TicketService.prototype.getTicket = function (_id) {
        if (_id == 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.initializeTicket());
        }
        var url = this.ticketsUrl + "/" + _id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('getTicket: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TicketService.prototype.createTicket = function (ticket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        ticket._id = null;
        return this.http.post(this.ticketsUrl, ticket, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('createTicket: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TicketService.prototype.deleteTicket = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.ticketsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('deleteTicket: ' + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TicketService.prototype.updateTicket = function (ticket) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.ticketsUrl + "/" + ticket._id;
        return this.http.put(url, ticket, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return console.log('updateTicket: ' + ticket._id); }), 
        // Return the ticket on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return ticket; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TicketService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    TicketService.prototype.initializeTicket = function () {
        // Return an initialized object
        return {
            _id: 0,
            title: null,
            description: null,
            status: null,
            department: null,
            notes: null
        };
    };
    TicketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TicketService);
    return TicketService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/valhallan597th/postGworkspace/Tru-Backend/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map