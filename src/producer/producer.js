const Kafka = require('node-rdkafka')

class Producer {
    #producer;
    constructor() {
        this.init()
        this.registerError();
    }

    init() {
        this.#producer = new Kafka.Producer({
            'metadata.broker.list': 'kafka-kafka-1:9092'
        });
        this.#producer.connect();
        this.#producer.setPollInterval(100);
    }

    registerError() {
        this.#producer.on('event.error', function(err) {
            console.error('Error from producer')
            console.error(err)
        })
    }

    publish(message) {
        this.#producer.on('ready', () => {
            try {
                this.#producer.produce(
                    'topic-custom-event',
                    null,
                    Buffer.from(message)
                );
            } catch (err) {
                console.error('A problem occurred when sending our message');
                console.error(err);
            }
        })
    }
}

const producer = new Producer();

producer.publish('{ "action": "OPEN_THE_DOOR" }');
