class Grafite{
    calibre:number;
    dureza:string;
    tamanho:number;

    constructor(calibre:number, dureza:string, tamanho:number){
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }

    desgastePorFolha():number{
        if(this.dureza == "HB"){
            return 1;
        }
        if(this.dureza == "2B"){
            return 2;
        }
        if(this.dureza == "4B"){
            return 4;
        }
        if(this.dureza == "6B"){
            return 6;
        }
        return 0;
    }

    toString():string{
        return "[" + this.calibre + ":" + this.dureza + ":" + this.tamanho + "]";
    }
}

class Lapiseira{
    // atributos
    calibre:number;
    grafite:Grafite|null;

    // construtor
    constructor(calibre:number){
        this.calibre = calibre;
        this.grafite = null;
    }

    // metodos
    inserir(grafite:Grafite):boolean{
       if(this.grafite != null){
            console.log("erro: ja existe grafite");
       }else if(this.calibre != grafite.calibre){
           console.log("fail: calibre incompativel");
       }else{
           this.grafite = grafite;
           return true;
       }
       return false;
    }
    
    remover():boolean{
        if(this.grafite != null){
            this.grafite = null;
            return true;
        }
        return false;
    }

    write(folhas:number){
        if(this.grafite != null){
            if((this.grafite.desgastePorFolha()*folhas) < this.grafite.tamanho){
                this.grafite.tamanho -= this.grafite.desgastePorFolha()*folhas;
                return;
            }if((this.grafite.desgastePorFolha()*folhas) == this.grafite.tamanho){
                console.log("warning: grafite acabou")
                this.grafite = null;
                return;
            }else{
                console.log("fail: folhas escritas completas: " + Math.trunc(this.grafite.tamanho/this.grafite.desgastePorFolha()));
                console.log("warning: grafite acabou");
                this.grafite = null;
                return;
            }
        }
        console.log("fail: nao ha grafite");    
    }

    toString():string{
        return "calibre: " + this.calibre + ", grafite: " + this.grafite;
    }

}

console.log("#__case inserindo grafites");
let lapiseira:Lapiseira = new Lapiseira(0.5);
console.log(lapiseira.toString());

lapiseira.inserir(new Grafite(0.7, "2B", 50));
console.log(lapiseira.toString());

lapiseira.inserir(new Grafite(0.5, "2B", 50));
console.log(lapiseira.toString());

console.log("")
console.log("#__case inserindo e removendo");
let lap:Lapiseira = new Lapiseira(0.3);
lap.inserir(new Grafite(0.3, "2B", 50));
console.log(lap.toString());

lap.inserir(new Grafite(0.3, "4B", 70));
console.log(lap.toString());

lap.remover();
lap.inserir(new Grafite(0.3, "4B", 70));
console.log(lap.toString());

console.log("")
console.log("#__case escrevendo 1");
let lapis:Lapiseira = new Lapiseira(0.9);
lapis.inserir(new Grafite(0.9, "4B", 4));
console.log(lapis.toString());

lapis.write(1);
console.log(lapis.toString());

lapis.inserir(new Grafite(0.9, "4B", 30));
console.log(lapis.toString());

lapis.write(6);
console.log(lapis.toString());

lapis.write(3);
console.log(lapis.toString());

console.log("")
console.log("#__case escrevendo 2");
let lapi:Lapiseira = new Lapiseira(0.9);
lapi.inserir(new Grafite(0.9, "2B", 15));
console.log(lapi.toString());

lapi.write(4);
console.log(lapi.toString());

lapi.write(4);
console.log(lapi.toString());