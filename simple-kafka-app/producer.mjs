import {kafka} from './kafka.mjs'

const producer = kafka.producer();

await producer.connect();


let i = 0;
setInterval(async ()=>{
  await producer.send({
    topic: 'my-events',
    messages: [
      { key: i.toString(), value: 'order-created'+i, partition: 1 }
    ]
  })
  console.log(`sent ${i}`)
  i++;
}, 1000)

console.log('sent..........')