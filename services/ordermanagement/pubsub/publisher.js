var amqp = require('amqplib/callback_api');
var consume = require('./consumer');

const publish = async() =>{
    // amqp.connect('amqp://localhost', function(error0, connection) {
    //     if (error0) {
    //       throw error0;
    //     }
    //     connection.createChannel(function(error1, channel) {
    //       if (error1) {
    //         throw error1;
    //       }
    //       var queue = 'ORDER';
    //       var msg = JSON.stringify('{"ProductId":"1", "ProductDesc":"Mobile"}');
      
    //       channel.assertQueue(queue, {
    //         durable: false
    //       });
      
    //       channel.sendToQueue(queue, Buffer.from(msg));
    //       console.log(" [x] order Sent %s", msg);

          
    //       channel.consume("INVENTORY", (data) => {
    //         order = JSON.parse(data.content);
    //         console.log(" [x] Inventory received %s", order)
    //     });

         
    //     });
    //   });
}

module.exports = publish;