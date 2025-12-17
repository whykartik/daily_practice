console.log("3rd Task")

let btn=document.querySelector("button")
 
btn.addEventListener("click",function(){

   let c1=Math.floor(Math.random()*256)
   let c2=Math.floor(Math.random()*256)
   let c3=Math.floor(Math.random()*256)
   let x=Math.random()*100
   let y=Math.random()*100
   let dick =document.createElement("div")
   
   dick.style.backgroundColor=`rgb(${c1},${c2},${c3})`
   dick.style.left=y+"vw"
   dick.style.top=x+"vh"
   let body=document.querySelector("body")
   body.append(dick)
})


