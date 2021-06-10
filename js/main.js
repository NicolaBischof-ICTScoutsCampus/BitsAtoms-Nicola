/**
     * Created by Nicola Bischof on 10/06/2021
     * https://github.com/NicolaBischof-ICTScoutsCampus
*/

var speed = 4.5;
var current_rotation = 0;
var x = 120; 
var y = 130;

const controller = {  
    'ArrowLeft':  {pressed:false,  state: 0},  
    'ArrowRight': {pressed: false, state: 1},  
    'Space':      {pressed: false, state: 2}
};

document.addEventListener('DOMContentLoaded', () =>{
    this.spaceship = document.getElementById('spaceship');
    window.requestAnimationFrame(animate);
}, false);

document.addEventListener('keydown', (key) => {
    switch(key.code){
      case 'ArrowLeft': controller.ArrowLeft.pressed = true;
      break;
      case 'ArrowRight': controller.ArrowRight.pressed = true;
      break;
      case 'Space': controller.Space.pressed = true;
      break;
    }
});

document.addEventListener('keyup', (key) => {
    switch(key.code){
      case 'ArrowLeft': controller.ArrowLeft.pressed = false;
      break;
      case 'ArrowRight': controller.ArrowRight.pressed = false;
      break;
      case 'Space': controller.Space.pressed = false;
      break;
    }
});

const executeMoves = () => {  
    Object.keys(controller).forEach(key=> {   
        if(controller[key].pressed){
            switch(controller[key].state){
                case 0: turnLeft();     
                break; 
                case 1: turnRight();
                break;
                case 2:  giveGas();                   
                break;
            }
        } 
    });
};

function giveGas(){
    x += speed * Math.cos((current_rotation+270%360) * Math.PI / 180);
    y += speed * Math.sin((current_rotation+270%360) * Math.PI / 180);
    this.spaceship.style.left = x+'px';
    this.spaceship.style.top = y+'px';
}

function turnLeft(){
    current_rotation-=5;   
    this.spaceship.style.transform = 'rotateZ('+current_rotation+'deg)';
}

function turnRight(){
    current_rotation+=5;   
    this.spaceship.style.transform = 'rotateZ('+current_rotation+'deg)';
}

const animate = () => {
    executeMoves();
    window.requestAnimationFrame(animate);
};