let PORT = process.env.PORT || 8000;
let express = require('express');

let app = express();

app.use(express.static('public'));

app.listen(PORT);