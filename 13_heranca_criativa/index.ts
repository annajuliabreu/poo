import { timeStamp } from "console";

class Pedido{
    private nomeCliente:string;
    private itensConsumidos:Array<Prato>

    public constructor(nomeCliente:string, itensConsumidos:Array<Prato>){
        this.nomeCliente = nomeCliente;
        this.itensConsumidos = itensConsumidos;
    }

    public inserirItens(prato:Prato){
        this.itensConsumidos.push(prato);
    }

    public verItensConsumidos(){
        for(var i = 0; i < this.itensConsumidos.length; i++){
            console.log(this.itensConsumidos[i].getNome() + " R$"+ this.itensConsumidos[i].getPreco() + ",00 | " + this.itensConsumidos[i].getPeso() + " g");
        }
    }

    public totalItensConsumidos(){
        let somaItens:number = 0;
        for(var i = 0; i < this.itensConsumidos.length; i++){
            somaItens += this.itensConsumidos[i].getPreco();
        }
        console.log(" \n R$" + somaItens + ",00");
    }

    public calcularTroco(valorRecebido:number){
        let somaItens:number = 0;
        for(var i = 0; i < this.itensConsumidos.length; i++){
            somaItens += this.itensConsumidos[i].getPreco();
        }
        if(valorRecebido > somaItens){
            let troco = valorRecebido - somaItens;
            console.log("\n R$ " + troco + ",00");
        }else{
            console.log("fail: valor insuficiente!");
        }
    }

    

    public getNomeCliente(){
        return this.nomeCliente;
    }

    public getItensConsumidos(){
        return this.itensConsumidos;
    }

    public setNome(nome:string){
        this.nomeCliente = nome;
    }

    public setItensConsumidos(prato:Array<Prato>){
        this.itensConsumidos = prato;
    }

    public toString():string{
        return " nome do cliente: " + this.getNomeCliente() + "\n itens consumidos: " + this.getItensConsumidos();
    }
}

// superclasse - a classe que está sendo herdada
// as subclasses herdam os métodos
class Prato{
    private nome:string; //frito ou assado
    private preco:number;
    private dataDeValidade:string;
    private peso:number;

    public constructor(nome:string, preco:number, dataDeValidade:string, peso:number){
        this.nome = nome;
        this.preco = preco;
        this.dataDeValidade = dataDeValidade;
        this.peso = peso;
    }

    public getNome(){
        return this.nome;
    }

    public getPreco(){
        return this.preco;
    }

    public getDataDeValidade(){
        return this.dataDeValidade;
    }

    public getPeso(){
        return this.peso;
    }

    public setNome(nome:string){
        this.nome = nome;
    }

    public setPreco(preco:number){
        this.preco = preco;
    }

    public setDataDeValidade(dataDeValidade:string){
        this.dataDeValidade = dataDeValidade;
    }

    public setPeso(peso:number){
        this.peso = peso;
    }

    public toString():string{
        return this.getNome() + "\n preço: " +  this.getPreco() + "\n data de validade: " + this.getDataDeValidade() + "\n peso: " + this.getPeso() + "g";
    }
}

// // subclasse - a classe que herda
class Pizza extends Prato{
    private molho:string;
    private recheio:string;
    private borda:string;

    public constructor(molho:string, recheio:string, borda:string, nome:string, preco:number, dataDeValidade:string, peso:number){
        super(nome, preco, dataDeValidade, peso);
        this.molho = molho;
        this.recheio = recheio;
        this.borda = borda;
    }

    public calcularPreco():void{

    }

    public toString():string{
        return "\n nome: " + this.getNome() + " \n preço: " + this.getPreco() + " \n data de validade: " + this.getDataDeValidade() + "\n molho: " + this.molho + "\n recheio: " + this.recheio + "\n borda: " + this.borda;
    }
}

// subclasse - a classe que herda
class Lanche extends Prato{
    private pao:string;
    private recheio:string;
    private molho:string;

    public constructor(pao:string, recheio:string, molho:string, nome:string, preco:number, dataDeValidade:string, peso:number){
        super(nome, preco, dataDeValidade, peso);
        this.pao = pao;
        this.recheio = recheio;
        this.molho = molho;
    }

    public calcularPreco():void{
        
    }

    public toString():string{
        return "\n nome: " + this.getNome() + " \n preço: " + this.getPreco() + " \n data de validade: " + this.getDataDeValidade() + " \n peso: " + this.getPeso() + " \n pão: " + this.pao + "\n recheio: " + this.recheio + "\n molho: " + this.molho;
    }

}

// subclasse - a classe que herda
class Salgadinho extends Prato{
    private tipo:string;
    private recheio:string;
    private massa:string;

    public constructor(tipo:string, recheio:string, massa:string, nome:string, preco:number, dataDeValidade:string, peso:number){
        super(nome, preco, dataDeValidade, peso);
        this.tipo = tipo;
        this.recheio = recheio;
        this.massa = massa;
    }

    public calcularPreco():void{

    }

    public toString():string{
        return " \n tipo: " + this.tipo + "\n nome: " + this.getNome() + " \n preço: " + this.getPreco() + " \n data de validade: " + this.getDataDeValidade() + "\n recheio: " + this.recheio + "\n molho: " + this.massa;
    }
}

function cardapio(){
    console.log(" \n |---- CARDAPIO -----|");

    // cardapio de pizzas
    let p1 = new Pizza("barbecue", "calabresa", "chocolate", "pizza de calabresa", 20, "13/02/2022", 250);
    let p2 = new Pizza("mostarda", "frango", "catupiry", "pizza de frango", 21, "13/02/2022", 250);
    let p3 = new Pizza("chipotle", "tomate e queijo", "cheddar", "pizza de margerita", 22, "13/02/2022", 250);

    console.log("\n |----- PIZZAS ------|");
    console.log(p1.toString());
    console.log(p2.toString());
    console.log(p3.toString());

    // cardapio lanche e salgadinho
    let l1 = new Lanche("brioche", "carne de hamburger", "cheddar", "hamburger double cheddar", 15, "13/02/2022", 250);
    let s1 = new Salgadinho("frito", "frango com catupiry", "crocante", "coxinha", 5, "13/02/2022", 150);

    console.log("\n |----- LANCHE ------|");
    console.log(l1.toString());

    console.log("\n |----- SALGADO -----|");
    console.log(s1.toString());

    console.log("\n |- FACA SEU PEDIDO -|");
}

function main(){
    console.log("\n |--- SEU PEDIDO ----|");

    //  fazendo um pedido de um cliente
    let pedido = new Pedido("adalberto", [new Prato("camarao ao alho e óleo", 20, "13/03", 500)]);
    console.log(pedido.toString());

    pedido.inserirItens(new Pizza("barbecue", "calabresa", "chocolate", "pizza de calabresa", 20, "13/02/2022", 250));
    pedido.inserirItens(new Lanche("brioche", "carne de hamburger", "cheddar", "hamburger double cheddar", 15, "13/02/2022", 250));
    console.log(pedido.getItensConsumidos());

    console.log("\n |-------------------|");

    console.log(" \n |.....Nota Fiscal.....|");
    console.log("\n |..Itens Consumidos:..|");
    pedido.verItensConsumidos();

    console.log("\n |.....Valor Total:....|");
    pedido.totalItensConsumidos();

    console.log("\n |........Troco:.......|");
    pedido.calcularTroco(60);

    console.log("\n |.Obg e volte sempre!.|");
}

cardapio();
main();