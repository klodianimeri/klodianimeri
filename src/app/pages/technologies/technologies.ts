import {
    Component,
    ViewEncapsulation,
    OnInit
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "technologies-page",
    templateUrl: "./technologies.html",
    styleUrls: ["./technologies.css"],
    encapsulation: ViewEncapsulation.None
}) export class TechnologiesPageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}