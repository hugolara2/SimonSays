const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego{
    constructor(){
        this.inicializar();
        this.generarSecuencia();
    }

    inicializar(){
        btnEmpezar.classList.add('hide');
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }
}

function Esta(constante){
    if(constante){
        return 1;
    }else{
        return 0;
    }
}

function empezar(){
    window.juego = new Juego();

}