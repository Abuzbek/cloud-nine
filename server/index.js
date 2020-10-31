const exp = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes/index')
const app = exp()
app.use('/api/post', api)
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(port))
