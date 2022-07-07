import express from "express";
import mongoose from 'mongoose';
// import Cors from 'cors'
import Cards from './models/dbCards.js'

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

// adding middleware
app.use(express.json())
// app.use(Cors);

// DB configuration
mongoose.connect(connection_url, {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
})

// API endpoints
app.get('/', (req,res)=>res.status(200).send("Server is Running"))

// post is used for posting data into database
app.post('/api/cards', (req, res)=>{
    // taking data from bady, converting it to a schema of dbCard and storing it in database
    const dbCard = req.body
    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

// get is used to get data from db.
app.get('/api/cards', (req, res)=>{
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})



// Adding listener
app.listen(port, ()=>console.log(`listning on localhost:${port}`))

 