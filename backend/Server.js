import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import LearnerRoutes from './Routes/LearnerRoutes.js'
const Port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors());

//DB connection 
 mongoose.connect(
    process.env.URL || 
    "mongodb+srv://admin:P123456789@cluster0.pbj2lsf.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    console.log("Db Connected")
);
//Routes
app.use('/api/learner', LearnerRoutes);


app.get('/', (req, res)=>{
    res.status(200).send(`Server up and running`)
});

app.listen(Port, (req, res)=>{
    console.log(`Server Running on Localhost:${Port}`)
});