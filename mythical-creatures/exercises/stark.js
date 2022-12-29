const Direwolf = require("./direwolf");

class Stark {
    constructor(starkObj) {
        this.name = starkObj.name;
        this.location = starkObj.area || "Winterfell";
        this.safe = false;
    };

    sayHouseWords() {
        if (this.safe) {
            return 'The North Remembers';
        } else {
            return 'Winter is Coming';
        }
    };

    callDirewolf(name, home) {
        var theirDirewolf = new Direwolf(name, this.location);
        theirDirewolf.protect(this);
        return theirDirewolf;
    }
};

module.exports = Stark;