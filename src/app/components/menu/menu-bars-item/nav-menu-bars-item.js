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
var NavMenuBarsOpenComponent = (function () {
    function NavMenuBarsOpenComponent() {
    }
    NavMenuBarsOpenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-menu-bars-open',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], NavMenuBarsOpenComponent);
    return NavMenuBarsOpenComponent;
}());
exports.NavMenuBarsOpenComponent = NavMenuBarsOpenComponent;
var NavMenuBarsCloseComponent = (function () {
    function NavMenuBarsCloseComponent() {
    }
    NavMenuBarsCloseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-menu-bars-close',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], NavMenuBarsCloseComponent);
    return NavMenuBarsCloseComponent;
}());
exports.NavMenuBarsCloseComponent = NavMenuBarsCloseComponent;
var NavMenuBarsItemComponent = (function () {
    function NavMenuBarsItemComponent() {
    }
    NavMenuBarsItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-menu-bars-item',
            templateUrl: './nav-menu-bars-item.html',
            styleUrls: ['./nav-menu-bars-item.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], NavMenuBarsItemComponent);
    return NavMenuBarsItemComponent;
}());
exports.NavMenuBarsItemComponent = NavMenuBarsItemComponent;
exports.NAV_MENU_BARS_COMPONENTS = [NavMenuBarsCloseComponent, NavMenuBarsItemComponent, NavMenuBarsOpenComponent];
//# sourceMappingURL=nav-menu-bars-item.js.map