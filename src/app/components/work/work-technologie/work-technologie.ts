import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    AfterContentInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'work-technologie',
    templateUrl: "./work-technologie.html",
    styleUrls: ["./work-technologie.css"],
    encapsulation: ViewEncapsulation.None
})
export class WorkTechnologieComponent implements OnInit, AfterContentInit {

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    show() {
        this._renderer.setElementClass(this._element.nativeElement, "visible", true);
    }

    hide() {
        this._renderer.setElementClass(this._element.nativeElement, "visible", false);
    }
}
