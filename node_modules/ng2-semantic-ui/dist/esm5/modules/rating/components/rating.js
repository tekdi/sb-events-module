/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
var SuiRating = /** @class */ (function () {
    function SuiRating() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRating.prototype, "maximum", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maximum;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maximum = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRating.prototype, "icons", {
        get: /**
         * @return {?}
         */
        function () {
            // tslint:disable-next-line:prefer-literal
            return new Array(this.maximum);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} i
     * @return {?}
     */
    SuiRating.prototype.onClick = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SuiRating.prototype.onMouseover = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.hoveredIndex = i;
    };
    /**
     * @return {?}
     */
    SuiRating.prototype.onMouseout = /**
     * @return {?}
     */
    function () {
        this.hoveredIndex = -1;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiRating.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    SuiRating.decorators = [
        { type: Component, args: [{
                    selector: "sui-rating",
                    template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
                    styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
                },] },
    ];
    /** @nocollapse */
    SuiRating.ctorParameters = function () { return []; };
    SuiRating.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.rating",] }],
        valueChange: [{ type: Output }],
        maximum: [{ type: Input }],
        isReadonly: [{ type: HostBinding, args: ["class.read-only",] }, { type: Input }],
        onMouseout: [{ type: HostListener, args: ["mouseout",] }]
    };
    return SuiRating;
}());
export { SuiRating };
if (false) {
    /** @type {?} */
    SuiRating.prototype.hasClasses;
    /** @type {?} */
    SuiRating.prototype.value;
    /** @type {?} */
    SuiRating.prototype.valueChange;
    /** @type {?} */
    SuiRating.prototype._maximum;
    /** @type {?} */
    SuiRating.prototype.isReadonly;
    /** @type {?} */
    SuiRating.prototype.hoveredIndex;
}
var SuiRatingValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(SuiRatingValueAccessor, _super);
    function SuiRatingValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRatingValueAccessor.decorators = [
        { type: Directive, args: [{
                    selector: "sui-rating",
                    host: { "(valueChange)": "onChange($event)" },
                    providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
                },] },
    ];
    /** @nocollapse */
    SuiRatingValueAccessor.ctorParameters = function () { return [
        { type: SuiRating }
    ]; };
    return SuiRatingValueAccessor;
}(CustomValueAccessor));
export { SuiRatingValueAccessor };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9yYXRpbmcvY29tcG9uZW50cy9yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBNEIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFtRHBIOzRCQUY2QixDQUFDLENBQUM7UUFHM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDMUI7SUE1QkQsc0JBQ1csOEJBQU87Ozs7UUFEbEI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4Qjs7Ozs7a0JBRWtCLEtBQVk7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQzs7OztPQUgxQjswQkFVVSw0QkFBSzs7Ozs7O1lBRVosTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBZTVCLDJCQUFPOzs7O2NBQUMsQ0FBUTtRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7Ozs7OztJQUdFLCtCQUFXOzs7O2NBQUMsQ0FBUTtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFJbkIsOEJBQVU7OztJQURqQjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRU0sOEJBQVU7Ozs7Y0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7Z0JBNUUxQixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSx1T0FRYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyxrREFJWixDQUFDO2lCQUNEOzs7Ozs2QkFFSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsY0FBYzs4QkFLMUIsTUFBTTswQkFLTixLQUFLOzZCQVNMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzs2QkErQkwsWUFBWSxTQUFDLFVBQVU7O29CQXpFNUI7O1NBb0JhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvRXNCLGtEQUFzQztJQUM5RSxnQ0FBWSxJQUFjO2VBQ3RCLGtCQUFNLElBQUksQ0FBQztLQUNkOztnQkFSSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRTtvQkFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDbEU7Ozs7Z0JBRW9CLFNBQVM7O2lDQXpGOUI7RUF3RjRDLG1CQUFtQjtTQUFsRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYXRpbmdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGkgY2xhc3M9XCJpY29uXCJcbiAgICpuZ0Zvcj1cImxldCBpY29uIG9mIGljb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgIChtb3VzZW92ZXIpPVwib25Nb3VzZW92ZXIoaSlcIlxuICAgKGNsaWNrKT1cIm9uQ2xpY2soaSlcIlxuICAgW2NsYXNzLnNlbGVjdGVkXT1cImhvdmVyZWRJbmRleCA+PSBpICYmICFpc1JlYWRvbmx5XCJcbiAgIFtjbGFzcy5hY3RpdmVdPVwidmFsdWUgPiBpXCI+XG48L2k+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LnJlYWQtb25seSAuaWNvbiB7XG4gICAgY3Vyc29yOiBhdXRvXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYXRpbmcgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8bnVtYmVyPiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yYXRpbmdcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHVibGljIHZhbHVlOm51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblxuICAgIHByaXZhdGUgX21heGltdW06bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heGltdW0gPSArdmFsdWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVhZC1vbmx5XCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNSZWFkb25seTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpY29ucygpOnVuZGVmaW5lZFtdIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1saXRlcmFsXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkodGhpcy5tYXhpbXVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaG92ZXJlZEluZGV4Om51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5tYXhpbXVtID0gNTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhpOm51bWJlcik6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaSArIDE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3VzZW92ZXIoaTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLmhvdmVyZWRJbmRleCA9IGk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlb3V0XCIpXG4gICAgcHVibGljIG9uTW91c2VvdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgaG9zdDogeyBcIih2YWx1ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8bnVtYmVyLCBTdWlSYXRpbmc+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVJhdGluZykge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=