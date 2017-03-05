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
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBEQUE0RTtBQUM1RSwyQ0FBeUM7QUFDekMsd0RBQTBEO0FBRTFELEtBQUssQ0FBQyw0QkFBNEIsQ0FDaEMsVUFBUyxnQkFBZ0I7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQ0YsQ0FBQztBQUVGLFVBQVUsQ0FBQztJQUNULEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLDhDQUE4QzthQUNyRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFVixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbCBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9ucyc7XHJcblxyXG5sb2NhbC5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKFxyXG4gIGZ1bmN0aW9uKG5vdGlmaWNhdGlvbkRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbkRhdGEpKTtcclxuICB9XHJcbik7XHJcblxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gIGxvY2FsLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigoKSA9PiB7XHJcbiAgICBsb2NhbC5zY2hlZHVsZShbe1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdGl0bGU6ICdOZXcgVHJhbnNhY3Rpb24nLFxyXG4gICAgICBib2R5OiAnRGFzaCBoYXMgZGV0ZWN0ZWQgYSBuZXcgYnVzaW5lc3MgdHJhbnNhY3Rpb24nXHJcbiAgICB9XSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNjaGVkdWxlZFwiKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG59LCAxMDAwMCk7XHJcblxyXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuXHJcblxyXG4iXX0=