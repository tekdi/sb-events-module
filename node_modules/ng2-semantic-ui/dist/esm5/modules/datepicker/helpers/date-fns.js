/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { format, parse } from "date-fns";
import * as defaultLocale from "date-fns/locale/en-US";
/**
 * @record
 */
function IDateFnsLocaleValues() { }
/**
 * @record
 */
function IDateFnsHelperOptions() { }
/** @type {?|undefined} */
IDateFnsHelperOptions.prototype.type;
/** @typedef {?} */
var DateFnsHelper;
/** @typedef {?} */
var DateFnsWeekStartsOn;
/**
 * @record
 */
function IDateFnsCustomLocale() { }
/** @type {?} */
IDateFnsCustomLocale.prototype.localize;
/** @type {?} */
IDateFnsCustomLocale.prototype.match;
/** @type {?|undefined} */
IDateFnsCustomLocale.prototype.options;
/**
 * @param {?} values
 * @param {?} defaultType
 * @param {?=} indexCallback
 * @return {?}
 */
function buildLocalizeFn(values, defaultType, indexCallback) {
    return function (dirtyIndex, _a) {
        var type = (_a === void 0 ? { type: defaultType } : _a).type;
        /** @type {?} */
        var index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
        return values[type][index];
    };
}
/**
 * @param {?} values
 * @param {?} defaultType
 * @return {?}
 */
