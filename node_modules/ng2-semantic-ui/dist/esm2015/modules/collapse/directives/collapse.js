/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, HostBinding, Renderer2 } from "@angular/core";
export class SuiCollapse {
    /**
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._pristine = true;
        // Collapse animation duration is 350ms by default.
        this.collapseDuration = 350;
        this._isExpanded = false;
        this._isCollapsing = false;
    }
    /**
     * @return {?}
     */
    get isExpanded() {
        return this._isExpanded;
    }
    /**
     * @return {?}
     */
    get isCollapsed() {
        return !this.isExpanded && !this.isCollapsing;
    }
    /**
     * @return {?}
     */
    get isCollapsing() {
        return this._isCollapsing;
    }
    /**
     * @return {?}
     */
    get suiCollapse() {
        return this._isExpanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set suiCollapse(value) {
        if (value) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    get _animationDuration() {
        return this._pristine ? 0 : this.collapseDuration;
    }
    /**
     * @return {?}
     */
    hide() {
        this._isCollapsing = true;
        this._isExpanded = false;
        // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
        this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
        // Animate the host element from its scroll height to 0.
        this.animate(this._element.nativeElement.scrollHeight, 0, false, () => {
            this._isCollapsing = false;
        });
    }
    /**
     * @return {?}
     */
    show() {
        this._isCollapsing = true;
        // Animate the host element from its offset height to its scroll height.
        this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, () => {
            // Remove the overflow override to enable user styling once again.
            this._renderer.removeStyle(this._element.nativeElement, "overflow");
            this._isCollapsing = false;
            this._isExpanded = true;
        });
    }
    /**
     * @param {?} startHeight
     * @param {?} endHeight
     * @param {?=} removeOnComplete
     * @param {?=} callback
     * @return {?}
     */
    animate(startHeight, endHeight, removeOnComplete = false, callback = () => { }) {
        /** @type {?} */
        const heightFrames = [
            {
                offset: 0,
                height: `${startHeight}px`
            },
            {
                offset: 1,
                height: `${endHeight}px`
            }
        ];
        if (removeOnComplete) {
            heightFrames.push({
                offset: 1,
                height: `auto`
            });
        }
        // Animate the collapse using the web animations API.
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this._element.nativeElement.animate(heightFrames, {
            delay: 0,
            // Disable animation on 1st collapse / expansion.
            duration: this._animationDuration,
            iterations: 1,
            easing: "ease",
            fill: "both"
        });
        if (this._pristine) {
            // Remove pristine flag when first hit.
            this._pristine = false;
        }
        setTimeout(() => callback(), this.collapseDuration);
    }
}
SuiCollapse.decorators = [
    { type: Directive, args: [{
                selector: "[suiCollapse]"
            },] },
];
/** @nocollapse */
SuiCollapse.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SuiCollapse.propDecorators = {
    isExpanded: [{ type: HostBinding, args: ["class.expanded",] }],
    isCollapsed: [{ type: HostBinding, args: ["class.collapsed",] }],
    isCollapsing: [{ type: HostBinding, args: ["class.collapsing",] }],
    suiCollapse: [{ type: Input }],
    collapseDuration: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SuiCollapse.prototype._isExpanded;
    /** @type {?} */
    SuiCollapse.prototype._isCollapsing;
    /** @type {?} */
    SuiCollapse.prototype._pristine;
    /** @type {?} */
    SuiCollapse.prototype.collapseDuration;
    /** @type {?} */
    SuiCollapse.prototype._element;
    /** @type {?} */
    SuiCollapse.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NvbGxhcHNlL2RpcmVjdGl2ZXMvY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JGLE1BQU07Ozs7O2dCQStDeUIsUUFBbUIsRUFBVSxTQUFtQjtRQUFoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUN2RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7UUFHdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUU1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFwRC9CLElBQ1csVUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMzQjs7OztJQUtELElBQ1csV0FBVztRQUNsQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUNqRDs7OztJQUdELElBQ1csWUFBWTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUM3Qjs7OztJQU9ELElBQ1csV0FBVztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMzQjs7Ozs7UUFHVSxXQUFXLENBQUMsS0FBYTtRQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmOzs7OztRQU1PLGtCQUFrQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Ozs7O0lBYS9DLElBQUk7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7UUFHekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztRQUczRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5QixDQUFDLENBQUM7Ozs7O0lBR0EsSUFBSTtRQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOztRQUcxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTs7WUFFeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDM0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFHQyxPQUFPLENBQUMsV0FBa0IsRUFBRSxTQUFnQixFQUFFLG1CQUEyQixLQUFLLEVBQUUsV0FBc0IsR0FBRyxFQUFFLElBQUc7O1FBQ2xILE1BQU0sWUFBWSxHQUFHO1lBQ2pCO2dCQUNJLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sRUFBRSxHQUFHLFdBQVcsSUFBSTthQUM3QjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sRUFBRSxHQUFHLFNBQVMsSUFBSTthQUMzQjtTQUNKLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDZCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsTUFBTTthQUNqQixDQUFDLENBQUM7U0FDTjs7O1FBSUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUMvQixZQUFZLEVBQ1o7WUFDSSxLQUFLLEVBQUUsQ0FBQzs7WUFFUixRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUNqQyxVQUFVLEVBQUUsQ0FBQztZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLE1BQU07U0FDZixDQUNKLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFFakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7UUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Ozs7WUE1SDNELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTthQUM1Qjs7OztZQUptQixVQUFVO1lBQXNCLFNBQVM7Ozt5QkFPeEQsV0FBVyxTQUFDLGdCQUFnQjswQkFRNUIsV0FBVyxTQUFDLGlCQUFpQjsyQkFNN0IsV0FBVyxTQUFDLGtCQUFrQjswQkFVOUIsS0FBSzsrQkFjTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlDb2xsYXBzZV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlDb2xsYXBzZSB7XG4gICAgLy8gU2V0IHdoZW4gdGhlIGNvbGxhcHNlIGlzIG9wZW4sIGFuZCBub3QgYW5pbWF0aW5nLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmV4cGFuZGVkXCIpXG4gICAgcHVibGljIGdldCBpc0V4cGFuZGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGFuZGVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRXhwYW5kZWQ6Ym9vbGVhbjtcblxuICAgIC8vIFNldCB3aGVuIHRoZSBjb2xsYXBzZSBpcyBjbG9zZWQsIGFuZCBub3QgYW5pbWF0aW5nLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNvbGxhcHNlZFwiKVxuICAgIHB1YmxpYyBnZXQgaXNDb2xsYXBzZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNDb2xsYXBzaW5nO1xuICAgIH1cblxuICAgIC8vIFNldCB3aGVuIHRoZSBjb2xsYXBzZSBpcyBhbmltYXRpbmcuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY29sbGFwc2luZ1wiKVxuICAgIHB1YmxpYyBnZXQgaXNDb2xsYXBzaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0NvbGxhcHNpbmc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNDb2xsYXBzaW5nOmJvb2xlYW47XG5cbiAgICAvLyBGbGFnIHRoYXQgaXMgaW5pdGlhbGx5IHRydWUsIHRvIG1ha2UgdGhlIDFzdCBhbmltYXRpb24gaW5zdGFudGFuZW91cy5cbiAgICBwcml2YXRlIF9wcmlzdGluZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHN1aUNvbGxhcHNlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGFuZGVkO1xuICAgIH1cblxuICAgIC8vIFNldHMgdGhlIHN0YXRlIG9mIHRoZSBjb2xsYXBzZSwgYHRydWVgIGlzIGNvbGxhcHNlZC5cbiAgICBwdWJsaWMgc2V0IHN1aUNvbGxhcHNlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sbGFwc2VEdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwcml2YXRlIGdldCBfYW5pbWF0aW9uRHVyYXRpb24oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpc3RpbmUgPyAwIDogdGhpcy5jb2xsYXBzZUR1cmF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYW5pbWF0aW9uIGR1cmF0aW9uIGlzIDM1MG1zIGJ5IGRlZmF1bHQuXG4gICAgICAgIHRoaXMuY29sbGFwc2VEdXJhdGlvbiA9IDM1MDtcblxuICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2lzQ29sbGFwc2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBGb3JjaWJseSBoaWRlIHRoZSBvdmVyZmxvdyBzbyB0aGF0IGNvbnRlbnQgaXMgbm90IHZpc2libGUgcGFzdCB0aGUgYm91bmRhcmllcyBvZiBpdHMgY29udGFpbmVyLlxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB0aGUgaG9zdCBlbGVtZW50IGZyb20gaXRzIHNjcm9sbCBoZWlnaHQgdG8gMC5cbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQsIDAsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTp2b2lkIHtcbiAgICAgICAgdGhpcy5faXNDb2xsYXBzaW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyBBbmltYXRlIHRoZSBob3N0IGVsZW1lbnQgZnJvbSBpdHMgb2Zmc2V0IGhlaWdodCB0byBpdHMgc2Nyb2xsIGhlaWdodC5cbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQsIHRydWUsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb3ZlcmZsb3cgb3ZlcnJpZGUgdG8gZW5hYmxlIHVzZXIgc3R5bGluZyBvbmNlIGFnYWluLlxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcIm92ZXJmbG93XCIpO1xuXG4gICAgICAgICAgICB0aGlzLl9pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFuaW1hdGUoc3RhcnRIZWlnaHQ6bnVtYmVyLCBlbmRIZWlnaHQ6bnVtYmVyLCByZW1vdmVPbkNvbXBsZXRlOmJvb2xlYW4gPSBmYWxzZSwgY2FsbGJhY2s6KCkgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0RnJhbWVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3N0YXJ0SGVpZ2h0fXB4YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtlbmRIZWlnaHR9cHhgXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHJlbW92ZU9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGhlaWdodEZyYW1lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgYXV0b2BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB0aGUgY29sbGFwc2UgdXNpbmcgdGhlIHdlYiBhbmltYXRpb25zIEFQSS5cbiAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5hbmltYXRlKFxuICAgICAgICAgICAgaGVpZ2h0RnJhbWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYW5pbWF0aW9uIG9uIDFzdCBjb2xsYXBzZSAvIGV4cGFuc2lvbi5cbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5fYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogMSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZVwiLFxuICAgICAgICAgICAgICAgIGZpbGw6IFwiYm90aFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3ByaXN0aW5lKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJpc3RpbmUgZmxhZyB3aGVuIGZpcnN0IGhpdC5cbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKCksIHRoaXMuY29sbGFwc2VEdXJhdGlvbik7XG4gICAgfVxufVxuIl19