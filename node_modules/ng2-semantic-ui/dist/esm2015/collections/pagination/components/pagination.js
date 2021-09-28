/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
export class SuiPagination {
    constructor() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    /**
     * @return {?}
     */
    get maxSize() {
        return this._maxSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxSize(value) {
        this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
    }
    /**
     * @return {?}
     */
    get collectionSize() {
        return this._collectionSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collectionSize(value) {
        this._collectionSize = Math.max(value, 0);
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
    }
    /**
     * @return {?}
     */
    get hasNavigationLinks() {
        /** @type {?} */
        const maxSize = this._maxSize || this.pageCount;
        return this._hasNavigationLinks || maxSize < this.pageCount;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasNavigationLinks(value) {
        this._hasNavigationLinks = value;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this.setPage(value);
    }
    /**
     * @return {?}
     */
    get pages() {
        return this._pages;
    }
    /**
     * @return {?}
     */
    hasPrevious() {
        return this.page > 1;
    }
    /**
     * @return {?}
     */
    hasNext() {
        return this.page < this.pageCount;
    }
    /**
     * @param {?} newPage
     * @return {?}
     */
    setPage(newPage) {
        /** @type {?} */
        const value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updatePages();
    }
    /**
     * @return {?}
     */
    updatePages() {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        const [start, end] = this.applyPagination();
        this._pages = Array(end - start)
            .fill(start + 1)
            .map((s, i) => s + i);
    }
    /**
     * @return {?}
     */
    applyPagination() {
        /** @type {?} */
        const maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        /** @type {?} */
        const page = Math.ceil(this.page / maxSize) - 1;
        /** @type {?} */
        let start = 0;
        /** @type {?} */
        let end = this.pageCount;
        if (this.canRotate) {
            /** @type {?} */
            const leftOffset = Math.floor(maxSize / 2);
            /** @type {?} */
            const rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    }
}
SuiPagination.decorators = [
    { type: Component, args: [{
                selector: "sui-pagination",
                template: `
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(1)" [class.disabled]="page===1">
    <span><i class="angle double left icon"></i></span>
</a>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page-1)" [class.disabled]="!hasPrevious()">
    <span><i class="angle left icon"></i></span>
</a>
<ng-container *ngIf="hasEllipses">
    <a class="item" (click)="setPage(1)" *ngIf="pages[0] !== 1">
        <span>1</span>
    </a>
    <a class="disabled item" *ngIf="pages[0] > 2">...</a>
</ng-container>
<a *ngFor="let p of pages" class="item" [class.active]="p===page" (click)="setPage(p)">
    {{ p }}
</a>
<ng-container *ngIf="hasEllipses">
    <a class="disabled item" *ngIf="pages[pages.length - 1] < pageCount - 1">...</a>
    <a class="item" (click)="setPage(pageCount)" *ngIf="pages[pages.length - 1] !== pageCount">
        <span>{{ pageCount }}</span>
    </a>
</ng-container>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page+1)" [class.disabled]="!hasNext()">
    <span><i class="angle right icon"></i></span>
</a>
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(pageCount)" [class.disabled]="page===pageCount">
    <span><i class="angle double right icon"></i></span>
</a>
`,
                styles: [`
:host .item {
    transition: none;
}
`]
            },] },
];
/** @nocollapse */
SuiPagination.ctorParameters = () => [];
SuiPagination.propDecorators = {
    hasClasses: [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.pagination",] }, { type: HostBinding, args: ["class.menu",] }],
    pageChange: [{ type: Output }],
    maxSize: [{ type: Input }],
    pageSize: [{ type: Input }],
    collectionSize: [{ type: Input }],
    hasNavigationLinks: [{ type: Input }],
    hasBoundaryLinks: [{ type: Input }],
    canRotate: [{ type: Input }],
    hasEllipses: [{ type: Input }],
    page: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SuiPagination.prototype.hasClasses;
    /** @type {?} */
    SuiPagination.prototype.pageCount;
    /** @type {?} */
    SuiPagination.prototype.pageChange;
    /** @type {?} */
    SuiPagination.prototype._maxSize;
    /** @type {?} */
    SuiPagination.prototype._collectionSize;
    /** @type {?} */
    SuiPagination.prototype._page;
    /** @type {?} */
    SuiPagination.prototype._pages;
    /** @type {?} */
    SuiPagination.prototype._hasNavigationLinks;
    /** @type {?} */
    SuiPagination.prototype.pageSize;
    /** @type {?} */
    SuiPagination.prototype.hasBoundaryLinks;
    /** @type {?} */
    SuiPagination.prototype.canRotate;
    /** @type {?} */
    SuiPagination.prototype.hasEllipses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVDL0YsTUFBTTtJQTBFRjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzQjs7OztJQWxFRCxJQUNXLE9BQU87UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN4Qjs7Ozs7UUFFVSxPQUFPLENBQUMsS0FBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFNMUUsSUFDVyxjQUFjO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMs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QUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQzs7OztDQUlaLENBQUM7YUFDRDs7Ozs7eUJBR0ksV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLGtCQUFrQixjQUM5QixXQUFXLFNBQUMsWUFBWTt5QkFNeEIsTUFBTTtzQkFVTixLQUFLO3VCQVNMLEtBQUs7NkJBR0wsS0FBSztpQ0FVTCxLQUFLOytCQVVMLEtBQUs7d0JBR0wsS0FBSzswQkFHTCxLQUFLO21CQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wYWdpbmF0aW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZSgxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlPT09MVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIGxlZnQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48YSAqbmdJZj1cImhhc05hdmlnYXRpb25MaW5rc1wiIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2UtMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWhhc1ByZXZpb3VzKClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGxlZnQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZSgxKVwiICpuZ0lmPVwicGFnZXNbMF0gIT09IDFcIj5cbiAgICAgICAgPHNwYW4+MTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGEgY2xhc3M9XCJkaXNhYmxlZCBpdGVtXCIgKm5nSWY9XCJwYWdlc1swXSA+IDJcIj4uLi48L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgY2xhc3M9XCJpdGVtXCIgW2NsYXNzLmFjdGl2ZV09XCJwPT09cGFnZVwiIChjbGljayk9XCJzZXRQYWdlKHApXCI+XG4gICAge3sgcCB9fVxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJkaXNhYmxlZCBpdGVtXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSA8IHBhZ2VDb3VudCAtIDFcIj4uLi48L2E+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZUNvdW50KVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gIT09IHBhZ2VDb3VudFwiPlxuICAgICAgICA8c3Bhbj57eyBwYWdlQ291bnQgfX08L3NwYW4+XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdJZj1cImhhc05hdmlnYXRpb25MaW5rc1wiIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2UrMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWhhc05leHQoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgcmlnaHQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UocGFnZUNvdW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlPT09cGFnZUNvdW50XCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgcmlnaHQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IC5pdGVtIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUGFnaW5hdGlvbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnBhZ2luYXRpb25cIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tZW51XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIC8vIFB1YmxpYyBtZW1iZXJzXG4gICAgcHVibGljIHBhZ2VDb3VudDpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcGFnZUNoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblxuICAgIC8vIFByaXZhdGUgbWVtYmVyc1xuICAgIHByaXZhdGUgX21heFNpemU/Om51bWJlcjtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uU2l6ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGFnZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGFnZXM6bnVtYmVyW107XG4gICAgcHJpdmF0ZSBfaGFzTmF2aWdhdGlvbkxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbWF4U2l6ZSgpOm51bWJlcnx1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4U2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heFNpemUodmFsdWU6bnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heFNpemUgPSAodmFsdWUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWF4KHZhbHVlLCAxKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwYWdlU2l6ZTpudW1iZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvblNpemUoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvblNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb2xsZWN0aW9uU2l6ZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvblNpemUgPSBNYXRoLm1heCh2YWx1ZSwgMCk7XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRoaXMuX2NvbGxlY3Rpb25TaXplIC8gdGhpcy5wYWdlU2l6ZSkpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBoYXNOYXZpZ2F0aW9uTGlua3MoKTpib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9IHRoaXMuX21heFNpemUgfHwgdGhpcy5wYWdlQ291bnQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgfHwgbWF4U2l6ZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzTmF2aWdhdGlvbkxpbmtzKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTmF2aWdhdGlvbkxpbmtzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzQm91bmRhcnlMaW5rczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuUm90YXRlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNFbGxpcHNlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBhZ2UoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhZ2UodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0UGFnZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYWdlcygpOm51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gMTA7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSAxO1xuICAgICAgICB0aGlzLl9wYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IDE7XG4gICAgICAgIHRoaXMuaGFzTmF2aWdhdGlvbkxpbmtzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNCb3VuZGFyeUxpbmtzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRWxsaXBzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGhhc1ByZXZpb3VzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOZXh0KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPCB0aGlzLnBhZ2VDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFnZShuZXdQYWdlOm51bWJlcik6dm9pZCB7XG4gICAgICAgIGNvbnN0IHZhbHVlOm51bWJlciA9IChOdW1iZXIuaXNJbnRlZ2VyKG5ld1BhZ2UpKSA/IE1hdGgubWluKE1hdGgubWF4KG5ld1BhZ2UsIDEpLCB0aGlzLnBhZ2VDb3VudCkgOiAxO1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMuX3BhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIHVwZGF0ZVBhZ2VzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRoaXMuX2NvbGxlY3Rpb25TaXplIC8gdGhpcy5wYWdlU2l6ZSkpO1xuXG4gICAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHRoaXMuYXBwbHlQYWdpbmF0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5fcGFnZXMgPSBBcnJheTxudW1iZXI+KGVuZCAtIHN0YXJ0KVxuICAgICAgICAgICAgLmZpbGwoc3RhcnQgKyAxKVxuICAgICAgICAgICAgLm1hcCgocywgaSkgPT4gcyArIGkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlQYWdpbmF0aW9uKCk6W251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSAodGhpcy5tYXhTaXplICE9IHVuZGVmaW5lZCkgPyBNYXRoLm1pbih0aGlzLm1heFNpemUsIHRoaXMucGFnZUNvdW50KSA6IHRoaXMucGFnZUNvdW50O1xuXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBNYXRoLmNlaWwodGhpcy5wYWdlIC8gbWF4U2l6ZSkgLSAxO1xuICAgICAgICBsZXQgc3RhcnQgPSAwO1xuICAgICAgICBsZXQgZW5kID0gdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuUm90YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0T2Zmc2V0ID0gTWF0aC5mbG9vcihtYXhTaXplIC8gMik7XG4gICAgICAgICAgICBjb25zdCByaWdodE9mZnNldCA9IG1heFNpemUgJSAyID09PSAwID8gbGVmdE9mZnNldCAtIDEgOiBsZWZ0T2Zmc2V0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlIDw9IGxlZnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VDb3VudCAtIHRoaXMucGFnZSA8IGxlZnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZUNvdW50IC0gbWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnBhZ2UgLSBsZWZ0T2Zmc2V0IC0gMTtcbiAgICAgICAgICAgICAgICBlbmQgPSB0aGlzLnBhZ2UgKyByaWdodE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gcGFnZSAqIG1heFNpemU7XG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIG1heFNpemU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3N0YXJ0LCBNYXRoLm1pbihlbmQsIHRoaXMucGFnZUNvdW50KV07XG4gICAgfVxufVxuIl19