import {
    Component,
    EventEmitter,
    ViewEncapsulation,
    Input,
    Output,
    HostListener
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-menu-item',
    templateUrl: './nav-menu-item.component.html',
    styleUrls: ['./nav-menu-item.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class NavMenuItemComponent {
    @Output() onClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener("click") onHostClick(){
        this.onClicked.next(true);
    }
}