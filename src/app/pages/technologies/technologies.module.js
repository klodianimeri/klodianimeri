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
var core_module_1 = require("./../../core/core.module");
var technologies_1 = require("./technologies");
var technologie_card_module_1 = require("./../../components/technologie-card/technologie-card.module");
var TechnologiesPageModule = (function () {
    function TechnologiesPageModule() {
    }
    TechnologiesPageModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                technologie_card_module_1.TechnologieCardModule
            ],
            declarations: [technologies_1.TechnologiesPageComponent],
            exports: [technologies_1.TechnologiesPageComponent],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], TechnologiesPageModule);
    return TechnologiesPageModule;
}());
exports.TechnologiesPageModule = TechnologiesPageModule;
//# sourceMappingURL=technologies.module.js.map