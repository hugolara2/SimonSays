var celeste, violeta, naranja, verde, btnEmpezar;

window.onload = () => {
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
        this.nextlevel();
    }

    inicializar(){
        btnEmpezar.classList.add('hide');
        this.nivel = 7;
        this.colores ={ 
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextlevel(){
        this.iluminarSecuencia();
    }

    numeroAColor(num){
        switch(num){
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3: 
                return 'verde';
        }
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.numeroAColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1000 *i);            
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 500);
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

}

// function Esta(constante){
//     if(constante){
//         return 1;
//     }else{
//         return 0;
//     }
// }

function empezar(){
    window.juego = new Juego();

}


