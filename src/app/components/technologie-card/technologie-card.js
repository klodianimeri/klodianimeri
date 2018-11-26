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
var tc_code_1 = require("./tc-code/tc-code");
var tc_main_1 = require("./tc-main/tc-main");
var TechnologieCardComponent = (function () {
    function TechnologieCardComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._cardState = "inactive";
        this._codeState = "inactive-left";
    }
    TechnologieCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrollSubscription = Rx_1.Observable.fromEvent(document, "scroll").subscribe(function () {
            _this.onDocumentScroll();
        });
        if (this.reverse) {
            this._codeState = "inactive-right";
        }
    };
    TechnologieCardComponent.prototype.ngAfterContentInit = function () {
        if (this.color) {
            this.TCCode.setColor(this.color);
            this.TCMain.setColor(this.color);
        }
    };
    TechnologieCardComponent.prototype.onDocumentScroll = function () {
        if (this.isVisible()) {
            this._cardState = "visible";
            this._codeState = "visible";
        }
    };
    TechnologieCardComponent.prototype.isVisible = function () {
        var box = this._element.nativeElement.getBoundingClientRect();
        //top from window
        var top = box.top + (window.pageYOffset || this._element.nativeElement.scrollTop) - (this._element.nativeElement.clientTop || 0);
        var clientHeight = this._element.nativeElement.clientHeight;
        var windowBottomPageOffset = window.pageYOffset + window.innerHeight;
        var isVisible = (top < windowBottomPageOffset && (top + clientHeight + window.innerHeight) >= windowBottomPageOffset);
        return isVisible;
    };
    TechnologieCardComponent.prototype.ngOnDestroy = function () {
        this._scrollSubscription.unsubscribe();
    };
    __decorate([
        core_1.ContentChild(tc_code_1.TCCodeComponent), 
        __metadata('design:type', tc_code_1.TCCodeComponent)
    ], TechnologieCardComponent.prototype, "TCCode", void 0);
    __decorate([
        core_1.ContentChild(tc_main_1.TCMainComponent), 
        __metadata('design:type', tc_main_1.TCMainComponent)
    ], TechnologieCardComponent.prototype, "TCMain", void 0);
    __decorate([
        core_1.Input("color"), 
        __metadata('design:type', String)
    ], TechnologieCardComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input("reverse"), 
        __metadata('design:type', Boolean)
    ], TechnologieCardComponent.prototype, "reverse", void 0);
    TechnologieCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'technologie-card',
            templateUrl: "./technologie-card.html",
            styleUrls: ["./technologie-card.css"],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                core_1.trigger('cardState', [
                    core_1.state('inactive', core_1.style({
                        transform: "translateY(100%)",
                        opacity: 0
                    })),
                    core_1.state('visible', core_1.style({
                        transform: "translateY(0)",
                        opacity: 1
                    })),
                    core_1.transition('inactive => visible', core_1.animate('840ms 440ms ease-out')),
                ]),
                core_1.trigger('codeState', [
                    core_1.state('inactive-left', core_1.style({
                        opacity: 0
                    })),
                    core_1.state('inactive-right', core_1.style({
                        opacity: 0
                    })),
                    core_1.state('visible', core_1.style({
                        opacity: 1
                    })),
                    core_1.transition('inactive-left => visible', core_1.animate('440ms 1880ms ease-out')),
                    core_1.transition('inactive-right => visible', core_1.animate('440ms 1880ms ease-out')),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TechnologieCardComponent);
    return TechnologieCardComponent;
}());
exports.TechnologieCardComponent = TechnologieCardComponent;
//# sourceMappingURL=technologie-card.js.map