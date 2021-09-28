/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
var SuiCheckbox = /** @class */ (function () {
    function SuiCheckbox() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiCheckbox.prototype.onMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        this.onTouched.emit();
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiCheckbox.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isChecked = value;
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.focusCheckbox = /**
     * @return {?}
     */
    function () {
        this._checkboxElement.nativeElement.focus();
    };
    SuiCheckbox.decorators = [
        { type: Component, args: [{
                    selector: "sui-checkbox",
                    exportAs: "suiCheckbox",
                    template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                },] },
    ];
    /** @nocollapse */
    SuiCheckbox.ctorParameters = function () { return []; };
    SuiCheckbox.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.checkbox",] }],
        name: [{ type: Input }],
        isChecked: [{ type: HostBinding, args: ["class.checked",] }],
        onCheckChange: [{ type: Output, args: ["checkChange",] }],
        onTouched: [{ type: Output, args: ["touched",] }],
        isDisabled: [{ type: Input }],
        isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
        _checkboxElement: [{ type: ViewChild, args: ["checkbox",] }],
        onMouseDown: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
        onClick: [{ type: HostListener, args: ["click",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout",] }]
    };
    return SuiCheckbox;
}());
export { SuiCheckbox };
if (false) {
    /** @type {?} */
    SuiCheckbox.prototype.hasClasses;
    /** @type {?} */
    SuiCheckbox.prototype.name;
    /** @type {?} */
    SuiCheckbox.prototype.isChecked;
    /** @type {?} */
    SuiCheckbox.prototype.onCheckChange;
    /** @type {?} */
    SuiCheckbox.prototype.onTouched;
    /** @type {?} */
    SuiCheckbox.prototype.isDisabled;
    /** @type {?} */
    SuiCheckbox.prototype.isReadonly;
    /** @type {?} */
    SuiCheckbox.prototype._checkboxElement;
}
var SuiCheckboxValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(SuiCheckboxValueAccessor, _super);
    function SuiCheckboxValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiCheckboxValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-checkbox",
                    host: {
                        "(checkChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
                },] },
    ];
    /** @nocollapse */
    SuiCheckboxValueAccessor.ctorParameters = function () { return [
        { type: SuiCheckbox }
    ]; };
    return SuiCheckboxValueAccessor;
}(CustomValueAccessor));
export { SuiCheckboxValueAccessor };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQzlELFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUN0QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTRCLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBcURwSDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7MEJBcEJVLHlDQUFnQjs7Ozs7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDOzs7OzswQkFHaEMsNENBQW1COzs7OztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7OztJQWtCN0MsaUNBQVc7Ozs7SUFEbEIsVUFDbUIsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFHTSw2QkFBTzs7O0lBRGQ7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7S0FDSjs7OztJQUdNLGdDQUFVOzs7SUFEakI7UUFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRU0sNEJBQU07Ozs7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7OztJQUdyQyxnQ0FBVTs7OztjQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7O0lBR25CLG1DQUFhOzs7O1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7OztnQkExRm5ELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx1UkFXYjtpQkFDQTs7Ozs7NkJBRUksV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGdCQUFnQjt1QkFHNUIsS0FBSzs0QkFHTCxXQUFXLFNBQUMsZUFBZTtnQ0FHM0IsTUFBTSxTQUFDLGFBQWE7NEJBR3BCLE1BQU0sU0FBQyxTQUFTOzZCQUdoQixLQUFLOzZCQUdMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzttQ0FXTCxTQUFTLFNBQUMsVUFBVTs4QkFjcEIsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFLcEMsWUFBWSxTQUFDLE9BQU87NkJBUXBCLFlBQVksU0FBQyxVQUFVOztzQkFqRjVCOztTQXNCYSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNGc0Isb0RBQXlDO0lBQ25GLGtDQUFZLElBQWdCO2VBQ3hCLGtCQUFNLElBQUksQ0FBQztLQUNkOztnQkFYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDRixlQUFlLEVBQUUsa0JBQWtCO3dCQUNuQyxXQUFXLEVBQUUsYUFBYTtxQkFDN0I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztpQkFDcEU7Ozs7Z0JBRW9CLFdBQVc7O21DQTdHaEM7RUE0RzhDLG1CQUFtQjtTQUFwRCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBleHBvcnRBczogXCJzdWlDaGVja2JveFwiLFxuICAgIHRlbXBsYXRlOiBgXG48aW5wdXQgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICBbYXR0ci5jaGVja2VkXT1cImNoZWNrZWRBdHRyaWJ1dGVcIlxuICAgICAgIFthdHRyLmRpc2FibGVkXT1cImlzRGlzYWJsZWRBdHRyaWJ1dGVcIlxuICAgICAgIFsobmdNb2RlbCldPVwiaXNDaGVja2VkXCJcbiAgICAgICAjY2hlY2tib3g+XG48bGFiZWw+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9sYWJlbD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2hlY2tib3ggaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8Ym9vbGVhbj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jaGVja2VkXCIpXG4gICAgcHVibGljIGlzQ2hlY2tlZDpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImNoZWNrQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uQ2hlY2tDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgY2hlY2tlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hlY2tlZCA/IFwiXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFwiY2hlY2tib3hcIilcbiAgICBwcml2YXRlIF9jaGVja2JveEVsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUmVhZG9ubHkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNDaGVja2JveCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQ7XG4gICAgICAgIHRoaXMub25DaGVja0NoYW5nZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzQ2hlY2tib3goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hlY2tib3hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jaGVja2JveFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2hlY2tDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8Ym9vbGVhbiwgU3VpQ2hlY2tib3g+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aUNoZWNrYm94KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiJdfQ==