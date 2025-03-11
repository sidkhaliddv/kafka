import { kafka } from "./kafka.mjs";


const admin = kafka.admin();

await admin.connect()

admin.createTopics({
  topics:[{
    topic: 'my-events',
    numPartitions: 2
  }]
})
