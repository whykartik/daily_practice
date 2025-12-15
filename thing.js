console.log("task 1")
let a=document.querySelector("h1");
let b=document.querySelector("#bandi1");
let c=document.querySelector("#bandi2");
let dick=0;
b.addEventListener("click",function(){
   dick++;
   a.innerText=dick;
})

c.addEventListener("click",function(){
   dick--;
   a.innerText=dick;
})


