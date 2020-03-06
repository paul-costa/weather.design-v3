function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"backgroundImage\" [ngStyle]=\"{background: backgroundUrl}\" *ngIf=\"!applicationProcessing\"></div> -->\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-day/forecast-day.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-day/forecast-day.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForecastDayForecastDayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"backgroundImage\" [ngStyle]=\"{background: backgroundUrl}\" *ngIf=\"!applicatonProcessing\"></div>\n\n<div class=\"container mt-5\" *ngIf=\"applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <mat-spinner color=\"accent\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"container-fluid forecastContainer\">\n    <div class=\"row timeBlock\" *ngFor=\"let dailyData of displayData\">\n        <div class=\"col-lg-3 col-md-4 col-sm-6 col-6 timeCard\">\n            <div class=\"row\">\n                <div class=\"col-4 text-right my-auto TimeText\">{{getTime(dailyData.date)}}</div>\n                <div class=\"col-8\">\n                    <div class=\"row\"><div class=\"col-12 text-right\">{{ dailyData.degree }} °C</div></div>\n                    <div class=\"row\"><div class=\"col-12 text-right\">{{ dailyData.humidity*100 | number: '2.0-0' }}% HUM</div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"backButtonContainer\">\n  <button mat-raised-button (click)=\"navigateHome()\">Go Home</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/multiple-days/multiple-days.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multiple-days/multiple-days.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMultipleDaysMultipleDaysComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n    class=\"backgroundImage\"\n    [ngStyle]=\"{background: backgroundUrl}\"\n    *ngIf=\"!applicatonProcessing\"\n    (pan)=\"panEvent($event)\"></div>\n\n<div class=\"container mt-5\" *ngIf=\"applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <mat-spinner color=\"accent\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n<div class=\"container bigContainer\" (pan)=\"panEvent($event)\">\n    <div class=\"row elementsRow\">\n        <div\n            class=\"col-xl-2 col-lg-4 col-6 mb-lg-5 mb-md-3 mb-3 text-center\"\n            style=\"padding-left: 1.5em; padding-right: 1.5em;\"\n            *ngFor=\"let forecastData of forecastDisplayData\"\n        >\n            <div class=\"row forecastElement\" (click)=\"openDetailedForecast(forecastData.date)\">\n                <div class=\"col-12 text-center date\">\n                    {{forecastData.dateString}}\n                </div>\n                <div class=\"col-12 horline\">\n                    <hr>\n                </div>\n\n                <div class=\"col-12 text-center degree\">\n                    {{forecastData.temperatureHigh}}°C\n                </div>\n                <div class=\"col-12 text-center logo\" [ngStyle]=\"{background: forecastData.icon}\"></div>\n                <div class=\"col-12 text-center degree\">\n                    {{forecastData.temperatureLow}}°C\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/single-day/single-day.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-day/single-day.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSingleDaySingleDayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"backgroundImage\" [ngStyle]=\"{background: backgroundUrl}\" *ngIf=\"!applicatonProcessing\"></div>\n\n<div class=\"overlay\" *ngIf=\"!applicatonProcessing\" (pan)=\"panEvent($event)\"></div>\n\n\n<div class=\"container mt-5\" *ngIf=\"applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <mat-spinner color=\"accent\"></mat-spinner>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container bigContainer\" *ngIf=\"!applicatonProcessing\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center degreeBig\">\n            {{ displayData.degree }}°C\n        </div>\n    </div>\n\n    <div class=\"row\" style=\"margin-top: -2em;\">\n        <div class=\"col-12 text-center clockAndDate\">\n            {{ dateString }}\n        </div>\n\n        <div class=\"col-12 text-center cityAndCountry\">\n            {{ displayData.city }}, {{ displayData.country }}\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-5 offset-3 text-right shortDesc\">{{ displayData.shortDesc }}</div>\n                <div class=\"col-1 text-center icon\" id=\"shortDescIcon\" [ngStyle]=\"{background: shortDescIconUrl}\"></div>\n            </div>\n\n            <div class=\"row mt-2\">\n                <div class=\"col-5 offset-3 text-right humidPercent\">{{ displayData.humidity }}%</div>\n                <div class=\"col-1 text-center icon\" id=\"humidityIcon\"></div>\n            </div>\n\n            <div class=\"row mt-2\">\n                <div class=\"col-5 offset-3 text-right windspeed\">{{ displayData.windSpeed }}kph</div>\n                <div class=\"col-1 text-center icon\" id=\"windspeedIcon\"></div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"sliderContainer\" *ngIf=\"!applicatonProcessing\">\n    <mat-slider min=\"0\" max=\"48\" value=\"0\" #slider (input)=\"getWeather(slider.value)\"></mat-slider>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./single-day/single-day.component */
    "./src/app/single-day/single-day.component.ts");
    /* harmony import */


    var _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./multiple-days/multiple-days.component */
    "./src/app/multiple-days/multiple-days.component.ts");
    /* harmony import */


    var _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forecast-day/forecast-day.component */
    "./src/app/forecast-day/forecast-day.component.ts");

    var routes = [{
      path: '',
      component: _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_3__["SingleDayComponent"]
    }, {
      path: 'forecast',
      component: _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_4__["MultipleDaysComponent"]
    }, {
      path: 'forecast/:time',
      component: _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_5__["ForecastDayComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'weather-design-v2';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./single-day/single-day.component */
    "./src/app/single-day/single-day.component.ts");
    /* harmony import */


    var _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./multiple-days/multiple-days.component */
    "./src/app/multiple-days/multiple-days.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./get-weather-data.service */
    "./src/app/get-weather-data.service.ts");
    /* harmony import */


    var _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./forecast-day/forecast-day.component */
    "./src/app/forecast-day/forecast-day.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _single_day_single_day_component__WEBPACK_IMPORTED_MODULE_10__["SingleDayComponent"], _multiple_days_multiple_days_component__WEBPACK_IMPORTED_MODULE_11__["MultipleDaysComponent"], _forecast_day_forecast_day_component__WEBPACK_IMPORTED_MODULE_14__["ForecastDayComponent"]],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]],
      providers: [_get_weather_data_service__WEBPACK_IMPORTED_MODULE_13__["GetWeatherDataService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/forecast-day/forecast-day.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/forecast-day/forecast-day.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForecastDayForecastDayComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forecastContainer {\r\n  padding: 2.5em;\r\n}\r\n\r\n.timeBlock {\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.timeCard {\r\n    border: 1px solid white;\r\n    border-radius: 1em;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.TimeText {\r\n    font-size: 1.25em;\r\n}\r\n\r\n.backButtonContainer {\r\n    position: fixed;\r\n    bottom: 4em;\r\n    right: 4em;\r\n}\r\n\r\n#humidityIcon {\r\n    height: 16px;\r\n    margin: auto 0;\r\n\r\n    background-repeat: no-repeat !important;\r\n    background-size: contain !important;\r\n    background-position: center !important;\r\n\r\n    overflow: hidden;\r\n\r\n    background: url('humidity.svg');\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZWNhc3QtZGF5L2ZvcmVjYXN0LWRheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7O0lBRWQsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxzQ0FBc0M7O0lBRXRDLGdCQUFnQjs7SUFFaEIsK0JBQXlEO0FBQzdEIiwiZmlsZSI6InNyYy9hcHAvZm9yZWNhc3QtZGF5L2ZvcmVjYXN0LWRheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmVjYXN0Q29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyLjVlbTtcclxufVxyXG5cclxuLnRpbWVCbG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi50aW1lQ2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLlRpbWVUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcblxyXG4uYmFja0J1dHRvbkNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDRlbTtcclxuICAgIHJpZ2h0OiA0ZW07XHJcbn1cclxuXHJcbiNodW1pZGl0eUljb24ge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3dlYXRoZXJJY29ucy9odW1pZGl0eS5zdmcnKTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/forecast-day/forecast-day.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/forecast-day/forecast-day.component.ts ***!
    \********************************************************/

  /*! exports provided: ForecastDayComponent */

  /***/
  function srcAppForecastDayForecastDayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForecastDayComponent", function () {
      return ForecastDayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navigation.service */
    "./src/app/navigation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../get-weather-data.service */
    "./src/app/get-weather-data.service.ts");

    var ForecastDayComponent =
    /*#__PURE__*/
    function () {
      function ForecastDayComponent(activatedRoute, navigationService, weatherService) {
        _classCallCheck(this, ForecastDayComponent);

        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
        this.weatherService = weatherService;
        this.applicatonProcessing = false;
        this.displayData = [];
      }

      _createClass(ForecastDayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.navigationService.getBackground() == undefined) {
            this.navigationService.routeHome();
          } else {
            this.applicatonProcessing = true;
            this.backgroundUrl = this.navigationService.getBackground();
            this.reqTime = +this.activatedRoute.snapshot.paramMap.get("time");
            this.weatherService.getDetailForecastWeather(this.reqTime);
          } //Subscription


          this.processingSub = this.weatherService.detailForecastReq.subscribe(function (weatherRes) {
            _this.detailedForecastResponse = weatherRes;

            _this.getDetailedForecast();

            _this.applicatonProcessing = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.processingSub.unsubscribe();
        }
      }, {
        key: "getDetailedForecast",
        value: function getDetailedForecast() {
          for (var i = 0; i < this.detailedForecastResponse.hourly.data.length; i++) {
            this.displayData.push({
              date: new Date(+this.detailedForecastResponse.hourly.data[i].time * 1000),
              degree: Math.floor(this.detailedForecastResponse.hourly.data[i].temperature),
              city: null,
              country: null,
              humidity: this.detailedForecastResponse.hourly.data[i].humidity,
              shortDesc: this.detailedForecastResponse.hourly.data[i].summary,
              iconString: this.detailedForecastResponse.hourly.data[i].icon,
              windSpeed: this.detailedForecastResponse.hourly.data[i].windSpeed
            });
          }
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          var hours = date.getHours().toString();
          var minutes = date.getMinutes().toString();
          if (hours.length == 1) hours = "0" + hours;
          if (minutes.length == 1) minutes = "0" + minutes;
          return hours + ':' + minutes;
        }
      }, {
        key: "navigateHome",
        value: function navigateHome() {
          this.navigationService.routeHome();
        }
      }]);

      return ForecastDayComponent;
    }();

    ForecastDayComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
      }, {
        type: _get_weather_data_service__WEBPACK_IMPORTED_MODULE_4__["GetWeatherDataService"]
      }];
    };

    ForecastDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forecast-day',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forecast-day.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forecast-day/forecast-day.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forecast-day.component.css */
      "./src/app/forecast-day/forecast-day.component.css")).default]
    })], ForecastDayComponent);
    /***/
  },

  /***/
  "./src/app/get-weather-data.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/get-weather-data.service.ts ***!
    \*********************************************/

  /*! exports provided: GetWeatherDataService */

  /***/
  function srcAppGetWeatherDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetWeatherDataService", function () {
      return GetWeatherDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var GetWeatherDataService =
    /*#__PURE__*/
    function () {
      function GetWeatherDataService(http) {
        _classCallCheck(this, GetWeatherDataService);

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

      _createClass(GetWeatherDataService, [{
        key: "getCurrentWeather",
        value: function getCurrentWeather() {
          var _this2 = this;

          this.getCurrentLocation().then(function (position) {
            _this2.getLocationInformation(position).then(function (position) {
              if (position.status == 'OK') {
                _this2.positionCode = position.plus_code.compound_code;
                _this2.positionGeometry = position.results[0].geometry.location;
              }

              _this2.currentCityAndCountry.next(_this2.positionCode);

              _this2.getWeatherInformation(_this2.positionGeometry, 'minutely,daily,flags,alerts').then(function (weatherData) {
                _this2.processWeather(weatherData);
              });
            });
          });
        }
      }, {
        key: "getForecastWeather",
        value: function getForecastWeather() {
          var _this3 = this;

          this.getWeatherInformation(this.positionGeometry, 'currently,minutely,hourly,flags,alerts').then(function (weatherData) {
            _this3.processForecast(weatherData);
          });
        }
      }, {
        key: "getDetailForecastWeather",
        value: function getDetailForecastWeather(date) {
          var _this4 = this;

          this.getWeatherInformation(this.positionGeometry, 'currently,minutely,daily,flags,alerts', date).then(function (weatherData) {
            _this4.processDetailForecast(weatherData);
          });
        }
      }, {
        key: "getCurrentLocation",
        value: function getCurrentLocation() {
          return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getLocationInformation",
        value: function getLocationInformation(position) {
          var _this5 = this;

          this.googleReverseGeocodingApo += "?latlng=".concat(position.lat, ",").concat(position.lng, "&key=").concat(this.GOOGLE_API_KEY);
          return new Promise(function (resolve, reject) {
            _this5.http.get(_this5.googleReverseGeocodingApo).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getWeatherInformation",
        value: function getWeatherInformation(position, excludedInReq, time) {
          var _this6 = this;

          var reqUrl = "" + this.proxy + "https://api.darksky.net/forecast/".concat(this.DARKSKY_API_KEY, "/") + "".concat(position.lat, ",").concat(position.lng);

          if (time) {
            reqUrl += ',' + time;
          }

          reqUrl += "?units=si&exclude=[".concat(excludedInReq, "]");
          return new Promise(function (resolve, reject) {
            _this6.http.get(reqUrl).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "processWeather",
        value: function processWeather(weatherData) {
          this.proccessedReq.next(weatherData);
        }
      }, {
        key: "processForecast",
        value: function processForecast(weatherData) {
          this.forecastReq.next(weatherData);
        }
      }, {
        key: "processDetailForecast",
        value: function processDetailForecast(weatherData) {
          this.detailForecastReq.next(weatherData);
        }
      }, {
        key: "fahrenheitToCelsius",
        value: function fahrenheitToCelsius(degInFahrenheit) {
          return (degInFahrenheit - 32) * 5 / 9;
        }
      }, {
        key: "kelvinToCelsius",
        value: function kelvinToCelsius(degInKelvin) {
          return degInKelvin - 273.15;
        }
      }]);

      return GetWeatherDataService;
    }();

    GetWeatherDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GetWeatherDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GetWeatherDataService);
    /***/
  },

  /***/
  "./src/app/multiple-days/multiple-days.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/multiple-days/multiple-days.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMultipleDaysMultipleDaysComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".elementsRow {\r\n  width: 95%;\r\n  margin-left: 2.5%;\r\n  margin-right: 2.5%;\r\n}\r\n\r\n\r\n.forecastElement {\r\n    border: 2px solid white;\r\n    border-radius: 1em;\r\n\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n\r\n.date, .degree {\r\n    font-weight: 200;\r\n    height: 1.25em;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.date {\r\n    font-size: 1.25em;\r\n    margin-top: 0.25em;\r\n    margin-bottom: -0.5em;\r\n}\r\n\r\n\r\n.degree {\r\n    font-size: 1.25em;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n\r\n.logo {\r\n    height: 2em;\r\n\r\n    background-repeat: no-repeat !important;\r\n    background-size: contain !important;\r\n    background-position: center !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGUtZGF5cy9tdWx0aXBsZS1kYXlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCOztJQUVsQixvQ0FBb0M7QUFDeEM7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxXQUFXOztJQUVYLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGUtZGF5cy9tdWx0aXBsZS1kYXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWxlbWVudHNSb3cge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xyXG59XHJcblxyXG5cclxuLmZvcmVjYXN0RWxlbWVudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5kYXRlLCAuZGVncmVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBoZWlnaHQ6IDEuMjVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNWVtO1xyXG59XHJcblxyXG4uZGVncmVlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGhlaWdodDogMmVtO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/multiple-days/multiple-days.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/multiple-days/multiple-days.component.ts ***!
    \**********************************************************/

  /*! exports provided: MultipleDaysComponent */

  /***/
  function srcAppMultipleDaysMultipleDaysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultipleDaysComponent", function () {
      return MultipleDaysComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navigation.service */
    "./src/app/navigation.service.ts");
    /* harmony import */


    var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../get-weather-data.service */
    "./src/app/get-weather-data.service.ts");

    var MultipleDaysComponent =
    /*#__PURE__*/
    function () {
      function MultipleDaysComponent(navigationService, weatherService) {
        _classCallCheck(this, MultipleDaysComponent);

        this.navigationService = navigationService;
        this.weatherService = weatherService;
        this.applicatonProcessing = false;
        this.forecastDisplayData = [];
      }

      _createClass(MultipleDaysComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (this.navigationService.getBackground() == undefined) {
            this.navigationService.routeHome();
          } else {
            this.applicatonProcessing = true;
            this.backgroundUrl = this.navigationService.getBackground();
            this.weatherService.getForecastWeather();
          } // Subscription


          this.processingSub = this.weatherService.forecastReq.subscribe(function (weatherRes) {
            _this7.forecastResponse = weatherRes;

            _this7.getForecast();

            _this7.applicatonProcessing = false;
          });
          this.navigationService.openSnackBar('click on day for detailed forecast');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.processingSub.unsubscribe();
        }
      }, {
        key: "getForecast",
        value: function getForecast() {
          for (var i = 0; i < 6; i++) {
            this.forecastDisplayData[i] = {
              date: this.forecastResponse.daily.data[i].time,
              dateString: this.getDayString(this.forecastResponse.daily.data[i].time),
              temperatureHigh: Math.floor(this.forecastResponse.daily.data[i].temperatureHigh),
              icon: 'url(../../../../assets/weatherIcons/' + this.forecastResponse.daily.data[i].icon + '.svg',
              temperatureLow: Math.floor(this.forecastResponse.daily.data[i].temperatureLow)
            };
          }
        }
      }, {
        key: "panEvent",
        value: function panEvent($event) {
          this.navigationService.handlePanEvent($event.direction, null, null);
        }
      }, {
        key: "getDayString",
        value: function getDayString(date) {
          var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          var localDate = new Date(+date * 1000);
          var day = days[localDate.getDay()];
          var dateNum = localDate.getDate().toString();
          var dateAffix = '';
          var dateSuffix = 'th'; //affix 

          if (dateNum.length == 1) dateAffix = '0'; //suffix

          if (dateNum.substring(dateNum.length - 1, dateNum.length) == '1') dateSuffix = 'st';
          if (dateNum.substring(dateNum.length - 1, dateNum.length) == '2') dateSuffix = 'nd';
          if (dateNum.substring(dateNum.length - 1, dateNum.length) == '3') dateSuffix = 'rd';
          return day + ' - ' + dateAffix + dateNum + dateSuffix;
        }
      }, {
        key: "openDetailedForecast",
        value: function openDetailedForecast(time) {
          this.navigationService.setBackground(null, null, this.backgroundUrl);
          this.navigationService.routeDetailedForecast(+time);
        }
      }]);

      return MultipleDaysComponent;
    }();

    MultipleDaysComponent.ctorParameters = function () {
      return [{
        type: _navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
      }, {
        type: _get_weather_data_service__WEBPACK_IMPORTED_MODULE_3__["GetWeatherDataService"]
      }];
    };

    MultipleDaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multiple-days',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multiple-days.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/multiple-days/multiple-days.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multiple-days.component.css */
      "./src/app/multiple-days/multiple-days.component.css")).default]
    })], MultipleDaysComponent);
    /***/
  },

  /***/
  "./src/app/navigation.service.ts":
  /*!***************************************!*\
    !*** ./src/app/navigation.service.ts ***!
    \***************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var NavigationService =
    /*#__PURE__*/
    function () {
      function NavigationService(router, _snackBar) {
        _classCallCheck(this, NavigationService);

        this.router = router;
        this._snackBar = _snackBar;
        this.directionCounter = 0;
      }

      _createClass(NavigationService, [{
        key: "handlePanEvent",
        value: function handlePanEvent(swipeDirection, iconString, backgroundRandNumber) {
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
          } else if (this.directionCounter < -5) {
            this.directionCounter = 0;
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "setBackground",
        value: function setBackground(iconString, backgroundRandNumber, fullUrl) {
          if (iconString == null && backgroundRandNumber == null) {
            // call from home
            this.backgroundUrl = fullUrl;
          } else if (fullUrl == null) {
            // call from detail forecast
            this.backgroundUrl = 'url(../../../../assets/backgrounds/' + iconString + '/' + backgroundRandNumber + '.jpg';
          }
        }
      }, {
        key: "getBackground",
        value: function getBackground() {
          return this.backgroundUrl;
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message) {
          this._snackBar.open(message, 'Got it', {
            duration: 3000,
            panelClass: ['dark-snackbar']
          });
        }
      }, {
        key: "routeHome",
        value: function routeHome() {
          this.router.navigate(['/']);
        }
      }, {
        key: "routeDetailedForecast",
        value: function routeDetailedForecast(time) {
          this.router.navigate(["/forecast/".concat(time)]);
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavigationService);
    /***/
  },

  /***/
  "./src/app/single-day/single-day.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/single-day/single-day.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSingleDaySingleDayComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".degreeBig {\r\n    font-size: 6em;\r\n}\r\n\r\n.clockAndDate {\r\n    font-size: 2em;\r\n}\r\n\r\n.cityAndCountry {\r\n    font-size: 2em;\r\n}\r\n\r\n.shortDesc, .humidPercent, .windspeed {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.icon {\r\n    width: 2em;\r\n    height: 2.5em;\r\n\r\n    background-repeat: no-repeat !important;\r\n    background-size: contain !important;\r\n    background-position: center !important;\r\n\r\n    -webkit-transition: 0.5s;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n#humidityIcon {\r\n    background: url('humidity.svg');\r\n}\r\n\r\n#windspeedIcon {\r\n    background: url('windspeed.svg');\r\n}\r\n\r\n.sliderContainer {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 4em;\r\n}\r\n\r\nmat-slider {\r\n  margin-left: 10%;\r\n  width: 80%;\r\n}\r\n\r\n::ng-deep .mat-slider-thumb {\r\n  -webkit-transform: scale(1.25) !important;\r\n          transform: scale(1.25) !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLWRheS9zaW5nbGUtZGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTs7SUFFYix1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLHNDQUFzQzs7SUFFdEMsd0JBQWdCOztJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBeUQ7QUFDN0Q7O0FBQ0E7SUFDSSxnQ0FBMEQ7QUFDOUQ7O0FBT0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLWRheS9zaW5nbGUtZGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVncmVlQmlnIHtcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG59XHJcblxyXG4uY2xvY2tBbmREYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5jaXR5QW5kQ291bnRyeSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLnNob3J0RGVzYywgLmh1bWlkUGVyY2VudCwgLndpbmRzcGVlZCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5cclxuLmljb24ge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4jaHVtaWRpdHlJY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3dlYXRoZXJJY29ucy9odW1pZGl0eS5zdmcnKTtcclxufVxyXG4jd2luZHNwZWVkSWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy93ZWF0aGVySWNvbnMvd2luZHNwZWVkLnN2ZycpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zbGlkZXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDRlbTtcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/single-day/single-day.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/single-day/single-day.component.ts ***!
    \****************************************************/

  /*! exports provided: SingleDayComponent */

  /***/
  function srcAppSingleDaySingleDayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleDayComponent", function () {
      return SingleDayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _get_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../get-weather-data.service */
    "./src/app/get-weather-data.service.ts");
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navigation.service */
    "./src/app/navigation.service.ts");

    var SingleDayComponent =
    /*#__PURE__*/
    function () {
      function SingleDayComponent(weatherService, navigationService) {
        _classCallCheck(this, SingleDayComponent);

        this.weatherService = weatherService;
        this.navigationService = navigationService;
        this.applicatonProcessing = false;
      }

      _createClass(SingleDayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.applicatonProcessing = true;
          this.displayData = {
            date: null,
            degree: null,
            city: null,
            country: null,
            humidity: null,
            shortDesc: null,
            iconString: null,
            windSpeed: null
          };
          this.weatherService.getCurrentWeather();
          this.addressSub = this.weatherService.currentCityAndCountry.subscribe(function (GeocodingRes) {
            _this8.city = GeocodingRes.split(' ')[1].replace(',', '');
            _this8.country = GeocodingRes.split(' ')[2];
            _this8.processingSub = _this8.weatherService.proccessedReq.subscribe(function (weatherRes) {
              _this8.weatherResponse = weatherRes;

              _this8.getWeather(0, 'firstCall');

              _this8.applicatonProcessing = false;
            });
          });
          this.navigationService.openSnackBar('swipe left to access forecast');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.addressSub.unsubscribe();
          this.processingSub.unsubscribe();
        }
      }, {
        key: "getWeather",
        value: function getWeather(timestamp, additional) {
          var _this9 = this;

          this.displayData = {
            date: new Date(+this.weatherResponse.hourly.data[timestamp].time * 1000),
            degree: Math.floor(this.weatherResponse.hourly.data[timestamp].temperature),
            city: this.city,
            country: this.country,
            humidity: this.weatherResponse.hourly.data[timestamp].humidity,
            shortDesc: this.weatherResponse.hourly.data[timestamp].summary,
            iconString: this.weatherResponse.hourly.data[timestamp].icon,
            windSpeed: this.weatherResponse.hourly.data[timestamp].windSpeed
          };
          this.dateString = this.getDateString();
          this.shortDescIconUrl = 'url(../../../../assets/weatherIcons/' + this.displayData.iconString + '.svg';

          if (additional === 'firstCall') {
            this.backgroundUrl = this.chooseBackground(this.displayData.iconString);
          } else {
            clearTimeout(this.backgroundChangeTimer);
            this.backgroundChangeTimer = setTimeout(function () {
              _this9.backgroundUrl = _this9.chooseBackground(_this9.displayData.iconString);
            }, 1500);
          }
        }
      }, {
        key: "panEvent",
        value: function panEvent($event) {
          this.navigationService.handlePanEvent($event.direction, this.displayData.iconString, this.backgroundRandNumber);
        }
      }, {
        key: "getDateString",
        value: function getDateString() {
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return this.displayData.date.getHours() + ':' + '00' + ' | ' + this.displayData.date.getDate() + '. ' + months[this.displayData.date.getMonth()];
        }
      }, {
        key: "chooseBackground",
        value: function chooseBackground(iconString) {
          this.backgroundRandNumber = Math.floor(Math.random() * 5);
          return 'url(../../../../assets/backgrounds/' + iconString + '/' + this.backgroundRandNumber + '.jpg';
        }
      }]);

      return SingleDayComponent;
    }();

    SingleDayComponent.ctorParameters = function () {
      return [{
        type: _get_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["GetWeatherDataService"]
      }, {
        type: _navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
      }];
    };

    SingleDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-day',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./single-day.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/single-day/single-day.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./single-day.component.css */
      "./src/app/single-day/single-day.component.css")).default]
    })], SingleDayComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      GOOGLE_API_KEY: 'AIzaSyBeVDt6M48IiC8Xdm-pn-CouhJ5GzOuyNk',
      DARKSKY_API_KEY: '52c6984aa80b6b1fc50d3dd340934b5b'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\pcccc\NoDrive\Programming\Projects\finished-to-be\weather-design-v3\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map