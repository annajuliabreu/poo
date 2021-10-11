class Entity{
    // atributos
    x:number;
    y:number;
    step:number;
    image:p5.Image;

    //          parametros
    constructor(x:number, y:number, step:number,image:p5.Image){
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }

    // metodos
    draw(){
        image(this.image, this.x*this.step, this.y*this.step, this.step, this.step);
    }
}
class Board{
    nl:number;
    nc:number;
    step:number;
    background:p5.Image;

    constructor(nc:number, nl:number, step:number, background:p5.Image){
        this.nl = nl;
        this.nc = nc;
        this.step = step;
        this.background = background;
    }

    draw():void{
        image(this.background, 0, 0, this.nc*this.step, this.nl*this.step);
        for(let x=0; x<this.nc; x++){
            for(let y=0; y<this.nl;y++){
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x*this.step,y*this.step,this.step,this.step);            }
        }
    }
}

let x:number = 2;
let y:number = 2;
let step:number = 1;
// let image:p5.Image;
let fera_img: p5.Image;
let bela_img: p5.Image;
let board_img: p5.Image;
let rosa_img: p5.Image;

let fera:Entity;
let bela:Entity;
let rosa:Entity;
let board:Board;

function loadImg(path:string):p5.Image{
    return loadImage(
        path, 
        () => console.log("Loading " + path + " ok"),
        () => console.log("Loading " + path + " error")
    );
}

function preload(){
    fera_img = loadImg('../sketch/fera.png');
    bela_img = loadImg('../sketch/bela.png');
    board_img = loadImg('../sketch/bkg.jpg');
    rosa_img = loadImg('../sketch/rosa.png');
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        fera.x--;
    }else if(keyCode === RIGHT_ARROW){
        fera.x++;
    }else if(keyCode === UP_ARROW){
        fera.y--;
    }else if(keyCode === DOWN_ARROW){
        fera.y++;
    }

    if(keyCode === "A".charCodeAt(0)){
        bela.x--;
    }else if(keyCode === "D".charCodeAt(0)){
        bela.x++;
    }else if(keyCode === "W".charCodeAt(0)){
        bela.y--;
    }else if(keyCode === "S".charCodeAt(0)){
        bela.y++;
    }

    if(keyCode === LEFT_ARROW){
        rosa.x--;
    }else if(keyCode === RIGHT_ARROW){
        rosa.x++;
    }else if(keyCode === UP_ARROW){
        rosa.y--;
    }else if(keyCode === DOWN_ARROW){
        rosa.y++;
    }
}

function setup(){
    let size = 100;
    rosa = new Entity(1,2,size,rosa_img);
    fera = new Entity(2,2,size,fera_img);
    bela = new Entity(1,1,size,bela_img);
    board = new Board(4,4,size,board_img);
    createCanvas(board.nc*size,board.nl*size);
}

function draw(){
    board.draw();
    fera.draw();
    bela.draw();
    rosa.draw();
    // image(wolf_img, x*step, y*step, step, step);
}

/*
estudo:
1. fazer com que o lobo nao saia da grade;
2. a bela poderia dá loop (obj. flor, fazer com que 
o lobo nao passe por ela)
3. obj. do tipo "buraco", para caso o lobo caia, 
nao consiga sair
4. criar entidaes com img e brincar com a lógica

*/