const express = require('express');
var app = express();
var port = process.env.PORT || 5000

const mqtt = require('mqtt'); //"mqtt": "^4.3.6"

var options = {
    host: '3a8247b564f04a0a81e7e1d070882e1e.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'ugym-devices',
    password: 'Ab-123456'
}

//initialize the MQTT client
var client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('presence');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('presence', 'Hello from nodejs');


app.get('/', async function (req, res) {
  res.send("Hello");
});

app.listen(port, function () {
  console.log('App listening on port: ', port);
});
     