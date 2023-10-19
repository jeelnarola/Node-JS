 
// const moviemodel = require('../Models/movie.schema');
const movieschema=require('../Models/movie.schema')

const moviec=async(req,res)=>{
    let data=await movieschema.create(req.body)
    console.log(data);
    res.status(201).send(data)
}

const movieD=async(req,res)=>{
    let {id}=req.params
    let data=await movieschema.findByIdAndDelete(id)
    res.send({"message":"Movie deleted"})
}

const movieP=async(req,res)=>{
    let {id}=req.params

    let update=await movieschema.findByIdAndUpdate(id,req.body)
    update=await movieschema.findById(id)
    res.status(200).send(update)
}

const movieR=async(req,res)=>{
    let {id}=req.params
    if(id){
   let data=await movieschema.findById(id)
   data.ratings.push({value:req.body.value})
   await data.save()
    console.log(data);
    res.send(data)
    }else{
        res.send({error: "movie not found"})
    }

}

const movief=async(req,res)=>{
    let {title,addedBy,releaseDate,category}=req.query
    let obj={}
    if(title){
        obj.title=title
    }
    if(addedBy){
        obj.addedBy=addedBy
    }if(releaseDate){
        obj.releaseDate=releaseDate
    }if(category){
        obj.category=category
    }
    let data=await movieschema.find(obj)
    res.send(data)
}
module.exports={moviec,movieD,movieR,movieP,movief}