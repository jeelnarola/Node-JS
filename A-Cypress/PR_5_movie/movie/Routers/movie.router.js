const {Router}=require("express")

const {moviec, movieD, movieP, movieR, movief, comments} = require("../Controller/movie.controller")

const movie=Router()

movie.post("/movie/create",moviec)
movie.delete("/movie/delete/:id",movieD)
movie.patch("/movie/update/:id",movieP)
movie.patch("/movie/rating/:id",movieR)
movie.get("/movie/filter",movief)
movie.patch("/movie/comment/:id",comments)

module.exports=movie