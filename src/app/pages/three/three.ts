import {
    Component,
    ViewEncapsulation,
    OnInit
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "three-page",
    templateUrl: "./three.html",
    styleUrls: ["./three.css"],
    encapsulation: ViewEncapsulation.None
}) export class ThreePageComponent implements OnInit {
    ngOnInit() {
        window.scrollTo(0, 0);
    }

}