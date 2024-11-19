document.addEventListener("DOMContentLoaded",()=>{
    let celdasNotas=document.getElementsByClassName("notanumerica");
    let texto='<select class="selector"><option value="">-</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option>'
    for(let i=0;i<celdasNotas.length;i++){
        celdasNotas[i].innerHTML=texto;
        
    }

    let elementos=document.getElementsByClassName("selector");
    let elementosnotatexto=document.getElementsByClassName("nota");
    
    Array.from(elementos).forEach((elemento,indice)=> {
        elemento.addEventListener("change", (evento)=>{
            
            switch(elemento.value){
                case "-":
                    elementosnotatexto[indice].textContent="";
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                    elementosnotatexto[indice].textContent="Insuficiente";
                    break;
                case "5":
                    elementosnotatexto[indice].textContent="Suficiente";
                    break;
                case "6":
                    elementosnotatexto[indice].textContent="Bien";
                    break;
                case "7":
                case "8":
                    elementosnotatexto[indice].textContent="Notable";
                    break;
                default:
                    elementosnotatexto[indice].textContent="Sobrealiente";      

            }
        });
    });

})

