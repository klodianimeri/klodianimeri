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
var TypeWritterComponent = (function () {
    function TypeWritterComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._characterIndex = 0;
        this.delay = 0;
        this.interval = 150;
    }
    TypeWritterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._timeInterval = Rx_1.Observable
            .interval(this.interval /* ms */)
            .timeInterval()
            .delay(this.delay)
            .subscribe(function (x) {
            if (_this._characterIndex <= _this.text.length) {
                _this._text = _this.text.slice(0, _this._characterIndex++);
            }
            else {
                _this._characterIndex = 1;
            }
        });
    };
    TypeWritterComponent.prototype.ngOnDestroy = function () {
        this._timeInterval.unsubscribe();
    };
    __decorate([
        core_1.Input("text"), 
        __metadata('design:type', String)
    ], TypeWritterComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input("delay"), 
        __metadata('design:type', Number)
    ], TypeWritterComponent.prototype, "delay", void 0);
    __decorate([
        core_1.Input("interval"), 
        __metadata('design:type', Number)
    ], TypeWritterComponent.prototype, "interval", void 0);
    TypeWritterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'type-writter',
            templateUrl: "./type-writter.html",
            styleUrls: ["./type-writter.css"]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TypeWritterComponent);
    return TypeWritterComponent;
}());
exports.TypeWritterComponent = TypeWritterComponent;
//# sourceMappingURL=type-writter.js.map