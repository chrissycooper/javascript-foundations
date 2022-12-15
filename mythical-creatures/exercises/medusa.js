var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        if (this.statues.length < 3) {
            var newStatue = new Statue(victim.name);
            this.statues.push(newStatue);
        } else if (this.statues.length === 3) {
            var newPerson = this.statues[0];
            this.statues.splice(0, 1);
            var newStatue = new Statue(victim.name);
            this.statues.push(newStatue);
            return new Person(newPerson.name, 'relieved');
        }
    }
};

module.exports = Medusa;