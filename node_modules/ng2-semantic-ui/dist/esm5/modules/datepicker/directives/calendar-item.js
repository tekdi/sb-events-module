/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, HostBinding, HostListener, Input, EventEmitter, ChangeDetectorRef } from "@angular/core";
var CalendarItem = /** @class */ (function () {
    function CalendarItem(date) {
        this.date = date;
    }
    return CalendarItem;
}());
export { CalendarItem };
if (false) {
    /** @type {?} */
    CalendarItem.prototype.date;
    /** @type {?} */
    CalendarItem.prototype.humanReadable;
    /** @type {?} */
    CalendarItem.prototype.isDisabled;
    /** @type {?} */
    CalendarItem.prototype.isActive;
    /** @type {?} */
    CalendarItem.prototype.isOutsideRange;
    /** @type {?} */
    CalendarItem.prototype.isToday;
    /** @type {?} */
    CalendarItem.prototype.isSelectable;
}
var SuiCalendarItem = /** @class */ (function () {
    function SuiCalendarItem(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.isToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiCalendarItem.prototype.onMouseMove = /**
     * @return {?}
     */
    function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    };
    /**
     * @return {?}
     */
    SuiCalendarItem.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    };
    SuiCalendarItem.decorators = [
        { type: Directive, args: [{
                    selector: "[calendarItem]"
                },] },
    ];
    /** @nocollapse */
    SuiCalendarItem.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    SuiCalendarItem.propDecorators = {
        item: [{ type: Input, args: ["calendarItem",] }],
        isSelectable: [{ type: HostBinding, args: ["class.disabled",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        isToday: [{ type: HostBinding, args: ["class.today",] }],
        hasFocus: [{ type: HostBinding, args: ["class.focus",] }],
        onMouseMove: [{ type: HostListener, args: ["mousemove",] }],
        onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
    };
    return SuiCalendarItem;
}());
export { SuiCalendarItem };
if (false) {
    /** @type {?} */
    SuiCalendarItem.prototype.item;
    /** @type {?} */
    SuiCalendarItem.prototype.hasFocus;
    /** @type {?} */
    SuiCalendarItem.prototype.onFocussed;
    /** @type {?} */
    SuiCalendarItem.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLElBQUE7SUFTSSxzQkFBWSxJQUFTO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCO3VCQWRMO0lBZUMsQ0FBQTtBQVpELHdCQVlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2QkcseUJBQW1CLGNBQWdDO1FBQWhDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FDakQ7SUF4QkQsc0JBQ1cseUNBQVk7Ozs7UUFEdkI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDakM7OztPQUFBO0lBRUQsc0JBQ1cscUNBQVE7Ozs7UUFEbkI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0I7OztPQUFBO0lBRUQsc0JBQ1csb0NBQU87Ozs7UUFEbEI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUI7OztPQUFBOzs7O0lBY00scUNBQVc7OztJQURsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0o7Ozs7SUFHTSxzQ0FBWTs7O0lBRG5CO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDOztnQkE3Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzdCOzs7O2dCQWxCbUUsaUJBQWlCOzs7dUJBb0JoRixLQUFLLFNBQUMsY0FBYzsrQkFHcEIsV0FBVyxTQUFDLGdCQUFnQjsyQkFLNUIsV0FBVyxTQUFDLGNBQWM7MEJBSzFCLFdBQVcsU0FBQyxhQUFhOzJCQUt6QixXQUFXLFNBQUMsYUFBYTs4QkFXekIsWUFBWSxTQUFDLFdBQVc7K0JBUXhCLFlBQVksU0FBQyxZQUFZOzswQkExRDlCOztTQW9CYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFySXRlbSB7XG4gICAgcHVibGljIGRhdGU6RGF0ZTtcbiAgICBwdWJsaWMgaHVtYW5SZWFkYWJsZTpzdHJpbmc7XG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNPdXRzaWRlUmFuZ2U6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNUb2RheTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1NlbGVjdGFibGU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGU6RGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2NhbGVuZGFySXRlbV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckl0ZW0ge1xuICAgIEBJbnB1dChcImNhbGVuZGFySXRlbVwiKVxuICAgIHB1YmxpYyBpdGVtOkNhbGVuZGFySXRlbTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGFibGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1NlbGVjdGFibGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzQWN0aXZlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRvZGF5XCIpXG4gICAgcHVibGljIGdldCBpc1RvZGF5KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNUb2RheTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5mb2N1c1wiKVxuICAgIHB1YmxpYyBoYXNGb2N1czpib29sZWFuO1xuXG4gICAgcHVibGljIG9uRm9jdXNzZWQ6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uRm9jdXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbW92ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTW92ZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkZvY3Vzc2VkLmVtaXQodGhpcy5oYXNGb2N1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICB9XG59XG4iXX0=