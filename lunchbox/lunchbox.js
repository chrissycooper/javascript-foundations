class LunchBox {
  constructor(lunchBox){
    this.owner = lunchBox.owner;
    this.material = lunchBox.madeOf;
    this.shape = lunchBox.shape;
    this.color = lunchBox.color;
    this.snacks = [];
  }

  acquireSnack(snack){
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks(){
   const healthySnacks = this.snacks.reduce((acc, snack) => {
      if (snack.checkForHealthy()) {
        acc.push(snack.type);
      }
      return acc;
    }, []);

    return healthySnacks;
  }
}

module.exports = LunchBox;
