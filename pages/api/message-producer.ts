const amqp = require("amqplib/callback_api");

const handler = (req: any, res: any) => {
  try {
    amqp.connect(
      "amqps://rthakaji:GFr-JJjbK1_GQUmkh4BUK0gpxjwSi4rL@crow.rmq.cloudamqp.com/rthakaji",
      (error: any, connection: any) => {
        console.log("error", error);
        if (error) {
          throw error;
        }
        connection.createChannel((error1: any, channel: any) => {
          if (error1) {
            throw error1;
          }

          const queue = "node_queue";

          console.log("req body", req.body);

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
          // process.exit(0);
        }, 500);
      },
      res.send("Ok"),
    );
  } catch (error) {
    console.log(error);
  }
};

export default handler;
