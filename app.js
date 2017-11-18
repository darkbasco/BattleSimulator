
let heroHitPoints = 7
let villainHitPoints = 5
let rounds = 25
const villainName = "Jerry the Goblin"
const heroName = "Sir slicer"
let attacker
let attackee

let i = 0
let b = setInterval(() => {

  if(i > 0 && i % 2 === 0){
    attacker = heroName
    attackee = villainName
  } else {
    attacker = villainName
    attackee = heroName
  }

  if(i == 0){
    announcePlay(`${attackee} has been attacked by ${attacker}`)
  }

  if(i++ > rounds){
    announcePlay(`${attackee} LIVED!!!`)
    clearInterval(b)
  } else {
    attack()
  }
}, 1)


const attack = () => {
  let rando = Math.ceil(Math.random() * 10)
  attacks(rando)
}

const takeDamage = (attackType, damage, target) => {
  let hp
  if(target === heroName){
    heroHitPoints -= damage
    hp = heroHitPoints
  }

  if(target === villainName) {
    villainHitPoints -= damage
    hp = villainHitPoints
  }

  announcePlay(`${attackType}`)
  announcePlay(`${attackee} has ${hp} hitpoints left`)

  if(hp === 1){
      takeDamage(`${attacker} executes a spinning hammer blow and crushes ${attackee}'s bones`, 1, attackee)
  }

  if(hp === 2){
      takeDamage(`${attacker} fires a 4 foot cursed arrow from his 4 foot bow striking ${attackee} in the forehead`, 2, attackee)
  }

  if(hp <= 0){
    gameOver(attacker, attackee)
  }
}

const announcePlay = (play) => {
  console.log(`${play}`)
}


const gameOver = (winner, loser) => {
    announcePlay(`${winner} has killed ${loser}!!!`)
    clearInterval(b)
}

const attacks = (n) => {
  switch(n) {
    case 3:
        takeDamage(`${attacker} kicked ${attackee}'s nuggets`, 3, attackee)
        break;
    case 2:
        takeDamage(`${attacker} smashed ${attackee}'s noggin`, 5, attackee)
        break;
    case 8:
        takeDamage(`${attacker} boxed ${attackee}'s ears`, 3, attackee)
        break;
    case 5:
        takeDamage(`${attacker} poked ${attackee}'s peepers`, 2, attackee)
        break;
    case 7:
        takeDamage(`${attacker} pummeled ${attackee}'s kneecaps`, 1, attackee)
        break;
    default:
        takeDamage(`${attacker} missed ${attackee}.`, 0, attackee)
}
}
