class Golfer {
    constructor(golferObj) {
        this.name = golferObj.name;
        this.handicap = golferObj.handicap;
        this.frustration = 0;
        this.confidence = 0;
    }

    calculateAvg(par) {
        var avg = par + this.handicap;
        return `I usually shoot a ${avg} on average.`
    }

    playRound(golfCourseObj) {
        if (golfCourseObj.difficulty === 'moderate') {
            this.frustration += 100;
        } else if (golfCourseObj.difficulty === 'hard') {
            this.frustration += 500;
        }
    }

    hitTheRange() {
        this.confidence += 10;
    }

    marvel(golfCourseObj) {
        return `I love the ${golfCourseObj.features[0]} and ${golfCourseObj.features[1]} on this course!`;
    }

    whatYaShoot(num) {
        if(num > 0) {
            this.frustration += 20;
        } else if (num === 0) {
            this.frustration -= 10;
        } else if (num < 0) {
            this.frustration = 0;
        };

        if(this.frustration === 0) {
            return 'I AM THE GREATEST GOLFER ALIVE!';
        } else if (this.frustration === 10) {
            return 'Booyah!';
        } else if (this.frustration >= 20) {
            return 'Doh!';
        };
    }


}

module.exports = Golfer;
