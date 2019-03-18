describe('game', function() {
  beforeEach(function(){
    g = new Game();
  })

  rollMany = function(n, pins){
    for (i = 0; i < n; i++) {
        g.roll(pins)
    }
  }
    it('gutter game', function() {
        rollMany(20, 0)
        expect(g.score()).toEqual(0);
    })

    it('1 pin per roll', function() {
      rollMany(20, 1)
      expect(g.score()).toEqual(20)
    })

    it('Has a score 16 after a spare and a 3', function(){
      g.roll(5)
      g.roll(5)
      g.roll(3)
      rollMany(17,0)
      expect(g.score()).toEqual(16)
    })
});
