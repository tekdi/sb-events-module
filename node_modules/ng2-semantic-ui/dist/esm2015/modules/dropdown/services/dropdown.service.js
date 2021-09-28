/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
/** @type {?} */
export const DropdownAutoCloseType = {
    ItemClick: /** @type {?} */ ("itemClick"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Disabled: /** @type {?} */ ("disabled")
};
export class DropdownService {
    /**
     * @return {?}
     */
    get isNested() {
        return !!this.parent;
    }
    /**
     * @param {?=} autoCloseMode
     */
    constructor(autoCloseMode = DropdownAutoCloseType.ItemClick) {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabled = false;
        this.autoCloseMode = autoCloseMode;
        this.children = [];
    }
    /**
     * @param {?} isOpen
     * @param {?=} reflectInParent
     * @return {?}
     */
    setOpenState(isOpen, reflectInParent = false) {
        if (this.isOpen !== isOpen && !this.isDisabled) {
            // Only update the state if it has changed, and the dropdown isn't disabled.
            this.isOpen = !!isOpen;
            this.isAnimating = true;
            // We must delay the emitting to avoid the 'changed after checked' Angular errors.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
            if (!this.isOpen) {
                // Close the child dropdowns when this one closes.
                this.children.forEach(c => c.setOpenState(this.isOpen));
            }
            if (this.parent && reflectInParent) {
                // Open the parent dropdowns when this one opens.
                this.parent.setOpenState(this.isOpen, true);
            }
        }
        else if (this.isOpen !== isOpen && this.isDisabled) {
            // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.isDisabled !== isDisabled) {
            if (!!isDisabled) {
                // Close the dropdown as it is now disabled
                this.setOpenState(false);
            }
            this.isDisabled = !!isDisabled;
        }
    }
    /**
     * @return {?}
     */
    toggleOpenState() {
        this.setOpenState(!this.isOpen);
    }
    /**
     * @param {?} child
     * @return {?}
     */
    registerChild(child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    }
    /**
     * @param {?} child
     * @return {?}
     */
    isChildRegistered(child) {
        return this === child || !!this.children
            .find(c => !!c.children
            .find(cChild => cChild.isChildRegistered(child)));
    }
    /**
     * @return {?}
     */
    clearChildren() {
        this.children.forEach(c => {
            c.parent = undefined;
        });
        this.children = [];
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    delay(callback) {
        setTimeout(() => callback());
    }
}
if (false) {
    /** @type {?} */
    DropdownService.prototype.isOpen;
    /** @type {?} */
    DropdownService.prototype.isAnimating;
    /** @type {?} */
    DropdownService.prototype.isOpenChange;
    /** @type {?} */
    DropdownService.prototype.isDisabled;
    /** @type {?} */
    DropdownService.prototype.autoCloseMode;
    /** @type {?} */
    DropdownService.prototype.parent;
    /** @type {?} */
    DropdownService.prototype.children;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vc2VydmljZXMvZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLN0MsYUFBYSxxQkFBcUIsR0FBRztJQUNqQyxTQUFTLG9CQUFFLFdBQW9DLENBQUE7SUFDL0MsWUFBWSxvQkFBRSxjQUF1QyxDQUFBO0lBQ3JELFFBQVEsb0JBQUUsVUFBbUMsQ0FBQTtDQUNoRCxDQUFDO0FBRUYsTUFBTTs7OztRQWlCUyxRQUFRO1FBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7OztJQUd6QixZQUFZLGdCQUFzQyxxQkFBcUIsQ0FBQyxTQUFTO1FBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVoRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7O0lBRU0sWUFBWSxDQUFDLE1BQWMsRUFBRSxrQkFBMEIsS0FBSztRQUMvRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztZQUU3QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O1lBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFdEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBRWYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzNEO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDOztnQkFFakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvQztTQUNKO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztZQUVuRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pEOzs7Ozs7SUFHRSxnQkFBZ0IsQ0FBQyxVQUFrQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2dCQUVmLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDbEM7Ozs7O0lBR0UsZUFBZTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7SUFJN0IsYUFBYSxDQUFDLEtBQXFCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN2Qjs7Ozs7O0lBSUUsaUJBQWlCLENBQUMsS0FBcUI7UUFDMUMsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTthQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUl2RCxhQUFhO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFJZixLQUFLLENBQUMsUUFBbUI7UUFDN0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O0NBRXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgRHJvcGRvd25BdXRvQ2xvc2VUeXBlID0gXCJpdGVtQ2xpY2tcIiB8IFwib3V0c2lkZUNsaWNrXCIgfCBcImRpc2FibGVkXCI7XG5cbi8vIENyZWF0ZXMgZXNzZW50aWFsbHkgYSAnc3RyaW5nJyBlbnVtLlxuZXhwb3J0IGNvbnN0IERyb3Bkb3duQXV0b0Nsb3NlVHlwZSA9IHtcbiAgICBJdGVtQ2xpY2s6IFwiaXRlbUNsaWNrXCIgYXMgRHJvcGRvd25BdXRvQ2xvc2VUeXBlLFxuICAgIE91dHNpZGVDbGljazogXCJvdXRzaWRlQ2xpY2tcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGUsXG4gICAgRGlzYWJsZWQ6IFwiZGlzYWJsZWRcIiBhcyBEcm9wZG93bkF1dG9DbG9zZVR5cGVcbn07XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuICAgIC8vIE9wZW4gc3RhdGUgb2YgdGhlIGRyb3Bkb3duXG4gICAgcHVibGljIGlzT3Blbjpib29sZWFuO1xuICAgIC8vIEFuaW1hdGluZyBzdGF0ZSBvZiB0aGUgZHJvcGRvd24uXG4gICAgcHVibGljIGlzQW5pbWF0aW5nOmJvb2xlYW47XG4gICAgLy8gRW1pdHRlciBmb3Igd2hlbiBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgcHVibGljIGlzT3BlbkNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgLy8gU2V0cyB0aGUgXCJhdXRvY2xvc2VcIiBtb2RlIG9mIHRoZSBkcm9wZG93biAtIGkuZS4gd2hhdCB1c2VyIGFjdGlvbiBjYXVzZXMgaXQgdG8gYXV0b2Nsb3NlLlxuICAgIHB1YmxpYyBhdXRvQ2xvc2VNb2RlOkRyb3Bkb3duQXV0b0Nsb3NlVHlwZTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGNvbnRhaW5pbmcgZHJvcGRvd24gc28gd2UgY2FuIG9wZW4gaXQgYXMgbmVjZXNzYXJ5LlxuICAgIHB1YmxpYyBwYXJlbnQ/OkRyb3Bkb3duU2VydmljZTtcbiAgICAvLyBBbHNvIGtlZXAgdHJhY2sgb2YgZHJvcGRvd25zIG5lc3RlZCBpbiB0aGlzIG9uZSBzbyB3ZSBjYW4gY2xvc2UgdGhlbSBhcyBuZWNlc3NhcnkuXG4gICAgcHVibGljIGNoaWxkcmVuOkRyb3Bkb3duU2VydmljZVtdO1xuICAgIHB1YmxpYyBnZXQgaXNOZXN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXV0b0Nsb3NlTW9kZTpEcm9wZG93bkF1dG9DbG9zZVR5cGUgPSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXV0b0Nsb3NlTW9kZSA9IGF1dG9DbG9zZU1vZGU7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPcGVuU3RhdGUoaXNPcGVuOmJvb2xlYW4sIHJlZmxlY3RJblBhcmVudDpib29sZWFuID0gZmFsc2UpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gIT09IGlzT3BlbiAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgc3RhdGUgaWYgaXQgaGFzIGNoYW5nZWQsIGFuZCB0aGUgZHJvcGRvd24gaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICEhaXNPcGVuO1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAvLyBXZSBtdXN0IGRlbGF5IHRoZSBlbWl0dGluZyB0byBhdm9pZCB0aGUgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgQW5ndWxhciBlcnJvcnMuXG4gICAgICAgICAgICB0aGlzLmRlbGF5KCgpID0+IHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjaGlsZCBkcm9wZG93bnMgd2hlbiB0aGlzIG9uZSBjbG9zZXMuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5zZXRPcGVuU3RhdGUodGhpcy5pc09wZW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmIHJlZmxlY3RJblBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIHBhcmVudCBkcm9wZG93bnMgd2hlbiB0aGlzIG9uZSBvcGVucy5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zZXRPcGVuU3RhdGUodGhpcy5pc09wZW4sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuICE9PSBpc09wZW4gJiYgdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3RhdGUgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgZHJvcGRvd24gaXMgZGlzYWJsZWQsIHJlLWVtaXQgdGhlIG9yaWdpbmFsIGlzT3BlbiB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuZGVsYXkoKCkgPT4gdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3BlbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCAhPT0gaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKCEhaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBkcm9wZG93biBhcyBpdCBpcyBub3cgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9ICEhaXNEaXNhYmxlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVPcGVuU3RhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMuaXNPcGVuKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBkcm9wZG93biBzZXJ2aWNlIGFzIGEgY2hpbGQgb2YgdGhpcyBzZXJ2aWNlLlxuICAgIHB1YmxpYyByZWdpc3RlckNoaWxkKGNoaWxkOkRyb3Bkb3duU2VydmljZSk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0NoaWxkUmVnaXN0ZXJlZChjaGlsZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlIG1ldGhvZCB0byBjaGVjayBpZiB0aGUgcHJvdmlkZWQgZHJvcGRvd24gaXMgYWxyZWFkeSByZWdpc3RlcmVkIGFzIGEgY2hpbGQsIG9yIGlzIGEgZGVzY2VuZGFudCBvZiBhIGNoaWxkLlxuICAgIHB1YmxpYyBpc0NoaWxkUmVnaXN0ZXJlZChjaGlsZDpEcm9wZG93blNlcnZpY2UpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gY2hpbGQgfHwgISF0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICAuZmluZChjID0+ICEhYy5jaGlsZHJlblxuICAgICAgICAgICAgICAgIC5maW5kKGNDaGlsZCA9PiBjQ2hpbGQuaXNDaGlsZFJlZ2lzdGVyZWQoY2hpbGQpKSk7XG4gICAgfVxuXG4gICAgLy8gV2lwZXMgYW55IG5lc3RlZCBkYXRhLCBzbyBhbGwgc2VydmljZXMgY2FuIGJlIGNsZWFubHkgcmVhdHRhY2hlZC5cbiAgICBwdWJsaWMgY2xlYXJDaGlsZHJlbigpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBjLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2QgZm9yIGRlbGF5aW5nIGFuIGV2ZW50IGludG8gdGhlIG5leHQgdGljaywgdG8gYXZvaWQgQW5ndWxhciBcImNoYW5nZWQgYWZ0ZXIgY2hlY2tlZFwiIGVycm9yLlxuICAgIHByaXZhdGUgZGVsYXkoY2FsbGJhY2s6KCkgPT4gdm9pZCk6dm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxufVxuIl19