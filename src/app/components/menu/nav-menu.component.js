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
var nav_menu_item_component_1 = require('./menu-item/nav-menu-item.component');
var nav_menu_bars_item_1 = require('./menu-bars-item/nav-menu-bars-item');
var menu_logo_item_1 = require('./menu-logo-item/menu-logo-item');
var NavMenuComponent = (function () {
    function NavMenuComponent(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._isOpen = "inactive";
    }
    NavMenuComponent.prototype.onNavBarsClick = function () {
        if (this._isOpen == "active") {
            this.hideNavMenus();
        }
        else if (this._isOpen == "inactive") {
            this.showNavMenus();
        }
    };
    NavMenuComponent.prototype.hideNavMenus = function () {
        this._renderer.setElementClass(this._element.nativeElement, "open", false);
        this._isOpen = "inactive";
    };
    NavMenuComponent.prototype.showNavMenus = function () {
        this._renderer.setElementClass(this._element.nativeElement, "open", true);
        this._isOpen = "active";
    };
    NavMenuComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //Listen for menu item click
        this.NavMenuItems.toArray().forEach(function (element) {
            element.onClicked.subscribe(function () {
                _this.onNavBarsClick();
            });
        });
    };
    __decorate([
        core_1.ContentChildren(nav_menu_item_component_1.NavMenuItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], NavMenuComponent.prototype, "NavMenuItems", void 0);
    __decorate([
        core_1.ContentChild(nav_menu_bars_item_1.NavMenuBarsItemComponent), 
        __metadata('design:type', nav_menu_bars_item_1.NavMenuBarsItemComponent)
    ], NavMenuComponent.prototype, "NavMenuBarsItem", void 0);
    NavMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                core_1.trigger('navItems', [
                    core_1.state('inactive', core_1.style({
                        transform: 'translateY(-100%)',
                    })),
                    core_1.state('active', core_1.style({
                        transform: 'translateY(0)',
                    })),
                    core_1.transition('inactive => active', core_1.animate('800ms ease')),
                    core_1.transition('active => inactive', core_1.animate('600ms 100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
exports.NAV_MENU_DIRECTIVES = [NavMenuComponent, nav_menu_item_component_1.NavMenuItemComponent, nav_menu_bars_item_1.NAV_MENU_BARS_COMPONENTS, menu_logo_item_1.NavMenuLogoItemComponent];
//# sourceMappingURL=nav-menu.component.js.map