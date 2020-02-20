(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"backgroundImage\" [ngStyle]=\"{background: backgroundUrl}\" *ngIf=\"!applicationProcessing\"></div> -->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-day/forecast-day.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-day/forecast-day.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backgroundImage\" [ngStyle]=\"{background: backgroundUrl}\" *ngIf=\"!applicatonProcessing\"></div>\n\n<div class=\"container mt-5\" *ngIf=\"applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <mat-spinner color=\"accent\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n<div class=\"backButtonContainer\">\n    <button mat-raised-button (click)=\"navigateHome()\">Go Home</button>\n</div>\n\n<div class=\"container-fluid\" style=\"padding-right: 2em;\">\n    <div class=\"row timeBlock\" *ngFor=\"let dailyData of displayData\">\n        <div class=\"offset-lg-10 col-lg-2 offset-md-8 col-md-4 offset-sm-6 col-sm-6 offset-6 col-6 timeCard\">\n            <div class=\"row\">\n                <div class=\"col-4 text-right my-auto TimeText\">{{getTime(dailyData.date)}}</div>\n                <div class=\"col-8\">\n                    <div class=\"row\"><div class=\"col-12 text-right\">{{ dailyData.degree }} °C</div></div>\n                    <div class=\"row\"><div class=\"col-12 text-right\">{{ dailyData.humidity*100 | number: '2.0-0' }}% HUM</div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/multiple-days/multiple-days.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multiple-days/multiple-days.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div \n    class=\"backgroundImage\" \n    [ngStyle]=\"{background: backgroundUrl}\" \n    *ngIf=\"!applicatonProcessing\"\n    (pan)=\"panEvent($event)\"></div>\n\n<div class=\"container mt-5\" *ngIf=\"applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <mat-spinner color=\"accent\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n<div class=\"container mt-2\" (pan)=\"panEvent($event)\">\n    <div class=\"row\">\n        <div \n            class=\"col-xl-2 col-lg-4 col-6 mb-lg-5 mb-md-3 mb-3 text-center\"\n            style=\"padding-left: 1.5em; padding-right: 1.5em;\"\n            *ngFor=\"let forecastData of forecastDisplayData\"\n        >\n            <div class=\"row forecastElement\" (click)=\"openDetailedForecast(forecastData.date)\">\n                <div class=\"col-12 text-center date\">\n                    {{forecastData.dateString}}\n                </div>\n                <div class=\"col-12 horline\">\n                    <hr>\n                </div>\n\n                <div class=\"col-12 text-center degree\">\n                    {{forecastData.temperatureHigh}}°C\n                </div>\n                <div class=\"col-12 text-center logo\" [ngStyle]=\"{background: forecastData.icon}\"></div>\n                <div class=\"col-12 text-center degree\">\n                    {{forecastData.temperatureLow}}°C\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-day/single-day.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-day/single-day.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backgroundImage\" [ngStyle]=\"{background: backgroundUrl}\" *ngIf=\"!applicatonProcessing\"></div>\n\n<div class=\"overlay\" *ngIf=\"!applicatonProcessing\" (pan)=\"panEvent($event)\"></div>\n\n\n<div class=\"container mt-5\" *ngIf=\"applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <mat-spinner color=\"accent\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container mt-2\" *ngIf=\"!applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center degreeBig\">\n            {{ displayData.degree }}°C\n        </div>\n    </div>\n\n    <div class=\"row\" style=\"margin-top: -2em;\">\n        <div class=\"col-12 text-center clockAndDate\">\n            {{ dateString }}\n        </div>\n\n        <div class=\"col-12 text-center cityAndCountry\">\n            {{ displayData.city }}, {{ displayData.country }}\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-12\">    \n            <div class=\"row\">\n                <div class=\"col-5 offset-3 text-right shortDesc\">{{ displayData.shortDesc }}</div>\n                <div class=\"col-1 text-center icon\" id=\"shortDescIcon\" [ngStyle]=\"{background: shortDescIconUrl}\"></div>    \n            </div>\n        \n            <div class=\"row mt-2\">\n                <div class=\"col-5 offset-3 text-right humidPercent\">{{ displayData.humidity }}%</div>\n                <div class=\"col-1 text-center icon\" id=\"humidityIcon\"></div>    \n            </div>\n\n            <div class=\"row mt-2\">\n                <div class=\"col-5 offset-3 text-right windspeed\">{{ displayData.windSpeed }}kph</div>\n                <div class=\"col-1 text-center icon\" id=\"windspeedIcon\"></div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"sliderContainer\" *ngIf=\"!applicatonProcessing\"> \n    <mat-slider min=\"0\" max=\"48\" value=\"0\" #slider (input)=\"getWeather(slider.value)\"></mat-slider>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-day/single-day.component */ "./src/app/single-day/single-day.component.ts");
/* harmony import */ var _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple-days/multiple-days.component */ "./src/app/multiple-days/multiple-days.component.ts");
/* harmony import */ var _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forecast-day/forecast-day.component */ "./src/app/forecast-day/forecast-day.component.ts");






