var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack= 12;

var fight = function (enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    //Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle");

        //if player choses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wahts to skip
            var confirmSKIP = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSKIP) {
                window.alert(playerNAME + " has decided to skip this fight. Goodbye!");
                //subract money from playerMoney for skipping
                playerMoney = playerMoney -10;
                break;
            }
        }
            

                
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy health
        if (enemyHealth <=0) {
            window.alert (enemyName + " has died!");
            playerMoney = playerMoney +20;
            break;
        }

        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        };


        //substract the value of 'enemyAttack' from the value of 'playerHealth' and use thta result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;

        //log a resultig message to the console so we know that it worked.
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }

        //if player choses to skip
         
        
        };

}

for(var i=0; i< enemyNames.length; i++) {  
    if (playerHealth > 0 ){
        window.alert("Welcome to Robot Gladiators! Round "  + ( i + 1 ));
     

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }
    else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}









