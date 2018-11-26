import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';

import {
    Observable,
    Subscription,
    TimeInterval
} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'type-writter',
    templateUrl: "./type-writter.html",
    styleUrls: ["./type-writter.css"]
})
export class TypeWritterComponent implements OnInit, OnDestroy {
     _characterIndex: number = 0;
     _timeInterval: Subscription;
     _text: string;

    constructor(public _renderer: Renderer,public _element: ElementRef) {
    }

    @Input("text") text: string;
    @Input("delay") delay: number = 0;
    @Input("interval") interval: number = 150;

    ngOnInit() {
        this._timeInterval = Observable
            .interval(this.interval /* ms */)
            .timeInterval()
            .delay(this.delay)
            .subscribe((x) => {
                if (this._characterIndex <= this.text.length) {
                    this._text = this.text.slice(0, this._characterIndex++);
                }
                else {
                    this._characterIndex = 1;
                }
            });

    }

    ngOnDestroy() {
        this._timeInterval.unsubscribe();
    }

}
