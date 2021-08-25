const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'this is a test this is a test',
         messagingServiceSid: 'MG2c7c90f5bbb2eba4c7bfcfde64d81397',
         from: '+18507903280',
         to: '+16478883256' //restaurant number
       })
      .then(message => console.log(message.sid))
      .done();
