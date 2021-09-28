/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @typedef {?} */
var ModalResult;
export { ModalResult };
/**
 * @template T, U
 */
var /**
 * @template T, U
 */
ModalControls = /** @class */ (function () {
    function ModalControls(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.approve = /**
     * @param {?} result
     * @return {?}
     */
    function (result) { };
    /**
     * @param {?} result
     * @return {?}
     */
    ModalControls.prototype.deny = /**
     * @param {?} result
     * @return {?}
     */
    function (result) { };
    return ModalControls;
}());
/**
 * @template T, U
 */
export { ModalControls };
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
Modal = /** @class */ (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal(controls, context) {
        var _this = 
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        _super.call(this, controls.approve, controls.deny) || this;
        _this.context = context;
        return _this;
    }
    return Modal;
}(ModalControls));
/**
 * @template T, U, V
 */
export { Modal };
if (false) {
    /** @type {?} */
    Modal.prototype.context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udHJvbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NsYXNzZXMvbW9kYWwtY29udHJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTs7O0FBQUE7SUFDSSx1QkFBWSxPQUFzQixFQUFFLElBQW1CO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7OztJQUdNLCtCQUFPOzs7O2NBQUMsTUFBUTs7Ozs7SUFDaEIsNEJBQUk7Ozs7Y0FBQyxNQUFRO3dCQVp4QjtJQWFDLENBQUE7Ozs7QUFURCx5QkFTQzs7OztBQUdEOzs7QUFBQTtJQUE0RCxpQ0FBbUI7SUFHM0UsZUFBWSxRQUE0QixFQUFFLE9BQVM7UUFBbkQ7UUFDSSwrRUFBK0U7UUFDL0UseUVBQXlFO1FBQ3pFLGtCQUFNLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUd6QztRQURHLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztLQUMxQjtnQkF6Qkw7RUFnQjRELGFBQWEsRUFVeEUsQ0FBQTs7OztBQVZELGlCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2hvcnRoYW5kIHRvIGF2b2lkIHdyaXRpbmcgYXJyb3cgdHlwZXMgZXZlcnl3aGVyZS5cbmV4cG9ydCB0eXBlIE1vZGFsUmVzdWx0PFQ+ID0gKHJlc3VsdDpUKSA9PiB2b2lkO1xuXG4vLyBVc2VkIHRvIHBhc3MgYWJpbGl0eSB0byBjb250cm9sIGEgbW9kYWwgdG8gYSBjb21wb25lbnQuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250cm9sczxULCBVPiB7XG4gICAgY29uc3RydWN0b3IoYXBwcm92ZTpNb2RhbFJlc3VsdDxUPiwgZGVueTpNb2RhbFJlc3VsdDxVPikge1xuICAgICAgICB0aGlzLmFwcHJvdmUgPSBhcHByb3ZlO1xuICAgICAgICB0aGlzLmRlbnkgPSBkZW55O1xuICAgIH1cblxuICAgIC8vIFVzZSBtZXRob2QgaGVyZSByYXRoZXIgdGhhbiBhcnJvdyB2YXJpYWJsZXMgdG8gbWFrZSBpbnRlbGxpc2Vuc2Ugc2hvdyB0aGV5J3JlIG1ldGhvZHMuXG4gICAgcHVibGljIGFwcHJvdmUocmVzdWx0OlQpOnZvaWQge31cbiAgICBwdWJsaWMgZGVueShyZXN1bHQ6VSk6dm9pZCB7fVxufVxuXG4vLyBJbmplY3RlZCBpbnRvIGN1c3RvbSBtb2RhbCBjb21wb25lbnRzLCB0byBhbGxvdyBjb250cm9sIG9mIHRoZSBtb2RhbCwgYW5kIGFjY2VzcyB0byBhIGNvbnRleHQgb2JqZWN0LlxuZXhwb3J0IGNsYXNzIE1vZGFsPFQsIFUgPSB1bmRlZmluZWQsIFYgPSB1bmRlZmluZWQ+IGV4dGVuZHMgTW9kYWxDb250cm9sczxVLCBWPiB7XG4gICAgcHVibGljIGNvbnRleHQ6VDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xzOk1vZGFsQ29udHJvbHM8VSwgVj4sIGNvbnRleHQ6VCkge1xuICAgICAgICAvLyBJbnN0YW5jZXMgb2YgYE1vZGFsQ29udHJvbHNgIGFyZSBvbmx5IGNyZWF0ZWQgaW4gdGhlIGBTdWlNb2RhbGAgY29uc3RydWN0b3IsXG4gICAgICAgIC8vIHNvIHdlIHRha2UgYW4gaW5pdGlhbGlzZWQgaW5zdGFuY2UgcmF0aGVyIHRoYW4gcmVtYWtpbmcgb25lIGVhY2ggdGltZS5cbiAgICAgICAgc3VwZXIoY29udHJvbHMuYXBwcm92ZSwgY29udHJvbHMuZGVueSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG59XG4iXX0=