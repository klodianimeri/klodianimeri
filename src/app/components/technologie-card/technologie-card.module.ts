import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TechnologieCardComponent } from "./technologie-card";
import { TCCodeComponent } from "./tc-code/tc-code";
import { TCMainComponent } from "./tc-main/tc-main";
import { TCBoxComponent } from "./tc-box/tc-box";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        TechnologieCardComponent,
        TCCodeComponent,
        TCMainComponent,
        TCBoxComponent
    ],
    exports: [
        TechnologieCardComponent,
        TCCodeComponent,
        TCMainComponent,
        TCBoxComponent
    ],
    bootstrap: []
})
export class TechnologieCardModule { }