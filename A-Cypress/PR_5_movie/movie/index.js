const express=require('express');
const data = require('./Config/db');
const router = require('./Routers/user.route');
const movie = require('./Routers/movie.router');

// const router = require('./Routers/user.route');


const app=express()
app.use(express.json())

app.use(router)
app.use(movie)
app.listen(8090,()=>{
    console.log("server start");
    data()
})