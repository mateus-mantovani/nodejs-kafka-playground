# Kafka docker commands
kafka-topics --create --topic=teste --bootstrap-server=localhost:9092 --partitions=3
kafka-topics --list --bootstrap-server=localhost:9092
kafka-topics --bootstrap-server=localhost:9092 --topic=teste --describe

-- CONSUMER
kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste

-- CONSUMER BY GROUP
kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste --group=x

-- PRODUCER
kafka-console-producer --bootstrap-server=localhost:9092 --topic=test
    >(digitar sua mensagem)

# Node aplication
To start node aplication:
``` docker exec -it nodekafka bash
    src/producer/producer.js