var playerName = window.prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//you can also log multiple values at once like this console.log (playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth =50;
var enemyAttack= 12;
// create function

var fight = function() {
    // Alert players that they are starting the round
    window.alert( "Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to choose.");

// if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirms player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes(True), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight()again
    else {
        fight();
    }

   // if player did not chose 1 or 2 in prompt
} else {
    window.alert("You need to pick a valid option. Try again!");
  }
};
// run the function fight to start the game
fight();