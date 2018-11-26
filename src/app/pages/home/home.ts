import {
    Component,
    ViewEncapsulation,
    OnInit
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "home-page",
    templateUrl: "./home.html",
    styleUrls: ["./home.css"],
    encapsulation: ViewEncapsulation.None
}) export class HomePageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}