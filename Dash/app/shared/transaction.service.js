"use strict";
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
//import { Client } from 'ws';
//import { EventEmitter } from 'events';
//import * as DuplexEmitter from 'duplex-emitter';
//
//import * as _ from 'underscore';
// var Client = require('../../server/client.js');
// import { Client } from 'server/client';
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
                date: '04/03/16'
            }
        ];
        // public Client = Client;
        // constructor(){
        //   console.log("STUFF!",Client);
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFDbEMsOEJBQThCO0FBQzlCLHdDQUF3QztBQUN4QyxrREFBa0Q7QUFDbEQsRUFBRTtBQUNGLGtDQUFrQztBQUNsQyxrREFBa0Q7QUFFbEQsMENBQTBDO0FBRzFDLElBQWEsa0JBQWtCO0lBRC9CO1FBRUUscUJBQWdCLEdBQUc7WUFDakI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSx5REFBeUQ7Z0JBQ3RFLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixJQUFJLEVBQUUsVUFBVTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsa0VBQWtFO2dCQUMvRSxNQUFNLEVBQUUsU0FBUztnQkFDakIsSUFBSSxFQUFFLFVBQVU7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLElBQUksRUFBRSxVQUFVO2FBQ2pCO1NBQ0YsQ0FBQztRQUtGLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsa0NBQWtDO1FBQ2xDLElBQUk7SUFDTixDQUFDO0lBUEMsMkNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBS0gseUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO0dBQ0Esa0JBQWtCLENBNkI5QjtBQTdCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbi8vaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnd3MnO1xyXG4vL2ltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XHJcbi8vaW1wb3J0ICogYXMgRHVwbGV4RW1pdHRlciBmcm9tICdkdXBsZXgtZW1pdHRlcic7XHJcbi8vXHJcbi8vaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuLy8gdmFyIENsaWVudCA9IHJlcXVpcmUoJy4uLy4uL3NlcnZlci9jbGllbnQuanMnKTtcclxuXHJcbi8vIGltcG9ydCB7IENsaWVudCB9IGZyb20gJ3NlcnZlci9jbGllbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIHtcclxuICBUUkFOU0FDVElPTl9NT0NLID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQnVubmluZ3MnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1dvb2Rob3VzZSA4OCB4IDg4bW0gMi40bSBIMyBQaW5rIFByaW1lZCBUaW1iZXIgUG9zdHMgeDQnLFxyXG4gICAgICBhbW91bnQ6ICckMjA4LjcyJyxcclxuICAgICAgZGF0ZTogJzA0LzAzLzE3J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0J1bm5pbmdzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdXb29kaG91c2UgNjYgeCAxOG1tIDUuNG0gUGluZSBNb3VsZGluZyBGaiBIYWxmIFNwbGF5ZWQgUHJpbWVkIHg4JyxcclxuICAgICAgYW1vdW50OiAnJDEzOC4yNCcsXHJcbiAgICAgIGRhdGU6ICcwNC8wMy8xNydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdNaXRyZSAxMCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV3YWx0IDE4ViBTRFMrIExpLUlvbiBSb3RhcnkgSGFtbWVyJyxcclxuICAgICAgYW1vdW50OiAnJDc2Ljk5JyxcclxuICAgICAgZGF0ZTogJzA0LzAzLzE2J1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGdldFRyYW5zYWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy5UUkFOU0FDVElPTl9NT0NLKTtcclxuICB9XHJcbiAgLy8gcHVibGljIENsaWVudCA9IENsaWVudDtcclxuICAvLyBjb25zdHJ1Y3Rvcigpe1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJTVFVGRiFcIixDbGllbnQpO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=