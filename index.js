#!/usr/bin/node
// simple Express.js RESTful API
'use strict';

// initialize
const
	port = 8888,
	express = require('express'),
	app = express();

// root dir
app.get('/', (req, res) =>
	res
	.append('Access-Control-Allow-Origin', '*')
	.json(
		{ index: 'There is nothing here'}
	)
);


// /hello/ GET request
app.get('/hello/:name?', (req, res) =>
	res
	.append('Access-Control-Allow-Origin', '*')
	.json(
		{ message: `Hello ${req.params.name || 'world' }!` }
	)
);

// start server
app.listen(port, () =>
	console.log(`Server started on port ${port}`)
);