const routes = [
    {
        path: '',
        component: _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_3__["SingleDayComponent"],
    },
    {
        path: 'forecast',
        component: _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_4__["MultipleDaysComponent"],
    },
    {
        path: 'forecast/:time',
        component: _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_5__["ForecastDayComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weather-design-v2';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-day/single-day.component */ "./src/app/single-day/single-day.component.ts");
/* harmony import */ var _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./multiple-days/multiple-days.component */ "./src/app/multiple-days/multiple-days.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-weather-data.service */ "./src/app/get-weather-data.service.ts");
/* harmony import */ var _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forecast-day/forecast-day.component */ "./src/app/forecast-day/forecast-day.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_10__["SingleDayComponent"],
            _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_11__["MultipleDaysComponent"],
            _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_14__["ForecastDayComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        ],
        providers: [_get_weather_data_service__WEBPACK_IMPORTED_MODULE_13__["GetWeatherDataService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/forecast-day/forecast-day.component.css":
/*!*********************************************************!*\
  !*** ./src/app/forecast-day/forecast-day.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timeBlock {\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.timeCard {\r\n    border: 1px solid white;\r\n    border-radius: 1em;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.TimeText {\r\n    font-size: 1.25em;\r\n}\r\n\r\n.backButtonContainer {\r\n    position: fixed;\r\n    top: 1em;\r\n    left: 1em;\r\n}\r\n\r\n#humidityIcon {\r\n    height: 16px;\r\n    margin: auto 0;\r\n\r\n    background-repeat: no-repeat !important;\r\n    background-size: contain !important;\r\n    background-position: center !important;\r\n\r\n    overflow: hidden;\r\n\r\n    background: url('humidity.svg');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZWNhc3QtZGF5L2ZvcmVjYXN0LWRheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYzs7SUFFZCx1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLHNDQUFzQzs7SUFFdEMsZ0JBQWdCOztJQUVoQiwrQkFBeUQ7QUFDN0QiLCJmaWxlIjoic3JjL2FwcC9mb3JlY2FzdC1kYXkvZm9yZWNhc3QtZGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZUJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLnRpbWVDYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uVGltZVRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5iYWNrQnV0dG9uQ29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMWVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG59XHJcblxyXG4jaHVtaWRpdHlJY29uIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy93ZWF0aGVySWNvbnMvaHVtaWRpdHkuc3ZnJyk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forecast-day/forecast-day.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forecast-day/forecast-day.component.ts ***!
  \********************************************************/
/*! exports provided: ForecastDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastDayComponent", function() { return ForecastDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get-weather-data.service */ "./src/app/get-weather-data.service.ts");





let ForecastDayComponent = class ForecastDayComponent {
    constructor(activatedRoute, navigationService, weatherService) {
        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
        this.weatherService = weatherService;
        this.applicatonProcessing = false;
        this.displayData = [];
    }
    ngOnInit() {
        if (this.navigationService.getBackground() == undefined) {
            this.navigationService.routeHome();
        }
        else {
            this.applicatonProcessing = true;
            this.backgroundUrl = this.navigationService.getBackground();
            this.reqTime = +this.activatedRoute.snapshot.paramMap.get("time");
            this.weatherService.getDetailForecastWeather(this.reqTime);
        }
        //Subscription
        this.processingSub = this.weatherService.detailForecastReq.subscribe(weatherRes => {
            this.detailedForecastResponse = weatherRes;
            this.getDetailedForecast();
            this.applicatonProcessing = false;
        });
    }
    ngOnDestroy() {
        this.processingSub.unsubscribe();
    }
    getDetailedForecast() {
        for (let i = 0; i < this.detailedForecastResponse.hourly.data.length; i++) {
            this.displayData.push({
                date: new Date(+(this.detailedForecastResponse.hourly.data[i].time) * 1000),
                degree: Math.floor(this.detailedForecastResponse.hourly.data[i].temperature),
                city: null,
                country: null,
                humidity: this.detailedForecastResponse.hourly.data[i].humidity,
                shortDesc: this.detailedForecastResponse.hourly.data[i].summary,
                iconString: this.detailedForecastResponse.hourly.data[i].icon,
                windSpeed: this.detailedForecastResponse.hourly.data[i].windSpeed,
            });
        }
    }
    getTime(date) {
        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        if (hours.length == 1)
            hours = "0" + hours;
        if (minutes.length == 1)
            minutes = "0" + minutes;
        return hours + ':' + minutes;
    }
    navigateHome() {
        this.navigationService.routeHome();
    }
};
ForecastDayComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
    { type: _get_weather_data_service__WEBPACK_IMPORTED_MODULE_4__["GetWeatherDataService"] }
];
ForecastDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forecast-day',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forecast-day.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-day/forecast-day.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forecast-day.component.css */ "./src/app/forecast-day/forecast-day.component.css")).default]
    })
], ForecastDayComponent);



