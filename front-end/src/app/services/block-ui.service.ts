import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BlockUiService {

    @Output() display = new EventEmitter<boolean>();
    show() {
        this.display.emit(true);
    }
    hide() {
        this.display.emit(false);
    }
    getDisplay() {
        return this.display;
    }
}
