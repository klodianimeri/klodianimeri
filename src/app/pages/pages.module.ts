import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomePageModule } from "./home/home.module";
import { TechnologiesPageModule } from "./technologies/technologies.module";
import { WorkPageModule } from "./work/work.module";
import { ThreePageModule } from "./three/three.module";

@NgModule({
    imports:
    [
        HomePageModule,
        TechnologiesPageModule,
        WorkPageModule,
        ThreePageModule
    ],
    exports:
    [
        HomePageModule,
        TechnologiesPageModule,
        WorkPageModule,
        ThreePageModule
    ],
    declarations: [],
    bootstrap: []
})
export class PagesModule { }
