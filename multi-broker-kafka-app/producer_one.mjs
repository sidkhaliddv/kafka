import { kafka } from "./kafka.mjs";

const producer = kafka.producer();

await producer.connect();

let i = 0;

setInterval(async ()=>{
  await producer.send({
    topic: 'my-events-1',
    messages: [
      {
        key: i+"", value: i+"", partition: 0
      }
    ]
  });
  console.log(`sent ${i++}`)
}, 1000);
