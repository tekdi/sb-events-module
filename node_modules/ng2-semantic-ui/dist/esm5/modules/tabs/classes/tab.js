/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Tab = /** @class */ (function () {
    function Tab(header, content) {
        var _this = this;
        this.id = header.id;
        this.header = header;
        this.content = content;
        // So that the header and content isActive properties are always in sync.
        this.header.isActiveChange
            .subscribe(function () { return _this.content.isActive = _this.isActive; });
    }
    Object.defineProperty(Tab.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.header.isActive;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            // Use `setActiveState` so as not to fire 'external changes' event.
            this.header.setActiveState(active);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.header.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
export { Tab };
if (false) {
    /** @type {?} */
    Tab.prototype.id;
    /** @type {?} */
    Tab.prototype.header;
    /** @type {?} */
    Tab.prototype.content;
    /** @type {?} */
    Tab.prototype.index;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YWJzL2NsYXNzZXMvdGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxJQUFBO0lBTUksYUFBWSxNQUFtQixFQUFFLE9BQXFCO1FBQXRELGlCQVFDO1FBUEcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztRQUd2QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7YUFDckIsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7S0FDL0Q7MEJBR1UseUJBQVE7Ozs7O1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7Ozs7a0JBR1osTUFBYzs7WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7OzBCQUk1QiwyQkFBVTs7Ozs7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs7OztjQS9CdEM7SUFpQ0MsQ0FBQTtBQTlCRCxlQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1aVRhYkhlYWRlciB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1oZWFkZXJcIjtcbmltcG9ydCB7IFN1aVRhYkNvbnRlbnQgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuICAgIHB1YmxpYyBoZWFkZXI6U3VpVGFiSGVhZGVyO1xuICAgIHB1YmxpYyBjb250ZW50OlN1aVRhYkNvbnRlbnQ7XG4gICAgcHVibGljIGluZGV4Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGhlYWRlcjpTdWlUYWJIZWFkZXIsIGNvbnRlbnQ6U3VpVGFiQ29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gaGVhZGVyLmlkO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcblxuICAgICAgICAvLyBTbyB0aGF0IHRoZSBoZWFkZXIgYW5kIGNvbnRlbnQgaXNBY3RpdmUgcHJvcGVydGllcyBhcmUgYWx3YXlzIGluIHN5bmMuXG4gICAgICAgIHRoaXMuaGVhZGVyLmlzQWN0aXZlQ2hhbmdlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29udGVudC5pc0FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIFNhdmVzIGFjY2Vzc2luZyAuaGVhZGVyLmlzQWN0aXZlIGV2ZXJ5IHRpbWUuXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICAvLyBVc2UgYHNldEFjdGl2ZVN0YXRlYCBzbyBhcyBub3QgdG8gZmlyZSAnZXh0ZXJuYWwgY2hhbmdlcycgZXZlbnQuXG4gICAgICAgIHRoaXMuaGVhZGVyLnNldEFjdGl2ZVN0YXRlKGFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZXMgYWNjZXNzaW5nIC5oZWFkZXIuaXNEaXNhYmxlZCBldmVyeSB0aW1lLlxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuaXNEaXNhYmxlZDtcbiAgICB9XG59XG4iXX0=