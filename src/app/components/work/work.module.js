"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var work_1 = require("./work");
var work_container_1 = require("./work-container/work-container");
var visible_date_1 = require("./visible-date/visible-date");
var work_technologie_1 = require("./work-technologie/work-technologie");
var WorkModule = (function () {
    function WorkModule() {
    }
    WorkModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
            ],
            declarations: [
                work_1.WorkComponent,
                work_container_1.WorkContainerComponent,
                visible_date_1.VisibleDateComponent,
                work_technologie_1.WorkTechnologieComponent
            ],
            exports: [
                work_1.WorkComponent,
                work_container_1.WorkContainerComponent,
                visible_date_1.VisibleDateComponent,
                work_technologie_1.WorkTechnologieComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], WorkModule);
    return WorkModule;
}());
exports.WorkModule = WorkModule;
//# sourceMappingURL=work.module.js.map