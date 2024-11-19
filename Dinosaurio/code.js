class Dino{
    #suelo;
    #inicialSuelo;
    #paso;
    #dino;
    #altura;
    #saltando;
    #subir;
    #bajar;
    #funcionTecla;

    constructor(){
        this.#suelo=document.querySelectorAll(".suelo").item(0)
        this.#dino=document.querySelectorAll(".dino").item(0)
        this.#inicialSuelo=0;
        this.#paso=true;
        this.#altura=22;
        this.#iniciar()
        this.#subir=false;
        this.#bajar=false;
    }

    #moverSuelo(){
        this.#inicialSuelo=this.#inicialSuelo-10
        this.#suelo.style.backgroundPosition=this.#inicialSuelo+"px 0px"
    }
    #correrDino(){
        if (this.#paso){
            this.#dino.style.backgroundPosition="-84px 0px"
            this.#paso=false;
        }else{
            this.#dino.style.backgroundPosition="-168px 0px"
            this.#paso=true;
        }

    }
    #saltar(){
        document.removeEventListener("keydown",this.#funcionTecla);
        if(this.#subir){
            this.#altura++;
            this.#dino.style.bottom=this.#altura+"px"
            if (this.#altura==140){
                this.#subir=false;
                this.#bajar=true;
            }
        }else if(this.#bajar){
            this.#altura--;
            this.#dino.style.bottom=this.#altura+"px"
            if (this.#altura==22){
                this.#bajar=false;
                clearInterval(this.#saltando)
                document.addEventListener("keydown",this.#funcionTecla=(evento)=>this.#correr(evento))
            }
        }
    }
    #correr(evento){
       if(evento.keyCode == 39){
        this.#moverSuelo();
        this.#correrDino();
       }else if(evento.keyCode == 32){
        this.#subir=true;
        this.#saltando=setInterval(()=>this.#saltar(),10);
        
       }
    }
    #parar(evento){
        if(evento.keyCode){
            this.#dino.style.backgroundPosition="0px 0px"
        }
    }
    #iniciar(){
        document.addEventListener("keydown",this.#funcionTecla=(evento)=>this.#correr(evento));
        document.addEventListener("keyup",(evento)=>this.#parar(evento));

    }
}

document.addEventListener("DOMContentLoaded",()=>{

    let dino = new Dino();
})