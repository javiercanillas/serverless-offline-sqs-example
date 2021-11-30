'use strict'
/* global console */
const AWS       = require('aws-sdk')

module.exports.post = async event => {
  console.log('Received a request!')
  let sqs  = new AWS.SQS()
  await sqs
    .sendMessage({
      MessageBody: 'hola mundo!',
      QueueUrl: 'http://localhost:9432/queue/MyFirstQueue'
      // QueueUrl: process.env.MY_FIRST_QUEUE_URL
    })
    .promise()
    .then(data => console.info('Enqueued'))
}

