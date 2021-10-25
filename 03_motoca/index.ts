// import{ Person } from './person';
// import { Motorcycle } from './motorcycle';

class Motorcycle{
    person:Person|null;
    power:number;
    time:number;


    constructor(power:number){
        this.person = null;
        this.power = power;
        this.time = 0;
    }

    public buy(time:number):void{
        if(this.time >= 0){
            this.time += time;
        }
    }

    public drive(time:number):void{
        if(this.person != null){
            if(this.person.age <= 10 && time > 0){
                this.time -= time;
            }if(this.person.age > 10){
            console.log("fail: muito grande para andar de motoca")
        }else{
            console.log("fail: andou " + this.time*(-1) + " min e acabou o tempo");
        }
    }

    public honk():string|void{
        if(this.person != null){
        for(let i = 0; i < 0; i++){
            let res = "p";
            res += "e";
            console.log(res + "m");
        }
        console.log("fail: moto vazia");
    }

    public in(person:Person):boolean{
        if(this.person != null){
            console.log("erro: ja tem uma kid");
            return false;
        }else{
            this.person = person;
            return true;
        }
    }

    public out():boolean{
        if(this.person != null){
            this.person = null;
            return true;
        }else{
            console.log("fail: moto vazia");
            return false;
        }
    }

    public toString():string{
        return "pessoa: " + this.power + " minutos: " + this.time + " pessoa: " + this.person;
    }
}

class Person{
    age:number;
    name:string;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    toString():string{
        return "nome: " + this.name + " idade: " + this.age;
    }
}

let moto:Motorcycle = new Motorcycle(1);
console.log(moto);
moto.honk();

moto.in(new Person("marcos",4));
console.log(moto);
moto.honk();
console.log(moto);

moto.in(new Person("marisa",2));
console.log(moto);

let bike:Motorcycle = new Motorcycle(7);
bike.in(new Person("heitor",6));
console.log(bike);

bike.out();
console.log(bike);
bike.out();
console.log(bike);

bike.in(new Person("suzana", 8));
console.log(bike);

let honda:Motorcycle = new Motorcycle(7);
honda.buy(20);
honda.in(new Person("andreina", 23));
honda.drive(15);
console.log(honda);

let bmw:Motorcycle = new Motorcycle(7);
bmw.buy(20);
bmw.in(new Person("andreina", 6));
bmw.drive(15);
console.log(bmw);
bmw.drive(10);