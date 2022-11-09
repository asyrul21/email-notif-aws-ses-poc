const AWS = require("aws-sdk");
const SES = new AWS.SES({ apiVersion: "2010-12-01" });

const sampleSourceEmail = process.env.sample_source_email_verified;
const sampleDestinationEmail = process.env.sample_email_verified;
const sampleNonVerifiedEmail = process.env.sample_email_not_verified;

module.exports = {
  sendEmail: function () {
    console.log("Sending email!");
    // Create sendEmail params
    var params = {
      Source: sampleSourceEmail,
      Destination: {
        ToAddresses: [sampleDestinationEmail],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: "<html><body><h1>Test Email!</h1><p>This is just a test email</p></body></html>",
          },
          Text: {
            Charset: "UTF-8",
            Data: "Just a text",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "This is a test email",
        },
      },
    };
    const SendEmailPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();
    SendEmailPromise.then(function (data) {
      console.log("Resolved Data:");
      console.log(data.MessageId);
    }).catch(function (err) {
      console.log("Rejected Data:");
      console.error(err, err.stack);
    });
  },
  sendEmailWithTemplate: function () {
    console.log("Sending Email using a Template!");
  },
};
