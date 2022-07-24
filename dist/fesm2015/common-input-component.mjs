import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

class ButtonComponent {
    constructor() {
        this.handleClick = new EventEmitter();
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ButtonComponent, selector: "pushpender-button", outputs: { handleClick: "handleClick" }, ngImport: i0, template: "<button (click)=\"handleClick.emit($event)\">\n  <ng-content></ng-content>\n</button>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pushpender-button', template: "<button (click)=\"handleClick.emit($event)\">\n  <ng-content></ng-content>\n</button>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { handleClick: [{
                type: Output
            }] } });

class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonComponent
                    ]
                }]
        }] });

class FuntionsService {
    constructor() { }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
FuntionsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FuntionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FuntionsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FuntionsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FuntionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, FuntionsService };
//# sourceMappingURL=common-input-component.mjs.map
