const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL);

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(morgan('tiny'))
app.use(cors())

//route variable
const index = require('./routers/indexRouter')
const shop  = require('./routers/shopRouter')

//route use
app.use('/', index)
app.use('/api/shop/', shop)

//listen
app.listen(3000, () => {
  console.log('App running on port 3000!')
})