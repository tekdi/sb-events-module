/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { TransitionController, Transition } from "../../transition/internal";
var SuiAccordionPanel = /** @class */ (function () {
    function SuiAccordionPanel(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.isOpenChange = new EventEmitter(false);
    }
    Object.defineProperty(SuiAccordionPanel.prototype, "service", {
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            this._service = service;
            this._changeDetector.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordionPanel.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isOpen = !!value;
            if (isOpen !== this.isOpen) {
                // Only update if the value has changed.
                this._isOpen = isOpen;
                if (isOpen && this._service) {
                    // If we are opening this panel, we must close the other ones.
                    this._service.closeOtherPanels(this);
                }
                this.isOpenChange.emit(this.isOpen);
                // Cancel all current animations, and fade the contents. The direction is automatic.
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.transition, this.transitionDuration));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordionPanel.prototype, "transition", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._service) {
                return this._service.transition;
            }
            return "fade";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordionPanel.prototype, "transitionDuration", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._service) {
                // Return the service defined transition duration.
                return this._service.transitionDuration;
            }
            // Revert to instantaneous if the service is not yet loaded.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiAccordionPanel.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    SuiAccordionPanel.decorators = [
        { type: Component, args: [{
                    selector: "sui-accordion-panel",
                    exportAs: "suiAccordionPanel",
                    template: "\n<!-- Title -->\n<div class=\"title\" [class.active]=\"isOpen\" (click)=\"toggle()\" >\n    <ng-content select=\"[title]\"></ng-content>\n</div>\n<!-- Content -->\n<div [suiCollapse]=\"!isOpen\" [collapseDuration]=\"transitionDuration\">\n    <div class=\"content\" [class.active]=\"isOpen\" [suiTransition]=\"transitionController\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n</div>\n",
                    styles: ["\n/* Manual style as Semantic UI relies on > selector */\n.content {\n    padding: .5em 0 1em;\n}\n\n/* Another > selector fix */\n:host:first-child .title {\n    border-top: none;\n}\n"]
                },] },
    ];
    /** @nocollapse */
    SuiAccordionPanel.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    SuiAccordionPanel.propDecorators = {
        isDisabled: [{ type: Input }],
        isOpen: [{ type: Input }],
        isOpenChange: [{ type: Output }]
    };
    return SuiAccordionPanel;
}());
export { SuiAccordionPanel };
if (false) {
    /** @type {?} */
    SuiAccordionPanel.prototype._service;
    /** @type {?} */
    SuiAccordionPanel.prototype.transitionController;
    /** @type {?} */
    SuiAccordionPanel.prototype.isDisabled;
    /** @type {?} */
    SuiAccordionPanel.prototype._isOpen;
    /** @type {?} */
    SuiAccordionPanel.prototype.isOpenChange;
    /** @type {?} */
    SuiAccordionPanel.prototype._changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQXlGekUsMkJBQW9CLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO0tBQ3hEOzBCQTVEVSxzQ0FBTzs7Ozs7a0JBQUMsT0FBMkI7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7SUFRekMsc0JBQ1cscUNBQU07Ozs7UUFEakI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2Qjs7Ozs7a0JBRWlCLEtBQWE7O1lBRTNCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBRXRCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7b0JBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBR3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7YUFDL0Y7Ozs7T0FuQko7MEJBc0JVLHlDQUFVOzs7OztZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQ25DO1lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7Ozs7MEJBR1AsaURBQWtCOzs7OztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Z0JBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2FBQzNDOztZQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O0lBYU4sa0NBQU07Ozs7UUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCOzs7Z0JBakdSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsOFpBV2I7b0JBQ0csTUFBTSxFQUFFLENBQUMsMkxBVVosQ0FBQztpQkFDRDs7OztnQkE5QmdELGlCQUFpQjs7OzZCQXlDN0QsS0FBSzt5QkFLTCxLQUFLOytCQTBDTCxNQUFNOzs0QkF4Rlg7O1NBK0JhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjY29yZGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1hY2NvcmRpb24tcGFuZWxcIixcbiAgICBleHBvcnRBczogXCJzdWlBY2NvcmRpb25QYW5lbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFRpdGxlIC0tPlxuPGRpdiBjbGFzcz1cInRpdGxlXCIgW2NsYXNzLmFjdGl2ZV09XCJpc09wZW5cIiAoY2xpY2spPVwidG9nZ2xlKClcIiA+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuPCEtLSBDb250ZW50IC0tPlxuPGRpdiBbc3VpQ29sbGFwc2VdPVwiIWlzT3BlblwiIFtjb2xsYXBzZUR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgW2NsYXNzLmFjdGl2ZV09XCJpc09wZW5cIiBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogTWFudWFsIHN0eWxlIGFzIFNlbWFudGljIFVJIHJlbGllcyBvbiA+IHNlbGVjdG9yICovXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogLjVlbSAwIDFlbTtcbn1cblxuLyogQW5vdGhlciA+IHNlbGVjdG9yIGZpeCAqL1xuOmhvc3Q6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uUGFuZWwge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZTtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdG8gYm9vbGVhbiAoZml4ZXMgZmFsc2UgIT0gdW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBpc09wZW4gPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmIChpc09wZW4gIT09IHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSBpc09wZW47XG5cbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgdGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBvcGVuaW5nIHRoaXMgcGFuZWwsIHdlIG11c3QgY2xvc2UgdGhlIG90aGVyIG9uZXMuXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5jbG9zZU90aGVyUGFuZWxzKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgY3VycmVudCBhbmltYXRpb25zLCBhbmQgZmFkZSB0aGUgY29udGVudHMuIFRoZSBkaXJlY3Rpb24gaXMgYXV0b21hdGljLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJmYWRlXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uRHVyYXRpb24oKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBzZXJ2aWNlIGRlZmluZWQgdHJhbnNpdGlvbiBkdXJhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXZlcnQgdG8gaW5zdGFudGFuZW91cyBpZiB0aGUgc2VydmljZSBpcyBub3QgeWV0IGxvYWRlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzT3BlbkNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==