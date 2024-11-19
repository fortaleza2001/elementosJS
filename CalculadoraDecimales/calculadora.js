class Calculadora{
    constructor(){
        this.teclac=document.querySelector("#clear");
        this.display=document.querySelector("#display");
        this.numeros=document.querySelectorAll(".numero")
        this.retroceso=document.querySelector("#delete");
        this.signo=document.querySelector("#signo");
        this.operacion=document.querySelectorAll(".operacion");
        this.punto=document.querySelector("#punto");

        this.operando=0;
        this.memoria=0;
        this.operador="";
        this.nuevo=true;
        this.ponerPunto=false;
        this.#inicializar();
    }

    #inicializar(){
        this.teclac.addEventListener("click",()=>this.#clear())
        this.numeros.forEach((boton)=>{
            boton.addEventListener("click",()=>this.#numero(boton))
        });
        this.retroceso.addEventListener("click",()=>this.#borrarNumero())
        this.signo.addEventListener("click",()=>this.#cambiarSigno());
        this.punto.addEventListener("click",()=>this.#agregarPunto());
        this.operacion.forEach((boton)=>{
            boton.addEventListener("click",()=>this.#operaciones(boton));
        })
    }

    #displayAct(valor){
        this.display.textContent=valor;
    }

    #calcular(operador){
        let numero;
        switch(operador){
            case "+":
                numero=this.memoria+this.operando;
                break;
            case "-":
                numero=this.memoria-this.operando;
                break;
            case "*":
                numero=this.memoria*this.operando;
                break;
            case "/":
                numero=this.memoria/this.operando;
                break;

        }
        return numero;
    }

    #clear(){
        this.operando=0;
        this.memoria=0;
        this.operador="";
        this.nuevo=true;
        this.#displayAct(this.operando);
    }

    #numero(boton){
        let textoDisplay=this.display.textContent.toString();
            if (this.ponerPunto){
                textoDisplay=textoDisplay+"."
                this.ponerPunto=false;
            }
            if (this.nuevo){
                let numero=boton.textContent
                this.operando=parseFloat(numero);
                this.#displayAct(this.operando);
                this.nuevo=false;
            }else{
                if(textoDisplay.length<10){
                    let numero=boton.textContent;
                    numero=textoDisplay+numero;
                    this.operando=parseFloat(numero);
                    this.#displayAct(this.operando);
                }
            }
    }

    #borrarNumero(){
        let numero=this.operando.toString().slice(0,-1)
        if ((numero.length==0)||(numero=="-")){
            numero=0;
        }
        this.operando=parseFloat(numero)
        this.#displayAct(this.operando);
    }
    #cambiarSigno(){
        if ((this.operando.toString().length<10) || ((this.operando<0)&&(this.operando.toString().length<11))){
            this.operando=this.operando*(-1);
            this.#displayAct(this.operando);
        }
    }

    #agregarPunto(){
        let textoDisplay=this.display.textContent.toString()
        if (!textoDisplay.includes(".")){
            this.ponerPunto=true;
        }
    }

    #operaciones(boton){
        let reiniciar=false;
            if (this.operador==""){
                this.memoria=this.operando;
                this.operador=boton.textContent;
                this.nuevo=true;
            }else{
                this.memoria=this.#calcular(this.operador);
                this.operador=boton.textContent
                if (this.memoria.toString().length<11){
                    this.#displayAct(this.memoria);
                }else{
                    let cadenas=this.memoria.toString().split(".");
                    if (cadenas[0].length<11){
                        this.memoria=parseFloat(this.memoria.toFixed(10-1-cadenas[0].length));
                        this.#displayAct(this.memoria)
                    }else{
                        this.#displayAct("Err");                   
                        reiniciar=true;
                    }
                    
                }
                this.nuevo=true;
            }
            if ((boton.textContent=="=")|| reiniciar){
                this.operador="";
                this.memoria=0;
                this.operando=0;
                this.nuevo=true;

            }
    }
    
}

document.addEventListener("DOMContentLoaded",()=>{
    const miCalculadora= new Calculadora(); 
})