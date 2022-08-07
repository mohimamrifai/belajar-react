// 1. import express
import express  from "express";
// 2. import cors
import cors from 'cors';

// import userroute dari folder routes
import UserRoute from './routes/UserRoute.js';

// 3. inisiate object express
const app = new express()

// 4. set up midleware cors
app.use(cors());

// 5. set up untuk menerima reques json
app.use(express.json()) 

// jalankan UserRoute
app.use(UserRoute);

// 6. running server 
app.listen(5000, () => console.log('server up'))