/***/ }),

/***/ "./src/app/get-weather-data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/get-weather-data.service.ts ***!
  \*********************************************/
/*! exports provided: GetWeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWeatherDataService", function() { return GetWeatherDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





let GetWeatherDataService = class GetWeatherDataService {
    constructor(http) {
        this.http = http;
        this.proxy = "https://cors-anywhere.herokuapp.com/";
        this.currentCityAndCountry = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.proccessedReq = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.forecastReq = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.detailForecastReq = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.positionCode = null;
        this.positionGeometry = null;
        this.GOOGLE_API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].GOOGLE_API_KEY;
        this.DARKSKY_API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].DARKSKY_API_KEY;
        this.googleReverseGeocodingApo = 'https://maps.googleapis.com/maps/api/geocode/json';
    }
    getCurrentWeather() {
        this.getCurrentLocation().then(position => {
            this.getLocationInformation(position).then(position => {
                if (position.status == 'OK') {
                    this.positionCode = position.plus_code.compound_code;
                    this.positionGeometry = position.results[0].geometry.location;
                }
                this.currentCityAndCountry.next(this.positionCode);
                this.getWeatherInformation(this.positionGeometry, 'minutely,daily,flags,alerts').then(weatherData => {
                    this.processWeather(weatherData);
                });
            });
        });
    }
    getForecastWeather() {
        this.getWeatherInformation(this.positionGeometry, 'currently,minutely,hourly,flags,alerts').then(weatherData => {
            this.processForecast(weatherData);
        });
    }
    getDetailForecastWeather(date) {
        this.getWeatherInformation(this.positionGeometry, 'currently,minutely,daily,flags,alerts', date).then(weatherData => {
            this.processDetailForecast(weatherData);
        });
    }
    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, err => {
                reject(err);
            });
        });
    }
    getLocationInformation(position) {
        this.googleReverseGeocodingApo += `?latlng=${position.lat},${position.lng}&key=${this.GOOGLE_API_KEY}`;
        return new Promise((resolve, reject) => {
            this.http.get(this.googleReverseGeocodingApo).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    getWeatherInformation(position, excludedInReq, time) {
        let reqUrl = ""
            + this.proxy
            + `https://api.darksky.net/forecast/${this.DARKSKY_API_KEY}/`
            + `${position.lat},${position.lng}`;
        if (time) {
            reqUrl += ',' + time;
        }
        reqUrl += `?units=si&exclude=[${excludedInReq}]`;
        return new Promise((resolve, reject) => {
            this.http.get(reqUrl).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    processWeather(weatherData) {
        this.proccessedReq.next(weatherData);
    }
    processForecast(weatherData) {
        this.forecastReq.next(weatherData);
    }
    processDetailForecast(weatherData) {
        this.detailForecastReq.next(weatherData);
    }
    fahrenheitToCelsius(degInFahrenheit) {
        return ((degInFahrenheit - 32) * 5) / 9;
    }
    kelvinToCelsius(degInKelvin) {
        return degInKelvin - 273.15;
    }
};
GetWeatherDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetWeatherDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetWeatherDataService);



/***/ }),

