"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.onDetailsClick = function (event) {
        this.router.navigate(['/list']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: "dashboard",
        templateUrl: "pages/dashboard/dashboard.component.html",
        styleUrls: ["pages/dashboard/dashboard.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFPekMsSUFBYSxrQkFBa0I7SUFFN0IsNEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRWxDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FHNEIsZUFBTTtHQUZ2QixrQkFBa0IsQ0FTOUI7QUFUWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGFzaGJvYXJkXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgb25EZXRhaWxzQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9saXN0J10pO1xuICB9XG59Il19