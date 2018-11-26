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
var VisibleDateComponent = (function () {
    function VisibleDateComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    VisibleDateComponent.prototype.ngOnInit = function () {
    };
    VisibleDateComponent.prototype.ngAfterContentInit = function () {
    };
    VisibleDateComponent.prototype.setStyleTop = function (top) {
        this._renderer.setElementStyle(this._element.nativeElement, "top", top.toString() + "px");
    };
    VisibleDateComponent.prototype.setVisualDate = function (date) {
        this._visualDate = date;
    };
    VisibleDateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'visible-date',
            templateUrl: "./visible-date.html",
            styleUrls: ["./visible-date.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], VisibleDateComponent);
    return VisibleDateComponent;
}());
exports.VisibleDateComponent = VisibleDateComponent;
//# sourceMappingURL=visible-date.js.map