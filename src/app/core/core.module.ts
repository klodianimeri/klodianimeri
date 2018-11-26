import {
    NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { LogoComponent } from "./../components/logo/logo";
import { NAV_MENU_DIRECTIVES } from "./../components/menu/nav-menu.component";
import { TextToBitsDirective } from "./../directives/text-to-bits";


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NAV_MENU_DIRECTIVES,
        LogoComponent,
        TextToBitsDirective
    ],
    exports: [
        NAV_MENU_DIRECTIVES,
        LogoComponent,
        TextToBitsDirective
    ],
    providers: []
})
export class CoreModule {
}
