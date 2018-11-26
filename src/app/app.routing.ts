import { Routes, RouterModule } from '@angular/router';
// import { RadioPageComponent } from "./pages/home";

import {
    HomePageComponent,
    TechnologiesPageComponent,
    WorkPageComponent,
    ThreePageComponent
} from "./pages/index";

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'technologies', component: TechnologiesPageComponent },
    { path: 'work', component: WorkPageComponent },
    { path: 'three', component: ThreePageComponent },
    // { path: 'tv', component: TvPageComponent },
    //   {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: {
    //       title: 'Heroes List'
    //     }
    //   },
    //   { path: 'hero/:id', component: HeroDetailComponent },
    //   { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);