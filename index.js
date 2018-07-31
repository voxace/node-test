const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Portable Octopus is Live!'))

app.listen(3000, () => console.log('Portable Octopus listening on port 3000!'))
