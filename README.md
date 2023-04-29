# RESTFul API with Express JS

This repository was created for learning purposes. Learning how to work
with RESTFul API and exploring how to create one with Express JS.

## Test the API on your machine
To test this simple RESTFul API on your local machine, you need to ensure
you have `nodejs` package installed on your machine.

#### Clone this repository

```
$ git clone https://github.com/OluwaninsolaAO/restapi-with-expressjs
```


#### Install node modules

```
$ cd restapi-with-expressjs
$ npm install
```

#### Start Server
```
$ npm start
> restapi@1.0.0 start /home/oluwaninsolaao/git/restapi
> node ./index.js

Server started on port 8888
```

#### Test API (while the server is running on another terminal session)
```
$ curl -si 0:8888/hello/World
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 26
ETag: W/"1a-iEQ9RXvkycqsT4vWvcdHrxZT8OE"
Date: Sat, 29 Apr 2023 13:53:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Hello World!"}
```