function buildLocalizeArrayFn(values, defaultType) {
    return function (_a) {
        var type = (_a === void 0 ? { type: defaultType } : _a).type;
        return values[type];
    };
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildMatchFn(patterns, defaultType) {
    return function (dirtyString, _a) {
        var type = (_a === void 0 ? { type: defaultType } : _a).type;
        return dirtyString.match("^(" + patterns[type].join("|") + ")");
    };
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildParseFn(patterns, defaultType) {
    return function (_a, _b) {
        var _c = tslib_1.__read(_a, 2), result = _c[1];
        var type = (_b === void 0 ? { type: defaultType } : _b).type;
        return (patterns[type] || patterns[defaultType])
            .map(function (p) { return new RegExp("^" + p); })
            .findIndex(function (pattern) { return pattern.test(result); });
    };
}
var DateFnsParser = /** @class */ (function () {
    function DateFnsParser(locale) {
        this._weekStartsOn = /** @type {?} */ (locale.firstDayOfWeek);
        /** @type {?} */
        var weekdayValues = {
            long: locale.weekdays,
            short: locale.weekdaysShort,
            narrow: locale.weekdaysNarrow
        };
        /** @type {?} */
        var monthValues = {
            long: locale.months,
            short: locale.monthsShort
        };
        /** @type {?} */
        var timeOfDayValues = {
            long: locale.timesOfDay,
            uppercase: locale.timesOfDayUppercase,
            lowercase: locale.timesOfDayLowercase
        };
        /** @type {?} */
        var timeOfDayMatchValues = {
            long: locale.timesOfDay,
            short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
        };
        this._locale = /** @type {?} */ (defaultLocale);
        this._locale.localize = tslib_1.__assign({}, this._locale.localize, {
            weekday: buildLocalizeFn(weekdayValues, "long"),
            weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
            month: buildLocalizeFn(monthValues, "long"),
            months: buildLocalizeArrayFn(monthValues, "long"),
            timeOfDay: buildLocalizeFn(timeOfDayValues, "long", function (hours) {
                return hours / 12 >= 1 ? 1 : 0;
            }),
            timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
        });
        this._locale.match = tslib_1.__assign({}, this._locale.match, {
            weekdays: buildMatchFn(weekdayValues, "long"),
            weekday: buildParseFn(weekdayValues, "long"),
            months: buildMatchFn(monthValues, "long"),
            month: buildParseFn(monthValues, "long"),
            timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
            timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
        });
    }
    Object.defineProperty(DateFnsParser.prototype, "_config", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                weekStartsOn: this._weekStartsOn,
                locale: this._locale
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} d
     * @param {?} f
     * @return {?}
     */
    DateFnsParser.prototype.format = /**
     * @param {?} d
     * @param {?} f
     * @return {?}
     */
    function (d, f) {
        return format(d, f, this._config);
    };
    /**
     * @param {?} dS
     * @param {?} f
     * @param {?} bD
     * @return {?}
     */
    DateFnsParser.prototype.parse = /**
     * @param {?} dS
     * @param {?} f
     * @param {?} bD
     * @return {?}
     */
    function (dS, f, bD) {
        return parse(dS, f, bD, this._config);
    };
    return DateFnsParser;
}());
export { DateFnsParser };
if (false) {
    /** @type {?} */
    DateFnsParser.prototype._weekStartsOn;
    /** @type {?} */
    DateFnsParser.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvaGVscGVycy9kYXRlLWZucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxhQUFhLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QnZELHlCQUF5QixNQUEyQixFQUMzQixXQUFrQixFQUNsQixhQUEwQztJQUUvRCxNQUFNLENBQUMsVUFBQyxVQUFpQixFQUFFLEVBQWdDO1lBQTlCLHdEQUFJOztRQUM3QixJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUIsQ0FBQztDQUNMOzs7Ozs7QUFFRCw4QkFBOEIsTUFBMkIsRUFBRSxXQUFrQjtJQUN6RSxNQUFNLENBQUMsVUFBQyxFQUFnQztZQUE5Qix3REFBSTtRQUErQixPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFBWixDQUFZLENBQUM7Q0FDN0Q7Ozs7OztBQUVELHNCQUFzQixRQUE2QixFQUFFLFdBQWtCO0lBQ25FLE1BQU0sQ0FBQyxVQUFDLFdBQVcsRUFBRSxFQUFnQztZQUE5Qix3REFBSTtRQUN2QixPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7SUFBbkQsQ0FBbUQsQ0FBQztDQUMzRDs7Ozs7O0FBRUQsc0JBQXNCLFFBQTZCLEVBQUUsV0FBa0I7SUFDbkUsTUFBTSxDQUFDLFVBQUMs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SSxDQUFDLGFBQWE7Z0JBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN2QixDQUFDOzs7Ozs7Ozs7O0lBdURDLDhCQUFNOzs7OztjQUFDLENBQU0sRUFBRSxDQUFRO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBRy9CLDZCQUFLOzs7Ozs7Y0FBQyxFQUFTLEVBQUUsQ0FBUSxFQUFFLEVBQU87UUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O3dCQTdIOUM7SUErSEMsQ0FBQTtBQXRFRCx5QkFzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcyB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgKiBhcyBkZWZhdWx0TG9jYWxlIGZyb20gXCJkYXRlLWZucy9sb2NhbGUvZW4tVVNcIjtcblxuaW50ZXJmYWNlIElEYXRlRm5zTG9jYWxlVmFsdWVzIHsgW25hbWU6c3RyaW5nXTpzdHJpbmdbXTsgfVxuaW50ZXJmYWNlIElEYXRlRm5zSGVscGVyT3B0aW9ucyB7IHR5cGU/OnN0cmluZzsgfVxudHlwZSBEYXRlRm5zSGVscGVyPFUsIFQ+ID0gKHZhbHVlOlUsIG9wdGlvbnM6SURhdGVGbnNIZWxwZXJPcHRpb25zKSA9PiBUO1xudHlwZSBEYXRlRm5zV2Vla1N0YXJ0c09uID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcblxuaW50ZXJmYWNlIElEYXRlRm5zQ3VzdG9tTG9jYWxlIHtcbiAgICBsb2NhbGl6ZTp7XG4gICAgICAgIHdlZWtkYXk6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz47XG4gICAgICAgIHdlZWtkYXlzOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT47XG4gICAgICAgIG1vbnRoOkRhdGVGbnNIZWxwZXI8bnVtYmVyLCBzdHJpbmc+O1xuICAgICAgICBtb250aHM6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPjtcbiAgICAgICAgdGltZU9mRGF5OkRhdGVGbnNIZWxwZXI8bnVtYmVyLCBzdHJpbmc+O1xuICAgICAgICB0aW1lc09mRGF5OkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT47XG4gICAgfTtcbiAgICBtYXRjaDp7XG4gICAgICAgIHdlZWtkYXlzOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD47XG4gICAgICAgIHdlZWtkYXk/OkRhdGVGbnNIZWxwZXI8UmVnRXhwTWF0Y2hBcnJheSwgbnVtYmVyPjtcbiAgICAgICAgbW9udGhzOkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD47XG4gICAgICAgIG1vbnRoPzpEYXRlRm5zSGVscGVyPFJlZ0V4cE1hdGNoQXJyYXksIG51bWJlcj47XG4gICAgICAgIHRpbWVzT2ZEYXk6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPjtcbiAgICAgICAgdGltZU9mRGF5PzpEYXRlRm5zSGVscGVyPFJlZ0V4cE1hdGNoQXJyYXksIG51bWJlcj47XG4gICAgfTtcbiAgICBvcHRpb25zPzp7XG4gICAgICAgIHdlZWtTdGFydHNPbj86bnVtYmVyO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbih2YWx1ZXM6SURhdGVGbnNMb2NhbGVWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFR5cGU6c3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q2FsbGJhY2s/OihvbGRJbmRleDpudW1iZXIpID0+IG51bWJlcik6RGF0ZUZuc0hlbHBlcjxudW1iZXIsIHN0cmluZz4ge1xuXG4gICAgcmV0dXJuIChkaXJ0eUluZGV4Om51bWJlciwgeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleENhbGxiYWNrID8gaW5kZXhDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgICAgIHJldHVybiB2YWx1ZXNbdHlwZV1baW5kZXhdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVBcnJheUZuKHZhbHVlczpJRGF0ZUZuc0xvY2FsZVZhbHVlcywgZGVmYXVsdFR5cGU6c3RyaW5nKTpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4gKHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PiB2YWx1ZXNbdHlwZV07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihwYXR0ZXJuczpJRGF0ZUZuc0xvY2FsZVZhbHVlcywgZGVmYXVsdFR5cGU6c3RyaW5nKTpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+IHtcbiAgICByZXR1cm4gKGRpcnR5U3RyaW5nLCB7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT5cbiAgICAgICAgZGlydHlTdHJpbmcubWF0Y2goYF4oJHtwYXR0ZXJuc1t0eXBlXS5qb2luKFwifFwiKX0pYCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyc2VGbihwYXR0ZXJuczpJRGF0ZUZuc0xvY2FsZVZhbHVlcywgZGVmYXVsdFR5cGU6c3RyaW5nKTpEYXRlRm5zSGVscGVyPFJlZ0V4cE1hdGNoQXJyYXksIG51bWJlcj4ge1xuICAgIHJldHVybiAoWywgcmVzdWx0XSwgeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+XG4gICAgICAgIChwYXR0ZXJuc1t0eXBlXSB8fCBwYXR0ZXJuc1tkZWZhdWx0VHlwZV0pXG4gICAgICAgICAgICAubWFwKHAgPT4gbmV3IFJlZ0V4cChgXiR7cH1gKSlcbiAgICAgICAgICAgIC5maW5kSW5kZXgocGF0dGVybiA9PiBwYXR0ZXJuLnRlc3QocmVzdWx0KSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlRm5zUGFyc2VyIHtcbiAgICBwcml2YXRlIF93ZWVrU3RhcnRzT246RGF0ZUZuc1dlZWtTdGFydHNPbjtcbiAgICBwcml2YXRlIF9sb2NhbGU6SURhdGVGbnNDdXN0b21Mb2NhbGU7XG5cbiAgICBwcml2YXRlIGdldCBfY29uZmlnKCk6YW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdlZWtTdGFydHNPbjogdGhpcy5fd2Vla1N0YXJ0c09uLFxuICAgICAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGU6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMpIHtcbiAgICAgICAgdGhpcy5fd2Vla1N0YXJ0c09uID0gbG9jYWxlLmZpcnN0RGF5T2ZXZWVrIGFzIERhdGVGbnNXZWVrU3RhcnRzT247XG5cbiAgICAgICAgY29uc3Qgd2Vla2RheVZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS53ZWVrZGF5cyxcbiAgICAgICAgICAgIHNob3J0OiBsb2NhbGUud2Vla2RheXNTaG9ydCxcbiAgICAgICAgICAgIG5hcnJvdzogbG9jYWxlLndlZWtkYXlzTmFycm93XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gICAgICAgICAgICBsb25nOiBsb2NhbGUubW9udGhzLFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS5tb250aHNTaG9ydFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVPZkRheVZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS50aW1lc09mRGF5LFxuICAgICAgICAgICAgdXBwZXJjYXNlOiBsb2NhbGUudGltZXNPZkRheVVwcGVyY2FzZSxcbiAgICAgICAgICAgIGxvd2VyY2FzZTogbG9jYWxlLnRpbWVzT2ZEYXlMb3dlcmNhc2VcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0aW1lT2ZEYXlNYXRjaFZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvbmc6IGxvY2FsZS50aW1lc09mRGF5LFxuICAgICAgICAgICAgc2hvcnQ6IGxvY2FsZS50aW1lc09mRGF5VXBwZXJjYXNlLmNvbmNhdChsb2NhbGUudGltZXNPZkRheUxvd2VyY2FzZSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9sb2NhbGUgPSBkZWZhdWx0TG9jYWxlIGFzIGFueTtcbiAgICAgICAgdGhpcy5fbG9jYWxlLmxvY2FsaXplID0ge1xuICAgICAgICAgICAgLi4udGhpcy5fbG9jYWxlLmxvY2FsaXplLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGJ1aWxkTG9jYWxpemVGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgd2Vla2RheXM6IGJ1aWxkTG9jYWxpemVBcnJheUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGhzOiBidWlsZExvY2FsaXplQXJyYXlGbihtb250aFZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHRpbWVPZkRheTogYnVpbGRMb2NhbGl6ZUZuKHRpbWVPZkRheVZhbHVlcywgXCJsb25nXCIsIChob3VyczpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvdXJzIC8gMTIgPj0gMSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRpbWVzT2ZEYXk6IGJ1aWxkTG9jYWxpemVBcnJheUZuKHRpbWVPZkRheVZhbHVlcywgXCJsb25nXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2xvY2FsZS5tYXRjaCA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2xvY2FsZS5tYXRjaCxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgICB3ZWVrZGF5czogYnVpbGRNYXRjaEZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5OiBidWlsZFBhcnNlRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoczogYnVpbGRNYXRjaEZuKG1vbnRoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGg6IGJ1aWxkUGFyc2VGbihtb250aFZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHRpbWVzT2ZEYXk6YnVpbGRNYXRjaEZuKHRpbWVPZkRheU1hdGNoVmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgdGltZU9mRGF5OmJ1aWxkUGFyc2VGbih0aW1lT2ZEYXlNYXRjaFZhbHVlcywgXCJsb25nXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdChkOkRhdGUsIGY6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGQsIGYsIHRoaXMuX2NvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKGRTOnN0cmluZywgZjpzdHJpbmcsIGJEOkRhdGUpOkRhdGUge1xuICAgICAgICByZXR1cm4gcGFyc2UoZFMsIGYsIGJELCB0aGlzLl9jb25maWcpO1xuICAgIH1cbn1cbiJdfQ==