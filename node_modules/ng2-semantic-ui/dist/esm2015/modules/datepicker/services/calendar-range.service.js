/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DateUtil, Util } from "../../../misc/util/internal";
import { CalendarItem } from "../directives/calendar-item";
import { DateComparer } from "../classes/date-comparer";
export class CalendarRange {
    /**
     * @return {?}
     */
    get inRange() {
        return this.items.filter(i => !i.isOutsideRange);
    }
    /**
     * @param {?} start
     * @param {?} dates
     * @param {?} items
     * @param {?} grouped
     * @param {?} comparer
     */
    constructor(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    find(item) {
        return this.items.find(i => this._comparer.equal(i.date, item.date));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    findIndex(item) {
        if (!item) {
            return -1;
        }
        return this.items.findIndex(i => this._comparer.equal(i.date, item.date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    containsDate(date) {
        return !!this.inRange.find(i => this._comparer.equal(i.date, date));
    }
}
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
export class CalendarRangeService {
    /**
     * @return {?}
     */
    get dateComparer() {
        return new DateComparer(this.marginal, this.service.inFinalView);
    }
    /**
     * @return {?}
     */
    get length() {
        return this.rows * this.columns;
    }
    /**
     * @return {?}
     */
    get canMoveNext() {
        /** @type {?} */
        const firstItem = this.next.inRange[0];
        if (firstItem && this.service.maxDate) {
            return firstItem.date <= this.service.maxDate;
        }
        return true;
    }
    /**
     * @return {?}
     */
    get canMovePrevious() {
        /** @type {?} */
        const lastItem = this.previous.inRange.slice(-1).pop();
        if (lastItem && this.service.minDate) {
            return lastItem.date >= this.service.minDate;
        }
        return true;
    }
    /**
     * @param {?} interval
     * @param {?} rows
     * @param {?} columns
     */
    constructor(interval, rows, columns) {
        this.interval = interval;
        this.marginal = /** @type {?} */ (interval) + 1;
        this.rows = rows;
        this.columns = columns;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    loadService(service) {
        this.service = service;
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @param {?} forwards
     * @return {?}
     */
    move(forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    }
    /**
     * @return {?}
     */
    moveNext() {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @return {?}
     */
    movePrevious() {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    /**
     * @param {?} forwards
     * @return {?}
     */
    calc(forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    }
    /**
     * @param {?} startDate
     * @return {?}
     */
    calcRange(startDate) {
        /** @type {?} */
        const start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        /** @type {?} */
        const dates = this.calcDates(start);
        /** @type {?} */
        const items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    calcStart(date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    }
    /**
     * @param {?} rangeStart
     * @return {?}
     */
    calcDates(rangeStart) {
        return Util.Array
            .range(this.length)
            .map(i => DateUtil.add(this.marginal, DateUtil.clone(rangeStart), i));
    }
    /**
     * @param {?} dateRange
     * @param {?} baseDate
     * @return {?}
     */
    calcItems(dateRange, baseDate) {
        return dateRange.map(date => {
            /** @type {?} */
            const item = new CalendarItem(date);
            item.isDisabled = !this.dateComparer.between(item.date, this.service.minDate, this.service.maxDate);
            item.isActive = this.dateComparer.equal(item.date, this.service.selectedDate);
            item.isToday = this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            this.configureItem(item, baseDate);
            return item;
        });
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELE1BQU07Ozs7UUFJUyxPQUFPO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7OztJQUtyRCxZQUFZLEtBQVUsRUFBRSxLQUFZLEVBQUUsS0FBb0IsRUFBRSxPQUF3QixFQUFFLFFBQXFCO1FBQ3ZHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQzdCOzs7OztJQUVNLElBQUksQ0FBQyxJQUFpQjtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHbEUsU0FBUyxDQUFDLElBQTZCO1FBQzFDLEVBQUUs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QUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBRTdFOzs7Ozs7SUFFUyxTQUFTLENBQUMsU0FBZ0IsRUFBRSxRQUFhO1FBQy9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFOztZQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRXBDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDZixDQUFDLENBQUM7S0FDTjtDQUdKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiwgRGF0ZVV0aWwsIFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlQ29tcGFyZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLWNvbXBhcmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlIHtcbiAgICBwdWJsaWMgc3RhcnQ6RGF0ZTtcbiAgICBwdWJsaWMgZGF0ZXM6RGF0ZVtdO1xuICAgIHB1YmxpYyBpdGVtczpDYWxlbmRhckl0ZW1bXTtcbiAgICBwdWJsaWMgZ2V0IGluUmFuZ2UoKTpDYWxlbmRhckl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihpID0+ICFpLmlzT3V0c2lkZVJhbmdlKTtcbiAgICB9XG4gICAgcHVibGljIGdyb3VwZWRJdGVtczpDYWxlbmRhckl0ZW1bXVtdO1xuICAgIHByaXZhdGUgX2NvbXBhcmVyOkRhdGVDb21wYXJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OkRhdGUsIGRhdGVzOkRhdGVbXSwgaXRlbXM6Q2FsZW5kYXJJdGVtW10sIGdyb3VwZWQ6Q2FsZW5kYXJJdGVtW11bXSwgY29tcGFyZXI6RGF0ZUNvbXBhcmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5kYXRlcyA9IGRhdGVzO1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuZ3JvdXBlZEl0ZW1zID0gZ3JvdXBlZDtcbiAgICAgICAgdGhpcy5fY29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZChpdGVtOkNhbGVuZGFySXRlbSk6Q2FsZW5kYXJJdGVtIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpID0+IHRoaXMuX2NvbXBhcmVyLmVxdWFsKGkuZGF0ZSwgaXRlbS5kYXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRJbmRleChpdGVtOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCk6bnVtYmVyIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZEluZGV4KGkgPT4gdGhpcy5fY29tcGFyZXIuZXF1YWwoaS5kYXRlLCBpdGVtLmRhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnNEYXRlKGRhdGU6RGF0ZSk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuaW5SYW5nZS5maW5kKGkgPT4gdGhpcy5fY29tcGFyZXIuZXF1YWwoaS5kYXRlLCBkYXRlKSk7XG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBwcmV2aW91czpDYWxlbmRhclJhbmdlO1xuICAgIHB1YmxpYyBjdXJyZW50OkNhbGVuZGFyUmFuZ2U7XG4gICAgcHVibGljIG5leHQ6Q2FsZW5kYXJSYW5nZTtcblxuICAgIHB1YmxpYyBzZXJ2aWNlOkNhbGVuZGFyU2VydmljZTtcblxuICAgIHB1YmxpYyBpbnRlcnZhbDpEYXRlUHJlY2lzaW9uO1xuICAgIHB1YmxpYyBtYXJnaW5hbDpEYXRlUHJlY2lzaW9uO1xuICAgIHB1YmxpYyByb3dzOm51bWJlcjtcbiAgICBwdWJsaWMgY29sdW1uczpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGVDb21wYXJlcigpOkRhdGVDb21wYXJlciB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZUNvbXBhcmVyKHRoaXMubWFyZ2luYWwsIHRoaXMuc2VydmljZS5pbkZpbmFsVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzICogdGhpcy5jb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FuTW92ZU5leHQoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5uZXh0LmluUmFuZ2VbMF07XG4gICAgICAgIGlmIChmaXJzdEl0ZW0gJiYgdGhpcy5zZXJ2aWNlLm1heERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEl0ZW0uZGF0ZSA8PSB0aGlzLnNlcnZpY2UubWF4RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNhbk1vdmVQcmV2aW91cygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMucHJldmlvdXMuaW5SYW5nZS5zbGljZSgtMSkucG9wKCk7XG4gICAgICAgIGlmIChsYXN0SXRlbSAmJiB0aGlzLnNlcnZpY2UubWluRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJdGVtLmRhdGUgPj0gdGhpcy5zZXJ2aWNlLm1pbkRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWw6RGF0ZVByZWNpc2lvbiwgcm93czpudW1iZXIsIGNvbHVtbnM6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGhpcy5tYXJnaW5hbCA9IGludGVydmFsIGFzIG51bWJlciArIDE7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTZXJ2aWNlKHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaCgpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmNhbGNSYW5nZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpO1xuXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLm5leHQodGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5jYWxjUmFuZ2UoRGF0ZVV0aWwucHJldmlvdXModGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKGZvcndhcmRzOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICBpZiAoZm9yd2FyZHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZVByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVOZXh0KCk6dm9pZCB7XG4gICAgICAgIERhdGVVdGlsLm5leHQodGhpcy5pbnRlcnZhbCwgdGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5uZXh0O1xuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmNhbGNSYW5nZShEYXRlVXRpbC5uZXh0KHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVByZXZpb3VzKCk6dm9pZCB7XG4gICAgICAgIERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wcmV2aW91cztcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY2FsY1JhbmdlKERhdGVVdGlsLnByZXZpb3VzKHRoaXMuaW50ZXJ2YWwsIERhdGVVdGlsLmNsb25lKHRoaXMuc2VydmljZS5jdXJyZW50RGF0ZSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsYyhmb3J3YXJkczpib29sZWFuKTpDYWxlbmRhclJhbmdlIHtcbiAgICAgICAgaWYgKGZvcndhcmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1JhbmdlKHN0YXJ0RGF0ZTpEYXRlKTpDYWxlbmRhclJhbmdlIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmNhbGNTdGFydChzdGFydERhdGUpO1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmluRmluYWxWaWV3KSB7XG4gICAgICAgICAgICBEYXRlVXRpbC5zdGFydE9mKHRoaXMubWFyZ2luYWwsIHN0YXJ0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuY2FsY0RhdGVzKHN0YXJ0KTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmNhbGNJdGVtcyhkYXRlcywgc3RhcnREYXRlKTtcblxuICAgICAgICByZXR1cm4gbmV3IENhbGVuZGFyUmFuZ2Uoc3RhcnQsIGRhdGVzLCBpdGVtcywgVXRpbC5BcnJheS5ncm91cChpdGVtcywgdGhpcy5jb2x1bW5zKSwgdGhpcy5kYXRlQ29tcGFyZXIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjU3RhcnQoZGF0ZTpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsLnN0YXJ0T2YodGhpcy5pbnRlcnZhbCwgRGF0ZVV0aWwuY2xvbmUoZGF0ZSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjRGF0ZXMocmFuZ2VTdGFydDpEYXRlKTpEYXRlW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5BcnJheVxuICAgICAgICAgICAgLnJhbmdlKHRoaXMubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcChpID0+IERhdGVVdGlsLmFkZCh0aGlzLm1hcmdpbmFsLCBEYXRlVXRpbC5jbG9uZShyYW5nZVN0YXJ0KSwgaSkpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGNJdGVtcyhkYXRlUmFuZ2U6RGF0ZVtdLCBiYXNlRGF0ZTpEYXRlKTpDYWxlbmRhckl0ZW1bXSB7XG4gICAgICAgIHJldHVybiBkYXRlUmFuZ2UubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBDYWxlbmRhckl0ZW0oZGF0ZSk7XG5cbiAgICAgICAgICAgIGl0ZW0uaXNEaXNhYmxlZCA9ICF0aGlzLmRhdGVDb21wYXJlci5iZXR3ZWVuKGl0ZW0uZGF0ZSwgdGhpcy5zZXJ2aWNlLm1pbkRhdGUsIHRoaXMuc2VydmljZS5tYXhEYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uaXNBY3RpdmUgPSB0aGlzLmRhdGVDb21wYXJlci5lcXVhbChpdGVtLmRhdGUsIHRoaXMuc2VydmljZS5zZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgaXRlbS5pc1RvZGF5ID0gdGhpcy5kYXRlQ29tcGFyZXIuZXF1YWwoaXRlbS5kYXRlLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGl0ZW0uaXNTZWxlY3RhYmxlID0gaXRlbS5pc0Rpc2FibGVkO1xuXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oaXRlbSwgYmFzZURhdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQ7XG59XG4iXX0=