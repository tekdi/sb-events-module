/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { TemplateModalConfig, ComponentModalConfig } from "../classes/modal-config";
import { SuiModal } from "../components/modal";
import { Modal } from "../classes/modal-controls";
import { ActiveModal } from "../classes/active-modal";
var SuiModalService = /** @class */ (function () {
    function SuiModalService(_componentFactory) {
        this._componentFactory = _componentFactory;
    }
    /**
     * @template T, U, V
     * @param {?} modal
     * @return {?}
     */
    SuiModalService.prototype.open = /**
     * @template T, U, V
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /** @type {?} */
        var componentRef = this._componentFactory.createComponent(SuiModal);
        /** @type {?} */
        var modalComponent = componentRef.instance;
        if (modal instanceof TemplateModalConfig) {
            // Inject the template into the view.
            this._componentFactory.createView(modalComponent.templateSibling, modal.template, {
                // `let-context`
                $implicit: modal.context,
                // `let-modal="modal"`
                modal: componentRef.instance.controls
            });
        }
        else if (modal instanceof ComponentModalConfig) {
            /** @type {?} */
            var contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            /** @type {?} */
            var contentElement = /** @type {?} */ (contentComponentRef.location.nativeElement);
            // Move all of the DOM elements inside the component to the main modal element.
            // This is done so that CSS classes apply correctly. It does stop any custom styles from working however,
            // so other ways may have to be investigated.
            while (contentElement.hasChildNodes() && contentElement.parentElement && contentElement.firstChild) {
                contentElement.parentElement.appendChild(contentElement.removeChild(contentElement.firstChild));
            }
            // Remove the generated component's 'empty shell' from the DOM.
            this._componentFactory.detachFromDocument(contentComponentRef);
        }
        // Attach the new modal component to the application.
        // The component will move itself to the document body for correctl styling.
        this._componentFactory.attachToApplication(componentRef);
        // Initialise the generated modal with the provided config.
        modalComponent.loadConfig(modal);
        // Return an instance of an `ActiveModal`, so the user can control the new modal.
        return new ActiveModal(modal, componentRef);
    };
    SuiModalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SuiModalService.ctorParameters = function () { return [
        { type: SuiComponentFactory }
    ]; };
    return SuiModalService;
}());
export { SuiModalService };
if (false) {
    /** @type {?} */
    SuiModalService.prototype._componentFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbW9kYWwvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFJbEQseUJBQW9CLGlCQUFxQztRQUFyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO0tBQUk7Ozs7OztJQUV0RCw4QkFBSTs7Ozs7Y0FBVSxLQUEwQjs7UUFFM0MsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBaUIsUUFBUSxDQUFDLENBQUM7O1FBR3RGLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7WUFFdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7O2dCQUU5RSxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU87O2dCQUV4QixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2FBQ3hDLENBQUMsQ0FBQztTQUNOO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7O1lBRy9DLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FDOUQsS0FBSyxDQUFDLFNBQVMsRUFDZjtnQkFDSTtvQkFDSSxPQUFPLEVBQUUsS0FBSztvQkFDZCxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUM5RDthQUNKLENBQ0osQ0FBQzs7WUFHRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFHekYsSUFBTSxjQUFjLHFCQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxhQUF3QixFQUFDOzs7O1lBSzdFLE9BQU8sY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLGNBQWMsQ0FBQyxhQUFhLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqRyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25HOztZQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2xFOzs7UUFJRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7O1FBR3pELGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR2pDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7OztnQkF4RG5ELFVBQVU7Ozs7Z0JBTkYsbUJBQW1COzswQkFENUI7O1NBUWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGFsQ29uZmlnLCBUZW1wbGF0ZU1vZGFsQ29uZmlnLCBDb21wb25lbnRNb2RhbENvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL21vZGFsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb250cm9sc1wiO1xuaW1wb3J0IHsgQWN0aXZlTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hY3RpdmUtbW9kYWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7fVxuXG4gICAgcHVibGljIG9wZW48VCwgVSwgVj4obW9kYWw6TW9kYWxDb25maWc8VCwgVSwgVj4pOkFjdGl2ZU1vZGFsPFQsIFUsIFY+IHtcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG1vZGFsIGNvbXBvbmVudCB0byBiZSBzaG93bi5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQ8U3VpTW9kYWw8VSwgVj4+KFN1aU1vZGFsKTtcblxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIHRoZSBjcmVhdGVkIG1vZGFsIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICAgICAgY29uc3QgbW9kYWxDb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKG1vZGFsIGluc3RhbmNlb2YgVGVtcGxhdGVNb2RhbENvbmZpZykge1xuICAgICAgICAgICAgLy8gSW5qZWN0IHRoZSB0ZW1wbGF0ZSBpbnRvIHRoZSB2aWV3LlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVWaWV3KG1vZGFsQ29tcG9uZW50LnRlbXBsYXRlU2libGluZywgbW9kYWwudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAvLyBgbGV0LWNvbnRleHRgXG4gICAgICAgICAgICAgICAgJGltcGxpY2l0OiBtb2RhbC5jb250ZXh0LFxuICAgICAgICAgICAgICAgIC8vIGBsZXQtbW9kYWw9XCJtb2RhbFwiYFxuICAgICAgICAgICAgICAgIG1vZGFsOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGFsIGluc3RhbmNlb2YgQ29tcG9uZW50TW9kYWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHRoZSBjb21wb25lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbW9kYWwgY29udGVudCxcbiAgICAgICAgICAgIC8vIGluamVjdGluZyBhbiBpbnN0YW5jZSBvZiBgTW9kYWxgIHRvIGJlIHVzZWQgaW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBuZXcgTW9kYWwobW9kYWxDb21wb25lbnQuY29udHJvbHMsIG1vZGFsLmNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBjb21wb25lbnQgaW50byB0aGUgY29udGVudCBvZiB0aGUgbW9kYWwuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmF0dGFjaFRvVmlldyhjb250ZW50Q29tcG9uZW50UmVmLCBtb2RhbENvbXBvbmVudC50ZW1wbGF0ZVNpYmxpbmcpO1xuXG4gICAgICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGFjY2VzcyB0byB0aGUgY29udGVudCBjb21wb25lbnQncyBET00gZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gY29udGVudENvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIE1vdmUgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgaW5zaWRlIHRoZSBjb21wb25lbnQgdG8gdGhlIG1haW4gbW9kYWwgZWxlbWVudC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZG9uZSBzbyB0aGF0IENTUyBjbGFzc2VzIGFwcGx5IGNvcnJlY3RseS4gSXQgZG9lcyBzdG9wIGFueSBjdXN0b20gc3R5bGVzIGZyb20gd29ya2luZyBob3dldmVyLFxuICAgICAgICAgICAgLy8gc28gb3RoZXIgd2F5cyBtYXkgaGF2ZSB0byBiZSBpbnZlc3RpZ2F0ZWQuXG4gICAgICAgICAgICB3aGlsZSAoY29udGVudEVsZW1lbnQuaGFzQ2hpbGROb2RlcygpICYmIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY29udGVudEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGVudEVsZW1lbnQuZmlyc3RDaGlsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBnZW5lcmF0ZWQgY29tcG9uZW50J3MgJ2VtcHR5IHNoZWxsJyBmcm9tIHRoZSBET00uXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmRldGFjaEZyb21Eb2N1bWVudChjb250ZW50Q29tcG9uZW50UmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCB0aGUgbmV3IG1vZGFsIGNvbXBvbmVudCB0byB0aGUgYXBwbGljYXRpb24uXG4gICAgICAgIC8vIFRoZSBjb21wb25lbnQgd2lsbCBtb3ZlIGl0c2VsZiB0byB0aGUgZG9jdW1lbnQgYm9keSBmb3IgY29ycmVjdGwgc3R5bGluZy5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb0FwcGxpY2F0aW9uKGNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0aGUgZ2VuZXJhdGVkIG1vZGFsIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgbW9kYWxDb21wb25lbnQubG9hZENvbmZpZyhtb2RhbCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGFuIGluc3RhbmNlIG9mIGFuIGBBY3RpdmVNb2RhbGAsIHNvIHRoZSB1c2VyIGNhbiBjb250cm9sIHRoZSBuZXcgbW9kYWwuXG4gICAgICAgIHJldHVybiBuZXcgQWN0aXZlTW9kYWwobW9kYWwsIGNvbXBvbmVudFJlZik7XG4gICAgfVxufVxuIl19