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
var Rx_1 = require("rxjs/Rx");
var TCBoxComponent = (function () {
    function TCBoxComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    TCBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._timeInterval = Rx_1.Observable
            .interval(3400 /* ms */)
            .timeInterval()
            .subscribe(function (x) {
            _this.animate();
        });
    };
    TCBoxComponent.prototype.animate = function () {
        var _this = this;
        var animateClasses = ["top-left-animate", "top-right-animate", "bottom-left-animate", "bottom-right-animate"];
        animateClasses.forEach(function (animateClass) {
            _this._renderer.setElementClass(_this._element.nativeElement, animateClass, false);
        });
        var animationClass = animateClasses[this.getRandomIntInclusive(0, animateClasses.length - 1)];
        while (this._previousAnimation == animationClass) {
            animationClass = animateClasses[this.getRandomIntInclusive(0, animateClasses.length - 1)];
        }
        this._previousAnimation = animationClass;
        this._renderer.setElementClass(this._element.nativeElement, animationClass, true);
    };
    TCBoxComponent.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    TCBoxComponent.prototype.ngOnDestroy = function () {
        this._timeInterval.unsubscribe();
    };
    TCBoxComponent.prototype.setColor = function (color) {
        this._renderer.setElementStyle(this._element.nativeElement, "color", color);
    };
    TCBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tc-box',
            templateUrl: "./tc-box.html",
            styleUrls: ["./tc-box.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TCBoxComponent);
    return TCBoxComponent;
}());
exports.TCBoxComponent = TCBoxComponent;
//# sourceMappingURL=tc-box.js.map