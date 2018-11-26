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
var TextToBitsDirective = (function () {
    function TextToBitsDirective(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._index = 0;
        this.delay = 0;
        this.interval = 450;
    }
    TextToBitsDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._text = this._element.nativeElement.innerText;
        this._timeInterval = Rx_1.Observable
            .interval(this.interval /* ms */)
            .timeInterval()
            .delay(this.delay)
            .subscribe(function (x) {
            var text = _this._element.nativeElement.innerText;
            var textBuffer = text.split("");
            var bit = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            if (_this._index < textBuffer.length) {
                textBuffer[_this._index] = bit.toString();
                _this._element.nativeElement.innerText = "";
                _this._element.nativeElement.innerText = textBuffer.join("");
                _this._index++;
            }
            else {
                _this._element.nativeElement.innerText = _this._text;
                _this._index = 0;
            }
        });
    };
    TextToBitsDirective.prototype.ngOnDestroy = function () {
        this._timeInterval.unsubscribe();
    };
    __decorate([
        core_1.Input("delay"), 
        __metadata('design:type', Number)
    ], TextToBitsDirective.prototype, "delay", void 0);
    __decorate([
        core_1.Input("interval"), 
        __metadata('design:type', Number)
    ], TextToBitsDirective.prototype, "interval", void 0);
    TextToBitsDirective = __decorate([
        core_1.Directive({ selector: '[text-to-bits]' }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TextToBitsDirective);
    return TextToBitsDirective;
}());
exports.TextToBitsDirective = TextToBitsDirective;
//# sourceMappingURL=text-to-bits.js.map