class Magician {
    constructor(magObj) {
        this.name = `The Great ${magObj.name}`;
        this.assistant = magObj.assistant;
        this.favoriteAccessory = magObj.clothing || 'top hat';
        this.confidencePercentage = 10; 
        this.showStopperCounter = 0;
    };

    performIncantation(incantation){
        return incantation.toUpperCase() + '!';
    };

    performTrick() {
        this.showStopperCounter++;
        this.confidencePercentage += 10;
        if (this.favoriteAccessory === 'cape') {
            return 'PULL DOVE FROM SLEEVE';
        } else if (this.favoriteAccessory === 'top hat'){
            return 'PULL RABBIT FROM TOP HAT';
        }
    };

    performShowStopper(){
        if (this.showStopperCounter < 10) {
            return 'Oh no, this trick is not ready!';
        } else if (!this.assistant){
            return 'Oh no, this trick is not ready!';
        } else {
            return 'WOW! The magician totally just sawed that person in half!'
        }
    }




}

module.exports = Magician;