const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const fightersRoutesV1 = require('./routes/v1/fighters');

const app = express();
app.use(bodyParser.json()); //aplication/json
app.use(morgan('combined'));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, PUT, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type Authorization');
	next();
});
app.use('/api/v1/fighters', fightersRoutesV1);

app.listen(process.env.PORT || 3001);
