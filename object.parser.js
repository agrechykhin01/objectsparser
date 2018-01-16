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

        for(let key of Object.keys(object)){
            if((keys.includes(key)) && (!foundKeys.includes(key)))
                foundKeys.push(key);
            else if((!foundKeys.includes(key)) && (!notFoundKeys.includes(key)))
                notFoundKeys.push(key);        
        }

        parsedObject.foundKeys = foundKeys;
        parsedObject.notFoundKeys = notFoundKeys;
    }

    if (values !== undefined){
        let foundValues = [];
        let notFoundValues = [];

        for(let value of Object.values(object)){
            if((values.includes(value)) && (!foundValues.includes(value)))
                foundValues.push(value);
            else if((!foundValues.includes(value)) && (!notFoundValues.includes(value)))
                notFoundValues.push(value);        
        }
        
        parsedObject.foundValues = foundValues;
        parsedObject.notFoundValues = notFoundValues;
    }

    return parsedObject;
};

module.exports = objectsParser;