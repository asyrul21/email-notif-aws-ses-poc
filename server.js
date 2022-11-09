const dotenv = require("dotenv");
dotenv.config();
const aws_ses_config = require("./config/aws-ses");
// actions
const IdentityActions = require("./actions/Identities");
const TemplaceActions = require("./actions/Templates");
const SendEmailActions = require("./actions/SendingEmail");

console.log("Hello World!");
aws_ses_config();

// execute actions
SendEmailActions.sendEmail();
