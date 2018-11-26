import {
    Component,
    Renderer,
    ElementRef,
    Input,
    OnInit,
    OnDestroy,
    AfterContentInit,
    ViewEncapsulation,
    ContentChild,

    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import { Observable, Subscription } from "rxjs/Rx";

import { TCCodeComponent } from "./tc-code/tc-code";
import { TCMainComponent } from "./tc-main/tc-main";

@Component({
    moduleId: module.id,
    selector: 'technologie-card',
    templateUrl: "./technologie-card.html",
    styleUrls: ["./technologie-card.css"],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('cardState', [
            state('inactive', style({
                transform: "translateY(100%)",
                opacity: 0
            })),
            state('visible', style({
                transform: "translateY(0)",
                opacity: 1
            })),
            transition('inactive => visible', animate('840ms 440ms ease-out')),
        ]),
        trigger('codeState', [
            state('inactive-left', style({
                opacity: 0
            })),
            state('inactive-right', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('inactive-left => visible', animate('440ms 1880ms ease-out')),
            transition('inactive-right => visible', animate('440ms 1880ms ease-out')),
        ])
    ]
})
export class TechnologieCardComponent implements OnInit, AfterContentInit, OnDestroy {
    _cardState: string = "inactive";
    _codeState: string = "inactive-left";
    _scrollSubscription: Subscription;

    constructor(public _renderer: Renderer, public _element: ElementRef) {
    }

    @ContentChild(TCCodeComponent) TCCode: TCCodeComponent;
    @ContentChild(TCMainComponent) TCMain: TCMainComponent;

    @Input("color") color: string;
    @Input("reverse") reverse: boolean;

    ngOnInit() {
        this._scrollSubscription = Observable.fromEvent(document, "scroll").subscribe(() => {
            this.onDocumentScroll();
        });

        if (this.reverse) {
            this._codeState = "inactive-right";
        }
    }

    ngAfterContentInit() {
        if (this.color) {
            this.TCCode.setColor(this.color);
            this.TCMain.setColor(this.color);
        }
    }

    private onDocumentScroll() {
        if (this.isVisible()) {
            this._cardState = "visible";
            this._codeState = "visible";
        }
    }

    private isVisible(): boolean {
        let box = this._element.nativeElement.getBoundingClientRect();

        //top from window
        let top = box.top + (window.pageYOffset || this._element.nativeElement.scrollTop) - (this._element.nativeElement.clientTop || 0);
        let clientHeight = this._element.nativeElement.clientHeight;

        let windowBottomPageOffset = window.pageYOffset + window.innerHeight;


        let isVisible: boolean = (top < windowBottomPageOffset && (top + clientHeight + window.innerHeight) >= windowBottomPageOffset);

        return isVisible;
    }

    ngOnDestroy() {
        this._scrollSubscription.unsubscribe();
    }
}
