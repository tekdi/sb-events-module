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
export class SuiModalService {
    /**
     * @param {?} _componentFactory
     */
    constructor(_componentFactory) {
        this._componentFactory = _componentFactory;
    }
    /**
     * @template T, U, V
     * @param {?} modal
     * @return {?}
     */
    open(modal) {
        /** @type {?} */
        const componentRef = this._componentFactory.createComponent(SuiModal);
        /** @type {?} */
        const modalComponent = componentRef.instance;
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
            const contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            /** @type {?} */
            const contentElement = /** @type {?} */ (contentComponentRef.location.nativeElement);
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
    }
}
SuiModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SuiModalService.ctorParameters = () => [
    { type: SuiComponentFactory }
];
if (false) {
    /** @type {?} */
    SuiModalService.prototype._componentFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvbW9kYWwvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd0RCxNQUFNOzs7O0lBQ0YsWUFBb0IsaUJBQXFDO1FBQXJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7S0FBSTs7Ozs7O0lBRXRELElBQUksQ0FBVSxLQUEwQjs7UUFFM0MsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBaUIsUUFBUSxDQUFDLENBQUM7O1FBR3RGLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7WUFFdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7O2dCQUU5RSxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU87O2dCQUV4QixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2FBQ3hDLENBQUMsQ0FBQztTQUNOO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7O1lBRy9DLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FDOUQsS0FBSyxDQUFDLFNBQVMsRUFDZjtnQkFDSTtvQkFDSSxPQUFPLEVBQUUsS0FBSztvQkFDZCxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUM5RDthQUNKLENBQ0osQ0FBQzs7WUFHRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFHekYsTUFBTSxjQUFjLHFCQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxhQUF3QixFQUFDOzs7O1lBSzdFLE9BQU8sY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLGNBQWMsQ0FBQyxhQUFhLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqRyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25HOztZQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2xFOzs7UUFJRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7O1FBR3pELGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR2pDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7WUF4RG5ELFVBQVU7Ozs7WUFORixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aUNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgVGVtcGxhdGVNb2RhbENvbmZpZywgQ29tcG9uZW50TW9kYWxDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb2RhbC1jb25maWdcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW9kYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IEFjdGl2ZU1vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXMvYWN0aXZlLW1vZGFsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge31cblxuICAgIHB1YmxpYyBvcGVuPFQsIFUsIFY+KG1vZGFsOk1vZGFsQ29uZmlnPFQsIFUsIFY+KTpBY3RpdmVNb2RhbDxULCBVLCBWPiB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBtb2RhbCBjb21wb25lbnQgdG8gYmUgc2hvd24uXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50PFN1aU1vZGFsPFUsIFY+PihTdWlNb2RhbCk7XG5cbiAgICAgICAgLy8gU2hvcnRoYW5kIGZvciB0aGUgY3JlYXRlZCBtb2RhbCBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICAgIGNvbnN0IG1vZGFsQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXG4gICAgICAgIGlmIChtb2RhbCBpbnN0YW5jZW9mIFRlbXBsYXRlTW9kYWxDb25maWcpIHtcbiAgICAgICAgICAgIC8vIEluamVjdCB0aGUgdGVtcGxhdGUgaW50byB0aGUgdmlldy5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyhtb2RhbENvbXBvbmVudC50ZW1wbGF0ZVNpYmxpbmcsIG1vZGFsLnRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgLy8gYGxldC1jb250ZXh0YFxuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogbW9kYWwuY29udGV4dCxcbiAgICAgICAgICAgICAgICAvLyBgbGV0LW1vZGFsPVwibW9kYWxcImBcbiAgICAgICAgICAgICAgICBtb2RhbDogY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2xzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RhbCBpbnN0YW5jZW9mIENvbXBvbmVudE1vZGFsQ29uZmlnKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgY29tcG9uZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1vZGFsIGNvbnRlbnQsXG4gICAgICAgICAgICAvLyBpbmplY3RpbmcgYW4gaW5zdGFuY2Ugb2YgYE1vZGFsYCB0byBiZSB1c2VkIGluIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogbmV3IE1vZGFsKG1vZGFsQ29tcG9uZW50LmNvbnRyb2xzLCBtb2RhbC5jb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSBuZXcgY29tcG9uZW50IGludG8gdGhlIGNvbnRlbnQgb2YgdGhlIG1vZGFsLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5hdHRhY2hUb1ZpZXcoY29udGVudENvbXBvbmVudFJlZiwgbW9kYWxDb21wb25lbnQudGVtcGxhdGVTaWJsaW5nKTtcblxuICAgICAgICAgICAgLy8gU2hvcnRoYW5kIGZvciBhY2Nlc3MgdG8gdGhlIGNvbnRlbnQgY29tcG9uZW50J3MgRE9NIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnRDb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBNb3ZlIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIGluc2lkZSB0aGUgY29tcG9uZW50IHRvIHRoZSBtYWluIG1vZGFsIGVsZW1lbnQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGRvbmUgc28gdGhhdCBDU1MgY2xhc3NlcyBhcHBseSBjb3JyZWN0bHkuIEl0IGRvZXMgc3RvcCBhbnkgY3VzdG9tIHN0eWxlcyBmcm9tIHdvcmtpbmcgaG93ZXZlcixcbiAgICAgICAgICAgIC8vIHNvIG90aGVyIHdheXMgbWF5IGhhdmUgdG8gYmUgaW52ZXN0aWdhdGVkLlxuICAgICAgICAgICAgd2hpbGUgKGNvbnRlbnRFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSAmJiBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGNvbnRlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRlbnRFbGVtZW50LmZpcnN0Q2hpbGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZ2VuZXJhdGVkIGNvbXBvbmVudCdzICdlbXB0eSBzaGVsbCcgZnJvbSB0aGUgRE9NLlxuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeS5kZXRhY2hGcm9tRG9jdW1lbnQoY29udGVudENvbXBvbmVudFJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggdGhlIG5ldyBtb2RhbCBjb21wb25lbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAgICAvLyBUaGUgY29tcG9uZW50IHdpbGwgbW92ZSBpdHNlbGYgdG8gdGhlIGRvY3VtZW50IGJvZHkgZm9yIGNvcnJlY3RsIHN0eWxpbmcuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuYXR0YWNoVG9BcHBsaWNhdGlvbihjb21wb25lbnRSZWYpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIGdlbmVyYXRlZCBtb2RhbCB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAgICAgIG1vZGFsQ29tcG9uZW50LmxvYWRDb25maWcobW9kYWwpO1xuXG4gICAgICAgIC8vIFJldHVybiBhbiBpbnN0YW5jZSBvZiBhbiBgQWN0aXZlTW9kYWxgLCBzbyB0aGUgdXNlciBjYW4gY29udHJvbCB0aGUgbmV3IG1vZGFsLlxuICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZU1vZGFsKG1vZGFsLCBjb21wb25lbnRSZWYpO1xuICAgIH1cbn1cbiJdfQ==