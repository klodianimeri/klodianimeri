import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'logo',
    templateUrl: "./logo.html",
    styleUrls: ["./logo.css"],
    encapsulation: ViewEncapsulation.None
})
export class LogoComponent implements OnInit {

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    ngOnInit() {

    }

}