/***/ "./src/app/multiple-days/multiple-days.component.css":
/*!***********************************************************!*\
  !*** ./src/app/multiple-days/multiple-days.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    height: 100%;\r\n}\r\n\r\n.forecastElement {\r\n    border: 2px solid white;\r\n    border-radius: 1em;\r\n\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.date, .degree {\r\n    font-weight: 200;\r\n}\r\n\r\n.date {\r\n    font-size: 1.5em;\r\n    margin-top: 0.25em;\r\n    margin-bottom: -0.5em;\r\n}\r\n\r\n.degree {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.logo {\r\n    height: 2em;\r\n    \r\n    background-repeat: no-repeat !important;\r\n    background-size: contain !important;\r\n    background-position: center !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGUtZGF5cy9tdWx0aXBsZS1kYXlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7SUFFbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGUtZGF5cy9tdWx0aXBsZS1kYXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcmVjYXN0RWxlbWVudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5kYXRlLCAuZGVncmVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41ZW07XHJcbn1cclxuXHJcbi5kZWdyZWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/multiple-days/multiple-days.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/multiple-days/multiple-days.component.ts ***!
  \**********************************************************/
/*! exports provided: MultipleDaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleDaysComponent", function() { return MultipleDaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
/* harmony import */ var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-weather-data.service */ "./src/app/get-weather-data.service.ts");




let MultipleDaysComponent = class MultipleDaysComponent {
    constructor(navigationService, weatherService) {
        this.navigationService = navigationService;
        this.weatherService = weatherService;
        this.applicatonProcessing = false;
        this.forecastDisplayData = [];
    }
    ngOnInit() {
        if (this.navigationService.getBackground() == undefined) {
            this.navigationService.routeHome();
        }
        else {
            this.applicatonProcessing = true;
            this.backgroundUrl = this.navigationService.getBackground();
            this.weatherService.getForecastWeather();
        }
        // Subscription
        this.processingSub = this.weatherService.forecastReq.subscribe(weatherRes => {
            this.forecastResponse = weatherRes;
            this.getForecast();
            this.applicatonProcessing = false;
        });
        this.navigationService.openSnackBar('click on day for detailed forecast');
    }
    ngOnDestroy() {
        this.processingSub.unsubscribe();
    }
    getForecast() {
        for (let i = 0; i < 6; i++) {
            this.forecastDisplayData[i] = {
                date: this.forecastResponse.daily.data[i].time,
                dateString: this.getDayString(this.forecastResponse.daily.data[i].time),
                temperatureHigh: Math.floor(this.forecastResponse.daily.data[i].temperatureHigh),
                icon: 'url(../../../../assets/weatherIcons/' + this.forecastResponse.daily.data[i].icon + '.svg',
                temperatureLow: Math.floor(this.forecastResponse.daily.data[i].temperatureLow),
            };
        }
    }
    panEvent($event) {
        this.navigationService.handlePanEvent($event.direction, null, null);
    }
    getDayString(date) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let localDate = new Date(+date * 1000);
        let day = days[localDate.getDay()];
        let dateNum = (localDate.getDate()).toString();
        let dateAffix = '';
        let dateSuffix = 'th';
        //affix 
        if (dateNum.length == 1)
            dateAffix = '0';
        //suffix
        if (dateNum.substring(dateNum.length - 1, dateNum.length) == '1')
            dateSuffix = 'st';
        if (dateNum.substring(dateNum.length - 1, dateNum.length) == '2')
            dateSuffix = 'nd';
        if (dateNum.substring(dateNum.length - 1, dateNum.length) == '3')
            dateSuffix = 'rd';
        return day + ' - ' + dateAffix + dateNum + dateSuffix;
    }
    openDetailedForecast(time) {
        this.navigationService.setBackground(null, null, this.backgroundUrl);
        this.navigationService.routeDetailedForecast(+time);
    }
};
MultipleDaysComponent.ctorParameters = () => [
    { type: _navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
    { type: _get_weather_data_service__WEBPACK_IMPORTED_MODULE_3__["GetWeatherDataService"] }
];
MultipleDaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multiple-days',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multiple-days.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/multiple-days/multiple-days.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multiple-days.component.css */ "./src/app/multiple-days/multiple-days.component.css")).default]
    })
], MultipleDaysComponent);



