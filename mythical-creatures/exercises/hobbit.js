class Hobbit {
    constructor(obj) {
        this.name = obj.name;
        this.age = 0;
        this.adult = false;
        this.old = false;
        this.hasRing = false;
    };

    celebrateBirthday() {
        this.age += 1;
        if (this.age <= 32){
            this.adult = false;
            this.old = false;
        } else if (this.age >= 101) {
            this.adult = true;
            this.old = true;
        } else {
            this.adult = true;
            this.old = false;
        }
    };

    getRing() {
        console.log(this.name)
        if(this.name === "Frodo"){
            this.hasRing = true;
            return 'Here is the ring!';
        } else {
            return 'You can\'t have it!';
        }
    }
};

module.exports = Hobbit;