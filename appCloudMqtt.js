const express = require('express');
var app = express();
var port = process.env.PORT || 5000

const mqtt = require('mqtt'); //"mqtt": "^0.3.13"
const client  = mqtt.connect('mqtt://nbitjbzu:DxYegPp9xHAY@driver.cloudmqtt.com:18578')
//const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})

app.get('/', async function (req, res) {
  res.send("Hello");
});

app.listen(port, function () {
  console.log('App listening on port: ', port);
});
        
        