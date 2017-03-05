"use strict";
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TransactionService = (function () {
    function TransactionService() {
        this.TRANSACTION_MOCK = [
            {
                name: 'Bunnings',
                description: 'Woodhouse 88 x 88mm 2.4m H3 Pink Primed Timber Posts x4',
                amount: '$208.72',
                date: '04/03/17'
            },
            {
                name: 'Bunnings',
                description: 'Woodhouse 66 x 18mm 5.4m Pine Moulding Fj Half Splayed Primed x8',
                amount: '$138.24',
                date: '04/03/17'
            },
            {
                name: 'Mitre 10',
                description: 'Dewalt 18V SDS+ Li-Ion Rotary Hammer',
                amount: '$76.99',
                date: '04/03/17'
            }
        ];
    }
    TransactionService.prototype.getTransaction = function () {
        return rxjs_1.Observable.of(this.TRANSACTION_MOCK);
    };
    return TransactionService;
}());
TransactionService = __decorate([
    core_1.Injectable()
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFHbEMsSUFBYSxrQkFBa0I7SUFEL0I7UUFFRSxxQkFBZ0IsR0FBRztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLHlEQUF5RDtnQkFDdEUsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSxrRUFBa0U7Z0JBQy9FLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixJQUFJLEVBQUUsVUFBVTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsSUFBSSxFQUFFLFVBQVU7YUFDakI7U0FDRixDQUFDO0lBS0osQ0FBQztJQUhDLDJDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsaUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtHQUNBLGtCQUFrQixDQXlCOUI7QUF6QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIHtcclxuICBUUkFOU0FDVElPTl9NT0NLID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQnVubmluZ3MnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1dvb2Rob3VzZSA4OCB4IDg4bW0gMi40bSBIMyBQaW5rIFByaW1lZCBUaW1iZXIgUG9zdHMgeDQnLFxyXG4gICAgICBhbW91bnQ6ICckMjA4LjcyJyxcclxuICAgICAgZGF0ZTogJzA0LzAzLzE3J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0J1bm5pbmdzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdXb29kaG91c2UgNjYgeCAxOG1tIDUuNG0gUGluZSBNb3VsZGluZyBGaiBIYWxmIFNwbGF5ZWQgUHJpbWVkIHg4JyxcclxuICAgICAgYW1vdW50OiAnJDEzOC4yNCcsXHJcbiAgICAgIGRhdGU6ICcwNC8wMy8xNydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdNaXRyZSAxMCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV3YWx0IDE4ViBTRFMrIExpLUlvbiBSb3RhcnkgSGFtbWVyJyxcclxuICAgICAgYW1vdW50OiAnJDc2Ljk5JyxcclxuICAgICAgZGF0ZTogJzA0LzAzLzE3J1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGdldFRyYW5zYWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy5UUkFOU0FDVElPTl9NT0NLKTtcclxuICB9XHJcbn0iXX0=