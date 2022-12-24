class Centaur {
    constructor(centaurObj) {
        this.name = centaurObj.name;
        this.breed = centaurObj.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.crankyCount = 0;
    };

    shootBow() {
        if (this.cranky || this.layingDown) {
            return 'NO!';
        } else {
            this.crankyCount += 1;
            if (this.crankyCount >= 3) {
                this.cranky = true;
            }
            return "Twang!!!";
        }
    };

    run() {
        if (this.cranky || this.layingDown) {
            return 'NO!';
        } else {
            this.crankyCount += 1;
            if (this.crankyCount >= 3) {
                this.cranky = true;
            }
            return 'Clop clop clop clop!!!';
        }
    };

    sleep() {
        if (this.standing) {
            return 'NO!';
        } else {
            this.cranky = false;
            return 'ZZZZ';
        }
    };

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        if (this.standing) {
            this.cranky = false;
        } else {
            return 'Not while I\'m laying down!';
        }
        
    }

    
};

module.exports = Centaur;