
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// app.get('/api', (req, res, next) => {
//     res.send('API Status: I\'m awesome')
// });
app.get('/api', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })


app.post('/api/contact', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
        const msg = {
        to: 'gezahegnw@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status('this is sendgrid error message' + 401).json({
                success: false
            });
        });
});


//app.listen(3000, '0.0.0.0');
app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })

