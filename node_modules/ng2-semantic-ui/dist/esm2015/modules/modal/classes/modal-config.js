/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const ModalSize = {
    Mini: /** @type {?} */ ("mini"),
    Tiny: /** @type {?} */ ("tiny"),
    Small: /** @type {?} */ ("small"),
    Normal: /** @type {?} */ ("normal"),
    Large: /** @type {?} */ ("large")
};
/**
 * @template T, U, V
 */
export class ModalConfig {
    /**
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(context = undefined, isClosable = true) {
        // Initialise with default values.
        this.isClosable = isClosable;
        this.context = context;
        this.size = ModalSize.Normal;
        this.isFullScreen = false;
        this.isBasic = false;
        this.isInverted = false;
        this.isCentered = true;
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
}
if (false) {
    /** @type {?} */
    ModalConfig.prototype.isClosable;
    /** @type {?} */
    ModalConfig.prototype.closeResult;
    /** @type {?} */
    ModalConfig.prototype.context;
    /** @type {?} */
    ModalConfig.prototype.size;
    /** @type {?} */
    ModalConfig.prototype.isFullScreen;
    /** @type {?} */
    ModalConfig.prototype.isBasic;
    /** @type {?} */
    ModalConfig.prototype.isInverted;
    /** @type {?} */
    ModalConfig.prototype.isCentered;
    /** @type {?} */
    ModalConfig.prototype.mustScroll;
    /** @type {?} */
    ModalConfig.prototype.transition;
    /** @type {?} */
    ModalConfig.prototype.transitionDuration;
}
/**
 * @template T, U, V
 */
export class TemplateModalConfig extends ModalConfig {
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(template, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.template = template;
    }
}
if (false) {
    /** @type {?} */
    TemplateModalConfig.prototype.template;
}
/**
 * @template T, U, V
 */
export class ComponentModalConfig extends ModalConfig {
    /**
     * @param {?} component
     * @param {?=} context
     * @param {?=} isClosable
     */
    constructor(component, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.component = component;
    }
}
if (false) {
    /** @type {?} */
    ComponentModalConfig.prototype.component;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL21vZGFsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLGFBQWEsU0FBUyxHQUFHO0lBQ3JCLElBQUksb0JBQUUsTUFBbUIsQ0FBQTtJQUN6QixJQUFJLG9CQUFFLE1BQW1CLENBQUE7SUFDekIsS0FBSyxvQkFBRSxPQUFvQixDQUFBO0lBQzNCLE1BQU0sb0JBQUUsUUFBcUIsQ0FBQTtJQUM3QixLQUFLLG9CQUFFLE9BQW9CLENBQUE7Q0FDOUIsQ0FBQzs7OztBQUdGLE1BQU07Ozs7O0lBNEJGLFlBQVksVUFBd0IsU0FBUyxFQUFFLGFBQXFCLElBQUk7O1FBRXBFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0tBQ2pDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxNQUFNLDBCQUE0RCxTQUFRLFdBQW9COzs7Ozs7SUFHMUYsWUFBWSxRQUErQixFQUFFLFVBQXdCLFNBQVMsRUFBRSxhQUFxQixJQUFJO1FBQ3JHLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDNUI7Q0FDSjs7Ozs7Ozs7QUFHRCxNQUFNLDJCQUE2RCxTQUFRLFdBQW9COzs7Ozs7SUFHM0YsWUFBWSxTQUFtQixFQUFFLFVBQXdCLFNBQVMsRUFBRSxhQUFxQixJQUFJO1FBQ3pGLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDOUI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxUZW1wbGF0ZSB9IGZyb20gXCIuL21vZGFsLXRlbXBsYXRlXCI7XG5cbmV4cG9ydCB0eXBlIE1vZGFsU2l6ZSA9IFwibWluaVwiIHwgXCJ0aW55XCIgfCBcInNtYWxsXCIgfCBcIm5vcm1hbFwiIHwgXCJsYXJnZVwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxTaXplID0ge1xuICAgIE1pbmk6IFwibWluaVwiIGFzIE1vZGFsU2l6ZSxcbiAgICBUaW55OiBcInRpbnlcIiBhcyBNb2RhbFNpemUsXG4gICAgU21hbGw6IFwic21hbGxcIiBhcyBNb2RhbFNpemUsXG4gICAgTm9ybWFsOiBcIm5vcm1hbFwiIGFzIE1vZGFsU2l6ZSxcbiAgICBMYXJnZTogXCJsYXJnZVwiIGFzIE1vZGFsU2l6ZVxufTtcblxuLy8gU3RvcmVzIGEgYmFzaWMgc2V0IG9mIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgYSBtb2RhbC5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbmZpZzxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiB7XG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RhbCBjYW4gYmUgY2xvc2VkIHdpdGggYSBjbG9zZSBidXR0b24sIGNsaWNraW5nIG91dHNpZGUsIG9yIHRoZSBlc2NhcGUga2V5LlxuICAgIHB1YmxpYyBpc0Nsb3NhYmxlOmJvb2xlYW47XG4gICAgLy8gVmFsdWUgdG8gZGVueSB3aXRoIHdoZW4gY2xvc2luZyB2aWEgYGlzQ2xvc2FibGVgLlxuICAgIHB1YmxpYyBjbG9zZVJlc3VsdDpWO1xuXG4gICAgLy8gRGF0YSB0byBwYXNzIHRvIHRoZSBtb2RhbCBpbnN0YW5jZSB3aGVuIG9wZW5lZC5cbiAgICBwdWJsaWMgY29udGV4dD86VDtcblxuICAgIC8vIFNpemUgdXNlZCB0byBkaXNwbGF5IHRoZSBtb2RhbC5cbiAgICBwdWJsaWMgc2l6ZTpNb2RhbFNpemU7XG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgdGFrZXMgdXAgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi5cbiAgICBwdWJsaWMgaXNGdWxsU2NyZWVuOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIGhhcyBiYXNpYyBzdHlsZXMgYXBwbGllZC5cbiAgICBwdWJsaWMgaXNCYXNpYzpib29sZWFuO1xuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIHNob3dzIGFnYWluc3QgYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgIHB1YmxpYyBpc0ludmVydGVkOmJvb2xlYW47XG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIGNlbnRlciBvZiB0aGUgcGFnZS5cbiAgICBwdWJsaWMgaXNDZW50ZXJlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIG1vZGFsIHNob3VsZCBhbHdheXMgZGlzcGxheSBhIHNjcm9sbGJhci5cbiAgICBwdWJsaWMgbXVzdFNjcm9sbDpib29sZWFuO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byBkaXNwbGF5IG1vZGFsIHdpdGguXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6VCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgaXNDbG9zYWJsZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuaXNDbG9zYWJsZSA9IGlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gTW9kYWxTaXplLk5vcm1hbDtcbiAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQ2VudGVyZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubXVzdFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgfVxufVxuXG4vLyBVc2VkIHdoZW4gY3JlYXRpbmcgYSBtb2RhbCBmcm9tIGEgYFRlbXBsYXRlUmVmYC5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTpNb2RhbFRlbXBsYXRlPFQsIFUsIFY+O1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6TW9kYWxUZW1wbGF0ZTxULCBVLCBWPiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG59XG5cbi8vIFVzZWQgd2hlbiBjcmVhdGluZyBhIG1vZGFsIGZyb20gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZGFsQ29uZmlnPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb25maWc8VCwgVSwgVj4ge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6VHlwZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OlR5cGU8YW55PiwgY29udGV4dDpUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkLCBpc0Nsb3NhYmxlOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIGlzQ2xvc2FibGUpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiJdfQ==