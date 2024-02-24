const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json(), express.urlencoded({ extended: true }))

require('./config/mongoose.config')

require('./routes/product.routes')(app)

app.listen(8000, () => console.log ('Server is running on port 8000'))

