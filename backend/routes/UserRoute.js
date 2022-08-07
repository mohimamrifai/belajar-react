//1 . import express untuk menggunakan funsgi routes
import  express  from "express";

// 4. impoert fungsi getusers dari controllers
import { getUser, getUserById, createUser, updateUser, deleteUser } from "../controllers/UserController.js";



// 6. import userroute di index.js


// 2. inisiate route dari express
const route = new express.Router();



// 5. membuat end point
route.get('/users', getUser);
route.get('/users/:id', getUserById);
route.post('/users', createUser);
route.patch('/users/:id', updateUser);
route.delete('/users/:id', deleteUser)


// 3. export route
export default route;