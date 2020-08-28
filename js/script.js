var celeste, violeta, naranja, verde, bntEmpezar;

window.onload = function(){
    celeste = document.getElementById("celeste");
    violeta = document.getElementById("violeta");
    naranja = document.getElementById("naranja");
    verde = document.getElementById("verde");
    btnEmpezar = document.getElementById("btnEmpezar");

}

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


