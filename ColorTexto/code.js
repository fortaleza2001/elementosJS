document.getElementById("color").addEventListener("change",()=>{
   
    let textos=document.getElementsByTagName("p");
    
    /*for(let i=0;i<textos.length;i++){
        textos[i].style.color=document.getElementById("color").value
    }*/
   Array.from(textos).forEach((texto,indice)=>{
        texto.style.color=document.getElementById("color").value
   })
})