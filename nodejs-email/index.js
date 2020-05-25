const nodemailer = require('nodemailer');
const SMTPServer = require('smtp-server').SMTPServer;


var transport = nodemailer.createTransport({
    // host: "smtp-mail.outlook.com",
    // port: 25,
    service: 'gmail',
    auth: {
        user: "gareth.clifford95@gmail.com",
        pass: "bobby54321"
    }
    // sendmail: true,
    // newline: 'windows',
    // logger: false
});

const message = {
    from: 'testFrom@email.com',
    to: 'tomking9219@gmail.com',
    subject: 'Node js email testing',
    text: `Hi Tom,
    I am testing the email service that I have set up.
    Many thanks,
    Yo momma!`
};

transport.sendMail(message, function(err, info) {
    if (err) {
        console.log('Error sending message: %s', err);
    } else {
        console.log("Message sent: %s", info.messageId);
    }
});
