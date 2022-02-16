// npm install readline-sync @types/readline-sync @types/node
const readline = require('readline-sync');
let read = (text: string = ""):string => readline.question(text);
let write = (x: any , line_break = "\n"): boolean => process.stdout.write("" + x + line_break);

class Tamagotchi{
  private nome:string = "";
  private age:number;
  private alive:boolean;
  private cleanMax:number;
  private diamonds:number;
  private energy:number;
  private energyMax:number;
  private hungry:number;
  private hungryMax:number;
  private clean:number;

  public constructor(nome:string, energyMax:number, hungryMax:number, cleanMax:number){
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

class IO{
  criacao():Tamagotchi {
    write("Digite o nome do seu Tamagochi: ");
    let nome = +input();
    write("Digite o max de Energia: ");
    let energyMax = +input();
    write("Digite o max de saciedade: ");
    let hungryMax = +input();
    write("Digite o max de Limpeza: ");
    let cleanMax = +input();
    let lilo:Tamagotchi = new Tamagotchi(nome, energyMax, hungryMax, cleanMax);
    return lilo;
  }
  
  ajuda(){
    write("Comandos: \n");
    write(" init <nome> <energyMax> <hungryMax> <cleanMax>: cria um novo pet");
    write(" show: mostra o tamagotchi");
    write(" brincar: faz o tamagotchi brincar\n");
    write(" comer: faz o tamagotchi comer\n");
    write(" sair: sai do programa\n");
  }

  // shell interativo
  shell() {
    let lilo = new Tamagotchi("",0,0,0);
    // loop infinito
    while(true){
      let line = input();
      // $ diz que algo vai ser lido
      write("$ ")
      let words = line.split(" ");
      // descobrir a primeira palavra que o usuario digitar
      if(words[0] === "sair"){
        break;
      }else if(words[0] === "help"){
        this.ajuda();
      }else if(words[0] === "show"){
        write("" + lilo + "\n");
      }else if(words[0] === "comer"){
        lilo.eat();
      }else if(words[0] === "brincar"){
        lilo.play();
      }else if(words[0] === "init"){
        let nome = words[1];
        let energyMax = words[2];
        let hungryMax = words[3];
        let cleanMax = words[4];
        lilo = new Tamagotchi(nome, energyMax, hungryMax, cleanMax);
      }else{
        console.log("fail: comando inválido");
      }
    }
  }
  
}

let io = new IO();
io.shell();