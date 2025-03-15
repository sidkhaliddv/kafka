import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ['localhost:9090', 'localhost:9091']
})

export {
  kafka
};
