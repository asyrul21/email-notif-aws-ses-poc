# Email Notification Guide with AWS SES

## Sending Emails

## If Recipient Email is not valid format

_MessageRejected: Email address is not verified. The following identities failed the check in region..._

### If Recipient Email is not verified and is currently in Sandbox

Error will be thrown:

_InvalidParameterValue: Missing final..._

# Notes

1. Use different aws users (access keys) for dev and production with the env variables

2. Rather than using templates, we should dynamically compose our email html in our server apps:

   - no way to visually see each template from CLI and Console

   - `sendBulkTemplatedEmail` still has recipent limit of 50

   - so far don't the point of doing so

# References:

1. [Moving Out of the Sandbox](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html)

2. [Quotas and Limits](https://docs.aws.amazon.com/ses/latest/dg/quotas.html)

3. [How to use Email Templates](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html)

4. [SES API Reference: sendEmail](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html)

5. [Javascript SDK API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html)

6. [Javascrupt SDK API Reference: sendEmail](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property)
