console.log("2nd Task")

let btn=document.querySelector("button")
let div=document.querySelector("#mine")
 
btn.addEventListener("click",function(){

   let c1=Math.floor(Math.random()*256)
   let c2=Math.floor(Math.random()*256)
   let c3=Math.floor(Math.random()*256)
   div.style.backgroundColor=`rgb(${c1},${c2},${c3})`

})


