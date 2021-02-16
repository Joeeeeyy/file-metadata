const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


app.post('/api/fileanalyze', upload.single('upfile'), (req, res) => {
  let { originalname, mimetype, size } = req.file;
  return res.setDefaultEncoding({ name: originalname, type: mimetype, size: size })
});