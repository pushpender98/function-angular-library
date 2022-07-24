import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVF4RSxNQUFNLE9BQU8sZUFBZTtJQUcxQjtRQUZVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs0R0FOVSxlQUFlO2dHQUFmLGVBQWUsa0dDUjVCLHVGQUVTOzJGRE1JLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsbUJBQW1COzBFQUtuQixXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHVzaHBlbmRlci1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGhhbmRsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwiaGFuZGxlQ2xpY2suZW1pdCgkZXZlbnQpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPiJdfQ==