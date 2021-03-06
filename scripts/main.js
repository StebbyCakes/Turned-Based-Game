
'use strict'

let Game = {
  setGameStart: function(name) {
    this.resetPlayer(name);
    this.setPreFight();
  },
  resetPlayer: function(name) {
    switch (name) {
      case "Charmander":
        player = new Player(name, 10, 100);
        break;
      case "Squirtle":
        player = new Player(name, 10, 100);
        break;
      case "Bulbasaur":
        player = new Player(name, 10, 100);
        break;

    }
    let getInterface = document.querySelector('#interface');
    getInterface.innerHTML = '<img src="./images/' + name.toLowerCase() + '.png" class="img-avatar"><section><h3>' + name + '</h3>    <div class="health-bar-player"><progress id="player-health" value="100" max="100"></progress></div><div class="health-bar-enemy"><progress id="enemy-health" value="100" max="100"></progress></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header")
    let getActions = document.querySelector(".actions")
    getHeader.innerHTML = '<p>Fight!</p>';
    getActions.innerHTML = '<a href="#" class="start" onclick="Game.setFight()">Start batte!</a>';
  },
  setFight: function() {
    let getHeader = document.querySelector(".header")
    let getActions = document.querySelector(".actions")
    let getEnemy = document.querySelector(".enemy")
    // create enemy
    let enemy00 = new Enemy("Charmeleon", 10, 100);
    let enemy01 = new Enemy("Wartortle", 10, 100);
    let enemy02 = new Enemy("Ivysaur", 10, 100);
    // generate a random enemy (3 enemies)
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
    console.log(chooseRandomEnemy)
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02
        break;
    }
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="pAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="./images/' + enemy.name.toLowerCase() + '.png" alt="' + name + '" class="img-avatar">';
  }
}

const source = document.querySelector('#char-template').innerHTML;
const template = Handlebars.compile(source);
const context = {
  player: data.stats,
}
const html = template(context);
document.querySelector('.dropdown-content').innerHTML = html;


function pAttack() {
  const enemy_health = document.getElementById("enemy-health")
  let attackValue = Math.floor(Math.random() * 10);
  if (attackValue === 0) {
    alert(`${player.name}'s attack missed!`)
  }
  if (attackValue > 8) {
    attackValue = Math.floor(attackValue * 1.5);
    enemy_health.value -= attackValue;
    alert(`${player.name} got a 'Critical Hit!'`)
    alert(`${player.name} did ${attackValue} damage!`)
  } else {
    enemy_health.value -= attackValue;
  } if (enemy_health.value <= 0){
    endGame();
  }
  eAttack();
}

function eAttack() {
  const player_health = document.getElementById("player-health")
  let attackValue = Math.floor(Math.random() * 10);
  if (attackValue === 0) {
    alert(`${enemy.name}'s attack missed!`)
  }
  if (attackValue > 8) {
    attackValue = 15;
    player_health.value -= attackValue;
    alert(`${enemy.name} got a 'Critical Hit!'`)
    alert(`${enemy.name} did ${attackValue} damage!`)
  } else {
    player_health.value -= attackValue;
  } if (player_health.value <= 0){
    endGame();
  }
}

function endGame() {
  const player_health = document.getElementById("player-health");
  const enemy_health = document.getElementById("enemy-health");
  if (player_health.value <= 0){
    alert(`You have failed! The enemy has taken over.`);
  } else if(enemy_health.value <= 0){
    alert(`Congragulations! You are the new Champion`);
  }
  window.location.reload();
  alert('Please play again!')
}




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
