import { NgModule } from '@angular/core';
import { SharedModule } from "./../../core/shared.module";
import { CoreModule } from "./../../core/core.module";
import { TechnologiesPageComponent } from "./technologies";
import { TechnologieCardModule } from "./../../components/technologie-card/technologie-card.module";
@NgModule({
    imports: [
        SharedModule,
        CoreModule,
        TechnologieCardModule
    ],
    declarations: [TechnologiesPageComponent],
    exports: [TechnologiesPageComponent],
    bootstrap: []
})
export class TechnologiesPageModule { }
