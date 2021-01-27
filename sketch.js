var database;
var back_img;
var gameState = 0;
var playerCount = 0;

var allPlayers;
var player, form,game;
var player1,players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img;
var player_img;
var back;
var x,y;

function preload(){
  back_img = loadImage("images/track.jpg");
  player_img = loadImage("images/car1.png");
  fruit1_img = loadImage("images/car2.png");
  fruit2_img = loadImage("images/car3.png");
  fruit3_img = loadImage("images/car4.png");
  //fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 1) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   spawnCars();
   
  }

  function spawnCars(){

    if (frameCount % 20 === 0) {
      fruits = createSprite(random(100, 1000), random(50, 50000), 100, 100);
      fruits.velocityY = 1;
      var rand = Math.round(random(1, 3));
      switch (rand) {
        case 1:
          fruits.addImage("fruit1", fruit1_img);
          break;
        case 2:
          fruits.addImage("fruit2", fruit2_img);
          break;
        case 3:
          fruits.addImage("fruit3", fruit3_img);
          break;
        
      }
      fruitGroup.add(fruits);
    }

  }