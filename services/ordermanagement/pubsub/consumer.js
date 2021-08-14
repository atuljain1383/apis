var amqp = require('amqplib/callback_api');


const consume = async() =>{
  // amqp.connect('amqp://localhost', function(error0, connection) {
  //   if (error0) {
  //     throw error0;
  //   }
  //   connection.createChannel(function(error1, channel) {
  //     if (error1) {
  //       throw error1;
  //     }
  //     var queue = 'INVENTORY';
  
  //     channel.assertQueue(queue, {
  //       durable: false
  //     });

  //     channel.consume(queue, function(msg) {
  //       console.log(" [x] Received %s", msg.content.toString());
  //     }, {
  //         noAck: true
  //       });
  //   });
  // });
}

module.exports = consume;