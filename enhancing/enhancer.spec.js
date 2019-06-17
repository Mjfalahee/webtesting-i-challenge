const enhancer = require('./enhancer.js');
// test away!

//items = { name, durability, enhancement }
//enhancement : 0 <= 20
//durability : 0 <= 100

// succeed() enhance succeeds, enhancement++. If enhancement = 20, the level isn't changed. Durability is unchanged

//fail () enhancement fails: if < 15, the durability decreases by 5.
//if the enhancement >= 15, the durability -= 10
//if the enhancement > 16, the enhancement level --


describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(enhancer.repair({durability: 50}).durability).toBe(100);
            expect(enhancer.repair({durability: -50}).durability).toBe(100);
            expect(enhancer.repair({durability: 100}).durability).toBe(100);
            expect(enhancer.repair({durability: 0})).toEqual({durability: 100});
        })
    })
    describe('succeed()', () => {
        it('increases item enhancement if the level is lower than 20', () => {
            expect(enhancer.succeed({enhancement: 10}).enhancement).toBe(11);
            expect(enhancer.succeed({enhancement: 19}).enhancement).toBe(20);
            expect(enhancer.succeed({enhancement: 1}).enhancement).toBe(2);
            expect(enhancer.succeed({enhancement: 19, durability: 15})).toEqual({enhancement: 20, durability: 15});
        })
    })
    describe('fail()', () => {
        it('a failed enhancement. If enhancement (ENH) < 15, durability (DUR) loses 5 points.', () => {
            expect(enhancer.fail({enhancement: 10, durability: 50})).toEqual({enhancement: 10, durability: 45});
        })
        it('If ENH >= 15, DUR loses 10 points', () => {
            expect(enhancer.fail({enhancement: 15, durability: 50})).toEqual({enhancement: 15, durability: 40});
        })
        it('and in addition, if ENH > 16, ENH loses 1 point.', () => {
            expect(enhancer.fail({enhancement: 16, durability: 100})).toEqual({enhancement: 15, durability: 90});
        })
    }) 
    describe('get()', () => {
        it('An item with enh = 0 is unchanged', () => {
            expect(enhancer.get({name: 'Iron Sword'}).name).toBe('Iron Sword');
            expect(enhancer.get({name: 'Wooden Staff'}).name).toBe('Wooden Staff');
        })
        it('If item has enh > 0, the name is return with [+enh] name in place of name', () => {
            expect(enhancer.get({name: 'Iron Sword', enhancement: 1})).toEqual({name: '[+1] Iron Sword', enhancement: 1});
            expect(enhancer.get({name: 'Iron Sword', enhancement: 15})).toEqual({name: '[+15] Iron Sword', enhancement: 15});
        })
    })
})

//stretch get()
//if enh = 0, name = name
//if enh > 0, name = [+n] name