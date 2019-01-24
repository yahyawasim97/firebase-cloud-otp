const twilio= require('twilio');
const accountSid='AC22f923f807de96d38cdb6c442f74f4ba';
const authToken = '562e94ab908b796c15ad88dc99cc48a8';

module.exports = new twilio.Twilio(accountSid,authToken);