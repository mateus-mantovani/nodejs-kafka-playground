# Intro
This is a project to explore Kafka features. It was written in Nodejs together with the librdkafka library.
Below you will find commands and useful notes to run the project.

## Node aplication
To start node aplication:
```
docker exec -it nodekafka bash
node src/producer.js -- if you want produce messages
node src/producer.js -- if you want consume messages
```

## Kafka docker commands

### Kafka management
```
kafka-topics --create --topic=topic-name --bootstrap-server=localhost:9092 --partitions=3
kafka-topics --list --bootstrap-server=localhost:9092
kafka-topics --bootstrap-server=localhost:9092 --topic=topic-custom-event-2 --describe
```

Check the consumers that are attached to the topic
```
kafka-consumer-groups --bootstrap-server=localhost:9092 --group=x --describe
```

### Consumer
```
kafka-console-consumer --bootstrap-server=localhost:9092 --topic=topic-custom-event-2
```

Cosumer creating a group
```
kafka-console-consumer --bootstrap-server=localhost:9092 --topic=topic-custom-event-2 --group=x
```

### Producer
```
kafka-console-producer --bootstrap-server=localhost:9092 --topic=topic-name
    >(enter your message)
```
