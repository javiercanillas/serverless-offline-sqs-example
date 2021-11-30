'use strict'
/* global console */
const AWS       = require('aws-sdk')

module.exports.post = async event => {
  console.dir(process.env)
  let sqs  = new AWS.SQS()
  await sqs
    .sendMessage({
      MessageBody: 'hola mundo!',
      QueueUrl: process.env.MY_FIRST_QUEUE_URL
      // QueueUrl: queueParam
    })
    .promise()
    .then(data => console.info('Enqueued'))
}

