/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T, U, V
 */
var /**
 * @template T, U, V
 */
ActiveModal = /** @class */ (function () {
    function ActiveModal(instance, componentRef) {
        var _this = this;
        this._config = instance;
        this._componentRef = componentRef;
        // Automatically destroy the modal component when it has been dismissed.
        this.component.onDismiss.subscribe(function () { return _this._componentRef.destroy(); });
    }
    Object.defineProperty(ActiveModal.prototype, "component", {
        get: /**
         * @return {?}
         */
        function () {
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} callback
     * @return {?}
     */
    ActiveModal.prototype.onApprove = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.component.onApprove.subscribe(function (res) { return callback(res); });
        return this;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    ActiveModal.prototype.onDeny = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.component.onDeny.subscribe(function (res) { return callback(res); });
        return this;
    };
    /**
     * @param {?} result
     * @return {?}
     */
    ActiveModal.prototype.approve = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.component.approve(result);
    };
    /**
     * @param {?} result
     * @return {?}
     */
    ActiveModal.prototype.deny = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.component.deny(result);
    };
    /**
     * @return {?}
     */
    ActiveModal.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this._componentRef.destroy();
    };
    return ActiveModal;
}());
/**
 * @template T, U, V
 */
export { ActiveModal };
if (false) {
    /** @type {?} */
    ActiveModal.prototype._config;
    /** @type {?} */
    ActiveModal.prototype._componentRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW1vZGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jbGFzc2VzL2FjdGl2ZS1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7OztBQUFBO0lBU0kscUJBQVksUUFBNkIsRUFBRSxZQUF5QztRQUFwRixpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDOztRQUdsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQztLQUMxRTswQkFWVSxrQ0FBUzs7Ozs7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7SUFZaEMsK0JBQVM7Ozs7Y0FBQyxRQUEyQjtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFLLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBSVQsNEJBQU07Ozs7Y0FBQyxRQUEyQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFLLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBSVQsNkJBQU87Ozs7Y0FBQyxNQUFRO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7SUFJNUIsMEJBQUk7Ozs7Y0FBQyxNQUFRO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7OztJQUl6Qiw2QkFBTzs7OztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7O3NCQTlDckM7SUFnREMsQ0FBQTs7OztBQTNDRCx1QkEyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcgfSBmcm9tIFwiLi9tb2RhbC1jb25maWdcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcblxuLy8gSGVscGVyIGNsYXNzIHRvIHN1cHBvcnQgbWV0aG9kIGNoYWluaW5nIHdoZW4gY2FsbGluZyBgU3VpTW9kYWxTZXJ2aWNlLm9wZW4oLi4uKWAuXG5leHBvcnQgY2xhc3MgQWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgIHByaXZhdGUgX2NvbmZpZzpNb2RhbENvbmZpZzxULCBVLCBWPjtcbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6Q29tcG9uZW50UmVmPFN1aU1vZGFsPFUsIFY+PjtcblxuICAgIC8vIFNob3J0aGFuZCBmb3IgZGlyZWN0IGFjY2VzcyB0byB0aGUgYFN1aU1vZGFsYCBpbnN0YW5jZS5cbiAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpOlN1aU1vZGFsPFUsIFY+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZTpNb2RhbENvbmZpZzxULCBVLCBWPiwgY29tcG9uZW50UmVmOkNvbXBvbmVudFJlZjxTdWlNb2RhbDxVLCBWPj4pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IGRlc3Ryb3kgdGhlIG1vZGFsIGNvbXBvbmVudCB3aGVuIGl0IGhhcyBiZWVuIGRpc21pc3NlZC5cbiAgICAgICAgdGhpcy5jb21wb25lbnQub25EaXNtaXNzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmb3Igd2hlbiBgb25BcHByb3ZlYCBpcyBmaXJlZC5cbiAgICBwdWJsaWMgb25BcHByb3ZlKGNhbGxiYWNrOihyZXN1bHQ6VSkgPT4gdm9pZCk6QWN0aXZlTW9kYWw8VCwgVSwgVj4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkFwcHJvdmUuc3Vic2NyaWJlKChyZXM6VSkgPT4gY2FsbGJhY2socmVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZvciB3aGVuIGBvbkRlbnlgIGlzIGZpcmVkLlxuICAgIHB1YmxpYyBvbkRlbnkoY2FsbGJhY2s6KHJlc3VsdDpWKSA9PiB2b2lkKTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Lm9uRGVueS5zdWJzY3JpYmUoKHJlczpWKSA9PiBjYWxsYmFjayhyZXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgdGhlIGFwcHJvdmUgZXZlbnQgb2YgdGhlIG1vZGFsIG1hbnVhbGx5LlxuICAgIHB1YmxpYyBhcHByb3ZlKHJlc3VsdDpVKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYXBwcm92ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHRoZSBkZW55IGV2ZW50IG9mIHRoZSBtb2RhbCBtYW51YWxseS5cbiAgICBwdWJsaWMgZGVueShyZXN1bHQ6Vik6dm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRlbnkocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmVzIHRoZSBtb2RhbCBjb21wb25lbnQgaW5zdGFudGx5LCB3aXRob3V0IHRyYW5zaXRpb25zIG9yIGZpcmluZyBhbnkgZXZlbnRzLlxuICAgIHB1YmxpYyBkZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxufVxuIl19