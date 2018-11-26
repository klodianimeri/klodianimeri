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
var WorkTechnologieComponent = (function () {
    function WorkTechnologieComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    WorkTechnologieComponent.prototype.ngOnInit = function () {
    };
    WorkTechnologieComponent.prototype.ngAfterContentInit = function () {
    };
    WorkTechnologieComponent.prototype.show = function () {
        this._renderer.setElementClass(this._element.nativeElement, "visible", true);
    };
    WorkTechnologieComponent.prototype.hide = function () {
        this._renderer.setElementClass(this._element.nativeElement, "visible", false);
    };
    WorkTechnologieComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'work-technologie',
            templateUrl: "./work-technologie.html",
            styleUrls: ["./work-technologie.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WorkTechnologieComponent);
    return WorkTechnologieComponent;
}());
exports.WorkTechnologieComponent = WorkTechnologieComponent;
//# sourceMappingURL=work-technologie.js.map