/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiPopupModule } from "../popup/internal";
import { SuiLocalizationModule } from "../../behaviors/localization/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiCalendarViewTitle } from "./components/calendar-view-title";
import { SuiCalendarYearView } from "./views/year-view";
import { SuiCalendarMonthView } from "./views/month-view";
import { SuiCalendarItem } from "./directives/calendar-item";
import { SuiCalendarDateView } from "./views/date-view";
import { SuiDatepicker } from "./components/datepicker";
import { SuiCalendarHourView } from "./views/hour-view";
import { SuiCalendarMinuteView } from "./views/minute-view";
import { SuiDatepickerInputDirective } from "./directives/input.directive";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValueAccessor, SuiDatepickerDirectiveValidator } from "./directives/datepicker.directive";
var SuiDatepickerModule = /** @class */ (function () {
    function SuiDatepickerModule() {
    }
    SuiDatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        SuiPopupModule,
                        SuiLocalizationModule,
                        SuiUtilityModule
                    ],
                    declarations: [
                        SuiCalendarItem,
                        SuiCalendarViewTitle,
                        SuiCalendarYearView,
                        SuiCalendarMonthView,
                        SuiCalendarDateView,
                        SuiCalendarHourView,
                        SuiCalendarMinuteView,
                        SuiDatepicker,
                        SuiDatepickerDirective,
                        SuiDatepickerDirectiveValueAccessor,
                        SuiDatepickerDirectiveValidator,
                        SuiDatepickerInputDirective
                    ],
                    exports: [
                        SuiDatepickerDirective,
                        SuiDatepickerDirectiveValueAccessor,
                        SuiDatepickerDirectiveValidator,
                        SuiDatepickerInputDirective
                    ],
                    entryComponents: [
                        SuiDatepicker
                    ]
                },] },
    ];
    return SuiDatepickerModule;
}());
export { SuiDatepickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRSxPQUFPLEVBQ0gsc0JBQXNCLEVBQUUsbUNBQW1DLEVBQzNELCtCQUErQixFQUNsQyxNQUFNLG1DQUFtQyxDQUFDOzs7OztnQkFFMUMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGdCQUFnQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLGVBQWU7d0JBRWYsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFFckIsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3dCQUMvQiwyQkFBMkI7cUJBQzlCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxzQkFBc0I7d0JBQ3RCLG1DQUFtQzt3QkFDbkMsK0JBQStCO3dCQUMvQiwyQkFBMkI7cUJBQzlCO29CQUNELGVBQWUsRUFBRTt3QkFDYixhQUFhO3FCQUNoQjtpQkFDSjs7OEJBckREOztTQXNEYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpUG9wdXBNb2R1bGUgfSBmcm9tIFwiLi4vcG9wdXAvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJWaWV3VGl0bGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGVcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyWWVhclZpZXcgfSBmcm9tIFwiLi92aWV3cy95ZWFyLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyTW9udGhWaWV3IH0gZnJvbSBcIi4vdmlld3MvbW9udGgtdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhckRhdGVWaWV3IH0gZnJvbSBcIi4vdmlld3MvZGF0ZS12aWV3XCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhckhvdXJWaWV3IH0gZnJvbSBcIi4vdmlld3MvaG91ci12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhck1pbnV0ZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9taW51dGUtdmlld1wiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9pbnB1dC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7XG4gICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvclxufSBmcm9tIFwiLi9kaXJlY3RpdmVzL2RhdGVwaWNrZXIuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlQb3B1cE1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpQ2FsZW5kYXJJdGVtLFxuXG4gICAgICAgIFN1aUNhbGVuZGFyVmlld1RpdGxlLFxuICAgICAgICBTdWlDYWxlbmRhclllYXJWaWV3LFxuICAgICAgICBTdWlDYWxlbmRhck1vbnRoVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJEYXRlVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJIb3VyVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJNaW51dGVWaWV3LFxuXG4gICAgICAgIFN1aURhdGVwaWNrZXIsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yLFxuICAgICAgICBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3IsXG4gICAgICAgIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aURhdGVwaWNrZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJNb2R1bGUge31cbiJdfQ==