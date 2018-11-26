import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WorkComponent } from "./work";
import { WorkContainerComponent } from "./work-container/work-container";
import { VisibleDateComponent } from "./visible-date/visible-date";
import { WorkTechnologieComponent } from "./work-technologie/work-technologie";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        WorkComponent,
        WorkContainerComponent,
        VisibleDateComponent,
        WorkTechnologieComponent
    ],
    exports: [
        WorkComponent,
        WorkContainerComponent,
        VisibleDateComponent,
        WorkTechnologieComponent
    ],
})
export class WorkModule { }