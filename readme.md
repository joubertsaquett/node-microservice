
# Nodejs - Microservice, Serverless AWS (Lambda)
This is an example of a micro service api.
It can already be used on AWS as a service without a server (Lambda).

## Installation
```bash
sudo npm install -g serverless
```

## Configuration AWS Credentials
Check to see if there is a "Payment Methods" set up in your AWS account. 
If you have just set up, wait a few minutes and try again.
```bash
serverless config credentials --provider aws --key <KEY> --secret <SECRET>
```

## Usage Dev
```
#Run command to start
serverless offline start --skipCacheInvalidation
```

## Usage Production
```
#Run command to start
serverless deploy -v
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
