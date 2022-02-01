class Crianca{
    private nome: string;
    private idade: number;

    public constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getIdade(){
        return this.idade;
    }

    public getNome(){
        return this.nome;
    }

    public setIdade(idade: number){
        this.idade = idade;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public toString():string{
        return this.nome + ":" + this.idade;
    }
}

class Trampolin{
    private brincando:Array<Crianca>;
    private esperando:Array<Crianca>;

    public constructor(){
        this.brincando = [];
        this.esperando = [];
    }

    private remover_crianca(nome:string, listaDeEspera:Array<Crianca>):void{

    }

    public subir(crianca:Crianca):void{
        // usar o método unshift - insere elementos no início do array
        // e retorna como resultado

        if(this.esperando != null){
            this.esperando.unshift(crianca);
        }
    }

    public entrar():void{
        // usar o método push - ele adiciona um ou mais elementos
        // no final de uma array e retorna o novo tamanho desse array :)


        // usar o método splice - ele remove itens de um array
        // enquanto adiciona um ou mais :)
        // .splice(posicao, qntd, o que eu quero inserir de novo)

        // usar o método pop - ele remove e retorna o ultimo 
        // elemento de um array :)

        // array.length - 1 => eu consigo acessar o último elemento de dado array :)
        
        this.brincando.splice(this.brincando.length - 1, 0, this.esperando[this.esperando.length - 1])
        if(this.esperando != null){
            this.esperando.pop();
        }
    }

    public sair():void{
        // usar o método splice? - ele remove itens de um array
        // enquanto adiciona um ou mais :)

        //  ou 

        // usar o método pop - ele remove e retorna o ultimo 
        // elemento de um array :)
        this.esperando.splice(this.esperando.length - 1, 0, this.brincando[this.brincando.length - 1]);
        if(this.brincando != null){
            this.brincando.splice(this.brincando.length - 1, 1);
        }
    }

    public remover(crianca:Crianca):void{
        
    }

    public toString():string{
        // mostrar a fila de crianças esperando
        return "=> " + this.esperando.join(" ") + " => " + " [ " + this.brincando.join(" ") + " ] ";
    }
}

// # caso - crianças subindo
let trampolin = new Trampolin();
trampolin.subir(new Crianca("mario", 5)); //1 da fila de espera [0]
trampolin.subir(new Crianca("livia", 4)); 
trampolin.subir(new Crianca("luana", 3)); // última da fila de espera [array.lenght - 1]
console.log(trampolin.toString());
// => luana:3 livia:4 mario:5 => [ ]

console.log("---");

// tirar o mario da lista esperando e colocar ele na lista de brincando

// # caso - crianças entrando
trampolin.entrar();
console.log(trampolin.toString());
// //=> luana:3 livia:4 => [ mario:5 ]
trampolin.entrar();
console.log(trampolin.toString());
// //=> luana:3 => [ livia:4 mario:5 ]

console.log("---");

// // # caso - crianças saindo
trampolin.sair();
console.log(trampolin.toString());
//=> mario:5 luana:3 => [ livia:4 ]


// -------  anotações --------
// metodos de remover elementos do array: 
// .pop() - fim
// .shift() - inicio 
// .splice() - add ou remove indice especifico
// .filter() - programado(?)