// uchv uocx lgwu rcia

const  express=require('express')
const nodemailer=require('nodemailer')

const app=express()
app.use(express.json())

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"narolajeel29@gmail.com",
        pass:"uchvuocxlgwurcia"
    }
})
app.post("/",(req,res)=>{
    const mail={
        from:"narolajeel29@gmail.com",
        to:"krishnanarola83@gmail.com",
        subject:"nodemailer",
        text:req.body.text
    }
    transport.sendMail(mail,(err,info)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(info)
        }
    })
    res.send("done")
})

app.listen(809,()=>{
    console.log("server start");
})