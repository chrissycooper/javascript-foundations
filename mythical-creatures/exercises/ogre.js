class Ogre {
    constructor(ogreObj) {
        this.name = ogreObj.name;
        this.home = ogreObj.abode || 'Swamp';
        this.swings = 0;
    }

    encounter(humanObj) {
        humanObj.encounterCounter += 1;
        if(humanObj.encounterCounter % 3 === 0){
            this.swings++;
        } 

        if(this.swings === 2) {
            humanObj.knockedOut = true;
        }
    };

    swingAt() {
        this.swings++;
    }

    apologize(humanObj) {
        humanObj.knockedOut = false;
    }
};

module.exports = Ogre;