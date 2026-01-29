const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Book maintenence rodando 🚀")
})

app.use(require("./books.routes"))

module.exports = app

