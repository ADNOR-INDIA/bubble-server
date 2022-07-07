import express from "express";
import mongoose from 'mongoose';


// flow of making backend application.
// App config
// middlewares
// DB config
// Api endpoints
// Listener

// App configuration
const app = express();
const port = process.env.PORT||5000
const connection_url = `mongodb+srv://bubble:bubble@cluster0.pl3tyvp.mongodb.net/?retryWrites=true&w=majority`


// DB configuration
mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

// API endpoints
app.get('/', (req,res)=>res.status(200).send("Server is Running"))

// Adding listener
app.listen(port, ()=>console.log(`listning on localhost:${port}`))

 