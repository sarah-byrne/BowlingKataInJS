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
      this.total += this.rolls[i+2]
    }
    this.total += this.rolls[i] + this.rolls[i+1]
  }
    return this.total
}
