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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFPekMsSUFBYSxrQkFBa0I7SUFFN0IsNEJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRWxDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FHNEIsZUFBTTtHQUZ2QixrQkFBa0IsQ0FTOUI7QUFUWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkYXNoYm9hcmRcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICB9XHJcblxyXG4gIG9uRGV0YWlsc0NsaWNrKGV2ZW50KSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9saXN0J10pO1xyXG4gIH1cclxufSJdfQ==