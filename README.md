# Kafka docker commands
kafka-topics --create --topic=teste --bootstrap-server=localhost:9092 --partitions=3
kafka-topics --list --bootstrap-server=localhost:9092
kafka-topics --bootstrap-server=localhost:9092 --topic=teste --describe

## Consumer
```kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste```

-- Cosumer by group
```kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste --group=x```

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
    
