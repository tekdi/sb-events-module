/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, HostBinding, Input, HostListener, EventEmitter, Output, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util } from "../../../misc/util/internal";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SearchService } from "../services/search.service";
/**
 * @record
 * @template T
 */
export function IResultContext() { }
/** @type {?} */
IResultContext.prototype.query;
/**
 * @template T
 */
var SuiSearch = /** @class */ (function () {
    function SuiSearch(_element, renderer, _localizationService) {
        var _this = this;
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        this.hasClasses = true;
        this.tabindex = 0;
        this.hasIcon = true;
        this.retainSelectedResult = true;
        this.searchDelay = 200;
        this.maxResults = 7;
        this.onResultSelected = new EventEmitter();
        this.transition = "scale";
        this.transitionDuration = 200;
    }
    Object.defineProperty(SuiSearch.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "placeholder", {
        // Gets & sets the placeholder text displayed inside the text input.
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder || this.localeValues.placeholder;
        },
        set: /**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "localeValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.query;
        },
        set: /**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            var _this = this;
            this.selectedResult = undefined;
            // Initialise a delayed search.
            this.searchService.updateQueryDelayed(query, function () {
                // Set the results open state depending on whether a query has been entered.
                return _this.dropdownService.setOpenState(_this.searchService.query.length > 0);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (options) {
                this.searchService.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsFilter", {
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            if (filter) {
                this.searchService.optionsFilter = filter;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsLookup", {
        set: /**
         * @param {?} lookupFn
         * @return {?}
         */
        function (lookupFn) {
            this.searchService.optionsLookup = lookupFn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsField", {
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "resultFormatter", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._resultFormatter) {
                return this._resultFormatter;
            }
            else if (this.searchService.optionsLookup) {
                return function (r) { return _this.readValue(r); };
            }
            else {
                return function (r, q) { return _this.searchService.highlightMatches(_this.readValue(r), q); };
            }
        },
        set: /**
         * @param {?} formatter
         * @return {?}
         */
        function (formatter) {
            this._resultFormatter = formatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "searchDelay", {
        set: /**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            this.searchService.searchDelay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "results", {
        get: /**
         * @return {?}
         */
        function () {
            return this.searchService.results.slice(0, this.maxResults);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSearch.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._menu.service = this.dropdownService;
    };
    /**
     * @return {?}
     */
    SuiSearch.prototype.onLocaleUpdate = /**
     * @return {?}
     */
    function () {
        this._localeValues = this._localizationService.get().search;
    };
    /**
     * @param {?} result
     * @return {?}
     */
    SuiSearch.prototype.select = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSearch.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.open();
    };
    /**
     * @return {?}
     */
    SuiSearch.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    SuiSearch.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSearch.prototype.onFocusOut = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    };
    /**
     * @param {?} object
     * @return {?}
     */
    SuiSearch.prototype.readValue = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    };
    SuiSearch.decorators = [
        { type: Component, args: [{
                    selector: "sui-search",
                    template: "\n<div class=\"ui input\" [class.icon]=\"hasIcon\" (click)=\"onClick($event)\">\n    <input class=\"prompt\" type=\"text\" [attr.placeholder]=\"placeholder\" autocomplete=\"off\" [(ngModel)]=\"query\">\n    <i *ngIf=\"hasIcon\" class=\"search icon\"></i>\n</div>\n<div class=\"results\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     menuSelectedItemClass=\"active\">\n\n    <sui-search-result *ngFor=\"let r of results\"\n                       class=\"item\"\n                       [value]=\"r\"\n                       [query]=\"query\"\n                       [formatter]=\"resultFormatter\"\n                       [template]=\"resultTemplate\"\n                       (click)=\"select(r)\"></sui-search-result>\n\n    <div *ngIf=\"results.length == 0\" class=\"message empty\">\n        <div class=\"header\">{{ localeValues.noResults.header }}</div>\n        <div class=\"description\">{{ localeValues.noResults.message }}</div>\n    </div>\n</div>\n",
                    styles: ["\n/* Ensures results div has margin. */\n:host {\n    display: inline-block;\n    outline: 0;\n}\n\n/* Fixes positioning when results are pushed above the search. */\n.results {\n    margin-bottom: .5em;\n}\n"]
                },] },
    ];
    /** @nocollapse */
    SuiSearch.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SuiLocalizationService }
    ]; };
    SuiSearch.propDecorators = {
        _menu: [{ type: ViewChild, args: [SuiDropdownMenu,] }],
        hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.search",] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        isActive: [{ type: HostBinding, args: ["class.active",] }],
        hasIcon: [{ type: Input }],
        placeholder: [{ type: Input }],
        options: [{ type: Input }],
        optionsFilter: [{ type: Input }],
        optionsLookup: [{ type: Input }],
        optionsField: [{ type: Input }],
        resultFormatter: [{ type: Input }],
        resultTemplate: [{ type: Input }],
        retainSelectedResult: [{ type: Input }],
        searchDelay: [{ type: Input }],
        isSearching: [{ type: HostBinding, args: ["class.loading",] }],
        maxResults: [{ type: Input }],
        onResultSelected: [{ type: Output, args: ["resultSelected",] }],
        transition: [{ type: Input }],
        transitionDuration: [{ type: Input }],
        onFocusIn: [{ type: HostListener, args: ["focusin",] }],
        onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
    };
    return SuiSearch;
}());
export { SuiSearch };
if (false) {
    /** @type {?} */
    SuiSearch.prototype.dropdownService;
    /** @type {?} */
    SuiSearch.prototype.searchService;
    /** @type {?} */
    SuiSearch.prototype._menu;
    /** @type {?} */
    SuiSearch.prototype.hasClasses;
    /** @type {?} */
    SuiSearch.prototype.tabindex;
    /** @type {?} */
    SuiSearch.prototype.hasIcon;
    /** @type {?} */
    SuiSearch.prototype._placeholder;
    /** @type {?} */
    SuiSearch.prototype._localeValues;
    /** @type {?} */
    SuiSearch.prototype.localeOverrides;
    /** @type {?} */
    SuiSearch.prototype._resultFormatter;
    /** @type {?} */
    SuiSearch.prototype.resultTemplate;
    /** @type {?} */
    SuiSearch.prototype.retainSelectedResult;
    /** @type {?} */
    SuiSearch.prototype.maxResults;
    /** @type {?} */
    SuiSearch.prototype.selectedResult;
    /** @type {?} */
    SuiSearch.prototype.onResultSelected;
    /** @type {?} */
    SuiSearch.prototype.transition;
    /** @type {?} */
    SuiSearch.prototype.transitionDuration;
    /** @type {?} */
    SuiSearch.prototype._element;
    /** @type {?} */
    SuiSearch.prototype._localizationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWlCLFlBQVksRUFDckUsWUFBWSxFQUFFLE1BQU0sRUFBYSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFDdEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBb0MsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBeUMsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7OztJQXFMdkQsbUJBQW9CLFFBQW1CLEVBQUUsUUFBa0IsRUFBVSxvQkFBMkM7UUFBaEgsaUJBa0JDO1FBbEJtQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQThCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDNUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxD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dkIsc0JBQXNCOzs7d0JBb0RqRSxTQUFTLFNBQUMsZUFBZTs2QkFLekIsV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGNBQWM7MkJBRzFCLFdBQVcsU0FBQyxlQUFlOzJCQUczQixXQUFXLFNBQUMsY0FBYzswQkFNMUIsS0FBSzs4QkFNTCxLQUFLOzBCQTZCTCxLQUFLO2dDQU9MLEtBQUs7Z0NBT0wsS0FBSzsrQkFLTCxLQUFLO2tDQWlCTCxLQUFLO2lDQUtMLEtBQUs7dUNBR0wsS0FBSzs4QkFHTCxLQUFLOzhCQUtMLFdBQVcsU0FBQyxlQUFlOzZCQUszQixLQUFLO21DQVdMLE1BQU0sU0FBQyxnQkFBZ0I7NkJBR3ZCLEtBQUs7cUNBR0wsS0FBSzs0QkFnREwsWUFBWSxTQUFDLFNBQVM7NkJBY3RCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7O29CQXZQeEM7O1NBc0RhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgSW5wdXQsIEFmdGVyVmlld0luaXQsIEhvc3RMaXN0ZW5lcixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VhcmNoTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi9oZWxwZXJzL2xvb2t1cC1mblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRDb250ZXh0PFQ+IGV4dGVuZHMgSVRlbXBsYXRlUmVmQ29udGV4dDxUPiB7XG4gICAgcXVlcnk6c3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VhcmNoXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBpbnB1dFwiIFtjbGFzcy5pY29uXT1cImhhc0ljb25cIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgPGlucHV0IGNsYXNzPVwicHJvbXB0XCIgdHlwZT1cInRleHRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFsobmdNb2RlbCldPVwicXVlcnlcIj5cbiAgICA8aSAqbmdJZj1cImhhc0ljb25cIiBjbGFzcz1cInNlYXJjaCBpY29uXCI+PC9pPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzdWx0c1wiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIG1lbnVTZWxlY3RlZEl0ZW1DbGFzcz1cImFjdGl2ZVwiPlxuXG4gICAgPHN1aS1zZWFyY2gtcmVzdWx0ICpuZ0Zvcj1cImxldCByIG9mIHJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXR0ZXJdPVwicmVzdWx0Rm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInJlc3VsdFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdChyKVwiPjwvc3VpLXNlYXJjaC1yZXN1bHQ+XG5cbiAgICA8ZGl2ICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPT0gMFwiIGNsYXNzPVwibWVzc2FnZSBlbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0cy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0cy5tZXNzYWdlIH19PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRW5zdXJlcyByZXN1bHRzIGRpdiBoYXMgbWFyZ2luLiAqL1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4vKiBGaXhlcyBwb3NpdGlvbmluZyB3aGVuIHJlc3VsdHMgYXJlIHB1c2hlZCBhYm92ZSB0aGUgc2VhcmNoLiAqL1xuLnJlc3VsdHMge1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2g8VD4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFQ+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUpXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgLy8gRG9pbmcgaXQgb24gdGhlIGhvc3QgZW5hYmxlcyB1c2UgaW4gbWVudXMgZXRjLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIC8vIFNldHMgd2hldGhlciB0aGUgc2VhcmNoIGVsZW1lbnQgaGFzIGEgdmlzaWJsZSBzZWFyY2ggaWNvbi5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNJY29uOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICAvLyBHZXRzICYgc2V0cyB0aGUgcGxhY2Vob2xkZXIgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0ZXh0IGlucHV0LlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VhcmNoTG9jYWxlVmFsdWVzO1xuXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElTZWFyY2hMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJU2VhcmNoTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJzZWFyY2hcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBhIGRlbGF5ZWQgc2VhcmNoLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgLy8gU2V0IHRoZSByZXN1bHRzIG9wZW4gc3RhdGUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBxdWVyeSBoYXMgYmVlbiBlbnRlcmVkLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3VsdEZvcm1hdHRlcj86KHI6VCwgcTpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0Rm9ybWF0dGVyKCk6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRGb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRGb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHJldHVybiByID0+IHRoaXMucmVhZFZhbHVlKHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChyLCBxKSA9PiB0aGlzLnNlYXJjaFNlcnZpY2UuaGlnaGxpZ2h0TWF0Y2hlcyh0aGlzLnJlYWRWYWx1ZShyKSwgcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcmVzdWx0Rm9ybWF0dGVyKGZvcm1hdHRlcjoocmVzdWx0OlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdEZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXN1bHRUZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXRhaW5TZWxlY3RlZFJlc3VsdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlYXJjaERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFJlc3VsdHM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzLnNsaWNlKDAsIHRoaXMubWF4UmVzdWx0cyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmVzdWx0LlxuICAgIHB1YmxpYyBzZWxlY3RlZFJlc3VsdD86VDtcblxuICAgIC8vIEVtaXRzIHdoZW5ldmVyIGEgbmV3IHJlc3VsdCBpcyBzZWxlY3RlZC5cbiAgICBAT3V0cHV0KFwicmVzdWx0U2VsZWN0ZWRcIilcbiAgICBwdWJsaWMgb25SZXN1bHRTZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHJlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBUPigpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgICAgICB0aGlzLnJldGFpblNlbGVjdGVkUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDIwMDtcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzID0gNztcblxuICAgICAgICB0aGlzLm9uUmVzdWx0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWFyY2g7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0cyBhIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0KHJlc3VsdDpUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkLmVtaXQocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeSh0aGlzLnJlYWRWYWx1ZShyZXN1bHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgb3BlbiBvbiBjbGljayB3aGVuIHRoZXJlIGlzIGEgcXVlcnkgZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVhZHMgdGhlIHNwZWNpZmllZCBmaWVsZCBmcm9tIGFuIGl0ZW0uXG4gICAgcHVibGljIHJlYWRWYWx1ZShvYmplY3Q6VCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iamVjdCwgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCk7XG4gICAgfVxufVxuIl19