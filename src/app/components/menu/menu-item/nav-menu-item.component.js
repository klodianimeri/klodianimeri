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
var NavMenuItemComponent = (function () {
    function NavMenuItemComponent() {
        this.onClicked = new core_1.EventEmitter();
    }
    NavMenuItemComponent.prototype.onHostClick = function () {
        this.onClicked.next(true);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NavMenuItemComponent.prototype, "onClicked", void 0);
    __decorate([
        core_1.HostListener("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NavMenuItemComponent.prototype, "onHostClick", null);
    NavMenuItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-menu-item',
            templateUrl: './nav-menu-item.component.html',
            styleUrls: ['./nav-menu-item.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], NavMenuItemComponent);
    return NavMenuItemComponent;
}());
exports.NavMenuItemComponent = NavMenuItemComponent;
//# sourceMappingURL=nav-menu-item.component.js.map