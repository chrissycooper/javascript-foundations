class GolfCourse {
    constructor(name, difficulty, openings, featuresArr) {
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = featuresArr; 
        this.openings = openings;
        this.currentlyPlaying = [];
    }

    checkInGroup(groupArr) {
        if (groupArr.length <= this.openings) {
            this.openings -= groupArr.length;
            for (var i = 0; i < groupArr.length; i++) {
                this.currentlyPlaying.unshift(groupArr[i].name);
            } 
            return 'You\'re checked in. Have fun!';
        } else {
            return 'Sorry, we are currently booked! Please come back later.'
        }

    }

}

module.exports = GolfCourse;
