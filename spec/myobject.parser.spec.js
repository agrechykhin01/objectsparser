const objectParser = require('../object.parser');

describe(`#objectParser.`, () => {
    const object = {
        one: 123,
        2: 'two',
        'some sting key': 'some string value',
    };

    const keys = ['2', 'some sting key'];
    const values = [123, 'some string value'];


    describe(`should return object with the `, () => {
        let result;

        beforeAll(() => result = objectParser());

        ['foundKeys', 'notFoundKeys', 'foundValues', 'notFoundValues'].forEach((value) => {
            it(`'${value}' key of type array`, () => {
                expect(Array.isArray(result[value])).toBe(true);
            });
        });
    });

    it(`should return array of found keys in response`, async () => {
        expect(objectParser(object, keys).foundKeys)
            .toEqual(keys);
    });

    it(`should return array of not found keys in response`, async () => {
        const expectedArray = ['one'];

        expect(objectParser(object, keys).notFoundKeys)
            .toEqual(expectedArray);
    });

    it(`should return array found values in response`, async () => {
        expect(objectParser(object, undefined, values).foundValues)
            .toEqual(values);
    });

    it(`should return array of not found values in response`, async () => {
        const expectedArray = ['two'];

        expect(objectParser(object, undefined, values).notFoundValues)
            .toEqual(expectedArray);
    });
});