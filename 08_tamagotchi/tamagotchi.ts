class Pet{
    private age:number;
    private alive:boolean;
    private cleanMax:number;
    private diamonds:number;
    private energy:number;
    private energyMax:number;
    private hungry:number;
    private hungryMax:number;
    private clean:number;

    public constructor(energyMax:number, hungryMax:number, cleanMax:number){
        this.energy = energyMax;
        this.hungry = hungryMax;
        this.clean = cleanMax;
        this.energyMax = energyMax;
        this.hungryMax = hungryMax;
        this.cleanMax = cleanMax;
        this.diamonds = 0;
        this.age = 0;
        this.alive = true;
    }

    public getClean():number{
        return this.clean;
    }

    public getCleanMax():number{
        return this.cleanMax;
    }

    public getEnergy():number{
        return this.energy;
    }

    public getEnergyMax():number{
        return this.energyMax;
    }

    public getHungry():number{
        return this.hungry;
    }

    public getHungryMax():number{
        return this.hungryMax;
    }

    public getDiamonds():number{
        return this.diamonds;
    }

    public getAge():number{
        return this.age;
    }

    public setAge(value:number){
        this.age = value;
    }

    public setClean(value:number){
        if(value <= 0){
            this.clean = 0;
            console.log("fail: pet morreu de sujeira");
            this.alive = false;
            return;
        }else if(value > this.cleanMax){
            this.clean = this.cleanMax;
            return;
        }else{
            this.clean = value;
            return;
        }
    }
        
    public setEnergy(value:number):void{
        if(value <= 0){
            this.energy = 0;
            console.log("fail: pet morreu de fraqueza");
            this.alive = false;
            return;
        }else if(value > this.energyMax){
            this.energy = this.energyMax;
            return;
        }else{
            this.energy = value;
            return;
        }
    }

    public setHungry(value:number):void{
        if(value <= 0){
            this.hungry = 0;
            this.alive = false;
            console.log("fail: pet morreu de fome");
            return;
        }else if(value > this.hungryMax){
            this.hungry = this.hungryMax;
            return;
        }else{
            this.hungry = value;
            return;
        }
    }

    public eat():void{
        if(!this.testAlive()){
            return;
        }
        this.setEnergy(this.getEnergy() - 1);
        this.setHungry(this.getHungry() + 4);
        this.setClean(this.getClean() - 2);
        this.diamonds += 0;
        this.age += 1;
    }

    public play():void{
        if(!this.testAlive()){
            return;
        }
        this.setEnergy(this.getEnergy() - 2);
        this.setHungry(this.getHungry() - 1);
        this.setClean(this.getClean() - 3);
        this.diamonds += 1;
        this.age += 1;
    }

    public banho():void{
        if(!this.testAlive()){
            return;
        }
        this.setEnergy(this.getEnergy() - 3);
        this.setHungry(this.getHungry() - 1);
        this.setClean(this.getCleanMax());
        this.diamonds -= 0;
        this.age += 2;
    }

    public sleep():void{
        let turnos = this.energyMax - this.energy;
        if(this.testAlive()){
            if(this.energy > (this.energyMax - 5)){
            console.log("fail: pet nao esta com sono");
            return;
            }
        }
        this.setEnergy(this.getEnergyMax());
        this.setHungry(this.getHungry() - 1);
        this.age += turnos;
        return;
    }

    public testAlive():boolean{
        if(!this.alive){
            console.log("fail: pet esta morto");
            return false;
        }
        return true;
    }

    public toString():string{
        return "E:" + this.energy + "/" + this.energyMax + ", " + "S:" + this.hungry + "/" + this.hungryMax + ", " + "L:" + this.clean + "/" + this.cleanMax + ", " + "D:" + this.diamonds + ", " + "I:" + this.age;
    }
}

// case inicio
let pet:Pet = new Pet(20,10,15);
console.log(pet.toString());

// case exemplo 1 - bricar, comer, dormir, banhar, dormir sem sono, morrer
console.log("");
let pett:Pet = new Pet(10,20,50);
console.log(pett.toString());

console.log("");
let petti:Pet = new Pet(20,10,15);
petti.play();
console.log(petti.toString());
petti.play();
console.log(petti.toString());
petti.eat();
console.log(petti.toString());
petti.sleep();
console.log(petti.toString());
petti.banho();
console.log(petti.toString());
petti.sleep();
console.log(petti.toString());

console.log("");
petti.play();
petti.play();
petti.play();
petti.play();
console.log(petti.toString());
petti.play();
console.log(petti.toString());
petti.eat();
console.log(petti.toString());
petti.banho();
console.log(petti.toString());
petti.sleep();
console.log(petti.toString());

// case exemplo 2
console.log("");
let bob:Pet = new Pet(5,10,10);
bob.play();
bob.play();
bob.play();
console.log(bob.toString());
bob.play();
console.log(bob.toString());

// case exemplo 3
console.log("");
let cat:Pet = new Pet(10,3,10);
cat.play();
cat.play();
cat.play();
console.log(cat.toString());
cat.play();
console.log(cat.toString());