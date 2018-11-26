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
    selector: 'tc-main',
    templateUrl: "./tc-main.html",
    styleUrls: ["./tc-main.css"],
    encapsulation: ViewEncapsulation.None
})
export class TCMainComponent implements OnInit {

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    @Input("title") title: string;

    ngOnInit() {
    }

    setColor(color: string) {
        this._renderer.setElementStyle(this._element.nativeElement, "background-color", color);
    }
}