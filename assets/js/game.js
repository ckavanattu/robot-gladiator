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
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subract money from playerMoney for skipping
                playerMoney = playerMoney = Math.max(0, playerMoney - 10);
                break;
            }
        }
            

                
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        var damage= randomNumber(playerAttack - 3, playerAttack)

        enemyHealth = Math.max(0, enemyHealth-damage);

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
        playerHealth = Math.max(0, playerHealth-enemyAttack);

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

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i=0; i< enemyNames.length; i++) {  
        if (playerHealth > 0 ){
            window.alert("Welcome to Robot Gladiators! Round "  + ( i + 1 ));
            
     

            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40,60);
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length-1) {
                var storeConfirm = window.confirm("the fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            };
        }
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt( "Would you like to REfill your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice.");

    switch(shopOptionPrompt) {
        case"REFILL":
        case "refill":
           if (playerMoney >= 7){ 
            window.alert("Refilling players health by 20 for 7 dollars.");

            playerAttackHealth = playerHealth+20;
            playerMoney= playerMoney - 7;
           }
           else {
               window.alert ("You don't have enough money");
           }
            break;
        
        case"UPGRADE":
        case"upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading players attack by 6 for 7 dollars");

            playerAttack= playerAttack + 6;
            playerMoney= playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money");
            }
            break;
        case"LEAVE":
        case"leave":
            window.alert("Leaving the Store.");
            
            break;
        default:
            window.alert("You did not pick a valid option. Try Again.");
            shop();
            break;

    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min+1) + min);

    return value;
};
 

startGame();









