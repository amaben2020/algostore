const amqp = require("amqplib/callback_api");

export const handler = (req: any, res: any) => {
  try {
    amqp.connect(
      "amqps://rthakaji:GFr-JJjbK1_GQUmkh4BUK0gpxjwSi4rL@crow.rmq.cloudamqp.com/rthakaji",
      function (error0: any, connection: any) {
        if (error0) {
          throw error0;
        }
        connection.createChannel(function (error1: any, channel: any) {
          if (error1) {
            throw error1;
          }
          const queue = "node_queue";
          channel.assertQueue(queue, {
            durable: true,
          });
          channel.prefetch(1);

          console.log("Waiting for messages in %s", queue);
          channel.consume(queue, function (msg: any) {
            console.log("message", msg);
            console.log("Received '%s'", msg.content.toString());
            console.log("Parsed", JSON.parse(msg.content));

            // hey, do whatever you want with the message in the queue
            const array = [];

            array.push(JSON.parse(msg.content));

            array.map((message) => ({
              id: 1,
              info: message.name,
              nodemailer: true,
              occup: message.occupation,
            }));

            console.log("Array created", array);

            // ends here

            setTimeout(function () {
              channel.ack(msg);
            }, 1000);
          });
        });
      },
    );
  } catch (error) {
    console.log(error);
  }
};
