const enhancer = require('./enhancer.js');
// test away!

//items = { name, durability, enhancement }
//enhancement : 0 <= 20
//durability : 0 <= 100

//enhance succeeds, enhancement++. If enhancement = 20, the level isn't changed. Durability is unchanged

//enhancement fails: if < 15, the durability decreases by 5.
//if the enhancement >= 15, the durability -= 10
//if the enhancement > 16, the enhancement level --


describe('enhancer.js', () => {
    describe('enhancer.repair()', () => {
        it('restores durability to 100', () => {
            expect(enhancer.repair({durability: 50}).durability).toBe(100);
            expect(enhancer.repair({durability: -50}).durability).toBe(100);
            expect(enhancer.repair({durability: 100}).durability).toBe(100);
            expect(enhancer.repair({durability: 0})).toEqual({durability: 100});
        })
    })
    describe('enhancer.succeed()', () => {
        it('increases item enhancement if the level is lower than 20', () => {
            expect(enhancer.succeed({enhancement: 10}).enhancement).toBe(11);
            expect(enhancer.succeed({enhancement: 19}).enhancement).toBe(20);
            expect(enhancer.succeed({enhancement: 1}).enhancement).toBe(2);
            expect(enhancer.succeed({enhancement: 19, durability: 15})).toEqual({enhancement: 20, durability: 15});
        })
    })
    describe('enhancer.fail()', () => {
        it('a failed enhancement. If enhancement (ENH) < 15, durability (DUR) loses 5 points. If ENH >= 15, DUR loses 10 points, and in addition, if ENH > 16, ENH loses 1 point.', () => {
            expect()
        })
    }) 
})