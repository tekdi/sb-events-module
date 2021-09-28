/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
import { DateUtil } from "../../../misc/util/internal";
/** @enum {number} */
var CalendarMode = {
    DateOnly: 0,
    TimeOnly: 1,
    Both: 2,
};
export { CalendarMode };
CalendarMode[CalendarMode.DateOnly] = 'DateOnly';
CalendarMode[CalendarMode.TimeOnly] = 'TimeOnly';
CalendarMode[CalendarMode.Both] = 'Both';
var CalendarService = /** @class */ (function () {
    function CalendarService(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = function () { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    Object.defineProperty(CalendarService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = config;
            config.updateBounds(this._selectedDate || this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "inFinalView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentView === this.config.mappings.finalView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDate;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (date) {
                this._selectedDate = DateUtil.clone(date);
                this.currentDate = DateUtil.clone(date);
            }
            else {
                this._selectedDate = undefined;
            }
            this.config.updateBounds(this._selectedDate || this.currentDate);
            this.onManualUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "minDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._minDate && this.config.dateMinBound) {
                return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
            }
            return this._minDate || this.config.dateMinBound;
        },
        set: /**
         * @param {?} min
         * @return {?}
         */
        function (min) {
            this._minDate = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "maxDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._maxDate && this.config.dateMaxBound) {
                return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
            }
            return this._maxDate || this.config.dateMaxBound;
        },
        set: /**
         * @param {?} max
         * @return {?}
         */
        function (max) {
            this._maxDate = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "firstDayOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstDayOfWeek;
        },
        set: /**
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        function (firstDayOfWeek) {
            if (firstDayOfWeek != undefined) {
                this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            /** @type {?} */
            var current = this.currentDate.getTime();
            if (this._minDate) {
                current = Math.max(current, this._minDate.getTime());
            }
            if (this._maxDate) {
                current = Math.min(current, this._maxDate.getTime());
            }
            this.currentDate = new Date(current);
            this.config.updateBounds(this.currentDate);
            this.currentView = this.config.mappings.initialView;
        }
    };
    /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.changeDate = /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    function (date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    };
    /**
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.zoomOut = /**
     * @param {?} fromView
     * @return {?}
     */
    function (fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    };
    /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.updateView = /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    function (mappings, fromView) {
        /** @type {?} */
        var mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    };
    return CalendarService;
}());
export { CalendarService };
if (false) {
    /** @type {?} */
    CalendarService.prototype._config;
    /** @type {?} */
    CalendarService.prototype.currentView;
    /** @type {?} */
    CalendarService.prototype.currentDate;
    /** @type {?} */
    CalendarService.prototype._selectedDate;
    /** @type {?} */
    CalendarService.prototype._minDate;
    /** @type {?} */
    CalendarService.prototype._maxDate;
    /** @type {?} */
    CalendarService.prototype._firstDayOfWeek;
    /** @type {?} */
    CalendarService.prototype.onDateChange;
    /** @type {?} */
    CalendarService.prototype.onManualUpdate;
    /** @type {?} */
    CalendarService.prototype.localeValues;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0lBS25ELFdBQVk7SUFDWixXQUFZO0lBQ1osT0FBUTs7OzBCQUZSLFFBQVE7MEJBQ1IsUUFBUTswQkFDUixJQUFJO0FBR1IsSUFBQTtJQTJFSSx5QkFBWSxNQUFxQixFQUFTLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3Qjs4QkFZM0MsZUFBUTtRQVh2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUV2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCOzBCQWxGVSxtQ0FBTTs7Ozs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O2tCQUdOLE1BQXFCO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7OzBCQUlyRCx3Q0FBVzs7Ozs7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOzs7OzswQkFN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UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQzs7MEJBN0luQztJQStJQyxDQUFBO0FBbklELDJCQW1JQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcyB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi4vdmlld3MvY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcblxuZXhwb3J0IGVudW0gQ2FsZW5kYXJNb2RlIHtcbiAgICBEYXRlT25seSA9IDAsXG4gICAgVGltZU9ubHkgPSAxLFxuICAgIEJvdGggPSAyXG59XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2NvbmZpZzpDYWxlbmRhckNvbmZpZztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlnKCk6Q2FsZW5kYXJDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29uZmlnKGNvbmZpZzpDYWxlbmRhckNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIGNvbmZpZy51cGRhdGVCb3VuZHModGhpcy5fc2VsZWN0ZWREYXRlIHx8IHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50VmlldzpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHB1YmxpYyBnZXQgaW5GaW5hbFZpZXcoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3VycmVudERhdGU6RGF0ZTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWREYXRlKGRhdGU6RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gRGF0ZVV0aWwuY2xvbmUoZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gRGF0ZVV0aWwuY2xvbmUoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy51cGRhdGVCb3VuZHModGhpcy5fc2VsZWN0ZWREYXRlIHx8IHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB0aGlzLm9uTWFudWFsVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWluRGF0ZT86RGF0ZTtcbiAgICBwcml2YXRlIF9tYXhEYXRlPzpEYXRlO1xuXG4gICAgcHVibGljIGdldCBtaW5EYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLl9taW5EYXRlICYmIHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgPiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQgPyB0aGlzLl9taW5EYXRlIDogdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYXRlIHx8IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1pbkRhdGUobWluOkRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWluRGF0ZSA9IG1pbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heERhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21heERhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSA8IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZCA/IHRoaXMuX21heERhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4RGF0ZShtYXg6RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tYXhEYXRlID0gbWF4O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpcnN0RGF5T2ZXZWVrOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgZmlyc3REYXlPZldlZWsoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3REYXlPZldlZWs7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmaXJzdERheU9mV2VlayhmaXJzdERheU9mV2VlazpudW1iZXIpIHtcbiAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3REYXlPZldlZWsgPSBNYXRoLm1heCgwLCBNYXRoLm1pbig2LCBmaXJzdERheU9mV2VlaykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8RGF0ZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6Q2FsZW5kYXJDb25maWcsIHB1YmxpYyBsb2NhbGVWYWx1ZXM6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgdGhpcy5maXJzdERheU9mV2VlayA9IHRoaXMubG9jYWxlVmFsdWVzLmZpcnN0RGF5T2ZXZWVrO1xuXG4gICAgICAgIHRoaXMub25EYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25NYW51YWxVcGRhdGU6KCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHJlc2V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSB0aGlzLmNvbmZpZy5tYXBwaW5ncy5maW5hbFZpZXc7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBNYXRoLm1heChjdXJyZW50LCB0aGlzLl9taW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBNYXRoLm1pbihjdXJyZW50LCB0aGlzLl9tYXhEYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLmN1cnJlbnREYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmluaXRpYWxWaWV3O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZURhdGUoZGF0ZTpEYXRlLCBmcm9tVmlldzpDYWxlbmRhclZpZXdUeXBlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgaWYgKGZyb21WaWV3ID09PSB0aGlzLmNvbmZpZy5tYXBwaW5ncy5maW5hbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25EYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5jb25maWcubWFwcGluZ3MuY2hhbmdlZCwgZnJvbVZpZXcpO1xuICAgIH1cblxuICAgIHB1YmxpYyB6b29tT3V0KGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5jb25maWcubWFwcGluZ3Muem9vbSwgZnJvbVZpZXcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmlldyhtYXBwaW5nczpNYXA8Q2FsZW5kYXJWaWV3VHlwZSwgQ2FsZW5kYXJWaWV3VHlwZT4sIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICBjb25zdCBtYXBwaW5nID0gbWFwcGluZ3MuZ2V0KGZyb21WaWV3KTtcbiAgICAgICAgaWYgKG1hcHBpbmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHZpZXcgdHlwZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG1hcHBpbmc7XG4gICAgfVxufVxuIl19