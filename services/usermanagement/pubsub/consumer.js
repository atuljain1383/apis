var amqp = require('amqplib/callback_api');
const publish = require("./publisher")


const consume = async() =>{
  // amqp.connect('amqp://localhost', function(error0, connection) {
  //   if (error0) {
  //     throw error0;
  //   }
  //   connection.createChannel(function(error1, channel) {
  //     if (error1) {
  //       throw error1;
  //     }
  //     var queue = 'ORDER';
  
  //     channel.assertQueue(queue, {
  //       durable: false
  //     });

  //     channel.consume(queue, function(msg) {
  //      const product =  JSON.parse(msg.content.toString());
  //      console.log(" [x] Order received %s", product)
  //     //  check inventory
  //     channel.ack(msg.content);
  //      //publish
  //      channel.sendToQueue(
  //       "INVENTORY",
  //       Buffer.from('NO STOCK')
        
  //   );
  //   console.log(" [x] NO STOCK of", product)
    
       
  //     });
  //   });
  // });
}

module.exports = consume;