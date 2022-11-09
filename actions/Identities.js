const AWS = require("aws-sdk");

const sampleEmail = process.env.sample_email_verified;

module.exports = {
  listAll: function () {
    // list identities
    const ListIDsPromise = new AWS.SES()
      .listIdentities({
        IdentityType: "EmailAddress",
        MaxItems: 10,
      })
      .promise();

    ListIDsPromise.then((data) => {
      console.log("Resolved data:");
      console.log(data.Identities);
    }).catch((err) => {
      console.log("Reject error:");
      console.log(err);
    });
  },
  verifyNew: function (email = sampleEmail) {
    // add or register new identity
    const VerifyEmailPromise = new AWS.SES()
      .verifyEmailIdentity({
        EmailAddress: email,
      })
      .promise();

    VerifyEmailPromise.then((data) => {
      console.log("Email verification initiated!");
      console.log("Resolved data:");
      console.log(data);
    }).catch((err) => {
      console.log("Reject error:");
      console.log(err);
    });
  },
  delete: function (email) {
    if (!email) {
      throw new Error();
    }
    const DeleteIdentityPromise = new AWS.SES()
      .deleteIdentity({
        Identity: email,
      })
      .promise();
    DeleteIdentityPromise.then(function (data) {
      console.log("Identity Deleted");
      console.log("Resolved data:");
      console.log(data);
    }).catch(function (err) {
      console.log("Reject error:");
      console.log(err);
    });
  },
};