/***/ }),

/***/ "./src/app/navigation.service.ts":
/*!***************************************!*\
  !*** ./src/app/navigation.service.ts ***!
  \***************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let NavigationService = class NavigationService {
    constructor(router, _snackBar) {
        this.router = router;
        this._snackBar = _snackBar;
        this.directionCounter = 0;
    }
    handlePanEvent(swipeDirection, iconString, backgroundRandNumber) {
        switch (swipeDirection) {
            case 2:
                this.directionCounter++;
                break;
            case 4:
                this.directionCounter--;
                break;
            default:
                break;
        }
        if (this.directionCounter > 5) {
            this.directionCounter = 0;
            this.setBackground(iconString, backgroundRandNumber, null);
            this.router.navigate(['/forecast']);
        }
        else if (this.directionCounter < -5) {
            this.directionCounter = 0;
            this.router.navigate(['/']);
        }
    }
    setBackground(iconString, backgroundRandNumber, fullUrl) {
        if (iconString == null && backgroundRandNumber == null) { // call from home
            this.backgroundUrl = fullUrl;
        }
        else if (fullUrl == null) { // call from detail forecast
            this.backgroundUrl = 'url(../../../../assets/backgrounds/' + iconString + '/' + backgroundRandNumber + '.jpg';
        }
    }
    getBackground() {
        return this.backgroundUrl;
    }
    openSnackBar(message) {
        this._snackBar.open(message, 'Got it', { duration: 3000, panelClass: ['dark-snackbar'] });
    }
    routeHome() {
        this.router.navigate(['/']);
    }
    routeDetailedForecast(time) {
        this.router.navigate([`/forecast/${time}`]);
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigationService);



/***/ }),

/***/ "./src/app/single-day/single-day.component.css":
/*!*****************************************************!*\
  !*** ./src/app/single-day/single-day.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.degreeBig {\r\n    font-size: 10em;\r\n}\r\n\r\n.clockAndDate {\r\n    font-size: 3em;\r\n}\r\n\r\n.cityAndCountry {\r\n    font-size: 3em;\r\n}\r\n\r\n.shortDesc, .humidPercent, .windspeed {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.icon {\r\n    width: 2em;\r\n    height: 2.5em;\r\n\r\n    background-repeat: no-repeat !important;\r\n    background-size: contain !important;\r\n    background-position: center !important;\r\n\r\n    -webkit-transition: 0.5s;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n#humidityIcon {\r\n    background: url('humidity.svg');\r\n}\r\n\r\n#windspeedIcon {\r\n    background: url('windspeed.svg');\r\n}\r\n\r\n.sliderContainer {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 4em;\r\n\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n}\r\n\r\nmat-slider {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLWRheS9zaW5nbGUtZGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7O0lBRWIsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxzQ0FBc0M7O0lBRXRDLHdCQUFnQjs7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0JBQXlEO0FBQzdEOztBQUNBO0lBQ0ksZ0NBQTBEO0FBQzlEOztBQU9BO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXOztJQUVYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtZGF5L3NpbmdsZS1kYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGVncmVlQmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxufVxyXG5cclxuLmNsb2NrQW5kRGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG4uY2l0eUFuZENvdW50cnkge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5zaG9ydERlc2MsIC5odW1pZFBlcmNlbnQsIC53aW5kc3BlZWQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4gXHJcblxyXG4uaWNvbiB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbiNodW1pZGl0eUljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvd2VhdGhlckljb25zL2h1bWlkaXR5LnN2ZycpO1xyXG59XHJcbiN3aW5kc3BlZWRJY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3dlYXRoZXJJY29ucy93aW5kc3BlZWQuc3ZnJyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnNsaWRlckNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNGVtO1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogM2VtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM2VtO1xyXG59XHJcblxyXG5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/single-day/single-day.component.ts":
/*!****************************************************!*\
  !*** ./src/app/single-day/single-day.component.ts ***!
  \****************************************************/
