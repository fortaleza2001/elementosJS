document.addEventListener("DOMContentLoaded",()=>{
    const botonSorteo=document.getElementById("sorteo");
    const botonReiniciar=document.getElementById("reiniciar");
    
    botonSorteo.addEventListener("click",()=>{
        let seleccionados=document.querySelectorAll(".seleccionado");
        
        seleccionados.forEach((elemento)=>{
            elemento.classList.replace("seleccionado","elegidos")
        });
        
        let alumnos=document.querySelectorAll("p:not(.elegidos)");
        console.log(alumnos.length)
        if (alumnos.length==1){
            botonSorteo.style.display="none";
            botonReiniciar.style.display="block";
        }

        let numero =Math.floor(Math.random()*alumnos.length);
        alumnos[numero].classList.add("seleccionado")
    });

    botonReiniciar.addEventListener("click",()=>{
        let seleccionados=document.querySelectorAll("p");
        seleccionados.forEach((elemento)=>{
            elemento.classList.remove("seleccionado","elegidos")
        });
        
        botonSorteo.style.display="block";
        botonReiniciar.style.display="none";
    });
});