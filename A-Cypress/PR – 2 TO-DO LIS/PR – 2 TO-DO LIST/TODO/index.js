const express = require("express");
const app = express();
const prot = 8090;
app.use(express.json());

let initialTodo = [
  { title: "HTML", isCompleted: true, id: 1 },
  { title: "javascript", isCompleted: true, id: 2 },
  { title: "React", isCompleted: false, id: 3 },
];
app.get("/", (req, res) => {
  res.send("welcome to the todo api");
});
app.get("/todos", (req, res) => {
  res.send(initialTodo);
});
app.post("/addtodo", (req, res) => {
  const newtodos = req.body;
  newtodos.id = initialTodo.length + 1;

  initialTodo.push(newtodos);
  res.send(newtodos);
});

app.patch("/update/:id", (req, res) => {
  let { id } = req.params;
  let index = initialTodo.findIndex((fil) => fil.id == id);
  if (index == -1) {
    res.status(404).send("don not patch");
  } else {
    initialTodo[index].title = req.body.title;
    initialTodo[index].isCompleted = req.body.isCompleted;
  }
  res.send(initialTodo[index]);
});
app.delete("/delete/:id",(req,res)=>{
  let { id } = req.params;
  console.log(id);
  const deletedTodo=initialTodo.filter((item)=>item.id==id)
  res.send(...deletedTodo)
})

app.get("/findbystatus", (req, res) => {
  let  isCompleted  = req.query.isCompleted;
  
  const filtercheck=isCompleted==="true"
  console.log(filtercheck);
  const fil=initialTodo.filter((item)=>item.isCompleted===filtercheck)
  console.log(fil)
  res.status(200).send(fil);
});

app.listen(prot, () => console.log(`start sever = localhost:${prot}`));
