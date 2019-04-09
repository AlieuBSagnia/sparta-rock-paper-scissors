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