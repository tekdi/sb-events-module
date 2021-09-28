/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList } from "@angular/core";
import { SuiTabHeader } from "../directives/tab-header";
import { SuiTabContent } from "../directives/tab-content";
import { Tab } from "../classes/tab";
var SuiTabset = /** @class */ (function () {
    function SuiTabset() {
        this.tabs = [];
        this._barrierCount = 0;
    }
    Object.defineProperty(SuiTabset.prototype, "activeTab", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeTab;
        },
        set: /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            this._activeTab = tab;
            tab.isActive = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiTabset.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Fire `internalComponentsUpdated` when the query lists change.
        this._tabHeaders.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
        this._tabContents.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
        // Initially load the tabs.
        this.loadTabs();
    };
    /**
     * @return {?}
     */
    SuiTabset.prototype.internalComponentsUpdated = /**
     * @return {?}
     */
    function () {
        // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
        // This is so that both the headers and contents query lists can update before we run code that matches the two up.
        this._barrierCount++;
        if (this._barrierCount === 2) {
            // Reset the barrier so it can be called again.
            this._barrierCount = 0;
            // Update the tabs.
            this.loadTabs();
        }
    };
    /**
     * @return {?}
     */
    SuiTabset.prototype.loadTabs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Remove any tabs that no longer have an associated header.
        this.tabs = this.tabs.filter(function (t) { return !!_this._tabHeaders.find(function (tH) { return tH === t.header; }); });
        this._tabHeaders
            .filter(function (tH) { return !_this.tabs.find(function (t) { return t.header === tH; }); })
            .forEach(function (tH) {
            /** @type {?} */
            var content = _this._tabContents.find(function (tC) { return tC.id === tH.id; });
            if (!content) {
                // Error if an associated tab content cannot be found for the given header.
                throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
            }
            /** @type {?} */
            var tab = new Tab(tH, content);
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(function () { return _this.onHeaderActiveChanged(tab); });
            // Add the new instance to the list of tabs.
            // Add the new instance to the list of tabs.
            _this.tabs.push(tab);
        });
        // Assign each tab an index (which denotes the order they physically appear in).
        this._tabHeaders
            .forEach(function (tH, i) {
            /** @type {?} */
            var tab = _this.tabs.find(function (t) { return t.header === tH; });
            if (tab) {
                tab.index = i;
            }
        });
        // Sort the tabs by their index.
        this.tabs.sort(function (a, b) { return a.index - b.index; });
        if (!this.activeTab) {
            // Check if there are no current existing active tabs.
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(function (t) { return t === _this.activeTab; })) {
            // O'wise check if current active tab has been deleted.
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(function () { return _this.activateClosestTab(_this.activeTab); });
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.onHeaderActiveChanged = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // If the tab has become activated, but was not previously the active tab:
        if (tab.isActive && this.activeTab !== tab) {
            // Deactivate all of the tabs.
            this.tabs.filter(function (t) { return t !== tab; }).forEach(function (t) { return t.isActive = false; });
            // Set the currently active tab to this one.
            this.activeTab = tab;
        }
        // If the tab has become deactivated, but was previously the active tab:
        if (!tab.isActive && this.activeTab === tab) {
            // Activate the closest tab to it.
            this.activateClosestTab(tab);
        }
    };
    /**
     * @return {?}
     */
    SuiTabset.prototype.activateFirstTab = /**
     * @return {?}
     */
    function () {
        this.activeTab = this.tabs[0];
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.activateClosestTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var nextAvailable;
        // When the exited tab's index is higher than all available tabs,
        if (tab.index >= this.tabs.length) {
            // Activate the last tab.
            nextAvailable = this.tabs[this.tabs.length - 1];
        }
        // If that didn't work, try the following cases:
        if (!nextAvailable) {
            if (!this.tabs.find(function (t) { return t === tab; })) {
                // When the exited tab no longer exists,
                // Replace it with a tab at the same index.
                nextAvailable = this.tabs[tab.index];
            }
            else {
                // Or if the exited tab still exists,
                // Go to the tab immediately to the left.
                nextAvailable = this.tabs[Math.max(tab.index - 1, 0)];
            }
        }
        // However, if the chosen tab is disabled,
        if (nextAvailable.isDisabled) {
            // Activate the closest available tab to it.
            return this.activateClosestTab(nextAvailable);
        }
        this.activeTab = nextAvailable;
    };
    SuiTabset.decorators = [
        { type: Component, args: [{
                    selector: "sui-tabset",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    SuiTabset.ctorParameters = function () { return []; };
    SuiTabset.propDecorators = {
        _tabHeaders: [{ type: ContentChildren, args: [SuiTabHeader,] }],
        _tabContents: [{ type: ContentChildren, args: [SuiTabContent,] }]
    };
    return SuiTabset;
}());
export { SuiTabset };
if (false) {
    /** @type {?} */
    SuiTabset.prototype._tabHeaders;
    /** @type {?} */
    SuiTabset.prototype._tabContents;
    /** @type {?} */
    SuiTabset.prototype.tabs;
    /** @type {?} */
    SuiTabset.prototype._activeTab;
    /** @type {?} */
    SuiTabset.prototype._barrierCount;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy90YWJzL2NvbXBvbmVudHMvdGFic2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQWlDakM7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzBCQWpCVSxnQ0FBUzs7Ozs7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7OztrQkFLTixHQUFPO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztJQVdqQixzQ0FBa0I7Ozs7OztRQUVyQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDOztRQUc1RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBSVosNkNBQXlCOzs7Ozs7UUFHN0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxh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QUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxHQUFHLEVBQVQsQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Z0JBRWxDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QztZQUFDLElBQUksQ0FBQyxDQUFDOzs7Z0JBRUosYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7O1FBR0QsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQzs7O2dCQXBLdEMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7Ozs7OEJBRUksZUFBZSxTQUFDLFlBQVk7K0JBRzVCLGVBQWUsU0FBQyxhQUFhOztvQkFibEM7O1NBU2EsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvdGFiLWhlYWRlclwiO1xuaW1wb3J0IHsgU3VpVGFiQ29udGVudCB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL3RhYi1jb250ZW50XCI7XG5pbXBvcnQgeyBUYWIgfSBmcm9tIFwiLi4vY2xhc3Nlcy90YWJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXRhYnNldFwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpVGFic2V0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlUYWJIZWFkZXIpXG4gICAgcHJpdmF0ZSBfdGFiSGVhZGVyczpRdWVyeUxpc3Q8U3VpVGFiSGVhZGVyPjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpVGFiQ29udGVudClcbiAgICBwcml2YXRlIF90YWJDb250ZW50czpRdWVyeUxpc3Q8U3VpVGFiQ29udGVudD47XG5cbiAgICAvLyBMaXN0IG9mIGFsbCB0YWJzIGluIHRoZSB0YWJzZXQuXG4gICAgcHVibGljIHRhYnM6VGFiW107XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIuXG4gICAgcHJpdmF0ZSBfYWN0aXZlVGFiOlRhYjtcblxuICAgIHB1YmxpYyBnZXQgYWN0aXZlVGFiKCk6VGFiIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRhYjtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHNldHRpbmcgYSB0YWIgYXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiLCBpdCBhdXRvbWF0aWNhbGx5IGdhaW5zXG4gICAgLy8gYGlzQWN0aXZlYCBzdGF0dXMgKHNhdmVzIGxpdHRlcmluZyBgaXNBY3RpdmUgPSB0cnVlYCBldmVyeXdoZXJlKS5cbiAgICBwdWJsaWMgc2V0IGFjdGl2ZVRhYih0YWI6VGFiKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYiA9IHRhYjtcbiAgICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIHRpbWVzIGBpbnRlcm5hbENvbXBvbmVudHNVcGRhdGVkYCBpcyBjYWxsZWQuXG4gICAgcHJpdmF0ZSBfYmFycmllckNvdW50Om51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIEZpcmUgYGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWRgIHdoZW4gdGhlIHF1ZXJ5IGxpc3RzIGNoYW5nZS5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVycy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKSk7XG4gICAgICAgIHRoaXMuX3RhYkNvbnRlbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW50ZXJuYWxDb21wb25lbnRzVXBkYXRlZCgpKTtcblxuICAgICAgICAvLyBJbml0aWFsbHkgbG9hZCB0aGUgdGFicy5cbiAgICAgICAgdGhpcy5sb2FkVGFicygpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGVpdGhlciB0aGUgdGFiIGhlYWRlcnMgb3IgdGFiIGNvbnRlbnRzIHF1ZXJ5IGxpc3RzIHVwZGF0ZS5cbiAgICBwcml2YXRlIGludGVybmFsQ29tcG9uZW50c1VwZGF0ZWQoKTp2b2lkIHtcbiAgICAgICAgLy8gV2UgYXJlIHVzaW5nIGEgJ2NvdW50aW5nIGJhcnJpZXIgb2YgbiA9IDInLCBpLmUuIHRoZSBjb2RlIHdpdGhpbiBvbmx5IHJ1bnMgYWZ0ZXIgdGhlIG1ldGhvZCBpcyBjYWxsZWQgdHdpY2UuXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCBib3RoIHRoZSBoZWFkZXJzIGFuZCBjb250ZW50cyBxdWVyeSBsaXN0cyBjYW4gdXBkYXRlIGJlZm9yZSB3ZSBydW4gY29kZSB0aGF0IG1hdGNoZXMgdGhlIHR3byB1cC5cbiAgICAgICAgdGhpcy5fYmFycmllckNvdW50Kys7XG5cbiAgICAgICAgaWYgKHRoaXMuX2JhcnJpZXJDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGJhcnJpZXIgc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAgICAgICAgICAgIHRoaXMuX2JhcnJpZXJDb3VudCA9IDA7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFicy5cbiAgICAgICAgICAgIHRoaXMubG9hZFRhYnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3RzIHRhYiBoZWFkZXJzIHRvIHRhYiBjb250ZW50cywgYW5kIGNyZWF0ZXMgYSB0YWIgaW5zdGFuY2UgZm9yIGVhY2ggcGFpcmluZy5cbiAgICBwcml2YXRlIGxvYWRUYWJzKCk6dm9pZCB7XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgdGFicyB0aGF0IG5vIGxvbmdlciBoYXZlIGFuIGFzc29jaWF0ZWQgaGVhZGVyLlxuICAgICAgICB0aGlzLnRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gISF0aGlzLl90YWJIZWFkZXJzLmZpbmQodEggPT4gdEggPT09IHQuaGVhZGVyKSk7XG5cbiAgICAgICAgdGhpcy5fdGFiSGVhZGVyc1xuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCB0aGUgbG9hZGVkIGhlYWRlcnMgd2l0aCBhdHRhY2hlZCB0YWIgaW5zdGFuY2VzLlxuICAgICAgICAgICAgLmZpbHRlcih0SCA9PiAhdGhpcy50YWJzLmZpbmQodCA9PiB0LmhlYWRlciA9PT0gdEgpKVxuICAgICAgICAgICAgLmZvckVhY2godEggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl90YWJDb250ZW50cy5maW5kKHRDID0+IHRDLmlkID09PSB0SC5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3IgaWYgYW4gYXNzb2NpYXRlZCB0YWIgY29udGVudCBjYW5ub3QgYmUgZm91bmQgZm9yIHRoZSBnaXZlbiBoZWFkZXIuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgW3N1aVRhYkhlYWRlcl0gbXVzdCBoYXZlIGEgcmVsYXRlZCBbc3VpVGFiQ29udGVudF0uXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YWIgaW5zdGFuY2UgZm9yIHRoaXMgaGVhZGVyICYgY29udGVudCBjb21iby5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSBuZXcgVGFiKHRILCBjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBhbnkgZXh0ZXJuYWwgY2hhbmdlcyBpbiB0aGUgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZS4gRXh0ZXJuYWwgY2hhbmdlcyBhcmUgdHJpZ2dlcmVkIGJ5IHVzZXIgaW5wdXQuXG4gICAgICAgICAgICAgICAgdGFiLmhlYWRlci5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uSGVhZGVyQWN0aXZlQ2hhbmdlZCh0YWIpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbmV3IGluc3RhbmNlIHRvIHRoZSBsaXN0IG9mIHRhYnMuXG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFzc2lnbiBlYWNoIHRhYiBhbiBpbmRleCAod2hpY2ggZGVub3RlcyB0aGUgb3JkZXIgdGhleSBwaHlzaWNhbGx5IGFwcGVhciBpbikuXG4gICAgICAgIHRoaXMuX3RhYkhlYWRlcnNcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0SCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFicy5maW5kKHQgPT4gdC5oZWFkZXIgPT09IHRIKTtcbiAgICAgICAgICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU29ydCB0aGUgdGFicyBieSB0aGVpciBpbmRleC5cbiAgICAgICAgdGhpcy50YWJzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVUYWIpIHsgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG5vIGN1cnJlbnQgZXhpc3RpbmcgYWN0aXZlIHRhYnMuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBhY3RpdmF0ZSB0aGUgZmlyc3QgYXZhaWxhYmxlIHRhYi5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVGaXJzdFRhYigpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRhYnMuZmluZCh0ID0+IHQgPT09IHRoaXMuYWN0aXZlVGFiKSkgeyAvLyBPJ3dpc2UgY2hlY2sgaWYgY3VycmVudCBhY3RpdmUgdGFiIGhhcyBiZWVuIGRlbGV0ZWQuXG4gICAgICAgICAgICAvLyBJZiBzbywgd2UgbXVzdCBmaW5kIHRoZSBjbG9zZXN0LlxuICAgICAgICAgICAgLy8gVXNlIGBzZXRUaW1lb3V0YCBhcyB0aGlzIGNhdXNlcyBhICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yIG8nd2lzZS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIodGhpcy5hY3RpdmVUYWIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBFcnJvciBpZiB0aGVyZSBhcmVuJ3QgYW55IHRhYnMgaW4gdGhlIHRhYnNldC5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgaGF2ZSBubyB0YWJzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW5ldmVyIGEgdGFiIGhlYWRlcidzIGFjdGl2ZSBzdGF0ZSBpcyBleHRlcm5hbGx5IGNoYW5nZWQuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckFjdGl2ZUNoYW5nZWQodGFiOlRhYik6dm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgaGFzIGJlY29tZSBhY3RpdmF0ZWQsIGJ1dCB3YXMgbm90IHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICh0YWIuaXNBY3RpdmUgJiYgdGhpcy5hY3RpdmVUYWIgIT09IHRhYikge1xuICAgICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgb2YgdGhlIHRhYnMuXG4gICAgICAgICAgICB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdCAhPT0gdGFiKS5mb3JFYWNoKHQgPT4gdC5pc0FjdGl2ZSA9IGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiB0byB0aGlzIG9uZS5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRhYiBoYXMgYmVjb21lIGRlYWN0aXZhdGVkLCBidXQgd2FzIHByZXZpb3VzbHkgdGhlIGFjdGl2ZSB0YWI6XG4gICAgICAgIGlmICghdGFiLmlzQWN0aXZlICYmIHRoaXMuYWN0aXZlVGFiID09PSB0YWIpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IHRhYiB0byBpdC5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVDbG9zZXN0VGFiKHRhYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgZmlyc3QgdGFiIGluIHRoZSBzZXQuXG4gICAgcHVibGljIGFjdGl2YXRlRmlyc3RUYWIoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XG4gICAgfVxuXG4gICAgLy8gQWN0aXZhdGVzIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gYSBnaXZlbiBvbmUuXG4gICAgcHVibGljIGFjdGl2YXRlQ2xvc2VzdFRhYih0YWI6VGFiKTp2b2lkIHtcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGU6VGFiIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIGV4aXRlZCB0YWIncyBpbmRleCBpcyBoaWdoZXIgdGhhbiBhbGwgYXZhaWxhYmxlIHRhYnMsXG4gICAgICAgIGlmICh0YWIuaW5kZXggPj0gdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGxhc3QgdGFiLlxuICAgICAgICAgICAgbmV4dEF2YWlsYWJsZSA9IHRoaXMudGFic1t0aGlzLnRhYnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGF0IGRpZG4ndCB3b3JrLCB0cnkgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgaWYgKCFuZXh0QXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFicy5maW5kKHQgPT4gdCA9PT0gdGFiKSkgeyAvLyBXaGVuIHRoZSBleGl0ZWQgdGFiIG5vIGxvbmdlciBleGlzdHMsXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBpdCB3aXRoIGEgdGFiIGF0IHRoZSBzYW1lIGluZGV4LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbdGFiLmluZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIE9yIGlmIHRoZSBleGl0ZWQgdGFiIHN0aWxsIGV4aXN0cyxcbiAgICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgdGFiIGltbWVkaWF0ZWx5IHRvIHRoZSBsZWZ0LlxuICAgICAgICAgICAgICAgIG5leHRBdmFpbGFibGUgPSB0aGlzLnRhYnNbTWF0aC5tYXgodGFiLmluZGV4IC0gMSwgMCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSG93ZXZlciwgaWYgdGhlIGNob3NlbiB0YWIgaXMgZGlzYWJsZWQsXG4gICAgICAgIGlmIChuZXh0QXZhaWxhYmxlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSB0YWIgdG8gaXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZUNsb3Nlc3RUYWIobmV4dEF2YWlsYWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IG5leHRBdmFpbGFibGU7XG4gICAgfVxufVxuIl19