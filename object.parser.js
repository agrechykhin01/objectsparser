const objectsParser = (...params) =>{
    const object = params[0];
    const keys = params[1];
    const values = params[2];  

    let parsedObject = {
        foundValues: [], 
        foundKeys: [], 
        notFoundKeys: [], 
        notFoundValues: [],
    }

    if (keys !== undefined){
        let foundKeys = [];
        let notFoundKeys = [];

        for(let key of keys){
            if((key in object) && (!foundKeys.includes(key)))
                foundKeys.push(key);
            else if((!foundKeys.includes(key)) && (!notFoundKeys.includes(key)))
                notFoundKeys.push(key);        
        }

        parsedObject.foundKeys = foundKeys;
        parsedObject.notFoundKeys = notFoundKeys;
    }

    return parsedObject;
};

console.log(objectsParser({'test':2, 3:'news'}, [3, 'ddd', 3, 3, 3, 3, 3, 3, 3, 'test', 5, 1 + 2, 'rrrrr', 342], 1));

module.exports = objectsParser;