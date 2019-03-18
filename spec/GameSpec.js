describe('game', function() {
    it('gutter game', function() {
        g = new Game();
        for (i = 0; i < 20; i++) {
            g.roll(0)
        }
        expect(g.score()).toEqual(0);
    })
});