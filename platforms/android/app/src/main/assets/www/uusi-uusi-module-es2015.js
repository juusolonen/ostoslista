(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uusi-uusi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uusi/uusi.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uusi/uusi.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>uusi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/uusi/uusi-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/uusi/uusi-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UusiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UusiPageRoutingModule", function() { return UusiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uusi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uusi.page */ "./src/app/uusi/uusi.page.ts");




const routes = [
    {
        path: '',
        component: _uusi_page__WEBPACK_IMPORTED_MODULE_3__["UusiPage"]
    }
];
let UusiPageRoutingModule = class UusiPageRoutingModule {
};
UusiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UusiPageRoutingModule);



/***/ }),

/***/ "./src/app/uusi/uusi.module.ts":
/*!*************************************!*\
  !*** ./src/app/uusi/uusi.module.ts ***!
  \*************************************/
/*! exports provided: UusiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UusiPageModule", function() { return UusiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _uusi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uusi-routing.module */ "./src/app/uusi/uusi-routing.module.ts");
/* harmony import */ var _uusi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uusi.page */ "./src/app/uusi/uusi.page.ts");







let UusiPageModule = class UusiPageModule {
};
UusiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _uusi_routing_module__WEBPACK_IMPORTED_MODULE_5__["UusiPageRoutingModule"]
        ],
        declarations: [_uusi_page__WEBPACK_IMPORTED_MODULE_6__["UusiPage"]]
    })
], UusiPageModule);



/***/ }),

/***/ "./src/app/uusi/uusi.page.scss":
/*!*************************************!*\
  !*** ./src/app/uusi/uusi.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V1c2kvdXVzaS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/uusi/uusi.page.ts":
/*!***********************************!*\
  !*** ./src/app/uusi/uusi.page.ts ***!
  \***********************************/
/*! exports provided: UusiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UusiPage", function() { return UusiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UusiPage = class UusiPage {
    constructor() { }
    ngOnInit() {
    }
};
UusiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uusi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uusi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uusi/uusi.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uusi.page.scss */ "./src/app/uusi/uusi.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UusiPage);



/***/ })

}]);
//# sourceMappingURL=uusi-uusi-module-es2015.js.map