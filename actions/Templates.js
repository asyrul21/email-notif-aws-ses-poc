const AWS = require("aws-sdk");

module.exports = {
  listAll: function () {
    var TemplatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .listTemplates({ MaxItems: 10 })
      .promise();

    // Handle promise's fulfilled/rejected states
    TemplatePromise.then(function (data) {
      console.log("Resolved Data:");
      console.log(data);
    }).catch(function (err) {
      console.log("Rejected Data:");
      console.error(err);
    });
  },
  get: function () {
    var TemplatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .getTemplate({ TemplateName: "TEST_TEMPLATE_NAME_2" })
      .promise();

    TemplatePromise.then(function (data) {
      console.log("Resolved Data:");
      console.log(data.Template);
    }).catch(function (err) {
      console.log("Rejected Data:");
      console.error(err);
    });
  },
  create: function () {
    var params = {
      Template: {
        TemplateName: "TEST_TEMPLATE_NAME_2" /* required */,
        HtmlPart:
          "<html><body><h1>Test Email from Test Template!</h1><p>This is just a test email generated from test template</p></body></html>",
        SubjectPart: "Test Email Template Subject",
        TextPart: "Test Email Template text 2",
      },
    };

    // Create the promise and SES service object
    var TemplatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .createTemplate(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    TemplatePromise.then(function (data) {
      console.log("Resolved Data:");
      console.log(data);
    }).catch(function (err) {
      console.log("Rejected Data:");
      console.error(err);
    });
  },
  update: function () {
    var params = {
      Template: {
        TemplateName: "TEST_TEMPLATE_NAME_2" /* required */,
        HtmlPart:
          "<html><body><h1>Test Email from Test Template Updated!</h1><p>This is just a test email generated from test template which has been updated</p></body></html>",
        SubjectPart: "Test Email Template Subject Updated",
        TextPart: "TEXT_CONTENT",
      },
    };

    // Create the promise and SES service object
    var TemplatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .updateTemplate(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    TemplatePromise.then(function (data) {
      console.log("Resolved Data:");
      console.log(data);
    }).catch(function (err) {
      console.log("Rejected Data:");
      console.error(err);
    });
  },
  delete: function () {},
};
