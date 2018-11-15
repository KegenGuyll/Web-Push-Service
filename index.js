const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json())

const publicVapidKey = 'BCaX2b3HndNXsaxqCv8-14KIFyvemEEVAJ7XrqYjtJEza-75L5q0Fc765KvBTFR7fNF9va6Lj6zwrMTMK1KeLqg';
const privateVapidKey = '6IZ8Ey35JBBj3tMte4Wi4ZuPT5aCUMlH-DRF2vWxdiA';

webpush.setVapidDetails('mainto:test@test.com',publicVapidKey,privateVapidKey);

//Subcribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    //Create payload
    const payload = JSON.stringify({ title: 'Push Test'});

    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
} );

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))