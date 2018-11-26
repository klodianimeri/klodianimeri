import {
    Component,
    ElementRef,
    Renderer,
    ViewEncapsulation,
    ContentChildren,
    QueryList,
    ContentChild,
    AfterContentInit,

    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import { NavMenuItemComponent } from './menu-item/nav-menu-item.component';
import { NAV_MENU_BARS_COMPONENTS, NavMenuBarsItemComponent } from './menu-bars-item/nav-menu-bars-item';
import { NavMenuLogoItemComponent } from './menu-logo-item/menu-logo-item';

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('navItems', [
            state('inactive', style({
                transform: 'translateY(-100%)',
                // opacity: '0'
            })),
            state('active', style({
                transform: 'translateY(0)',
                // opacity: '1'
            })),
            transition('inactive => active', animate('800ms ease')),
            transition('active => inactive', animate('600ms 100ms ease-out'))
        ])
    ]
})
export class NavMenuComponent implements AfterContentInit {
    _isOpen: string = "inactive";

    constructor(public _renderer: Renderer,public _element: ElementRef) {
    }

    @ContentChildren(NavMenuItemComponent) NavMenuItems: QueryList<NavMenuItemComponent>;
    @ContentChild(NavMenuBarsItemComponent) NavMenuBarsItem: NavMenuBarsItemComponent;

    onNavBarsClick() {
        if (this._isOpen == "active") {
            this.hideNavMenus();
        } else if (this._isOpen == "inactive") {
            this.showNavMenus();
        }
    }

    hideNavMenus() {
        this._renderer.setElementClass(this._element.nativeElement, "open", false);
        this._isOpen = "inactive";
    }

    showNavMenus() {
        this._renderer.setElementClass(this._element.nativeElement, "open", true);
        this._isOpen = "active";
    }

    ngAfterContentInit() {
        //Listen for menu item click
        this.NavMenuItems.toArray().forEach(element => {
            element.onClicked.subscribe(() => {
                this.onNavBarsClick();
            });
        });
    }
}

export const NAV_MENU_DIRECTIVES = [NavMenuComponent, NavMenuItemComponent, NAV_MENU_BARS_COMPONENTS, NavMenuLogoItemComponent];