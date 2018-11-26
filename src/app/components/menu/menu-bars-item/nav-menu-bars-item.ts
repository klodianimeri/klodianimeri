import {
    Component,
    ViewEncapsulation,
    Input
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-menu-bars-open',
    template: '<ng-content></ng-content>'
})
export class NavMenuBarsOpenComponent{
}

@Component({
    moduleId: module.id,
    selector: 'nav-menu-bars-close',
    template: '<ng-content></ng-content>'
})
export class NavMenuBarsCloseComponent{
}

@Component({
    moduleId: module.id,
    selector: 'nav-menu-bars-item',
    templateUrl: './nav-menu-bars-item.html',
    styleUrls: ['./nav-menu-bars-item.css'],
})
export class NavMenuBarsItemComponent {
}

export const NAV_MENU_BARS_COMPONENTS = [NavMenuBarsCloseComponent, NavMenuBarsItemComponent, NavMenuBarsOpenComponent];