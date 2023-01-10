var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        };
    }

    gatherMaterials(material, quantity) {
        if (material === 'carrots') {
            this.materials.carrots += quantity;
        } else if (material === 'buttons') {
            this.materials.buttons += quantity;
        } else if (material === 'coal') {
            this.materials.coal += quantity;
        } else if (material === 'snowballs') {
            this.materials.snowballs += quantity;
        }
    }

    buildASnowman() {
        var snowman = new Snowman({carrots: this.materials.carrots, coal: this.materials.coal, buttons: this.materials.buttons, snowballs: this.materials.snowballs});
        return snowman;
    }

    placeMagicHat(snowmanObj) { 
       if(snowmanObj.canWearMagicHat()){
           return 'Woah, this snowman is coming to life!'
       } else {
        return 'I guess I didn\'t build it correctly.'
       }
    }

}

module.exports = Human;