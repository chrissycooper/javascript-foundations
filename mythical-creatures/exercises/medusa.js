var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        //take person class and make them a statue before adding them to an array?
        //adding that victim to the statues array
        //get the length of medusa.statues
        var newStatue = new Statue(victim.name);
        this.statues.push(newStatue);
    }
};

module.exports = Medusa;