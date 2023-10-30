// uchv uocx lgwu rcia

const  express=require('express')
const nodemailer=require('nodemailer')

const app=express()
app.use(express.json())

const transport=nodemailer.createTransport({
    service:"email",
    auth:{
        user:"narolajeel29@gmail.com",
        pass:"uchvuocxlgwurcia"
    }
})
app.post("/",(req,res)=>{
    const mail={
        from:"narolajeel29@gmail.com",
        to:"daksh1or2@gmail.com",
        subject:"nodemailer msg",
        text:"successfully"
    }
    transport.sendMail(mail,(err,info)=>{
        if (err) {
            console.log(err);
        }
        else{
            console.log(info)
        }
    })
    res.send("done")
})

app.listen(8090,()=>{
    console.log("server start");
})