"use strict";
var core_1 = require("@angular/core");
var transaction_service_1 = require("../../shared/transaction.service");
var ListComponent = (function () {
    function ListComponent(transactionService) {
        this.transactionService = transactionService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionService.getTransaction().subscribe(function (transactions) { return _this.transactions = transactions; });
    };
    ListComponent.prototype.onSubmit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.component.html",
        styleUrls: ["pages/list/list.css"],
        providers: [transaction_service_1.TransactionService]
    }),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHdFQUFzRTtBQVF0RSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzFELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxTQUFTLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztLQUNoQyxDQUFDO3FDQUl3Qyx3Q0FBa0I7R0FIL0MsYUFBYSxDQWF6QjtBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmFuc2FjdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zYWN0aW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0cmFuc2FjdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VHJhbnNhY3Rpb24oKS5zdWJzY3JpYmUodHJhbnNhY3Rpb25zID0+IHRoaXMudHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG5cclxuICB9XHJcbn0iXX0=