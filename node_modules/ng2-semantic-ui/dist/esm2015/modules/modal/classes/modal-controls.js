/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @typedef {?} */
var ModalResult;
export { ModalResult };
/**
 * @template T, U
 */
export class ModalControls {
    /**
     * @param {?} approve
     * @param {?} deny
     */
    constructor(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    approve(result) { }
    /**
     * @param {?} result
     * @return {?}
     */
    deny(result) { }
}
/**
 * @template T, U, V
 */
export class Modal extends ModalControls {
    /**
     * @param {?} controls
     * @param {?} context
     */
    constructor(controls, context) {
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        super(controls.approve, controls.deny);
        this.context = context;
    }
}
if (false) {
    /** @type {?} */
    Modal.prototype.context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udHJvbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLE1BQU07Ozs7O0lBQ0YsWUFBWSxPQUFzQixFQUFFLElBQW1CO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7OztJQUdNLE9BQU8sQ0FBQyxNQUFROzs7OztJQUNoQixJQUFJLENBQUMsTUFBUTtDQUN2Qjs7OztBQUdELE1BQU0sWUFBOEMsU0FBUSxhQUFtQjs7Ozs7SUFHM0UsWUFBWSxRQUE0QixFQUFFLE9BQVM7OztRQUcvQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDMUI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNob3J0aGFuZCB0byBhdm9pZCB3cml0aW5nIGFycm93IHR5cGVzIGV2ZXJ5d2hlcmUuXG5leHBvcnQgdHlwZSBNb2RhbFJlc3VsdDxUPiA9IChyZXN1bHQ6VCkgPT4gdm9pZDtcblxuLy8gVXNlZCB0byBwYXNzIGFiaWxpdHkgdG8gY29udHJvbCBhIG1vZGFsIHRvIGEgY29tcG9uZW50LlxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbHM8VCwgVT4ge1xuICAgIGNvbnN0cnVjdG9yKGFwcHJvdmU6TW9kYWxSZXN1bHQ8VD4sIGRlbnk6TW9kYWxSZXN1bHQ8VT4pIHtcbiAgICAgICAgdGhpcy5hcHByb3ZlID0gYXBwcm92ZTtcbiAgICAgICAgdGhpcy5kZW55ID0gZGVueTtcbiAgICB9XG5cbiAgICAvLyBVc2UgbWV0aG9kIGhlcmUgcmF0aGVyIHRoYW4gYXJyb3cgdmFyaWFibGVzIHRvIG1ha2UgaW50ZWxsaXNlbnNlIHNob3cgdGhleSdyZSBtZXRob2RzLlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpUKTp2b2lkIHt9XG4gICAgcHVibGljIGRlbnkocmVzdWx0OlUpOnZvaWQge31cbn1cblxuLy8gSW5qZWN0ZWQgaW50byBjdXN0b20gbW9kYWwgY29tcG9uZW50cywgdG8gYWxsb3cgY29udHJvbCBvZiB0aGUgbW9kYWwsIGFuZCBhY2Nlc3MgdG8gYSBjb250ZXh0IG9iamVjdC5cbmV4cG9ydCBjbGFzcyBNb2RhbDxULCBVID0gdW5kZWZpbmVkLCBWID0gdW5kZWZpbmVkPiBleHRlbmRzIE1vZGFsQ29udHJvbHM8VSwgVj4ge1xuICAgIHB1YmxpYyBjb250ZXh0OlQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sczpNb2RhbENvbnRyb2xzPFUsIFY+LCBjb250ZXh0OlQpIHtcbiAgICAgICAgLy8gSW5zdGFuY2VzIG9mIGBNb2RhbENvbnRyb2xzYCBhcmUgb25seSBjcmVhdGVkIGluIHRoZSBgU3VpTW9kYWxgIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyBzbyB3ZSB0YWtlIGFuIGluaXRpYWxpc2VkIGluc3RhbmNlIHJhdGhlciB0aGFuIHJlbWFraW5nIG9uZSBlYWNoIHRpbWUuXG4gICAgICAgIHN1cGVyKGNvbnRyb2xzLmFwcHJvdmUsIGNvbnRyb2xzLmRlbnkpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuIl19