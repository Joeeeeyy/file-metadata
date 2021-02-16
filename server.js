const express = require('express');
const cors = require('cors');
require('dotenv').config()
const multer = require('multer');

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyze', multer().single('upfile'), (req, res) => {
  let fileData = {};
  fileData['name'] = req.file.originalname;
  fileData['type'] = req.file.mimetype;
  fileData['size'] = req.file.size;

  res.json(fileData);
});