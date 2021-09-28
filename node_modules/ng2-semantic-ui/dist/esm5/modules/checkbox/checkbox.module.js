/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiCheckbox, SuiCheckboxValueAccessor } from "./components/checkbox";
import { SuiRadio, SuiRadioValueAccessor } from "./components/radio";
import { SuiRadioManager } from "./directives/radio-manager";
var SuiCheckboxModule = /** @class */ (function () {
    function SuiCheckboxModule() {
    }
    SuiCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [
                        SuiCheckbox,
                        SuiCheckboxValueAccessor,
                        SuiRadio,
                        SuiRadioValueAccessor,
                        SuiRadioManager
                    ],
                    exports: [
                        SuiCheckbox,
                        SuiCheckboxValueAccessor,
                        SuiRadio,
                        SuiRadioValueAccessor,
                        SuiRadioManager
                    ]
                },] },
    ];
    return SuiCheckboxModule;
}());
export { SuiCheckboxModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Z0JBRTVELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3FCQUNkO29CQUNELFlBQVksRUFBRTt3QkFDVixXQUFXO3dCQUNYLHdCQUF3Qjt3QkFDeEIsUUFBUTt3QkFDUixxQkFBcUI7d0JBQ3JCLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxXQUFXO3dCQUNYLHdCQUF3Qjt3QkFDeEIsUUFBUTt3QkFDUixxQkFBcUI7d0JBQ3JCLGVBQWU7cUJBQ2xCO2lCQUNKOzs0QkExQkQ7O1NBMkJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlDaGVja2JveCwgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaGVja2JveFwiO1xuaW1wb3J0IHsgU3VpUmFkaW8sIFN1aVJhZGlvVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1aVJhZGlvTWFuYWdlciB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvcmFkaW8tbWFuYWdlclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNoZWNrYm94LFxuICAgICAgICBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aVJhZGlvLFxuICAgICAgICBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aVJhZGlvTWFuYWdlclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94TW9kdWxlIHt9XG4iXX0=