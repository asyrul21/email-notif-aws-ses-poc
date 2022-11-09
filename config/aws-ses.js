const AWS = require("aws-sdk");

module.exports = function () {
  console.log("SES CONFIG!");
  // configure aws sdk
  const configObj = {
    accessKeyId: process.env.AWS_USER_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  };
  //   console.log("Config object:");
  //   console.log(configObj);
  AWS.config.update(configObj);
};
