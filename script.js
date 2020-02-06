let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.querySelector("#door3");
let startButton = document.getElementById("start");

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;
doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying){
	doorImage1.src = openDoor1;
	playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
	if (!currentlyPlaying){
		newRound();

	}
}

function newRound (){
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = "Good Luck!";
	currentlyPlaying = true;
	randomChoreDoorGenerator();
}

const isBot = door => door.src == botDoorPath ? true : false;
const isClicked = door => door.src == closedDoorPath ? false : true;

let numClosedDoors = 3;
var openDoor1,openDoor2,openDoor3;
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor == 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if (choreDoor ==1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  }else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }

}

function playDoor(door) {
  numClosedDoors -= 1;
  if (numClosedDoors == 0 ){
  	gameOver('win');
  }else if (isBot(door)){
    gameOver();
  }
}

const gameOver = (status) => {
  if (status =="win"){
  	startButton.innerHTML="You win! Play again?";
  }else {
  	startButton.innerHTML = 'Game Over! Play again?'
  	currentlyPlaying = false;
  }
}

console.log(newRound());