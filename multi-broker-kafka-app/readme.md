
ReplicationFactor should be <= brokers, as each broker will have only one replica either master or slave.

Partitions will be divided among the brokers and each partition will have one slave replica in other broker.

admin.createTopics({
  topics: [
    {
      topic: 'my-events-1',
      numPartitions: 4,
      replicationFactor: 2,
    }
  ]
});
