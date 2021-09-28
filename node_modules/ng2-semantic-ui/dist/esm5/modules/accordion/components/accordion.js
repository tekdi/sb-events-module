/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "../services/accordion.service";
var SuiAccordion = /** @class */ (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service.closeOthers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transition", {
        set: /**
         * @param {?} transition
         * @return {?}
         */
        function (transition) {
            this._service.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        set: /**
         * @param {?} duration
         * @return {?}
         */
        function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiAccordion.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(function () { return _this.updatePanels(); });
    };
    /**
     * @return {?}
     */
    SuiAccordion.prototype.updatePanels = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    SuiAccordion.decorators = [
        { type: Component, args: [{
                    selector: "sui-accordion",
                    template: "\n<ng-content></ng-content>\n",
                    styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
                },] },
    ];
    /** @nocollapse */
    SuiAccordion.ctorParameters = function () { return []; };
    SuiAccordion.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.accordion",] }],
        closeOthers: [{ type: Input }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        _panels: [{ type: ContentChildren, args: [SuiAccordionPanel,] }]
    };
    return SuiAccordion;
}());
export { SuiAccordion };
if (false) {
    /** @type {?} */
    SuiAccordion.prototype.hasClasses;
    /** @type {?} */
    SuiAccordion.prototype._service;
    /** @type {?} */
    SuiAccordion.prototype._panels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRGhFOztRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBN0JELHNCQUNXLHFDQUFXOzs7O1FBRHRCO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQ3BDOzs7OztrQkFFc0IsS0FBYTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Ozs7T0FIckM7SUFNRCxzQkFDVyxvQ0FBVTs7Ozs7UUFEckIsVUFDc0IsVUFBaUI7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ3pDOzs7T0FBQTtJQUVELHNCQUNXLDRDQUFrQjs7Ozs7UUFEN0IsVUFDOEIsUUFBZTtZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztTQUMvQzs7O09BQUE7Ozs7SUFjTSx5Q0FBa0I7Ozs7O1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFHcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQzs7Ozs7SUFHdkQsbUNBQVk7Ozs7O1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDOzs7Z0JBN0Q1RCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwrQkFFYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyxnTUFVWixDQUFDO2lCQUNEOzs7Ozs2QkFFSSxXQUFXLFNBQUMsVUFBVSxjQUN0QixXQUFXLFNBQUMsaUJBQWlCOzhCQUc3QixLQUFLOzZCQVNMLEtBQUs7cUNBS0wsS0FBSzswQkFPTCxlQUFlLFNBQUMsaUJBQWlCOzt1QkEvQ3RDOztTQXFCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vYWNjb3JkaW9uLXBhbmVsXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjY29yZGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1hY2NvcmRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBGaXggZm9yIGdlbmVyYWwgc3R5bGluZyBpc3N1ZXMgKi9cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRml4IGZvciBzdHlsZWQgYm9yZGVyIGlzc3VlICovXG46aG9zdC5zdHlsZWQgc3VpLWFjY29yZGlvbi1wYW5lbDpmaXJzdC1jaGlsZCAudGl0bGUge1xuICAgIGJvcmRlci10b3A6IG5vbmVcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWNjb3JkaW9uXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjbG9zZU90aGVycygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZS5jbG9zZU90aGVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNsb3NlT3RoZXJzKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS5jbG9zZU90aGVycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb25EdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3NlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpQWNjb3JkaW9uUGFuZWwpXG4gICAgcHJvdGVjdGVkIF9wYW5lbHM6UXVlcnlMaXN0PFN1aUFjY29yZGlvblBhbmVsPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBBY2NvcmRpb24gc2VydmljZSBpcyB1bmlxdWUgdG8gZWFjaCBzZXQgb2YgcGFuZWxzLlxuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gbmV3IFN1aUFjY29yZGlvblNlcnZpY2UoKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbHMoKTtcblxuICAgICAgICAvLyBSZWNvbm5lY3QgcGFuZWxzIGFmdGVyIHRoZXkgaGF2ZSB1cGRhdGVkLlxuICAgICAgICB0aGlzLl9wYW5lbHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVQYW5lbHMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBhbmVscygpOnZvaWQge1xuICAgICAgICB0aGlzLl9wYW5lbHMuZm9yRWFjaChwID0+IHRoaXMuX3NlcnZpY2UuYWRkUGFuZWwocCkpO1xuICAgIH1cbn1cbiJdfQ==