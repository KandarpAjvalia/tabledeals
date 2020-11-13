const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 4000

app.get('/', (req, res) => res.sendFile(path.resolve('index.html')))

app.listen(port, () => console.log(`server is listening on ${port}`))
