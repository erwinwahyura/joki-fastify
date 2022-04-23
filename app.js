require('dotenv').config();
const cors = require('cors');
const express = require('express');
const normalizePort = require('normalize-port');
const bodyParses = require("body-parser")
const app = express();
const port = normalizePort(process.env.PORT || '4000');
const mongoose = require('mongoose')
const errorHandler = require('./middleware')

// mongoose connect client
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.error(err);
  } else if (!err) {
    console.log('Database is connected');
  }
});
// mongoose.set('debug', true)

const routes = require('./routes')
app.use(bodyParses.urlencoded({
  limit: '250mb',
  extended: true
}));
app.use(bodyParses.json({
  limit: "250mb"
}))
app.use(cors());

app.get('/', (req, res) => {
  res.send('Ok')
})

routes(app, express)
app.use(errorHandler)

app.listen(port, () => console.log(`Server: running on port ${port}`))