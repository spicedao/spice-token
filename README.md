# Spice Token
This repo was forked from [index-coop](https://github.com/SetProtocol/index-coop/) and adapted for our own use case.

## Install dependencies
Requirements:
- Node.js version >= 12
- [Yarn](https://yarnpkg.com/) 

To install the project dependencies and build the contracts run
```bash
yarn
```

## Config variables
Create an `.env` file by copying the `.env.example` and set the variables.

## Local token deployment
Start a local chain 
```
yarn chain
``` 

Run deployment
```
yarn deploy:local
``` 


## Kovan token deployment
Run deployment
```
yarn deploy:kovan
``` 

## Mainnet token deployment
Run deployment
```
yarn deploy:production
``` 

## Mainnet-fork token deployment
Start a local mainnet fork as explained [here](https://github.com/spicedao/scifi-contracts#forking-the-mainnet)

Set `.env` variables (just needed for storing the results in the json files):
```
DEPLOYMENT_CONSTANT=mainnet-fork
DEPLOYMENT_NETWORK_ID=1
```

Run deployment
```
yarn deploy:local
``` 

The deployment results will be stored in the `deployments` folder.
The generated json files should be removed if the token will be deployed again on the same network. 
