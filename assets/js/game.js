var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roberto"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Fight or Skip prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //Log response to promptFight
    console.log(promptFight);

    // Player chooses to fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //Player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

    // Enemy attacks player
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
    // Player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight!");
    playerMoney = playerMoney - 2;
    console.log (playerMoney);
    } else {
        fight();
    }
    // Player enters invalid skip/fight
} else {
    window.alert("You need to pick a valid option. Try again!");
}
};

fight();