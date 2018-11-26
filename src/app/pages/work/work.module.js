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
var shared_module_1 = require("./../../core/shared.module");
var work_1 = require("./work");
var work_module_1 = require("./../../components/work/work.module");
var WorkPageModule = (function () {
    function WorkPageModule() {
    }
    WorkPageModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                work_module_1.WorkModule
            ],
            declarations: [
                work_1.WorkPageComponent
            ],
            exports: [
                work_1.WorkPageComponent
            ],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], WorkPageModule);
    return WorkPageModule;
}());
exports.WorkPageModule = WorkPageModule;
//# sourceMappingURL=work.module.js.map