run
```bash
$ sls offline start
```

and then attempt to call a curl:

```bash
curl -XPOST -H 'Content-Type:application/json' -H 'Accept:application/json' "http://localhost:3000/dev/ABC123" -d'{}'
```

It should log:
```bash
Received a request!
```
then queue a constant string `Hello world!' into an SQS for a consumer to retrieve it. Which will log another constant:
```bash
Hello!!!!!
```

The problem is that without harcoding the queueUrl, there is no way to retrieve the QueueUrl from resources (when dealing with serverless-offline)