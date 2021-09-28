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
var 
// unsupported: template constraints.
/**
 * @template T
 */
CustomValidator = /** @class */ (function () {
    function CustomValidator(_host) {
        this._host = _host;
        this.onValidatorChange = function () { };
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CustomValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._host.validate(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CustomValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValidatorChange = fn;
    };
    return CustomValidator;
}());
// unsupported: template constraints.
/**
 * @template T
 */
export { CustomValidator };
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
        useExisting: forwardRef(function () { return type; }),
        multi: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL2N1c3RvbS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBTWpFOzs7OztBQUFBO0lBQ0kseUJBQW9CLEtBQU87UUFBUCxVQUFLLEdBQUwsS0FBSyxDQUFFO2lDQUVBLGVBQVE7S0FGSjs7Ozs7SUFJeEIsa0NBQVE7Ozs7Y0FBQyxDQUFpQjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUczQixtREFBeUI7Ozs7Y0FBQyxFQUFhO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7OzBCQWpCcEM7SUFtQkMsQ0FBQTs7Ozs7QUFaRCwyQkFZQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxpQ0FBaUMsSUFBYTtJQUNoRCxNQUFNLENBQUM7UUFDSCxPQUFPLEVBQUUsYUFBYTtRQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ25DLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsaWRhdG9ySG9zdCB7XG4gICAgdmFsaWRhdGUoYzpBYnN0cmFjdENvbnRyb2wpOlZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmFsaWRhdG9yPFQgZXh0ZW5kcyBJQ3VzdG9tVmFsaWRhdG9ySG9zdD4gaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvc3Q6VCkge31cblxuICAgIHB1YmxpYyBvblZhbGlkYXRvckNoYW5nZSA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0LnZhbGlkYXRlKGMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOigpID0+IHZvaWQpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlID0gZm47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0aW9uUHJvdmlkZXIge1xuICAgIHByb3ZpZGU6SW5qZWN0aW9uVG9rZW48KEZ1bmN0aW9uIHwgVmFsaWRhdG9yKVtdPjtcbiAgICB1c2VFeGlzdGluZzpUeXBlPGFueT47XG4gICAgbXVsdGk6Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVZhbGlkYXRvckZhY3RvcnkodHlwZTpGdW5jdGlvbik6SVZhbGlkYXRpb25Qcm92aWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gdHlwZSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbn1cbiJdfQ==