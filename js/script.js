var celeste, violeta, naranja, verde, btnEmpezar;
const ULTIMO_NIVEL = 20;

window.onload = () => {
    celeste = document.getElementById("celeste");
    violeta = document.getElementById("violeta");
    naranja = document.getElementById("naranja");
    verde = document.getElementById("verde");
    btnEmpezar = document.getElementById("btnEmpezar");

}

class Juego{
    constructor(){
        this.inicializar = this.inicializar.bind(this);
        this.inicializar();
        this.generarSecuencia();
        setTimeout(this.nextlevel, 1000);
        
    }

    inicializar(){
        this.elegirColor = this.elegirColor.bind(this);
        this.nextlevel = this.nextlevel.bind(this);
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores ={ 
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextlevel(){
        this.sublevel = 0;
        this.iluminarSecuencia();
        this.agregarEvento();
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

    colorANumero(color){
        switch(color){
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;    
            case 'naranja':
                return 2;
            case 'verde':
                return 3;    
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
        setTimeout(() => this.apagarColor(color), 300);
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEvento(){
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    eliminarEvento(){
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    elegirColor(ev){
        const nameColor = ev.target.dataset.color;
        const numColor = this.colorANumero(nameColor);
        this.iluminarColor(nameColor);
        if(numColor === this.secuencia[this.sublevel]){
            this.sublevel++;
            if(this.sublevel === this.nivel){
                this.nivel++;
                this.eliminarEvento();
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego();
                }
                else{
                    setTimeout(this.nextlevel, 2000);
                }
            }
        }else{
            this.perdioElJuego();
        }
    }

    ganoElJuego(){
        alert('Felicidades has ganado el juego')
        location.reload();
    }

    perdioElJuego(){
        alert('Por desgracia ha perdido :c')
        location.reload();
    }

}

function empezar(){
    window.juego = new Juego();

}


