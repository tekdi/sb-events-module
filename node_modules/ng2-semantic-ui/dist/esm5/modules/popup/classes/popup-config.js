/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { PositioningPlacement } from "../../../misc/util/internal";
/** @typedef {?} */
var PopupSize;
export { PopupSize };
/** @typedef {?} */
var PopupWidth;
export { PopupWidth };
/** @type {?} */
export var PopupTrigger = {
    Hover: /** @type {?} */ ("hover"),
    Click: /** @type {?} */ ("click"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Focus: /** @type {?} */ ("focus"),
    Manual: /** @type {?} */ ("manual")
};
/**
 * @record
 */
export function IPopupConfig() { }
/** @type {?|undefined} */
IPopupConfig.prototype.header;
/** @type {?|undefined} */
IPopupConfig.prototype.text;
/** @type {?|undefined} */
IPopupConfig.prototype.placement;
/** @type {?|undefined} */
IPopupConfig.prototype.trigger;
/** @type {?|undefined} */
IPopupConfig.prototype.isInverted;
/** @type {?|undefined} */
IPopupConfig.prototype.delay;
/** @type {?|undefined} */
IPopupConfig.prototype.isBasic;
/** @type {?|undefined} */
IPopupConfig.prototype.transition;
/** @type {?|undefined} */
IPopupConfig.prototype.transitionDuration;
/** @type {?|undefined} */
IPopupConfig.prototype.isFlowing;
/** @type {?|undefined} */
IPopupConfig.prototype.isInline;
var PopupConfig = /** @class */ (function () {
    function PopupConfig(defaults) {
        if (defaults === void 0) { defaults = {}; }
        this.placement = PositioningPlacement.TopLeft;
        this.trigger = PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        this.isFlowing = false;
        this.isInline = false;
        Object.assign(this, defaults);
    }
    return PopupConfig;
}());
export { PopupConfig };
if (false) {
    /** @type {?} */
    PopupConfig.prototype.header;
    /** @type {?} */
    PopupConfig.prototype.text;
    /** @type {?} */
    PopupConfig.prototype.placement;
    /** @type {?} */
    PopupConfig.prototype.trigger;
    /** @type {?} */
    PopupConfig.prototype.isInverted;
    /** @type {?} */
    PopupConfig.prototype.delay;
    /** @type {?} */
    PopupConfig.prototype.isBasic;
    /** @type {?} */
    PopupConfig.prototype.transition;
    /** @type {?} */
    PopupConfig.prototype.size;
    /** @type {?} */
    PopupConfig.prototype.width;
    /** @type {?} */
    PopupConfig.prototype.transitionDuration;
    /** @type {?} */
    PopupConfig.prototype.isFlowing;
    /** @type {?} */
    PopupConfig.prototype.isInline;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9jbGFzc2VzL3BvcHVwLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF1QixvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztBQU94RixXQUFhLFlBQVksR0FBRztJQUN4QixLQUFLLG9CQUFFLE9BQXVCLENBQUE7SUFDOUIsS0FBSyxvQkFBRSxPQUF1QixDQUFBO0lBQzlCLFlBQVksb0JBQUUsY0FBOEIsQ0FBQTtJQUM1QyxLQUFLLG9CQUFFLE9BQXVCLENBQUE7SUFDOUIsTUFBTSxvQkFBRSxRQUF3QixDQUFBO0NBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCRixJQUFBO0lBZUkscUJBQVksUUFBMEI7UUFBMUIseUJBQUEsRUFBQSxhQUEwQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDO3NCQXhETDtJQXlEQyxDQUFBO0FBM0JELHVCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVJlZkNvbnRleHQsIFBvc2l0aW9uaW5nUGxhY2VtZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVBvcHVwIH0gZnJvbSBcIi4vcG9wdXAtY29udHJvbGxlclwiO1xuXG5leHBvcnQgdHlwZSBQb3B1cFRyaWdnZXIgPSBcImhvdmVyXCIgfCBcImNsaWNrXCIgfCBcIm91dHNpZGVDbGlja1wiIHwgXCJmb2N1c1wiIHwgXCJtYW51YWxcIjtcbmV4cG9ydCB0eXBlIFBvcHVwU2l6ZSA9IFwibWluaVwiIHwgXCJ0aW55XCIgfCBcInNtYWxsXCIgfCBcImxhcmdlXCIgfCBcImh1Z2VcIjtcbmV4cG9ydCB0eXBlIFBvcHVwV2lkdGggPSBcIndpZGVcIiB8IFwidmVyeSB3aWRlXCIgIHwgXCJmbG93aW5nXCI7XG5cbmV4cG9ydCBjb25zdCBQb3B1cFRyaWdnZXIgPSB7XG4gICAgSG92ZXI6IFwiaG92ZXJcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgQ2xpY2s6IFwiY2xpY2tcIiBhcyBQb3B1cFRyaWdnZXIsXG4gICAgT3V0c2lkZUNsaWNrOiBcIm91dHNpZGVDbGlja1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBGb2N1czogXCJmb2N1c1wiIGFzIFBvcHVwVHJpZ2dlcixcbiAgICBNYW51YWw6IFwibWFudWFsXCIgYXMgUG9wdXBUcmlnZ2VyXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cENvbmZpZyB7XG4gICAgaGVhZGVyPzpzdHJpbmc7XG4gICAgdGV4dD86c3RyaW5nO1xuICAgIHBsYWNlbWVudD86UG9zaXRpb25pbmdQbGFjZW1lbnQ7XG4gICAgdHJpZ2dlcj86UG9wdXBUcmlnZ2VyO1xuICAgIGlzSW52ZXJ0ZWQ/OmJvb2xlYW47XG4gICAgZGVsYXk/Om51bWJlcjtcbiAgICBpc0Jhc2ljPzpib29sZWFuO1xuICAgIHRyYW5zaXRpb24/OnN0cmluZztcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24/Om51bWJlcjtcbiAgICBpc0Zsb3dpbmc/OmJvb2xlYW47XG4gICAgaXNJbmxpbmU/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbmZpZyBpbXBsZW1lbnRzIElQb3B1cENvbmZpZyB7XG4gICAgcHVibGljIGhlYWRlcj86c3RyaW5nO1xuICAgIHB1YmxpYyB0ZXh0PzpzdHJpbmc7XG4gICAgcHVibGljIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudDtcbiAgICBwdWJsaWMgdHJpZ2dlcjpQb3B1cFRyaWdnZXI7XG4gICAgcHVibGljIGlzSW52ZXJ0ZWQ6Ym9vbGVhbjtcbiAgICBwdWJsaWMgZGVsYXk6bnVtYmVyO1xuICAgIHB1YmxpYyBpc0Jhc2ljOmJvb2xlYW47XG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIHB1YmxpYyBzaXplOlBvcHVwU2l6ZTtcbiAgICBwdWJsaWMgd2lkdGg6UG9wdXBXaWR0aDtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcbiAgICBwdWJsaWMgaXNGbG93aW5nOmJvb2xlYW47XG4gICAgcHVibGljIGlzSW5saW5lOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0czpJUG9wdXBDb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uaW5nUGxhY2VtZW50LlRvcExlZnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IFBvcHVwVHJpZ2dlci5Ib3ZlcjtcbiAgICAgICAgdGhpcy5pc0ludmVydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xuICAgICAgICB0aGlzLmlzQmFzaWMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgdGhpcy5pc0Zsb3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0lubGluZSA9IGZhbHNlO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iXX0=