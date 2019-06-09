var score = 0 
var botscore = 0 
var round = 0 

while (score != 5 && botscore != 5) { 

var userChoice = prompt("[1] Rock [2] Paper [3] Scissors"); 

switch (userChoice) { 
  case '1': 
    choice = 1; 
    break; 
  case '2': 
    choice = 2; 
    break; 
  case '3': 
    choice = 3; 
    break; 
} 

switch (choice) { 
    case 1: 
        alert("you : Rock"); 
    break; 
    case 2: 
        alert("you : Paper"); 
    break; 
    case 3: 
        alert("you : Scissors"); 
    break; 
} 

var botChoice = Math.floor(Math.random() * 3)+1;

switch (botChoice) { 
    case 1: 
        alert("bot : Rock"); 
    break; 
    case 2: 
        alert("bot : Paper"); 
    break; 
    case 3: 
        alert("bot : Scissors"); 
    break; 
}

if (choice==botChoice) {alert("draw");} 

else if (choice==1 && botChoice==3 || choice==2 && botChoice==1 || choice==3 && botChoice==2) {
    alert("you win! :)");score = score + 1;} 

else {
    alert("you lose... :(");botscore = botscore + 1;} 

alert("Your score is " + score + " and the bot score is: " + botscore); 

var round = round + 1 
} 

if (score > botscore) {
    alert("You win the run in " + round +" rounds ! :)");} 
else {
    alert("You lose the run in " + round +" rounds... :(");} 
