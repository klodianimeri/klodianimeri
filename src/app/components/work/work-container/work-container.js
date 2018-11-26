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
var work_1 = require("./../work");
var visible_date_1 = require("./../visible-date/visible-date");
var WorkContainerComponent = (function () {
    function WorkContainerComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._startDate = new Date(2020, 11, 17);
        this._pixelsPerDay = 10;
    }
    WorkContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth < 768) {
            this._heightCheckAgainst = window.innerHeight / 4;
        }
        else {
            this._heightCheckAgainst = window.innerHeight / 2;
        }
        this._scrollSubscription = Rx_1.Observable.fromEvent(document, "scroll").subscribe(function () {
            _this.onDocumentScroll();
        });
    };
    WorkContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.Works.toArray().forEach(function (work, index) {
            if (_this._startDate > new Date(work.startDate)) {
                _this._startDate = new Date(work.startDate);
            }
            if (index % 2 != 0) {
                work.right();
            }
        });
        this.VisibleDate.setVisualDate(this._startDate);
        this.startEngine();
    };
    WorkContainerComponent.prototype.onDocumentScroll = function () {
        var box = this._element.nativeElement.getBoundingClientRect();
        if ((box.top <= this._heightCheckAgainst) && (box.bottom >= this._heightCheckAgainst)) {
            var pixels = Math.abs(box.top - this._heightCheckAgainst);
            this.VisibleDate.setStyleTop(pixels);
            this.setWorksPositions(pixels);
        }
    };
    WorkContainerComponent.prototype.setWorksPositions = function (pixels) {
        var date = this.calculateVisualDate(pixels);
        this.VisibleDate.setVisualDate(date);
        this.Works.toArray().forEach(function (work, index) {
            if (date >= work.startDate && date <= work.endDate) {
                work.setStyleTop(Math.abs(pixels));
                work.setClassActive();
            }
            else {
                work.removeClassActive();
            }
        });
        this.checkOverlapings();
    };
    WorkContainerComponent.prototype.checkOverlapings = function () {
        if (window.innerWidth > 768)
            return;
        this.Works.toArray().forEach(function (work, index, self) {
            var box = work.getBoundingClientRect();
            if (index < (self.length - 1)) {
                var nextWorkBox = self[index + 1].getBoundingClientRect();
                if ((box.top + box.height) >= nextWorkBox.top) {
                    self[index + 1].setStylePaddingTop((box.top + box.height) - nextWorkBox.top);
                }
                else {
                    self[index + 1].setStylePaddingTop(0);
                }
            }
        });
    };
    WorkContainerComponent.prototype.calculateVisualDate = function (pixels) {
        var days = Math.abs(pixels / this._pixelsPerDay);
        var visualDate = new Date(this._startDate);
        visualDate.setDate(visualDate.getDate() + days);
        return visualDate;
    };
    WorkContainerComponent.prototype.startEngine = function () {
        var allDays = this.daysBetween(new Date(Date.now()), this._startDate);
        var height = Math.abs(this._pixelsPerDay * allDays);
        this._renderer.setElementStyle(this._element.nativeElement, "height", height.toString() + "px");
        this.initializeWorks();
    };
    WorkContainerComponent.prototype.initializeWorks = function () {
        var _this = this;
        this.Works.toArray().forEach(function (work, index) {
            work.setStyleTop(_this.daysBetween(_this._startDate, work.startDate) * _this._pixelsPerDay);
        });
    };
    WorkContainerComponent.prototype.daysBetween = function (firstDate, secondDate) {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    };
    WorkContainerComponent.prototype.ngOnDestroy = function () {
        this._scrollSubscription.unsubscribe();
    };
    __decorate([
        core_1.ContentChildren(work_1.WorkComponent), 
        __metadata('design:type', core_1.QueryList)
    ], WorkContainerComponent.prototype, "Works", void 0);
    __decorate([
        core_1.ViewChild(visible_date_1.VisibleDateComponent), 
        __metadata('design:type', visible_date_1.VisibleDateComponent)
    ], WorkContainerComponent.prototype, "VisibleDate", void 0);
    WorkContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'work-container',
            templateUrl: "./work-container.html",
            styleUrls: ["./work-container.css"],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WorkContainerComponent);
    return WorkContainerComponent;
}());
exports.WorkContainerComponent = WorkContainerComponent;
//# sourceMappingURL=work-container.js.map