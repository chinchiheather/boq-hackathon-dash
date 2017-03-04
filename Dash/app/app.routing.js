"use strict";
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    dashboard_component_1.DashboardComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCw2RUFBMkU7QUFFOUQsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0NBQ3JELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYix3Q0FBa0I7Q0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gIExvZ2luQ29tcG9uZW50LFxyXG4gIExpc3RDb21wb25lbnQsXHJcbiAgRGFzaGJvYXJkQ29tcG9uZW50XHJcbl07Il19