import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import mongoose from 'mongoose'


const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app);

server.listen(8000, ()=> {
    console.log('Server running  on http://localhost:8000/')
})

const MONGO_URL="mongodb+srv://macroni607:deuces.607@cluster0.8cd3fa1.mongodb.net/expresssample"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));


