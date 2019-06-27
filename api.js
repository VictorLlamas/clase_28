const express = require('express')
const cors = require('cors')
const app = express()
const port = 9000

app.use(cors())

app.get('/', (req, res)=> {
    res.json({
        appName: 'senoraTube',
        version: '1.0.0'
    })
})

app.use((req, res) => {
    res.status(404).send('No hay nada aqui').end()
})

app.listen(port, function() {
    console.log(`Express listening in port ${port}`)
})

