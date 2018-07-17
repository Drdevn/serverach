const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');

const PORT = 3000;
const api = require('./routes/api');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function(req, res){
    // res.send('hello')
});
app.listen(PORT, function(){
    console.log("run:" + PORT)
});
// app.use(express.static('../achieveproject/src/app/user-page'));

// const io = socket(PORT);
//
// io.on('connection', (socket) => {
//     console.log('made socket connect')
// });