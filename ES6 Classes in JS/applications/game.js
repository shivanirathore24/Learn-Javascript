/*
GAME
Suppose you are building a game that involves different types of characters, such as warriors, mages, and archers. Each character has a set of common properties, such as health, strength, and agility, as well as unique properties, such as weapon type, spell type, and arrow type. You want to use constructor functions to create these characters and their properties.

Objective:
Create a constructor function called Character that takes has the following properties:
   - health (number)
   - strength (number)
   - agility (number)
Create a constructor function for Warrior that inherit Character and has additional property as weaponType(String)
Create a constructor function for Mage that inherits Character and have additional property as spellType(String).
Create a constructor function for Archer
that inherits Character and have additional property as arrowType(String).
Create a new constructor function called 
Hero that inherits from both Warrior and Mage and has its own unique property specialAbility(String). 
The Hero constructor should take in all the properties of Warrior, Mage, and Character as arguments and set them accordingly.
Create a new constructor function called Enemy that inherits from Character and has its own unique property enemyType(String). 

Note:
The function will be called passing all the parameter required.
The constructor function should be able to use the inherited constructor function for accessing and setting the 
values passed as the parameters.


Usage:
let warrior1 = new Warrior(100, 50, 30, "sword");
let mage1 = new Mage(80, 20, 50, "fireball");
let archer1 = new Archer(90, 40, 40, "poison");
let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
let enemy1 = new Enemy(200, 80, 20, "goblin");
*/

function main() {
  function Character(health, strength, agility) {
    this.health = health;
    this.strength = strength;
    this.agility = agility;
  }

  function Warrior(health, strength, agility, weaponType) {
    Character.call(this, health, strength, agility);
    this.weaponType = weaponType;
  }

  function Mage(health, strength, agility, spellType) {
    Character.call(this, health, strength, agility);
    this.spellType = spellType;
  }

  function Archer(health, strength, agility, arrowType) {
    Character.call(this, health, strength, agility);
    this.arrowType = arrowType;
  }

  function Hero(
    health,
    strength,
    agility,
    weaponType,
    spellType,
    specialAbility
  ) {
    Warrior.call(this, health, strength, agility, weaponType);
    Mage.call(this, health, strength, agility, spellType);
    this.specialAbility = specialAbility;
  }

  function Enemy(health, strength, agility, enemyType) {
    Character.call(this, health, strength, agility);
    this.enemyType = enemyType;
  }

  let warrior1 = new Warrior(100, 50, 30, "sword");
  let mage1 = new Mage(80, 20, 50, "fireball");
  let archer1 = new Archer(90, 40, 40, "poison");
  let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
  let enemy1 = new Enemy(200, 80, 20, "goblin");

  console.log(warrior1);
  console.log(mage1);
  console.log(archer1);
  console.log(hero1);
  console.log(enemy1);
  return { Character, Hero, Warrior, Mage, Archer, Enemy };
}

main();
