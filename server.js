const express=require("express");
const app=express();

app.use(express.json());
app.use(express.static(__dirname));

let expenses=[];

app.post("/add",(req,res)=>{

expenses.push(req.body);
res.send("added");

});

app.get("/expenses",(req,res)=>{
res.json(expenses);
});

app.listen(3000,()=>{
console.log("Server running on 3000");
});