/*! exports provided: SingleDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleDayComponent", function() { return SingleDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-weather-data.service */ "./src/app/get-weather-data.service.ts");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");




let SingleDayComponent = class SingleDayComponent {
    constructor(weatherService, navigationService) {
        this.weatherService = weatherService;
        this.navigationService = navigationService;
        this.applicatonProcessing = false;
    }
    ngOnInit() {
        this.applicatonProcessing = true;
        this.displayData = {
            date: null,
            degree: null,
            city: null,
            country: null,
            humidity: null,
            shortDesc: null,
            iconString: null,
            windSpeed: null,
        };
        this.weatherService.getCurrentWeather();
        this.addressSub = this.weatherService.currentCityAndCountry.subscribe(GeocodingRes => {
            this.city = GeocodingRes.split(' ')[1].replace(',', '');
            this.country = GeocodingRes.split(' ')[2];
            this.processingSub = this.weatherService.proccessedReq.subscribe(weatherRes => {
                this.weatherResponse = weatherRes;
                this.getWeather(0, 'firstCall');
                this.applicatonProcessing = false;
            });
        });
        this.navigationService.openSnackBar('swipe left to access forecast');
    }
    ngOnDestroy() {
        this.addressSub.unsubscribe();
        this.processingSub.unsubscribe();
    }
    getWeather(timestamp, additional) {
        this.displayData = {
            date: new Date(+(this.weatherResponse.hourly.data[timestamp].time) * 1000),
            degree: Math.floor(this.weatherResponse.hourly.data[timestamp].temperature),
            city: this.city,
            country: this.country,
            humidity: this.weatherResponse.hourly.data[timestamp].humidity,
            shortDesc: this.weatherResponse.hourly.data[timestamp].summary,
            iconString: this.weatherResponse.hourly.data[timestamp].icon,
            windSpeed: this.weatherResponse.hourly.data[timestamp].windSpeed,
        };
        this.dateString = this.getDateString();
        this.shortDescIconUrl = 'url(../../../../assets/weatherIcons/' + this.displayData.iconString + '.svg';
        if (additional === 'firstCall') {
            this.backgroundUrl = this.chooseBackground(this.displayData.iconString);
        }
        else {
            clearTimeout(this.backgroundChangeTimer);
            this.backgroundChangeTimer = setTimeout(() => {
                this.backgroundUrl = this.chooseBackground(this.displayData.iconString);
            }, 1500);
        }
    }
    panEvent($event) {
        this.navigationService.handlePanEvent($event.direction, this.displayData.iconString, this.backgroundRandNumber);
    }
    getDateString() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.displayData.date.getHours() + ':' + '00' + ' | ' + this.displayData.date.getDate() + '. ' + months[this.displayData.date.getMonth()];
    }
    chooseBackground(iconString) {
        this.backgroundRandNumber = Math.floor(Math.random() * 5);
        return 'url(../../../../assets/backgrounds/' + iconString + '/' + this.backgroundRandNumber + '.jpg';
    }
};
SingleDayComponent.ctorParameters = () => [
    { type: _get_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["GetWeatherDataService"] },
    { type: _navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] }
];
SingleDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-day',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-day.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-day/single-day.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-day.component.css */ "./src/app/single-day/single-day.component.css")).default]
    })
], SingleDayComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    GOOGLE_API_KEY: 'AIzaSyBeVDt6M48IiC8Xdm-pn-CouhJ5GzOuyNk',
    DARKSKY_API_KEY: '52c6984aa80b6b1fc50d3dd340934b5b',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pcccc\NoDrive\Programming\Projects\finished-to-be\weather-design-v3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map