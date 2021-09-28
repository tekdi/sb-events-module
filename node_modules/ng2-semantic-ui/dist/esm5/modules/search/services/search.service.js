/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Util } from "../../../misc/util/internal";
/**
 * @record
 * @template T
 */
function ICachedArray() { }
/**
 * @template T, U
 */
var /**
 * @template T, U
 */
SearchService = /** @class */ (function () {
    function SearchService(allowEmptyQuery) {
        if (allowEmptyQuery === void 0) { allowEmptyQuery = false; }
        var _this = this;
        this._options = [];
        this.optionsFilter = function (os, q) {
            /** @type {?} */
            var regex = _this.toRegex(_this._query);
            if (regex instanceof RegExp) {
                // Only update the results if the query was valid regex.
                // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                return os
                    .filter(function (o) { return Util.Object.readValue(o, _this._optionsField)
                    .toString()
                    .match(regex); });
            }
            // Don't update since it wasn't a valid regex.
            return false;
        };
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    Object.defineProperty(SearchService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._options = options || [];
            // We cannot use both local & remote options simultaneously.
            this._optionsLookup = undefined;
            // Reset entire service with new options.
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "optionsLookup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionsLookup;
        },
        set: /**
         * @param {?} lookupFn
         * @return {?}
         */
        function (lookupFn) {
            this._optionsLookup = lookupFn;
            // As before, cannot use local & remote options simultaneously.
            this._options = [];
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "hasItemLookup", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.optionsLookup && this.optionsLookup.length === 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "optionsField", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionsField;
        },
        set: /**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            this._optionsField = field;
            // We need to reset otherwise we would now be showing invalid search results.
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "results", {
        get: /**
         * @return {?}
         */
        function () {
            return this._results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQueryDelayed = /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    function (query, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(function () {
            _this.updateQuery(query, callback);
        }, this.searchDelay);
    };
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQuery = /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    function (query, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this._query = query;
        if (this._query === "" && !this.allowEmptyQuery) {
            // Don't update if the new query is empty (and we don't allow empty queries).
            // Don't reset so that when animating closed we don't get a judder.
            return callback();
        }
        if (this._resultsCache.hasOwnProperty(this._query)) {
            // If the query is already cached, make use of it.
            this._results = this._resultsCache[this._query];
            return callback();
        }
        if (this._optionsLookup) {
            this._isSearching = true;
            /** @type {?} */
            var queryLookup = /** @type {?} */ (this._optionsLookup.call(undefined, this._query));
            queryLookup
                .then(function (results) {
                _this._isSearching = false;
                _this.updateResults(results);
                return callback();
            })
                .catch(function (error) {
                // Unset 'loading' state, and throw the returned error without updating the results.
                // Unset 'loading' state, and throw the returned error without updating the results.
                _this._isSearching = false;
                return callback(error);
            });
            return;
        }
        /** @type {?} */
        var filtered = this.optionsFilter.call(undefined, this._options, this._query);
        if (filtered) {
            this.updateResults(filtered);
        }
        return callback();
    };
    /**
     * @param {?} results
     * @return {?}
     */
    SearchService.prototype.updateResults = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    };
    /**
     * @param {?} initial
     * @return {?}
     */
    SearchService.prototype.initialLookup = /**
     * @param {?} initial
     * @return {?}
     */
    function (initial) {
        if (initial instanceof Array) {
            return /** @type {?} */ ((/** @type {?} */ (this._optionsLookup))(undefined, initial));
        }
        return /** @type {?} */ ((/** @type {?} */ (this._optionsLookup))(undefined, initial));
    };
    /**
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.toRegex = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        try {
            return new RegExp(query, "i");
        }
        catch (e) {
            return query;
        }
    };
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.highlightMatches = /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    function (text, query) {
        /** @type {?} */
        var regex = this.toRegex(query);
        if (regex instanceof RegExp) {
            return text.replace(regex, function (match) { return "<b>" + match + "</b>"; });
        }
        return text;
    };
    /**
     * @return {?}
     */
    SearchService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    };
    return SearchService;
}());
/**
 * @template T, U
 */
