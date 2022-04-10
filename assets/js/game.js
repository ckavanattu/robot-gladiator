var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
}

    promptFight = promptFight.toLowerCase();

    if (promptFIGHT === "skip") {
        var confirmSKIP = window.confirm ("Are you sure you'd like to quit");

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.playerMoney = playerInfo.money -10;
            return true;
        }
        }
        return false

    }

var fight = function (enemy) {
    while(playerInfo.health > 0 && enemy.health > 0) {
    //Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

        if (fightOrSkip()) {
            break;
        }
                
        //Subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
        var damage= randomNumber(playerInfo.attack - 3, playerInfo.attack)

        enemy.health = Math.max(0, enemy.health-damage);

        //log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        //check enemy health
        if (enemy.health <=0) {
            window.alert (enemy.name + " has died!");
            playerInfo.money = playerInfo.money +20;
            break;
        }

        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.")
        };


        //substract the value of 'enemy.attack' from the value of 'playerInfo.health' and use thta result to update the value in the 'playerInfo.health' variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health-damage);

        //log a resultig message to the console so we know that it worked.
        console.log (
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //check player health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }

        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
        }

        //if player choses to skip
         
        
        };

}

var startGame = function() {
    playerInfo.reset(); 

    for(var i=0; i< enemyInfo.length; i++) {  
        if (playerInfo.health > 0 ){
            window.alert("Welcome to Robot Gladiators! Round "  + ( i + 1 ));
            
     

            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length-1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch(shopOptionPrompt) {
        case 1:
           playerInfo.refillHealth();
            break;
        
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
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

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name");
    }

    console.log("Your robots name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack= 10;

    },
    refilHealth: function() {
        if (this.money >= 7) {
        window.alert("Refilliing players health by 20 for 7 dollars.");

        this.health += 20;
        this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }

    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars");
        this.attack +=6;
        this.money -=7;
        }
        else {
            window.alert ("You don't have enough money!");
        }
    }

};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
 

startGame();









