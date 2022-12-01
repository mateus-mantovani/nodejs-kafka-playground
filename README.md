# Kafka docker commands
kafka-topics --create --topic=teste --bootstrap-server=localhost:9092 --partitions=3
kafka-topics --list --bootstrap-server=localhost:9092
kafka-topics --bootstrap-server=localhost:9092 --topic=topic-custom-event-2 --describe

check the consumers that are attached to the topic
kafka-consumer-groups --bootstrap-server=localhost:9092 --group=x --describe

## Consumer
```kafka-console-consumer --bootstrap-server=localhost:9092 --topic=topic-custom-event-2```

-- Cosumer creating a group
```kafka-console-consumer --bootstrap-server=localhost:9092 --topic=topic-custom-event-2 --group=x```

-- Producer
```
kafka-console-producer --bootstrap-server=localhost:9092 --topic=test
    >(enter your message)
```

# Node aplication
To start node aplication:
```
docker exec -it nodekafka bash
node src/producer/producer.js -- if you want produce messages
```
    
