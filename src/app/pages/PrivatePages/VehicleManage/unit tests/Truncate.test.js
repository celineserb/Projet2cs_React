import Truncate from '../helpers/Truncate'

describe("truncate function", () => {
    test("it should truncate a string", () => {
        const input = { text: "Asmaa is a big source of pressure", num: 8 };
        const output = "Asmaa is...";

        expect(Truncate(input.text, input.num)).toEqual(output);
    });

    test("it should return the same string", () => {
        const input = { text: "She's also a love", num: 100 };
        const output = "She's also a love";

        expect(Truncate(input.text, input.num)).toEqual(output);

    })

})
