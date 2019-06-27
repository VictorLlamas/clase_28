const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({dest: 'profile-pictures/'})
const app = express()
const port = 9000

app.use(cors())

function profileHandler(req, res){
    console.log(req.body.name)
    console.log(req.file)
    res.status(200).end()
}

app.put('/profile', upload.single('avatar'), profileHandler)

app.listen(port, function() {
    console.log(`Express listening in port ${port}`)
})

