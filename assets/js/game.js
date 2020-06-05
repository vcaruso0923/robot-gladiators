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

        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = Math.max(0, playerMoney - 10);
            console.log ("playerMoney", playerMoney);
            break;
            }
        } else if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

            //Player attacks enemy
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // Enemy attacks player
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");
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
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over. Would you like to enter the store before the next round?")
                if (storeConfirm) {
                    shop();
                }
            }
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
        window.alert("You've lost your robot in battle.");
    };

    var playAgainConfirm = window.confirm("Would you like to play again?") 
        if (playAgainConfirm) {
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators! See you next time!")
        };
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney >= 7) {
                window.alert("You spent 7 dollars to refill your health 20 points!");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
                break;
            }

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney >= 7) {
                window.alert("You spent 7 dollars to updgrade your attack by 6!");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
                break;
            }

        case "leave":
        case "LEAVE":
        case "Leave":
            break;

        default:
            window.alert("You did not pick a valid option. Try again!");
            shop();
            break;
    }
};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (min, max + 1) + min);
  
    return value;
}

startGame();