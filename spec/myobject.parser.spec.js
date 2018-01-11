const parser = require('../object.parser');

describe(`Parsing the object`, () => {
    describe(`#object`, () => {
        const objectsParser = parser;    
        
        let testObject = {
            singleWordKey: 'Single word key',
            'key with several words': {},
            [2 + 3]: 'Computed key',
            [Symbol.for('mySymbol')]: true
        };

        it(`case: undefined keys`, () => { 
            expectedResult = [];          
            expect(objectsParser({}, undefined, 1).foundKeys)
                .toEqual(expectedResult, 'If keys are undefined - empty array should be returned for found and not found entries.');
        })
    });    
});