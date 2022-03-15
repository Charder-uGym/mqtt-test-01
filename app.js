//var mqtt = require('mqtt'), url = require('url');
//// Parse
////var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883');
//var mqtt_url = url.parse('mqtt://nbitjbzu:DxYegPp9xHAY@driver.cloudmqtt.com:18578');
//var auth = (mqtt_url.auth || ':').split(':');
//console.log(auth);
//
//// Create a client connection
//var client = mqtt.createClient(mqtt_url.port, mqtt_url.hostname, {
//  username: auth[0],
//  password: auth[1]
//});
//
//client.on('connect', function() { // When connected
//
//  // subscribe to a topic
//  client.subscribe('hello/world', function() {
//    // when a message arrives, do something with it
//    client.on('message', function(topic, message, packet) {
//      console.log("Received '" + message + "' on '" + topic + "'");
//    });
//  });
//
//  // publish a message to a topic
//  client.publish('hello/world', 'my message', function() {
//    console.log("Message is published");
//    client.end(); // Close the connection when published
//  });
//});

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