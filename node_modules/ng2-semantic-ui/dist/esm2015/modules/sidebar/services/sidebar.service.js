/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
/** @type {?} */
export const SidebarTransition = {
    Overlay: /** @type {?} */ ("overlay"),
    Push: /** @type {?} */ ("push"),
    ScaleDown: /** @type {?} */ ("scale down"),
    Uncover: /** @type {?} */ ("uncover"),
    SlideAlong: /** @type {?} */ ("slide along"),
    SlideOut: /** @type {?} */ ("slide out")
};
/** @type {?} */
export const SidebarDirection = {
    Left: /** @type {?} */ ("left"),
    Right: /** @type {?} */ ("right"),
    Top: /** @type {?} */ ("top"),
    Bottom: /** @type {?} */ ("bottom")
};
export class SidebarService {
    /**
     * @return {?}
     */
    get width() {
        if (this.direction === SidebarDirection.Left) {
            return this._width;
        }
        if (this.direction === SidebarDirection.Right) {
            return -this._width;
        }
        return 0;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    set width(width) {
        this._width = width;
        this.widthChange.emit();
    }
    /**
     * @return {?}
     */
    get height() {
        if (this.direction === SidebarDirection.Top) {
            return this._height;
        }
        if (this.direction === SidebarDirection.Bottom) {
            return -this._height;
        }
        return 0;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    set height(height) {
        this._height = height;
        this.heightChange.emit();
    }
    /**
     * @param {?=} isVisible
     */
    constructor(isVisible = false) {
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = SidebarTransition.Uncover;
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    setVisibleState(isVisible) {
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(() => this.wasJustOpened = false);
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(() => this.isAnimating = false, 500);
        }
    }
    /**
     * @return {?}
     */
    toggleVisibleState() {
        this.setVisibleState(!this.isVisible);
    }
}
if (false) {
    /** @type {?} */
    SidebarService.prototype.isVisible;
    /** @type {?} */
    SidebarService.prototype.isAnimating;
    /** @type {?} */
    SidebarService.prototype.wasJustOpened;
    /** @type {?} */
    SidebarService.prototype.direction;
    /** @type {?} */
    SidebarService.prototype._width;
    /** @type {?} */
    SidebarService.prototype._height;
    /** @type {?} */
    SidebarService.prototype.isVisibleChange;
    /** @type {?} */
    SidebarService.prototype.widthChange;
    /** @type {?} */
    SidebarService.prototype.heightChange;
    /** @type {?} */
    SidebarService.prototype._isAnimatingTimeout;
    /** @type {?} */
    SidebarService.prototype.transition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJN0MsYUFBYSxpQkFBaUIsR0FBRztJQUM3QixPQUFPLG9CQUFFLFNBQThCLENBQUE7SUFDdkMsSUFBSSxvQkFBRSxNQUEyQixDQUFBO0lBQ2pDLFNBQVMsb0JBQUUsWUFBaUMsQ0FBQTtJQUM1QyxPQUFPLG9CQUFFLFNBQThCLENBQUE7SUFDdkMsVUFBVSxvQkFBRSxhQUFrQyxDQUFBO0lBQzlDLFFBQVEsb0JBQUUsV0FBZ0MsQ0FBQTtDQUM3QyxDQUFDOztBQUlGLGFBQWEsZ0JBQWdCLEdBQUc7SUFDNUIsSUFBSSxvQkFBRSxNQUEwQixDQUFBO0lBQ2hDLEtBQUssb0JBQUUsT0FBMkIsQ0FBQTtJQUNsQyxHQUFHLG9CQUFFLEtBQXlCLENBQUE7SUFDOUIsTUFBTSxvQkFBRSxRQUE0QixDQUFBO0NBQ3ZDLENBQUM7QUFFRixNQUFNOzs7O1FBVVMsS0FBSztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7O1FBR0YsS0FBSyxDQUFDLEtBQVk7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7UUFHakIsTUFBTTtRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7O1FBR0YsTUFBTSxDQUFDLE1BQWE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7SUFXN0IsWUFBWSxZQUFvQixLQUFLO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0tBQy9DOzs7OztJQUVNLGVBQWUsQ0FBQyxTQUFpQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JGOzs7OztJQUdFLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztDQUU3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJUcmFuc2l0aW9uID0gXCJvdmVybGF5XCIgfCBcInB1c2hcIiB8IFwic2NhbGUgZG93blwiIHwgXCJ1bmNvdmVyXCIgfCBcInNsaWRlIGFsb25nXCIgfCBcInNsaWRlIG91dFwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhclRyYW5zaXRpb24gPSB7XG4gICAgT3ZlcmxheTogXCJvdmVybGF5XCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgUHVzaDogXCJwdXNoXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2NhbGVEb3duOiBcInNjYWxlIGRvd25cIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBVbmNvdmVyOiBcInVuY292ZXJcIiBhcyBTaWRlYmFyVHJhbnNpdGlvbixcbiAgICBTbGlkZUFsb25nOiBcInNsaWRlIGFsb25nXCIgYXMgU2lkZWJhclRyYW5zaXRpb24sXG4gICAgU2xpZGVPdXQ6IFwic2xpZGUgb3V0XCIgYXMgU2lkZWJhclRyYW5zaXRpb25cbn07XG5cbmV4cG9ydCB0eXBlIFNpZGViYXJEaXJlY3Rpb24gPSBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhckRpcmVjdGlvbiA9IHtcbiAgICBMZWZ0OiBcImxlZnRcIiBhcyBTaWRlYmFyRGlyZWN0aW9uLFxuICAgIFJpZ2h0OiBcInJpZ2h0XCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBUb3A6IFwidG9wXCIgYXMgU2lkZWJhckRpcmVjdGlvbixcbiAgICBCb3R0b206IFwiYm90dG9tXCIgYXMgU2lkZWJhckRpcmVjdGlvblxufTtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaXNWaXNpYmxlOmJvb2xlYW47XG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgcHVibGljIHdhc0p1c3RPcGVuZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbjtcblxuICAgIHByaXZhdGUgX3dpZHRoOm51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gU2lkZWJhckRpcmVjdGlvbi5MZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlJpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX3dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgd2lkdGgod2lkdGg6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMud2lkdGhDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTaWRlYmFyRGlyZWN0aW9uLlRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNpZGViYXJEaXJlY3Rpb24uQm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhlaWdodChoZWlnaHQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHRDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1Zpc2libGVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIHB1YmxpYyB3aWR0aENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgcHVibGljIGhlaWdodENoYW5nZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBwcml2YXRlIF9pc0FuaW1hdGluZ1RpbWVvdXQ6bnVtYmVyO1xuXG4gICAgcHVibGljIHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihpc1Zpc2libGU6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FzSnVzdE9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLndpZHRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgICAgICB0aGlzLmhlaWdodENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLndpZHRoID0gMjYwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmlzaWJsZVN0YXRlKGlzVmlzaWJsZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLndhc0p1c3RPcGVuZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZUNoYW5nZS5lbWl0KGlzVmlzaWJsZSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YXNKdXN0T3BlbmVkID0gZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lzQW5pbWF0aW5nVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9pc0FuaW1hdGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UsIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlVmlzaWJsZVN0YXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKCF0aGlzLmlzVmlzaWJsZSk7XG4gICAgfVxufVxuIl19