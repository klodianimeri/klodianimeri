import { NgModule } from '@angular/core';
import { SharedModule } from "./../../core/shared.module";

import { WorkPageComponent } from "./work";
import { WorkModule } from "./../../components/work/work.module";

@NgModule({
    imports: [
        SharedModule,
        WorkModule
    ],
    declarations: [
        WorkPageComponent
    ],
    exports: [
        WorkPageComponent
    ],
    bootstrap: []
})
export class WorkPageModule { }
