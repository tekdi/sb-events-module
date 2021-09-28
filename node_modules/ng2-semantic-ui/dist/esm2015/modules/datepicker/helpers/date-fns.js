/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    return (dirtyIndex, { type } = { type: defaultType }) => {
        /** @type {?} */
        const index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
        return values[type][index];
    };
}
/**
 * @param {?} values
 * @param {?} defaultType
 * @return {?}
 */
function buildLocalizeArrayFn(values, defaultType) {
    return ({ type } = { type: defaultType }) => values[type];
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildMatchFn(patterns, defaultType) {
    return (dirtyString, { type } = { type: defaultType }) => dirtyString.match(`^(${patterns[type].join("|")})`);
}
/**
 * @param {?} patterns
 * @param {?} defaultType
 * @return {?}
 */
function buildParseFn(patterns, defaultType) {
    return ([, result], { type } = { type: defaultType }) => (patterns[type] || patterns[defaultType])
        .map(p => new RegExp(`^${p}`))
        .findIndex(pattern => pattern.test(result));
}
export class DateFnsParser {
    /**
     * @return {?}
     */
    get _config() {
        return {
            weekStartsOn: this._weekStartsOn,
            locale: this._locale
        };
    }
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this._weekStartsOn = /** @type {?} */ (locale.firstDayOfWeek);
        /** @type {?} */
        const weekdayValues = {
            long: locale.weekdays,
            short: locale.weekdaysShort,
            narrow: locale.weekdaysNarrow
        };
        /** @type {?} */
        const monthValues = {
            long: locale.months,
            short: locale.monthsShort
        };
        /** @type {?} */
        const timeOfDayValues = {
            long: locale.timesOfDay,
            uppercase: locale.timesOfDayUppercase,
            lowercase: locale.timesOfDayLowercase
        };
        /** @type {?} */
        const timeOfDayMatchValues = {
            long: locale.timesOfDay,
            short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
        };
        this._locale = /** @type {?} */ (defaultLocale);
        this._locale.localize = Object.assign({}, this._locale.localize, {
            weekday: buildLocalizeFn(weekdayValues, "long"),
            weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
            month: buildLocalizeFn(monthValues, "long"),
            months: buildLocalizeArrayFn(monthValues, "long"),
            timeOfDay: buildLocalizeFn(timeOfDayValues, "long", (hours) => {
                return hours / 12 >= 1 ? 1 : 0;
            }),
            timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
        });
        this._locale.match = Object.assign({}, this._locale.match, {
            weekdays: buildMatchFn(weekdayValues, "long"),
            weekday: buildParseFn(weekdayValues, "long"),
            months: buildMatchFn(monthValues, "long"),
            month: buildParseFn(monthValues, "long"),
            timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
            timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
        });
    }
    /**
     * @param {?} d
     * @param {?} f
     * @return {?}
     */
    format(d, f) {
        return format(d, f, this._config);
    }
    /**
     * @param {?} dS
     * @param {?} f
     * @param {?} bD
     * @return {?}
     */
    parse(dS, f, bD) {
        return parse(dS, f, bD, this._config);
    }
}
if (false) {
    /** @type {?} */
    DateFnsParser.prototype._weekStartsOn;
    /** @type {?} */
    DateFnsParser.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvaGVscGVycy9kYXRlLWZucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDekMsT0FBTyxLQUFLLGFBQWEsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCdkQseUJBQXlCLE1BQTJCLEVBQzNCLFdBQWtCLEVBQ2xCLGFBQTBDO0lBRS9ELE1BQU0sQ0FBQyxDQUFDLFVBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFOztRQUMzRCxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUIsQ0FBQztDQUNMOzs7Ozs7QUFFRCw4QkFBOEIsTUFBMkIsRUFBRSxXQUFrQjtJQUN6RSxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDN0Q7Ozs7OztBQUVELHNCQUFzQixRQUE2QixFQUFFLFdBQWtCO0lBQ25FLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FDckQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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VyxFQUFFLE1BQU0sQ0FBQztZQUN4QyxVQUFVLEVBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQztZQUNyRCxTQUFTLEVBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQztTQUN2RCxDQUNKLENBQUM7S0FDTDs7Ozs7O0lBRU0sTUFBTSxDQUFDLENBQU0sRUFBRSxDQUFRO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBRy9CLEtBQUssQ0FBQyxFQUFTLEVBQUUsQ0FBUSxFQUFFLEVBQU87UUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0NBRTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0ICogYXMgZGVmYXVsdExvY2FsZSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL2VuLVVTXCI7XG5cbmludGVyZmFjZSBJRGF0ZUZuc0xvY2FsZVZhbHVlcyB7IFtuYW1lOnN0cmluZ106c3RyaW5nW107IH1cbmludGVyZmFjZSBJRGF0ZUZuc0hlbHBlck9wdGlvbnMgeyB0eXBlPzpzdHJpbmc7IH1cbnR5cGUgRGF0ZUZuc0hlbHBlcjxVLCBUPiA9ICh2YWx1ZTpVLCBvcHRpb25zOklEYXRlRm5zSGVscGVyT3B0aW9ucykgPT4gVDtcbnR5cGUgRGF0ZUZuc1dlZWtTdGFydHNPbiA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG5cbmludGVyZmFjZSBJRGF0ZUZuc0N1c3RvbUxvY2FsZSB7XG4gICAgbG9jYWxpemU6e1xuICAgICAgICB3ZWVrZGF5OkRhdGVGbnNIZWxwZXI8bnVtYmVyLCBzdHJpbmc+O1xuICAgICAgICB3ZWVrZGF5czpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgICAgICBtb250aDpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgbW9udGhzOkRhdGVGbnNIZWxwZXI8SURhdGVGbnNIZWxwZXJPcHRpb25zLCBzdHJpbmdbXT47XG4gICAgICAgIHRpbWVPZkRheTpEYXRlRm5zSGVscGVyPG51bWJlciwgc3RyaW5nPjtcbiAgICAgICAgdGltZXNPZkRheTpEYXRlRm5zSGVscGVyPElEYXRlRm5zSGVscGVyT3B0aW9ucywgc3RyaW5nW10+O1xuICAgIH07XG4gICAgbWF0Y2g6e1xuICAgICAgICB3ZWVrZGF5czpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICB3ZWVrZGF5PzpEYXRlRm5zSGVscGVyPFJlZ0V4cE1hdGNoQXJyYXksIG51bWJlcj47XG4gICAgICAgIG1vbnRoczpEYXRlRm5zSGVscGVyPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheSB8IG51bGw+O1xuICAgICAgICBtb250aD86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgICAgICB0aW1lc09mRGF5OkRhdGVGbnNIZWxwZXI8c3RyaW5nLCBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbD47XG4gICAgICAgIHRpbWVPZkRheT86RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+O1xuICAgIH07XG4gICAgb3B0aW9ucz86e1xuICAgICAgICB3ZWVrU3RhcnRzT24/Om51bWJlcjtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZExvY2FsaXplRm4odmFsdWVzOklEYXRlRm5zTG9jYWxlVmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRUeXBlOnN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleENhbGxiYWNrPzoob2xkSW5kZXg6bnVtYmVyKSA9PiBudW1iZXIpOkRhdGVGbnNIZWxwZXI8bnVtYmVyLCBzdHJpbmc+IHtcblxuICAgIHJldHVybiAoZGlydHlJbmRleDpudW1iZXIsIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhDYWxsYmFjayA/IGluZGV4Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgICAgICByZXR1cm4gdmFsdWVzW3R5cGVdW2luZGV4XTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZExvY2FsaXplQXJyYXlGbih2YWx1ZXM6SURhdGVGbnNMb2NhbGVWYWx1ZXMsIGRlZmF1bHRUeXBlOnN0cmluZyk6RGF0ZUZuc0hlbHBlcjxJRGF0ZUZuc0hlbHBlck9wdGlvbnMsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuICh7IHR5cGUgfSA9IHsgdHlwZTogZGVmYXVsdFR5cGUgfSkgPT4gdmFsdWVzW3R5cGVdO1xufVxuXG5mdW5jdGlvbiBidWlsZE1hdGNoRm4ocGF0dGVybnM6SURhdGVGbnNMb2NhbGVWYWx1ZXMsIGRlZmF1bHRUeXBlOnN0cmluZyk6RGF0ZUZuc0hlbHBlcjxzdHJpbmcsIFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsPiB7XG4gICAgcmV0dXJuIChkaXJ0eVN0cmluZywgeyB0eXBlIH0gPSB7IHR5cGU6IGRlZmF1bHRUeXBlIH0pID0+XG4gICAgICAgIGRpcnR5U3RyaW5nLm1hdGNoKGBeKCR7cGF0dGVybnNbdHlwZV0uam9pbihcInxcIil9KWApO1xufVxuXG5mdW5jdGlvbiBidWlsZFBhcnNlRm4ocGF0dGVybnM6SURhdGVGbnNMb2NhbGVWYWx1ZXMsIGRlZmF1bHRUeXBlOnN0cmluZyk6RGF0ZUZuc0hlbHBlcjxSZWdFeHBNYXRjaEFycmF5LCBudW1iZXI+IHtcbiAgICByZXR1cm4gKFssIHJlc3VsdF0sIHsgdHlwZSB9ID0geyB0eXBlOiBkZWZhdWx0VHlwZSB9KSA9PlxuICAgICAgICAocGF0dGVybnNbdHlwZV0gfHwgcGF0dGVybnNbZGVmYXVsdFR5cGVdKVxuICAgICAgICAgICAgLm1hcChwID0+IG5ldyBSZWdFeHAoYF4ke3B9YCkpXG4gICAgICAgICAgICAuZmluZEluZGV4KHBhdHRlcm4gPT4gcGF0dGVybi50ZXN0KHJlc3VsdCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRGF0ZUZuc1BhcnNlciB7XG4gICAgcHJpdmF0ZSBfd2Vla1N0YXJ0c09uOkRhdGVGbnNXZWVrU3RhcnRzT247XG4gICAgcHJpdmF0ZSBfbG9jYWxlOklEYXRlRm5zQ3VzdG9tTG9jYWxlO1xuXG4gICAgcHJpdmF0ZSBnZXQgX2NvbmZpZygpOmFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWVrU3RhcnRzT246IHRoaXMuX3dlZWtTdGFydHNPbixcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuX3dlZWtTdGFydHNPbiA9IGxvY2FsZS5maXJzdERheU9mV2VlayBhcyBEYXRlRm5zV2Vla1N0YXJ0c09uO1xuXG4gICAgICAgIGNvbnN0IHdlZWtkYXlWYWx1ZXMgPSB7XG4gICAgICAgICAgICBsb25nOiBsb2NhbGUud2Vla2RheXMsXG4gICAgICAgICAgICBzaG9ydDogbG9jYWxlLndlZWtkYXlzU2hvcnQsXG4gICAgICAgICAgICBuYXJyb3c6IGxvY2FsZS53ZWVrZGF5c05hcnJvd1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9uZzogbG9jYWxlLm1vbnRocyxcbiAgICAgICAgICAgIHNob3J0OiBsb2NhbGUubW9udGhzU2hvcnRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0aW1lT2ZEYXlWYWx1ZXMgPSB7XG4gICAgICAgICAgICBsb25nOiBsb2NhbGUudGltZXNPZkRheSxcbiAgICAgICAgICAgIHVwcGVyY2FzZTogbG9jYWxlLnRpbWVzT2ZEYXlVcHBlcmNhc2UsXG4gICAgICAgICAgICBsb3dlcmNhc2U6IGxvY2FsZS50aW1lc09mRGF5TG93ZXJjYXNlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGltZU9mRGF5TWF0Y2hWYWx1ZXMgPSB7XG4gICAgICAgICAgICBsb25nOiBsb2NhbGUudGltZXNPZkRheSxcbiAgICAgICAgICAgIHNob3J0OiBsb2NhbGUudGltZXNPZkRheVVwcGVyY2FzZS5jb25jYXQobG9jYWxlLnRpbWVzT2ZEYXlMb3dlcmNhc2UpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbG9jYWxlID0gZGVmYXVsdExvY2FsZSBhcyBhbnk7XG4gICAgICAgIHRoaXMuX2xvY2FsZS5sb2NhbGl6ZSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2xvY2FsZS5sb2NhbGl6ZSxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgICB3ZWVrZGF5OiBidWlsZExvY2FsaXplRm4od2Vla2RheVZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXlzOiBidWlsZExvY2FsaXplQXJyYXlGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbihtb250aFZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoczogYnVpbGRMb2NhbGl6ZUFycmF5Rm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lT2ZEYXk6IGJ1aWxkTG9jYWxpemVGbih0aW1lT2ZEYXlWYWx1ZXMsIFwibG9uZ1wiLCAoaG91cnM6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3VycyAvIDEyID49IDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0aW1lc09mRGF5OiBidWlsZExvY2FsaXplQXJyYXlGbih0aW1lT2ZEYXlWYWx1ZXMsIFwibG9uZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9sb2NhbGUubWF0Y2ggPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9sb2NhbGUubWF0Y2gsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgd2Vla2RheXM6IGJ1aWxkTWF0Y2hGbih3ZWVrZGF5VmFsdWVzLCBcImxvbmdcIiksXG4gICAgICAgICAgICAgICAgd2Vla2RheTogYnVpbGRQYXJzZUZuKHdlZWtkYXlWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICBtb250aHM6IGJ1aWxkTWF0Y2hGbihtb250aFZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBidWlsZFBhcnNlRm4obW9udGhWYWx1ZXMsIFwibG9uZ1wiKSxcbiAgICAgICAgICAgICAgICB0aW1lc09mRGF5OmJ1aWxkTWF0Y2hGbih0aW1lT2ZEYXlNYXRjaFZhbHVlcywgXCJsb25nXCIpLFxuICAgICAgICAgICAgICAgIHRpbWVPZkRheTpidWlsZFBhcnNlRm4odGltZU9mRGF5TWF0Y2hWYWx1ZXMsIFwibG9uZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBmb3JtYXQoZDpEYXRlLCBmOnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChkLCBmLCB0aGlzLl9jb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXJzZShkUzpzdHJpbmcsIGY6c3RyaW5nLCBiRDpEYXRlKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlKGRTLCBmLCBiRCwgdGhpcy5fY29uZmlnKTtcbiAgICB9XG59XG4iXX0=