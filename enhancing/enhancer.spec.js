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
})