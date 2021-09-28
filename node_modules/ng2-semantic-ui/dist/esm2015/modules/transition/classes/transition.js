/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const TransitionDirection = {
    In: 0,
    Out: 1,
    Either: 2,
    Static: 3,
};
export { TransitionDirection };
TransitionDirection[TransitionDirection.In] = 'In';
TransitionDirection[TransitionDirection.Out] = 'Out';
TransitionDirection[TransitionDirection.Either] = 'Either';
TransitionDirection[TransitionDirection.Static] = 'Static';
export class Transition {
    /**
     * @return {?}
     */
    get directionClass() {
        switch (this.direction) {
            case TransitionDirection.In: return "in";
            case TransitionDirection.Out: return "out";
        }
        return "";
    }
    /**
     * @param {?} name
     * @param {?=} duration
     * @param {?=} direction
     * @param {?=} onComplete
     */
    constructor(name, duration = 250, direction = TransitionDirection.Either, onComplete = () => { }) {
        this.type = name;
        // We set a minimum duration of 1ms, to give the appearance of an immediate transition
        // whilst allowing positioning calculations to happen without a visible flicker.
        this.duration = Math.max(duration, 1);
        this.direction = direction;
        this.classes = this.type.split(" ");
        this.onComplete = onComplete;
    }
}
if (false) {
    /** @type {?} */
    Transition.prototype.type;
    /** @type {?} */
    Transition.prototype.duration;
    /** @type {?} */
    Transition.prototype.direction;
    /** @type {?} */
    Transition.prototype.classes;
    /** @type {?} */
    Transition.prototype.onComplete;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRUksS0FBRTtJQUNGLE1BQUc7SUFDSCxTQUFNO0lBQ04sU0FBTTs7O3dDQUhOLEVBQUU7d0NBQ0YsR0FBRzt3Q0FDSCxNQUFNO3dDQUNOLE1BQU07QUFHVixNQUFNOzs7O1FBUVMsY0FBYztRQUNyQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEtBQUssbUJBQW1CLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDOUM7UUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDOzs7Ozs7OztJQVFkLFlBQVksSUFBVyxFQUNYLFdBQWtCLEdBQUcsRUFDckIsWUFBZ0MsbUJBQW1CLENBQUMsTUFBTSxFQUMxRCxhQUEwQixHQUFHLEVBQUUsSUFBRztRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7O1FBSWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUNoQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9zc2libGUgZGlyZWN0aW9ucyBmb3IgYSB0cmFuc2l0aW9uLlxuZXhwb3J0IGVudW0gVHJhbnNpdGlvbkRpcmVjdGlvbiB7XG4gICAgSW4sXG4gICAgT3V0LFxuICAgIEVpdGhlcixcbiAgICBTdGF0aWNcbn1cblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOnN0cmluZztcblxuICAgIHB1YmxpYyByZWFkb25seSBkdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgZGlyZWN0aW9uOlRyYW5zaXRpb25EaXJlY3Rpb247XG5cbiAgICAvLyBDb252ZXJ0cyBUcmFuc2l0aW9uRGlyZWN0aW9uIHRvIGNsYXNzIG5hbWUuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb25DbGFzcygpOnN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVHJhbnNpdGlvbkRpcmVjdGlvbi5JbjogcmV0dXJuIFwiaW5cIjtcbiAgICAgICAgICAgIGNhc2UgVHJhbnNpdGlvbkRpcmVjdGlvbi5PdXQ6IHJldHVybiBcIm91dFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBpbmRpdmlkdWFsIGNsYXNzZXMgZm9yIHRoZSB0cmFuc2l0aW9uLCBlLmcuIFwiZmFkZSBvdXRcIiAtPiBbXCJmYWRlXCIsIFwib3V0XCJdLlxuICAgIHB1YmxpYyByZWFkb25seSBjbGFzc2VzOnN0cmluZ1tdO1xuXG4gICAgcHVibGljIG9uQ29tcGxldGU6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOm51bWJlciA9IDI1MCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246VHJhbnNpdGlvbkRpcmVjdGlvbiA9IFRyYW5zaXRpb25EaXJlY3Rpb24uRWl0aGVyLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6KCgpID0+IHZvaWQpID0gKCkgPT4ge30pIHtcblxuICAgICAgICB0aGlzLnR5cGUgPSBuYW1lO1xuXG4gICAgICAgIC8vIFdlIHNldCBhIG1pbmltdW0gZHVyYXRpb24gb2YgMW1zLCB0byBnaXZlIHRoZSBhcHBlYXJhbmNlIG9mIGFuIGltbWVkaWF0ZSB0cmFuc2l0aW9uXG4gICAgICAgIC8vIHdoaWxzdCBhbGxvd2luZyBwb3NpdGlvbmluZyBjYWxjdWxhdGlvbnMgdG8gaGFwcGVuIHdpdGhvdXQgYSB2aXNpYmxlIGZsaWNrZXIuXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgMSk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMudHlwZS5zcGxpdChcIiBcIik7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XG4gICAgfVxufVxuIl19