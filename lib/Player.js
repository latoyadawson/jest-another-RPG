const Potion = require('../lib/Potion');
const Character = require('./Character');

class  Player extends Character  {
    constructor (name = '') {
        //call parent constructor 
        super(name);
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        }
    }

    //returns the inventory array or false if empty
    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    } 
    
    addPotion(potion) {
        this.inventory.push(potion);
    }
    
    usePotion(index) {
        //splice removes item from array and returns as new array
        const potion = this.getInventory().splice(index, 1)[0];
    
        switch(potion.name) {
            case 'agility': this.agility += potion.value;
            break;
            case 'health': this.health += potion.value;
            break;
            case 'strength': this.strenght += potion.value;
            break;
        }
    }
    
};


module.exports = Player;