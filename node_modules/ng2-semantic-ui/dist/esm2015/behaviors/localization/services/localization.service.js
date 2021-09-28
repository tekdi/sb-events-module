/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from "@angular/core";
import enGB from "../locales/en-GB";
import * as $extend from "extend";
/**
 * @template T
 * @param {?} obj
 * @return {?}
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * @template T, U
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function deepExtend(target, source) {
    /** @type {?} */
    const extend = (/** @type {?} */ ($extend)).default || $extend;
    return extend(true, target, source);
}
/**
 * @param {?} language
 * @return {?}
 */
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
/**
 * @record
 */
function ILocalizationValuesContainer() { }
export class SuiLocalizationService {
    constructor() {
        this.onLanguageUpdate = new EventEmitter();
        this._fallbackValues = enGB;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", enGB);
    }
    /**
     * @return {?}
     */
    get language() {
        return this._language;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    setLanguage(language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    }
    /**
     * @param {?=} language
     * @return {?}
     */
    get(language = this.language) {
        /** @type {?} */
        const values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error(`Locale ${language} is not loaded`);
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    }
    /**
     * @template T
     * @param {?} values
     * @param {?} overrides
     * @return {?}
     */
    override(values, overrides) {
        return deepExtend(deepClone(values), overrides);
    }
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    load(language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    }
    /**
     * @param {?} language
     * @param {?} values
     * @return {?}
     */
    patch(language, values) {
        deepExtend(this._values[lang(language)], values);
    }
    /**
     * @param {?} value
     * @param {?} variables
     * @return {?}
     */
    interpolate(value, variables) {
        return variables.reduce((s, [k, v]) => s.replace(new RegExp(`#{${k}}`, "g"), v), value);
    }
}
SuiLocalizationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SuiLocalizationService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    SuiLocalizationService.prototype._language;
    /** @type {?} */
    SuiLocalizationService.prototype._fallbackValues;
    /** @type {?} */
    SuiLocalizationService.prototype._values;
    /** @type {?} */
    SuiLocalizationService.prototype.onLanguageUpdate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJiZWhhdmlvcnMvbG9jYWxpemF0aW9uL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBRWxDLG1CQUFzQixHQUFLO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUMxQzs7Ozs7OztBQUVELG9CQUEwQixNQUFRLEVBQUUsTUFBUTs7SUFFeEMsTUFBTSxNQUFNLEdBQUcsbUJBQUMsT0FBYyxFQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQztJQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDdkM7Ozs7O0FBRUQsY0FBYyxRQUFlO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNsRDs7Ozs7QUFPRCxNQUFNO0lBWUY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztRQWJVLFFBQVE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O0lBY25CLFdBQVcsQ0FBQyxRQUFlO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEM7Ozs7OztJQUdFLEdBQUcsQ0FBQyxXQUFrQixJQUFJLENBQUMsUUFBUTs7UUFDdEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxRQUFRLGdCQUFnQixDQUFDLENBQUM7U0FDdkQ7UUFDRCxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7OztJQUd0QixRQUFRLENBQ1gsTUFBdUIsRUFDdkIsU0FBNEM7UUFFNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7SUFHN0MsSUFBSSxDQUFDLFFBQWUsRUFBRSxNQUEyQjtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7SUFHMUIsS0FBSyxDQUFDLFFBQWUsRUFBRSxNQUEyQjtRQUNyRCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7OztJQUc5QyxXQUFXLENBQUMsS0FBWSxFQUFFLFNBQTRCO1FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7WUF2RC9GLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUxvY2FsZVZhbHVlcywgSVBhcnRpYWxMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tIFwiLi4vbG9jYWxlcy9pbnRlcmZhY2VzL3ZhbHVlc1wiO1xuaW1wb3J0IGVuR0IgZnJvbSBcIi4uL2xvY2FsZXMvZW4tR0JcIjtcbmltcG9ydCAqIGFzICRleHRlbmQgZnJvbSBcImV4dGVuZFwiO1xuXG5mdW5jdGlvbiBkZWVwQ2xvbmU8VD4ob2JqOlQpOlQge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiBkZWVwRXh0ZW5kPFQsIFU+KHRhcmdldDpULCBzb3VyY2U6VSk6VCAmIFUge1xuICAgIC8vIFJvbGx1cC4uLlxuICAgIGNvbnN0IGV4dGVuZCA9ICgkZXh0ZW5kIGFzIGFueSkuZGVmYXVsdCB8fCAkZXh0ZW5kO1xuICAgIHJldHVybiBleHRlbmQodHJ1ZSwgdGFyZ2V0LCBzb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBsYW5nKGxhbmd1YWdlOnN0cmluZyk6c3RyaW5nIHtcbiAgICByZXR1cm4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiLVwiLCBcIlwiKTtcbn1cblxuaW50ZXJmYWNlIElMb2NhbGl6YXRpb25WYWx1ZXNDb250YWluZXIge1xuICAgIFtuYW1lOnN0cmluZ106SVBhcnRpYWxMb2NhbGVWYWx1ZXM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9sYW5ndWFnZTpzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja1ZhbHVlczpJTG9jYWxlVmFsdWVzO1xuICAgIHByaXZhdGUgX3ZhbHVlczpJTG9jYWxpemF0aW9uVmFsdWVzQ29udGFpbmVyO1xuXG4gICAgcHVibGljIGdldCBsYW5ndWFnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MYW5ndWFnZVVwZGF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVmFsdWVzID0gZW5HQjtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gXCJlbi1HQlwiO1xuICAgICAgICB0aGlzLmxvYWQoXCJlbi1HQlwiLCBlbkdCKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgaWYgKGxhbmcodGhpcy5fbGFuZ3VhZ2UpICE9PSBsYW5nKGxhbmd1YWdlKSkge1xuICAgICAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgICAgIHRoaXMub25MYW5ndWFnZVVwZGF0ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGxhbmd1YWdlOnN0cmluZyA9IHRoaXMubGFuZ3VhZ2UpOklMb2NhbGVWYWx1ZXMge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkZWVwQ2xvbmUodGhpcy5fZmFsbGJhY2tWYWx1ZXMpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTG9jYWxlICR7bGFuZ3VhZ2V9IGlzIG5vdCBsb2FkZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBkZWVwRXh0ZW5kKHZhbHVlcywgdGhpcy5fdmFsdWVzW2xhbmcobGFuZ3VhZ2UpXSk7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodmFsdWVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGU8VCBleHRlbmRzIGtleW9mIElMb2NhbGVWYWx1ZXM+KFxuICAgICAgICB2YWx1ZXM6SUxvY2FsZVZhbHVlc1tUXSxcbiAgICAgICAgb3ZlcnJpZGVzOlJlY3Vyc2l2ZVBhcnRpYWw8SUxvY2FsZVZhbHVlc1tUXT5cbiAgICApOklMb2NhbGVWYWx1ZXNbVF0ge1xuICAgICAgICByZXR1cm4gZGVlcEV4dGVuZChkZWVwQ2xvbmUodmFsdWVzKSwgb3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChsYW5ndWFnZTpzdHJpbmcsIHZhbHVlczpJUGFydGlhbExvY2FsZVZhbHVlcyk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0gPSBkZWVwQ2xvbmUodmFsdWVzKTtcbiAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGF0Y2gobGFuZ3VhZ2U6c3RyaW5nLCB2YWx1ZXM6SVBhcnRpYWxMb2NhbGVWYWx1ZXMpOnZvaWQge1xuICAgICAgICBkZWVwRXh0ZW5kKHRoaXMuX3ZhbHVlc1tsYW5nKGxhbmd1YWdlKV0sIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVycG9sYXRlKHZhbHVlOnN0cmluZywgdmFyaWFibGVzOltzdHJpbmcsIHN0cmluZ11bXSk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcy5yZWR1Y2UoKHMsIFtrLCB2XSkgPT4gcy5yZXBsYWNlKG5ldyBSZWdFeHAoYCN7JHtrfX1gLCBcImdcIiksIHYpLCB2YWx1ZSk7XG4gICAgfVxufVxuIl19