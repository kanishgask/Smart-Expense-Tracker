async function addExpense(){

const name=document.getElementById("name").value;
const amount=document.getElementById("amount").value;

await fetch("/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,amount})
});

loadExpenses();
}

async function loadExpenses(){

const res=await fetch("/expenses");
const data=await res.json();

let list=document.getElementById("list");
list.innerHTML="";

let total=0;

data.forEach(e=>{
total+=parseInt(e.amount);

let li=document.createElement("li");
li.textContent=e.name+" - ₹"+e.amount;
list.appendChild(li);
});

document.getElementById("total").innerText="Total: ₹"+total;
}

loadExpenses();
