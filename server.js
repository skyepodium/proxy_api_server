var express = require('express');
var app = express();

app.get('/api/getList', function(req, res) {
    res.send('api getList');
  });

app.listen(3000);