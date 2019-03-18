function Game() {
  this.total = 0
  this.rolls = []
  this.currentroll = 0
};

Game.prototype.roll = function(pins) {
  // this.total += pins
  this.rolls.push(pins)
}

Game.prototype.score = function() {
  for (i = 0; i < this.rolls.length; i+=2){
    if (this.rolls[i] + this.rolls[i+1] == 10){
      console.log(i)

      console.log("roll 1 ="+ this.rolls[i])
      console.log("roll 2 =" + this.rolls[i+1])
      console.log("roll 3 =" + this.rolls[i+2])
      this.total += this.rolls[i+2]
      console.log("total = "+ this.total)
    }
    this.total += this.rolls[i] + this.rolls[i+1]
    console.log("total = "+ this.total)
  }
    return this.total
}
