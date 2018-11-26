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
    selector: 'tc-code',
    templateUrl: "./tc-code.html",
    styleUrls: ["./tc-code.css"],
    encapsulation: ViewEncapsulation.None
})
export class TCCodeComponent implements OnInit {

    constructor(private _renderer: Renderer, private _element: ElementRef) {
    }

    ngOnInit() {
    }

    setColor(color: string) {
        this._renderer.setElementStyle(this._element.nativeElement, "color", color);
    }
}
