import {kafka} from './kafka.mjs'

const consumer = kafka.consumer({ groupId: "consumer-1" });

await consumer.connect();

await consumer.subscribe({ topic: 'my-events', fromBeginning: true })

await consumer.run({
  eachMessage: ({topic, partition, message})=>{
    console.log(`Topic ${topic} partition ${partition} message: ${message.value}`)
  }
})
