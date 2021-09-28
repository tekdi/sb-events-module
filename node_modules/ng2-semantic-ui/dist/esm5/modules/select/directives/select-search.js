/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";
var SuiSelectSearch = /** @class */ (function () {
    function SuiSelectSearch(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    Object.defineProperty(SuiSelectSearch.prototype, "query", {
        set: /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this._renderer.setProperty(this._element.nativeElement, "value", query);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} query
     * @return {?}
     */
    SuiSelectSearch.prototype.updateQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.onQueryUpdated.emit(query);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectSearch.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onQueryKeyDown.emit(e);
    };
    /**
     * @return {?}
     */
    SuiSelectSearch.prototype.focus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(function () { return _this._element.nativeElement.focus(); });
    };
    SuiSelectSearch.decorators = [
        { type: Directive, args: [{
                    selector: "input[suiSelectSearch]"
                },] },
    ];
    /** @nocollapse */
    SuiSelectSearch.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SuiSelectSearch.propDecorators = {
        hasClasses: [{ type: HostBinding, args: ["class.search",] }],
        autoComplete: [{ type: HostBinding, args: ["attr.autocomplete",] }],
        updateQuery: [{ type: HostListener, args: ["input", ["$event.target.value"],] }],
        onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return SuiSelectSearch;
}());
export { SuiSelectSearch };
if (false) {
    /** @type {?} */
    SuiSelectSearch.prototype.hasClasses;
    /** @type {?} */
    SuiSelectSearch.prototype.autoComplete;
    /** @type {?} */
    SuiSelectSearch.prototype.onQueryUpdated;
    /** @type {?} */
    SuiSelectSearch.prototype.onQueryKeyDown;
    /** @type {?} */
    SuiSelectSearch.prototype._renderer;
    /** @type {?} */
    SuiSelectSearch.prototype._element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2RpcmVjdGl2ZXMvc2VsZWN0LXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW1CN0cseUJBQW9CLFNBQW1CLEVBQVUsUUFBbUI7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDN0I7MEJBYlUsa0NBQUs7Ozs7O2tCQUFDLEtBQVk7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFlckUscUNBQVc7Ozs7SUFEbEIsVUFDbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFHTSxtQ0FBUzs7OztJQURoQixVQUNpQixDQUFlO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9COzs7O0lBRU0sK0JBQUs7Ozs7OztRQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQW5DLENBQW1DLENBQUMsQ0FBQzs7O2dCQXRDN0QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ3JDOzs7O2dCQUp3QyxTQUFTO2dCQUFFLFVBQVU7Ozs2QkFNekQsV0FBVyxTQUFDLGNBQWM7K0JBRzFCLFdBQVcsU0FBQyxtQkFBbUI7OEJBa0IvQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7NEJBSzdDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzBCQWhDdkM7O1NBS2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiaW5wdXRbc3VpU2VsZWN0U2VhcmNoXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdFNlYXJjaCB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIuYXV0b2NvbXBsZXRlXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGF1dG9Db21wbGV0ZTpzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2V0IHF1ZXJ5KHF1ZXJ5OnN0cmluZykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidmFsdWVcIiwgcXVlcnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5VXBkYXRlZDpFdmVudEVtaXR0ZXI8c3RyaW5nPjtcbiAgICBwdWJsaWMgb25RdWVyeUtleURvd246RXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5VXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgICAgICB0aGlzLm9uUXVlcnlLZXlEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlID0gXCJvZmZcIjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiaW5wdXRcIiwgW1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiXSlcbiAgICBwdWJsaWMgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblF1ZXJ5VXBkYXRlZC5lbWl0KHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uUXVlcnlLZXlEb3duLmVtaXQoZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvY3VzKCk6dm9pZCB7XG4gICAgICAgIC8vIFNsaWdodGx5IGRlbGF5IHRvIHN1cHBvcnQgaW4gbWVudSBzZWFyY2guXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG59XG4iXX0=