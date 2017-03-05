"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var frame_1 = require("ui/frame");
var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        console.log('hiding page');
        this.page.actionBarHidden = true;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFFekMsa0NBQW1DO0FBT25DLElBQWEsa0JBQWtCO0lBRzdCLDRCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQVMsZUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FJNEIsZUFBTTtHQUh2QixrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRhc2hib2FyZFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gIHBhZ2U6IFBhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZSA9IDxQYWdlPnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgIGNvbnNvbGUubG9nKCdoaWRpbmcgcGFnZScpO1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkRldGFpbHNDbGljayhldmVudCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGlzdCddKTtcclxuICB9XHJcbn0iXX0=