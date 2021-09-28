/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DatePrecision, DateUtil, Util } from "../../../misc/util/internal";
var DateComparer = /** @class */ (function () {
    function DateComparer(precision, isSmallest) {
        this._precision = precision;
        this._isSmallest = isSmallest;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.equal = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._precision === DatePrecision.Minute) {
            return !!b &&
                DateUtil.equal(DatePrecision.Hour, b, a) &&
                Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
        }
        return !!b && DateUtil.equal(this._precision, a, b);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.lessThan = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._isSmallest) {
            return !b || (b >= a);
        }
        return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DateComparer.prototype.greaterThan = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (this._isSmallest) {
            return !b || (b <= a);
        }
        return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
    };
    /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateComparer.prototype.between = /**
     * @param {?} date
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (date, left, right) {
        return this.greaterThan(date, left) && this.lessThan(date, right);
    };
    return DateComparer;
}());
export { DateComparer };
if (false) {
    /** @type {?} */
    DateComparer.prototype._precision;
    /** @type {?} */
    DateComparer.prototype._isSmallest;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb21wYXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jbGFzc2VzL2RhdGUtY29tcGFyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTVFLElBQUE7SUFJSSxzQkFBWSxTQUF1QixFQUFFLFVBQWtCO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0tBQ2pDOzs7Ozs7SUFFTSw0QkFBSzs7Ozs7Y0FBQyxDQUFNLEVBQUUsQ0FBa0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEY7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR2pELCtCQUFROzs7OztjQUFDLENBQU0sRUFBRSxDQUFrQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR3BFLGtDQUFXOzs7OztjQUFDLENBQU0sRUFBRSxDQUFrQjtRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztJQUd0RSw4QkFBTzs7Ozs7O2NBQUMsSUFBUyxFQUFFLElBQXFCLEVBQUUsS0FBc0I7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzt1QkF0QzFFO0lBd0NDLENBQUE7QUF0Q0Qsd0JBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiwgRGF0ZVV0aWwsIFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXRlQ29tcGFyZXIge1xuICAgIHByaXZhdGUgX3ByZWNpc2lvbjpEYXRlUHJlY2lzaW9uO1xuICAgIHByaXZhdGUgX2lzU21hbGxlc3Q6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByZWNpc2lvbjpEYXRlUHJlY2lzaW9uLCBpc1NtYWxsZXN0OmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fcHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgICB0aGlzLl9pc1NtYWxsZXN0ID0gaXNTbWFsbGVzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXF1YWwoYTpEYXRlLCBiOkRhdGUgfCB1bmRlZmluZWQpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fcHJlY2lzaW9uID09PSBEYXRlUHJlY2lzaW9uLk1pbnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICEhYiAmJlxuICAgICAgICAgICAgICAgRGF0ZVV0aWwuZXF1YWwoRGF0ZVByZWNpc2lvbi5Ib3VyLCBiLCBhKSAmJlxuICAgICAgICAgICAgICAgVXRpbC5NYXRoLnJvdW5kRG93bihiLmdldE1pbnV0ZXMoKSwgNSkgPT09IFV0aWwuTWF0aC5yb3VuZERvd24oYS5nZXRNaW51dGVzKCksIDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhYiAmJiBEYXRlVXRpbC5lcXVhbCh0aGlzLl9wcmVjaXNpb24sIGEsIGIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsZXNzVGhhbihhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NtYWxsZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gIWIgfHwgKGIgPj0gYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWIgfHwgKERhdGVVdGlsLmVuZE9mKHRoaXMuX3ByZWNpc2lvbiwgRGF0ZVV0aWwuY2xvbmUoYikpID49IGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBncmVhdGVyVGhhbihhOkRhdGUsIGI6RGF0ZSB8IHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NtYWxsZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gIWIgfHwgKGIgPD0gYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWIgfHwgKERhdGVVdGlsLnN0YXJ0T2YodGhpcy5fcHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZShiKSkgPD0gYSk7XG4gICAgfVxuXG4gICAgcHVibGljIGJldHdlZW4oZGF0ZTpEYXRlLCBsZWZ0OkRhdGUgfCB1bmRlZmluZWQsIHJpZ2h0OkRhdGUgfCB1bmRlZmluZWQpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmVhdGVyVGhhbihkYXRlLCBsZWZ0KSAmJiB0aGlzLmxlc3NUaGFuKGRhdGUsIHJpZ2h0KTtcbiAgICB9XG59XG4iXX0=