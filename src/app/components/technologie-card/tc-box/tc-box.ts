import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';

import {
    Observable,
    Subscription,
    TimeInterval
} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'tc-box',
    templateUrl: "./tc-box.html",
    styleUrls: ["./tc-box.css"],
    encapsulation: ViewEncapsulation.None
})
export class TCBoxComponent implements OnInit, OnDestroy {
    private _timeInterval: Subscription;
    private _previousAnimation: string;

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    ngOnInit() {
        this._timeInterval = Observable
            .interval(3400 /* ms */)
            .timeInterval()
            .subscribe((x) => {
                this.animate();
            });

    }

    animate() {
        let animateClasses: Array<string> = ["top-left-animate", "top-right-animate", "bottom-left-animate", "bottom-right-animate"];

        animateClasses.forEach((animateClass) => {
            this._renderer.setElementClass(this._element.nativeElement, animateClass, false);
        });

        let animationClass: string = animateClasses[this.getRandomIntInclusive(0, animateClasses.length - 1)];

        while (this._previousAnimation == animationClass) {
            animationClass = animateClasses[this.getRandomIntInclusive(0, animateClasses.length - 1)];
        }

        this._previousAnimation = animationClass;
        this._renderer.setElementClass(this._element.nativeElement, animationClass, true);
    }

    getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnDestroy() {
        this._timeInterval.unsubscribe();
    }

    setColor(color: string) {
        this._renderer.setElementStyle(this._element.nativeElement, "color", color);
    }
}
