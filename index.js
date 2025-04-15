// index.js
// where your node app starts

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// enable CORS so FCC can test your API
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files in the public folder
app.use(express.static('public'));

// serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// hello endpoint (provided by boilerplate)
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// your project endpoint
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// start server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
