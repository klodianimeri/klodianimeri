import { NgModule } from '@angular/core';
import { SharedModule } from "./../../core/shared.module";
import { CoreModule } from "./../../core/core.module";
import { HomePageComponent } from "./home";

@NgModule({
    imports: [
        SharedModule,
        CoreModule,
    ],
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    bootstrap: []
})
export class HomePageModule { }
