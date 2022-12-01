const { KafkaConsumer } = require('node-rdkafka')

class Consumer {
  createConsumer (onData) {
    this.consumer = new KafkaConsumer({
      'bootstrap.servers': 'kafka-kafka-1:9092',
      'group.id': 'node-example-group-2'
    }, {
      'auto.offset.reset': 'earliest'
    })

    return new Promise((resolve, reject) => {
      this.consumer
        .on('ready', () => resolve(this.consumer))
        .on('data', onData)

      this.consumer.connect()
    })
  }

  async consume () {
    await this.createConsumer(({ key, value, partition, offset }) => {
      console.log(`Consumed record with key ${key} and value ${value} of partition ${partition} @ offset ${offset}.`)
    })

    this.consumer.subscribe(['topic-custom-event-3'])
    this.consumer.consume()

    process.on('SIGINT', () => {
      console.log('\nDisconnecting consumer ...')
      this.consumer.disconnect()
    })
  }
}

const consumer = new Consumer()
consumer.consume()
