class SkatePark {
    constructor(SPObj) {
        this.name = SPObj.name;
        this.yearFounded = SPObj.year;
        this.style = SPObj.type;
        this.features = SPObj.features;
        this.isPrivate = SPObj.isPrivate || false;
        this.cost = SPObj.price || 0;
        this.occupants = [];
    }

    admit(skaterObj) {
        if (!this.isPrivate && this.occupants.length < 3) {
            this.occupants.push(skaterObj);
            return `Welcome to the free ${this.name} Skatepark!`
        } else if (this.isPrivate && this.occupants.length < 3) {
            if (skaterObj.money >= this.cost){
                skaterObj.money -= this.cost;
                this.occupants.push(skaterObj);
                return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
            } else if (skaterObj.money < this.cost) {
                return `Sorry, you don't have enough money.`;
            }
        } else {
            console.log(this.occupants);
            return 'Sorry, we are at max capacity. Thank you for understanding.'
        }
    }
};

module.exports = SkatePark;