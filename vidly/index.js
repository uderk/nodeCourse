const express = require('express')
const helmet = require('helmet')
const app = express()

app.use(express.json())
app.use(helmet())

const genres = require('./routes/genres')

app.use('/api/genres', genres)

// start the server
const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
