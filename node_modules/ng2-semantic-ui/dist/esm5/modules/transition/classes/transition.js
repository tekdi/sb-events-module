/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var TransitionDirection = {
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
var Transition = /** @class */ (function () {
    function Transition(name, duration, direction, onComplete) {
        if (duration === void 0) { duration = 250; }
        if (direction === void 0) { direction = TransitionDirection.Either; }
        if (onComplete === void 0) { onComplete = function () { }; }
        this.type = name;
        // We set a minimum duration of 1ms, to give the appearance of an immediate transition
        // whilst allowing positioning calculations to happen without a visible flicker.
        this.duration = Math.max(duration, 1);
        this.direction = direction;
        this.classes = this.type.split(" ");
        this.onComplete = onComplete;
    }
    Object.defineProperty(Transition.prototype, "directionClass", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.direction) {
                case TransitionDirection.In: return "in";
                case TransitionDirection.Out: return "out";
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    return Transition;
}());
export { Transition };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJhbnNpdGlvbi9jbGFzc2VzL3RyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRUksS0FBRTtJQUNGLE1BQUc7SUFDSCxTQUFNO0lBQ04sU0FBTTs7O3dDQUhOLEVBQUU7d0NBQ0YsR0FBRzt3Q0FDSCxNQUFNO3dDQUNOLE1BQU07QUFHVixJQUFBO0lBc0JJLG9CQUFZLElBQVcsRUFDWCxRQUFxQixFQUNyQixTQUEwRCxFQUMxRCxVQUFrQztRQUZsQyx5QkFBQSxFQUFBLGNBQXFCO1FBQ3JCLDBCQUFBLEVBQUEsWUFBZ0MsbUJBQW1CLENBQUMsTUFBTTtRQUMxRCwyQkFBQSxFQUFBLDRCQUFrQztRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7O1FBSWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUNoQzswQkE1QlUsc0NBQWM7Ozs7O1lBQ3JCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixLQUFLLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxLQUFLLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQzlDO1lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7Ozs7cUJBdEJsQjtJQTZDQyxDQUFBO0FBckNELHNCQXFDQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvc3NpYmxlIGRpcmVjdGlvbnMgZm9yIGEgdHJhbnNpdGlvbi5cbmV4cG9ydCBlbnVtIFRyYW5zaXRpb25EaXJlY3Rpb24ge1xuICAgIEluLFxuICAgIE91dCxcbiAgICBFaXRoZXIsXG4gICAgU3RhdGljXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTpzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZHVyYXRpb246bnVtYmVyO1xuXG4gICAgcHVibGljIGRpcmVjdGlvbjpUcmFuc2l0aW9uRGlyZWN0aW9uO1xuXG4gICAgLy8gQ29udmVydHMgVHJhbnNpdGlvbkRpcmVjdGlvbiB0byBjbGFzcyBuYW1lLlxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uQ2xhc3MoKTpzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaXRpb25EaXJlY3Rpb24uSW46IHJldHVybiBcImluXCI7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0OiByZXR1cm4gXCJvdXRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgaW5kaXZpZHVhbCBjbGFzc2VzIGZvciB0aGUgdHJhbnNpdGlvbiwgZS5nLiBcImZhZGUgb3V0XCIgLT4gW1wiZmFkZVwiLCBcIm91dFwiXS5cbiAgICBwdWJsaWMgcmVhZG9ubHkgY2xhc3NlczpzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBvbkNvbXBsZXRlOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjpudW1iZXIgPSAyNTAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOlRyYW5zaXRpb25EaXJlY3Rpb24gPSBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOigoKSA9PiB2b2lkKSA9ICgpID0+IHt9KSB7XG5cbiAgICAgICAgdGhpcy50eXBlID0gbmFtZTtcblxuICAgICAgICAvLyBXZSBzZXQgYSBtaW5pbXVtIGR1cmF0aW9uIG9mIDFtcywgdG8gZ2l2ZSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBpbW1lZGlhdGUgdHJhbnNpdGlvblxuICAgICAgICAvLyB3aGlsc3QgYWxsb3dpbmcgcG9zaXRpb25pbmcgY2FsY3VsYXRpb25zIHRvIGhhcHBlbiB3aXRob3V0IGEgdmlzaWJsZSBmbGlja2VyLlxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIDEpO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnR5cGUuc3BsaXQoXCIgXCIpO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xuICAgIH1cbn1cbiJdfQ==