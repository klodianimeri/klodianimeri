import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { CoreModule } from './core/core.module';
import { AppComponent } from './components/app/app';
import { PagesModule } from "./pages/pages.module";
import { routing, appRoutingProviders } from './app.routing';

// import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    CoreModule,
    routing,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
