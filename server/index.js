const express = require('express')

const app = express()

const port = process.env.SERVER_PORT || 4000

app.get('/', (req, res) => res.send('Hi'))

app.listen(port, () => console.log(`server is listening on ${port}`))
