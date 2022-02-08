class Fone{
    private id: string;
    private number:string;

    public constructor(id:string, number:string){
        this.id = id;
        this.number = number;
    }

    // verifica se o número é um número de telefone válido
    // entendendo o regex - "regular expression" - pattern para descrever padroes
    // RegExp
    // .test() uma função do regex
    // geral let regex:string = "\([0-9]{2}\)([0-9]{8,9})";
    
    public eValido():boolean{
        let regex = new RegExp("\([0-9]{2}\)([0-9]{2,9})|([0-9.]{2,10})");
        return regex.test(this.number);
    }

    public validar(number:string):boolean{
        return false;
    }

    // gets e sets
    public getId(){
        return this.id;
    }

    public getNumber(){
        return this.number;
    }

    public setId(id:string){
        this.id = id;
    }

    public setNumber(number:string){
        this.number = number;
    }

    public toString():string{
        return " [" + this.getId() + ":" + this.getNumber() + "]";
    }
}

class Contato{
    protected prefix:string;
    private fones:Array<Fone>;
    private nome:string;

    public constructor(nome:string, fones:Array<Fone>){
        this.prefix = "- ";
        this.nome = nome;
        this.fones = [];
        if(this.nome == null){
            this.nome = "";
        }
    }

    public addFone(fone:Fone):void{
        if(fone.eValido()){
            this.fones.push(fone);
        }else{
            console.log("fail: número inválido!")
        }
    }

    public rmFone(index:number):void{
        if(this.fones.length >= index){
            this.fones.splice(index, 1);
        }
    }

    // gets e sets
    public getFones():Array<Fone>{
        return this.fones;
    }

    public getNome():string{
        return this.nome;
    }

    public setFones(fone:Fone):void{
        this.fones.push(fone);
    }

    public setNome(nome:string):void{
        this.nome = nome;
    }

    public toString():string{
        let aux:string = "";
        aux = this.getNome();
        for(let i = 0; i < this.fones.length; i++){
           aux = aux.concat(this.fones[i].toString().replace("[","[" + i + ":"));
        }
        return this.prefix + aux;
    }
}

// # case definindo nome
let contato = new Contato("david", []);
console.log(contato.toString());
// - david

console.log("----");

// # case inserindo telefones
contato.addFone(new Fone("oi", "88)9914"));
contato.addFone(new Fone("tim", "99"));
contato.addFone(new Fone("tim", "98"));
contato.addFone(new Fone("vivo", "83"));
console.log(contato.toString());
// - david [0:oi:88] [1:tim:99] [2:tim:98] [3:vivo:83]

console.log("----");

// # case removendo telefone por indice
contato.rmFone(2);
console.log(contato.toString());
// - david [0:oi:88] [1:tim:99] [2:vivo:83]


contato.rmFone(0);
console.log(contato.toString());
// - david [0:tim:99] [1:vivo:83]

console.log("----");

// # case validando numero de fone
contato.addFone(new Fone("tim", "9a9"));
console.log(contato.toString());
// fail: invalid number

contato.addFone(new Fone("tim", "(85)99.99"));
console.log(contato.toString());
// - david [0:tim:99] [1:vivo:83] [2:tim:(85)99.99]

// ts-node index.ts