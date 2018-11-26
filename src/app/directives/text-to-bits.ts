import {
    Directive,
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

@Directive({ selector: '[text-to-bits]' })
export class TextToBitsDirective implements OnInit, OnDestroy {
    private _text: string;
    private _index: number = 0;
    private _timeInterval: Subscription;

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    @Input("delay") delay: number = 0;
    @Input("interval") interval: number = 450;

    ngOnInit() {
        this._text = this._element.nativeElement.innerText;

        this._timeInterval = Observable
            .interval(this.interval /* ms */)
            .timeInterval()
            .delay(this.delay)
            .subscribe((x) => {
                let text: string = this._element.nativeElement.innerText;
                let textBuffer: Array<string> = text.split("");
                let bit: number = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                if (this._index < textBuffer.length) {
                    textBuffer[this._index] = bit.toString();
                    this._element.nativeElement.innerText = "";
                    this._element.nativeElement.innerText = textBuffer.join("");
                    this._index++;
                } else {
                    this._element.nativeElement.innerText = this._text;
                    this._index = 0;
                }
            });
    }

    ngOnDestroy() {
        this._timeInterval.unsubscribe();
    }
}