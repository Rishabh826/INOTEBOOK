const connectToMongo = require("./db");
connectToMongo();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use('/api/auth',require('./routes/notes'));
app.use('/api/user',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})