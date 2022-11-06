# app name


# Prerequisites

* Install the latest LTS version of node
* Install the latest LTS version of docker

# Tech Stack

* node.js 
* docker

# Getting started 

If you just want to start the application without working on the 
source code run:

```bash 
cd <repo-root-dir>
docker-compose up 
```

##  Contributing 

1. Start local dev environment

``` 
cd <repo-root-dir>
make dev-up
```

2. Install dev dependencies 

```bash
npm install
```
3. Run the application  
```bash
 npm run dev
```

You are good to go. 

Example usage
http://localhost:4000

# Testing

You can run the tests directly or use the npm command.  

```bash
jest test // unit tests
npm lint // linting rules
npm lint:fix // auto fix linting issues 
npm test // unit tests and linting rules 
```

You can also build and start the production image and manually test against it if you wish.
During the image build process the unit and linting tests will be run.

```bash
docker-compose up --build app-service
```

# Building production image 

This service uses a multistage Dockerfile.  
The first stage builds and tests the source code.
The second stage builds the application image 

To build the image you can run 
```bash 
make app-image
```