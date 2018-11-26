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
    selector: 'visible-date',
    templateUrl: "./visible-date.html",
    styleUrls: ["./visible-date.css"],
    encapsulation: ViewEncapsulation.None
})
export class VisibleDateComponent implements OnInit, AfterContentInit {
    _visualDate: Date;

    constructor(public _renderer: Renderer,public _element: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    setStyleTop(top: number) {
        this._renderer.setElementStyle(this._element.nativeElement, "top", top.toString() + "px");
    }

    setVisualDate(date: Date) {
        this._visualDate = date;
    }
}
