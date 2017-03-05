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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFHbEMsSUFBYSxrQkFBa0I7SUFEL0I7UUFFRSxxQkFBZ0IsR0FBRztZQUNqQjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUUsT0FBTztnQkFDZixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLE9BQU87Z0JBQ2YsR0FBRyxFQUFFLFNBQVM7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixHQUFHLEVBQUUsUUFBUTthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE9BQU87YUFDYjtTQUNGLENBQUM7SUFLSixDQUFDO0lBSEMsMkNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBNUZELElBNEZDO0FBNUZZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO0dBQ0Esa0JBQWtCLENBNEY5QjtBQTVGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblNlcnZpY2Uge1xyXG4gIFRSQU5TQUNUSU9OX01PQ0sgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXaXJlJyxcclxuICAgICAgYW1vdW50OiAnJDMuOTknLFxyXG4gICAgICB0YXg6ICckMC4zOSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXb29kJyxcclxuICAgICAgYW1vdW50OiAnJDE4OTknLFxyXG4gICAgICB0YXg6ICckMTg5LjkwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1RydWNrJyxcclxuICAgICAgYW1vdW50OiAnJDMyLDAwMCcsXHJcbiAgICAgIHRheDogJyQzLDIwMCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXHJcbiAgICAgIGFtb3VudDogJyQ0NScsXHJcbiAgICAgIHRheDogJyQ0LjUwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcclxuICAgICAgYW1vdW50OiAnJDQ1JyxcclxuICAgICAgdGF4OiAnJDQuNTAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxyXG4gICAgICBhbW91bnQ6ICckNDUnLFxyXG4gICAgICB0YXg6ICckNC41MCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXHJcbiAgICAgIGFtb3VudDogJyQ0NScsXHJcbiAgICAgIHRheDogJyQ0LjUwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcclxuICAgICAgYW1vdW50OiAnJDQ1JyxcclxuICAgICAgdGF4OiAnJDQuNTAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxyXG4gICAgICBhbW91bnQ6ICckNDUnLFxyXG4gICAgICB0YXg6ICckNC41MCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXHJcbiAgICAgIGFtb3VudDogJyQ0NScsXHJcbiAgICAgIHRheDogJyQ0LjUwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcclxuICAgICAgYW1vdW50OiAnJDQ1JyxcclxuICAgICAgdGF4OiAnJDQuNTAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxyXG4gICAgICBhbW91bnQ6ICckNDUnLFxyXG4gICAgICB0YXg6ICckNC41MCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXHJcbiAgICAgIGFtb3VudDogJyQ0NScsXHJcbiAgICAgIHRheDogJyQ0LjUwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcclxuICAgICAgYW1vdW50OiAnJDQ1JyxcclxuICAgICAgdGF4OiAnJDQuNTAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ2xvdGhpbmcnLFxyXG4gICAgICBhbW91bnQ6ICckNDUnLFxyXG4gICAgICB0YXg6ICckNC41MCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDbG90aGluZycsXHJcbiAgICAgIGFtb3VudDogJyQ0NScsXHJcbiAgICAgIHRheDogJyQ0LjUwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0Nsb3RoaW5nJyxcclxuICAgICAgYW1vdW50OiAnJDQ1JyxcclxuICAgICAgdGF4OiAnJDQuNTAnXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgZ2V0VHJhbnNhY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLlRSQU5TQUNUSU9OX01PQ0spO1xyXG4gIH1cclxufSJdfQ==