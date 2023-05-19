// Account SID: AC6cfeff2ec508c30ad811ce47b234c324
// Auth Token: ebd3989f0c411febdf6917c772075842
const accountSid = "AC6cfeff2ec508c30ad811ce47b234c324";
const authToken = "ebd3989f0c411febdf6917c772075842";
const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        body: "Hi, this is a test SMS from Twilio!",
        messagingServiceSid: "MGc971a910590b8b446fff36dfc0c78018",
        to: "+17755738936",
    })
    .then((message) => console.log(message))
    .done();
