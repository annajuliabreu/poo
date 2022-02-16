class Cliente{
    private fone:string;
    private id:string; // id é o nome do cliente

    public constructor(public nome:string, telefone:string){
        this.fone = telefone;
        this.id = nome;
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

class SalaDeCinema{
    // private cadeiras:Array<Client | null>;
    private cadeiras:Map<number, Cliente | null>;
    // mapa de nomes que seria o id da classe cliente
    private nomes:Map<string, number>;

    // inicializando
    // informo qnts assentos existem na sala do cinema (capacidade)
    // eu "crio" a qnt de cadeiras q tem na sala
    // para cada cadeira vazia ele mostra um null ou "-"
    public constructor(public capacidade:number){
        this.cadeiras = new Map<number,Cliente | null>();
        this.nomes = new Map<string, number>();
    }

    public procurarChave(id:string):number{
        for(let [chave, cliente] of this.cadeiras){
            if(cliente?.getId() == id){
                return chave;
            }
        }
        return -1;
    }

    // fazer uma reserva de uma cedeira do cinema
    // a chave é a antiga posição do array
    public reservar(chave:number, cliente:Cliente){
        // verificando se a cadeira está livre ou ocupada
        if(this.cadeiras.has(chave)){
            console.log("fail: essa cadeira já está ocupada");
            return;
        }
        // verificando se esse cliente já está no cinema
        if(this.nomes.has(cliente.getId())){
            console.log("fail: você já reservou essa cadeira");
            return;
        }
        this.cadeiras.set(chave, cliente);
        this.nomes.set(cliente.getId(), chave);
    }

    // cancelar uma reserva de uma cedeira do cinema
    public cancelar(id:string):void{
        if(!this.nomes.has(id)){
            console.log("fail: id não encontrada");
            return;
        }
        let chave = this.nomes.get(id);
        this.cadeiras.delete(0);
        this.nomes.delete(id);
    }

    public toString(){
        let saida = "";
        for(let i = 0; i < this.capacidade; i++){
            if(this.cadeiras.has(i)){
                let cliente = this.cadeiras.get(i);
                saida += cliente?.getId() + " ";
            }else{
                saida += "- ";
            }
        }
        console.log(saida);
    }
}
// # caso - inicializar
let imax = new SalaDeCinema(4);
console.log("" + imax);

// # caso - reservar
imax.reservar(0, new Cliente("davi", "3232"));
imax.reservar(3, new Cliente("joao", "3131"));
console.log("" + imax);
// [ davi:3232 - - joao:3131 ]

imax.reservar(0, new Cliente("rute", "3030"));
console.log("" + imax);

imax.reservar(2, new Cliente("davi", "3232"));
console.log("" + imax);

// # caso - reservar
imax.cancelar("davi");
console.log("" + imax);
// [ - - - joao:3131 ]

imax.cancelar("julia");
// fail: cliente nao esta no cinema
// [ - - - joao:3131 ]


// estudando Mapas - métodos de instância:

// const contacts = new Map()
// .set() -  armazenar dados dentro do Map, define o valor para  a chave do objeto Map
// contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})

// .has() - saber se contem, retornando true or false
// contacts.has('Jessie') // true


// .get() - retorna um valor associado a chave do mapa, ou undefined s enao tiver nada
// contacts.get('Hilary') // undefined
// contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}

// .delete() - 
// contacts.delete('Raymond') // false
// contacts.delete('Jessie') // true

// .size() - comprimento do mapa
// console.log(contacts.size) // 1