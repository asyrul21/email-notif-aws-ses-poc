const dotenv = require("dotenv");
dotenv.config();
const aws_ses_config = require("./config/aws-ses");
aws_ses_config();
// actions
const IdentityActions = require("./actions/Identities");
const TemplaceActions = require("./actions/Templates");
const SendEmailActions = require("./actions/SendingEmail");

console.log("Hello World!");

// execute actions
SendEmailActions.sendEmail();
