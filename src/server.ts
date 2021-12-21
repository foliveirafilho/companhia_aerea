import "reflect-metadata"
import express from "express"
import "./database"

const app = express()
const PORT = 3000

app.get("/teste", (request, response) => {
    return response.send("TESTANDO O TESTE!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})