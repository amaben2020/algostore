const amqp = require("amqplib/callback_api");

export const handler = (req: any, res: any) => {
  try {
    amqp.connect(
      "amqps://rthakaji:GFr-JJjbK1_GQUmkh4BUK0gpxjwSi4rL@crow.rmq.cloudamqp.com/rthakaji",
      function (error: any, connection: any) {
        console.log("error", error);
        if (error) {
          throw error;
        }
        connection.createChannel(function (error1: any, channel: any) {
          if (error1) {
            throw error1;
          }

          let queue = "node_queue";

          const msg = req.body.info;

          channel.assertQueue(queue, {
            durable: true,
          });
          channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
            persistent: true,
          });
          console.log("Sent '%s'", msg);
        });
        setTimeout(function () {
          connection.close();
          process.exit(0);
        }, 500);
      },
    );
  } catch (error) {
    console.log(error);
  }
};
