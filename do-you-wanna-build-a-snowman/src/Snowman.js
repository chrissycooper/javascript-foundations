class Snowman {
    constructor(snowmanObj) {
        this.carrots = snowmanObj.carrots;
        this.coal = snowmanObj.coal;
        this.buttons = snowmanObj.buttons;
        this.snowballs = snowmanObj.snowballs;
        this.magicHat = false;
    }

    canWearMagicHat(){
        if (this.coal > 1 && this.buttons > 4 && this.carrots > 0 && this.snowballs > 2) {
            this.magicHat = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Snowman;