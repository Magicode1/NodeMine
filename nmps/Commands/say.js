var events = require("../Events/EventEmitter.js");
var chat = require("../Chat/Chat.js");

events.on("COMMAND", function(command, args){
  if(command == "say") {
    var message = "";
    for(i in args) {
      message = message + args[i];
    }
    events.emit("SEND_MESSAGE", "[CONSOLE]", message);
  }
});
