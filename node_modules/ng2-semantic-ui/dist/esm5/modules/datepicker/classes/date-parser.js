/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DateFnsParser } from "../helpers/date-fns";
var DateParser = /** @class */ (function () {
    function DateParser(format, locale) {
        this._format = format;
        this._parser = new DateFnsParser(locale);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateParser.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._parser.format(date, this._format);
    };
    /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    DateParser.prototype.parse = /**
     * @param {?} dateString
     * @param {?=} baseDate
     * @return {?}
     */
    function (dateString, baseDate) {
        if (baseDate === void 0) { baseDate = new Date(); }
        return this._parser.parse(dateString, this._format, baseDate);
    };
    return DateParser;
}());
export { DateParser };
if (false) {
    /** @type {?} */
    DateParser.prototype._format;
    /** @type {?} */
    DateParser.prototype._parser;
}
var InternalDateParser = /** @class */ (function (_super) {
    tslib_1.__extends(InternalDateParser, _super);
    function InternalDateParser(mode, locale) {
        var _this = this;
        /** @type {?} */
        var internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        _this = _super.call(this, internalFormats[mode], locale) || this;
        return _this;
    }
    return InternalDateParser;
}(DateParser));
export { InternalDateParser };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXJzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvY2xhc3Nlcy9kYXRlLXBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdwRCxJQUFBO0lBSUksb0JBQVksTUFBYSxFQUFFLE1BQThCO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUM7Ozs7O0lBRU0sMkJBQU07Ozs7Y0FBQyxJQUFTO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7O0lBRzVDLDBCQUFLOzs7OztjQUFDLFVBQWlCLEVBQUUsUUFBMEI7UUFBMUIseUJBQUEsRUFBQSxlQUFvQixJQUFJLEVBQUU7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztxQkFsQnRFO0lBb0JDLENBQUE7QUFoQkQsc0JBZ0JDOzs7Ozs7O0FBRUQsSUFBQTtJQUF3Qyw4Q0FBVTtJQUM5Qyw0QkFBWSxJQUFtQixFQUFFLE1BQThCO1FBQS9ELGlCQVVDOztRQVRHLElBQU0sZUFBZSxHQUFrQztZQUNuRCxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLE1BQU07U0FDZixDQUFDO1FBRUYsUUFBQSxrQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQUM7O0tBQ3hDOzZCQWpDTDtFQXNCd0MsVUFBVSxFQVlqRCxDQUFBO0FBWkQsOEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlcGlja2VyTW9kZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IERhdGVGbnNQYXJzZXIgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlLWZuc1wiO1xuaW1wb3J0IHsgSURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMsIElEYXRlcGlja2VyRm9ybWF0c0xvY2FsZVZhbHVlcyB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXRlUGFyc2VyIHtcbiAgICBwcml2YXRlIF9mb3JtYXQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhcnNlcjpEYXRlRm5zUGFyc2VyO1xuXG4gICAgY29uc3RydWN0b3IoZm9ybWF0OnN0cmluZywgbG9jYWxlOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgdGhpcy5fcGFyc2VyID0gbmV3IERhdGVGbnNQYXJzZXIobG9jYWxlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KGRhdGU6RGF0ZSk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlci5mb3JtYXQoZGF0ZSwgdGhpcy5fZm9ybWF0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UoZGF0ZVN0cmluZzpzdHJpbmcsIGJhc2VEYXRlOkRhdGUgPSBuZXcgRGF0ZSgpKTpEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlci5wYXJzZShkYXRlU3RyaW5nLCB0aGlzLl9mb3JtYXQsIGJhc2VEYXRlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbERhdGVQYXJzZXIgZXh0ZW5kcyBEYXRlUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RlOkRhdGVwaWNrZXJNb2RlLCBsb2NhbGU6SURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxGb3JtYXRzOklEYXRlcGlja2VyRm9ybWF0c0xvY2FsZVZhbHVlcyA9IHtcbiAgICAgICAgICAgIHRpbWU6IFwiSEg6bW1cIixcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIllZWVktTU0tRERUSEg6bW1cIixcbiAgICAgICAgICAgIGRhdGU6IFwiWVlZWS1NTS1ERFwiLFxuICAgICAgICAgICAgbW9udGg6IFwiWVlZWS1NTVwiLFxuICAgICAgICAgICAgeWVhcjogXCJZWVlZXCJcbiAgICAgICAgfTtcblxuICAgICAgICBzdXBlcihpbnRlcm5hbEZvcm1hdHNbbW9kZV0sIGxvY2FsZSk7XG4gICAgfVxufVxuIl19