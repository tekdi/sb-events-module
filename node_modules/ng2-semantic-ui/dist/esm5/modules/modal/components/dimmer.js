/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer/internal";
var SuiModalDimmer = /** @class */ (function (_super) {
    tslib_1.__extends(SuiModalDimmer, _super);
    function SuiModalDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.hasClasses = true;
        _this.isClickable = false;
        return _this;
    }
    SuiModalDimmer.decorators = [
        { type: Component, args: [{
                    selector: "sui-modal-dimmer",
                    template: "<ng-content></ng-content>",
                    styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    SuiModalDimmer.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SuiModalDimmer.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.page",] }, { type: HostBinding, args: ["class.modals",] }]
    };
    return SuiModalDimmer;
}(SuiDimmer));
export { SuiModalDimmer };
if (false) {
    /** @type {?} */
    SuiModalDimmer.prototype.hasClasses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQWFkLDBDQUFTO0lBTXpDLHdCQUFZLFFBQWtCLEVBQUUsT0FBa0IsRUFBRSxjQUFnQztRQUFwRixZQUNJLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLFNBRzNDO1FBRkcsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7O0tBQzVCOztnQkFyQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSxDQUFDLGlLQU1SLENBQUM7aUJBQ0w7Ozs7Z0JBYmdDLFNBQVM7Z0JBQUUsVUFBVTtnQkFBRSxpQkFBaUI7Ozs2QkFnQnBFLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLFdBQVcsU0FBQyxjQUFjOzt5QkFqQi9CO0VBY29DLFNBQVM7U0FBaEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpRGltbWVyIH0gZnJvbSBcIi4uLy4uL2RpbW1lci9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbW9kYWwtZGltbWVyXCIsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0LnVpLmRpbW1lcjpub3QoLmhpZGRlbikge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IFxuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxEaW1tZXIgZXh0ZW5kcyBTdWlEaW1tZXIge1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnZVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1vZGFsc1wiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==