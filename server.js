const express = require("express")

const app = express()

app.use(express.static('build'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))

// script to start the server app
// react-scripts start