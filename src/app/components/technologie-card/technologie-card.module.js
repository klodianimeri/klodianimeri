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
var technologie_card_1 = require("./technologie-card");
var tc_code_1 = require("./tc-code/tc-code");
var tc_main_1 = require("./tc-main/tc-main");
var tc_box_1 = require("./tc-box/tc-box");
var TechnologieCardModule = (function () {
    function TechnologieCardModule() {
    }
    TechnologieCardModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
            ],
            declarations: [
                technologie_card_1.TechnologieCardComponent,
                tc_code_1.TCCodeComponent,
                tc_main_1.TCMainComponent,
                tc_box_1.TCBoxComponent
            ],
            exports: [
                technologie_card_1.TechnologieCardComponent,
                tc_code_1.TCCodeComponent,
                tc_main_1.TCMainComponent,
                tc_box_1.TCBoxComponent
            ],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], TechnologieCardModule);
    return TechnologieCardModule;
}());
exports.TechnologieCardModule = TechnologieCardModule;
//# sourceMappingURL=technologie-card.module.js.map