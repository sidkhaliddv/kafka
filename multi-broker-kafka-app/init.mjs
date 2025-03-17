import { kafka } from "./kafka.mjs";

const admin = kafka.admin();

await admin.connect();

// partitions will be divided among the brokers and each partition will have one slave replica in other broker
try {
  admin.createTopics({
    topics: [
      {
        topic: 'my-events-1',
        numPartitions: 4,
        replicationFactor: 2,
      }
    ]
  });
} catch{}

// each partition 
try {
  admin.createTopics({
    topics: [
      {
        topic: 'my-events-2',
        numPartitions: 8,
        replicationFactor: 2,
      }
    ]
  });
} catch {}

//partitions will be divided among brokers, with no replicas
try {
  admin.createTopics({
    topics: [
      {
        topic: 'my-events-3',
        numPartitions: 4,
      }
    ]
  });
} catch {}

// there will be only one partition in topic
try {
  admin.createTopics({
    topics: [
      {
        topic: 'my-events-4',
        numPartitions: 1,
      }
    ]
  });
} catch {
  
}
