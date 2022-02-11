class Phone{
    private id:string;
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
    // aceitando 0123456789().
    public eValido():boolean{
        let regex = new RegExp("\([0-9]{2}\)([0-9]{2,9})|([0-9.]{2,10})");
        return regex.test(this.number);
    }

    public validar(number:string):boolean{
        return false;
    }

    // gets e set
    public getId():string{
        return this.id;
    }

    public getNumber():string{
        return this.number;
    }

    public setId(number:string){
        this.id = number;
    }

    public setNumber(number:string){
        this.number = number;
    }

    public toString():string{
        return " [" + this.getId() + ":" + this.getNumber() + "]";
    }
}

class Contatinho{
    // o contato tem um nome e uma lista de telefones
    // exemplo: a Anna tem o número da Tim 144
    protected prefix: string;
    private phone:Array<Phone>;
    private nome:string;

    public constructor(nome:string, phone:Array<Phone>){
        this.prefix = "";
        this.nome = nome;
        this.phone = phone;
    }

    // adicionar os números de telefone desse contato
    public addPhone(phone:Phone):void{
        if(this.phone != null){
            this.phone.push(phone);
        }
    }

    // remover um número de telefone do conttato, usando o indice
    public rmPhone(index:number):void{
        if(this.phone.length >= index){
            this.phone.splice(index, 1);
        }
    }

    // gets e sets
    public getPhones():Array<Phone>{
        return this.phone;
    }

    public getNome():string{
        return this.nome;
    }

    public setPhones(phones:Array<Phone>):void{
        this.phone = phones;
    }

    public setNome(nome:string){
        this.nome = nome;
    }

    // toString formatado para aparecer dessa forma:
    // - david [0:oi:88] [1:tim:99] [2:tim:98] [3:vivo:83]
    // método concat() - une dois arrays e retorna um novo array.
    // p/ quando você precisar criar um novo array unindo 2 ou mais elementos. 
    // O concact retorna um novo array, realizando uma cópia dos itens.
    public toString():string{
        let aux:string = "";
        aux = this.getNome();
        for(let i = 0; i < this.phone.length; i++){
           aux = aux.concat(this.phone[i].toString().replace("[","[" + i + ":"));
        }
        return this.prefix + aux + " \n";
    }
}

class Agenda{
    // a lista de contatos da agenda de um contato
    // a agenda possui vários contatos e cada contato possui vários telefones
    private contato:Array<Contatinho>;

    public constructor(){
        this.contato = [];
    }

    // retorna a posição do contato com 
    // esse nome no vetor ou -1 se não existir.
    private encontrarPeloNome(nome:string):number{
        return 0;
    }

    //se nenhum contato existir com esse nome, adicione
    //se ja existir, faça o merge adicionando os telefones
    //se tiver adicionado um novo contato, ordene a lista para ficar em ordem alfabética
    public addContato(nome:string, phone:Array<Phone>):void{
        let adiciona = true;
        for(let i = 0; i < this.contato.length; i++){
            if(this.contato[i].getNome() == nome){
                adiciona = false;
                this.contato[i].setPhones(this.contato[i].getPhones().concat(phone));
            }
        }
        if(adiciona){
        this.contato.push(new Contatinho(nome, phone));
        this.contato.sort((a,b) => (a.getNome() < b.getNome()? - 1:1));
        }
    }

    // retorna o objeto contato com esse nome ou null se não existir
    // utilize o método findPos
    public encontrarContato(name:string):Contatinho{
        return new Contatinho("", []);
    }


    // utilizar o método findPos
    public rmContato(nome:string):void{
       for(let i = 0; i < this.contato.length; i++){
           if(this.contato[i].getNome().match(nome)){
            this.contato.splice(i,1);
           }
       }
    }

    public rmPhone(nome:string, index:number):void{
        for(let i = 0; i < this.contato.length; i++){
            if(this.contato[i].getNome() == nome){
                this.contato[i].rmPhone(index);
            }
        }
    }

    public getContato():Array<Contatinho>{
        return this.contato;
    }
    //Monte uma lista auxiliar procurando no .toString() de cada contato
    //se ele possui a substring procurada
    public pesquisar(pattern:string):Array<Contatinho>{
        // encontrar pelo nome
        let aux:Array<Contatinho> = [];
        for(let i = 0; i < this.contato.length; i++){
            if(this.contato[i].getNome().match(pattern)){
                aux = aux.concat(this.contato[i]);
            }else{
                // encontrar pelo numero
                for(let j = 0; j < this.contato[i].getPhones().length; j++){
                    if(this.contato[i].getPhones()[j].getNumber().match(pattern)){
                        aux = aux.concat(this.contato[i]);
                        break;
                    }
                }
            }
        }
        return aux;
    }

    public toString():string{
        let aux:string = "";
        for(let i = 0; i < this.contato.length; i++){
            aux = aux.concat("- " + this.contato[i].toString() + " \n");
        }
        return  aux;
    }
}

let agenda:Agenda = new Agenda();
agenda.addContato("eva", [new Phone("oi", "8585"), new Phone("claro", "9999")]);
agenda.addContato("ana", [new Phone("tim", "3434")]);
agenda.addContato("bia", [new Phone("vivo", "5454")]);
console.log(agenda.toString());

// # case - adicionado telefones ao contato
agenda.addContato("ana", [new Phone("casa", "4567"), new Phone("oi", "8754")]);
console.log(agenda.toString());

// - ana [0:tim:3434] [1:cas:4567] [2:oio:8754]
// - bia [0:viv:5454]
// - eva [0:oio:8585] [1:cla:9999]

console.log("---");

// # case - removendo telefone
agenda.rmPhone("ana", 0);
console.log(agenda.toString());

// - ana [0:casa:4567] [1:oi:8754]
// - bia [0:vivo:5454]
// - eva [0:oi:8585] [1:claro:9999]

console.log("---");

// # case - removendo contato da agenda
agenda.rmContato("bia");
// - ana [0:cas:4567] [1:oio:8754]
// - eva [0:oio:8585] [1:cla:9999]

agenda.addContato("ava", [new Phone("tim", "5454")]);
agenda.addContato("rui", [new Phone("vivo", "2222"), new Phone("oi", "9991")]);
agenda.addContato("zac", [new Phone("rec", "3131")]);
console.log(agenda.toString());

// - ana [0:cas:4567] [1:oio:8754]
// - ava [0:tim:5454]
// - eva [0:oio:8585] [1:cla:9999]
// - rui [0:viv:2222] [1:oio:9991]
// - zac [0:rec:3131]

console.log("---");

// # case - busca por padrão
console.log(agenda.pesquisar("va").toString());
// - ava [0:tim:5454]
// - eva [0:oio:8585] [1:cla:9999]

console.log(agenda.pesquisar("999").toString());
// - eva [0:oio:8585] [1:cla:9999]
// - rui [0:viv:2222] [1:oio:9991]