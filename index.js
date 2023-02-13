const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('GET request to homepage')
  })
const port = 5000;
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 