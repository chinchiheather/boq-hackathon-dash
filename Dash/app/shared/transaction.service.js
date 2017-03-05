"use strict";
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TransactionService = (function () {
    function TransactionService() {
        this.TRANSACTION_MOCK = [
            {
                name: 'Wire',
                amount: '$3.99',
                tax: '$0.39'
            },
            {
                name: 'Wood',
                amount: '$1899',
                tax: '$189.90'
            },
            {
                name: 'Truck',
                amount: '$32,000',
                tax: '$3,200'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
            },
            {
                name: 'Clothing',
                amount: '$45',
                tax: '$4.50'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFPbEMsSUFBYSxrQkFBa0I7SUFEL0I7UUFFRSxxQkFBZ0IsR0FBRztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUUsT0FBTztnQkFDZixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLE9BQU87Z0JBQ2YsR0FBRyxFQUFFLFNBQVM7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixHQUFHLEVBQUUsUUFBUTthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtTQUNGLENBQUM7SUFNSixDQUFDO0lBSkMsMkNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUgseUJBQUM7QUFBRCxDQUFDLEFBN0ZELElBNkZDO0FBN0ZZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO0dBQ0Esa0JBQWtCLENBNkY5QjtBQTdGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnd3MnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCAqIGFzIER1cGxleEVtaXR0ZXIgZnJvbSAnZHVwbGV4LWVtaXR0ZXInOyBcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIHtcbiAgVFJBTlNBQ1RJT05fTU9DSyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnV2lyZScsXG4gICAgICBhbW91bnQ6ICckMy45OScsXG4gICAgICB0YXg6ICckMC4zOSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb29kJyxcbiAgICAgIGFtb3VudDogJyQxODk5JyxcbiAgICAgIHRheDogJyQxODkuOTAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVHJ1Y2snLFxuICAgICAgYW1vdW50OiAnJDMyLDAwMCcsXG4gICAgICB0YXg6ICckMywyMDAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxuICAgICAgYW1vdW50OiAnJDQ1JyxcbiAgICAgIHRheDogJyQ0LjUwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcbiAgICAgIGFtb3VudDogJyQ0NScsXG4gICAgICB0YXg6ICckNC41MCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXG4gICAgICBhbW91bnQ6ICckNDUnLFxuICAgICAgdGF4OiAnJDQuNTAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxuICAgICAgYW1vdW50OiAnJDQ1JyxcbiAgICAgIHRheDogJyQ0LjUwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcbiAgICAgIGFtb3VudDogJyQ0NScsXG4gICAgICB0YXg6ICckNC41MCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXG4gICAgICBhbW91bnQ6ICckNDUnLFxuICAgICAgdGF4OiAnJDQuNTAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxuICAgICAgYW1vdW50OiAnJDQ1JyxcbiAgICAgIHRheDogJyQ0LjUwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcbiAgICAgIGFtb3VudDogJyQ0NScsXG4gICAgICB0YXg6ICckNC41MCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXG4gICAgICBhbW91bnQ6ICckNDUnLFxuICAgICAgdGF4OiAnJDQuNTAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxuICAgICAgYW1vdW50OiAnJDQ1JyxcbiAgICAgIHRheDogJyQ0LjUwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcbiAgICAgIGFtb3VudDogJyQ0NScsXG4gICAgICB0YXg6ICckNC41MCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXG4gICAgICBhbW91bnQ6ICckNDUnLFxuICAgICAgdGF4OiAnJDQuNTAnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxuICAgICAgYW1vdW50OiAnJDQ1JyxcbiAgICAgIHRheDogJyQ0LjUwJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcbiAgICAgIGFtb3VudDogJyQ0NScsXG4gICAgICB0YXg6ICckNC41MCdcbiAgICB9XG4gIF07XG5cbiAgZ2V0VHJhbnNhY3Rpb24oKSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy5UUkFOU0FDVElPTl9NT0NLKTtcbiAgfVxuXG59Il19