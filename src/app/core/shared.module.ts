import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TypeWritterComponent } from "./../components/type-writter/type-writter";
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        TypeWritterComponent,
    ],
    exports: [
        BrowserModule,
        RouterModule,
        TypeWritterComponent,
    ],
    providers: []
}) export class SharedModule { }