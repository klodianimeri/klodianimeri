import {
    Component,
    ViewEncapsulation,
    OnInit
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "work-page",
    templateUrl: "./work.html",
    styleUrls: ["./work.css"],
    encapsulation: ViewEncapsulation.None
}) export class WorkPageComponent implements OnInit {

    ngOnInit() {
        window.scrollTo(0, 0);
    }

}