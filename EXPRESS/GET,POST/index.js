    // EXPRESS JS GET,POST
const express=require("express")
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Home Page !")
})

app.get('/login',(req,res)=>{
    res.send("Login Page !")
})

app.post("/sign",(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})
app.post('/login', (req, res) => {
    // const { username, password } = req.body;
    res.status(200).json({ message: 'Login successful'});
//     if (username === 'user' && password === 'password') {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Login failed' });
//     }
  });

app.post("/product",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})


app.listen(3000,()=>{console.log(`server satart`)})




