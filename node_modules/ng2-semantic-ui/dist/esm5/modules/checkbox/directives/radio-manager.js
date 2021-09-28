/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { SuiRadio } from "../components/radio";
import { Util } from "../../../misc/util/internal";
/**
 * @template T
 */
var SuiRadioManager = /** @class */ (function () {
    function SuiRadioManager(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateNesting();
        this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
        this.updateRadios();
        this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
    };
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.updateNesting = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subManagers
            .filter(function (m) { return m !== _this; })
            .forEach(function (m) { return m.isNested = true; });
    };
    /**
     * @return {?}
     */
    SuiRadioManager.prototype.updateRadios = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
        this._radioSubs = [];
        /** @type {?} */
        var groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(function (k) { return groups[k]; })
            .forEach(function (g) { return g
            .forEach(function (r) { return _this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe(function (v) {
            if (!_this.isNested) {
                g.forEach(function (radio) { return radio.writeValue(v); });
            }
        })); }); });
    };
    SuiRadioManager.decorators = [
        { type: Directive, args: [{
                    selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
                },] },
    ];
    /** @nocollapse */
    SuiRadioManager.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SuiRadioManager.propDecorators = {
        _subManagers: [{ type: ContentChildren, args: [SuiRadioManager, { descendants: true },] }],
        _renderedRadios: [{ type: ContentChildren, args: [SuiRadio, { descendants: true },] }]
    };
    return SuiRadioManager;
}());
export { SuiRadioManager };
if (false) {
    /** @type {?} */
    SuiRadioManager.prototype.isNested;
    /** @type {?} */
    SuiRadioManager.prototype._subManagers;
    /** @type {?} */
    SuiRadioManager.prototype._renderedRadios;
    /** @type {?} */
    SuiRadioManager.prototype._radioSubs;
    /** @type {?} */
    SuiRadioManager.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztJQWlCL0MseUJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFTSw0Q0FBa0I7Ozs7O1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDOzs7OztJQUc5RCx1Q0FBYTs7Ozs7UUFDakIsSUFBSSxDQUFDLFlBQVk7YUFDWixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSSxFQUFWLENBQVUsQ0FBQzthQUN2QixPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDOzs7OztJQUdqQyxzQ0FBWTs7Ozs7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1FBRXJCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUUsTUFBTTthQUNELElBQUksQ0FBQyxNQUFNLENBQUM7YUFDWixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUM7YUFDVixPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVTthQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2QixTQUFTLENBQUMsVUFBQyxDQUFHO1lBQ1gsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQzthQUMzQztTQUNKLENBQUMsQ0FBQyxFQU5HLENBTUgsQ0FBQyxFQVBGLENBT0UsQ0FBQyxDQUFDOzs7Z0JBakQ3QixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9EQUFvRDtpQkFDakU7Ozs7Z0JBUGlFLFVBQVU7OzsrQkFZdkUsZUFBZSxTQUFDLGVBQWUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7a0NBR3RELGVBQWUsU0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzswQkFmcEQ7O1NBUWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpUmFkaW8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9yYWRpb1wiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImZvcm06bm90KFtuZ0Zvcm1dKTpub3QoW1tuZ0Zvcm1dXSksbmdGb3JtLFtuZ0Zvcm1dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpUmFkaW9NYW5hZ2VyPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBwdWJsaWMgaXNOZXN0ZWQ6Ym9vbGVhbjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpUmFkaW9NYW5hZ2VyLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfc3ViTWFuYWdlcnM6UXVlcnlMaXN0PFN1aVJhZGlvTWFuYWdlcjxUPj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRSYWRpb3M6UXVlcnlMaXN0PFN1aVJhZGlvPFQ+PjtcblxuICAgIHByaXZhdGUgX3JhZGlvU3ViczpTdWJzY3JpcHRpb25bXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc05lc3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlTmVzdGluZygpO1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vycy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZU5lc3RpbmcoKSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVSYWRpb3MoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRSYWRpb3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSYWRpb3MoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVOZXN0aW5nKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3N1Yk1hbmFnZXJzXG4gICAgICAgICAgICAuZmlsdGVyKG0gPT4gbSAhPT0gdGhpcylcbiAgICAgICAgICAgIC5mb3JFYWNoKG0gPT4gbS5pc05lc3RlZCA9IHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUmFkaW9zKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JhZGlvU3Vicy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG5cbiAgICAgICAgY29uc3QgZ3JvdXBzID0gVXRpbC5BcnJheS5ncm91cEJ5KHRoaXMuX3JlbmRlcmVkUmFkaW9zLnRvQXJyYXkoKSwgXCJuYW1lXCIpO1xuICAgICAgICBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKGdyb3VwcylcbiAgICAgICAgICAgIC5tYXAoayA9PiBncm91cHNba10pXG4gICAgICAgICAgICAuZm9yRWFjaChnID0+IGdcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChyID0+IHRoaXMuX3JhZGlvU3Vic1xuICAgICAgICAgICAgICAgICAgICAucHVzaChyLm9uQ3VycmVudFZhbHVlQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCh2OlQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5mb3JFYWNoKHJhZGlvID0+IHJhZGlvLndyaXRlVmFsdWUodikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgIH1cbn1cbiJdfQ==