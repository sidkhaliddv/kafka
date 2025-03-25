import { kafka } from "./kafka.mjs";

const consumer = kafka.consumer({groupId: "consumer-1-1"});

await consumer.connect();

await consumer.subscribe({ topic: 'my-events-1', fromBeginning: true });

consumer.run({
  eachMessage: ({topic, partition, message}) => {
    console.log(`Topic ${topic}, Partition ${partition}, Message ${message.value}`)
  }
});
