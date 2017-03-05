import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as local from 'nativescript-local-notifications';

local.addOnMessageReceivedCallback(
  function(notificationData) {
    console.log(JSON.stringify(notificationData));
  }
);

setTimeout(function() {
  local.requestPermission().then(() => {
    local.schedule([{
      id: 0,
      title: 'New Transaction',
      body: 'Dash has detected a new business transaction'
    }]).then(() => {
      console.log("Notification scheduled");
    }, (error) => {
      console.log("ERROR", error);
    });
  })

}, 10000);

platformNativeScriptDynamic().bootstrapModule(AppModule);


