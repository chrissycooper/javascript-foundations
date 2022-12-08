class Dragon {
    constructor(name, rider){
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.hungerLevel = 0;
    }

    greet(){
        return `Hi, ${this.rider}!`
    }

    eat(){
        this.hungerLevel += 1;
        if(this.hungerLevel >= 3){
            this.hungry = false;
        }
    }
}

module.exports = Dragon;
