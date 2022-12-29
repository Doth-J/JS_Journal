// Source: https://nodejs.dev/en/learn/asynchronous-flow-control/
//
// LIMITED PARALLEL PATTERN
// Limited parallel: parallel with limit, such as successfully emailing 1,000,000 recipients from a list of 10E7 users.

let successCount = 0;

function final() {
  console.log(`dispatched ${successCount} emails`);
  console.log('finished');
}

function dispatch(recipient, callback) {
  // `sendEmail` is a hypothetical SMTP client
  sendMail(
    {
      subject: 'Dinner tonight',
      message: 'We have lots of cabbage on the plate. You coming?',
      smtp: recipient.email,
    },
    callback
  );
}

function sendOneMillionEmailsOnly() {
  getListOfTenMillionGreatEmails(function (err, bigList) {
    if (err) throw err;

    function serial(recipient) {
      if (!recipient || successCount >= 1000000) return final();
      dispatch(recipient, function (_err) {
        if (!_err) successCount += 1;
        serial(bigList.pop());
      });
    }

    serial(bigList.pop());
  });
}

sendOneMillionEmailsOnly();
