import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    AfterContentInit,
    ViewEncapsulation,
    HostListener,
    ContentChildren,
    QueryList,
} from '@angular/core';

import { WorkTechnologieComponent } from "./work-technologie/work-technologie";

@Component({
    moduleId: module.id,
    selector: 'work',
    templateUrl: "./work.html",
    styleUrls: ["./work.css"],
    encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit, AfterContentInit {

    constructor(public _renderer: Renderer, public _element: ElementRef) {
    }

    @ContentChildren(WorkTechnologieComponent) WorkTechnologies: QueryList<WorkTechnologieComponent>;


    @Input("title") title: Date;
    @Input("startDate") startDate: Date;
    @Input("endDate") endDate: Date;

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.startDate = new Date(this.startDate);
        if (this.endDate) {
            this.endDate = new Date(this.endDate);
        } else {
            this.endDate = new Date(Date.now());
        }
    }

    setStyleTop(top: number) {
        this._renderer.setElementStyle(this._element.nativeElement, "top", top.toString() + "px");
    }
    setStylePaddingTop(top: number) {
        this._renderer.setElementStyle(this._element.nativeElement, "padding-top", top.toString() + "px");
    }

    setClassActive() {
        this._renderer.setElementClass(this._element.nativeElement, "active", true);
    }

    removeClassActive() {
        this._renderer.setElementClass(this._element.nativeElement, "active", false);
    }

    right() {
        this._renderer.setElementClass(this._element.nativeElement, "work-right", true);
    }

    @HostListener("mouseover") onHostMouseOver() {
        this.WorkTechnologies.toArray().forEach((worktechnologie, index) => {
            worktechnologie.show();
        });
    }

    @HostListener("mouseleave") onHostMouseLeave() {
        this.WorkTechnologies.toArray().forEach((worktechnologie, index) => {
            worktechnologie.hide();
        });
    }

    getBoundingClientRect(): ClientRect {
        return this._element.nativeElement.getBoundingClientRect();
    }


}
