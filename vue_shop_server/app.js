const express = require('express')
const compression = require('compression')
const app = express()

// 一定把这一行写到静态资源托管前
app.use(compression())
app.use(express.static('./dist'))

app.listen(80,() => {
    console.log('server running at http://127.0.0.1')
})