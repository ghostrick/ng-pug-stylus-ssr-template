'use strict'

require('zone.js/dist/zone-node')
require('reflect-metadata')
const express = require('express')
const universal = require('@nguniversal/express-engine')
const server = require('./dist-server/main.bundle')
const app = express()

const port = 3000

function router(req, res) {
  res.render('index', {req, res})
}

app.get('/', router)
app.use(express.static('./dist/'))

app.engine('html', universal.ngExpressEngine({
    bootstrap: server.AppServerModuleNgFactory
}))

app.set('view engine', 'html')
app.set('views', 'dist')

app.get('*', router)
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
