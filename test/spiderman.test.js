const Spiderman = require("../app/Spiderman");

describe("UT for spiderman class", () => {

    test('Case 1 create Spiderman object', () => {

        // objt to test
        const adrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "sony")

        // Data to evaluate
        expect(adrewGarfield.name).toBe("Spiderman Sony")
        expect(adrewGarfield.age).toBe(31)
        expect(adrewGarfield.actor).toBe("Andrew Garfield")
        expect(adrewGarfield.movies).toBe(2)
        expect(adrewGarfield.studio).toBe("sony")

    });

    test('Case 2 method getInfo()', () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });

})