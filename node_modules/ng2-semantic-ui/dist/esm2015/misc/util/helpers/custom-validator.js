/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NG_VALIDATORS } from "@angular/forms";
import { forwardRef } from "@angular/core";
/**
 * @record
 */
export function ICustomValidatorHost() { }
/** @type {?} */
ICustomValidatorHost.prototype.validate;
// unsupported: template constraints.
/**
 * @template T
 */
export class CustomValidator {
    /**
     * @param {?} _host
     */
    constructor(_host) {
        this._host = _host;
        this.onValidatorChange = () => { };
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this._host.validate(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onValidatorChange = fn;
    }
}
if (false) {
    /** @type {?} */
    CustomValidator.prototype.onValidatorChange;
    /** @type {?} */
    CustomValidator.prototype._host;
}
/**
 * @record
 */
export function IValidationProvider() { }
/** @type {?} */
IValidationProvider.prototype.provide;
/** @type {?} */
IValidationProvider.prototype.useExisting;
/** @type {?} */
IValidationProvider.prototype.multi;
/**
 * @param {?} type
 * @return {?}
 */
export function customValidatorFactory(type) {
    return {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => type),
        multi: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBTWpFLE1BQU07Ozs7SUFDRixZQUFvQixLQUFPO1FBQVAsVUFBSyxHQUFMLEtBQUssQ0FBRTtpQ0FFQSxHQUFHLEVBQUUsSUFBRztLQUZKOzs7OztJQUl4QixRQUFRLENBQUMsQ0FBaUI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHM0IseUJBQXlCLENBQUMsRUFBYTtRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDOztDQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxpQ0FBaUMsSUFBYTtJQUNoRCxNQUFNLENBQUM7UUFDSCxPQUFPLEVBQUUsYUFBYTtRQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQyxLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhbGlkYXRvckhvc3Qge1xuICAgIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcjxUIGV4dGVuZHMgSUN1c3RvbVZhbGlkYXRvckhvc3Q+IGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3N0OlQpIHt9XG5cbiAgICBwdWJsaWMgb25WYWxpZGF0b3JDaGFuZ2UgPSAoKSA9PiB7fTtcblxuICAgIHB1YmxpYyB2YWxpZGF0ZShjOkFic3RyYWN0Q29udHJvbCk6VmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5faG9zdC52YWxpZGF0ZShjKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjooKSA9PiB2b2lkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZSA9IGZuO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmFsaWRhdGlvblByb3ZpZGVyIHtcbiAgICBwcm92aWRlOkluamVjdGlvblRva2VuPChGdW5jdGlvbiB8IFZhbGlkYXRvcilbXT47XG4gICAgdXNlRXhpc3Rpbmc6VHlwZTxhbnk+O1xuICAgIG11bHRpOmJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21WYWxpZGF0b3JGYWN0b3J5KHR5cGU6RnVuY3Rpb24pOklWYWxpZGF0aW9uUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IHR5cGUpLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG59XG4iXX0=