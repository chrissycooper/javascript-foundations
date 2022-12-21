class Skater {
    constructor(skaterObj) {
        this.name = skaterObj.name;
        this.skill = skaterObj.skill;
        this.tricks = skaterObj.tricks;
        this.money = skaterObj.cash;
        this.frustration = 0;
    }

    practice(trick) {
        if (!this.tricks[trick] && this.frustration >= 2) {
            this.tricks[trick] = true;
            this.frustration = 0;
            return `I just learned to ${trick}!!!`
        } else if (!this.tricks[trick]) {
          this.frustration +=1;
        }
    }
};

module.exports = Skater;