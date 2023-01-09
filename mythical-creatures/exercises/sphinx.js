class Sphinx {
  constructor() {
    this.riddles = [];
		this.heroesEaten = 0;
		this.correctAnswers = 0;
  }

	collectRiddle(riddleObj) {
		if (this.riddles.length < 3) {
			this.riddles.push(riddleObj);
		} else {
			this.riddles.shift()
			this.riddles.push(riddleObj);
		}
	}

	attemptAnswer(guess){
		for (var i = 0; i < this.riddles.length; i++) {
			if (this.riddles[i].answer === guess && this.riddles.length > 1){
				this.riddles.splice(i, 1);
				this.correctAnswers += 1;	
				return 'That wasn\'t that hard, I bet you don\'t get the next one'
			} else if(this.riddles[i].answer === guess && this.riddles.length === 1){
				this.riddles.splice(i,1);
				return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
			}
		}
		this.heroesEaten++;
	}
}

module.exports = Sphinx;