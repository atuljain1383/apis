var amqp = require('amqplib/callback_api');


const publish = async() =>{
    // amqp.connect('amqp://localhost', function(error0, connection) {
    //     if (error0) {
    //       throw error0;
    //     }
    //     connection.createChannel(function(error1, channel) {
    //       if (error1) {
    //         throw error1;
    //       }
    //       var queue = 'INVENTORY';
    //       var msg = 'NO STOCK';
      
    //       channel.assertQueue(queue, {
    //         durable: false
    //       });
      
    //       channel.sendToQueue(queue, Buffer.from(msg));
    //       console.log(" [x] Sent %s", msg);
    //     });
    //   });
}

module.exports = publish;