export { SearchService };
if (false) {
    /** @type {?} */
    SearchService.prototype._options;
    /** @type {?} */
    SearchService.prototype._optionsLookup;
    /** @type {?} */
    SearchService.prototype._optionsField;
    /** @type {?} */
    SearchService.prototype.optionsFilter;
    /** @type {?} */
    SearchService.prototype._results;
    /** @type {?} */
    SearchService.prototype._resultsCache;
    /** @type {?} */
    SearchService.prototype._query;
    /** @type {?} */
    SearchService.prototype.allowEmptyQuery;
    /** @type {?} */
    SearchService.prototype.searchDelay;
    /** @type {?} */
    SearchService.prototype._searchDelayTimeout;
    /** @type {?} */
    SearchService.prototype._isSearching;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7QUFLbkQ7OztBQUFBO0lBMEVJLHVCQUFZLGVBQStCO1FBQS9CLGdDQUFBLEVBQUEsdUJBQStCO1FBQTNDLGlCQXdCQztRQXZCRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQUMsRUFBRSxFQUFFLENBQUM7O1lBRXZCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Z0JBRzFCLE1BQU0sQ0FBQyxFQUFFO3FCQUVKLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFZLENBQUMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDO3FCQUMvRCxRQUFRLEVBQUU7cUJBQ1YsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUZKLENBRUksQ0FBQyxDQUFDO2FBQzFCOztZQUdELE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEIsQ0FBQzs7UUFHRixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEI7MEJBeEZVLGtDQUFPOzs7OztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7a0JBR04sT0FBVztZQUMxQixJQUFJLENBQUMsUUFB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TSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxRQUFNLEtBQUssU0FBTSxFQUFqQixDQUFpQixDQUFDLENBQUM7U0FDMUQ7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7OztJQUlSLDZCQUFLOzs7O1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBN003QjtJQStNQyxDQUFBOzs7O0FBMU1ELHlCQTBNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBMb29rdXBGbiwgTG9va3VwRm5SZXN1bHQsIEZpbHRlckZuIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9va3VwLWZuXCI7XG5cbmludGVyZmFjZSBJQ2FjaGVkQXJyYXk8VD4geyBbcXVlcnk6c3RyaW5nXTpUW107IH1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2U8VCwgVT4ge1xuICAgIC8vIFN0b3JlcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG4gICAgcHJpdmF0ZSBfb3B0aW9uczpUW107XG4gICAgLy8gQ29udmVydHMgYSBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBvcHRpb25zLiBNdXN0IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgcHJvbWlzZS5cbiAgICBwcml2YXRlIF9vcHRpb25zTG9va3VwPzpMb29rdXBGbjxULCBVPjtcbiAgICAvLyBGaWVsZCB0aGF0IG9wdGlvbnMgYXJlIHNlYXJjaGVkICYgZGlzcGxheWVkIG9uLlxuICAgIHByaXZhdGUgX29wdGlvbnNGaWVsZD86c3RyaW5nO1xuICAgIC8vIEZpbHRlcnMgYSBsaXN0IG9mIG9wdGlvbnMuXG4gICAgcHVibGljIG9wdGlvbnNGaWx0ZXI6RmlsdGVyRm48VD47XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwgW107XG4gICAgICAgIC8vIFdlIGNhbm5vdCB1c2UgYm90aCBsb2NhbCAmIHJlbW90ZSBvcHRpb25zIHNpbXVsdGFuZW91c2x5LlxuICAgICAgICB0aGlzLl9vcHRpb25zTG9va3VwID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBSZXNldCBlbnRpcmUgc2VydmljZSB3aXRoIG5ldyBvcHRpb25zLlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcHRpb25zTG9va3VwKCk6TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0xvb2t1cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNMb29rdXAobG9va3VwRm46TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc0xvb2t1cCA9IGxvb2t1cEZuO1xuICAgICAgICAvLyBBcyBiZWZvcmUsIGNhbm5vdCB1c2UgbG9jYWwgJiByZW1vdGUgb3B0aW9ucyBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNJdGVtTG9va3VwKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMub3B0aW9uc0xvb2t1cCAmJiB0aGlzLm9wdGlvbnNMb29rdXAubGVuZ3RoID09PSAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0ZpZWxkKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNGaWVsZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVzZXQgb3RoZXJ3aXNlIHdlIHdvdWxkIG5vdyBiZSBzaG93aW5nIGludmFsaWQgc2VhcmNoIHJlc3VsdHMuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yZXMgdGhlIHJlc3VsdHMgb2YgdGhlIHF1ZXJ5LlxuICAgIHByaXZhdGUgX3Jlc3VsdHM6VFtdO1xuICAgIC8vIENhY2hlIG9mIHJlc3VsdHMsIGluZGV4ZWQgYnkgcXVlcnkuXG4gICAgcHJpdmF0ZSBfcmVzdWx0c0NhY2hlOklDYWNoZWRBcnJheTxUPjtcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0cygpOlRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3F1ZXJ5OnN0cmluZztcbiAgICAvLyBBbGxvd3MgdGhlIGVtcHR5IHF1ZXJ5IHRvIHByb2R1Y2UgcmVzdWx0cy5cbiAgICBwdWJsaWMgYWxsb3dFbXB0eVF1ZXJ5OmJvb2xlYW47XG4gICAgLy8gSG93IGxvbmcgdG8gZGVsYXkgdGhlIHNlYXJjaCBmb3Igd2hlbiB1c2luZyB1cGRhdGVRdWVyeURlbGF5ZWQuIFN0b3JlZCBpbiBtcy5cbiAgICBwdWJsaWMgc2VhcmNoRGVsYXk6bnVtYmVyO1xuICAgIC8vIFN0b3JlcyB0aGUgc2VhcmNoIHRpbWVvdXQgaGFuZGxlIHNvIHdlIGNhbiBjYW5jZWwgaXQuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGVsYXlUaW1lb3V0Om51bWJlcjtcbiAgICAvLyBQcm92aWRlcyAnbG9hZGluZycgZnVuY3Rpb25hbGl0eS5cbiAgICBwcml2YXRlIF9pc1NlYXJjaGluZzpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhbGxvd0VtcHR5UXVlcnk6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zRmlsdGVyID0gKG9zLCBxKSA9PiB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBxdWVyeSBzdHJpbmcgdG8gYSBSZWdFeHAuXG4gICAgICAgICAgICBjb25zdCByZWdleCA9IHRoaXMudG9SZWdleCh0aGlzLl9xdWVyeSk7XG5cbiAgICAgICAgICAgIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSByZXN1bHRzIGlmIHRoZSBxdWVyeSB3YXMgdmFsaWQgcmVnZXguXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBhdm9pZHMgdGhlIHJlc3VsdHMgc3VkZGVubHkgYmVjb21pbmcgZW1wdHkgaWYgYW4gaW52YWxpZCByZWdleCBzdHJpbmcgaXMgaW5wdXR0ZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9zXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvbiB0aGUgb3B0aW9ucyB3aXRoIGEgc3RyaW5nIG1hdGNoIG9uIHRoZSBmaWVsZCB3ZSBhcmUgdGVzdGluZy5cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihvID0+IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG8sIHRoaXMuX29wdGlvbnNGaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0Y2gocmVnZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIHNpbmNlIGl0IHdhc24ndCBhIHZhbGlkIHJlZ2V4LlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyBhbmQgcmVzZXQuXG4gICAgICAgIHRoaXMuYWxsb3dFbXB0eVF1ZXJ5ID0gYWxsb3dFbXB0eVF1ZXJ5O1xuICAgICAgICB0aGlzLnNlYXJjaERlbGF5ID0gMDtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIHF1ZXJ5IGFmdGVyIHRoZSBzcGVjaWZpZWQgc2VhcmNoIGRlbGF5LlxuICAgIHB1YmxpYyB1cGRhdGVRdWVyeURlbGF5ZWQocXVlcnk6c3RyaW5nLCBjYWxsYmFjazooZXJyPzpFcnJvcikgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2VhcmNoRGVsYXlUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fc2VhcmNoRGVsYXlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVyeShxdWVyeSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGVsYXlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBjdXJyZW50IHNlYXJjaCBxdWVyeS5cbiAgICBwdWJsaWMgdXBkYXRlUXVlcnkocXVlcnk6c3RyaW5nLCBjYWxsYmFjazooZXJyPzpFcnJvcikgPT4gdm9pZCA9ICgpID0+IHt9KTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcblxuICAgICAgICBpZiAodGhpcy5fcXVlcnkgPT09IFwiXCIgJiYgIXRoaXMuYWxsb3dFbXB0eVF1ZXJ5KSB7XG4gICAgICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIG5ldyBxdWVyeSBpcyBlbXB0eSAoYW5kIHdlIGRvbid0IGFsbG93IGVtcHR5IHF1ZXJpZXMpLlxuICAgICAgICAgICAgLy8gRG9uJ3QgcmVzZXQgc28gdGhhdCB3aGVuIGFuaW1hdGluZyBjbG9zZWQgd2UgZG9uJ3QgZ2V0IGEganVkZGVyLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVzdWx0c0NhY2hlLmhhc093blByb3BlcnR5KHRoaXMuX3F1ZXJ5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHF1ZXJ5IGlzIGFscmVhZHkgY2FjaGVkLCBtYWtlIHVzZSBvZiBpdC5cbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdHMgPSB0aGlzLl9yZXN1bHRzQ2FjaGVbdGhpcy5fcXVlcnldO1xuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIENhbGwgdGhlIG9wdGlvbnMgbG9va3VwIHdpdGhvdXQgYSB0aGlzIGNvbnRleHQuXG4gICAgICAgICAgICBjb25zdCBxdWVyeUxvb2t1cCA9IHRoaXMuX29wdGlvbnNMb29rdXAuY2FsbCh1bmRlZmluZWQsIHRoaXMuX3F1ZXJ5KSBhcyBMb29rdXBGblJlc3VsdDxUW10+O1xuXG4gICAgICAgICAgICBxdWVyeUxvb2t1cFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbnNldCAnbG9hZGluZycgc3RhdGUsIGFuZCB0aHJvdyB0aGUgcmV0dXJuZWQgZXJyb3Igd2l0aG91dCB1cGRhdGluZyB0aGUgcmVzdWx0cy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLm9wdGlvbnNGaWx0ZXIuY2FsbCh1bmRlZmluZWQsIHRoaXMuX29wdGlvbnMsIHRoaXMuX3F1ZXJ5KTtcbiAgICAgICAgaWYgKGZpbHRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgJiBjYWNoZXMgdGhlIG5ldyBzZXQgb2YgcmVzdWx0cy5cbiAgICBwcml2YXRlIHVwZGF0ZVJlc3VsdHMocmVzdWx0czpUW10pOnZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzQ2FjaGVbdGhpcy5fcXVlcnldID0gcmVzdWx0cztcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlUpOkxvb2t1cEZuUmVzdWx0PFQ+O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHVibGljIGluaXRpYWxMb29rdXAoaW5pdGlhbDpVW10pOkxvb2t1cEZuUmVzdWx0PFRbXT47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgaW5pdGlhbExvb2t1cChpbml0aWFsOlUgfCBVW10pOkxvb2t1cEZuUmVzdWx0PFQ+IHwgTG9va3VwRm5SZXN1bHQ8VFtdPiB7XG4gICAgICAgIGlmIChpbml0aWFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fb3B0aW9uc0xvb2t1cCBhcyBMb29rdXBGbjxULCBVW10+KSh1bmRlZmluZWQsIGluaXRpYWwpIGFzIExvb2t1cEZuUmVzdWx0PFRbXT47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9vcHRpb25zTG9va3VwIGFzIExvb2t1cEZuPFQsIFU+KSh1bmRlZmluZWQsIGluaXRpYWwpIGFzIExvb2t1cEZuUmVzdWx0PFQ+O1xuICAgIH1cblxuICAgIC8vIENvbnZlcnRzIGEgcXVlcnkgc3RyaW5nIHRvIHJlZ2V4IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAgcHJpdmF0ZSB0b1JlZ2V4KHF1ZXJ5OnN0cmluZyk6UmVnRXhwIHwgc3RyaW5nIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHF1ZXJ5LCBcImlcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlcyBIVE1MIGZvciBoaWdobGlnaHRlZCBtYXRjaCB0ZXh0LlxuICAgIHB1YmxpYyBoaWdobGlnaHRNYXRjaGVzKHRleHQ6c3RyaW5nLCBxdWVyeTpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy50b1JlZ2V4KHF1ZXJ5KTtcbiAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LCBtYXRjaCA9PiBgPGI+JHttYXRjaH08L2I+YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgLy8gUmVzZXRzIHRoZSBzZWFyY2ggYmFjayB0byBhIHByaXN0aW5lIHN0YXRlLlxuICAgIHByaXZhdGUgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLl9yZXN1bHRzQ2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeShcIlwiKTtcbiAgICB9XG59XG4iXX0=