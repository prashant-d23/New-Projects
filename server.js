import express from 'express'
import connectDB from './db.js';
import cors from 'cors';

import userRouter from './src/routes/user.js';

const app = express();

app.use(express.json())

app.use(cors({
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200,
        credentials: true
    }))

app.use('/auth', userRouter);

connectDB().then(() =>{
    console.log("Cnncted to db");

    app.listen(5000, () =>{
        console.log("Server listening on 5000");
    })
})

