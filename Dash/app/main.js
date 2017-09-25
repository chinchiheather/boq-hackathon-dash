"use strict";
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var local = require("nativescript-local-notifications");
local.addOnMessageReceivedCallback(function (notificationData) {
    console.log(JSON.stringify(notificationData));
});
setTimeout(function () {
    local.requestPermission().then(function () {
        local.schedule([{
                id: 0,
                title: 'New Transaction',
                body: 'Dash has detected a new business transaction'
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("ERROR", error);
        });
    });
}, 10000);
platform_1.platformNativeScriptDynamic({ startPageActionBarHidden: true }).bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBEQUE0RTtBQUM1RSwyQ0FBeUM7QUFDekMsd0RBQTBEO0FBRTFELEtBQUssQ0FBQyw0QkFBNEIsQ0FDaEMsVUFBUyxnQkFBZ0I7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQ0YsQ0FBQztBQUVGLFVBQVUsQ0FBQztJQUNULEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLDhDQUE4QzthQUNyRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFVixzQ0FBMkIsQ0FBQyxFQUFDLHdCQUF3QixFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zJztcclxuXHJcbmxvY2FsLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soXHJcbiAgZnVuY3Rpb24obm90aWZpY2F0aW9uRGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uRGF0YSkpO1xyXG4gIH1cclxuKTtcclxuXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgbG9jYWwucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKCgpID0+IHtcclxuICAgIGxvY2FsLnNjaGVkdWxlKFt7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICB0aXRsZTogJ05ldyBUcmFuc2FjdGlvbicsXHJcbiAgICAgIGJvZHk6ICdEYXNoIGhhcyBkZXRlY3RlZCBhIG5ldyBidXNpbmVzcyB0cmFuc2FjdGlvbidcclxuICAgIH1dKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSlcclxuXHJcbn0sIDEwMDAwKTtcclxuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyh7c3RhcnRQYWdlQWN0aW9uQmFySGlkZGVuOiB0cnVlfSkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxyXG5cclxuIl19