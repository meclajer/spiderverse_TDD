const Spiderman = require("../app/Spiderman");

describe("UT for spiderman class", () => {

    test('Case 1 Dummy', () => {

        // objt to test
        const adrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "sony")

        // Data to evaluate
        expect(adrewGarfield.name).toBe("Spiderman Sony")
        expect(adrewGarfield.age).toBe(31)
        expect(adrewGarfield.actor).toBe("Andrew Garfield")
        expect(adrewGarfield.movies).toBe(2)
        expect(adrewGarfield.studio).toBe("sony")

    });

})