/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const KeyCode = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Escape: 27,
    Enter: 13,
    Space: 32,
    Backspace: 8,
};
export { KeyCode };
KeyCode[KeyCode.Left] = 'Left';
KeyCode[KeyCode.Up] = 'Up';
KeyCode[KeyCode.Right] = 'Right';
KeyCode[KeyCode.Down] = 'Down';
KeyCode[KeyCode.Escape] = 'Escape';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.Backspace] = 'Backspace';
/**
 * @record
 */
function IRecursiveObject() { }
/**
 * @record
 * @template T
 */
export function ITemplateRefContext() { }
/** @type {?} */
ITemplateRefContext.prototype.$implicit;
/**
 * @record
 */
export function IAugmentedElement() { }
/** @type {?} */
IAugmentedElement.prototype.closest;
export class HandledEvent {
}
if (false) {
    /** @type {?} */
    HandledEvent.prototype.eventHandled;
}
/**
 * @record
 */
export function IDynamicClasses() { }
/** @type {?} */
export const Util = {
    Array: {
        /**
         * @param {?} n
         * @param {?=} offset
         * @return {?}
         */
        range(n, offset = 0) {
            return Array(n).fill(0).map((z, i) => i + offset);
        },
        /**
         * @template T
         * @param {?} items
         * @param {?} groupLength
         * @return {?}
         */
        group(items, groupLength) {
            /** @type {?} */
            const mutable = items.slice(0);
            /** @type {?} */
            const groups = [];
            while (mutable.length > 0) {
                groups.push(mutable.splice(0, groupLength));
            }
            return groups;
        },
        /**
         * @template T
         * @param {?} items
         * @param {?} field
         * @return {?}
         */
        groupBy(items, field) {
            return items.reduce((groups, i) => {
                /** @type {?} */
                const fieldValue = i[field].toString();
                groups[fieldValue] = groups[fieldValue] || [];
                groups[fieldValue].push(i);
                return groups;
            }, Object());
        },
        /**
         * @template T
         * @param {?} items
         * @return {?}
         */
        flatten(items) {
            return items.reduce((is, i) => is.concat(i), []);
        }
    },
    String: {
        /**
         * @param {?} str
         * @param {?} length
         * @param {?} padding
         * @return {?}
         */
        padLeft(str, length, padding) {
            /** @type {?} */
            let s = str;
            while (s.length < length) {
                s = padding + s;
            }
            return s;
        }
    },
    DOM: {
        /**
         * @param {?} attributeValue
         * @return {?}
         */
        parseBooleanAttribute(attributeValue) {
            /** @type {?} */
            let value = attributeValue;
            if (typeof attributeValue === "string") {
                value = true;
            }
            return value;
        }
    },
    Object: {
        /**
         * @template T, U
         * @param {?} object
         * @param {?=} path
         * @return {?}
         */
        readValue(object, path) {
            if (!path) {
                return /** @type {?} */ ((object));
            }
            /** @type {?} */
            let recursed = /** @type {?} */ ((object));
            for (let i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = (/** @type {?} */ ((recursed)))[p[i]];
            }
            return /** @type {?} */ ((recursed));
        }
    },
    Math: {
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        round(r, n) {
            return Math.round(r / n) * n;
        },
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        roundUp(r, n) {
            return Math.ceil(r / n) * n;
        },
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        roundDown(r, n) {
            return Math.floor(r / n) * n;
        },
        /**
         * @param {?} r
         * @param {?} n
         * @return {?}
         */
        mod(r, n) {
            /** @type {?} */
            const rem = r % n;
            if (rem < 0) {
                return rem + n;
            }
            return rem;
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1pc2MvdXRpbC9oZWxwZXJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRUksUUFBUztJQUNULE1BQU87SUFDUCxTQUFVO0lBQ1YsUUFBUztJQUVULFVBQVc7SUFDWCxTQUFVO0lBRVYsU0FBVTtJQUNWLFlBQWE7OztnQkFUYixJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsS0FBSztnQkFDTCxJQUFJO2dCQUVKLE1BQU07Z0JBQ04sS0FBSztnQkFFTCxLQUFLO2dCQUNMLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdiLE1BQU07Q0FFTDs7Ozs7Ozs7OztBQU1ELGFBQWEsSUFBSSxHQUFHO0lBQ2hCLEtBQUssRUFBRTs7Ozs7O1FBQ0gsS0FBSyxDQUFDLENBQVEsRUFBRSxTQUFnQixDQUFDO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNyRDs7Ozs7OztRQUNELEtBQUssQ0FBSSxLQUFTLEVBQUUsV0FBa0I7O1lBQ2xDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRS9CLE1BQU0sTUFBTSxHQUFTLEVBQUUsQ0FBQztZQUN4QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDakI7Ozs7Ozs7UUFDRCxPQUFPLENBQUksS0FBUyxFQUFFLEtBQWE7WUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2YsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUNWLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDakIsRUFDRCxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCOzs7Ozs7UUFDRCxPQUFPLENBQUksS0FBVztZQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDcEQ7S0FDSjtJQUVELE1BQU0sRUFBRTs7Ozs7OztRQUNKLE9BQU8sQ0FBQyxHQUFVLEVBQUUsTUFBYSxFQUFFLE9BQWM7O1lBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDbkI7WUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ1o7S0FDSjtJQUVELEdBQUcsRUFBRTs7Ozs7UUFDRCxxQkFBcUIsQ0FBQyxjQUFzQjs7WUFDeEMsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sY0FBYyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2hCO0tBQ0o7SUFFRCxNQUFNLEVBQUU7Ozs7Ozs7UUFDSixTQUFTLENBQU8sTUFBUSxFQUFFLElBQVk7WUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sb0JBQUMsTUFBYSxHQUFNO2FBQzdCOztZQUVELElBQUksUUFBUSxzQkFBRyxNQUFhLEdBQXFCO1lBRWpELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hFLFFBQVEsR0FBRyxvQkFBQyxRQUFlLEdBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7WUFFRCxNQUFNLG9CQUFDLFFBQWUsR0FBTTtTQUMvQjtLQUNKO0lBRUQsSUFBSSxFQUFFOzs7Ozs7UUFDRixLQUFLLENBQUMsQ0FBUSxFQUFFLENBQVE7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQzs7Ozs7O1FBQ0QsT0FBTyxDQUFDLENBQVEsRUFBRSxDQUFRO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7Ozs7OztRQUNELFNBQVMsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDOzs7Ozs7UUFDRCxHQUFHLENBQUMsQ0FBUSxFQUFFLENBQVE7O1lBQ2xCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ2Q7S0FDSjtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBLZXlib2FyZCBrZXljb2Rlcy5cbmV4cG9ydCBlbnVtIEtleUNvZGUge1xuICAgIExlZnQgPSAzNyxcbiAgICBVcCA9IDM4LFxuICAgIFJpZ2h0ID0gMzksXG4gICAgRG93biA9IDQwLFxuXG4gICAgRXNjYXBlID0gMjcsXG4gICAgRW50ZXIgPSAxMyxcblxuICAgIFNwYWNlID0gMzIsXG4gICAgQmFja3NwYWNlID0gOFxufVxuXG5pbnRlcmZhY2UgSVJlY3Vyc2l2ZU9iamVjdCB7IFtuYW1lOnN0cmluZ106SVJlY3Vyc2l2ZU9iamVjdDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVJlZkNvbnRleHQ8VD4geyAkaW1wbGljaXQ6VDsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElBdWdtZW50ZWRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gICAgY2xvc2VzdChzZWxlY3RvcjpzdHJpbmcpOklBdWdtZW50ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgSGFuZGxlZEV2ZW50IHtcbiAgICBwdWJsaWMgZXZlbnRIYW5kbGVkOmJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUR5bmFtaWNDbGFzc2VzIHtcbiAgICBbbmFtZTpzdHJpbmddOnRydWU7XG59XG5cbmV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgIEFycmF5OiB7XG4gICAgICAgIHJhbmdlKG46bnVtYmVyLCBvZmZzZXQ6bnVtYmVyID0gMCk6bnVtYmVyW10ge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoMCkubWFwKCh6LCBpKSA9PiBpICsgb2Zmc2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXA8VD4oaXRlbXM6VFtdLCBncm91cExlbmd0aDpudW1iZXIpOlRbXVtdIHtcbiAgICAgICAgICAgIGNvbnN0IG11dGFibGUgPSBpdGVtcy5zbGljZSgwKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzOlRbXVtdID0gW107XG4gICAgICAgICAgICB3aGlsZSAobXV0YWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnB1c2gobXV0YWJsZS5zcGxpY2UoMCwgZ3JvdXBMZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwQnk8VD4oaXRlbXM6VFtdLCBmaWVsZDprZXlvZiBUKTp7IFtuYW1lOnN0cmluZ106VFtdIH0ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZTx7IFtuYW1lOnN0cmluZ106VFtdIH0+KFxuICAgICAgICAgICAgICAgIChncm91cHMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGlbZmllbGRdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tmaWVsZFZhbHVlXSA9IGdyb3Vwc1tmaWVsZFZhbHVlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2ZpZWxkVmFsdWVdLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBPYmplY3QoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZsYXR0ZW48VD4oaXRlbXM6VFtdW10pOlRbXSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKChpcywgaSkgPT4gaXMuY29uY2F0KGkpLCBbXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgU3RyaW5nOiB7XG4gICAgICAgIHBhZExlZnQoc3RyOnN0cmluZywgbGVuZ3RoOm51bWJlciwgcGFkZGluZzpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cjtcbiAgICAgICAgICAgIHdoaWxlIChzLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMgPSBwYWRkaW5nICsgcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIERPTToge1xuICAgICAgICBwYXJzZUJvb2xlYW5BdHRyaWJ1dGUoYXR0cmlidXRlVmFsdWU6Ym9vbGVhbik6Ym9vbGVhbiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBPYmplY3Q6IHtcbiAgICAgICAgcmVhZFZhbHVlPFQsIFU+KG9iamVjdDpULCBwYXRoPzpzdHJpbmcpOlUge1xuICAgICAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdCBhcyBhbnkgYXMgVTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlY3Vyc2VkID0gb2JqZWN0IGFzIGFueSBhcyBJUmVjdXJzaXZlT2JqZWN0O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgcCA9IHBhdGguc3BsaXQoXCIuXCIpLCBsZW4gPSBwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzZWQgPSAocmVjdXJzZWQgYXMgYW55IGFzIElSZWN1cnNpdmVPYmplY3QpW3BbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzZWQgYXMgYW55IGFzIFU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgTWF0aDoge1xuICAgICAgICByb3VuZChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyIC8gbikgKiBuO1xuICAgICAgICB9LFxuICAgICAgICByb3VuZFVwKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwociAvIG4pICogbjtcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmREb3duKHI6bnVtYmVyLCBuOm51bWJlcik6bnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHIgLyBuKSAqIG47XG4gICAgICAgIH0sXG4gICAgICAgIG1vZChyOm51bWJlciwgbjpudW1iZXIpOm51bWJlciB7XG4gICAgICAgICAgICBjb25zdCByZW0gPSByICUgbjtcbiAgICAgICAgICAgIGlmIChyZW0gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbSArIG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVtO1xuICAgICAgICB9XG4gICAgfVxufTtcbiJdfQ==