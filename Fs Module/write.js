
const fs =require('fs')

let ore=process.argv[2]
let filename=process.argv[3]
// let renam=process.argv[4]
let data=process.argv[4]
const write=()=>{
    fs.writeFile(filename,data,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("creat file");
    }
})
}

if(ore=="write"){
    write()
}

const read=()=>{
fs.readFile(filename,"utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})
}

if(ore=="read"){
    read()
}

const delet=()=>{
    fs.unlink(filename,(err)=>{
        if (err) throw err;
        console.log("delete");
    })
}

if(ore=="delete"){
    delet()
}

const rename=()=>{
    fs.rename(filename,renam,(err)=>{
        if(err) throw err;
        console.log("rename file");
    })
}

if(ore=="rename"){
    rename()
}

const append=()=>{
    fs.appendFile(filename,data,(err)=>{
        if(err) throw err;
        console.log("append");
    })
}

if (ore=="append") {
    append()
}