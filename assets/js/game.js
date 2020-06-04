// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {

        //Fight or Skip prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log ("playerMoney", playerMoney);
            break;
            }
        }

        //Player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Enemy attacks player
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
    }
};

var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        };
    };
    endGame();
};

var endGame = function () {
    if (playerHealth >= 0) {
        window.alert("Great job, you survived the robot onslaught! You know have a score");
    } else {
        window.alert("You've lost your robot in battle :(.");
    };

    var playAgainConfirm = window.confirm("Would you like to play again?")
        if (playAgainConfirm) {
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators! See you next time!")
        }
}

startGame();

