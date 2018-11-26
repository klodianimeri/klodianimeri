import { NgModule } from '@angular/core';
import { SharedModule } from "./../../core/shared.module";
import { ThreePageComponent } from "./three";


@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [ThreePageComponent],
    exports: [ThreePageComponent],
    bootstrap: []
})
export class ThreePageModule { }
