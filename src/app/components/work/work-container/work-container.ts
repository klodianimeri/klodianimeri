import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    ViewEncapsulation,
    ContentChildren,
    QueryList,
    AfterContentInit,
    OnDestroy,
    ViewChild,
} from '@angular/core';

import { Observable, Subscription } from "rxjs/Rx";

import { WorkComponent } from "./../work";
import { VisibleDateComponent } from "./../visible-date/visible-date";

@Component({
    moduleId: module.id,
    selector: 'work-container',
    templateUrl: "./work-container.html",
    styleUrls: ["./work-container.css"],
    encapsulation: ViewEncapsulation.None,
})
export class WorkContainerComponent implements OnInit, AfterContentInit, OnDestroy {
    private _startDate: Date = new Date(2020, 11, 17);
    private _pixelsPerDay: number = 10;
    private _scrollSubscription: Subscription;
    private _visibleDate: Date;
    private _heightCheckAgainst: number;

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    @ContentChildren(WorkComponent) Works: QueryList<WorkComponent>;
    @ViewChild(VisibleDateComponent) VisibleDate: VisibleDateComponent;

    ngOnInit() {
        if (window.innerWidth < 768) {
            this._heightCheckAgainst = window.innerHeight / 4;
        } else {
            this._heightCheckAgainst = window.innerHeight / 2;
        }
        this._scrollSubscription = Observable.fromEvent(document, "scroll").subscribe(() => {
            this.onDocumentScroll();
        });
    }

    ngAfterContentInit() {
        this.Works.toArray().forEach((work, index) => {
            if (this._startDate > new Date(work.startDate)) {
                this._startDate = new Date(work.startDate);
            }
            if (index % 2 != 0) {
                work.right();
            }

        });
        this.VisibleDate.setVisualDate(this._startDate);
        this.startEngine();
    }

    private onDocumentScroll() {
        let box: ClientRect = this._element.nativeElement.getBoundingClientRect();
        if ((box.top <= this._heightCheckAgainst) && (box.bottom >= this._heightCheckAgainst)) {
            let pixels: number = Math.abs(box.top - this._heightCheckAgainst);
            this.VisibleDate.setStyleTop(pixels)
            this.setWorksPositions(pixels);
        }
    }

    setWorksPositions(pixels: number) {
        let date: Date = this.calculateVisualDate(pixels);
        this.VisibleDate.setVisualDate(date);
        this.Works.toArray().forEach((work, index) => {
            if (date >= work.startDate && date <= work.endDate) {
                work.setStyleTop(Math.abs(pixels));
                work.setClassActive();
            } else {
                work.removeClassActive();
            }
        });
        this.checkOverlapings();
    }

    checkOverlapings() {
        if (window.innerWidth > 768) return;
        this.Works.toArray().forEach((work, index, self) => {
            let box: ClientRect = work.getBoundingClientRect();
            if (index < (self.length - 1)) {
                let nextWorkBox: ClientRect = self[index + 1].getBoundingClientRect();
                if ((box.top + box.height) >= nextWorkBox.top) {
                    self[index + 1].setStylePaddingTop((box.top + box.height) - nextWorkBox.top);
                } else {
                    self[index + 1].setStylePaddingTop(0);
                }
            }
        });
    }

    calculateVisualDate(pixels: number): Date {
        let days = Math.abs(pixels / this._pixelsPerDay);
        let visualDate: Date = new Date(this._startDate);
        visualDate.setDate(visualDate.getDate() + days);
        return visualDate;
    }

    startEngine() {
        let allDays: number = this.daysBetween(new Date(Date.now()), this._startDate);
        let height: number = Math.abs(this._pixelsPerDay * allDays);
        this._renderer.setElementStyle(this._element.nativeElement, "height", height.toString() + "px");
        this.initializeWorks();
    }

    initializeWorks() {
        this.Works.toArray().forEach((work, index) => {
            work.setStyleTop(this.daysBetween(this._startDate, work.startDate) * this._pixelsPerDay);
        });
    }


    private daysBetween(firstDate: Date, secondDate: Date): number {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    }

    ngOnDestroy() {
        this._scrollSubscription.unsubscribe();
    }
}