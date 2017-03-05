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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHdFQUFzRTtBQVF0RSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzFELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDbEMsU0FBUyxFQUFFLENBQUMsd0NBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FJd0Msd0NBQWtCO0dBSC9DLGFBQWEsQ0FVekI7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyYW5zYWN0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVHJhbnNhY3Rpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgcHVibGljIHRyYW5zYWN0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbigpLnN1YnNjcmliZSh0cmFuc2FjdGlvbnMgPT4gdGhpcy50cmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnMpO1xuICB9XG5cbn0iXX0=