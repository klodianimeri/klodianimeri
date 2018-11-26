import { Component, ViewEncapsulation } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }
}
