/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Renderer2, EventEmitter, Output, HostListener, ViewContainerRef } from "@angular/core";
import { Util, KeyCode, SuiComponentFactory } from "../../../misc/util/internal";
import { TransitionController, Transition, TransitionDirection } from "../../transition/internal";
import { ModalControls } from "../classes/modal-controls";
import { ModalConfig, ModalSize } from "../classes/modal-config";
/**
 * @template T, U
 */
export class SuiModal {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _componentFactory
     */
    constructor(_renderer, _element, _componentFactory) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        /** @type {?} */
        const config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(res => this.dismiss(() => this.onApprove.emit(res)), res => this.dismiss(() => this.onDeny.emit(res)));
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    /**
     * @return {?}
     */
    get approve() {
        return this.controls.approve;
    }
    /**
     * @return {?}
     */
    get deny() {
        return this.controls.deny;
    }
    /**
     * @return {?}
     */
    get isFullScreen() {
        return this._isFullScreen;
    }
    /**
     * @param {?} fullScreen
     * @return {?}
     */
    set isFullScreen(fullScreen) {
        this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
    }
    /**
     * @return {?}
     */
    get mustScroll() {
        return this._mustScroll;
    }
    /**
     * @param {?} mustScroll
     * @return {?}
     */
    set mustScroll(mustScroll) {
        this._mustScroll = mustScroll;
        // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
        this._mustAlwaysScroll = mustScroll;
        this.updateScroll();
    }
    /**
     * @return {?}
     */
    get isInverted() {
        return this._isInverted;
    }
    /**
     * @param {?} inverted
     * @return {?}
     */
    set isInverted(inverted) {
        this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    /**
     * @return {?}
     */
    get dynamicClasses() {
        /** @type {?} */
        const classes = {};
        if (this.size) {
            classes[this.size] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(() => this.dimBackground = true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode; /** @type {?} */
        ((document.querySelector("body"))).appendChild(this._element.nativeElement);
        /** @type {?} */
        const templateElement = /** @type {?} */ (this.templateSibling.element.nativeElement);
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        /** @type {?} */
        const element = /** @type {?} */ (this._modalElement.nativeElement);
        setTimeout(() => this.updateScroll());
        /** @type {?} */
        const autoFocus = /** @type {?} */ (element.querySelector("[autofocus]"));
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(() => autoFocus.focus(), 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(() => autoFocus.focus(), this.transitionDuration);
        }
    }
    /**
     * @template V
     * @param {?} config
     * @return {?}
     */
    loadConfig(config) {
        this.isClosable = config.isClosable;
        this.closeResult = config.closeResult;
        this.size = config.size;
        this.isFullScreen = config.isFullScreen;
        this.isBasic = config.isBasic;
        this.isInverted = config.isInverted;
        this.isCentered = config.isCentered;
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    dismiss(callback = () => { }) {
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (this._originalContainer) {
                    this._originalContainer.appendChild(this._element.nativeElement);
                }
                this.onDismiss.emit();
                callback();
            }));
        }
    }
    /**
     * @return {?}
     */
    close() {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    }
    /**
     * @return {?}
     */
    updateScroll() {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            /** @type {?} */
            const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            /** @type {?} */
            const margin = fontSize * 2;
            /** @type {?} */
            const element = /** @type {?} */ (this._modalElement.nativeElement);
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDocumentKeyUp(e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    }
    /**
     * @return {?}
     */
    onDocumentResize() {
        this.updateScroll();
    }
}
SuiModal.decorators = [
    { type: Component, args: [{
                selector: "sui-modal",
                template: `
<!-- Page dimmer for modal background. -->
<sui-modal-dimmer [ngClass]="{'top aligned': !isCentered}" 
                  [class.inverted]="isInverted"
                  [(isDimmed)]="dimBackground"
                  [transitionDuration]="transitionDuration"
                  (click)="close()">

    <!-- Modal component, with transition component attached -->
    <div class="ui modal"
         [suiTransition]="transitionController"
         [class.active]="transitionController?.isVisible"
         [class.fullscreen]="isFullScreen"
         [class.basic]="isBasic"
         [class.scrolling]="mustScroll"
         [class.inverted]="isInverted"
         [ngClass]="dynamicClasses"
         (click)="onClick($event)"
         #modal>

        <!-- Configurable close icon -->
        <i class="close icon" *ngIf="isClosable" (click)="close()"></i>
        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->
        <ng-content></ng-content>
        <!-- @ViewChild reference so we can insert elements beside this div. -->
        <div #templateSibling></div>
    </div>
</sui-modal-dimmer>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
SuiModal.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: SuiComponentFactory }
];
SuiModal.propDecorators = {
    isClosable: [{ type: Input }],
    closeResult: [{ type: Input }],
    onApprove: [{ type: Output, args: ["approved",] }],
    onDeny: [{ type: Output, args: ["denied",] }],
    onDismiss: [{ type: Output, args: ["dismissed",] }],
    _modalElement: [{ type: ViewChild, args: ["modal",] }],
    size: [{ type: Input }],
    isCentered: [{ type: Input }],
    isFullScreen: [{ type: Input }],
    isBasic: [{ type: Input }],
    mustScroll: [{ type: Input }],
    isInverted: [{ type: Input }],
    transition: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    templateSibling: [{ type: ViewChild, args: ["templateSibling", { read: ViewContainerRef },] }],
    onDocumentKeyUp: [{ type: HostListener, args: ["document:keyup", ["$event"],] }],
    onDocumentResize: [{ type: HostListener, args: ["window:resize",] }]
};
if (false) {
    /** @type {?} */
    SuiModal.prototype.isClosable;
    /** @type {?} */
    SuiModal.prototype.closeResult;
    /** @type {?} */
    SuiModal.prototype.controls;
    /** @type {?} */
    SuiModal.prototype.onApprove;
    /** @type {?} */
    SuiModal.prototype.onDeny;
    /** @type {?} */
    SuiModal.prototype.onDismiss;
    /** @type {?} */
    SuiModal.prototype._modalElement;
    /** @type {?} */
    SuiModal.prototype.size;
    /** @type {?} */
    SuiModal.prototype.isCentered;
    /** @type {?} */
    SuiModal.prototype._isFullScreen;
    /** @type {?} */
    SuiModal.prototype.isBasic;
    /** @type {?} */
    SuiModal.prototype._mustScroll;
    /** @type {?} */
    SuiModal.prototype._mustAlwaysScroll;
    /** @type {?} */
    SuiModal.prototype._isInverted;
    /** @type {?} */
    SuiModal.prototype.transitionController;
    /** @type {?} */
    SuiModal.prototype.transition;
    /** @type {?} */
    SuiModal.prototype.transitionDuration;
    /** @type {?} */
    SuiModal.prototype.dimBackground;
    /** @type {?} */
    SuiModal.prototype._isClosing;
    /** @type {?} */
    SuiModal.prototype.templateSibling;
    /** @type {?} */
    SuiModal.prototype._originalContainer;
    /** @type {?} */
    SuiModal.prototype._renderer;
    /** @type {?} */
    SuiModal.prototype._element;
    /** @type {?} */
    SuiModal.prototype._componentFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUMxRCxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBbUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxhQUFhLEVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBbUNqRSxNQUFNOzs7Ozs7SUFzSEYsWUFBb0IsU0FBbUIsRUFBVSxRQUFtQixFQUFVLGlCQUFxQztRQUEvRixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7O1FBRS9HLE1BQU0sTUFBTSxHQUFHLElBQUksV0FBVyxFQUFtQixDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBR3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxD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LENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUM3RTs7Ozs7O0lBR0UsT0FBTyxDQUFDLENBQVk7O1FBRXZCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Ozs7O0lBS2pCLGVBQWUsQ0FBQyxDQUFlO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1lBRS9CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7O0lBR00sZ0JBQWdCO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN2Qjs7O1lBeFJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEJiO2dCQUNHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNmOzs7O1lBeENvRCxTQUFTO1lBQXJCLFVBQVU7WUFHVixtQkFBbUI7Ozt5QkF1Q3ZELEtBQUs7MEJBSUwsS0FBSzt3QkFnQkwsTUFBTSxTQUFDLFVBQVU7cUJBSWpCLE1BQU0sU0FBQyxRQUFRO3dCQUlmLE1BQU0sU0FBQyxXQUFXOzRCQUdsQixTQUFTLFNBQUMsT0FBTzttQkFJakIsS0FBSzt5QkFHTCxLQUFLOzJCQU9MLEtBQUs7c0JBVUwsS0FBSzt5QkFRTCxLQUFLO3lCQWVMLEtBQUs7eUJBWUwsS0FBSztpQ0FJTCxLQUFLOzhCQVNMLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs4QkFvSXZELFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFRekMsWUFBWSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsXG4gICAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgVmlld0NvbnRhaW5lclJlZiwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgSUR5bmFtaWNDbGFzc2VzLCBLZXlDb2RlLCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9scywgTW9kYWxSZXN1bHQgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb250cm9sc1wiO1xuaW1wb3J0IHsgTW9kYWxDb25maWcsIE1vZGFsU2l6ZSB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbW9kYWxcIixcbiAgICB0ZW1wbGF0ZTogYFxuPCEtLSBQYWdlIGRpbW1lciBmb3IgbW9kYWwgYmFja2dyb3VuZC4gLS0+XG48c3VpLW1vZGFsLWRpbW1lciBbbmdDbGFzc109XCJ7J3RvcCBhbGlnbmVkJzogIWlzQ2VudGVyZWR9XCIgXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaXNJbnZlcnRlZFwiXG4gICAgICAgICAgICAgICAgICBbKGlzRGltbWVkKV09XCJkaW1CYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgIFt0cmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZSgpXCI+XG5cbiAgICA8IS0tIE1vZGFsIGNvbXBvbmVudCwgd2l0aCB0cmFuc2l0aW9uIGNvbXBvbmVudCBhdHRhY2hlZCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwidWkgbW9kYWxcIlxuICAgICAgICAgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIlxuICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0cmFuc2l0aW9uQ29udHJvbGxlcj8uaXNWaXNpYmxlXCJcbiAgICAgICAgIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbFNjcmVlblwiXG4gICAgICAgICBbY2xhc3MuYmFzaWNdPVwiaXNCYXNpY1wiXG4gICAgICAgICBbY2xhc3Muc2Nyb2xsaW5nXT1cIm11c3RTY3JvbGxcIlxuICAgICAgICAgW2NsYXNzLmludmVydGVkXT1cImlzSW52ZXJ0ZWRcIlxuICAgICAgICAgW25nQ2xhc3NdPVwiZHluYW1pY0NsYXNzZXNcIlxuICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAjbW9kYWw+XG5cbiAgICAgICAgPCEtLSBDb25maWd1cmFibGUgY2xvc2UgaWNvbiAtLT5cbiAgICAgICAgPGkgY2xhc3M9XCJjbG9zZSBpY29uXCIgKm5nSWY9XCJpc0Nsb3NhYmxlXCIgKGNsaWNrKT1cImNsb3NlKClcIj48L2k+XG4gICAgICAgIDwhLS0gPG5nLWNvbnRlbnQ+IHNvIHRoYXQgPHN1aS1tb2RhbD4gY2FuIGJlIHVzZWQgYXMgYSBub3JtYWwgY29tcG9uZW50LiAtLT5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tIEBWaWV3Q2hpbGQgcmVmZXJlbmNlIHNvIHdlIGNhbiBpbnNlcnQgZWxlbWVudHMgYmVzaWRlIHRoaXMgZGl2LiAtLT5cbiAgICAgICAgPGRpdiAjdGVtcGxhdGVTaWJsaW5nPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9zdWktbW9kYWwtZGltbWVyPlxuYCxcbiAgICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWw8VCwgVT4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RhbCBjYW4gYmUgY2xvc2VkIHdpdGggYSBjbG9zZSBidXR0b24sIGNsaWNraW5nIG91dHNpZGUsIG9yIHRoZSBlc2NhcGUga2V5LlxuICAgIHB1YmxpYyBpc0Nsb3NhYmxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBwdWJsaWMgY2xvc2VSZXN1bHQ6VTtcblxuICAgIC8vIFNlcGFyYXRlIGNsYXNzIGZvciB0aGUgYGFwcHJvdmVgIGFuZCBgZGVueWAgbWV0aG9kcyB0byBzdXBwb3J0IHBhc3NpbmcgaW50byBjb21wb25lbnRzLlxuICAgIHB1YmxpYyBjb250cm9sczpNb2RhbENvbnRyb2xzPFQsIFU+O1xuXG4gICAgcHVibGljIGdldCBhcHByb3ZlKCk6TW9kYWxSZXN1bHQ8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5hcHByb3ZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVueSgpOk1vZGFsUmVzdWx0PFU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMuZGVueTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBhcHByb3ZlYCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImFwcHJvdmVkXCIpXG4gICAgcHVibGljIG9uQXBwcm92ZTpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBtb2RhbCBjbG9zZXMsIGFmdGVyIGBkZW55YCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgQE91dHB1dChcImRlbmllZFwiKVxuICAgIHB1YmxpYyBvbkRlbnk6RXZlbnRFbWl0dGVyPFU+O1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgbW9kYWwgY2xvc2VzLlxuICAgIEBPdXRwdXQoXCJkaXNtaXNzZWRcIilcbiAgICBwdWJsaWMgb25EaXNtaXNzOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBWaWV3Q2hpbGQoXCJtb2RhbFwiKVxuICAgIHByaXZhdGUgX21vZGFsRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgLy8gU2l6ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIG1vZGFsLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpemU6TW9kYWxTaXplO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNDZW50ZXJlZDpib29sZWFuO1xuXG4gICAgLy8gV2hldGhlciB0aGUgbW9kYWwgdGFrZXMgdXAgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi5cbiAgICBwcml2YXRlIF9pc0Z1bGxTY3JlZW46Ym9vbGVhbjtcblxuICAgIC8vIFZhbHVlIHRvIGRlbnkgd2l0aCB3aGVuIGNsb3NpbmcgdmlhIGBpc0Nsb3NhYmxlYC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNGdWxsU2NyZWVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Z1bGxTY3JlZW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Z1bGxTY3JlZW4oZnVsbFNjcmVlbjpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRnVsbFNjcmVlbiA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShmdWxsU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgaGFzIGJhc2ljIHN0eWxlcyBhcHBsaWVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzQmFzaWM6Ym9vbGVhbjtcblxuICAgIC8vIFdoZXRoZXIgdGhlIG1vZGFsIGN1cnJlbnRseSBpcyBkaXNwbGF5aW5nIGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RTY3JvbGw6Ym9vbGVhbjtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWwgc2hvdWxkIGFsd2F5cyBkaXNwbGF5IGEgc2Nyb2xsYmFyLlxuICAgIHByaXZhdGUgX211c3RBbHdheXNTY3JvbGw6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtdXN0U2Nyb2xsKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXN0U2Nyb2xsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbXVzdFNjcm9sbChtdXN0U2Nyb2xsOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IG11c3RTY3JvbGw7XG4gICAgICAgIC8vICdDYWNoZScgdmFsdWUgaW4gX211c3RBbHdheXNTY3JvbGwgc28gdGhhdCBpZiBgdHJ1ZWAsIF9tdXN0U2Nyb2xsIGlzbid0IGV2ZXIgYXV0by11cGRhdGVkLlxuICAgICAgICB0aGlzLl9tdXN0QWx3YXlzU2Nyb2xsID0gbXVzdFNjcm9sbDtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBtb2RhbCBzaG93cyBhZ2FpbnN0IGEgbGlnaHQgYmFja2dyb3VuZC5cbiAgICBwcml2YXRlIF9pc0ludmVydGVkOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNJbnZlcnRlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbnZlcnRlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzSW52ZXJ0ZWQoaW52ZXJ0ZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0ludmVydGVkID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGludmVydGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICAvLyBUcmFuc2l0aW9uIHRvIGRpc3BsYXkgbW9kYWwgd2l0aC5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIC8vIER1cmF0aW9uIG9mIHRoZSBtb2RhbCAmIGRpbW1lciB0cmFuc2l0aW9ucy5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgLy8gV2hldGhlciBvciBub3QgdGhlIGJhY2tyb3VuZCBkaW1tZXIgaXMgYWN0aXZlLlxuICAgIHB1YmxpYyBkaW1CYWNrZ3JvdW5kOmJvb2xlYW47XG4gICAgLy8gVHJ1ZSBhZnRlciBgYXBwcm92ZWAgb3IgYGRlbnlgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICBwcml2YXRlIF9pc0Nsb3Npbmc6Ym9vbGVhbjtcblxuICAgIC8vIGBWaWV3Q29udGFpbmVyUmVmYCBmb3IgdGhlIGVsZW1lbnQgdGhlIHRlbXBsYXRlIGdldHMgaW5qZWN0ZWQgYXMgYSBzaWJsaW5nIG9mLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgLy8gUGFyZW50IGVsZW1lbnQgb2YgbW9kYWwgYmVmb3JlIHJlbG9jYXRpb24gdG8gZG9jdW1lbnQgYm9keS5cbiAgICBwcml2YXRlIF9vcmlnaW5hbENvbnRhaW5lcj86RWxlbWVudDtcblxuICAgIHB1YmxpYyBnZXQgZHluYW1pY0NsYXNzZXMoKTpJRHluYW1pY0NsYXNzZXMge1xuICAgICAgICBjb25zdCBjbGFzc2VzOklEeW5hbWljQ2xhc3NlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuc2l6ZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLCBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB3aXRoIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmcm9tIGBNb2RhbENvbmZpZ2AgKHRvIGF2b2lkIHdyaXRpbmcgZGVmYXVsdHMgdHdpY2UpLlxuICAgICAgICBjb25zdCBjb25maWcgPSBuZXcgTW9kYWxDb25maWc8dW5kZWZpbmVkLCBULCBVPigpO1xuICAgICAgICB0aGlzLmxvYWRDb25maWcoY29uZmlnKTtcblxuICAgICAgICAvLyBFdmVudCBlbWl0dGVycyBmb3IgZWFjaCBvZiB0aGUgcG9zc2libGUgbW9kYWwgb3V0Y29tZXMuXG4gICAgICAgIHRoaXMub25BcHByb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uRGVueSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBjb250cm9scyB3aXRoIGFjdGlvbnMgZm9yIHRoZSBgYXBwcm92ZWAgYW5kIGBkZW55YCBjYXNlcy5cbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBNb2RhbENvbnRyb2xzPFQsIFU+KFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uQXBwcm92ZS5lbWl0KHJlcykpLFxuICAgICAgICAgICAgcmVzID0+IHRoaXMuZGlzbWlzcygoKSA9PiB0aGlzLm9uRGVueS5lbWl0KHJlcykpKTtcblxuICAgICAgICAvLyBJbnRlcm5hbCB2YXJpYWJsZSBpbml0aWFsaXNhdGlvbi5cbiAgICAgICAgdGhpcy5kaW1CYWNrZ3JvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0aGUgbW9kYWwgdG8gYmUgdmlzaWJsZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpbUJhY2tncm91bmQgPSB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIC8vIE1vdmUgdGhlIG1vZGFsIHRvIHRoZSBkb2N1bWVudCBib2R5IHRvIGVuc3VyZSBjb3JyZWN0IHNjcm9sbGluZy5cbiAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikhLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgI3RlbXBsYXRlU2libGluZyBlbGVtZW50IGZyb20gdGhlIERPTSB0byBmaXggYm90dG9tIGJvcmRlciBzdHlsZXMuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IHRoaXMudGVtcGxhdGVTaWJsaW5nLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICBpZiAodGVtcGxhdGVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNjcm9sbCgpKTtcblxuICAgICAgICAvLyBGb2N1cyBhbnkgZWxlbWVudCB3aXRoIFthdXRvZm9jdXNdIGF0dHJpYnV0ZS5cbiAgICAgICAgY29uc3QgYXV0b0ZvY3VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2F1dG9mb2N1c11cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAvLyBBdXRvZm9jdXMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGhhZCB0aW1lIHRvIHByb2Nlc3Mgb3RoZXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCAxMCk7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgYWdhaW4gd2hlbiB0aGUgbW9kYWwgaGFzIG9wZW5lZCBzbyB0aGF0IGF1dG9mb2N1cyB3b3JrcyBpbiBJRTExLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdXRvRm9jdXMuZm9jdXMoKSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aGUgbW9kYWwgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZ3VyYXRpb24uXG4gICAgcHVibGljIGxvYWRDb25maWc8Vj4oY29uZmlnOk1vZGFsQ29uZmlnPFYsIFQsIFU+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0Nsb3NhYmxlID0gY29uZmlnLmlzQ2xvc2FibGU7XG4gICAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBjb25maWcuY2xvc2VSZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5zaXplID0gY29uZmlnLnNpemU7XG4gICAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gY29uZmlnLmlzRnVsbFNjcmVlbjtcbiAgICAgICAgdGhpcy5pc0Jhc2ljID0gY29uZmlnLmlzQmFzaWM7XG4gICAgICAgIHRoaXMuaXNJbnZlcnRlZCA9IGNvbmZpZy5pc0ludmVydGVkO1xuICAgICAgICB0aGlzLmlzQ2VudGVyZWQgPSBjb25maWcuaXNDZW50ZXJlZDtcblxuICAgICAgICB0aGlzLm11c3RTY3JvbGwgPSBjb25maWcubXVzdFNjcm9sbDtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBjb25maWcudHJhbnNpdGlvbjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSBjb25maWcudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8vIERpc21pc3NlcyB0aGUgbW9kYWwgd2l0aCBhIHRyYW5zaXRpb24sIGZpcmluZyB0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nLlxuICAgIHByaXZhdGUgZGlzbWlzcyhjYWxsYmFjazooKSA9PiB2b2lkID0gKCkgPT4ge30pOnZvaWQge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgY3VycmVudGx5IGNsb3NpbmcsXG4gICAgICAgIGlmICghdGhpcy5faXNDbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Nsb3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIHRoZSBtb2RhbCB0byBiZSBpbnZpc2libGUuXG4gICAgICAgICAgICB0aGlzLmRpbUJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZG9uZSwgbW92ZSB0aGUgbW9kYWwgYmFjayB0byBpdHMgb3JpZ2luYWwgbG9jYXRpb24sIGVtaXQgYSBkaXNtaXNzIGV2ZW50LCBhbmQgZmlyZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcmlnaW5hbENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xvc2VzIHRoZSBtb2RhbCB3aXRoIGEgJ2RlbnknIG91dGNvbWUsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGVmYXVsdCByZWFzb24uXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xvc2FibGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbGxvd2VkIHRvIGNsb3NlLCBmaXJlIHRoZSBkZW55IHJlc3VsdCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5kZW55KHRoaXMuY2xvc2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVjaWRlcyB3aGV0aGVyIHRoZSBtb2RhbCBuZWVkcyB0byByZXBvc2l0aW9uIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICBwcml2YXRlIHVwZGF0ZVNjcm9sbCgpOnZvaWQge1xuXG4gICAgICAgIC8vIF9tdXN0QWx3YXlzU2Nyb2xsIHdvcmtzIGJ5IHN0b3BwaW5nIF9tdXN0U2Nyb2xsIGZyb20gYmVpbmcgYXV0b21hdGljYWxseSB1cGRhdGVkLCBzbyBpdCBzdGF5cyBgdHJ1ZWAuXG4gICAgICAgIGlmICghdGhpcy5fbXVzdEFsd2F5c1Njcm9sbCAmJiB0aGlzLl9tb2RhbEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgLy8gU2VtYW50aWMgVUkgbW9kYWwgbWFyZ2luIGFuZCBkaW1tZXIgcGFkZGluZyBhcmUgMXJlbSwgd2hpY2ggaXMgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBmb250IHNpemUsIHNvIGZvciBjb21wYXRpYmlsaXR5OlxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSk7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAqIDI7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fbW9kYWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcblxuICAgICAgICAgICAgLy8gVGhlIG1vZGFsIG11c3Qgc2Nyb2xsIGlmIHRoZSB3aW5kb3cgaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiB0aGUgbW9kYWwgaGVpZ2h0ICsgYm90aCBtYXJnaW5zLlxuICAgICAgICAgICAgdGhpcy5fbXVzdFNjcm9sbCA9IHdpbmRvdy5pbm5lckhlaWdodCA8IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgbWFyZ2luICogMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE1ha2VzIHNlbnNlIGhlcmUsIGFzIHRoZSBtb2RhbCBzaG91bGRuJ3QgYmUgYXR0YWNoZWQgdG8gYW55IERPTSBlbGVtZW50LlxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIERvY3VtZW50IGxpc3RlbmVyIGlzIGZpbmUgaGVyZSBiZWNhdXNlIG5vYm9keSB3aWxsIGhhdmUgZW5vdWdoIG1vZGFscyBvcGVuLlxuICAgIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDprZXl1cFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRG9jdW1lbnRLZXlVcChlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVzY2FwZSkge1xuICAgICAgICAgICAgLy8gQ2xvc2UgYXV0b21hdGljYWxseSBjb3ZlcnMgY2FzZSBvZiBgIWlzQ2xvc2FibGVgLCBzbyBjaGVjayBub3QgbmVlZGVkLlxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpyZXNpemVcIilcbiAgICBwdWJsaWMgb25Eb2N1bWVudFJlc2l6ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgIH1cbn1cbiJdfQ==