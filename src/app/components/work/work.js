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
var work_technologie_1 = require("./work-technologie/work-technologie");
var WorkComponent = (function () {
    function WorkComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent.prototype.ngAfterContentInit = function () {
        this.startDate = new Date(this.startDate);
        if (this.endDate) {
            this.endDate = new Date(this.endDate);
        }
        else {
            this.endDate = new Date(Date.now());
        }
    };
    WorkComponent.prototype.setStyleTop = function (top) {
        this._renderer.setElementStyle(this._element.nativeElement, "top", top.toString() + "px");
    };
    WorkComponent.prototype.setStylePaddingTop = function (top) {
        this._renderer.setElementStyle(this._element.nativeElement, "padding-top", top.toString() + "px");
    };
    WorkComponent.prototype.setClassActive = function () {
        this._renderer.setElementClass(this._element.nativeElement, "active", true);
    };
    WorkComponent.prototype.removeClassActive = function () {
        this._renderer.setElementClass(this._element.nativeElement, "active", false);
    };
    WorkComponent.prototype.right = function () {
        this._renderer.setElementClass(this._element.nativeElement, "work-right", true);
    };
    WorkComponent.prototype.onHostMouseOver = function () {
        this.WorkTechnologies.toArray().forEach(function (worktechnologie, index) {
            worktechnologie.show();
        });
    };
    WorkComponent.prototype.onHostMouseLeave = function () {
        this.WorkTechnologies.toArray().forEach(function (worktechnologie, index) {
            worktechnologie.hide();
        });
    };
    WorkComponent.prototype.getBoundingClientRect = function () {
        return this._element.nativeElement.getBoundingClientRect();
    };
    __decorate([
        core_1.ContentChildren(work_technologie_1.WorkTechnologieComponent), 
        __metadata('design:type', core_1.QueryList)
    ], WorkComponent.prototype, "WorkTechnologies", void 0);
    __decorate([
        core_1.Input("title"), 
        __metadata('design:type', Date)
    ], WorkComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input("startDate"), 
        __metadata('design:type', Date)
    ], WorkComponent.prototype, "startDate", void 0);
    __decorate([
        core_1.Input("endDate"), 
        __metadata('design:type', Date)
    ], WorkComponent.prototype, "endDate", void 0);
    __decorate([
        core_1.HostListener("mouseover"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], WorkComponent.prototype, "onHostMouseOver", null);
    __decorate([
        core_1.HostListener("mouseleave"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], WorkComponent.prototype, "onHostMouseLeave", null);
    WorkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'work',
            templateUrl: "./work.html",
            styleUrls: ["./work.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.js.map