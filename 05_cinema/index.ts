class Client{
    private fone:string;
    private id:string;

    public constructor(id:string, telefone:string){
        this.fone = telefone;
        this.id = id;
    }

    public getFone(){
        return this.fone;
    }

    public setFone(fone:string){
        this.fone = fone;
    }

    public getId(){
        return this.id;
    }

    public setId(id:string){
        this.id = id;
    }

    public toString():string{
        return  this.id + ":" + this.fone;
    }
}

class Sala{
    private cadeiras:Array<Client | null>;

    // inicializando
    public constructor(capacidade:number){
        this.cadeiras = [];
        // informo qnts assentos existem na sala do cinema
        // eu "crio" a qnt de cadeiras q tem na sala
        // para cada cadeira vazia ele mostra um null 
        for(let i = 0; i < capacidade; i++){
            this.cadeiras.push(null);
        }
    }

    // -1 se não encontrar o cliente na fileira de cadeiras
    // verificando se esse cliente ja esta no cinema
    // retorna a posicao
    // semelhante ao indexOf - uma busca por um elemento, retornando a posicão dele
    // função =>
    public buscarCliente(id:string):number{
        return this.cadeiras.findIndex(c => c != null && c.getId() == id);
        // for(let i=0; i < this.cadeiras.length; i++){
        //     let cinefolo = this.cadeiras[i];
        //     if(cinefolo != null && cinefolo.getId() == id){
        //         return i;
        //     }
        // }
        // return -1;
    }

    // fazer uma reserva de uma cedeira do cinema
    public reservar(cliente:Client, posicao:number):boolean{
        // verificando se a cedeira existe
        if(posicao < 0 || posicao > this.cadeiras.length){
            console.log("fail: essa cadeira não existe");
            return false;
        }
        // verificando se a cadeira está livre ou ocupada
        if(this.cadeiras[posicao] != null){
            console.log("fail: essa cadeira já está ocupada");
            return false;
        }
        // verificando se esse cliente já está no cineminha
        // resultado ! de -1, ele já está no cinema
        if(this.buscarCliente(cliente.getId()) != -1){
            console.log("fail: você já reservou essa cadeira");
            return false;
        }
        this.cadeiras[posicao] = cliente;
        return true;
    }

    // cancelar uma reserva de uma cedeira do cinema
    public cancelar(id:string):void{
        this.cadeiras.forEach((idc,index) => {
            if(id == idc?.getId()){
                this.cadeiras.splice(index, 1);
                return;
            }
        });
        console.log("fail: cliente nao esta no cinema");
    }

    public getCadeiras():Array<Client | null>{
        return this.cadeiras;
    }

    public toString():string{
        return " [ " + this.getCadeiras() + " ] ";
    }
}

// # caso - inicializar
let cinema:Sala = new Sala(4);
console.log(cinema.toString());
// [ ]

let cine:Sala = new Sala(5);
console.log(cine.toString());
// [ - - - - - ]

let cineminha:Sala = new Sala(4);
console.log(cineminha.toString());
//  [ - - - - ]

console.log("---");

// // # caso - reservar
cinema.reservar(new Client("davi", "3232"), 0);
cinema.reservar(new Client("joao", "3131"), 3);
console.log(cinema.toString());
// [ davi:3232 - - joao:3131 ]

cinema.reservar(new Client("rute", "3030"), 0);
console.log(cinema.toString());
// fail: cadeira ja esta ocupada

cinema.reservar(new Client("davi", "3232"), 2);
console.log(cinema.toString());
// fail: cadeira ja esta ocupada

// # caso - cancelar reserva
cinema.cancelar("davi");
console.log(cinema.toString());
// [ - - - joao:3131 ]

cinema.cancelar("julia");
console.log(cinema.toString());
// fail: cliente nao esta no cinema
// [ - - - joao:3131 ]