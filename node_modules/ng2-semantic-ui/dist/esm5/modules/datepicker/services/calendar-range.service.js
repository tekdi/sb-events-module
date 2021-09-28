/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DateUtil, Util } from "../../../misc/util/internal";
import { CalendarItem } from "../directives/calendar-item";
import { DateComparer } from "../classes/date-comparer";
var CalendarRange = /** @class */ (function () {
    function CalendarRange(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    Object.defineProperty(CalendarRange.prototype, "inRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.items.filter(function (i) { return !i.isOutsideRange; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarRange.prototype.find = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.items.find(function (i) { return _this._comparer.equal(i.date, item.date); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarRange.prototype.findIndex = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!item) {
            return -1;
        }
        return this.items.findIndex(function (i) { return _this._comparer.equal(i.date, item.date); });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarRange.prototype.containsDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        return !!this.inRange.find(function (i) { return _this._comparer.equal(i.date, date); });
    };
    return CalendarRange;
}());
export { CalendarRange };
if (false) {
    /** @type {?} */
    CalendarRange.prototype.start;
    /** @type {?} */
    CalendarRange.prototype.dates;
    /** @type {?} */
    CalendarRange.prototype.items;
    /** @type {?} */
    CalendarRange.prototype.groupedItems;
    /** @type {?} */
    CalendarRange.prototype._comparer;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
CalendarRangeService = /** @class */ (function () {
    function CalendarRangeService(interval, rows, columns) {
        this.interval = interval;
        this.marginal = /** @type {?} */ (interval) + 1;
        this.rows = rows;
        this.columns = columns;
    }
    Object.defineProperty(CalendarRangeService.prototype, "dateComparer", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateComparer(this.marginal, this.service.inFinalView);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "length", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rows * this.columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "canMoveNext", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var firstItem = this.next.inRange[0];
            if (firstItem && this.service.maxDate) {
                return firstItem.date <= this.service.maxDate;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarRangeService.prototype, "canMovePrevious", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var lastItem = this.previous.inRange.slice(-1).pop();
            if (lastItem && this.service.minDate) {
                return lastItem.date >= this.service.minDate;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} service
     * @return {?}
     */
    CalendarRangeService.prototype.loadService = /**
     * @param {?} service
     * @return {?}
     */
    function (service) {
        this.service = service;
        this.refresh();
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @param {?} forwards
     * @return {?}
     */
    CalendarRangeService.prototype.move = /**
     * @param {?} forwards
     * @return {?}
     */
    function (forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.moveNext = /**
     * @return {?}
     */
    function () {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @return {?}
     */
    CalendarRangeService.prototype.movePrevious = /**
     * @return {?}
     */
    function () {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    };
    /**
     * @param {?} forwards
     * @return {?}
     */
    CalendarRangeService.prototype.calc = /**
     * @param {?} forwards
     * @return {?}
     */
    function (forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    };
    /**
     * @param {?} startDate
     * @return {?}
     */
    CalendarRangeService.prototype.calcRange = /**
     * @param {?} startDate
     * @return {?}
     */
    function (startDate) {
        /** @type {?} */
        var start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        /** @type {?} */
        var dates = this.calcDates(start);
        /** @type {?} */
        var items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarRangeService.prototype.calcStart = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    };
    /**
     * @param {?} rangeStart
     * @return {?}
     */
    CalendarRangeService.prototype.calcDates = /**
     * @param {?} rangeStart
     * @return {?}
     */
    function (rangeStart) {
        var _this = this;
        return Util.Array
            .range(this.length)
            .map(function (i) { return DateUtil.add(_this.marginal, DateUtil.clone(rangeStart), i); });
    };
    /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeService.prototype.calcItems = /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    function (dateRange, baseDate) {
        var _this = this;
        return dateRange.map(function (date) {
            /** @type {?} */
            var item = new CalendarItem(date);
            item.isDisabled = !_this.dateComparer.between(item.date, _this.service.minDate, _this.service.maxDate);
            item.isActive = _this.dateComparer.equal(item.date, _this.service.selectedDate);
            item.isToday = _this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            _this.configureItem(item, baseDate);
            return item;
        });
    };
    return CalendarRangeService;
}());
/**
 * @abstract
 */
export { CalendarRangeService };
if (false) {
    /** @type {?} */
    CalendarRangeService.prototype.previous;
    /** @type {?} */
    CalendarRangeService.prototype.current;
    /** @type {?} */
    CalendarRangeService.prototype.next;
    /** @type {?} */
    CalendarRangeService.prototype.service;
    /** @type {?} */
    CalendarRangeService.prototype.interval;
    /** @type {?} */
    CalendarRangeService.prototype.marginal;
    /** @type {?} */
    CalendarRangeService.prototype.rows;
    /** @type {?} */
    CalendarRangeService.prototype.columns;
    /**
     * @abstract
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeService.prototype.configureItem = function (item, baseDate) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELElBQUE7SUFVSSx1QkFBWSxLQUFVLEVBQUUsS0FBWSxFQUFFLEtBQW9CLEVBQUUsT0FBd0IsRUFBRSxRQUFxQjtRQUN2RyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUM3QjswQkFaVSxrQ0FBTzs7Ozs7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQWpCLENBQWlCLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBYTlDLDRCQUFJOzs7O2NBQUMsSUFBaUI7O1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7Ozs7OztJQUds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QUExSEQsZ0NBMEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiwgRGF0ZVV0aWwsIFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlQ29tcGFyZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLWNvbXBhcmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlIHtcbiAgICBwdWJsaWMgc3RhcnQ6RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZXM6RGF0ZVtdO1xuICAgIHB1YmxpYyBpdGVtczpDYWxlbmRhckl0ZW1bXTtcbiAgICBwdWJsaWMgZ2V0IGluUmFuZ2UoKTpDYWxlbmRhckl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihpID0+ICFpLmlzT3V0c2lkZVJhbmdlKTtcbiAgICB9XG4gICAgcHVibGljIGdyb3VwZWRJdGVtczpDYWxlbmRhckl0ZW1bXVtdO1xuICAgIHByaXZhdGUgX2NvbXBhcmVyOkRhdGVDb21wYXJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OkRhdGUsIGRhdGVzOkRhdGVbXSwgaXRlbXM6Q2FsZW5kYXJJdGVtW10sIGdyb3VwZWQ6Q2FsZW5kYXJJdGVtW11bXSwgY29tcGFyZXI6RGF0ZUNvbXBhcmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5kYXRlcyA9IGRhdGVzO1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuZ3JvdXBlZEl0ZW1zID0gZ3JvdXBlZDtcbiAgICAgICAgdGhpcy5fY29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZChpdGVtOkNhbGVuZGFySXRlbSk6Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRJbmRleChpdGVtOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZEluZGV4KGkgPT4gdGhpcy5fY29tcGFyZXIuZXF1YWwoaS5kYXRlLCBpdGVtLmRhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnNEYXRlKGRhdGU6RGF0ZSk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuaW5SYW5nZS5maW5kKGkgPT4gdGhpcy5fY29tcGFyZXIuZXF1YWwoaS5kYXRlLCBkYXRlKSk7XG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBwcmV2aW91czpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBjdXJyZW50OkNhbGVuZGFyUmFuZ2U7XG4gICAgcHVibGljIG5leHQ6Q2FsZW5kYXJSYW5nZTtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIHB1YmxpYyBpbnRlcnZhbDpEYXRlUHJlY2lzaW9uO1xuICAgIHB1YmxpYyBtYXJnaW5hbDpEYXRlUHJlY2lzaW9uO1xuICAgIHB1YmxpYyByb3dzOm51bWJlcjtcbiAgICBwdWJsaWMgY29sdW1uczpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGVDb21wYXJlcigpOkRhdGVDb21wYXJlciB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZUNvbXBhcmVyKHRoaXMubWFyZ2luYWwsIHRoaXMuc2VydmljZS5pbkZpbmFsVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzICogdGhpcy5jb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FuTW92ZU5leHQoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5uZXh0LmluUmFuZ2VbMF07XG4gICAgICAgIGlmIChmaXJzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1heERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEl0ZW0uZGF0ZSA8PSB0aGlzLnNlcnZpY2UubWF4RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVQcmV2aW91cygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMucHJldmlvdXMuaW5SYW5nZS5zbGljZSgtMSkucG9wKCk7XG4gICAgICAgIGlmIChsYXN0SXRlbSAmJiB0aGlzLnNlcnZpY2UubWluRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJdGVtLmRhdGUgPj0gdGhpcy5zZXJ2aWNlLm1pbkRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbiwgcm93czpudW1iZXIsIGNvbHVtbnM6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGhpcy5tYXJnaW5hbCA9IGludGVydmFsIGFzIG51bWJlciArIDE7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTZXJ2aWNlKHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaCgpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmNhbGNSYW5nZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLm5leHQodGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwucHJldmlvdXModGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKGZvcndhcmRzOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAoZm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZVByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVOZXh0KCk6dm9pZCB7XG4gICAgICAgIERhdGVVdGlsLm5leHQodGhpcy5pbnRlcnZhbCwgdGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5uZXh0O1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVByZXZpb3VzKCk6dm9pZCB7XG4gICAgICAgIERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wcmV2aW91cztcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsYyhmb3J3YXJkczpib29sZWFuKTpDYWxlbmRhclJhbmdlIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1JhbmdlKHN0YXJ0RGF0ZTpEYXRlKTpDYWxlbmRhclJhbmdlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmNhbGNTdGFydChzdGFydERhdGUpO1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmluRmluYWxWaWV3KSB7XG4gICAgICAgICAgICBEYXRlVXRpbC5zdGFydE9mKHRoaXMubWFyZ2luYWwsIHN0YXJ0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuY2FsY0RhdGVzKHN0YXJ0KTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmNhbGNJdGVtcyhkYXRlcywgc3RhcnREYXRlKTtcblxuICAgICAgICByZXR1cm4gbmV3IENhbGVuZGFyUmFuZ2Uoc3RhcnQsIGRhdGVzLCBpdGVtcywgVXRpbC5BcnJheS5ncm91cChpdGVtcywgdGhpcy5jb2x1bW5zKSwgdGhpcy5kYXRlQ29tcGFyZXIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjU3RhcnQoZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsLnN0YXJ0T2YodGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUoZGF0ZSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjRGF0ZXMocmFuZ2VTdGFydDpEYXRlKTpEYXRlW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5BcnJheVxuICAgICAgICAgICAgLnJhbmdlKHRoaXMubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcChpID0+IERhdGVVdGlsLmFkZCh0aGlzLm1hcmdpbmFsLCBEYXRlVXRpbC5jbG9uZShyYW5nZVN0YXJ0KSwgaSkpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGNJdGVtcyhkYXRlUmFuZ2U6RGF0ZVtdLCBiYXNlRGF0ZTpEYXRlKTpDYWxlbmRhckl0ZW1bXSB7XG4gICAgICAgIHJldHVybiBkYXRlUmFuZ2UubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBDYWxlbmRhckl0ZW0oZGF0ZSk7XG5cbiAgICAgICAgICAgIGl0ZW0uaXNEaXNhYmxlZCA9ICF0aGlzLmRhdGVDb21wYXJlci5iZXR3ZWVuKGl0ZW0uZGF0ZSwgdGhpcy5zZXJ2aWNlLm1pbkRhdGUsIHRoaXMuc2VydmljZS5tYXhEYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNBY3RpdmUgPSB0aGlzLmRhdGVDb21wYXJlci5lcXVhbChpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgaXRlbS5pc1RvZGF5ID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGl0ZW0uaXNTZWxlY3RhYmxlID0gaXRlbS5pc0Rpc2FibGVkO1xuXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oaXRlbSwgYmFzZURhdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQ7XG59XG4iXX0=